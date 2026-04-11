// Biblical processing questions for Christian mode.
// Mirrors the structure of processQuestions.js — same field names.
// Falls back to processQuestions.default for any emotion not listed here.

export const CHRISTIAN_PROCESS_QUESTIONS = {

  joy: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What gift from God is this joy pointing toward — an answered prayer, a season of blessing, or a work He has done in your life?',
      placeholder: 'Be specific — the more you name it, the more it becomes worship…',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"This is the day the Lord has made. We will rejoice and be glad in it." (Psalm 118:24). Breathe slowly and receive the gift of this moment before reflecting further.',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'Is this joy rooted in what is temporary (circumstances) or in what is eternal (God\'s love, your identity in Christ)?',
      scaleMin: 'Mostly circumstantial',
      scaleMax: 'Deeply rooted',
    },
    {
      label: 'NEED',
      type: 'text',
      q: 'How might God be calling you to share or steward this joy — in your family, your community, or your witness to others?',
      placeholder: '"Always be full of joy in the Lord… Let everyone see that you are considerate in all you do." (Philippians 4:4–5)',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Write a short prayer of gratitude for this joy, naming specifically what you\'re thankful for.',
      placeholder: '"Rejoice always, pray continually, give thanks in all circumstances." (1 Thessalonians 5:16–18)',
    },
  ],

  trust: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What aspect of trust is God developing in you right now — trust in His timing, His provision, His character, or His plan?',
      placeholder: '"Trust in the Lord with all your heart; do not depend on your own understanding." (Proverbs 3:5)',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"Be still, and know that I am God!" (Psalm 46:10). Take a slow breath and rest in the fact that God holds what you cannot control.',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Where has God proven faithful to you before? What specific testimony can you call to mind right now?',
      placeholder: '"I will remember the deeds of the Lord; yes, I will remember your miracles of long ago." (Psalm 77:11)',
    },
    {
      label: 'NEED',
      type: 'text',
      q: 'Is there an area where you are trying to control what only God can carry? What would releasing that look like?',
      placeholder: '"Commit everything you do to the Lord. Trust him, and he will help you." (Psalm 37:5)',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Write down one specific thing you are choosing to trust God with today — the more concrete, the better.',
      placeholder: '"You will keep in perfect peace all who trust in you, all whose thoughts are fixed on you!" (Isaiah 26:3)',
    },
  ],

  fear: [
    {
      label: 'REGULATE',
      type: 'breathe',
      instruction: '"He gives breath to everyone, life to everyone who walks the earth." (Isaiah 42:5). Breathe slowly and receive the life God is giving you right now, in this moment.',
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically are you afraid of? Name it plainly before God.',
      placeholder: '"I prayed to the Lord, and he answered me. He freed me from all my fears." (Psalm 34:4)',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where do you feel this fear in your body right now? What is happening physically?',
      placeholder: '"For God has not given us a spirit of fear and timidity, but of power, love, and self-discipline." (2 Timothy 1:7)',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this fear pointing toward something you need — greater trust in God, a conversation you\'ve been avoiding, a step of obedience, or simply His comfort?',
      placeholder: '"Don\'t be afraid, for I am with you. Don\'t be discouraged, for I am your God." (Isaiah 41:10)',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Write out Isaiah 41:10 slowly in your own words — let God\'s words become your anchor for what you are facing.',
      placeholder: '"Don\'t be afraid, for I am with you. Don\'t be discouraged, for I am your God. I will strengthen you and help you."',
    },
  ],

  surprise: [
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"Be still, and know that I am God!" (Psalm 46:10). God was not surprised by what surprised you. Breathe and return to that steadiness.',
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What happened? Describe it plainly — as you might write in a letter to God.',
      placeholder: 'He already knows; write it anyway. Bringing it to Him in words is itself a prayer…',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'How is your body responding to this? What are you feeling physically?',
      placeholder: '"Cast all your anxiety on him because he cares for you." (1 Peter 5:7). Bring your physical response to God too…',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Looking through the lens of Romans 8:28 — "God causes everything to work together for the good of those who love God" — what might He be doing here, even if you can\'t fully see it?',
      placeholder: '"For just as the heavens are higher than the earth, so my ways are higher than your ways." (Isaiah 55:9)',
    },
    {
      label: 'NEED',
      type: 'text',
      q: 'What do you need most right now — comfort, clarity, patience, or trust? Ask God for it specifically.',
      placeholder: '"You do not have because you do not ask God." (James 4:2). Bring the specific need.',
    },
  ],

  sadness: [
    {
      label: 'REGULATE',
      type: 'breathe',
      instruction: '"The Lord is close to the brokenhearted." (Psalm 34:18). He is near to you right now — not in the future, when you feel better. Breathe and let that nearness be real.',
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What are you sad about? Write it out as a lament — speak honestly to God as the Psalmists did, without softening it.',
      placeholder: '"How long, Lord? Will you forget me forever?" (Psalm 13:1). Plain honesty before God is not disrespect — it is faith.',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where does this sadness live in your body right now?',
      placeholder: '"He heals the brokenhearted and bandages their wounds." (Psalm 147:3). Let God tend to what is physically heavy…',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What does this sadness tell you about what you love and value? In what way might it reflect something of God\'s own heart — His grief over what is lost or broken?',
      placeholder: '"Jesus wept." (John 11:35). God is not unmoved by what moves you…',
    },
    {
      label: 'NEED',
      type: 'text',
      q: 'What would receiving God\'s comfort look like for you right now — time in prayer, rest, the company of a trusted person, or simply sitting with the Psalms?',
      placeholder: '"God blesses those who mourn, for they will be comforted." (Matthew 5:4). The comfort is real — how do you need to receive it?',
    },
  ],

  disgust: [
    {
      label: 'GROUND',
      type: 'text',
      q: 'What is your body doing right now — stomach, throat, your gut? What physical signals are you receiving?',
      placeholder: '"Hate what is wrong. Hold tightly to what is good." (Romans 12:9). Your body may be registering a moral signal…',
      somatic: true,
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically are you disgusted by — a behaviour, a situation, something in yourself or the world? Name it as precisely as you can.',
      placeholder: 'Try to name it clearly. Vague disgust is hard to respond to wisely…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this disgust pointing toward a value that reflects God\'s own holiness? What line do you sense has been crossed?',
      placeholder: '"The Lord hates… hands that shed innocent blood, a heart that plots evil." (Proverbs 6:16–18). Your moral instinct may be well-calibrated…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is there a distinction between what you are rejecting and the person involved? How does "hate the sin, love the sinner" apply here — is that easy or hard for you right now?',
      placeholder: '"For everyone has sinned; we all fall short of God\'s glorious standard." (Romans 3:23)',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What does love require in this situation — withdrawal, a boundary, speaking truth, or intercession?',
      placeholder: '"Let love be your highest goal." (1 Corinthians 14:1). Disgust is a signal, not a destination — what does it call you toward?',
    },
  ],

  anger: [
    {
      label: 'REGULATE',
      type: 'breathe',
      instruction: '"Don\'t sin by letting anger control you." (Ephesians 4:26). Before anything else — breathe. The anger may be completely legitimate. What happens next is what matters.',
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What are you angry about? Be specific. Writing it out creates the pause that James 1:19 calls for.',
      placeholder: '"Be quick to listen, slow to speak, and slow to get angry." (James 1:19). Writing is the slow speech this requires…',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where does this anger sit in your body right now? Notice it without acting from it yet.',
      placeholder: '"Search me, O God, and know my heart." (Psalm 139:23). Invite God into the physical experience…',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Underneath the anger, what might be hurt, afraid, or grieving? "The anger of man does not produce the righteousness of God." (James 1:20) — What is beneath this emotion?',
      placeholder: 'Anger often protects a wound. What is the wound here?',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Is there someone you need to speak to truthfully and lovingly — "speak the truth in love" (Ephesians 4:15)? Or is forgiveness needed first? What is the Spirit prompting you toward?',
      placeholder: '"Be kind to each other, tenderhearted, forgiving one another, just as God through Christ has forgiven you." (Ephesians 4:32)',
    },
  ],

  anticipation: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What are you anticipating? Describe what is coming and how you\'re feeling about it before God.',
      placeholder: '"\'For I know the plans I have for you,\' says the Lord. \'They are plans for good and not for disaster.\'" (Jeremiah 29:11)',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"This is the day the Lord has made." (Psalm 118:24). Before what is coming — right now — is also a gift. Breathe and be here first.',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'How does this anticipation align with what God has called you to? How does what\'s coming fit into His story for your life — as best you can see it?',
      placeholder: '"\'For I know the plans I have for you,\' says the Lord." (Jeremiah 29:11). You don\'t need the full map — just the next step…',
    },
    {
      label: 'NEED',
      type: 'text',
      q: 'Is there any anxiety mixed into this anticipation? What would you like to give to God about what\'s ahead?',
      placeholder: '"Don\'t worry about anything; instead, pray about everything." (Philippians 4:6). Name the specific worry and hand it over…',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What faithful preparation or act of trust can you take today — not anxious over-preparation, but the one step that obedience and wisdom call for?',
      placeholder: '"Wait patiently for the Lord. Be brave and courageous." (Psalm 27:14)',
    },
  ],

  grateful: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically are you grateful for right now? Be as particular as you can — move from vague to concrete.',
      placeholder: '"Every good and perfect gift is from above." (James 1:17). Name the specific gift, not just the category…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Who or what was the instrument of this gift? How do you see God\'s hand in it?',
      placeholder: 'Sometimes gifts come directly from God, sometimes through people or circumstances. Trace the path…',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"Give thanks to the Lord, for he is good! His faithful love endures forever." (Psalm 107:1). Breathe slowly and let gratitude become a physical experience, not just a thought.',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How does this gratitude change how you see your current circumstances?',
      scaleMin: 'Very little',
      scaleMax: 'Shifts everything',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Write a short prayer of thanks — specific, personal, addressed to God. Then identify one person you can express gratitude to today.',
      placeholder: '"Always be joyful. Never stop praying. Be thankful in all circumstances." (1 Thessalonians 5:16–18)',
    },
  ],

  worried: [
    {
      label: 'REGULATE',
      type: 'breathe',
      instruction: '"Give all your worries and cares to God, for he cares about you." (1 Peter 5:7). You are not carrying this alone. Breathe and remember who is with you.',
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically are you worried about? List everything — get it out of your head and onto the page.',
      placeholder: '"Don\'t worry about anything; instead, pray about everything." (Philippians 4:6). For every worry you name, there is a prayer you could pray…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Of what you\'ve listed, what is actually within your control today? What is in God\'s hands alone?',
      placeholder: '"Can all your worries add a single moment to your life?" (Matthew 6:27). What is yours to act on, and what is His to carry?',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How much of what you\'re worrying about has God provided for you in the past, in similar situations?',
      scaleMin: 'Very little track record',
      scaleMax: 'He has always come through',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Write a prayer that hands each worry specifically to God. End with Philippians 4:7 as a declaration: "Then you will experience God\'s peace, which exceeds anything we can understand."',
      placeholder: 'Be specific — not "I give you my worries" but "I give you this specific thing: ___"',
    },
  ],

  lonely: [
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"I will never fail you. I will never abandon you." (Hebrews 13:5). In this moment, God is present. Breathe and let that reality land before anything else.',
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What is the loneliness about — physical isolation, feeling unseen, disconnection from God, or something else? Try to name it precisely.',
      placeholder: '"God sets the lonely in families." (Psalm 68:6). Loneliness is a signal — what is it pointing toward?',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where do you feel this loneliness in your body?',
      placeholder: '"Where can I go from your Spirit? Where can I flee from your presence?" (Psalm 139:7). You are more accompanied than you feel…',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is there a distinction between being alone and feeling lonely — and between feeling lonely and being abandoned by God? How would you describe each of those right now?',
      placeholder: '"The Lord himself goes before you and will be with you; he will never leave you nor forsake you." (Deuteronomy 31:8)',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What one step toward human community could you take today — however small? And what would receiving God\'s companionship more fully look like right now?',
      placeholder: '"Let us not neglect our meeting together." (Hebrews 10:25). What is the smallest bridge you could build today?',
    },
  ],

  proud: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What are you proud of? Describe what happened and what you did to get there.',
      placeholder: '"Whatever you do, work at it with all your heart, as working for the Lord." (Colossians 3:23). Name the specific achievement…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What gifts, opportunities, or people did God provide that made this possible? How do you see His hand in this outcome?',
      placeholder: '"For who makes you different from anyone else? What do you have that you did not receive?" (1 Corinthians 4:7)',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"Well done, my good and faithful servant." (Matthew 25:21). Breathe slowly and receive this moment. Let the satisfaction be real without rushing past it.',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is there anyone who helped make this possible who deserves to be honoured or thanked?',
      placeholder: '"So encourage each other and build each other up." (1 Thessalonians 5:11)',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Write a short prayer of gratitude — offering this achievement back to God and asking how He wants to use it.',
      placeholder: '"Let the one who boasts boast in the Lord." (1 Corinthians 1:31)',
    },
  ],

  hopeful: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What are you hopeful about? Describe what you are expecting or believing for.',
      placeholder: '"This hope is a strong and trustworthy anchor for our souls." (Hebrews 6:19)',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this hope grounded in what God has specifically promised, or in what you want to happen? How can you tell the difference?',
      placeholder: '"Let us hold tightly without wavering to the hope we affirm, for God can be trusted to keep his promise." (Hebrews 10:23)',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"May the God of hope fill you with all joy and peace as you trust in him." (Romans 15:13). Breathe and receive hope as a gift of the Spirit — not something you generate, but something you receive.',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How much of this hope is in God\'s hands, versus dependent on things going a specific way?',
      scaleMin: 'Very circumstance-dependent',
      scaleMax: 'Anchored in God\'s character',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What faithful action does this hope call you toward today — not striving, but a genuine response to what God is inviting you into?',
      placeholder: '"Those who hope in the Lord will renew their strength." (Isaiah 40:31). Let hope become movement…',
    },
  ],

  inspired: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What are you inspired by or about? Describe the idea, vision, or calling that has come to you.',
      placeholder: '"For God is working in you, giving you the desire and the power to do what pleases him." (Philippians 2:13)',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Could this inspiration be from God — a prompting of the Spirit, a calling, something He has been building toward in your life? How do you discern that?',
      placeholder: '"We are God\'s masterpiece. He has created us anew in Christ Jesus, so we can do the good things he planned for us long ago." (Ephesians 2:10)',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where does this inspiration live in your body right now — where are you feeling it?',
      placeholder: 'Inspiration often has a physical charge. Notice it — it\'s part of the gift…',
      somatic: true,
    },
    {
      label: 'NEED',
      type: 'text',
      q: 'What is the smallest first step that would honour this inspiration? What would get in the way — and how have you navigated that obstacle before?',
      placeholder: '"Commit your actions to the Lord, and your plans will succeed." (Proverbs 16:3)',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Write a short prayer consecrating this inspiration to God — offering it back to Him and asking for the courage and strength to act on it.',
      placeholder: '"I can do everything through Christ, who gives me strength." (Philippians 4:13)',
    },
  ],

  // ── Intensity-level emotions ─────────────────────────────────────────────────

  ecstasy: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What is producing this overwhelming joy — what are you experiencing that feels this extraordinary?',
      placeholder: '"You are filled with an inexpressible and glorious joy." (1 Peter 1:8). Describe what is happening…',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where are you feeling this in your body right now?',
      placeholder: 'Peak joy has a physical quality. Notice where it lives — warmth, lightness, expansion…',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Could this joy be a foretaste of what God has prepared — a glimpse of the fullness He promises? What does it make you believe about His goodness?',
      placeholder: '"You will show me the way of life, granting me the joy of your presence." (Psalm 16:11)',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Write a brief act of worship — a prayer, a declaration, or a few lines of praise — in response to this moment.',
      placeholder: '"Let everything that has breath praise the Lord!" (Psalm 150:6)',
    },
  ],

  serenity: [
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"He lets me rest in green meadows; he leads me beside peaceful streams." (Psalm 23:2). Receive this peace before you analyse it.',
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What conditions has God placed you in that are allowing this peace? Name them specifically.',
      placeholder: '"The Lord is my shepherd; I have all that I need." (Psalm 23:1). What does "enough" look like right now?',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How often do you experience this kind of deep quiet?',
      scaleMin: 'Almost never',
      scaleMax: 'Often',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What practices or conditions make serenity more available to you? What is worth protecting in your rhythm of life?',
      placeholder: '"You will keep in perfect peace all who trust in you, all whose thoughts are fixed on you!" (Isaiah 26:3)',
    },
  ],

  admiration: [
    {
      label: 'NAME',
      type: 'text',
      q: 'Who or what are you admiring — and what specifically about them moves you?',
      placeholder: '"Fix your thoughts on what is true, and honorable, and right, and pure, and lovely, and admirable." (Philippians 4:8)',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What does the quality you admire reflect about God\'s image in this person — and what does it reveal about what He may be calling you toward?',
      placeholder: '"We are God\'s masterpiece, created to do the good things he planned for us." (Ephesians 2:10)',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How much does this admiration point you toward something you are being called to pursue yourself?',
      scaleMin: 'Feels entirely out of reach',
      scaleMax: 'I\'m being called toward this',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Express this admiration — to God for what He has made, and if possible to the person themselves. What would you say?',
      placeholder: '"Encourage each other and build each other up." (1 Thessalonians 5:11)',
    },
  ],

  acceptance: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What are you feeling accepted by or at peace with right now?',
      placeholder: '"Accept each other just as Christ has accepted you." (Romans 15:7). Name what you are receiving or extending…',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"There is no condemnation for those who belong to Christ Jesus." (Romans 8:1). This is the deepest acceptance available. Breathe and receive it.',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is there something or someone you are finding harder to accept — that you sense God is inviting you toward peace with?',
      placeholder: '"Make allowance for each other\'s faults and forgive anyone who offends you." (Colossians 3:13)',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Who in your life needs the same unconditional welcome you are receiving? What would extending that look like?',
      placeholder: '"Love your neighbor as yourself." (Matthew 22:39)',
    },
  ],

  terror: [
    {
      label: 'REGULATE',
      type: 'breathe',
      instruction: '"Even when I walk through the darkest valley, I will not be afraid, for you are close beside me." (Psalm 23:4). He is here. Breathe first — slowly.',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Name five things you can physically see or touch right now. Stay in this moment.',
      placeholder: 'Terror pulls you into the worst case. God is present in the present. Stay here first…',
      somatic: true,
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What is the specific threat? Describe what is actually happening — not the worst case, just what is real.',
      placeholder: '"God is our refuge and strength, always ready to help in times of trouble." (Psalm 46:1). Name what you are facing…',
    },
    {
      label: 'NEED',
      type: 'text',
      q: 'What do you need most right now — safety, prayer, support, information? Ask God for that specifically.',
      placeholder: '"In my distress I cried out to the Lord; yes, I prayed to my God for help. He heard me." (Psalm 18:6)',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What is the one next faithful step — not the whole solution, just what is immediately in front of you?',
      placeholder: '"Don\'t be afraid, for I am with you." (Isaiah 41:10). One step at a time, with Him.',
    },
  ],

  apprehension: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically are you apprehensive about? Name the concern before God.',
      placeholder: '"Tell God what you need, and thank him for all he has done." (Philippians 4:6). Name it precisely…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What is the worst realistic outcome you are imagining? How does that sit alongside what God has promised?',
      placeholder: '"God causes everything to work together for the good of those who love God." (Romans 8:28)',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"Be strong and courageous! Do not be afraid or discouraged. For the Lord your God is with you wherever you go." (Joshua 1:9). Breathe that in.',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What does faithfulness look like here — careful preparation, or surrender of the outcome? Write a prayer for whichever is needed.',
      placeholder: '"Commit your actions to the Lord, and your plans will succeed." (Proverbs 16:3)',
    },
  ],

  amazement: [
    {
      label: 'GROUND',
      type: 'text',
      q: 'Describe what you just encountered — as sensory and specific as possible. Stay in the experience.',
      placeholder: '"Come, see the glorious works of the Lord!" (Psalm 66:5). Describe what stopped you…',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Could this be God at work — in creation, in a person, in an unexpected turn of events? What does this reveal about His character?',
      placeholder: '"God can do much, much more than anything we can ask or imagine." (Ephesians 3:20)',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'How has this shifted your sense of what is possible — what does it enlarge your faith for?',
      placeholder: '"For I am about to do something new. See, I have already begun!" (Isaiah 43:19)',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Let this become testimony — write a few sentences about what God has done or shown you here.',
      placeholder: '"Publish his glorious deeds among the nations. Tell everyone about the amazing things he does." (Psalm 96:3)',
    },
  ],

  distraction: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What is pulling your attention right now — what are you finding hard to stay present to?',
      placeholder: '"Look straight ahead, and fix your eyes on what lies before you." (Proverbs 4:25). What is scattering you?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is there something beneath this distraction — an anxiety, an avoidance, or something God may be trying to get your attention on?',
      placeholder: '"Search me, O God, and know my heart; test me and know my anxious thoughts." (Psalm 139:23)',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"Be still, and know that I am God!" (Psalm 46:10). One breath. One moment. Return.',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What is the one thing God is asking you to attend to right now? Write it down and return to it.',
      placeholder: '"Seek the Kingdom of God above all else, and live righteously." (Matthew 6:33)',
    },
  ],

  grief: [
    {
      label: 'REGULATE',
      type: 'breathe',
      instruction: '"The Lord is close to the brokenhearted; he rescues those whose spirits are crushed." (Psalm 34:18). He is already here. Breathe — slowly.',
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What is the loss at the centre of this grief — what or who are you grieving?',
      placeholder: 'Grief honours what mattered. Name what has been lost…',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where does this grief live in your body right now?',
      placeholder: '"You keep track of all my sorrows. You have collected all my tears in your bottle." (Psalm 56:8). God notices what your body is carrying.',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Jesus wept at the grave of His friend. What does it mean to you that God does not stand outside your grief but has entered it?',
      placeholder: '"He was despised and rejected… a man of sorrows, acquainted with deepest grief." (Isaiah 53:3)',
    },
    {
      label: 'NEED',
      type: 'text',
      q: 'What do you need most right now — to be held by God, to grieve with someone, to be heard? Ask for that specifically.',
      placeholder: '"He heals the brokenhearted and bandages their wounds." (Psalm 147:3)',
    },
  ],

  pensiveness: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What are you quietly reflecting on — what thought, memory, or weight is present right now?',
      placeholder: '"Pour out your heart to him, for God is our refuge." (Psalm 62:8). Name what is in the background…',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"Be still, and know that I am God." (Psalm 46:10). Pensiveness has something to say — give it space before you rush through it.',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What is beneath this reflective sadness — loss, longing, regret, or the weight of being human? Could God be inviting you to see something through this?',
      placeholder: '"Sorrow is better than laughter! For sadness has a refining influence on us." (Ecclesiastes 7:3)',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Write a short prayer about what you are carrying — honest, unhurried, not requiring resolution.',
      placeholder: '"Why am I discouraged? Why is my heart so sad? I will put my hope in God!" (Psalm 42:5)',
    },
  ],

  loathing: [
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: 'Loathing this intense needs a breath before anything else. Slow down before engaging with it.',
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically is producing this level of revulsion? Name it precisely before God.',
      placeholder: '"Hate what is wrong. Hold tightly to what is good." (Romans 12:9). Name what you are reacting to…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this a righteous response to genuine evil — or has contempt for the person crept in alongside disgust at the behaviour?',
      placeholder: '"Everyone has sinned; we all fall short of God\'s glorious standard." (Romans 3:23). Examine which is present…',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'Is this feeling directed at a behaviour — or has it become contempt for a person?',
      scaleMin: 'Directed at the behaviour',
      scaleMax: 'Directed at the person',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What does love and wisdom require here — distance, action, or prayer for the person involved? Ask God to guide you toward good rather than merely away from wrong.',
      placeholder: '"Do not be overcome by evil, but overcome evil with good." (Romans 12:21)',
    },
  ],

  boredom: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What are you bored with — what situation or context is producing this flatness?',
      placeholder: 'Boredom has a source. Name it before deciding what to do with it…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this genuine disengagement — or might it be the soul resisting stillness? Could God be using this space to invite something?',
      placeholder: '"Be still, and know that I am God." (Psalm 46:10). What if the boredom is a doorway?',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How long has this flatness been present?',
      scaleMin: 'Just right now',
      scaleMax: 'For a long time',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Is God redirecting you toward something new — or calling you to steward faithfully what is already in front of you?',
      placeholder: '"Work willingly at whatever you do, as though you were working for the Lord." (Colossians 3:23)',
    },
  ],

  rage: [
    {
      label: 'REGULATE',
      type: 'breathe',
      instruction: '"Don\'t sin by letting anger control you. Don\'t let the sun go down while you are still angry." (Ephesians 4:26). Breathe. Do not act or speak from this place yet.',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where is this rage in your body right now — what does it physically feel like?',
      placeholder: 'Heat, pressure, tension — locate it physically before going near the story…',
      somatic: true,
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What happened? Describe the trigger plainly — just the facts.',
      placeholder: '"Be quick to listen, slow to speak, and slow to get angry." (James 1:19). Just the facts for now…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What is beneath the rage — what fear, grief, injustice, or wound is it sitting on? What does God see underneath this?',
      placeholder: '"Search me, O God, and know my heart; test me and know my anxious thoughts." (Psalm 139:23)',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What does faithfulness — not rage — require here? Write a prayer asking God for the strength to respond rather than react.',
      placeholder: '"Do not repay evil for evil… Instead, pay them back with a blessing." (1 Peter 3:9)',
    },
  ],

  annoyance: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically is annoying you right now?',
      placeholder: 'Name the exact thing rather than keeping it vague. Specificity helps…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this about the thing itself — or is it pointing to an unmet expectation or a deeper frustration? What might God be revealing through this irritation?',
      placeholder: '"Sensible people control their temper; they earn respect by overlooking wrongs." (Proverbs 19:11)',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'On reflection, how much does this actually matter?',
      scaleMin: 'Not much at all',
      scaleMax: 'More than it seems',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Is this worth addressing, or is this a moment to practise overlooking an offence? Pray for the person or situation — even briefly.',
      placeholder: '"Love does not keep a record of being wronged." (1 Corinthians 13:5). What does love require here?',
    },
  ],

  vigilance: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What are you watching for — what concern is keeping you on alert?',
      placeholder: '"Be on guard. Stand firm in the faith. Be courageous. Be strong." (1 Corinthians 16:13). Name what you are watching over…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this alertness God-given — a call to watch over something real — or has it tipped into anxious striving?',
      placeholder: '"The Lord himself goes before you and will be with you." (Deuteronomy 31:8). You are not the only one watching.',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"Indeed, he who watches over Israel never slumbers or sleeps." (Psalm 121:4). You can rest — He does not.',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Give to God what you are watching over — name it and release it to the One who guards far better than you can.',
      placeholder: '"The peace of God… will guard your hearts and minds as you live in Christ Jesus." (Philippians 4:7)',
    },
  ],

  interest: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What has caught your interest — what are you being drawn toward?',
      placeholder: '"It is the glory of kings to search things out." (Proverbs 25:2). Name what is drawing you…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Could this interest be God-given — something He has placed in you that points toward His purposes for you? What does it feel like it could lead to?',
      placeholder: '"God is working in you, giving you the desire and the power to do what pleases him." (Philippians 2:13)',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this idle curiosity or something more significant — a direction, a calling, something worth pursuing?',
      placeholder: '"We are God\'s masterpiece… created to do the good things he planned for us long ago." (Ephesians 2:10)',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What is the smallest faithful step to explore this further — today, offered to God as you take it?',
      placeholder: '"Call to me and I will answer you and tell you great and unsearchable things you do not know." (Jeremiah 33:3)',
    },
  ],

  // ── Blend emotions ──────────────────────────────────────────────────────────

  love: [
    {
      label: 'NAME',
      type: 'text',
      q: 'Who or what is this love directed toward? Name them specifically before God.',
      placeholder: '"This is the day the Lord has made." Every love begins with a gift worth naming…',
      instruction: 'Love in Scripture is not primarily a feeling but a covenant — a choice to will the good of another. Bring whatever form of love is present.',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'How does this love feel right now — in your chest, throat, or gut? Let yourself be present to it.',
      placeholder: 'Warm, aching, tender, full, fragile — what is the physical quality of this love?',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How fully has this love been expressed — does the person know the depth of what you feel?',
      scaleMin: 'Still entirely inside me',
      scaleMax: 'Fully known and given',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is there anything about this love that reflects God\'s love for you — His patience, His faithfulness, His willingness to be known?',
      placeholder: '"We love each other because he loved us first." (1 John 4:19). How does God\'s love show up in what you\'re feeling?',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What does this love ask of you right now — to show up, to say something, to release, or to pray for someone?',
      placeholder: '"Love your neighbor as yourself." (Matthew 22:39). Let love become a specific act…',
    },
  ],

  submission: [
    {
      label: 'NAME',
      type: 'text',
      q: 'Describe what you are yielding to or going along with. Is this deference to God, to another person, or to circumstances?',
      placeholder: '"Humble yourselves before the Lord, and he will lift you up." (James 4:10). Name what is being surrendered…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this something you are genuinely choosing in faith — or does it feel more like compliance under pressure?',
      placeholder: 'There is a difference between chosen surrender and compelled yielding. Which is this for you?',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"Not my will, but yours be done." (Luke 22:42). Jesus prayed this in anguish — and still chose it. Take a breath and let that model settle in.',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What does trusting God with this outcome actually require of you? What are you releasing?',
      placeholder: '"Commit everything you do to the Lord. Trust him, and he will help you." (Psalm 37:5)',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Write a short prayer of release — offering this situation or relationship to God and asking for peace in the surrender.',
      placeholder: '"The Lord himself goes before you and will be with you; he will never leave you nor forsake you." (Deuteronomy 31:8)',
    },
  ],

  awe: [
    {
      label: 'GROUND',
      type: 'text',
      q: 'Describe what you were experiencing when awe arose — what did you see, hear, or move through? Stay close to the moment itself.',
      placeholder: 'Be sensory and specific. Stay in the experience before explaining it…',
      instruction: '"Holy, holy, holy is the Lord of Heaven\'s Armies! The whole earth is filled with his glory!" (Isaiah 6:3). Awe is the soul\'s right response to encountering something infinitely greater.',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What specifically triggered this sense of vastness — what in you recognised or responded to it?',
      placeholder: 'Awe is selective. Something in you met something larger. What was it, and what does that tell you?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'How has this shifted your sense of scale — what looks smaller now, or larger? What has it said about God?',
      placeholder: '"How unsearchable his judgments, and his paths beyond tracing out!" (Romans 11:33)',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Did this leave you feeling connected to God — His power, His beauty, His presence in creation? What name for Him came to mind?',
      placeholder: '"The heavens proclaim the glory of God. The skies display his craftsmanship." (Psalm 19:1)',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Let this awe become worship. Write a few lines of praise — however raw or short — offered to the One who made what stopped you.',
      placeholder: '"Great is the Lord! He is most worthy of praise!" (Psalm 145:3)',
    },
  ],

  disapproval: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What behaviour, decision, or situation are you disapproving of? Name it specifically.',
      placeholder: '"Wounds from a sincere friend are better than many kisses from an enemy." (Proverbs 27:6). Name what concerns you honestly…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this disapproval rooted in love and genuine concern for the person — or is pride, self-interest, or a personal preference driving it? Be honest.',
      placeholder: '"Why worry about a speck in your friend\'s eye when you have a log in your own?" (Matthew 7:3)',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"We will speak the truth in love." (Ephesians 4:15). Truth and love must travel together. Take a breath before deciding what — if anything — needs to be said.',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'Is this concern yours to address, or is it God\'s to deal with?',
      scaleMin: 'God\'s to handle',
      scaleMax: 'Mine to address lovingly',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'If this requires action, write out how you would address it with the spirit of restoration rather than correction. If not, write a prayer releasing it to God.',
      placeholder: '"Gently and humbly help that person back onto the right path." (Galatians 6:1)',
    },
  ],

  remorse: [
    {
      label: 'REGULATE',
      type: 'breathe',
      instruction: '"Come back to me with all your heart." (Joel 2:12). God\'s door is always open to genuine remorse. Breathe and receive that before continuing.',
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'Name what you did or said that you regret. Be specific — vague guilt is harder to bring to the cross than a named thing.',
      placeholder: '"If we confess our sins to him, he is faithful and just to forgive us." (1 John 1:9)',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Who was affected by this, and what does genuine care for them look like from here?',
      placeholder: '"Make amends where possible, but trust that the blood of Christ covers what you cannot undo." (from Psalm 51:10)',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is there a pattern here — a recurring failure or weakness? What does it reveal about what you need from God?',
      placeholder: '"Create in me a clean heart, O God. Renew a loyal spirit within me." (Psalm 51:10)',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Write a confession to God — honest, specific, without excuses. Then receive Romans 8:1 as your answer: "There is no condemnation for those who belong to Christ Jesus."',
      placeholder: 'Let this be the door, not a cell. Remorse that turns toward God finds mercy, not judgment…',
    },
  ],

  contempt: [
    {
      label: 'NAME',
      type: 'text',
      q: 'Who or what is this contempt directed toward? Try to name the specific thing that has made this person or group feel beneath you.',
      placeholder: '"In humility value others above yourselves." (Philippians 2:3). Name the target honestly before God…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What is underneath this contempt — a genuine moral concern, a wound, an insecurity, or a sense that this person has violated something important?',
      placeholder: 'Contempt rarely travels alone. What is it protecting or expressing?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is there any self-righteousness in this? How do you look if you turn the gaze on yourself?',
      placeholder: '"Everyone has sinned; we all fall short of God\'s glorious standard." (Romans 3:23)',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"God showed his great love for us by sending Christ to die for us while we were still sinners." (Romans 5:8). You were the recipient of grace before you were its extension.',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Pray specifically for the person you feel contempt toward — even one sentence, sincerely. Write what you pray.',
      placeholder: '"Love your enemies! Pray for those who persecute you!" (Matthew 5:44)',
    },
  ],

  aggressiveness: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What is driving this forward, aggressive energy right now — what are you fighting for, pushing toward, or refusing to back down from?',
      placeholder: '"Fight the good fight of faith." (1 Timothy 6:12). Name what this energy is aimed at…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this energy Spirit-led or flesh-led? What is the honest difference in this case?',
      placeholder: '"The Spirit God gave us gives us power, love and self-discipline." (2 Timothy 1:7). Power without love and self-discipline is dangerous…',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"Be strong and courageous! Do not be afraid or discouraged. For the Lord your God is with you." (Joshua 1:9). Breathe. Let strength come from His presence, not from adrenaline.',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How much is this aggressiveness moving toward good — toward justice, love, and God\'s purposes?',
      scaleMin: 'Self-driven and reactive',
      scaleMax: 'Genuinely consecrated',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What does it look like to channel this drive under the authority of Christ rather than your own urgency? What one act flows from that?',
      placeholder: '"Work willingly at whatever you do, as though you were working for the Lord." (Colossians 3:23)',
    },
  ],

  optimism: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What are you feeling optimistic about? Name the specific hope or expectation that is lifting you.',
      placeholder: '"I know the plans I have for you… They are plans for good and not for disaster, to give you a future and a hope." (Jeremiah 29:11)',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"We have this hope as an anchor for the soul, firm and secure." (Hebrews 6:19). Take a breath and let the anchor hold while you reflect.',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this hope grounded in God\'s declared goodness, or primarily in your own expectations and positive projections?',
      placeholder: 'Biblical hope is not optimism about circumstances — it is confidence in a Person. Where is yours anchored?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What would it look like to hold this optimism with open hands — trusting that God\'s plan may be better than your current picture of it?',
      placeholder: '"God causes everything to work together for the good of those who love God." (Romans 8:28)',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'How can you act faithfully from this hope today — not striving, but as a response to what God has already promised?',
      placeholder: '"Those who trust in the Lord will find new strength." (Isaiah 40:31)',
    },
  ],

  // ── Outer emotions ───────────────────────────────────────────────────────────

  frustrated: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What is the specific obstacle or blocked goal? Name it before God as precisely as you can.',
      placeholder: '"Tell God what you need, and thank him for all he has done." (Philippians 4:6). Bring the specific frustration, not just the feeling…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this obstacle within your power to change, or is God calling you to surrender rather than solve?',
      placeholder: '"We can make our plans, but the Lord determines our steps." (Proverbs 16:9)',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How much of this frustration is being caused by your own expectations rather than the situation itself?',
      scaleMin: 'Entirely the situation',
      scaleMax: 'Mostly my expectations',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"Those who trust in the Lord will find new strength." (Isaiah 40:31). Breathe and ask God to renew your perspective before you act from frustration.',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Is the faithful next move to try harder, try differently, wait, or release? Ask God specifically, then write what you sense.',
      placeholder: '"Commit everything you do to the Lord. Trust him, and he will help you." (Psalm 37:5)',
    },
  ],

  excited: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What are you excited about? Describe what is coming and why it feels significant.',
      placeholder: '"For I am about to do something new. See, I have already begun!" (Isaiah 43:19). Name the thing that has you charged up…',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where do you feel this excitement in your body right now?',
      placeholder: 'Chest, stomach, arms — excitement has a physical charge. Notice where it lives…',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Could this excitement be Spirit-given — God stirring you toward something He has planned? What does this feeling reveal about what He has placed in you?',
      placeholder: '"God is working in you, giving you the desire and the power to do what pleases him." (Philippians 2:13)',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is there anything that could derail this, or anything you\'re anxious about alongside the excitement?',
      placeholder: 'Excitement and nerves often travel together. It\'s okay to hold both…',
      optional: true,
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Write a brief prayer offering this excitement to God — consecrating what you\'re looking forward to and asking Him to lead it.',
      placeholder: '"Commit your actions to the Lord, and your plans will succeed." (Proverbs 16:3)',
    },
  ],

  secure: [
    {
      label: 'NAME',
      type: 'text',
      q: 'What is making you feel secure right now — and what is it ultimately built on?',
      placeholder: '"The Lord is my rock, my fortress, and my savior." (Psalm 18:2). Name the foundation, human or divine…',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"The Lord is my shepherd; I have all that I need." (Psalm 23:1). Take a moment to receive this security rather than explain it.',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this security contingent on your circumstances remaining stable, or is it rooted in something that cannot shift?',
      placeholder: '"Jesus Christ is the same yesterday, today, and forever." (Hebrews 13:8). Where is the deepest ground under this feeling?',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'How often do you feel this kind of security?',
      scaleMin: 'Almost never',
      scaleMax: 'Most of the time',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What does this security make possible — what can you now do or give that fear would have prevented? Offer that as an act of faith.',
      placeholder: '"If God is for us, who can ever be against us?" (Romans 8:31)',
    },
  ],

  overwhelmed: [
    {
      label: 'REGULATE',
      type: 'breathe',
      instruction: '"Come to me, all of you who are weary and carry heavy burdens, and I will give you rest." (Matthew 11:28). This is Jesus speaking directly to you, right now. Breathe first.',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'What does being overwhelmed feel like in your body right now?',
      placeholder: 'Tight chest, shallow breath, heavy shoulders — God cares about your body as much as your soul. Describe what you\'re carrying…',
      somatic: true,
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'List everything that is weighing on you. Don\'t filter — just name it all before God.',
      placeholder: '"Cast all your anxiety on him because he cares for you." (1 Peter 5:7). He can hold all of it — you don\'t have to.',
    },
    {
      label: 'UNDERSTAND',
      type: 'scale',
      q: 'Of everything on your list, how much is genuinely God\'s assignment for you today — versus what you have taken on that He never asked you to carry?',
      scaleMin: 'Most of it is mine to carry',
      scaleMax: 'Much of it isn\'t mine',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What is the one next faithful step — just today, not the whole list? Ask God to show you, then write it.',
      placeholder: '"Don\'t worry about tomorrow, for tomorrow will bring its own worries. Today\'s trouble is enough for today." (Matthew 6:34)',
    },
  ],

  stunned: [
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"Be still, and know that I am God!" (Psalm 46:10). Being stunned means your system got more than it could process. Breathe and let God be present in the silence.',
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What happened that stunned you? Write it out as plainly as you can — you don\'t need to make sense of it yet.',
      placeholder: '"I am about to do something new." (Isaiah 43:19). God is not surprised. Describe what occurred…',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'What does being stunned feel like right now — in your mind and body?',
      placeholder: 'Blank, frozen, can\'t form words — name the felt experience honestly…',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Could God be beginning something here — even if you can only see it from the other side? What does trust look like when you can\'t see the plan?',
      placeholder: '"My thoughts are not your thoughts, neither are your ways my ways." (Isaiah 55:8)',
    },
    {
      label: 'NEED',
      type: 'text',
      q: 'What do you need most right now — stillness, support, prayer, or simply to be held? Ask God for that specifically.',
      placeholder: '"The Holy Spirit prays for us with groanings that cannot be expressed in words." (Romans 8:26). You don\'t even need words.',
    },
  ],

  heartbroken: [
    {
      label: 'REGULATE',
      type: 'breathe',
      instruction: '"The Lord is close to the brokenhearted; he rescues those whose spirits are crushed." (Psalm 34:18). He is already present in this pain. Breathe and let Him be close.',
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What is the loss at the heart of this — what or who are you grieving?',
      placeholder: 'Heartbreak is grief in the context of love. Name what has been lost or broken…',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where does this heartbreak live in your body right now?',
      placeholder: 'Chest, throat, stomach — heartbreak is physical. God cares about the weight in your body, not only your thoughts…',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Jesus was "a man of sorrows, acquainted with deepest grief" — what does it mean to you that He has been to the bottom of human loss?',
      placeholder: '"He was despised and rejected… acquainted with deepest grief." (Isaiah 53:3). He understands what you are carrying.',
    },
    {
      label: 'NEED',
      type: 'text',
      q: 'What do you most need right now — to be held by God, to grieve honestly, to be heard by someone? Ask Him for that.',
      placeholder: '"He heals the brokenhearted and bandages their wounds." (Psalm 147:3). Healing comes, but first — what do you need?',
    },
  ],

  repulsed: [
    {
      label: 'GROUND',
      type: 'text',
      q: 'What is your body doing right now — what physical sensations came with this repulsion?',
      placeholder: '"Hate what is wrong. Hold tightly to what is good." (Romans 12:9). Name what you are feeling physically first…',
      somatic: true,
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What specifically triggered the repulsion — a thing, a behaviour, or a person? Name it as precisely as you can.',
      placeholder: 'Repulsion often points to a values violation. What line is being crossed here, and does that line reflect what God calls good?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is this a righteous moral reaction — or is contempt for the person mixed in? Scripture commands both: hate the wrong, love the image-bearer.',
      placeholder: '"Everyone has sinned; we all fall short of God\'s glorious standard." (Romans 3:23). Examine the direction of your reaction…',
    },
    {
      label: 'NEED',
      type: 'scale',
      q: 'What does love and wisdom call for here — creating distance, or addressing it directly?',
      scaleMin: 'Create distance',
      scaleMax: 'Address it directly',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'What is the most faithful response — for yourself and for the person or situation involved? Ask God to guide you toward good rather than merely away from wrong.',
      placeholder: '"Do not be overcome by evil, but overcome evil with good." (Romans 12:21)',
    },
  ],

  resentful: [
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"See to it that no bitter root grows up to cause trouble and defile many." (Hebrews 12:15). Resentment is a root, not just a feeling. Breathe and bring it to the surface before it goes deeper.',
    },
    {
      label: 'NAME',
      type: 'text',
      q: 'What is the specific grievance at the centre of this resentment? Name it in one clear sentence before God.',
      placeholder: 'Resentment stays powerful when it stays vague. The more precisely you name it, the more workable it becomes…',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'What has been accumulating? How long has this been building, and what has it cost you to carry it?',
      placeholder: '"Love keeps no record of being wronged." (1 Corinthians 13:5). What is on your list that needs releasing?',
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is forgiveness possible here — not excusing what happened, but releasing your right to retaliation? What would that take?',
      placeholder: '"Forgiving one another, just as God through Christ has forgiven you." (Ephesians 4:32). The standard is high, but so is what was forgiven for you.',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Pray for the person you resent — even briefly, even if you don\'t feel it. Write what you pray. This is one of the most reliable routes through resentment.',
      placeholder: '"Love your enemies! Pray for those who persecute you!" (Matthew 5:44)',
    },
  ],

  default: [
    {
      label: 'NAME',
      type: 'text',
      q: 'Bring this feeling before God as it is. What is happening in your heart right now?',
      placeholder: '"Cast all your anxiety on him because he cares for you." (1 Peter 5:7). Plain honesty before God is the beginning…',
    },
    {
      label: 'GROUND',
      type: 'breathe',
      instruction: '"He gives breath to everyone, life to everyone who walks the earth." (Isaiah 42:5). Take three slow breaths and receive His presence in this moment.',
    },
    {
      label: 'GROUND',
      type: 'text',
      q: 'Where are you feeling this in your body right now?',
      placeholder: 'God cares about your body as much as your soul — bring the physical experience to Him too…',
      somatic: true,
    },
    {
      label: 'UNDERSTAND',
      type: 'text',
      q: 'Is there something God might be revealing through this emotion — about what you love, what you fear, or what you need from Him?',
      placeholder: '"Search me, O God, and know my heart; test me and know my anxious thoughts." (Psalm 139:23)',
    },
    {
      label: 'ACT',
      type: 'text',
      q: 'Write a short prayer — just to God, in your own words — about what you\'ve discovered in this emotion. No right answer, no performance needed.',
      placeholder: '"Ask and it will be given to you; seek and you will find." (Matthew 7:7)',
    },
  ],

};
