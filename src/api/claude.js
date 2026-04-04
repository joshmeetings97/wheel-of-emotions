// Claude API integration — used only if VITE_ANTHROPIC_API_KEY is set.
// Falls back to the local keyword-based detector from emotions.js automatically.

const API_URL = 'https://api.anthropic.com/v1/messages';

export async function analyzeWithClaude(journalEntry) {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

  if (!apiKey || apiKey === 'your_key_here') {
    throw new Error('NO_API_KEY');
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 256,
      system: `You are an expert emotion analyst using Plutchik's Wheel of Emotions.
Analyze the journal entry and return ONLY valid JSON — no prose, no markdown, no explanation.

Required format:
{"emotion": "<name>", "intensity": "<mild|moderate|intense>", "insight": "<1-2 sentence insight>"}

The emotion must be one of these exact names:
Joy, Serenity, Ecstasy, Trust, Acceptance, Admiration, Fear, Apprehension, Terror,
Surprise, Distraction, Amazement, Sadness, Pensiveness, Grief, Disgust, Boredom, Loathing,
Anger, Annoyance, Rage, Anticipation, Interest, Vigilance,
Love, Submission, Awe, Disapproval, Remorse, Contempt, Aggressiveness, Optimism`,
      messages: [{ role: 'user', content: journalEntry }],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `API error ${response.status}`);
  }

  const data = await response.json();
  const text = data.content[0]?.text || '';

  // Parse JSON — try raw then extract with regex
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*?\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error('Unexpected response format from API');
  }
}
