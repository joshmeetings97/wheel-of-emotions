// Plutchik\'s Wheel of Emotions — complete data
// Arrangement: 8 core emotions, each spanning 40°, centered at canonical angles.
// 8 blend zones (5° each) sit between adjacent sectors.
// Angle 0° = right (3 o\'clock), 90° = bottom, -90° = top (12 o\'clock).
// Joy is at the top (-90°), then clockwise: Trust, Fear, Surprise, Sadness, Disgust, Anger, Anticipation.

// Ring colors: [ring1_inner, ring2, ring3, ring4_outer] — darkest to lightest
// Text is dark (#1e293b) on rings 3–4, white on rings 1–2

export const CORE_EMOTIONS = [
  {
    id: 'joy',
    name: 'Joy',
    centerAngle: -90,
    // Ring colors inner→outer (ring1 most intense, ring4 palest)
    ringColors: ['#8FA918', '#BDD23F', '#D9E897', '#EFF5C8'],
    outer: [
      {
        name: 'Cheerful',
        description: 'Cheerfulness is a light, easy good mood — a natural buoyancy that makes smiling and laughing come without effort. It is joy in its most accessible, everyday form: small pleasures landing well, interactions feeling warm, and the world feeling generally friendly.',
        feelTips: [
          'Let cheerfulness be simple — it doesn\'t need a reason. Resist the urge to interrogate it.',
          'Share it freely: a warm comment, a smile, a small act of kindness amplifies the feeling.',
          'Notice the small things sustaining it — good weather, a song, a kind word — and appreciate them consciously.',
        ],
        remedyTips: [
          'Lower the bar: a short walk, a favourite drink, or five minutes of music you love can shift the mood.',
          'Don\'t force it — manufactured cheerfulness is exhausting; small, genuine mood-lifting actions work better.',
          'Check whether tiredness or hunger is suppressing your natural lightness; the basics matter more than we admit.',
        ],
      },
      {
        name: 'Playful',
        description: 'Playfulness is joy in its most active, unguarded form — the impulse to explore, improvise, and engage without agenda or outcome. It surfaces when you feel safe enough to shed self-consciousness and simply be in the moment. This lighthearted energy is deeply restorative and creative.',
        feelTips: [
          'Honor it by doing something with no goal: doodle, make silly sounds, move your body freely.',
          'Invite others in — playfulness is contagious and deepens connection when shared.',
          'Notice what triggered it; environments where you feel safe and un-judged are worth returning to.',
        ],
        remedyTips: [
          'If playfulness feels blocked, reduce performance pressure — you can\'t play when you\'re being evaluated.',
          'Start physical: running, dancing, or even fidgeting can unlock a playful mode.',
          'Spend time with children or animals, who model unselfconscious play naturally.',
        ],
      },
      {
        name: 'Peaceful',
        description: 'Peacefulness is joy distilled to its quietest form — a deep settledness that asks nothing of the moment. It is the experience of being fully okay with where you are, free from urgency, resistance, or want. Many find it more nourishing and sustainable than intense happiness.',
        feelTips: [
          'Protect pockets of silence in your day — even ten minutes without input can sustain this state.',
          'Pair peacefulness with gentle activity: slow walks, unhurried meals, or light reading.',
          'Allow yourself to simply be present without producing, fixing, or improving anything.',
        ],
        remedyTips: [
          'If peace feels inaccessible, identify the primary source of inner noise and address just that one thing.',
          'Brief nature exposure — even a few minutes outside — reliably reduces cortisol and invites calm.',
          'A body scan meditation helps locate and release the physical tension that blocks peacefulness.',
        ],
      },
      {
        name: 'Grateful',
        description: 'Gratitude is a warm recognition that something good arrived partly through others — and that you want to acknowledge it. It softens self-reliance, opens warmth toward people, and has one of the strongest links to sustained well-being of any emotional state.',
        feelTips: [
          'Name the specific thing you\'re grateful for, not just a vague sense — specificity intensifies the feeling.',
          'Express it directly to the person involved when you can; it deepens the emotion for both of you.',
          'Let gratitude be a complete thought without turning it into a task or obligation.',
        ],
        remedyTips: [
          'Try a "three specific things" practice each evening — vague gratitude lists wear thin; specific moments don\'t.',
          'When you feel ungrateful or resentful, work with the difficult feeling first before reaching for gratitude.',
          'Find something genuinely small if large gratitude feels inaccessible: a warm drink, a functioning body, today\'s light.',
        ],
      },
      {
        name: 'Proud',
        description: 'Pride is the joy of self-recognition — the warm, expansive feeling that arises when you have done something that reflects who you are or who you are becoming. It is distinct from arrogance: healthy pride is specific, grounded in real effort or growth, and often carries a quiet satisfaction rather than a need for external validation.',
        feelTips: [
          'Let yourself feel it fully — pride is often the first emotion we deflect or minimise, even when it\'s earned.',
          'Name what specifically you did that generated this: the decision, the effort, the courage, the growth.',
          'Pride has a social dimension — share it with someone who will genuinely celebrate with you rather than deflect.',
        ],
        remedyTips: [
          'If pride feels inaccessible, look for small wins: completing something, resisting an old pattern, showing up.',
          'Write down one thing you handled well in the past week — even mundane competence deserves acknowledgment.',
          'Distinguish between pride-in-performance and pride-in-character; the latter is more durable and worth cultivating.',
        ],
      },
    ],
    colors: {
      intense: '#8FA918',
      core:    '#BDD23F',
      mild:    '#D9E897',
    },
    intensities: [
      {
        level: 'intense',
        name: 'Ecstasy',
        description: 'Ecstasy is the peak of joyful experience — an overwhelming sense of bliss that transcends everyday happiness. It often arises during profound personal moments, spiritual experiences, or intense physical pleasure. This heightened state can feel almost euphoric and is difficult to sustain for long periods.',
        feelTips: [
          'Immerse yourself fully in peak experiences — music, nature, dance — without self-monitoring.',
          'Practice gratitude journaling to amplify your capacity for blissful moments.',
          'Engage in activities that produce "flow" states: art, sport, or creative work.',
        ],
        remedyTips: [
          'Ground yourself through deep, slow breathing to bring intensity back to baseline.',
          'Write about what triggered the ecstasy to integrate the experience consciously.',
          'Rest — peak emotional states are energetically demanding; honor the need to recover.',
        ],
      },
      {
        level: 'moderate',
        name: 'Joy',
        description: 'Joy is a warm, radiant feeling of happiness and well-being that arises when life feels aligned with your values and desires. Unlike fleeting pleasure, joy carries a sense of meaning and connection. It can be quiet or exuberant, but always carries a sense of rightness.',
        feelTips: [
          'Connect with people you love and allow yourself to be fully present with them.',
          'Spend time in nature or environments that feel aesthetically beautiful to you.',
          'Do one thing today purely for the pleasure of it — no productivity required.',
        ],
        remedyTips: [
          'If joy feels absent, trace back to when it last appeared and identify what changed.',
          'Reconnect with childhood activities or hobbies that once brought simple delight.',
          'Limit inputs that dull joy (doomscrolling, overwork) and prioritize play.',
        ],
      },
      {
        level: 'mild',
        name: 'Serenity',
        description: 'Serenity is a gentle, peaceful contentment — a quiet joy that requires nothing more than the present moment. It is the emotional state of being at ease with oneself and the world, free from urgency or lack. Many find it more sustainable than intense joy.',
        feelTips: [
          'Create stillness: sit quietly for five minutes without screens or tasks.',
          'Practice slow, mindful walks paying attention to sensory details around you.',
          'Spend time with calming rituals — tea, reading, gentle stretching.',
        ],
        remedyTips: [
          'If serenity feels impossible, identify the core source of inner noise and address it.',
          'Try a body scan meditation to release physical tension holding anxiety in place.',
          'Reduce stimulation — quiet, dim light, and slower pace invite serenity back.',
        ],
      },
    ],
    related: ['love', 'optimism', 'trust', 'anticipation'],
  },
  {
    id: 'trust',
    name: 'Trust',
    centerAngle: -45,
    ringColors: ['#2D7F34', '#52A95A', '#92C896', '#C8E6CA'],
    outer: [
      {
        name: 'Faithful',
        description: 'Faithfulness is trust expressed through consistent, committed presence over time. It is the emotional experience of loyalty — choosing to show up, honour a bond, and remain reliable even when it costs something. Faithfulness transforms trust from a feeling into an action.',
        feelTips: [
          'Reflect on the people or commitments you feel genuinely faithful to — acknowledge that bond explicitly.',
          'Let faithfulness be a source of identity and stability: "I am someone who shows up."',
          'Express your faithfulness directly to those it is directed toward — they may not know how deeply you feel it.',
        ],
        remedyTips: [
          'If faithfulness feels strained, check whether the relationship or commitment is still genuinely reciprocal.',
          'Distinguish between healthy loyalty and obligation that no longer serves either person.',
          'Renew the meaning behind the commitment rather than just performing it — faith without feeling becomes hollow.',
        ],
      },
      {
        name: 'Assured',
        description: 'Assurance is trust that has matured into a quiet, stable certainty. Unlike early trust which requires effort, assurance is settled — you no longer need to monitor, test, or doubt. It is the emotional experience of knowing something or someone is reliably safe.',
        feelTips: [
          'Let yourself rest in assurance without waiting for it to be disproven — not everything needs vigilance.',
          'Name what you feel assured about; making it conscious deepens its stabilising effect.',
          'Use assurance as a foundation for risk-taking in other areas — it frees energy you\'d otherwise spend on defending.',
        ],
        remedyTips: [
          'If assurance has become complacency, a gentle, honest check-in with the relationship or situation is healthy.',
          'Assurance lost suddenly can feel like betrayal; give yourself time to process before drawing conclusions.',
          'Rebuild through small, consistent interactions rather than large gestures.',
        ],
      },
      {
        name: 'Comfortable',
        description: 'Comfort in the context of trust is settled ease with a person, place, or situation — you don\'t need to be on guard or perform. It\'s a low-key but foundational feeling: the sense that you can just be yourself without managing impressions or preparing for threat.',
        feelTips: [
          'Notice the cues that create comfort — they reveal what safety looks like for you specifically.',
          'Comfort is best felt slowly; rushing it, especially with people, undermines it.',
          'Let yourself relax physically when comfort arises — it deepens the felt sense.',
        ],
        remedyTips: [
          'If comfort feels absent, identify what specific thing would need to be true for you to feel safe enough to relax.',
          'Small, consistent experiences of safety build comfort more reliably than big reassurances.',
          'It\'s worth asking whether the environment warrants discomfort — sometimes the absence of comfort is accurate information.',
        ],
      },
      {
        name: 'Valued',
        description: 'Feeling valued is the gentle recognition that others see your worth — not just your outputs, but you. It arises when contributions are acknowledged, when opinions are sought, or simply when presence is welcomed. It is one of the most fundamental needs in human connection.',
        feelTips: [
          'Receive it fully — resist deflecting compliments or minimizing what you contributed.',
          'Notice which relationships and environments tend to produce this feeling; invest in them.',
          'Let the feeling settle rather than immediately looking for confirmation it\'s true.',
        ],
        remedyTips: [
          'If you feel undervalued, first check whether you\'ve clearly communicated your contributions and needs.',
          'Chronic under-valuation in a relationship is important information — it may be telling you about fit, not your worth.',
          'Build your sense of value from within as well: keep a record of what you\'ve made, solved, or improved.',
        ],
      },
      {
        name: 'Secure',
        description: 'Security is the felt sense of being genuinely safe — held by a relationship, environment, or inner steadiness that won\'t suddenly disappear. Unlike Comfortable (which is ease without particular awareness) or Assured (which is self-confidence), Secure is specifically the absence of threat: the knowledge that you can be yourself without consequence, that things won\'t collapse, and that you are protected. It is one of the most foundational human needs.',
        feelTips: [
          'Name what specifically is providing this security — the person, the pattern of behaviour, the environment. Specificity makes it real rather than fragile.',
          'Let yourself rest in it without scanning for what might disturb it. Security can become its own vigilance if you can\'t stop checking it\'s still there.',
          'Notice what you do differently when you feel secure — this reveals the shape of your natural, unguarded self.',
        ],
        remedyTips: [
          'If security feels chronically absent, identify whether it\'s relational, environmental, or inner security that\'s missing — each has different remedies.',
          'Consistent small experiences of safety build security more reliably than large reassurances. Predictability matters.',
          'Therapy focused on attachment patterns can be deeply useful when the sense of security was disrupted early in life.',
        ],
      },
    ],
    colors: {
      intense: '#2D7F34',
      core:    '#52A95A',
      mild:    '#92C896',
    },
    intensities: [
      {
        level: 'intense',
        name: 'Admiration',
        description: 'Admiration is deep, reverent trust and respect directed toward a person, idea, or quality that you perceive as genuinely excellent. It goes beyond casual appreciation — it inspires and elevates you. Admiration can motivate growth by showing you what you aspire toward.',
        feelTips: [
          'Study the people or works you admire deeply — immersion amplifies the feeling.',
          'Write a letter (sent or unsent) expressing specifically what you admire and why.',
          'Let admiration become aspirational: identify one quality you want to cultivate yourself.',
        ],
        remedyTips: [
          'If admiration has tipped into unhealthy idealization, identify the person\'s full humanity.',
          'Channel intense admiration into action — create, study, or practice what inspires you.',
          'Notice if comparison is creeping in; redirect to gratitude for what you already embody.',
        ],
      },
      {
        level: 'moderate',
        name: 'Trust',
        description: 'Trust is the confident belief in the reliability, integrity, or ability of someone or something. It allows you to feel safe enough to be vulnerable, to collaborate, and to let down your guard. Trust is built slowly through consistent experience and can be one of the most nourishing emotions.',
        feelTips: [
          'Identify people in your life who have earned your trust and invest more deeply in those relationships.',
          'Take small, deliberate risks with someone new to begin building reciprocal trust.',
          'Practice self-trust: follow through on one commitment to yourself this week.',
        ],
        remedyTips: [
          'If trust feels broken, name the specific breach before working on repair.',
          'Distinguish between warranted caution and generalized distrust; the latter harms you.',
          'Work with a therapist or trusted friend to explore whether past wounds are coloring present situations.',
        ],
      },
      {
        level: 'mild',
        name: 'Acceptance',
        description: 'Acceptance is an open, non-resistant acknowledgment of something or someone as they are. It does not mean approval — it means releasing the struggle against reality. Acceptance is the first step toward both peace and meaningful change, because it starts from truth.',
        feelTips: [
          'Practice saying "this is what is" without immediately trying to fix or judge it.',
          'Use mindfulness to observe thoughts and feelings without clinging or pushing away.',
          'Engage in loving-kindness meditation to soften resistance toward people you judge.',
        ],
        remedyTips: [
          'If acceptance feels like giving up, separate it from approval — you can accept and still act.',
          'Journal on what you\'re refusing to accept and why; often it reveals an underlying fear.',
          'Start with small acceptances (traffic, weather) to build the muscle for bigger ones.',
        ],
      },
    ],
    related: ['love', 'submission', 'joy', 'fear'],
  },
  {
    id: 'fear',
    name: 'Fear',
    centerAngle: 0,
    ringColors: ['#1A6E6A', '#3A9990', '#82C4BE', '#C4E6E4'],
    outer: [
      {
        name: 'Worried',
        description: 'Worry is a low-grade, persistent form of fear focused on uncertain future outcomes. Unlike acute fear it tends to be cognitive rather than physical — a circling of possible problems. In small doses it is productive, prompting preparation; when chronic, it becomes a significant drain on well-being.',
        feelTips: [
          'Use worry as a prompt to act: write down what you\'re worried about and identify one concrete step.',
          'Give worry a contained time slot — 15 minutes of deliberate "worry time" — then redirect attention.',
          'Share your worry with someone you trust; verbalising it often reduces its weight significantly.',
        ],
        remedyTips: [
          'Distinguish what is within your control from what is not; release energy spent on the latter.',
          'Ask: "What is the realistic outcome?" — worry typically catastrophises well beyond likely reality.',
          'Physical activity is one of the most effective ways to interrupt chronic worry loops.',
        ],
      },
      {
        name: 'Nervous',
        description: 'Nervousness is anticipatory fear with a physical signature — the butterflies, the dry mouth, the tight chest before something that matters. It signals that you care about an outcome. At the right level it sharpens performance; too much tips into distress.',
        feelTips: [
          'Reframe nervousness as readiness: the same arousal that creates anxiety can fuel peak performance.',
          'Acknowledge it out loud — "I\'m nervous about this" — which activates the prefrontal cortex and calms the amygdala.',
          'Prepare thoroughly; nervousness often stems from a perceived gap in readiness.',
        ],
        remedyTips: [
          'Box breathing (4 counts in, hold 4, out 4, hold 4) reliably lowers physiological arousal within minutes.',
          'Warm up the body — a short walk or light stretch before a high-stakes moment reduces nervous tension.',
          'Remind yourself that nervousness is temporary and typically dissipates once the event begins.',
        ],
      },
      {
        name: 'Hesitant',
        description: 'Hesitation is a micro-pause at the threshold of action — a signal that some part of you needs more information, more readiness, or more permission before proceeding. It is the mildest form of fear: not enough to stop you, but enough to slow you. Often it is genuinely useful.',
        feelTips: [
          'Acknowledge the hesitation before pushing past it — it may contain important data about readiness or fit.',
          'Name specifically what you\'re hesitant about: the first step? The whole thing? One person\'s reaction?',
          'Sometimes holding the hesitation just a moment longer lets it resolve on its own.',
        ],
        remedyTips: [
          'Break the action into smaller pieces; hesitation often dissolves when the first step is tiny enough.',
          'Distinguish between "I need more information" hesitation and "I\'m avoiding discomfort" hesitation — they call for different responses.',
          'Talk it through with someone you trust; verbalizing hesitation often clarifies what\'s actually holding you back.',
        ],
      },
      {
        name: 'Timid',
        description: 'Timidity is a mild inhibition — a tendency to hold back, speak softly, or shrink in the face of the unfamiliar or the imposing. It is often rooted in awareness of social evaluation and a desire not to be exposed. While it can feel limiting, it is also a form of sensitivity and attunement.',
        feelTips: [
          'Timidity is not weakness — it often reflects genuine awareness of social context. Don\'t pathologize it.',
          'Breathe slowly and let yourself take up slightly more space physically; posture shifts can shift the feeling.',
          'Notice that timidity is context-dependent — you are likely bold in areas where you feel competent.',
        ],
        remedyTips: [
          'Practice the smallest version of the bold action first; each small success rewires the link between exposure and safety.',
          'Distinguish between timidity that is protecting you from genuine threat and timidity that is limiting you unnecessarily.',
          'Find contexts where you naturally feel confident and use them as a reference point for who you can be.',
        ],
      },
      {
        name: 'Overwhelmed',
        description: 'Overwhelm is what happens when the demands on your attention, energy, or capacity feel greater than what you have available. It is fear without a single clear object — a generalised sense that everything is too much, too fast, or too big to manage. Unlike Worried (which has a specific scenario) or Nervous (which is anticipatory), overwhelm collapses the present moment under its own weight. It is one of the most common emotional states in modern life.',
        feelTips: [
          'Stop trying to process it all at once — overwhelm\'s central lie is that everything is equally urgent. Almost nothing is.',
          'Reduce input immediately: silence notifications, close tabs, leave the room. Even five minutes with just one thing begins to lift it.',
          'Write down everything that is overwhelming you — the act of externalizing it shrinks each item and makes the list finite.',
        ],
        remedyTips: [
          'Triage ruthlessly: sort everything into "today," "this week," and "later." Most things tolerate being moved later.',
          'Talk to someone — overwhelm thrives in isolation and diminishes remarkably quickly when verbalized.',
          'Check the basics: overwhelm is severely amplified by sleep deprivation, hunger, and dehydration.',
        ],
      },
    ],
    colors: {
      intense: '#1A6E6A',
      core:    '#3A9990',
      mild:    '#82C4BE',
    },
    intensities: [
      {
        level: 'intense',
        name: 'Terror',
        description: 'Terror is fear at its most extreme — a visceral, overwhelming response to perceived mortal danger or catastrophic threat. It activates the deepest survival systems, flooding the body with adrenaline and shutting down higher cognition. Terror can be paralyzing or can trigger explosive fight-or-flight action.',
        feelTips: [
          'Terror is rarely needed outside genuine life-threatening situations; in those, trust your instincts.',
          'In controlled therapeutic contexts (exposure therapy), you can safely approach terror-inducing stimuli.',
          'Acknowledge the protective function: terror exists because something signals extreme danger.',
        ],
        remedyTips: [
          'Ground yourself immediately: name 5 things you can see, 4 you can touch, 3 you can hear.',
          'Regulate breathing: inhale 4 counts, hold 4, exhale 6 — this activates the parasympathetic system.',
          'Seek professional support; chronic terror or PTSD requires specialized trauma treatment.',
        ],
      },
      {
        level: 'moderate',
        name: 'Fear',
        description: 'Fear is an adaptive emotional response to perceived threat or danger. It sharpens focus, prepares the body for action, and serves an essential protective purpose. While uncomfortable, fear is honest — it always points to something that feels important to protect.',
        feelTips: [
          'Use fear as information: ask "what am I trying to protect?" rather than eliminating it.',
          'Voluntary exposure to mildly feared situations (public speaking, heights) builds resilience.',
          'Acknowledge and name your fear out loud — this activates the prefrontal cortex and reduces amygdala activation.',
        ],
        remedyTips: [
          'Distinguish real threats from imagined ones; most fear is about anticipated futures, not present reality.',
          'Talk to someone you trust — verbalizing fear cuts its intensity significantly.',
          'Move your body: a brisk walk or shake metabolizes the adrenaline that fear produces.',
        ],
      },
      {
        level: 'mild',
        name: 'Apprehension',
        description: 'Apprehension is a low-level, diffuse unease about something uncertain or potentially threatening. It is milder than anxiety and often useful — it prompts careful preparation before important events. The challenge is distinguishing productive apprehension from unnecessary worry.',
        feelTips: [
          'Use apprehension as a cue to prepare: what can you do right now to address the concern?',
          'Write down what you\'re apprehensive about and rate the actual likelihood of the worst outcome.',
          'Share your apprehension with someone — often it diminishes simply by being heard.',
        ],
        remedyTips: [
          'Distinguish what you can and cannot control; focus your energy only on the former.',
          'Limit rumination time: give yourself 10 minutes to worry, then redirect with intention.',
          'Progressive muscle relaxation helps release the physical tension apprehension creates.',
        ],
      },
    ],
    related: ['submission', 'awe', 'trust', 'surprise'],
  },
  {
    id: 'surprise',
    name: 'Surprise',
    centerAngle: 45,
    ringColors: ['#1B7A9E', '#3AA5CD', '#82CCE8', '#C4E8F5'],
    outer: [
      {
        name: 'Puzzled',
        description: 'Puzzlement is mild surprise at something that doesn\'t quite add up — a gentle cognitive dissonance between what was expected and what appeared. It is the emotion of "that\'s odd" rather than shock, and it often serves as the first signal to look more carefully at something.',
        feelTips: [
          'Let puzzlement slow you down: it is often the first sign that something deserves more attention.',
          'Approach it with curiosity rather than frustration — something interesting may be waiting to be understood.',
          'Ask clarifying questions rather than filling in the gaps with assumptions.',
        ],
        remedyTips: [
          'If puzzlement has become nagging confusion, spend deliberate time gathering the missing information.',
          'Distinguish between things that are genuinely unclear and things you simply haven\'t examined carefully yet.',
          'Talk it through with someone — externalising a puzzle often reveals what you were missing.',
        ],
      },
      {
        name: 'Confused',
        description: 'Confusion is the cognitive experience of holding multiple possibilities or signals that don\'t yet resolve into meaning. It sits in the mild-surprise family: something has disrupted your expectations enough that you cannot immediately orient. It is uncomfortable, but it is also the state just before understanding.',
        feelTips: [
          'Allow confusion to be present without demanding it immediately resolve — rushing it often produces false clarity.',
          'Write down what specifically you\'re confused about; articulating the confusion often points directly at what\'s missing.',
          'Confusion in learning contexts is normal and productive — it means you\'re working at the edge of understanding.',
        ],
        remedyTips: [
          'Ask a specific question rather than stewing generally — confusion that can be named can be addressed.',
          'Break the unclear thing into smaller parts and orient to just one piece at a time.',
          'Talk it through with someone; confusion often clears faster in dialogue than in solo reflection.',
        ],
      },
      {
        name: 'Unsettled',
        description: 'Being unsettled is mild surprise combined with a vague discomfort — something unexpected has landed in a way that feels slightly off. It is subtler than alarm but more persistent than simple puzzlement. It often points to a value or expectation that was quietly disrupted.',
        feelTips: [
          'Sit with the feeling long enough to identify what specifically shifted — the discomfort holds information.',
          'Name what you expected versus what occurred; the gap often reveals an unspoken assumption.',
          'Don\'t rush to resolve or dismiss it — unsettled feelings that are ignored tend to resurface.',
        ],
        remedyTips: [
          'Grounding helps: name what is stable and known in your environment to re-establish a sense of baseline.',
          'If the feeling persists, journal about what the unexpected event means to you — why did it land that way?',
          'Speak to someone you trust; an outside perspective often clarifies quickly.',
        ],
      },
      {
        name: 'Startled',
        description: 'Being startled is a brief, involuntary jolt of attention caused by something sudden and unexpected. It is the most transient expression of surprise: an instinctive orienting response that fades quickly once the surprise is registered as safe. Most startles resolve within seconds.',
        feelTips: [
          'Let the wave pass — the physical sensation (racing heart, catch of breath) resolves quickly once the stimulus is processed as safe.',
          'Notice that the sharp initial sensation is not the emotion; it\'s the nervous system doing its job.',
          'There can be a moment of comedy in being startled — lean into it if the context allows.',
        ],
        remedyTips: [
          'If you\'re easily startled in a particular context, examine whether underlying anxiety is raising your baseline alertness.',
          'Familiar environments and predictable routines lower startle sensitivity; chaos and unpredictability raise them.',
          'Grounding practices (feet on the floor, slow breath) quickly reset the system after being startled.',
        ],
      },
      {
        name: 'Stunned',
        description: 'Being stunned is a deeper, more lingering form of surprise — the state of being stopped completely in your tracks by something you couldn\'t have anticipated. Unlike Startled (a reflexive physical jolt) or Unsettled (a diffuse unease), Stunned implies that normal processing has temporarily halted. You may feel speechless, blank, or momentarily unable to form a coherent response. It often precedes a significant emotional realisation.',
        feelTips: [
          'Give yourself permission to not respond immediately — stunned means your system needs a moment to catch up. Most situations allow more time than they seem to demand.',
          'Notice whether the stun is beginning to move toward something good (wonder, relief) or something difficult (shock, grief), and let that guide what you do next.',
          'Sit with the blankness briefly before trying to make sense of what happened.',
        ],
        remedyTips: [
          'Grounding helps bring you back: feel your feet on the floor, breathe slowly, name what you can see around you.',
          'If you need to respond before you\'ve processed, it\'s entirely reasonable to say "I need a moment" — or even "I\'ll come back to this."',
          'If the stun persists beyond a few hours, talk to someone about what happened — shock that doesn\'t settle often needs to be spoken.',
        ],
      },
    ],
    colors: {
      intense: '#1B7A9E',
      core:    '#3AA5CD',
      mild:    '#82CCE8',
    },
    intensities: [
      {
        level: 'intense',
        name: 'Amazement',
        description: 'Amazement is surprise elevated to wonder — a profound, almost reverential astonishment at something that exceeds all expectations. It temporarily suspends ordinary thought, leaving you open and receptive. Amazement is closely linked to awe and can be profoundly transformative.',
        feelTips: [
          'Seek out experiences that are genuinely beyond your current frame of reference.',
          'Approach familiar subjects with a beginner\'s mind — deep expertise can dull amazement.',
          'Spend time in nature at its most grand: ocean, mountains, starry sky.',
        ],
        remedyTips: [
          'If overstimulated by amazement, find a quiet space to process and integrate the experience.',
          'Write or draw what amazed you to anchor the insight before it fades.',
          'Allow time to return to baseline — amazement is intense and unsustainable as a constant state.',
        ],
      },
      {
        level: 'moderate',
        name: 'Surprise',
        description: 'Surprise is a brief, automatic response to something unexpected — neither positive nor negative in itself. It arrests ongoing behavior and reorients attention to evaluate the new information. Surprise is the emotion that most rapidly shifts cognitive focus, and its valence is determined by what follows it.',
        feelTips: [
          'Allow yourself to be genuinely surprised by disrupting routines and trying the unexpected.',
          'Welcome novel experiences even when they\'re initially disorienting.',
          'Notice pleasant surprises and let them land fully rather than immediately explaining them away.',
        ],
        remedyTips: [
          'If an unexpected event has unsettled you, give yourself time to process before responding.',
          'Name what about the surprise was unexpected — this helps re-establish cognitive stability.',
          'Return to your breath and body when surprise tips into distress.',
        ],
      },
      {
        level: 'mild',
        name: 'Distraction',
        description: 'Distraction in Plutchik\'s model refers to mild surprise — a gentle, low-grade shift in attention caused by something slightly unexpected. It is the emotional experience of noticing the novel without strong reactivity. Used well, it can signal a need for a mental reset; when chronic, it may point to avoidance or underlying restlessness.',
        feelTips: [
          'Let mild novelty be refreshing — follow small curiosities without needing them to lead anywhere.',
          'Use moments of distraction as signals to shift tasks or take a mental break.',
          'Notice what consistently captures your attention; it often reveals underlying interests.',
        ],
        remedyTips: [
          'If distraction is disrupting focus, create environmental cues for re-engagement (notifications off, single-task time blocks).',
          'Investigate whether distraction masks avoidance of something difficult.',
          'Brief mindfulness resets (2 min breathing) rebuild intentional attention.',
        ],
      },
    ],
    related: ['awe', 'disapproval', 'fear', 'sadness'],
  },
  {
    id: 'sadness',
    name: 'Sadness',
    centerAngle: 90,
    ringColors: ['#2E4DA0', '#5575C4', '#93ABE0', '#C8D4F2'],
    outer: [
      {
        name: 'Gloomy',
        description: 'Gloominess is a low, overcast emotional state — not the acute pain of sadness but a dull heaviness that mutes colour and enthusiasm. It can arrive without a clear cause, often tied to tiredness, lack of light, isolation, or a quiet accumulation of small disappointments.',
        feelTips: [
          'Acknowledge the gloom without trying to immediately fix it — it often lifts more quickly when not resisted.',
          'Gentle sensory inputs help: a warm drink, natural light, a familiar scent, or a piece of music.',
          'A short walk outside — even in grey weather — reliably shifts gloomy states through light and movement.',
        ],
        remedyTips: [
          'Check the basics: sleep, food, and hydration have an outsized effect on low-grade mood states.',
          'If gloominess is persistent and without clear cause, it may be worth discussing with a doctor.',
          'Small social contact — even a brief exchange — is disproportionately helpful against a gloomy mood.',
        ],
      },
      {
        name: 'Lonely',
        description: 'Loneliness is the ache of felt disconnection — a sense that the quality or quantity of meaningful contact in your life is below what you need. It is distinct from being alone: you can be lonely in a crowd or among people who only see you shallowly. It is one of the most common and quietly painful states.',
        feelTips: [
          'Name it plainly to yourself — "I am lonely" is easier to work with than a vague sense of emptiness.',
          'Reach toward low-pressure connection: a brief message to someone you\'ve been meaning to contact, or a public place with gentle social presence.',
          'Distinguish between wanting depth and wanting company — they require different responses.',
        ],
        remedyTips: [
          'Initiate contact, even when a voice says "no one wants to hear from me" — loneliness amplifies that voice and it is usually wrong.',
          'Build regular touchpoints: a weekly call, a standing gathering; consistent structure supports connection more than one-off efforts.',
          'Consider whether digital interaction is substituting for but not satisfying the need for real presence.',
        ],
      },
      {
        name: 'Forlorn',
        description: 'Forlornness is a gentle, resigned sadness — the feeling of being left behind, forgotten, or without a clear path forward. It carries a quality of quiet aloneness and longing. It is less sharp than grief but more hollow than simple sadness, often arriving when connection or purpose feels distant.',
        feelTips: [
          'Let yourself acknowledge the longing underneath — what is it that feels absent or far away?',
          'Reach toward a small point of warmth: a person, a memory, a piece of music that feels like company.',
          'Creative expression — writing, drawing, making something — can give forlornness a container and a voice.',
        ],
        remedyTips: [
          'Reach out to someone, even briefly — forlornness feeds on isolation and diminishes with contact.',
          'Identify one small thing that could reintroduce a sense of direction or purpose, however modest.',
          'If forlornness is chronic, explore whether loneliness or lack of meaning is its root and address that directly.',
        ],
      },
      {
        name: 'Disappointed',
        description: 'Disappointment is the gap between expectation and outcome — the deflation that comes when something you were hoping for doesn\'t arrive the way you imagined. It is a mild-sadness state: there is loss here, but usually a proportionate one. Its intensity is often a direct measure of how much you cared.',
        feelTips: [
          'Acknowledge it rather than immediately minimizing it — "it\'s fine" before it\'s actually fine skips a real feeling.',
          'Locate exactly what you were hoping for; clarity about the expectation helps place the disappointment accurately.',
          'Let yourself be briefly sad about it — disappointment that\'s acknowledged moves through faster.',
        ],
        remedyTips: [
          'Check whether the expectation was communicated or only held internally — unexpressed expectations set up more disappointment.',
          'Some disappointments are information: this matters to me, I need to adjust how I\'m pursuing it.',
          'Allow time; the sting of disappointment fades more reliably than we expect in the moment.',
        ],
      },
      {
        name: 'Heartbroken',
        description: 'Heartbreak is grief specifically located in connection — the acute pain of losing or being failed by someone or something that mattered deeply. It is more piercing and more personal than general sadness because it is bound up with love and attachment. Heartbreak carries both the loss of the person or relationship and the loss of the future you had imagined alongside them. It is one of the most physically felt of all emotional experiences.',
        feelTips: [
          'Let the pain be the size it actually is — heartbreak is not proportionate to the length of time or the logic of the attachment. It is proportionate to how much you cared.',
          'Give yourself permission to grieve without a timeline. There is no "should be over it by now."',
          'Find one person who can hold this with you without trying to fix, reframe, or rush it.',
        ],
        remedyTips: [
          'Physical care matters more than usual when heartbroken: sleep, eat, move your body gently. The body carries grief and needs tending.',
          'Limit contact with reminders of the loss during the acute phase — not as permanent avoidance, but as self-protection while you stabilise.',
          'Heartbreak heals non-linearly. Setbacks, bad days, and sudden waves of grief are normal and do not mean you are not healing.',
        ],
      },
    ],
    colors: {
      intense: '#2E4DA0',
      core:    '#5575C4',
      mild:    '#93ABE0',
    },
    intensities: [
      {
        level: 'intense',
        name: 'Grief',
        description: 'Grief is the deepest form of sadness — the profound sorrow that accompanies significant loss. It is not a disorder but a necessary, healthy process of integrating absence. Grief honors what mattered; it is, at its core, a measure of love.',
        feelTips: [
          'Allow grief to move through you at its own pace; resist the urge to rush past it.',
          'Create rituals of remembrance — photographs, letters, dedicated spaces — to honor what was lost.',
          'Grief shared with others who loved what you lost is especially healing; seek community.',
        ],
        remedyTips: [
          'Grief should not be "fixed" — but if it becomes complicated grief or depression, seek professional support.',
          'Maintain basic physical care (sleep, food, movement) as grief can deplete the body.',
          'Write, draw, or speak to what was lost — expression prevents grief from becoming suppressed.',
        ],
      },
      {
        level: 'moderate',
        name: 'Sadness',
        description: 'Sadness is the emotional response to loss, disappointment, or unmet need. It slows us down, prompts reflection, and signals to others that we need support. Sadness is not the same as depression — it is a healthy, passing state that deepens self-understanding and empathy.',
        feelTips: [
          'Create space to feel sad without judgment — put on music that resonates, allow tears.',
          'Talk to someone you trust; sadness expressed in connection heals faster.',
          'Engage in gentle, nourishing activities: warm baths, comfort food, soft blankets.',
        ],
        remedyTips: [
          'If sadness is persistent and impacts daily functioning, it may be depression — speak to a doctor.',
          'Identify what specifically you\'re sad about; naming it gives it shape and makes it workable.',
          'Light exercise (even a 20-min walk) meaningfully lifts mood through endorphin release.',
        ],
      },
      {
        level: 'mild',
        name: 'Pensiveness',
        description: 'Pensiveness is a mild, contemplative sadness — a wistful, reflective mood often tinged with nostalgia or gentle melancholy. It is the emotional texture of watching rain, revisiting old memories, or sitting with life\'s impermanence. Pensiveness can be profoundly generative for creative and philosophical thinking.',
        feelTips: [
          'Lean into the reflective quality — write, draw, or walk in a contemplative environment.',
          'Listen to music that matches the mood; let it be a companion rather than something to escape.',
          'Use pensiveness to reconnect with what you value before the moment passes.',
        ],
        remedyTips: [
          'If pensiveness becomes rumination, redirect to present-moment sensory experiences.',
          'Call a friend for light connection to shift the internal atmosphere.',
          'Set a timer: give yourself 20 minutes of pensive reflection, then re-engage with life.',
        ],
      },
    ],
    related: ['remorse', 'disapproval', 'disgust', 'surprise'],
  },
  {
    id: 'disgust',
    name: 'Disgust',
    centerAngle: 135,
    ringColors: ['#7B3298', '#A459BD', '#C99DDA', '#E6CEF0'],
    outer: [
      {
        name: 'Displeased',
        description: 'Displeasure is mild disgust or dissatisfaction — a quiet sense that something fell short of what it should have been. It is not strong enough to be revulsion, but it clearly signals that a standard, preference, or value was not met. It is useful information about what you need and expect.',
        feelTips: [
          'Use displeasure as a clear signal: something here doesn\'t meet your standards — that is worth knowing.',
          'Express mild displeasure directly rather than suppressing it; small things addressed early prevent resentment.',
          'Distinguish between personal preference and genuine value violation — both matter, but differently.',
        ],
        remedyTips: [
          'Ask whether the situation is changeable; if so, take one small step toward the version you\'d prefer.',
          'If the displeasure involves someone\'s behaviour, raise it calmly and specifically rather than letting it simmer.',
          'Check whether your expectations were reasonable and clearly communicated — unexpressed expectations cause much displeasure.',
        ],
      },
      {
        name: 'Offended',
        description: 'Feeling offended is the socially-oriented form of mild disgust — the sense that something said, done, or implied crossed a line of respect, decency, or personal dignity. It combines a value signal with a social wound, and how it is handled often determines whether it damages or strengthens a relationship.',
        feelTips: [
          'Identify specifically what was crossed — the more clearly you can name it, the better you can address it.',
          'Allow yourself to feel the offence without immediately suppressing it or escalating it.',
          'Consider whether the offence was intentional — this matters greatly for how to respond.',
        ],
        remedyTips: [
          'Raise it directly with the person if the relationship matters: "That landed badly for me because..."',
          'Distinguish between being genuinely harmed and being challenged by something merely uncomfortable.',
          'If the offence was unintentional, a calm explanation usually resolves it; if intentional, a harder conversation is needed.',
        ],
      },
      {
        name: 'Withdrawn',
        description: 'Withdrawal is the mild aversion-based pulling back from something that feels distasteful, wrong, or simply incompatible with who you are. It is the body\'s quiet way of creating distance without open confrontation. Unlike disgust\'s more active rejection, withdrawal is passive and protective.',
        feelTips: [
          'Notice whether you\'re withdrawing from a specific thing or from everything — broad withdrawal is a signal worth attending to.',
          'Allow yourself to create distance without needing to justify it in the moment.',
          'Physical withdrawal often mirrors emotional withdrawal; let your body\'s instinct inform you.',
        ],
        remedyTips: [
          'Check whether the withdrawal is responding to something real or to a pattern from the past that no longer applies.',
          'If withdrawal has become chronic or automatic, explore what would need to change for re-engagement to feel possible.',
          'Sometimes withdrawal is the correct response — not every aversion needs to be overcome.',
        ],
      },
      {
        name: 'Reluctant',
        description: 'Reluctance is mild resistance — a dragging of the feet in the face of something you don\'t want to do or engage with. It is the softest form of disgust-aversion: not a hard no, but a sustained not-quite-yes. It often signals a values conflict, a depletion of energy, or a sense of poor fit.',
        feelTips: [
          'Investigate the reluctance rather than just powering through it — it may be telling you something important.',
          'Sometimes naming it to someone else ("I feel reluctant about this") is enough to clarify what it\'s about.',
          'Distinguish between reluctance from genuine aversion and reluctance from discomfort with starting — they call for different responses.',
        ],
        remedyTips: [
          'If you must proceed despite reluctance, identify one small aspect of the task that is genuinely manageable or worthwhile.',
          'If reluctance is chronic in a given area of life, it is worth examining whether the context itself needs to change.',
          'Avoid habitually overriding reluctance — it can numb an important signal over time.',
        ],
      },
      {
        name: 'Repulsed',
        description: 'Repulsion is disgust at its most visceral — a strong physical and psychological aversion involving an almost involuntary pulling away. Unlike Displeased (more cognitive) or Offended (more interpersonal), Repulsion is bodily: nausea, recoiling, skin crawling. It is the body\'s sharpest signal that something feels profoundly wrong or deeply incompatible at the level of physical self-protection, and it is worth listening to.',
        feelTips: [
          'Trust the signal — repulsion has survival value. Your body is telling you something is deeply incompatible with your values or your safety.',
          'Create immediate distance from the source. Repulsion does not respond well to sitting with it the way softer emotions do.',
          'Name what specifically triggered the physical reaction — is it sensory, moral, or interpersonal? The type determines the response.',
        ],
        remedyTips: [
          'Physical cleaning or transition rituals can genuinely help process repulsion — washing hands, changing clothes, or moving to a different space.',
          'If repulsion is directed at something you can\'t avoid (a work environment, a family situation), addressing the source directly is usually more effective than managing the reaction.',
          'If repulsion arises without a clear trigger, or if it is self-directed, it is worth exploring with a therapist.',
        ],
      },
    ],
    colors: {
      intense: '#7B3298',
      core:    '#A459BD',
      mild:    '#C99DDA',
    },
    intensities: [
      {
        level: 'intense',
        name: 'Loathing',
        description: 'Loathing is the most extreme form of disgust — a deep, visceral revulsion that may encompass moral contempt, physical repulsion, and a desire to completely reject or destroy something. It can be an important signal of profound value violations, but at its extreme can become destructive or dehumanizing.',
        feelTips: [
          'Loathing as a signal: ask what core value it is protecting or defending.',
          'Use it to clarify what you absolutely will not accept in your life or environment.',
          'Channeled constructively, loathing of injustice can fuel powerful advocacy.',
        ],
        remedyTips: [
          'Check whether loathing is proportionate or has been generalized inappropriately.',
          'Separate the object of loathing from the people around it — avoid dehumanization.',
          'Seek to understand what you loathe before acting on it; understanding usually softens the response.',
        ],
      },
      {
        level: 'moderate',
        name: 'Disgust',
        description: 'Disgust evolved to protect against contamination — physical and, later, social or moral. It creates an immediate aversion response. While primarily protective, disgust can also be inappropriately triggered by the unfamiliar or different, making it worth examining critically.',
        feelTips: [
          'Use disgust as a boundary signal: it\'s telling you something violates your values or safety.',
          'Physical disgust often requires immediate distance from the source; honor that impulse.',
          'In art and creativity, disgust can be explored safely as a way of confronting the taboo.',
        ],
        remedyTips: [
          'Examine whether your disgust is toward something genuinely harmful or merely unfamiliar.',
          'Practice exposure in low-stakes situations if disgust is limiting your life unnecessarily.',
          'Wash hands, change environments, or remove yourself from the trigger to clear the state.',
        ],
      },
      {
        level: 'mild',
        name: 'Boredom',
        description: 'Boredom in Plutchik\'s model is the mildest expression of disgust — a low-level aversion to insufficient stimulation or meaningless activity. While uncomfortable, boredom is a powerful signal that something in your life needs more depth, novelty, or purpose.',
        feelTips: [
          'Let boredom be a compass: what does it point you toward as an alternative?',
          'Use boredom productively by letting your mind wander — it precedes creative insight.',
          'Reach for a book, project, or conversation that genuinely interests you.',
        ],
        remedyTips: [
          'Distinguish boredom from emotional avoidance — sometimes "bored" means "avoiding."',
          'Break routines: even a small change in environment or activity relieves boredom.',
          'If boredom is chronic, it may signal misalignment between your activities and your values.',
        ],
      },
    ],
    related: ['remorse', 'contempt', 'sadness', 'anger'],
  },
  {
    id: 'anger',
    name: 'Anger',
    centerAngle: 180,
    ringColors: ['#B52A2A', '#D95C5C', '#ECA0A0', '#F7D4D4'],
    outer: [
      {
        name: 'Cross',
        description: 'Being cross is mild, short-lived irritation — a brief flare of frustration that doesn\'t escalate. It typically has a clear, specific cause: someone was thoughtless, something didn\'t work, a plan was disrupted. It usually passes quickly once the cause is addressed or acknowledged.',
        feelTips: [
          'Let yourself be briefly cross without guilt — it\'s a legitimate minor signal and need not be suppressed.',
          'Name the specific cause rather than letting it diffuse into a general bad mood.',
          'A short pause — a breath, a moment away from the situation — often resolves low-level crossness entirely.',
        ],
        remedyTips: [
          'Address the cause if possible; crossness that lingers usually means the source hasn\'t been acknowledged.',
          'Avoid taking it out on unrelated people or situations — it amplifies rather than resolves it.',
          'Check whether tiredness or hunger is lowering your threshold; physical depletion exaggerates minor irritation.',
        ],
      },
      {
        name: 'Peeved',
        description: 'Being peeved is a low-grade, lingering annoyance — a small grievance that hasn\'t fully resolved. Unlike brief crossness, peevishness tends to stay and colour interactions. It often signals something small that is consistently tolerated rather than addressed.',
        feelTips: [
          'Take peevishness seriously as information: it usually points to something that keeps happening and needs addressing.',
          'Acknowledge it to yourself explicitly rather than pushing it down — "I\'m genuinely annoyed about this."',
          'A small release — venting briefly to a trusted person or writing it out — can clear the residue.',
        ],
        remedyTips: [
          'Identify the recurring pattern causing the peevishness and decide whether to address it or genuinely let it go.',
          'One clear, calm conversation usually relieves peevishness more than prolonged tolerance.',
          'If you find yourself frequently peeved, check whether broader stress or fatigue is lowering your threshold.',
        ],
      },
      {
        name: 'Frustrated',
        description: 'Frustration is the emotion of blocked goals — a tight, hot feeling that arises when effort meets obstacle, when persistence meets resistance, or when things simply refuse to go as planned. It lives in the mild-anger range: the goal still feels reachable, but something keeps getting in the way.',
        feelTips: [
          'Name the specific obstacle — frustration loses some of its grip when you can identify exactly what\'s blocking you.',
          'Give the energy somewhere to go: a brief physical outlet or a moment to vent to someone you trust.',
          'Frustration usually points at something you care about — it\'s worth noting what that is.',
        ],
        remedyTips: [
          'Take a break before the frustration escalates; returning fresh often reveals a solution the stuck state couldn\'t see.',
          'Distinguish between obstacles that need more effort, those that need a different approach, and those telling you to stop.',
          'If frustration is chronic, step back and examine whether the goal itself needs revision.',
        ],
      },
      {
        name: 'Impatient',
        description: 'Impatience is mild anger at the pace of things — the friction of wanting the outcome before the process has finished. It arises when time feels wasted, when momentum stalls, or when others move slower than you need. It is energy looking for faster release than the situation allows.',
        feelTips: [
          'Notice the gap between the pace you want and the pace that\'s actually required — sometimes adjusting the expectation is the real fix.',
          'Channel the energy productively: if you\'re waiting, do something useful with the time.',
          'Recognize what the impatience is pointing toward — what do you care so much about arriving at?',
        ],
        remedyTips: [
          'Practice the distinction between what you can control (your next action) and what you can\'t (other people\'s pace, timing).',
          'Building tolerance for necessary waiting is a skill; small, deliberate practices with delay can develop it.',
          'Examine whether your speed expectations are realistic or whether they\'re importing urgency from another area of your life.',
        ],
      },
      {
        name: 'Resentful',
        description: 'Resentment is anger that has been held, repeated, and left unresolved. It accumulates from grievances that were never addressed — injustices that were swallowed rather than spoken, needs that were consistently unmet, or wrongs that never received acknowledgment. Unlike fresh anger (which has energy and direction), resentment is anger directed backward at something already past, growing heavier the longer it is carried.',
        feelTips: [
          'Name the specific grievance at the centre of the resentment — many people carry vague resentment without being able to articulate exactly what they\'re resentful about.',
          'Resentment usually means something was never said. Identify what you needed to express or be heard on, but wasn\'t.',
          'Consider whether this resentment is asking for a direct conversation, a decision, a boundary, or for you to genuinely let something go.',
        ],
        remedyTips: [
          'Resentment persists most fiercely when you feel powerless. Identifying one concrete action or thing you can say often reduces it.',
          'Forgiveness, when and if it comes, is done for you — not for them. It releases you from carrying the weight of something unresolved.',
          'If resentment feels chronic or pervasive across many relationships, it may be worth exploring with a therapist what pattern it is pointing to.',
        ],
      },
    ],
    colors: {
      intense: '#B52A2A',
      core:    '#D95C5C',
      mild:    '#ECA0A0',
    },
    intensities: [
      {
        level: 'intense',
        name: 'Rage',
        description: 'Rage is anger at its most extreme and consuming — a state in which the prefrontal cortex is largely overridden and the impulse to confront, attack, or destroy dominates. While it signals deep injustice or violation, unchecked rage almost always escalates harm. It is among the most dangerous emotional states to act from directly.',
        feelTips: [
          'Rage should never be acted upon directly — it requires physical discharge first (run, scream into a pillow, hit a gym bag).',
          'If expressing rage to another person is needed, do it after you\'ve metabolized the peak.',
          'Recognize rage as a signal of profound boundary violation or injustice that deserves real attention.',
        ],
        remedyTips: [
          'Intense physical exercise is the single most effective acute intervention for rage.',
          'Remove yourself from the triggering situation immediately to prevent escalation.',
          'Cold water on the face activates the diving reflex and rapidly lowers heart rate.',
        ],
      },
      {
        level: 'moderate',
        name: 'Anger',
        description: 'Anger is a response to perceived injustice, violation of values, or blocked goals. It provides energy and motivation to address wrongs and set limits. Healthy anger is assertive rather than aggressive, and honest about what specifically needs to change.',
        feelTips: [
          'Express anger clearly and specifically: "I feel angry because [specific action] violated [specific value]."',
          'Use anger\'s energy to take constructive action: write a letter, have a difficult conversation, make a change.',
          'Recognize anger as self-respect — it defends your rights and boundaries.',
        ],
        remedyTips: [
          'Slow down: anger often moves faster than wisdom. Pause 24 hours before major decisions.',
          'Exercise, movement, or vigorous activity discharges anger\'s physiological arousal.',
          'Ask: is this about now, or is old anger being triggered by a present situation?',
        ],
      },
      {
        level: 'mild',
        name: 'Annoyance',
        description: 'Annoyance is a low-grade irritation triggered by minor frustrations, inconveniences, or actions that feel inconsiderate. While small, it provides useful information about preferences and limits. Left unexamined, chronic annoyance can gradually erode relationships and well-being.',
        feelTips: [
          'Use annoyance as information: it reveals your preferences, values, and tolerance thresholds.',
          'Share mild annoyances with humor rather than resentment to maintain connection.',
          'Notice what you\'re tolerating that you shouldn\'t — annoyance signals unspoken needs.',
        ],
        remedyTips: [
          'Distinguish between annoyances you can change and those you must accept; focus energy accordingly.',
          'Avoid venting to a third party repeatedly — it cements the irritation rather than resolving it.',
          'Brief breathing or a short walk interrupts the annoyance loop effectively.',
        ],
      },
    ],
    related: ['contempt', 'aggressiveness', 'disgust', 'anticipation'],
  },
  {
    id: 'anticipation',
    name: 'Anticipation',
    centerAngle: 225,
    ringColors: ['#C46500', '#E08A1A', '#EDBB73', '#F7E0C0'],
    outer: [
      {
        name: 'Eager',
        description: 'Eagerness is anticipation with energy — an active, leaning-forward readiness for something coming. It combines positive expectation with motivation to move toward the anticipated thing. Unlike passive hope, eagerness involves a sense of agency and aliveness.',
        feelTips: [
          'Channel eagerness into preparation: let the energy move you toward making the anticipated thing even better.',
          'Share your eagerness when appropriate — enthusiasm is genuinely contagious and strengthens connection.',
          'Savour the feeling itself; eagerness is one of the most pleasant anticipatory states and is worth inhabiting.',
        ],
        remedyTips: [
          'If eagerness tips into impatience, redirect the energy into preparation or related action rather than waiting.',
          'Ensure eagerness is grounded: overestimating what\'s coming sets up disappointment when it arrives.',
          'If eagerness is consistently absent from your life, examine whether you have enough to genuinely look forward to.',
        ],
      },
      {
        name: 'Hopeful',
        description: 'Hope is a gentle, forward-looking belief that things could go well — an openness to positive outcomes without requiring certainty. It is quieter than eagerness and more sustainable, requiring only the belief that good is possible. Research consistently identifies hope as a significant predictor of resilience and well-being.',
        feelTips: [
          'Nurture hope deliberately: recall times when things turned out better than expected.',
          'Keep hope attached to action where possible — "I hope, and here is what I am doing about it."',
          'Share hope with others; like most positive emotions, it is amplified through connection.',
        ],
        remedyTips: [
          'When hope is hard to access, start very small: "What is one thing that could go better today?"',
          'Distinguish hope from denial — genuine hope acknowledges difficulty while believing in possibility.',
          'If hope feels consistently inaccessible, speak to a doctor or therapist; this can be an early sign of depression.',
        ],
      },
      {
        name: 'Curious',
        description: 'Curiosity is the pull of the unknown — a gentle, energized openness to what you don\'t yet know or understand. It is the mildest and most sustainable form of anticipation: interest without urgency, engagement without anxiety. It is the emotional state most associated with learning and creative exploration.',
        feelTips: [
          'Follow the thread of curiosity wherever it leads, even without an obvious payoff — this is what makes it valuable.',
          'Ask questions without needing to know the answer yet; sit with the open question for a moment.',
          'Notice how different curiosity feels from anxious anticipation — the pull is lighter and wider.',
        ],
        remedyTips: [
          'If curiosity has gone quiet, reduce input — overstimulation tends to dull it; boredom tends to revive it.',
          'Expose yourself to adjacent domains: curiosity is often sparked by unexpected collisions between things you already know.',
          'Protect your curiosity from being immediately monetized or turned into a task; not every interest needs a purpose.',
        ],
      },
      {
        name: 'Inspired',
        description: 'Inspiration is the felt sense of possibility opening — a sudden clarity that something remarkable is attainable or that an idea wants to be realized. It lives in mild-anticipation: there is forward energy here, but it hasn\'t yet tipped into the urgency of vigilance. It feels generative and light.',
        feelTips: [
          'Act on inspiration quickly, even in a small way — capture the idea, take one step, send one message.',
          'Notice what triggered it; inspiration tends to return to the same wells.',
          'Share it with someone who will meet it with genuine interest — verbalizing inspiration tends to crystallize it.',
        ],
        remedyTips: [
          'If inspiration rarely visits, examine your environment — it thrives in novelty, beauty, and connection, and withers under relentless routine.',
          'When it arrives, protect the time it wants — don\'t schedule it out of existence.',
          'Distinguish between genuine inspiration (a pull) and the performance of enthusiasm — they feel different and require different responses.',
        ],
      },
      {
        name: 'Excited',
        description: 'Excitement is anticipation with a full-body charge — a high-energy, positive readiness for something thrilling that is coming. It is more intense and physical than eagerness, and more immediate than hope. Excitement lights up the nervous system: heart quickens, attention narrows, everything feels vivid and close.',
        feelTips: [
          'Let excitement be felt fully — don\'t rush past it or immediately convert it to task-lists.',
          'Share it with someone: vocalising excitement amplifies and anchors the positive emotion.',
          'Notice where excitement lives in your body — chest, stomach, limbs — and breathe into it.',
        ],
        remedyTips: [
          'If excitement tips into overwhelm, slow your breathing and name three grounding details around you.',
          'High excitement can impair decision-making; delay major decisions until the charge settles.',
          'If you rarely feel excited, look at what you\'re anticipating — chronic dread or flatness is worth examining.',
        ],
      },
    ],
    colors: {
      intense: '#C46500',
      core:    '#E08A1A',
      mild:    '#EDBB73',
    },
    intensities: [
      {
        level: 'intense',
        name: 'Vigilance',
        description: 'Vigilance is anticipation at its most intense — a state of heightened alertness and readiness, scanning the environment for important incoming information or threats. Adaptive in dangerous contexts, it becomes exhausting and counterproductive when sustained unnecessarily in safe environments.',
        feelTips: [
          'Vigilance is useful when on watch: use it before high-stakes presentations, performances, or decisions.',
          'It can be cultivated through meditation practices that train sustained attention.',
          'In high-responsibility roles (medicine, security), vigilance is a necessary professional skill.',
        ],
        remedyTips: [
          'Chronic vigilance (hypervigilance) often indicates trauma; professional support is highly beneficial.',
          'Signal to your nervous system that you are safe: slow breathing, self-soothing touch, grounded environment.',
          'Practice transitioning between vigilance and relaxation; you need to be able to downshift.',
        ],
      },
      {
        level: 'moderate',
        name: 'Anticipation',
        description: 'Anticipation is the forward-looking emotion of expectation — the excited, alert readiness toward a future event. It can be positively charged (eagerness) or negatively charged (dread), but at its core it focuses mental resources on what is coming. Anticipation fuels motivation and planning.',
        feelTips: [
          'Cultivate positive anticipation by scheduling things to look forward to in your calendar.',
          'Use anticipation\'s energy to prepare: planning converts anxious anticipation into empowered readiness.',
          'Let yourself savor the buildup; the anticipation of good things can be as satisfying as the event.',
        ],
        remedyTips: [
          'If anticipation has become anxious dread, ground yourself in the present: "Right now I am safe."',
          'Distinguish between preparation (productive) and rumination (unproductive) in how you handle what\'s coming.',
          'Break large anticipated events into small, manageable steps to reduce overwhelm.',
        ],
      },
      {
        level: 'mild',
        name: 'Interest',
        description: 'Interest is the mild, curious engagement with something novel or meaningful. It is the gentle pull of attention toward what matters, the beginning of motivation and learning. Interest is one of the most cognitively sustaining emotions — it drives exploration and fuels personal growth.',
        feelTips: [
          'Follow your interests without needing them to be "productive" — curiosity itself is valuable.',
          'Protect time for things that genuinely interest you; they are the seeds of passion and expertise.',
          'Share your interests with others — enthusiasm is contagious and deepens connection.',
        ],
        remedyTips: [
          'If interest feels absent, try new sensory experiences to awaken curiosity.',
          'Low interest can signal depression; consult a doctor if it\'s persistent and broad.',
          'Revisit past interests you\'ve abandoned — they often reignite quickly.',
        ],
      },
    ],
    related: ['optimism', 'aggressiveness', 'joy', 'anger'],
  },
];

