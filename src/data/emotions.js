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
});
BLEND_EMOTIONS.forEach(blend => {
  EMOTION_NAME_MAP[blend.name.toLowerCase()] = blend.id;
});

// Keyword-based emotion detection
const KEYWORD_MAP = {
  joy:          ['happy','happiness','joyful','glad','delighted','pleased','wonderful','great','amazing','fantastic','cheerful','elated','thrilled','excited','content','satisfied','enjoy','love','wonderful','blessed','lucky','grateful','thankful','smile','laugh','fun','celebration','celebrate'],
  ecstasy:      ['ecstatic','euphoric','blissful','overjoyed','on top of the world','best day','incredible','unbelievable','best ever','beyond happy','overwhelmingly happy'],
  serenity:     ['serene','calm','peaceful','content','at ease','relaxed','tranquil','gentle','quiet','still','rest','restful','settled'],
  trust:        ['trust','believe','rely','confident','safe','secure','faith','honest','loyal','reliable','dependable','support','supportive','open','comfortable'],
  admiration:   ['admire','admiration','respect','look up','inspired by','hero','amazing person','incredible person','brilliant','genius','role model','mentor','idol'],
  acceptance:   ['accept','accepting','okay with','fine with','at peace with','embrace','acknowledge','open minded','tolerant','understanding'],
  fear:         ['fear','afraid','scared','frightened','terrified','nervous','anxious','worry','worried','dread','panic','threat','danger','unsafe','insecure'],
  terror:       ['terrified','terror','petrified','horror','horrified','nightmare','catastrophe','disaster','paralyzed by fear'],
  apprehension: ['apprehensive','uneasy','unsure','uncertain','hesitant','wary','cautious','nervous about','worried about','concerned about'],
  surprise:     ['surprised','unexpected','shocked','astonished','caught off guard','did not expect','wow','unbelievable','out of nowhere','sudden'],
  amazement:    ['amazed','awestruck','jaw dropped','stunned','blown away','mind blown','speechless','unbelievable','extraordinary'],
  distraction:  ['distracted','unfocused','scattered','lost focus','hard to concentrate','all over the place','diverted'],
  sadness:      ['sad','unhappy','down','depressed','blue','gloomy','miserable','disappointed','heartbroken','hurt','crying','tears','cry','upset','low','empty','hollow','lonely','alone','isolated','miss','missing','lost','grief','mourning','sorrow'],
  grief:        ['grief','grieving','devastated','heartbroken','lost someone','death','died','passed away','mourning','bereaved','inconsolable'],
  pensiveness:  ['pensive','wistful','nostalgic','melancholy','bittersweet','reflective','reminiscing','wishing things were different','longing'],
  disgust:      ['disgusting','disgusted','revolting','repulsed','gross','nauseating','horrible','appalling','awful','yuck','eww','repulsive'],
  loathing:     ['loathe','loathing','hate','detest','abhor','despise','cannot stand','utterly disgusting','complete disgust'],
  boredom:      ['bored','boring','dull','tedious','monotonous','uninteresting','nothing to do','listless','unstimulated'],
  anger:        ['angry','anger','mad','furious','irate','livid','outraged','frustrated','irritated','annoyed','pissed','resentful','bitter','hostile'],
  rage:         ['rage','raging','fuming','seething','exploding','volcanic','enraged','cannot control anger','blind rage','losing it'],
  annoyance:    ['annoyed','irritated','bugged','minor frustration','slightly frustrated','little things','pet peeve','irked'],
  anticipation: ['anticipating','looking forward','excited about','cant wait','upcoming','eager','hopeful','expectation','planning','preparing','about to'],
  vigilance:    ['vigilant','hyper alert','on guard','watching carefully','hypervigilant','cant relax','on edge','high alert','ready for anything'],
  interest:     ['interested','curious','intrigued','fascinated','engaged','drawn to','want to learn','wondering','exploring'],
  // blends
  love:         ['love','loving','adore','cherish','devoted','affectionate','compassionate','warmth','tenderness','care deeply','in love'],
  optimism:     ['optimistic','hopeful','positive','bright future','things will get better','looking up','promising','excited for future'],
  awe:          ['awe','awestruck','majestic','sublime','transcendent','bigger than me','perspective','humbled','wonder'],
  remorse:      ['remorse','regret','guilty','guilt','ashamed','shame','sorry','apologize','did wrong','messed up','let down','failed'],
  contempt:     ['contempt','disdain','scorn','dismissive','superiority','look down on','pathetic','beneath me','worthless'],
  aggressiveness: ['aggressive','assertive','forceful','driven hard','fighting for','will not back down','charging ahead','competitive','determined to win'],
  disapproval:  ['disapprove','disappointed','not what I expected','let down','should have been','fell short','below expectations'],
  submission:   ['submitted','deferred','yielded','not my place','gave in','comply','complied','obey','followed orders'],
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

function resolveEmotionEntry(key) {
  const blendIds = BLEND_EMOTIONS.map(e => e.id);
  if (blendIds.includes(key)) {
    const blend = BLEND_EMOTIONS.find(e => e.id === key);
    return { emotion: blend.name, intensity: 'moderate', segmentId: blend.id, _coreId: key };
  }
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
  const lower = text.toLowerCase();
  const scores = {};
  const termsByKey = {}; // emotionKey -> matched keyword strings

  Object.entries(KEYWORD_MAP).forEach(([emotion, keywords]) => {
    let score = 0;
    const matched = [];
    keywords.forEach(kw => {
      if (lower.includes(kw)) {
        score += kw.split(" ").length;
        matched.push(kw);
      }
    });
    if (score > 0) {
      scores[emotion] = score;
      termsByKey[emotion] = matched;
    }
  });

  if (Object.keys(scores).length === 0) {
    return {
      emotions: [{ emotion: "Joy", intensity: "mild", segmentId: "joy-mild" }],
      insight: "Your entry doesn't strongly signal a particular emotion — perhaps you're in a state of calm reflection.",
      matchedTerms: [],
    };
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
