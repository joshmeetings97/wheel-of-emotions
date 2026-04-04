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
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 384,
      system: `You are an expert emotion analyst using Plutchik's Wheel of Emotions.
Analyze the journal entry and identify 1–3 distinct emotions present. Return ONLY valid JSON — no prose, no markdown, no explanation.

Required format:
{"emotions": [{"emotion": "<name>", "intensity": "<mild|moderate|intense>", "reason": "<1 sentence explaining why this specific emotion is present, referencing the user's words>"}, ...], "insight": "<1-2 sentence overall insight>"}

List emotions from most to least prominent. Include a second or third emotion only when clearly present.
The reason field must reference specific words or phrases from the entry to justify each emotion.

CRITICAL: Every emotion name must be from the exact list below — no exceptions. When the person describes something not on the list, reason carefully about the underlying emotional state using Plutchik's model, then pick the closest match. Do not default lazily to Sadness — think about what is actually happening emotionally.

Mapping guidance for common cases:
- Fatigue, tiredness, exhaustion, burnout → Boredom (low energy, disengagement) or Pensiveness (if tinged with reflection/loss)
- Relief, calm, peace, contentment → Serenity
- Anxiety, stress, worry, nervousness → Fear or Apprehension
- Excitement, enthusiasm → Anticipation or Vigilance
- Frustration, irritation → Annoyance
- Shame, guilt, regret → Remorse
- Confusion → Distraction or Surprise
- Pride, gratitude, inspiration → Joy or Admiration
- Loneliness → Sadness (genuine loss of connection)
- Overwhelm → Fear (threat response) or Disgust (aversion to situation)

Valid emotion names (use only these):
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
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) parsed = JSON.parse(match[0]);
    else throw new Error('Unexpected response format from API');
  }

  // Normalise to { emotions: [...], insight } regardless of old single-emotion format
  if (parsed.emotions) return parsed;
  if (parsed.emotion) {
    return {
      emotions: [{ emotion: parsed.emotion, intensity: parsed.intensity, reason: parsed.insight }],
      insight: parsed.insight,
    };
  }
  throw new Error('Unexpected response format from API');
}