export const BLEND_EMOTIONS = [
  {
    id: 'love',
    name: 'Love',
    blendAngle: -71.5, // between Joy (-90°) and Trust (-45°), at Joy\'s endAngle
    emotion1: 'joy',
    emotion2: 'trust',
    color: '#84CC16', // lime — between yellow and green
    description: 'Love emerges from the union of Joy and Trust — a state of deep warmth, attachment, and open-hearted connection. It is the emotion most universally associated with human flourishing. Love can be romantic, familial, platonic, or even directed toward life itself.',
    feelTips: [
      'Spend quality, distraction-free time with those you love; presence is love\'s primary language.',
      'Express your love explicitly and specifically — people often underestimate how much they are valued.',
      'Practice loving-kindness meditation to cultivate love toward yourself and progressively wider circles.',
    ],
    remedyTips: [
      'If love has been hurt by betrayal, allow grief before attempting repair.',
      'Distinguish between love (generous) and attachment (fear of loss) — both are real but require different responses.',
      'Self-compassion is the foundation; it\'s very hard to love others well while at war with yourself.',
    ],
    related: ['joy', 'trust'],
  },
  {
    id: 'submission',
    name: 'Submission',
    blendAngle: -26.5,
    emotion1: 'trust',
    emotion2: 'fear',
    color: '#059669', // emerald — between trust-green and fear-green
    description: 'Submission (or deference) is the blend of Trust and Fear — a state of yielding to a higher authority or power, either from respect or necessity. When healthy, it enables collaboration, learning, and social cohesion. When unhealthy, it can represent suppression of one\'s own needs.',
    feelTips: [
      'Use submission as a conscious choice: defer to those with greater expertise or wisdom in their domain.',
      'In collaborative relationships, taking turns leading and following builds stronger bonds.',
      'Humility — a positive form of submission — opens you to learning and growth.',
    ],
    remedyTips: [
      'If you submit out of fear rather than respect, identify whether the fear is warranted.',
      'Build assertiveness skills to ensure submission is a conscious choice, not a compulsion.',
      'Distinguish between healthy deference and people-pleasing that costs you self-respect.',
    ],
    related: ['trust', 'fear'],
  },
  {
    id: 'awe',
    name: 'Awe',
    blendAngle: 18.5,
    emotion1: 'fear',
    emotion2: 'surprise',
    color: '#06B6D4', // cyan — between teal-green and cyan
    description: 'Awe is the blend of Fear and Surprise — a profound response to something vast, incomprehensible, or transcendent that exceeds your current mental framework. It is simultaneously humbling and exhilarating. Research shows awe reliably increases connectedness, generosity, and feelings of meaning.',
    feelTips: [
      'Seek experiences of scale — the night sky, deep ocean, towering mountains, grand architecture.',
      'Engage with great art, music, or writing that consistently evokes a sense of the sublime.',
      'Practice "noticing awe" in small moments: a spider\'s web, a child\'s logic, a perfect chord.',
    ],
    remedyTips: [
      'After an awe experience, give yourself quiet time to integrate rather than immediately returning to stimulation.',
      'If awe has tipped into overwhelm, grounding exercises restore a sense of stable selfhood.',
      'Write or draw about what struck you — this helps consolidate the perspective-expanding effect.',
    ],
    related: ['fear', 'surprise'],
  },
  {
    id: 'disapproval',
    name: 'Disapproval',
    blendAngle: 63.5,
    emotion1: 'surprise',
    emotion2: 'sadness',
    color: '#3B82F6', // blue — between cyan and blue
    description: 'Disapproval is the blend of Surprise and Sadness — an emotionally complex reaction to something unexpected that violates expectations in a downward direction. It combines disappointment with a sense that something should have been different. Disapproval can motivate honest feedback and course-correction.',
    feelTips: [
      'Use disapproval to clarify your standards and articulate what you genuinely value.',
      'Express it constructively: specific, actionable feedback is more useful than generalized judgment.',
      'Recognize that disapproval can also be self-directed — a signal to adjust your own actions.',
    ],
    remedyTips: [
      'Check whether your disapproval is based on your values or on external expectations you\'ve absorbed.',
      'Avoid suppressing disapproval — unexpressed it becomes resentment; expressed it creates dialogue.',
      'Balance disapproval with genuine appreciation for what is going well.',
    ],
    related: ['surprise', 'sadness'],
  },
  {
    id: 'remorse',
    name: 'Remorse',
    blendAngle: 108.5,
    emotion1: 'sadness',
    emotion2: 'disgust',
    color: '#6366F1', // indigo — between blue and violet
    description: 'Remorse is the blend of Sadness and Disgust directed inward — a painful awareness of having acted against your own values. Unlike guilt (which focuses on the action), remorse is more pervasive and motivates genuine reconciliation and change. Processed well, it is morally strengthening.',
    feelTips: [
      'Allow remorse to be felt fully — resisting it prevents the growth it catalyzes.',
      'Let it motivate concrete action: an apology, restitution, or a changed behavior pattern.',
      'Distinguish remorse (healthy) from shame (attacks the self) — you did something wrong, you are not wrong.',
    ],
    remedyTips: [
      'Make amends where possible, then actively work to forgive yourself.',
      'If remorse has become chronic self-punishment, therapy can help break the loop.',
      'Journal about what you learned — transform the experience into wisdom rather than just pain.',
    ],
    related: ['sadness', 'disgust'],
  },
  {
    id: 'contempt',
    name: 'Contempt',
    blendAngle: 153.5,
    emotion1: 'disgust',
    emotion2: 'anger',
    color: '#DB2777', // pink — between violet and red
    description: 'Contempt is the blend of Disgust and Anger — a cold, dismissive judgment of someone as inferior or unworthy. Research identifies it as one of the most damaging emotions in relationships. While contempt can point to genuine injustice, it typically signals a failure of empathy and is worth examining.',
    feelTips: [
      'Use contempt as a signal: it usually indicates a deep value violation worth addressing directly.',
      'In fiction, art, and satire, contempt for injustice can be a powerful motivating force.',
      'If contempt appears in you, investigate whether you feel threatened or injured underneath it.',
    ],
    remedyTips: [
      'Gottman research shows contempt is the #1 relationship killer — it requires urgent intervention.',
      'Rebuild appreciation: consciously identify and express what you genuinely respect in the person.',
      'Examine whether contempt is masking hurt, fear, or grief that hasn\'t been expressed.',
    ],
    related: ['disgust', 'anger'],
  },
  {
    id: 'aggressiveness',
    name: 'Aggressiveness',
    blendAngle: 198.5,
    emotion1: 'anger',
    emotion2: 'anticipation',
    color: '#F97316', // orange — between red and orange
    description: 'Aggressiveness is the blend of Anger and Anticipation — a forward-driving, goal-oriented state that combines motivational fire with assertive force. In its healthy form, it becomes drive, ambition, and courageous action. In its unhealthy form, it becomes hostility and domination.',
    feelTips: [
      'Channel aggressiveness into disciplined, goal-directed effort — sport, business, creative work.',
      'Use it to overcome inertia: aggressiveness says "I will make this happen."',
      'Assert your needs, boundaries, and ambitions clearly and directly.',
    ],
    remedyTips: [
      'If aggressiveness is being directed at people rather than problems, pause and redirect the energy.',
      'Physical exercise is the most effective way to safely metabolize aggressive energy.',
      'Ask: "Am I fighting for something or against someone?" The former is more constructive.',
    ],
    related: ['anger', 'anticipation'],
  },
  {
    id: 'optimism',
    name: 'Optimism',
    blendAngle: 243.5,
    emotion1: 'anticipation',
    emotion2: 'joy',
    color: '#F59E0B', // amber — between orange and yellow
    description: 'Optimism is the blend of Anticipation and Joy — a positive, forward-looking expectation that good things lie ahead. Research consistently links dispositional optimism to better health, resilience, and achievement. Unlike naïve positivity, healthy optimism is grounded in confidence in your ability to handle what comes.',
    feelTips: [
      'Build an evidence base for optimism: list times you\'ve navigated difficulty successfully.',
      'Visualize positive futures in concrete, sensory detail — this primes the brain for their realization.',
      'Surround yourself with people whose hope and energy is generative rather than diminishing.',
    ],
    remedyTips: [
      'If optimism feels impossible, start very small: "What is one thing that could go well today?"',
      'Distinguish optimism (grounded) from toxic positivity (denial) — the former acknowledges difficulty.',
      'Depression often shows up as lost optimism; reach out for support if it has been absent long.',
    ],
    related: ['anticipation', 'joy'],
  },
];

