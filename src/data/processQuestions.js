// Guided processing questions — 4–5 per emotion.
// Psychological arc: REGULATE → GROUND → NAME → UNDERSTAND → NEED → ACT
//
// Question types:
//   'text'    — textarea. Open, meaningful reflection.
//   'scale'   — 1–5 tap buttons. Requires scaleMin and scaleMax labels.
//   'breathe' — animated breathing exercise. Auto-advances when done.
//
// Optional metadata:
//   instruction — therapist-style context note shown before the input
//   label       — stage label (REGULATE / GROUND / NAME / UNDERSTAND / NEED / ACT)
//   somatic     — true → filtered out when body awareness is disabled in settings
//   optional    — true → filtered out in Quick depth mode
//
// Design principles:
//   - Breathing (type:'breathe') for activating emotions (fear, anger) — regulated first
//   - Somatic grounding before meaning-making in heavy emotions
//   - Scale questions where subjective calibration is clinically meaningful
//   - Facts before interpretation in anger (CBT sequence)
//   - No shame amplification in remorse — self-compassion framing throughout
//   - Sadness paced deliberately slowly; no rushing to action
//   - Positive emotions (joy, trust, optimism) focus on anchoring and extending

export const PROCESS_QUESTIONS = {

  joy: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically brought this on — the moment, the person, or the realisation that started it?',
      placeholder: 'Be as concrete as you can. The more specific, the better it anchors…',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where and how do you feel this in your body right now?',
      placeholder: 'Lightness, warmth, openness, energy — where is it sitting?',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What does this moment tell you about what genuinely matters to you — what need or value is being met?',
      placeholder: 'Joy always points at something that\'s deeply yours…',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How fully are you letting yourself feel this right now?',
      scaleMin: 'Holding back or numbing',
      scaleMax: 'Fully in it',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'How do you want to honor or extend this feeling — is there something you want to do, say, or create because of it?',
      placeholder: 'Even something very small counts here…',
    },
  ],

  trust: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically built this feeling — what did someone do, say, or consistently show you over time?',
      placeholder: 'Try to name a concrete moment or pattern, not just a general impression…',
    },
    {
      label: 'GROUND',
      type: 'scale',
      q: 'How settled and solid does this trust feel right now?',
      scaleMin: 'Tentative, still testing',
      scaleMax: 'Deep and unshakeable',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What does this connection or trust mean to you — what would be genuinely different in your life without it?',
      placeholder: 'This is about the value of it, not just a description…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Has this trust ever been tested or repaired? What does that tell you about its depth?',
      placeholder: 'Trust that\'s survived difficulty is different from trust that hasn\'t been tested yet…',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Is there something you want to express or do because of this feeling — something to offer, protect, or deepen?',
      placeholder: 'Trust tends to ask something of us in return…',
    },
  ],

  fear: [
    {
      label: 'REGULATE',
      type: 'breathe',
      q: 'Fear activates the nervous system before anything else. A few slow breaths will help bring your thinking mind back online.',
      instruction: 'This takes about a minute. You can skip it if you prefer.',
      cycles: 3,
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where in your body are you feeling this right now?',
      placeholder: 'Tightness in the chest, throat constriction, stomach knot, shallow breath, tension in the shoulders…',
      somatic: true,
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What specific outcome are you most afraid of? Name it as concretely as you can.',
      placeholder: 'Vague fear is harder to work with. The more specific you are, the more workable it becomes…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What is this fear trying to protect — a value, a person, a relationship, a version of yourself?',
      placeholder: 'Fear always guards something. What is yours guarding?',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How much of this situation feels within your control right now?',
      scaleMin: 'Nothing feels in my hands',
      scaleMax: 'Mostly within my control',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What is one small thing you could do — or one person you could contact — that would help you feel even slightly less alone in this?',
      placeholder: 'It doesn\'t have to solve the fear. Just one small move toward safety or support…',
    },
  ],

  surprise: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What caught you off guard — describe what happened and what you had expected instead.',
      placeholder: 'What assumption or prediction was disrupted?',
    },
    {
      label: 'GROUND',
      type: 'scale',
      q: 'Now that the initial reaction is settling — is this surprise landing as more positive, negative, or neutral?',
      scaleMin: 'Upsetting or difficult',
      scaleMax: 'Welcome and good',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Has this changed how you see the situation, or someone in it — even slightly?',
      placeholder: 'What\'s different in your understanding now compared to before?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What does this unexpected development ask of you — a response, a decision, or simply time to absorb it?',
      placeholder: 'Surprise often arrives with an implicit question: now what?',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What do you want to do with this new information — respond, investigate, let it settle, or let it go?',
      placeholder: 'You get to decide the pace here…',
    },
  ],

  sadness: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What is the loss or absence at the center of this feeling — what is missing, gone, or no longer the same?',
      placeholder: 'Take your time. Sadness doesn\'t need to be rushed…',
      instruction: 'There\'s no pressure to resolve anything here. Sadness wants to be acknowledged, not fixed.',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What did that person, place, time, or thing mean to you — what made it matter so much?',
      placeholder: 'This is about the value of what was lost, not just a description of the loss…',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where do you carry this right now in your body?',
      placeholder: 'Heaviness in the chest, ache in the throat, emptiness in the gut, weight in the limbs…',
      somatic: true,
    },
    {
      label: 'NEED',
      type: 'text',
      q: 'What do you need most right now — space, company, to cry, to be heard, rest, or something else?',
      placeholder: 'There\'s no wrong answer. What does this version of you actually need?',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Is there something unsaid — to yourself or to someone else — that wants to come out?',
      placeholder: 'It doesn\'t have to be sent or spoken. Just writing it here is enough…',
      optional: true,
    },
  ],

  disgust: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically triggered this — name it as precisely as you can, not just generally.',
      placeholder: 'Vague disgust is harder to act on than named disgust…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What value, standard, or belief does this violate — what do you believe should be true that isn\'t?',
      placeholder: 'Disgust is always a signal that something crossed a line. What is that line?',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How strongly does this feel like a real value violation versus a personal preference?',
      scaleMin: 'More of a preference',
      scaleMax: 'Deep value or principle',
      optional: true,
    },
    {
      label: 'NEED',
      type: 'text',
      q: 'What does this feeling seem to be asking for — distance, action, a direct conversation, or something else?',
      placeholder: 'What would feel like the right response to this signal?',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What would need to be different for this to feel resolved — what would "clean again" actually look like?',
      placeholder: 'Even if that resolution is imperfect or partial…',
    },
  ],

  anger: [
    {
      label: 'REGULATE',
      type: 'breathe',
      q: 'Anger floods the system with adrenaline and narrows thinking. A few slow breaths change the chemistry before anything else.',
      instruction: 'If you\'d rather not, skip this and go straight to the questions.',
      cycles: 3,
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'Describe what happened — just the facts of the situation, without interpretation yet.',
      placeholder: 'What was said or done, by whom, in what context? Just the observable events first…',
      instruction: 'Start with what actually happened before moving to what it meant. Separating facts from interpretation is one of the most useful things you can do with anger.',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Now the interpretation layer: what was violated — a right, a value, an expectation, or your dignity?',
      placeholder: 'Anger always defends something. What is yours defending?',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How proportionate does this anger feel to the actual situation?',
      scaleMin: 'I may be amplifying',
      scaleMax: 'Completely warranted',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where is this anger sitting in your body right now?',
      placeholder: 'Jaw, fists, chest, face, stomach — where is the heat?',
      somatic: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What do you need before you respond — time, a physical outlet, a trusted ear, or a clearer plan?',
      placeholder: 'Acting from peak anger almost always makes things worse. What does this version of you need first?',
    },
  ],

  anticipation: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically are you moving toward — what outcome are you hoping for or building to?',
      placeholder: 'Name it as concretely as you can. Vague anticipation is more anxious than specific anticipation…',
    },
    {
      label: 'GROUND',
      type: 'scale',
      q: 'How would you describe the feeling right now — closer to excited, or closer to anxious?',
      scaleMin: 'Anxious, dreading it',
      scaleMax: 'Excited, can\'t wait',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What feels most uncertain about this — what part don\'t you have figured out yet?',
      placeholder: 'Naming the specific uncertainty tends to make it smaller…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'If the realistic worst case happened — what would that actually look like, and could you handle it?',
      placeholder: 'Naming it usually takes away some of its power…',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What is one concrete thing you could do right now to feel more ready or more at ease?',
      placeholder: 'One action, one preparation, one conversation — not everything, just one thing…',
    },
  ],

  // ── Blends ────────────────────────────────────────────────────────────────

  love: [
    {
      label: 'NAME',
      type: 'text',
      q: 'Who or what is this love directed toward?',
      placeholder: 'A person, a place, a pursuit, a community, a version of yourself…',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'How does it feel to hold this right now — in your chest, your throat, your gut?',
      placeholder: 'Warm, aching, full, fragile, steady, expansive, tender, overwhelming…',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How fully have you expressed this — does the person or thing you love know the depth of it?',
      scaleMin: 'It\'s entirely inside me',
      scaleMax: 'Fully known and expressed',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is there anything unsaid or unexpressed — something that wants to be given or acknowledged?',
      placeholder: 'It doesn\'t have to be sent. Writing it here is its own act of expression…',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What does this love ask of you right now — to show up, to say something, to let go a little, to protect it?',
      placeholder: 'Love tends to come with an implicit call to action…',
      optional: true,
    },
  ],

  submission: [
    {
      label: 'NAME',
      type: 'text',
      q: 'Describe the situation — what are you deferring to, or going along with?',
      placeholder: 'Who or what, and in what context?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this something you are genuinely choosing, or does it feel more like compliance under pressure?',
      placeholder: 'There\'s a real difference between chosen deference and compelled yielding — which is this?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What are you giving up by deferring, and what are you hoping to gain or preserve?',
      placeholder: 'Both sides honestly — what\'s the trade-off?',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'How do you actually feel about this — relieved, resentful, resigned, at peace, or something more complicated?',
      placeholder: 'Don\'t edit this. Just name what\'s honestly present…',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What would you need — an acknowledgment, a time limit, a condition, a clearer boundary — to feel genuinely okay with this?',
      placeholder: 'Even if that thing feels unlikely, naming it matters…',
      optional: true,
    },
  ],

  awe: [
    {
      label: 'GROUND',
      type: 'text',
      q: 'Describe what you were experiencing when this arose — what were you seeing, hearing, or moving through?',
      placeholder: 'Be as sensory and specific as possible. Stay close to the moment itself…',
      instruction: 'Awe is one of the most fleeting emotions. Stay close to the experience before explaining it.',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'How has it shifted your perspective — even slightly? What looks different now compared to before?',
      placeholder: 'Awe reliably changes scale. What has it made smaller, or bigger?',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What does this feeling remind you matters most — what does it seem to be pointing you toward?',
      placeholder: 'Awe is often a compass. What direction is yours pointing?',
    },
  ],

  disapproval: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What fell short — describe the gap between what you expected and what actually happened.',
      placeholder: 'Be specific rather than general. The more concrete, the more workable…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Were these expectations clearly communicated — or were they held privately, assumed to be understood?',
      placeholder: 'This matters because it shapes what\'s fair to ask for next…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What would you say directly to the person or situation if you could — without filtering for politeness?',
      placeholder: 'Don\'t edit this. What needs to be said, said plainly?',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What do you want to happen now — a direct conversation, a clearer boundary, time, or distance?',
      placeholder: 'What would genuinely help here, not just feel satisfying in the moment?',
    },
  ],

  remorse: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What happened — describe your role in it as honestly as you can, without overstating or understating.',
      placeholder: 'No more and no less than your honest account. This is just for you…',
      instruction: 'Remorse is different from shame. Shame says "I am bad." Remorse says "I did something I wish I hadn\'t." This process is about the action, not your worth as a person.',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Who was affected, and what do you think it was like for them — from their point of view, not yours?',
      placeholder: 'Their experience, as best as you can imagine it…',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How much of what happened do you feel genuinely responsible for?',
      scaleMin: 'Very little is mine to own',
      scaleMax: 'This is entirely on me',
    },
    {
      label: 'NEED',
      type: 'text',
      q: 'What does this moment ask of you — an apology, a concrete repair, a changed pattern, or something else?',
      placeholder: 'Not punishment. What would actually make things better?',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What would genuinely forgiving yourself look like — not erasing what happened, but integrating it and moving forward?',
      placeholder: 'Carrying this lightly is possible without pretending it didn\'t happen…',
      optional: true,
    },
  ],

  contempt: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically has fallen so far short in your view — name it precisely, not globally.',
      placeholder: 'Contempt that\'s diffuse and general is harder to examine than contempt with a specific object…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Underneath this — is there hurt, disappointment, or fear that the contempt might be covering over?',
      placeholder: 'Contempt is often a secondary emotion. What might be beneath it?',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How fixed does this view feel right now?',
      scaleMin: 'I could be persuaded otherwise',
      scaleMax: 'Nothing would shift it',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What is this contempt costing you — in the relationship, in your own peace, or in how you see yourself?',
      placeholder: 'Contempt protects, but it also closes things off. What is it closing?',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What do you actually want here — distance, understanding, change, or something else?',
      placeholder: 'You get to decide this. What\'s the honest answer?',
    },
  ],

  aggressiveness: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What are you fighting for — or against? Name the goal, the injustice, or the obstacle driving this energy.',
      placeholder: 'The clearer the target, the more useful the force…',
    },
    {
      label: 'GROUND',
      type: 'scale',
      q: 'How controlled does this energy feel right now?',
      scaleMin: 'I could act in ways I\'d regret',
      scaleMax: 'Focused and purposeful',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this drive serving you right now, or is it starting to work against you — be honest.',
      placeholder: 'Both answers are valid. This is just about accuracy, not judgment…',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Where can this energy go right now in a way you\'d actually be proud of?',
      placeholder: 'Physical action, a direct conversation, a concrete goal, a creative outlet…',
    },
  ],

  optimism: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically are you hopeful about — name it as concretely as possible.',
      placeholder: 'Vague hope is fragile. Named hope has traction. What exactly is the thing you believe in?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What evidence — however small — supports this hope? What have you seen, done, or felt that makes it plausible?',
      placeholder: 'Not certainty, just plausibility. What makes this more than wishful thinking?',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How grounded does this optimism feel — more evidence-based confidence, or more hope against the odds?',
      scaleMin: 'More wishful than grounded',
      scaleMax: 'Built on solid evidence',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What are you prepared to do if this hope doesn\'t pan out — what\'s your honest contingency?',
      placeholder: 'Genuine optimism can hold a backup plan. Does yours?',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What\'s one concrete action you could take this week that moves toward what you\'re hoping for?',
      placeholder: 'Even the smallest step creates forward motion. What is it?',
    },
  ],

  default: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What brought this feeling on — something that happened, or something that built up slowly?',
      placeholder: 'Start wherever feels right…',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where do you feel this in your body right now?',
      placeholder: 'Chest, throat, stomach, shoulders, jaw, limbs…',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What does this feeling seem to be telling you — about a need, a value, or something that matters?',
      placeholder: 'Emotions are signals. What is this one pointing at?',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What does this feeling need from you right now?',
      placeholder: 'To be expressed, acted on, rested with, shared, released…',
      optional: true,
    },
  ],

  // ── Outer emotion dedicated sets ─────────────────────────────────────────
  // Only for outer emotions whose parent core's arc is meaningfully wrong.
  // Keys are outer emotion names lowercased.
  // EmotionDetail passes outerName.toLowerCase() as emotionId when available.

  grateful: [
    {
      label: 'NAME',
      type: 'text',
      q: 'Who or what are you feeling grateful for right now — be specific.',
      placeholder: 'A person, an act of kindness, a circumstance, something you nearly lost…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What did that person or thing provide you — what specifically made it matter?',
      placeholder: 'Gratitude deepens when you understand exactly what was given…',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How fully have you acknowledged this — to yourself or to the person involved?',
      scaleMin: 'Felt privately, unexpressed',
      scaleMax: 'Fully acknowledged and shared',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Is there something you want to say or do to express this — to them, or to mark it for yourself?',
      placeholder: 'Even an unsent note or a quiet acknowledgment can complete the feeling…',
    },
  ],

  worried: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically are you worrying about — name the scenario you keep returning to.',
      placeholder: 'Worry often circles the same fear on repeat. What is the actual scenario?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What is the realistic probability that this happens — and what is your worry-brain telling you it is?',
      placeholder: 'Worry routinely overstates likelihood. What does a realistic estimate look like?',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How much of what you\'re worrying about is actually within your influence?',
      scaleMin: 'Almost nothing I can do',
      scaleMax: 'Mostly in my hands',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'What is true and stable right now — what can you name as certain in this moment?',
      placeholder: 'Worry lives in the future. What is actually present and okay right now?',
      somatic: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What is one small thing you could do right now that would give you any sense of agency over this?',
      placeholder: 'Even a tiny action converts anxious energy into forward motion…',
    },
  ],

  lonely: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What kind of connection is feeling absent right now — someone to talk to, to be seen by, to belong with?',
      placeholder: 'Loneliness is specific. What particular form of connection do you need?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'When did this loneliness start — is there a specific moment or situation you can trace it to?',
      placeholder: 'Was it gradual, or did something shift it recently?',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where do you feel this in your body?',
      placeholder: 'Hollowness, chest ache, heaviness, a particular kind of quiet…',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How strongly does the thought "no one would want to hear from me" feel true right now?',
      scaleMin: 'Not really true',
      scaleMax: 'Feels completely true',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Is there one person — even someone you haven\'t spoken to in a while — you could reach toward right now?',
      placeholder: 'Loneliness consistently underestimates how welcome your contact would be…',
    },
  ],

  frustrated: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What is the specific goal or outcome that keeps getting blocked?',
      placeholder: 'Frustration is about blocked forward motion. What are you trying to reach that you can\'t?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What is doing the blocking — a person, a circumstance, your own capacity, or something unclear?',
      placeholder: 'Naming the obstacle precisely usually makes it more workable…',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How much is this obstacle within your power to change?',
      scaleMin: 'Completely outside my control',
      scaleMax: 'I could actually shift this',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where is this frustration sitting in your body right now — where is the stuck energy?',
      placeholder: 'Tension, heat, tightness, restlessness…',
      somatic: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Is the best next move to try harder, try differently, or step back entirely — what does your honest instinct say?',
      placeholder: 'Frustration sometimes calls for persistence, and sometimes calls for a different approach entirely…',
    },
  ],

  inspired: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What sparked this — what did you encounter, experience, or realise that lit this up?',
      placeholder: 'Inspiration has a specific trigger. What was it?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What does this feel like it\'s calling you to do, make, or pursue?',
      placeholder: 'Inspiration usually arrives with an implicit direction. What is yours pointing at?',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How urgent does this feel — is it asking for action now, or is it a slower, longer pull?',
      scaleMin: 'A slow, gentle pull',
      scaleMax: 'I need to act on this immediately',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What is the smallest possible first step you could take in the next 24 hours to honor this?',
      placeholder: 'Inspiration is fragile. Acting even slightly, quickly, keeps it alive…',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What would get in the way of acting on this — what usually derails you when inspiration arrives?',
      placeholder: 'Naming the obstacle in advance is one of the most reliable ways to get past it…',
      optional: true,
    },
  ],
};
