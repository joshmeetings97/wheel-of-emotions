// Claude API integration — used only if VITE_ANTHROPIC_API_KEY is set.
// Falls back to the local keyword-based detector from emotions.js automatically.

const API_URL = 'https://api.anthropic.com/v1/messages';

function getHeaders(apiKey) {
  return {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
    'anthropic-version': '2023-06-01',
    'anthropic-dangerous-direct-browser-access': 'true',
  };
}

export async function analyzeWithClaude(journalEntry) {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

  if (!apiKey || apiKey === 'your_key_here') {
    throw new Error('NO_API_KEY');
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: getHeaders(apiKey),
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 384,
      system: `You are an expert emotion analyst using Plutchik's Wheel of Emotions.
Analyze the journal entry and identify 1–3 distinct emotions present. Return ONLY valid JSON — no prose, no markdown, no explanation.

Required format:
{"emotions": [{"emotion": "<name>", "intensity": "<mild|moderate|intense>", "reason": "<1 sentence explaining why this specific emotion is present, referencing the user's words>"}, ...], "insight": "<1-2 sentence overall insight>"}

List emotions from most to least prominent. Include a second or third emotion only when clearly present.
The reason field must reference specific words or phrases from the entry to justify each emotion.

CRITICAL: Every emotion name in your response must be copied EXACTLY (same spelling, same capitalisation) from the list below — no synonyms, no noun forms, no variations. "Curious" not "Curiosity". "Inspired" not "Inspiration". When the person describes something not on the list, reason carefully about the underlying emotional state using Plutchik's model, then pick the closest match. Do not default lazily to Sadness — think about what is actually happening emotionally.

Mapping guidance for common cases:
- Fatigue, tiredness, exhaustion, burnout → Boredom (low energy, disengagement) or Pensiveness (if tinged with reflection/loss)
- Relief, calm, peace, contentment → Serenity
- Anxiety, stress, worry, nervousness → Fear or Apprehension
- Excitement, enthusiasm → Anticipation or Vigilance
- Not looking forward to, dreading, not keen on, mild aversion → Apprehension or Reluctant (NOT Boredom — these are negative anticipation, not disengagement)
- Frustration, irritation → Annoyance
- Shame, guilt, regret → Remorse
- Confusion → Distraction or Surprise
- Pride, proud, accomplishment, achievement → Proud (NOT Joy, NOT Admiration — "Proud" is its own valid emotion)
- Gratitude, thankfulness → Grateful
- Loneliness → Sadness (genuine loss of connection)
- Overwhelm → Fear (threat response) or Disgust (aversion to situation)
- Boredom is ONLY for genuine low-energy disengagement (nothing to do, unstimulated, monotony) — do NOT use it for mild dread, reluctance, or negative anticipation

Valid emotion names (use only these):
Joy, Serenity, Ecstasy, Trust, Acceptance, Admiration, Fear, Apprehension, Terror,
Surprise, Distraction, Amazement, Sadness, Pensiveness, Grief, Disgust, Boredom, Loathing,
Anger, Annoyance, Rage, Anticipation, Interest, Vigilance,
Love, Submission, Awe, Disapproval, Remorse, Contempt, Aggressiveness, Optimism,
Cheerful, Playful, Peaceful, Grateful, Proud,
Faithful, Assured, Comfortable, Valued, Secure,
Worried, Nervous, Hesitant, Timid, Overwhelmed,
Puzzled, Confused, Unsettled, Startled, Stunned,
Gloomy, Lonely, Forlorn, Disappointed, Heartbroken,
Displeased, Offended, Withdrawn, Reluctant, Repulsed,
Cross, Peeved, Frustrated, Impatient, Resentful,
Eager, Hopeful, Curious, Inspired, Excited`,
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

// Called from ProcessEmotion — takes Q&A pairs and returns structured reflection + actions.
// `pairs` is an array of { q: string, a: string } (answers already scrubbed of PII).
// Returns { reflection: string, actions: [{timeframe, action}], followUp: string }
export async function reflectWithClaude(emotionName, pairs) {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
  if (!apiKey || apiKey === 'your_key_here') throw new Error('NO_API_KEY');

  const qa = pairs
    .filter(p => p.a.trim())
    .map(p => `Q: ${p.q}\nA: ${p.a}`)
    .join('\n\n');

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: getHeaders(apiKey),
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 600,
      system: `You are a compassionate, perceptive emotional processing guide.
The user has been working through a feeling of ${emotionName} by answering reflective questions.
Return ONLY valid JSON — no prose, no markdown, no explanation — in this exact format:
{
  "reflection": "<2–3 warm, personal sentences: (1) validate what they shared without repeating it verbatim, (2) name something honest or courageous in their responses, (3) offer one grounded insight specific to what they wrote>",
  "actions": [
    {"timeframe": "right now", "action": "<one specific thing completable in under 5 minutes, drawn directly from what they wrote>"},
    {"timeframe": "today",     "action": "<one achievable thing today, specific to their situation>"},
    {"timeframe": "this week", "action": "<one slightly larger step or practice to build on this>"}
  ],
  "followUp": "<a single reflective question to sit with over the next few days>"
}

Rules for actions:
- Reference specific details from their answers — not generic advice like "practice self-care"
- Each must be concrete and doable (a real action, not a vague intention)
- "right now" must be completable in under 5 minutes
- Write directly to the person using "you"
- If they mentioned a specific person, goal, or situation, reference it`,
      messages: [{ role: 'user', content: qa }],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `API error ${response.status}`);
  }

  const data = await response.json();
  const text = data.content[0]?.text || '';

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) parsed = JSON.parse(match[0]);
    else throw new Error('Unexpected response format from API');
  }

  return {
    reflection: parsed.reflection || '',
    actions:    Array.isArray(parsed.actions) ? parsed.actions : [],
    followUp:   parsed.followUp || '',
  };
}