// Map from emotion name (as returned by analysis) to segment id
export const EMOTION_NAME_MAP = {};
CORE_EMOTIONS.forEach(emotion => {
  emotion.intensities.forEach(intensity => {
    EMOTION_NAME_MAP[intensity.name.toLowerCase()] = `${emotion.id}-${intensity.level}`;
  });
  // Outer ring emotions → resolve to outer-N segment IDs
  (emotion.outer || []).forEach((outerObj, idx) => {
    EMOTION_NAME_MAP[outerObj.name.toLowerCase()] = `${emotion.id}-outer-${idx}`;
  });
});
BLEND_EMOTIONS.forEach(blend => {
  EMOTION_NAME_MAP[blend.name.toLowerCase()] = blend.id;
});

// Keyword-based emotion detection
import nlp from 'compromise';

// ─── Text normalisation ──────────────────────────────────────────────────────
// Collapse 3+ repeated characters to 1: "sooo" → "so", "tireddd" → "tired"
function normalizeText(raw) {
  return raw
    .toLowerCase()
    .replace(/[''`]/g, "'")
    .replace(/(.)\1{2,}/g, '$1')    // sooo→so, tireddd→tired
    .replace(/\s+/g, ' ')
    .trim();
}

// ─── Lemmatize via compromise ────────────────────────────────────────────────
// Returns a space-joined string of root (lemma) forms for all tokens in `text`.
// e.g. "I was worrying about everything" → "i be worry about everything"
// This lets us match root-form keywords against any conjugation/tense.
function lemmatize(text) {
  const doc = nlp(text);
  // Convert verbs to infinitive form and nouns to singular
  return doc.json().flatMap(s => s.terms).map(t => {
    const root = t.root || t.normal || t.text.toLowerCase();
    return root.toLowerCase();
  }).join(' ');
}

// ─── Negation detection ───────────────────────────────────────────────────────
const NEGATORS = ["not","no","never","dont","don't","didn't","didnt","doesn't","doesnt",
  "can't","cant","couldn't","couldnt","won't","wont","wouldn't","wouldnt",
  "shouldn't","shouldnt","haven't","havent","hasn't","hasnt","barely","hardly",
  "nothing","nowhere","nor","without","lack","lacking","far from","anything but"];

function isNegated(text, keyword) {
  let searchFrom = 0;
  while (true) {
    const idx = text.indexOf(keyword, searchFrom);
    if (idx === -1) break;
    const before = text.slice(Math.max(0, idx - 40), idx);
    const window = before.trim().split(/\s+/).slice(-5);
    if (window.some(w => NEGATORS.includes(w.replace(/[^a-z']/g, '')))) return true;
    searchFrom = idx + 1;
  }
  return false;
}

// ─── Intensifier detection ────────────────────────────────────────────────────
const INTENSIFIERS = ["very","so","really","extremely","incredibly","deeply","truly",
  "absolutely","totally","utterly","completely","super","insanely","overwhelmingly",
  "profoundly","genuinely","beyond","unbearably","intensely","massively","terribly",
  "awfully","desperately","hopelessly","wildly","fiercely","burning"];

function intensifierBoost(text, keyword) {
  const idx = text.indexOf(keyword);
  if (idx === -1) return 1.0;
  const context = text.slice(Math.max(0, idx - 35), idx + keyword.length + 20);
  const count = INTENSIFIERS.filter(w => context.includes(w)).length;
  return count === 0 ? 1.0 : Math.min(1.0 + count * 0.2, 1.6);
}

// ─── Keyword map ──────────────────────────────────────────────────────────────
// Keywords use ROOT/LEMMA forms wherever possible — compromise lemmatizes the input
// before matching, so "worrying"/"worried"/"worries" all match the root "worry".
// Multi-word phrases match against the original normalized text (not lemmatized).
const KEYWORD_MAP = {
  joy: [
    // Root-form single words (auto-match all conjugations via lemmatization)
    'happy','joy','glad','delight','please','wonderful','great','fantastic','cheerful',
    'elate','thrill','content','satisfy','enjoy','bless','lucky','grateful','thankful',
    'smile','laugh','fun','celebrate','positive','upbeat','uplift','vibrant','radiant',
    'rejoice','grin','beam','gleam','flourish','thrive','alive','exhilarate',
    // Phrases (matched against original text)
    'good mood','feeling good','feel good','on cloud nine','over the moon','full of life',
    'spring in my step','good news','great news','loving it','having a great',
  ],

  ecstasy: [
    'ecstatic','euphoric','blissful','overjoyed','bliss',
    'on top of the world','best day ever','never felt better','beyond happy','pure bliss',
    'pure joy','flying high','seventh heaven','cloud nine','absolute happiness',
  ],

  serenity: [
    'serene','calm','peaceful','ease','relax','tranquil','gentle','quiet','still',
    'rest','settle','center','ground','mellow','chill','cozy','comfortable','steady',
    'stable','balance','unbothered',
    'at ease','at peace','no stress','stress free','worry free','all good','doing well',
    'taking it easy','just relaxing','enjoying the quiet',
  ],

  trust: [
    'trust','believe','rely','confident','safe','secure','faith','honest','loyal',
    'reliable','dependable','support','open','comfortable',
    'count on','in good hands','strong bond','feel supported','have faith in',
  ],

  admiration: [
    'admire','respect','inspire','hero','brilliant','genius','talented','gifted',
    'extraordinary','impressive','aspire',
    'look up to','role model','in awe of','so talented','amazing person',
  ],

  acceptance: [
    'accept','embrace','acknowledge','tolerant','understand',
    'let go','made peace','move on','come to terms','it is what it is',
    'okay with it','fine with it','at peace with','live with it','i can deal',
  ],

  fear: [
    'fear','afraid','scare','frighten','nervous','anxious','anxiety','worry','dread',
    'panic','threaten','dangerous','unsafe','insecure','uneasy','stress','overwhelm',
    'shake','tremble','spiral','helpless','powerless','vulnerable','sleepless',
    'on edge','what if','worst case','losing control','out of control','heart racing',
    'pit in my stomach','knot in my stomach','tight chest','freaking out','something wrong',
  ],

  terror: [
    'terrified','terror','petrify','horrify','nightmare','catastrophe','disaster',
    'traumatize','traumatic',
    'paralyzed by fear','frozen with fear','blood runs cold','shaking uncontrollably',
    'absolute horror','worst fear',
  ],

  apprehension: [
    'apprehensive','hesitant','wary','cautious','doubt','uncertain',
    'second guess','mixed feelings','not convinced','feels risky','taking a risk',
    'nervous about','worried about','concerned about','not sure how','could go wrong',
  ],

  surprise: [
    'surprise','shock','astonish','unexpected','sudden','stun','blindside',
    'wow','out of nowhere','out of the blue','plot twist','jaw drop','never saw it coming',
    'caught off guard','taken aback','i had no idea','total surprise',
  ],

  amazement: [
    'amaze','awestruck','phenomenal','breathtaking','magnificent','spectacular',
    'remarkable','unreal','speechless','extraordinary','incredible','mind blown',
    'blown away','beyond words','i have no words','how is that possible',
  ],

  distraction: [
    'distract','unfocused','scatter','confuse','puzzled','muddle','foggy',
    'hard to concentrate','all over the place','zoning out','mind wandering',
    'brain fog','spacing out','lost my train of thought','keep losing track',
  ],

  sadness: [
    'sad','unhappy','depress','blue','gloomy','miserable','disappoint','heartbroken',
    'hurt','cry','tear','upset','empty','hollow','lonely','alone','isolate','miss',
    'grief','mourn','sorrow','hopeless','worthless','broken','devastate','ache','long',
    'yearn','numb','disconnect','abandon','neglect','reject','unwanted','unloved',
    'nothing matters','what\'s the point','no one cares','feel unseen','feel unheard',
    'weight on my chest','barely getting through','just getting through',
    'never good enough','not good enough','been through so much','emotionally drained',
    'left out','left behind','want to cry','feel like crying',
  ],

  grief: [
    'grieve','bereave','inconsolable',
    'lost someone','passed away','never coming back','hole in my heart','they\'re gone',
    'miss them so much','i miss them','gone forever','loss of','lost my',
  ],

  pensiveness: [
    'pensive','wistful','nostalgic','nostalgia','melancholy','bittersweet','reflective',
    'reminisce','longing for',
    'thinking about the past','looking back','remember when','used to be','miss the old days',
    'things have changed','what could have been','if only','what if i had',
  ],

  disgust: [
    'disgust','revolt','repulse','gross','nauseate','horrible','appalling','repulsive',
    'vile','putrid','foul','sicken','abhor',
    'yuck','eww','makes me sick','stomach turning','turns my stomach','morally wrong',
    'can\'t stomach','can\'t stand to look at','outraged by',
  ],

  loathing: [
    'loathe','hate','detest','despise',
    'cannot stand','deep hatred','burning hatred','pure hatred','intense dislike',
    'utterly disgusting','complete disgust','absolute hatred',
  ],

  boredom: [
    // Fatigue/energy-depletion words map here per Plutchik (low energy = Boredom pole)
    'bore','dull','tedious','monotonous','listless','unstimulate','apathy','apathetic',
    'unmotivate','disengage','detach','lifeless','sluggish','lethargic','weary',
    'tire','exhaust','drain','deplete','fatigue','burnout','spent',
    'nothing to do','no energy','low energy','flat','can\'t be bothered','checked out',
    'going through the motions','zoned out','running on empty','no drive',
    'lost all motivation','same thing every day','worn out','run down','burned out',
    'burnt out','just existing','surviving not thriving','autopilot','groundhog day',
    'too tired to','tired of everything','can\'t get going','can\'t get started',
  ],

  anger: [
    'angry','anger','mad','furious','irate','livid','outrage','frustrate','irritate',
    'annoy','piss','resent','bitter','hostile','incense','enrage','seethe','infuriate',
    'heat','steam','fume','boil','explode',
    'this is unfair','that\'s unfair','not fair','not right','how dare',
    'fed up','sick of this','had enough','at my limit','at my breaking point',
    'drives me crazy','drives me nuts','ticked off','wound up','riled up','seeing red',
    'lost my temper','this is wrong','how could they','this is ridiculous',
  ],

  rage: [
    'rage','raging','volcanic','blind rage',
    'losing it','beyond furious','going to explode','want to scream',
    'want to break something','uncontrollable anger','violent anger','absolutely livid',
  ],

  annoyance: [
    'annoyed','irk','exasperate','bugged','tiresome',
    'pet peeve','petty annoyance','getting on my nerves','a bit annoying',
    'bit of a nuisance','small thing that bothers','mildly irritating',
  ],

  anticipation: [
    'anticipate','eager','hopeful','expect','plan','prepare','upcoming',
    'look forward to','can\'t wait','excited about','building up to',
    'what\'s next','hope to','intend to','pumped for','counting down','gearing up',
  ],

  vigilance: [
    'vigilant','hypervigilant','tense','suspicious',
    'on guard','high alert','on edge','can\'t relax','not letting my guard down',
    'something feels off','gut feeling','something doesn\'t feel right',
    'bracing for','waiting for the other shoe','ready for the worst',
  ],

  interest: [
    'interest','intrigue','fascinate','captivate','absorb',
    'wonder','explore','research',
    'drawn to','want to learn','want to know more','fell down a rabbit hole','deep dive',
    'really interesting','so interesting','how does','why does',
  ],

  // blends
  love: [
    'love','adore','cherish','devote','affection','compassion','warmth','tenderness',
    'soulmate',
    'care deeply','in love','feel loved','feel cherished','means the world',
    'my everything','heart full','full of love','deep connection',
  ],

  optimism: [
    'optimistic','optimism','hopeful','positive','promise','promising',
    'bright future','things will get better','going to be okay','it will be okay',
    'better days','silver lining','glass half full','see the good','turning around',
  ],

  awe: [
    'awe','awestruck','majestic','sublime','transcendent','humble','wonder',
    'bigger than me','put things in perspective','overwhelmed by beauty',
    'beautiful beyond words','reminds me how small','so much grander',
  ],

  remorse: [
    'remorse','regret','guilty','guilt','ashamed','shame','sorry','apologize',
    'did wrong','messed up','let down','made a mistake','can\'t forgive myself',
    'i should have','wish i hadn\'t','feel terrible about','feel awful about',
    'what was i thinking','i hurt them','i caused harm','deep regret',
  ],

  contempt: [
    'contempt','disdain','scorn','dismissive','superiority',
    'look down on','not worth my time','what a joke','zero respect','no respect for',
    'so beneath me','couldn\'t care less',
  ],

  aggressiveness: [
    'aggressive','assertive','forceful','combative','competitive',
    'fighting for','will not back down','charging ahead','pushing back',
    'standing my ground','taking action','refuse to lose','going on the offensive',
  ],

  disapproval: [
    'disapprove','disappoint',
    'not what i expected','let down','fell short','below expectations',
    'expected more','expected better','wrong choice','bad decision','poor judgment',
    'that was wrong of them','shouldn\'t have done that',
  ],

  submission: [
    'submit','defer','yield','comply','obey',
    'gave in','not my place','had no choice','couldn\'t say no',
    'went along with','not worth fighting','gave up trying','stopped resisting',
  ],

  // ── Outer ring emotions ────────────────────────────────────────────────────
  // These have their own keyword entries so keyword mode can resolve directly
  // to an outer segment rather than always falling back to a core intensity.

  cheerful: [
    'cheerful','chipper','bright-eyed','in a good mood','good spirits','feel bright',
    'light mood','feel light','breezy','bubbly',
  ],
  playful: [
    'playful','playfulness','silly','goofy','mischievous','having fun','horsing around',
    'goofing around','feeling giddy','giddy','whimsical','frisky',
  ],
  peaceful: [
    'peaceful','at peace','inner peace','quiet peace','stillness','tranquil','serene',
    'no worries','undisturbed','calm and content',
  ],
  grateful: [
    'grateful','gratitude','thankful','appreciate','appreciative','blessed','so thankful',
    'counting my blessings','feel fortunate','lucky to have',
  ],
  proud: [
    'proud','pride','feel proud','so proud','incredibly proud','bursting with pride',
    'accomplished','nailed it','crushed it','aced it','killed it','smashed it',
    'earned this','deserved this','did it','pulled it off','proved myself',
    'feel good about what i did','pleased with myself','pleased with how i',
    'achieved','achievement','milestone','huge win','big win','finally did it',
    'worked hard for this','paid off','effort paid','this means a lot',
  ],

  faithful: [
    'faithful','loyalty','loyal','devoted to','stand by','always there','dependable',
    'keep my word','follow through','committed to',
  ],
  assured: [
    'assured','reassured','certain','confident in','no doubt','sure of','feel secure',
    'solid ground','steady feeling','know it\'s okay',
  ],
  comfortable: [
    'comfortable','at ease','relaxed around','feel safe with','no pretense','be myself',
    'don\'t have to perform','settled in','feel right at home',
  ],
  valued: [
    'valued','feel valued','appreciated','feel seen','feel heard','feel respected',
    'feel recognized','feel important','my opinion matters','feel acknowledged',
  ],

  worried: [
    'worried','worrying','worry','keep worrying','can\'t stop worrying','anxious about',
    'concerned about','fear the worst','what if something goes wrong',
  ],
  nervous: [
    'nervous','nerves','butterflies','jittery','on edge about','sweating it','heart racing',
    'stomach in knots','before the big',
  ],
  hesitant: [
    'hesitant','hesitate','on the fence','unsure whether','not sure if I should',
    'holding back','second-guessing','torn about','can\'t decide whether',
  ],
  timid: [
    'timid','shy','bashful','meek','soft-spoken','quiet around','shrink back',
    'don\'t want to speak up','afraid to say','too scared to say',
  ],

  puzzled: [
    'puzzled','baffled','confused by','can\'t figure out','doesn\'t add up','makes no sense',
    'something\'s off','odd','strange','peculiar','that\'s weird',
  ],
  confused: [
    'confused','confusion','mixed up','don\'t understand','hard to follow','all mixed up',
    'can\'t make sense of','lost track','not following',
  ],
  unsettled: [
    'unsettled','off-kilter','thrown off','slightly off','can\'t put my finger on it',
    'something doesn\'t feel right','vaguely uneasy','strange feeling about',
  ],
  startled: [
    'startled','jumped','nearly jumped out','caught me off guard','gave me a fright',
    'made me jump','sudden shock','gasped',
  ],

  gloomy: [
    'gloomy','overcast feeling','bleak','grey','cloudy mood','dull mood','heavy mood',
    'not feeling it','uninspired','flat feeling',
  ],
  lonely: [
    'lonely','loneliness','feel alone','so alone','no one to talk to','feel disconnected',
    'nobody around','feel left out','isolated','no company','miss people',
  ],
  forlorn: [
    'forlorn','abandoned feeling','left behind','forgotten','hopeless feeling','wishing for',
    'longing for something','aimless','drifting','feel lost without',
  ],
  disappointed: [
    'disappointed','disappointment','let down','didn\'t live up','not what I hoped',
    'fell flat','expected better','underwhelmed','what a letdown','deflated',
  ],

  displeased: [
    'displeased','unsatisfied','dissatisfied','not satisfied','not happy with','falls short',
    'that\'s not okay','doesn\'t meet','leaves something to be desired',
  ],
  offended: [
    'offended','that offended me','felt disrespected','crossed a line','felt insulted',
    'taken aback by','that was uncalled for','below the belt','rude',
  ],
  withdrawn: [
    'withdrawn','pulling away','distancing myself','don\'t want to engage','shutting down',
    'retreating','stepping back','not participating','closing off',
  ],
  reluctant: [
    'reluctant','don\'t want to','dragging my feet','going through with it anyway',
    'not keen','not willing but','resistance to','holding off on',
  ],

  cross: [
    'cross','a bit cross','bit irritated','slightly irritated','minor annoyance',
    'that bothered me','a little upset','slightly bothered',
  ],
  peeved: [
    'peeved','petty annoyance','still bugging me','can\'t let it go','lingers',
    'low-key annoyed','keeps bugging me','gets to me',
  ],
  frustrated: [
    'frustrated','frustration','so frustrated','ugh','can\'t make it work',
    'hitting a wall','nothing works','going nowhere','stuck','keep trying but',
    'not getting anywhere','feel blocked','blocked',
  ],
  impatient: [
    'impatient','can\'t wait any longer','take too long','why is this taking so long',
    'hurry up','enough waiting','move faster','losing patience','patience is gone',
  ],

  eager: [
    'eager','eagerness','raring to go','can\'t wait to','ready to dive in',
    'jumping at the chance','chomping at the bit','fired up to',
  ],
  hopeful: [
    'hopeful','full of hope','keeping hope','bright side','maybe it will','could still work',
    'not giving up hope','fingers crossed','things might turn around',
  ],
  curious: [
    'curious','curiosity','wonder about','can\'t stop thinking about','want to find out',
    'digging into this','going down a rabbit hole','obsessed with learning',
  ],
  inspired: [
    'inspired','inspiration','had an idea','light bulb moment','suddenly see it',
    'feel motivated to create','feel driven to','something clicked','vision for',
  ],
  excited: [
    'excited','excitement','so excited','pumped','thrilled','can\'t wait','buzzing',
    'electric feeling','amped up','full of energy about','fired up','stoked',
    'counting down the days','heart racing with excitement','can barely contain',
  ],

  secure: [
    'secure','feel secure','feel genuinely safe','deep sense of safety','truly safe',
    'don\'t have to worry','nothing to fear here','protected','unconditionally accepted',
    'safe to be myself','no threat here','completely secure',
  ],

  overwhelmed: [
    'overwhelmed','too much','can\'t cope','everything at once','drowning in','swamped',
    'more than I can handle','falling apart','too many things','can\'t keep up',
    'spinning out','over capacity','stretched too thin','beyond my limit',
  ],

  stunned: [
    'stunned','speechless','can\'t believe it','left me speechless','jaw dropped',
    'couldn\'t form words','frozen in place','didn\'t know what to say',
    'completely stopped me','didn\'t see that coming','mind went blank',
  ],

  heartbroken: [
    'heartbroken','heart broken','broken heart','heart aches','heart hurts','devastated',
    'shattered','crushed by loss','my heart','ache in my chest','grieving over',
    'miss them so much','the love is gone','can\'t stop crying over','lost them',
  ],

  repulsed: [
    'repulsed','that repulses me','physically sick','makes me gag','feel sick at','revolting',
    'disgusting','nauseating','can\'t even look','my stomach turned','want to get away',
    'visceral disgust','that\'s revolting','grossed out','makes my skin crawl',
  ],

  resentful: [
    'resentful','resentment','still bitter','bitter about','haven\'t forgiven',
    'holding a grudge','built up over time','never dealt with','simmering anger',
    'keeps coming back to haunt me','can\'t let go of','never apologised','harboring',
    'years of','festering','old wound','never got closure',
  ],
};

const INTENSITY_KEYWORDS = {
  intense: ['rage','grief','terror','ecstasy','amazement','loathing','admiration','vigilance'],
  mild:    ['serenity','acceptance','apprehension','distraction','pensiveness','boredom','annoyance','interest'],
};

const INTENSITY_TO_CORE = {
  ecstasy: 'joy', serenity: 'joy',
  admiration: 'trust', acceptance: 'trust',
  terror: 'fear', apprehension: 'fear',
  amazement: 'surprise', distraction: 'surprise',
  grief: 'sadness', pensiveness: 'sadness',
  loathing: 'disgust', boredom: 'disgust',
  rage: 'anger', annoyance: 'anger',
  vigilance: 'anticipation', interest: 'anticipation',
};

// Build a lookup from outer emotion key (lowercase name) → { segmentId, coreId, name }
// so keyword detection can resolve directly to outer ring segments.
const OUTER_EMOTION_LOOKUP = {};
CORE_EMOTIONS.forEach(emotion => {
  (emotion.outer || []).forEach((outerObj, idx) => {
    OUTER_EMOTION_LOOKUP[outerObj.name.toLowerCase()] = {
      segmentId: `${emotion.id}-outer-${idx}`,
      coreId: emotion.id,
      name: outerObj.name,
    };
  });
});

function resolveEmotionEntry(key) {
  // 1. Blend emotions
  const blendIds = BLEND_EMOTIONS.map(e => e.id);
  if (blendIds.includes(key)) {
    const blend = BLEND_EMOTIONS.find(e => e.id === key);
    return { emotion: blend.name, intensity: 'moderate', segmentId: blend.id, _coreId: key };
  }
  // 2. Outer ring emotions
  if (OUTER_EMOTION_LOOKUP[key]) {
    const { segmentId, coreId, name } = OUTER_EMOTION_LOOKUP[key];
    return { emotion: name, intensity: 'mild', segmentId, _coreId: coreId };
  }
  // 3. Core intensity levels
  let intensity = 'moderate';
  if (INTENSITY_KEYWORDS.intense.includes(key)) intensity = 'intense';
  if (INTENSITY_KEYWORDS.mild.includes(key)) intensity = 'mild';
  const coreId = INTENSITY_TO_CORE[key] || key;
  const coreEmotion = CORE_EMOTIONS.find(e => e.id === coreId);
  const segmentId = coreEmotion ? `${coreId}-${intensity}` : null;
  const emotionName = coreEmotion
    ? coreEmotion.intensities.find(i => i.level === intensity)?.name || coreEmotion.name
    : key;
  return { emotion: emotionName, intensity, segmentId, _coreId: coreId };
}

export function detectEmotion(text) {
  const normalized = normalizeText(text);
  // Lemmatized version for root-form keyword matching
  // (e.g. "worrying" → "worry", "exhausted" → "exhaust")
  const lemmatized = lemmatize(normalized);
  const scores = {};
  const termsByKey = {}; // emotionKey -> matched keyword strings (original text shown in UI)

  Object.entries(KEYWORD_MAP).forEach(([emotion, keywords]) => {
    let score = 0;
    const matched = [];
    keywords.forEach(kw => {
      // Match against lemmatized text OR original normalized text
      // Multi-word phrases (e.g. "worn out") match normalized; single root words match lemmatized
      const isPhrase = kw.includes(' ');
      const haystack = isPhrase ? normalized : lemmatized;
      // Word-boundary check for single words to avoid false substring matches
      const found = isPhrase
        ? haystack.includes(kw)
        : new RegExp(`(?:^|\\s)${kw}(?:\\s|$|[.,!?])`).test(haystack);
      if (!found) return;
      if (isNegated(normalized, kw)) return;
      const wordCount = kw.split(' ').length;
      const boost = intensifierBoost(normalized, kw);
      score += wordCount * boost;
      matched.push(kw);
    });
    if (score > 0) {
      scores[emotion] = score;
      termsByKey[emotion] = matched;
    }
  });

  if (Object.keys(scores).length === 0) {
    return null; // no emotion detected — caller should show a "nothing found" state
  }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topScore = sorted[0][1];
  const topKeys = sorted.filter(([, s]) => s >= topScore * 0.3).slice(0, 3).map(([k]) => k);

  const resolved = topKeys.map(resolveEmotionEntry);
  const primary = resolved[0];
  const insight = generateInsight(primary._coreId, primary.intensity);

  // topKeys[i] and resolved[i] are parallel — attach matched terms + reason per emotion
  const emotions = topKeys.map((k, i) => {
    const { _coreId, ...e } = resolved[i];
    return {
      ...e,
      matchedTerms: termsByKey[k] || [],
      reason: generateInsight(_coreId, e.intensity),
    };
  });

  return { emotions, insight };
}

function generateInsight(emotionId, intensity) {
  const insights = {
    joy:          { intense: "Your entry radiates genuine joy — let yourself soak in this fully.", moderate: "There\'s a real warmth in what you\'ve shared. Joy is present here.", mild: "A quiet contentment runs through your words. Serenity is a gift worth noticing." },
    trust:        { intense: "Deep admiration is evident — let this inspire rather than idealize.", moderate: "Trust and openness come through. This is a foundation worth building on.", mild: "You\'re in an accepting, open state. This is fertile ground for connection." },
    fear:         { intense: "Terror is your nervous system\'s alarm at full volume. You don\'t have to face this alone.", moderate: "Fear is present. It\'s pointing at something that matters — let\'s look at what it\'s protecting.", mild: "A gentle unease runs through your words. Sometimes that\'s just wisdom asking you to pay attention." },
    surprise:     { intense: "Something has genuinely astonished you — allow the wonder in before you analyse it.", moderate: "The unexpected has landed. Give yourself a moment before responding.", mild: "Something shifted your attention. Stay curious." },
    sadness:      { intense: "Grief is deep love with nowhere to go. Be gentle with yourself.", moderate: "Sadness is here. It\'s honest and it matters. You don\'t have to carry it alone.", mild: "A wistful, reflective quality comes through. Let it be what it is." },
    disgust:      { intense: "Something has violated a deep value. That signal deserves examination, not suppression.", moderate: "A strong aversion is present — there\'s information here about what you won\'t accept.", mild: "A low-level disengagement comes through. What would make this more meaningful?" },
    anger:        { intense: "Your anger is intense. Before acting, discharge the energy — move, breathe, write.", moderate: "Anger is speaking up for something. Listen to what it\'s defending.", mild: "A small irritation has been named. That\'s useful information about your needs." },
    anticipation: { intense: "You\'re primed and ready. Channel that energy into deliberate preparation.", moderate: "You\'re forward-looking. Make sure anticipation becomes action rather than just waiting.", mild: "Curiosity and interest are quietly alive. Follow the thread." },
    love:         { blend: "Love is woven through your words. This connection is real and worth tending." },
    optimism:     { blend: "Hope is present. Your forward-looking orientation is a genuine strength." },
    awe:          { blend: "Something vast has touched you. Let it shift your perspective — that\'s the gift of awe." },
    remorse:      { blend: "Remorse shows that your values are intact. The next step is repair, not punishment." },
    contempt:     { blend: "Contempt is a signal — but it creates distance. Consider what\'s underneath it." },
    aggressiveness: { blend: "You\'re ready to fight for something. Direct that energy wisely." },
    disapproval:  { blend: "Disappointment and surprise have mixed here. What needed to be different?" },
    submission:   { blend: "There\'s a yielding quality here. Ask whether this is chosen or compelled." },
  };

  const emotionInsights = insights[emotionId];
  if (!emotionInsights) return "Your emotional state is nuanced — sit with it and see what it\'s telling you.";
  return emotionInsights[intensity] || emotionInsights['blend'] || emotionInsights['moderate'] || "Your emotional state is nuanced — sit with it and see what it\'s telling you.";
}
