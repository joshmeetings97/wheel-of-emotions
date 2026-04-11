// Biblical content overrides for Christian mode.
// Tips use { text, scripture } objects so the verse can render distinctly.
// Keyed by emotion ID or outerName.toLowerCase().
// EmotionDetail falls back to the parent core emotion entry when needed.

export const CHRISTIAN_CONTENT = {

  // ── Intensity-level entries (each ring has its own biblical frame) ──────────

  // Joy family
  ecstasy: {
    description: `Ecstasy is the peak of human delight — a foretaste of the joy that Scripture says is "inexpressible and glorious" (1 Peter 1:8). Moments of overwhelming joy are gifts pointing beyond themselves to the Author of joy. Receive them fully, and let them reorient your sense of what is ultimately real.`,
    feelTips: [
      { text: `This intensity of joy is rare — receive it as a gift rather than something you generated yourself.`, scripture: `1 Peter 1:8 — "You are filled with an inexpressible and glorious joy."` },
      { text: `Let peak joy move you toward worship — the most natural response to overwhelming delight is gratitude to the Giver.`, scripture: `Psalm 16:11 — "You will show me the way of life, granting me the joy of your presence and the pleasures of living with you forever."` },
      { text: `Share it — joy at this intensity belongs in community and testimony.`, scripture: `Psalm 34:3 — "Come, let us tell of the Lord's greatness; let us exalt his name together."` },
    ],
    remedyTips: [
      { text: `If ecstasy has faded, remember that the fruit of the Spirit includes joy — it is available beyond the peaks.`, scripture: `Galatians 5:22 — "The Holy Spirit produces this kind of fruit in our lives… joy."` },
      { text: `The deep joy Jesus spoke of is not circumstance-dependent — return to its source.`, scripture: `John 15:11 — "I have told you these things so that you will be filled with my joy. Yes, your joy will overflow!"` },
      { text: `Worship in song is one of the most reliable paths back to elevated joy.`, scripture: `Colossians 3:16 — "Sing psalms and hymns and spiritual songs to God with thankful hearts."` },
    ],
  },

  serenity: {
    description: `Serenity is the quietest form of joy — the peace that "surpasses all understanding" (Philippians 4:7). Scripture frames it not as the absence of problems but as the presence of God in the midst of them. It is available even when happiness is not.`,
    feelTips: [
      { text: `Serenity is a gift of God's presence — receive it with gratitude and protect the stillness that sustains it.`, scripture: `Philippians 4:7 — "The peace of God, which exceeds anything we can understand, will guard your hearts and minds."` },
      { text: `Let this quiet contentment be its own form of worship — resting in God without striving is a spiritual act.`, scripture: `Psalm 46:10 — "Be still, and know that I am God!"` },
      { text: `Notice what conditions God has placed you in that allow this peace — they are worth naming and protecting.`, scripture: `Psalm 23:2–3 — "He lets me rest in green meadows; he leads me beside peaceful streams. He renews my strength."` },
    ],
    remedyTips: [
      { text: `When serenity is disrupted, the path back is surrender, not problem-solving.`, scripture: `Philippians 4:6 — "Don't worry about anything; instead, pray about everything."` },
      { text: `God actively leads you to rest — make space for Him to do that rather than filling every hour.`, scripture: `Matthew 11:28 — "Come to me, all of you who are weary and carry heavy burdens, and I will give you rest."` },
      { text: `Fix your thoughts on what is eternal and unchanging when the noise of life disrupts your calm.`, scripture: `Isaiah 26:3 — "You will keep in perfect peace all who trust in you, all whose thoughts are fixed on you!"` },
    ],
  },

  // Trust family
  admiration: {
    description: `Admiration is the deep respect and wonder that arises when you encounter someone who exemplifies true goodness, courage, or faithfulness. Biblically, the ultimate object of admiration is God Himself — "Great is the Lord! He is most worthy of praise!" (Psalm 145:3). Human admiration, rightly ordered, points us toward what is worth becoming.`,
    feelTips: [
      { text: `Let admiration teach you — identify specifically what quality you are seeing that moves you, and consider whether you are being called toward it.`, scripture: `Philippians 4:8 — "Fix your thoughts on what is true, and honorable, and right, and pure, and lovely, and admirable."` },
      { text: `Express admiration directly to the person — encouragement and acknowledgment of others' goodness is a biblical practice.`, scripture: `1 Thessalonians 5:11 — "Encourage each other and build each other up."` },
      { text: `Let admiration for people point you toward admiration for God — every quality you genuinely admire reflects something of His image.`, scripture: `Psalm 145:3 — "Great is the Lord! He is most worthy of praise! No one can measure his greatness."` },
    ],
    remedyTips: [
      { text: `If your capacity for admiration has grown thin — if nothing seems worth respecting — ask God to open your eyes to what He has placed around you.`, scripture: `Psalm 19:1 — "The heavens proclaim the glory of God. The skies display his craftsmanship."` },
      { text: `Read the lives of faithful men and women in Scripture and history — admiration grows when it is fed.`, scripture: `Hebrews 11:1 — "Faith is the confidence that what we hope for will actually happen…" (followed by the great hall of faith)` },
      { text: `Admiration can be corrupted into envy — examine which is present and bring the honest answer to God.`, scripture: `Proverbs 14:30 — "A peaceful heart leads to a healthy body; jealousy is like cancer in the bones."` },
    ],
  },

  acceptance: {
    description: `Acceptance is trust in its mildest, most open form — the restful sense of being received and receiving others without conditions. Scripture grounds it in the unconditional welcome of God: "Accept each other just as Christ has accepted you." (Romans 15:7). Feeling accepted is a grace; extending it is a calling.`,
    feelTips: [
      { text: `Let this feeling of being accepted remind you of your deepest identity — received by God before you could earn it.`, scripture: `Romans 15:7 — "Accept each other just as Christ has accepted you so that God will be given glory."` },
      { text: `Acceptance is the foundation for honest relationship — notice how it opens you to others when it is present.`, scripture: `1 John 4:19 — "We love each other because he loved us first."` },
      { text: `Let it extend outward — who in your life needs the same unconditional welcome you are experiencing?`, scripture: `Galatians 3:28 — "There is no longer Jew or Gentile… you are all one in Christ Jesus."` },
    ],
    remedyTips: [
      { text: `When acceptance feels absent — when rejection stings — return to the one verdict that cannot be reversed.`, scripture: `Romans 8:1 — "There is no condemnation for those who belong to Christ Jesus."` },
      { text: `God's acceptance of you is not based on performance or approval — it is the ground everything else stands on.`, scripture: `Ephesians 1:6 — "God's glorious grace, which he has freely given us through his dearly loved Son."` },
      { text: `Ask whether there is someone you are withholding acceptance from — the call to receive and give it runs in both directions.`, scripture: `Colossians 3:13 — "You must make allowance for each other's faults and forgive anyone who offends you."` },
    ],
  },

  // Fear family
  terror: {
    description: `Terror is fear at its most overwhelming — the sense that danger is immediate, massive, and beyond your capacity to manage. Scripture speaks into this place directly: "Even when I walk through the darkest valley, I will not be afraid, for you are close beside me." (Psalm 23:4). The antidote in every case is the nearness of God, not the removal of the threat.`,
    feelTips: [
      { text: `In moments of terror, one breath at a time is enough. God is present in this exact moment, even now.`, scripture: `Psalm 46:1 — "God is our refuge and strength, always ready to help in times of trouble."` },
      { text: `Call on Him directly — the Psalms model raw, urgent prayer in the face of overwhelming fear.`, scripture: `Psalm 18:6 — "In my distress I cried out to the Lord; yes, I prayed to my God for help. He heard me from his sanctuary."` },
      { text: `His presence does not eliminate danger — it changes what danger requires of you.`, scripture: `Psalm 23:4 — "Even when I walk through the darkest valley, I will not be afraid, for you are close beside me."` },
    ],
    remedyTips: [
      { text: `Terror often needs grounding before it needs theology — slow your breathing first, then bring your thoughts back to what is immediately true.`, scripture: `2 Timothy 1:7 — "God has not given us a spirit of fear and timidity, but of power, love, and self-discipline."` },
      { text: `Tell someone. Terror carried alone grows; terror named in the presence of others and of God begins to shrink.`, scripture: `Galatians 6:2 — "Share each other's burdens, and in this way obey the law of Christ."` },
      { text: `God is not overwhelmed by what overwhelms you. His sovereignty is not threatened by what threatens you.`, scripture: `Isaiah 41:10 — "Don't be afraid, for I am with you. Don't be discouraged, for I am your God."` },
    ],
  },

  apprehension: {
    description: `Apprehension is mild, anticipatory fear — the unsettled feeling before something uncertain. It is a common human experience that Scripture neither condemns nor dismisses. God's consistent response to His people's apprehension is not "stop feeling that" but "I am with you."`,
    feelTips: [
      { text: `Name what you are apprehensive about specifically — vague dread is harder to bring to God than a named concern.`, scripture: `Philippians 4:6 — "Tell God what you need, and thank him for all he has done."` },
      { text: `Apprehension often signals that something matters to you — let it move you to prayer rather than avoidance.`, scripture: `Psalm 55:22 — "Give your burdens to the Lord, and he will take care of you."` },
      { text: `His presence is the consistent answer — not certainty about outcomes, but certainty about who goes with you.`, scripture: `Joshua 1:9 — "Be strong and courageous! Do not be afraid or discouraged. For the Lord your God is with you wherever you go."` },
    ],
    remedyTips: [
      { text: `Do the faithful preparation available to you, then release the outcome to God.`, scripture: `Proverbs 16:3 — "Commit your actions to the Lord, and your plans will succeed."` },
      { text: `Apprehension is often about what might happen — Jesus explicitly redirected His followers to the present moment.`, scripture: `Matthew 6:34 — "Don't worry about tomorrow, for tomorrow will bring its own worries. Today's trouble is enough for today."` },
      { text: `His past faithfulness is the evidence for what He will do in what you are facing.`, scripture: `Lamentations 3:22–23 — "Great is his faithfulness; his mercies begin afresh each morning."` },
    ],
  },

  // Surprise family
  amazement: {
    description: `Amazement is surprise meeting wonder — the sudden recognition that something is far greater than you anticipated. Scripture frames God's works as the ultimate object of human amazement: "Come, see the glorious works of the Lord!" (Psalm 66:5). Let amazement be a doorway into worship.`,
    feelTips: [
      { text: `Stay in the amazement before you explain it. Wonder is too easily collapsed into analysis.`, scripture: `Psalm 66:5 — "Come, see the glorious works of the Lord; see how awesome his power is!"` },
      { text: `Let this moment recalibrate your sense of what is possible — God consistently does more than we expect.`, scripture: `Ephesians 3:20 — "God can do much, much more than anything we can ask or imagine."` },
      { text: `Express it — amazement shared becomes testimony, and testimony builds faith in others.`, scripture: `Psalm 96:3 — "Publish his glorious deeds among the nations. Tell everyone about the amazing things he does."` },
    ],
    remedyTips: [
      { text: `If amazement has become rare — if little surprises you anymore — ask God to open your eyes to what He is doing around you.`, scripture: `Isaiah 43:19 — "For I am about to do something new. See, I have already begun! Do you not see it?"` },
      { text: `Sustained attention to what God has made reliably recovers a sense of wonder.`, scripture: `Psalm 19:1 — "The heavens proclaim the glory of God. The skies display his craftsmanship."` },
      { text: `Read accounts of what God has done — in Scripture, in history, in the lives of people around you.`, scripture: `Psalm 77:11 — "I will remember the deeds of the Lord; yes, I will remember your miracles of long ago."` },
    ],
  },

  distraction: {
    description: `Distraction — mild disorientation or scattered attention — is the lowest register of surprise. Scripture speaks to the scattered mind with an invitation to return to the one thing that centers: "Be still, and know that I am God." (Psalm 46:10). It is not a spiritual failure but an invitation to reorient.`,
    feelTips: [
      { text: `When your attention is scattered, name what is competing for it — you cannot address what you have not identified.`, scripture: `Proverbs 4:25 — "Look straight ahead, and fix your eyes on what lies before you."` },
      { text: `One deliberate breath and one deliberate thought returned to God is enough to begin reorienting.`, scripture: `Psalm 46:10 — "Be still, and know that I am God!"` },
      { text: `Distraction is often a symptom — ask what the underlying restlessness or anxiety is about.`, scripture: `Psalm 139:23 — "Search me, O God, and know my heart; test me and know my anxious thoughts."` },
    ],
    remedyTips: [
      { text: `Simple rhythms — a fixed prayer time, a brief moment of silence — anchor scattered attention better than willpower.`, scripture: `Psalm 5:3 — "Each morning I bring my requests to you and wait expectantly."` },
      { text: `Ask God to help you set your mind — attention is something He can guide, not just something you manage alone.`, scripture: `Colossians 3:2 — "Think about the things of heaven, not the things of earth."` },
      { text: `What is one thing in front of you right now that faithfulness looks like? Start there.`, scripture: `Matthew 6:33 — "Seek the Kingdom of God above all else, and live righteously."` },
    ],
  },

  // Sadness family
  grief: {
    description: `Grief is the deepest form of sadness — the full weight of profound loss. Scripture does not rush past it. Jesus wept (John 11:35). An entire book of the Bible is called Lamentations. "The Lord is close to the brokenhearted." (Psalm 34:18). Grief that is honoured before God is grief that can eventually heal.`,
    feelTips: [
      { text: `Give grief its full weight — do not rush the process or manage it into something easier to carry.`, scripture: `Ecclesiastes 3:4 — "There is a time to cry and a time to laugh. A time to grieve and a time to dance."` },
      { text: `Jesus wept at the grave of His friend — your tears are not a sign of weak faith but of deep love.`, scripture: `John 11:35 — "Then Jesus wept."` },
      { text: `Bring your grief to God in the same raw language the Psalms use — He is not fragile; He can hold all of it.`, scripture: `Psalm 56:8 — "You keep track of all my sorrows. You have collected all my tears in your bottle."` },
    ],
    remedyTips: [
      { text: `Grief is not a problem to fix but a wound to tend. Let God be present in the tending.`, scripture: `Psalm 147:3 — "He heals the brokenhearted and bandages their wounds."` },
      { text: `Let trusted people into the grief — carrying it alone is not holiness; it is isolation.`, scripture: `2 Corinthians 1:4 — "He comforts us in all our troubles so that we can comfort others."` },
      { text: `Morning comes — not quickly, not predictably, but with certainty in God's economy.`, scripture: `Psalm 30:5 — "Weeping may last through the night, but joy comes with the morning."` },
    ],
  },

  pensiveness: {
    description: `Pensiveness is the quiet, reflective sadness that comes with contemplating what has been lost, what might have been, or the weight of being human. It is not despair — it is the soul looking inward. Scripture honours this kind of sober reflection as a path to wisdom and grateful living.`,
    feelTips: [
      { text: `Let pensiveness be an honest companion — it often carries wisdom that busyness prevents.`, scripture: `Ecclesiastes 7:3 — "Sorrow is better than laughter! For sadness has a refining influence on us."` },
      { text: `Bring the reflective sadness to God rather than sitting with it alone — He is interested in what you are carrying.`, scripture: `Psalm 62:8 — "Pour out your heart to him, for God is our refuge."` },
      { text: `Pensiveness often lives in the question "what matters?" — let it lead you toward clarity about what is worth investing in.`, scripture: `Psalm 90:12 — "Teach us to realize the brevity of life, so that we may grow in wisdom."` },
    ],
    remedyTips: [
      { text: `When pensiveness shades toward hopelessness, preach to your own soul — recall what you know to be true about God's goodness.`, scripture: `Psalm 42:5 — "Why am I discouraged? Why is my heart so sad? I will put my hope in God!"` },
      { text: `Small acts of beauty and gratitude gently lift pensiveness without denying it.`, scripture: `Philippians 4:8 — "Fix your thoughts on what is true, and honorable, and right, and pure, and lovely, and admirable."` },
      { text: `This is a season, not a permanent state — morning comes.`, scripture: `Lamentations 3:22–23 — "Great is his faithfulness; his mercies begin afresh each morning."` },
    ],
  },

  // Disgust family
  loathing: {
    description: `Loathing is disgust at its most intense — a deep moral revulsion at genuine evil. Scripture validates righteous hatred of sin while guarding fiercely against contempt for persons. God Himself is described as hating evil (Psalm 45:7); the question is whether your loathing is rightly directed and Spirit-governed.`,
    feelTips: [
      { text: `Intense moral revulsion at genuine evil is a right and biblical response — do not spiritualise it away.`, scripture: `Psalm 45:7 — "You love justice and hate evil."` },
      { text: `Let this intensity fuel action rather than passive disgust — what does love require in response to this wrong?`, scripture: `Romans 12:21 — "Do not be overcome by evil, but overcome evil with good."` },
      { text: `Examine whether you are hating the sin or the image-bearer. The distinction is everything.`, scripture: `Romans 3:23 — "Everyone has sinned; we all fall short of God's glorious standard."` },
    ],
    remedyTips: [
      { text: `Strong feelings of loathing need the Spirit's governance to remain righteous rather than becoming destructive.`, scripture: `Galatians 5:22–23 — "The Holy Spirit produces… love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control."` },
      { text: `Bring the feeling to God before acting from it. Righteous anger that is prayed over stays righteous; unprayed anger often doesn't.`, scripture: `Ephesians 4:26 — "Don't sin by letting anger control you. Don't let the sun go down while you are still angry."` },
      { text: `Jesus' model was to absorb and transform evil, not merely to be repelled by it.`, scripture: `1 Peter 3:9 — "Don't repay evil for evil… Instead, pay them back with a blessing."` },
    ],
  },

  boredom: {
    description: `Boredom — genuine disengagement and lack of stimulation — can be a spiritual invitation rather than just an inconvenience. Much of what we call boredom is actually the soul's resistance to stillness. Practices like Sabbath, silence, and contemplative prayer reframe boredom as an opportunity to encounter God without distraction.`,
    feelTips: [
      { text: `Before reaching for stimulation, sit with the boredom for a moment — it may be hiding a more important feeling or need.`, scripture: `Psalm 46:10 — "Be still, and know that I am God!"` },
      { text: `Boredom can signal that something you were investing in is no longer life-giving — ask whether God is redirecting you.`, scripture: `Proverbs 3:5–6 — "Seek his will in all you do, and he will show you which path to take."` },
      { text: `Genuine rest — not distraction — is what God designed Sabbath for. Boredom is sometimes the doorway in.`, scripture: `Exodus 20:8 — "Remember to observe the Sabbath day by keeping it holy."` },
    ],
    remedyTips: [
      { text: `Ask whether you are genuinely bored or actually restless and avoidant. The remedies are different.`, scripture: `Psalm 139:23 — "Search me, O God, and know my heart; test me and know my anxious thoughts."` },
      { text: `Service to others is one of the most reliable antidotes to boredom — it reorients attention outward.`, scripture: `Galatians 5:13 — "Use your freedom to serve one another in love."` },
      { text: `There is always something to do in God's kingdom — ask what needs doing where you are planted.`, scripture: `Colossians 3:23 — "Work willingly at whatever you do, as though you were working for the Lord."` },
    ],
  },

  // Anger family
  rage: {
    description: `Rage is anger at its most consuming — a state where the normal constraints on thought and behaviour feel swept away. Scripture is direct: "Human anger does not produce the righteousness God desires." (James 1:20). Rage requires immediate de-escalation before it can be processed faithfully. The first priority is not insight but safety — yours and others'.`,
    feelTips: [
      { text: `Do not act from rage — the first and most important move is to create space before speaking or deciding anything.`, scripture: `Proverbs 29:11 — "Fools vent their anger, but the wise quietly hold it back."` },
      { text: `Physical movement — walking, breathing — helps the body discharge the intensity before the mind can engage.`, scripture: `James 1:19–20 — "Be quick to listen, slow to speak, and slow to get angry. Human anger does not produce the righteousness God desires."` },
      { text: `Rage almost always has something underneath it — fear, grief, or profound injustice. That is the real thing to address.`, scripture: `Psalm 139:23 — "Search me, O God, and know my heart; test me and know my anxious thoughts."` },
    ],
    remedyTips: [
      { text: `Ask God to reveal what is beneath the rage — He is more interested in your healing than in your composure.`, scripture: `Psalm 4:4 — "Don't sin by letting anger control you. Think about it overnight and remain silent."` },
      { text: `The cross is the model for receiving wrong without returning it — this is impossible without His strength.`, scripture: `1 Peter 3:9 — "Don't repay evil for evil. Don't retaliate with insults when people insult you. Instead, pay them back with a blessing."` },
      { text: `Unforgiveness is rage's fuel. Ask God to begin the process of releasing what is feeding this.`, scripture: `Ephesians 4:31–32 — "Get rid of all bitterness, rage, anger… forgiving one another, just as God through Christ has forgiven you."` },
    ],
  },

  annoyance: {
    description: `Annoyance is the mildest form of anger — a brief friction that passes quickly if not fed. Scripture neither condemns the experience nor licenses dwelling in it. The practice of overlooking small offences is specifically commended as wisdom.`,
    feelTips: [
      { text: `Notice what is beneath the annoyance — often an unmet expectation or a need for control. The irritation is the symptom.`, scripture: `Proverbs 19:11 — "Sensible people control their temper; they earn respect by overlook wrongs."` },
      { text: `Ask whether this is worth the energy it is taking. Most annoyances are not.`, scripture: `Proverbs 17:9 — "Love prospers when a fault is forgiven, but dwelling on it separates close friends."` },
      { text: `Use small irritations as practice for the patience that more demanding situations will require.`, scripture: `Galatians 5:22 — "The Holy Spirit produces… patience… as fruit in our lives."` },
    ],
    remedyTips: [
      { text: `Let it pass — choosing not to feed small annoyances is one of the quietest and most effective spiritual disciplines.`, scripture: `1 Corinthians 13:5 — "Love… is not irritable, and it keeps no record of being wronged."` },
      { text: `If the same thing consistently annoys you, it is worth asking what it reveals about your expectations or your heart.`, scripture: `Matthew 7:3 — "Why worry about a speck in your friend's eye when you have a log in your own?"` },
      { text: `Pray for the person or situation that is annoying you — it is very hard to remain annoyed at what you are praying for.`, scripture: `Matthew 5:44 — "Pray for those who persecute you!"` },
    ],
  },

  // Anticipation family
  vigilance: {
    description: `Vigilance is anticipation at its most alert and watchful — the state of focused readiness. Scripture commends it: "Be on guard. Stand firm in the faith. Be courageous. Be strong." (1 Corinthians 16:13). Spiritually, vigilance is not anxiety but sober, prayerful attentiveness to what God has called you to watch over.`,
    feelTips: [
      { text: `Let this alertness be directed by wisdom, not fear — ask what specifically you are called to watch for.`, scripture: `1 Corinthians 16:13 — "Be on guard. Stand firm in the faith. Be courageous. Be strong."` },
      { text: `Vigilance exercised in prayer is far more effective than vigilance exercised in worry.`, scripture: `1 Peter 5:8 — "Stay alert! Watch out for your great enemy, the devil."` },
      { text: `Pair watchfulness with trust — you are not the only one who is watching.`, scripture: `Psalm 121:4 — "Indeed, he who watches over Israel never slumbers or sleeps."` },
    ],
    remedyTips: [
      { text: `If vigilance has become hypervigilance — if you cannot rest — bring that exhaustion to God and examine whether you are trying to carry what He never asked you to.`, scripture: `Matthew 11:30 — "My yoke is easy to bear, and the burden I give you is light."` },
      { text: `Rest is not the enemy of vigilance — it is what makes sustained watchfulness possible.`, scripture: `Psalm 127:2 — "It is useless for you to work so hard from early morning until late at night… for God gives rest to his loved ones."` },
      { text: `Give God what you are watching over. He is a far more capable guardian than you are.`, scripture: `Philippians 4:7 — "The peace of God… will guard your hearts and minds as you live in Christ Jesus."` },
    ],
  },

  interest: {
    description: `Interest is the mildest form of anticipation — a gentle forward lean, an opening of attention toward something. Scripture honours the curious, seeking heart: "It is the glory of kings to search a thing out." (Proverbs 25:2). Interest, rightly ordered, is the beginning of discovery, learning, and often of calling.`,
    feelTips: [
      { text: `Follow the interest — it may be more than idle curiosity. Pay attention to what consistently draws your attention.`, scripture: `Proverbs 25:2 — "It is the glory of God to conceal things, but the glory of kings is to search things out."` },
      { text: `Let interest be a form of attentiveness to what God has placed in the world for you to discover.`, scripture: `Psalm 111:2 — "How amazing are the deeds of the Lord! All who delight in him should ponder them."` },
      { text: `Interest expressed in community often grows — share what you are exploring with someone.`, scripture: `Acts 17:11 — "The people of Berea… listened eagerly… They searched the Scriptures day after day."` },
    ],
    remedyTips: [
      { text: `If interest feels flat — if nothing draws you — ask whether exhaustion, overcommitment, or grief has suppressed your natural curiosity.`, scripture: `Isaiah 40:31 — "Those who trust in the Lord will find new strength."` },
      { text: `Try exposure to something new — interest is often rekindled by encounter, not by waiting for it to arrive.`, scripture: `Jeremiah 33:3 — "Call to me and I will answer you and tell you great and unsearchable things you do not know."` },
      { text: `The deepest and most sustainable interest is in God Himself — the inexhaustible subject.`, scripture: `Psalm 27:4 — "The one thing I ask of the Lord… is to live in the house of the Lord all the days of my life, delighting in the Lord's perfections."` },
    ],
  },

  // ── Core emotions ──────────────────────────────────────────────────────────

  joy: {
    description: `Joy is one of the fruits of the Holy Spirit — a deep, abiding delight sourced not in circumstances but in the presence of God. Scripture distinguishes worldly happiness (which fades) from the joy of the Lord, which Nehemiah 8:10 calls our strength.`,
    feelTips: [
      { text: `Return joy to its source as worship. Joy offered back to God as gratitude deepens and sustains it longer than keeping it to yourself.`, scripture: `Psalm 118:24 — "This is the day the Lord has made. We will rejoice and be glad in it."` },
      { text: `Share it — joy multiplies in community. Someone in your life needs to hear what God has done.`, scripture: `Philippians 4:4 — "Always be full of joy in the Lord. I say it again — rejoice!"` },
      { text: `Anchor your joy in what is eternal. Jesus spoke of a joy that suffering cannot reach.`, scripture: `John 15:11 — "I have told you these things so that you will be filled with my joy. Yes, your joy will overflow!"` },
    ],
    remedyTips: [
      { text: `When joy feels distant, return to its source. Joy is not manufactured — it is received in God's presence.`, scripture: `Psalm 16:11 — "You will show me the way of life, granting me the joy of your presence."` },
      { text: `In dry seasons, draw on God's joy as a resource, not a feeling you have to generate. It is available even when it is not felt.`, scripture: `Nehemiah 8:10 — "The joy of the Lord is your strength!"` },
      { text: `Sung and spoken worship is one of the oldest and most reliable paths back to joy.`, scripture: `Colossians 3:16 — "Sing psalms and hymns and spiritual songs to God with thankful hearts."` },
    ],
  },

  trust: {
    description: `Trust in biblical terms is not naïve optimism but a grounded conviction that God's character is unchanging and His purposes are good. Proverbs 3:5–6 calls us to trust with the whole heart — releasing the need to understand everything — and promises that God will make the path straight.`,
    feelTips: [
      { text: `Let trust be active — take the next faithful step without requiring full clarity first.`, scripture: `Proverbs 3:5–6 — "Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take."` },
      { text: `Trust deepens through testimony. Keep a record of God's faithfulness. What has He already done that you are at risk of forgetting?`, scripture: `Psalm 77:11 — "I will remember the deeds of the Lord; yes, I will remember your miracles of long ago."` },
      { text: `The fruit of biblical trust is a peace independent of circumstances — fix your thoughts there.`, scripture: `Isaiah 26:3 — "You will keep in perfect peace all who trust in you, all whose thoughts are fixed on you!"` },
    ],
    remedyTips: [
      { text: `When trust feels fragile, bring it honestly to God. Lament assumes He is present and listening, which is itself an act of faith.`, scripture: `Habakkuk 1:2 — "How long, O Lord, must I call for help?"` },
      { text: `Take one concrete step of obedience before certainty arrives, and watch trust follow.`, scripture: `Psalm 37:5 — "Commit everything you do to the Lord. Trust him, and he will help you."` },
      { text: `His faithfulness is the foundation that makes trust rational, not blind.`, scripture: `Philippians 1:6 — "God, who began the good work within you, will continue his work until it is finally finished."` },
    ],
  },

  fear: {
    description: `Fear is acknowledged throughout Scripture as universal and real. Yet the most repeated command in the Bible is "do not fear" — not because danger is unreal, but because God's presence changes what fear requires of us. Biblical courage is trust enacted in the presence of fear.`,
    feelTips: [
      { text: `Name what you fear and bring it directly to God. Prayer is the primary biblical practice for fear.`, scripture: `Psalm 34:4 — "I prayed to the Lord, and he answered me. He freed me from all my fears."` },
      { text: `Fear is not evidence of God's absence. Remind your heart of His nearness — it changes the nature of the dark valley.`, scripture: `Psalm 23:4 — "Even when I walk through the darkest valley, I will not be afraid, for you are close beside me."` },
      { text: `The antidote to fear in Scripture is almost always the presence and character of God, not the removal of the threat.`, scripture: `Isaiah 41:10 — "Don't be afraid, for I am with you. Don't be discouraged, for I am your God. I will strengthen you and help you."` },
    ],
    remedyTips: [
      { text: `Fear that paralyses may have spiritual roots — pray for discernment and ask God to replace it with what He actually gave you.`, scripture: `2 Timothy 1:7 — "God has not given us a spirit of fear and timidity, but of power, love, and self-discipline."` },
      { text: `Biblical imagination — placing yourself deliberately inside God's protection — is a spiritual practice for anxiety. Spend time in Psalm 91 as a meditation.`, scripture: `Psalm 91:2 — "He alone is my refuge, my place of safety; he is my God, and I trust him."` },
      { text: `Prayer is the biblical mechanism that transforms fear into peace — not will-power, not understanding.`, scripture: `Philippians 4:6–7 — "Don't worry about anything; instead, pray about everything… Then you will experience God's peace."` },
    ],
  },

  surprise: {
    description: `Scripture is full of holy surprise — the burning bush, the empty tomb, the conversion of Saul. God's ways are consistently described as beyond human anticipation. Surprise invites the biblical posture of wonder and openness to what God may be doing.`,
    feelTips: [
      { text: `When surprised, pause and ask: could God be in this? Biblical wonder begins with that question.`, scripture: `Psalm 118:23 — "This is the Lord's doing, and it is wonderful to see."` },
      { text: `Surprise — even difficult surprise — can be received in faith as part of a story larger than you can currently see.`, scripture: `Romans 8:28 — "God causes everything to work together for the good of those who love God."` },
      { text: `Hold surprises with an open hand, trusting the One who is never caught off guard.`, scripture: `Isaiah 55:9 — "My ways are higher than your ways and my thoughts higher than your thoughts."` },
    ],
    remedyTips: [
      { text: `When surprise is destabilising, return to what is unchanging. His constancy is the anchor when circumstances shift.`, scripture: `Hebrews 13:8 — "Jesus Christ is the same yesterday, today, and forever."` },
      { text: `Disorientation is an invitation to stillness and surrender rather than immediate reactive movement.`, scripture: `Psalm 46:10 — "Be still, and know that I am God!"` },
      { text: `Many of Scripture's greatest turning points began with surprise. Ask: what might God be beginning here that you can only see from the other side?`, scripture: `Isaiah 43:19 — "For I am about to do something new. See, I have already begun!"` },
    ],
  },

  sadness: {
    description: `Scripture does not pathologise sadness — it honours it. Jesus wept (John 11:35). The Psalms are saturated with lament, and an entire book of the Bible is called Lamentations. Sadness is a legitimate response to a world not yet fully redeemed — and it is often where God draws nearest.`,
    feelTips: [
      { text: `Sadness is not spiritual failure. God does not require you to perform strength here — He draws close to the broken places.`, scripture: `Psalm 34:18 — "The Lord is close to the brokenhearted; he rescues those whose spirits are crushed."` },
      { text: `Allow lament to be your prayer. The Psalms give language to grief and validate it before God. You are not the first person to feel this.`, scripture: `Psalm 13:1–2 — "O Lord, how long will you forget me? Forever? How long will you look the other way?"` },
      { text: `The comfort is real, but it comes through the grief, not around it.`, scripture: `Matthew 5:4 — "God blesses those who mourn, for they will be comforted."` },
    ],
    remedyTips: [
      { text: `Let God into the broken place — not necessarily to immediately fix it, but to be present in it. His presence in the wound changes it.`, scripture: `Psalm 147:3 — "He heals the brokenhearted and bandages their wounds."` },
      { text: `Sadness is a night season, not a permanent state. Hold on through the dark.`, scripture: `Psalm 30:5 — "Weeping may last through the night, but joy comes with the morning."` },
      { text: `Community and grief belong together. Let someone in.`, scripture: `2 Corinthians 1:4 — "He comforts us in all our troubles so that we can comfort others."` },
    ],
  },

  disgust: {
    description: `Disgust at moral wrong is a biblical instinct — the prophets expressed fierce moral revulsion at injustice, and Romans 12:9 explicitly says to "hate what is wrong." But the New Testament also cautions against letting disgust become contempt for people, since every person bears the image of God.`,
    feelTips: [
      { text: `Let your disgust clarify what you are called to hold firmly and what to refuse — this is a holy discernment.`, scripture: `Romans 12:9 — "Don't just pretend to love others. Really love them. Hate what is wrong. Hold tightly to what is good."` },
      { text: `Moral disgust is designed to fuel constructive action toward justice and goodness, not passive withdrawal.`, scripture: `Amos 5:15 — "Hate evil and love what is good; turn your courts into true halls of justice."` },
      { text: `Even in righteous disgust, the orientation of the heart must remain toward love and restoration.`, scripture: `1 Corinthians 14:1 — "Let love be your highest goal."` },
    ],
    remedyTips: [
      { text: `Examine whether your disgust is directed at the sin or at the image-bearer. Jesus consistently separated these — He ate with sinners while calling them to change.`, scripture: `Romans 3:23 — "Everyone has sinned; we all fall short of God's glorious standard."` },
      { text: `Disgust is not a destination — it is a signal pointing toward what good needs to be done. What action does love require here?`, scripture: `Romans 12:21 — "Do not be overcome by evil, but overcome evil with good."` },
      { text: `Ask whether there is any self-righteousness mixed into your reaction.`, scripture: `Psalm 139:23 — "Search me, O God, and know my heart; test me and know my anxious thoughts."` },
    ],
  },

  anger: {
    description: `Anger is not inherently sinful — Scripture says "Be angry, and do not sin" (Ephesians 4:26), and God Himself is capable of it. Jesus turned tables. The question is whether anger is rightly directed, proportionate, and resolved before it takes root as bitterness.`,
    feelTips: [
      { text: `Anger is legitimate but time-limited — it must be addressed, not suppressed or nursed. Tonight is the deadline.`, scripture: `Ephesians 4:26 — "Don't sin by letting anger control you. Don't let the sun go down while you are still angry."` },
      { text: `Use anger as a prompt to listen more carefully before acting — the reverse of what anger usually demands.`, scripture: `James 1:19 — "Be quick to listen, slow to speak, and slow to get angry."` },
      { text: `Even in righteous anger, tone and timing are stewardship issues.`, scripture: `Proverbs 15:1 — "A gentle answer deflects anger, but harsh words make tempers flare."` },
    ],
    remedyTips: [
      { text: `Ask God to reveal what is beneath the anger — often fear, grief, or unmet need. The surface emotion usually protects a deeper wound.`, scripture: `Psalm 139:23 — "Search me, O God, and know my heart; test me and know my anxious thoughts."` },
      { text: `Forgiveness is the biblical path through anger — not for the other person's sake first, but for your own freedom.`, scripture: `Ephesians 4:31–32 — "Get rid of all bitterness, rage, anger… Instead, be kind to each other, tenderhearted, forgiving one another, just as God through Christ has forgiven you."` },
      { text: `The cross is the model for absorbing wrong without returning it. This is only possible in the strength God provides.`, scripture: `1 Peter 3:9 — "Don't repay evil for evil… Instead, pay them back with a blessing."` },
    ],
  },

  anticipation: {
    description: `Biblical anticipation is shaped by hope — one of the three enduring virtues of faith. The whole sweep of Scripture moves toward a future God has promised. Christian anticipation is not anxious striving but confident expectation grounded in God's proven faithfulness.`,
    feelTips: [
      { text: `Let your anticipation be anchored in God's declared goodness, not your own projections about how things should unfold.`, scripture: `Jeremiah 29:11 — "I know the plans I have for you… They are plans for good and not for disaster, to give you a future and a hope."` },
      { text: `Godly anticipation renews energy and expands vision — it draws on a resource beyond your own reserves.`, scripture: `Isaiah 40:31 — "Those who trust in the Lord will find new strength. They will soar high on wings like eagles."` },
      { text: `Biblical hope holds both the difficulty of the present and the certainty of God's future simultaneously.`, scripture: `2 Corinthians 4:8 — "We are pressed on every side by troubles, but we are not crushed."` },
    ],
    remedyTips: [
      { text: `When anticipation tips into anxiety, prayer is the prescribed practice — not more preparation, but more surrender.`, scripture: `Philippians 4:6 — "Don't worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done."` },
      { text: `Waiting on God is an active posture of trust, not passive resignation. It requires courage.`, scripture: `Psalm 27:14 — "Wait patiently for the Lord. Be brave and courageous. Yes, wait patiently for the Lord."` },
      { text: `Ground your preparation in what God enables, not merely what you can manufacture.`, scripture: `Philippians 4:13 — "I can do everything through Christ, who gives me strength."` },
    ],
  },

  // ── Blend emotions ─────────────────────────────────────────────────────────

  love: {
    description: `Love is the greatest commandment and the defining mark of the Christian (John 13:35). In Scripture it is not primarily an emotion but a covenant commitment — a choice to will the good of another as God has willed our good in Christ.`,
    feelTips: [
      { text: `Let this love be anchored in what is eternal rather than in how the other person responds.`, scripture: `1 Corinthians 13:13 — "Three things will last forever — faith, hope, and love — and the greatest of these is love."` },
      { text: `Let the experience of being loved by God deepen your capacity to love others — you are not generating this from yourself.`, scripture: `1 John 4:19 — "We love each other because he loved us first."` },
      { text: `Ask which quality of love — patient, kind, not self-seeking — you are specifically being called to grow in today.`, scripture: `1 Corinthians 13:4–5 — "Love is patient and kind. Love is not jealous or boastful or proud or rude."` },
    ],
    remedyTips: [
      { text: `Ask God to love through you rather than trying to produce it independently.`, scripture: `1 John 4:7 — "Dear friends, let us continue to love one another, for love comes from God."` },
      { text: `Meditating on the dimensions of God's love for you is the practice that sustains your capacity to love others.`, scripture: `Ephesians 3:18 — "May you have the power to understand how wide, how long, how high, and how deep his love is."` },
      { text: `Let love become concrete and specific today — name one person and one act.`, scripture: `Matthew 22:39 — "Love your neighbor as yourself."` },
    ],
  },

  submission: {
    description: `Biblical submission is not weakness — it is the courageous act of entrusting outcomes to a God whose wisdom exceeds ours. True submission is grounded in the conviction that God is both infinitely good and entirely capable, which makes releasing control rational, not passive.`,
    feelTips: [
      { text: `Submission opens the space for God to act in ways that self-sufficiency cannot.`, scripture: `James 4:10 — "Humble yourselves before the Lord, and he will lift you up in honor."` },
      { text: `The deepest act of faith is releasing control. If the Son of God prayed this in anguish, you are in good company.`, scripture: `Luke 22:42 — "Not my will, but yours be done." (Jesus in Gethsemane)` },
      { text: `Submission creates the very conditions in which God's power operates most clearly.`, scripture: `2 Corinthians 12:9 — "My grace is all you need. My power works best in weakness."` },
    ],
    remedyTips: [
      { text: `Submission is not resignation — it is the deliberate transfer of weight to Someone strong enough to carry it.`, scripture: `1 Peter 5:7 — "Cast all your anxiety on him because he cares for you."` },
      { text: `Where is God calling you to submit right now — to His timing, His way, or another person? Identify it specifically before asking for the grace to do it.`, scripture: `Proverbs 3:5 — "Trust in the Lord with all your heart; do not depend on your own understanding."` },
      { text: `His plan being better than yours is not an insult to your intelligence — it is the nature of infinite wisdom meeting finite understanding.`, scripture: `Isaiah 55:8 — "My thoughts are not your thoughts, neither are your ways my ways, declares the Lord."` },
    ],
  },

  awe: {
    description: `Awe in Scripture is the right response to encountering the holiness and majesty of God — what theologians call the "fear of the Lord." It is not terror but a reverent, wonder-struck recognition that you are in the presence of something infinitely greater than yourself.`,
    feelTips: [
      { text: `Awe is not a side-experience of faith — it is foundational. Let this feeling recalibrate your sense of scale.`, scripture: `Proverbs 9:10 — "The fear of the Lord is the foundation of true wisdom."` },
      { text: `Let awe become praise — move from feeling to expression.`, scripture: `Psalm 145:3 — "Great is the Lord! He is most worthy of praise! No one can measure his greatness."` },
      { text: `Read Isaiah 6 slowly and let it calibrate your sense of who you are standing before.`, scripture: `Isaiah 6:3 — "Holy, holy, holy is the Lord of Heaven's Armies! The whole earth is filled with his glory!"` },
    ],
    remedyTips: [
      { text: `Awe is often recovered through sustained attention to what God has made. Go outside.`, scripture: `Psalm 19:1 — "The heavens proclaim the glory of God. The skies display his craftsmanship."` },
      { text: `Reading Isaiah 40 in full is a reliable path back to awe when life feels flat or God feels small.`, scripture: `Isaiah 40:12 — "Who else has held the oceans in his hand? Who has measured off the heavens with his fingers?"` },
      { text: `Physical postures of worship — kneeling, hands open — reconnect the body to awe when the mind struggles to get there alone.`, scripture: `Psalm 95:6 — "Come, let us worship and bow down. Let us kneel before the Lord our maker."` },
    ],
  },

  disapproval: {
    description: `Godly disapproval — grounded in love and desire for restoration — is a biblical act. The key is whether it flows from love or from pride. "Wounds from a sincere friend are better than many kisses from an enemy." (Proverbs 27:6)`,
    feelTips: [
      { text: `Godly disapproval is an act of friendship and love, not rejection. It requires courage and genuine care.`, scripture: `Proverbs 27:6 — "Wounds from a sincere friend are better than many kisses from an enemy."` },
      { text: `The spirit of restoration changes everything about how disapproval is received.`, scripture: `Galatians 6:1 — "If another believer is overcome by some sin, you who are godly should gently and humbly help that person back onto the right path."` },
      { text: `Self-awareness must precede speaking — always.`, scripture: `Matthew 7:3 — "Why worry about a speck in your friend's eye when you have a log in your own?"` },
    ],
    remedyTips: [
      { text: `Truth and love must remain together — one without the other is incomplete and often harmful.`, scripture: `Ephesians 4:15 — "We will speak the truth in love, growing in every way more and more like Christ."` },
      { text: `Pray before speaking. Ask for the right words, the right time, and the right spirit.`, scripture: `Psalm 141:3 — "Set a guard over my mouth, Lord; keep watch over the door of my lips."` },
      { text: `Ask whether this is your concern to address, or God's. Not every grievance is yours to carry.`, scripture: `Romans 14:10 — "Why do you condemn another believer? We will all stand before the judgment seat of God."` },
    ],
  },

  remorse: {
    description: `Remorse in a Christian frame is what Paul calls "godly sorrow" — grief over sin that leads to repentance and life. The gospel transforms remorse: conviction is not condemnation, and genuine repentance opens directly to mercy.`,
    feelTips: [
      { text: `Let this remorse move you toward God, not away from Him. It is meant to be a door, not a cell.`, scripture: `2 Corinthians 7:10 — "The kind of sorrow God wants us to experience leads us away from sin and results in salvation."` },
      { text: `Confession is the door out of remorse — it is the mechanism of grace.`, scripture: `1 John 1:9 — "If we confess our sins to him, he is faithful and just to forgive us our sins and to cleanse us from all wickedness."` },
      { text: `God's response to genuine remorse is always welcome and restoration.`, scripture: `Joel 2:12 — "Come back to me with all your heart."` },
    ],
    remedyTips: [
      { text: `Receive forgiveness as fully as you feel the remorse. The cross absorbs the penalty — let the guilt go, because it has been dealt with.`, scripture: `Romans 8:1 — "There is no condemnation for those who belong to Christ Jesus."` },
      { text: `Make amends where possible, but trust that the blood of Christ covers what you cannot undo.`, scripture: `Psalm 51:10 — "Create in me a clean heart, O God. Renew a loyal spirit within me."` },
      { text: `Your remorse will not exhaust God's mercy. There is no bottom to it.`, scripture: `Psalm 103:8 — "The Lord is compassionate and merciful, slow to get angry and filled with unfailing love."` },
    ],
  },

  contempt: {
    description: `Scripture speaks strongly against contempt toward people made in the image of God. Jesus says calling someone a fool puts us in danger of judgment (Matthew 5:22). But Scripture also distinguishes between contempt for people and holding firm against what is genuinely evil.`,
    feelTips: [
      { text: `Contempt and humility cannot coexist in the same heart — ask which one you want to govern you.`, scripture: `Philippians 2:3 — "In humility value others above yourselves, not looking to your own interests."` },
      { text: `Remembering your own need of grace — where you came from — dissolves contempt more reliably than anything else.`, scripture: `Deuteronomy 5:15 — "Remember that you were slaves in Egypt."` },
      { text: `Common ground in human weakness is the antidote to contempt.`, scripture: `Romans 3:23 — "Everyone has sinned; we all fall short of God's glorious standard."` },
    ],
    remedyTips: [
      { text: `Ask honestly: am I holding contempt for the sin or for the image-bearer? Prayer for the person you feel contempt toward is the prescribed practice.`, scripture: `Matthew 5:44 — "Love your enemies! Pray for those who persecute you!"` },
      { text: `The Lord's Prayer directly links the forgiveness we receive with the forgiveness we extend.`, scripture: `Matthew 6:12 — "Forgive us our sins, as we have forgiven those who sin against us."` },
      { text: `Meditate on God's patience with you specifically. He did not wait for you to be worthy.`, scripture: `Romans 5:8 — "God showed his great love for us by sending Christ to die for us while we were still sinners."` },
    ],
  },

  aggressiveness: {
    description: `The energy of aggressiveness can be sanctified when directed rightly. Paul writes of fighting "the good fight of faith," and Jesus described the kingdom advancing with forceful, forward-moving energy. The question is whether this drive is Spirit-led or flesh-led.`,
    feelTips: [
      { text: `Channel this forward energy toward what is eternal and worth fighting for.`, scripture: `1 Timothy 6:12 — "Fight the good fight of faith. Hold tightly to the eternal life to which God has called you."` },
      { text: `Bring this intensity to your work as an act of worship, not self-assertion.`, scripture: `Colossians 3:23 — "Work willingly at whatever you do, as though you were working for the Lord rather than for people."` },
      { text: `Make sure this drive is oriented toward something worth pursuing — toward good, not simply retaliation.`, scripture: `Romans 12:21 — "Don't be overcome by evil, but overcome evil with good."` },
    ],
    remedyTips: [
      { text: `Strong drive without humility becomes domination — bring this energy under the authority of Christ before acting from it.`, scripture: `James 4:10 — "Humble yourselves before the Lord, and he will lift you up."` },
      { text: `Self-discipline is listed alongside power for a reason — one without the other is dangerous.`, scripture: `2 Timothy 1:7 — "The Spirit God gave us gives us power, love and self-discipline."` },
      { text: `Ask: is this energy coming from the Spirit or from insecurity and fear? The source matters more than the output.`, scripture: `Galatians 5:22–23 — "The Holy Spirit produces… love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control."` },
    ],
  },

  optimism: {
    description: `Christian hope is the sanctified version of optimism — grounded not in personal attitude but in the resurrection. "We have this hope as an anchor for the soul, firm and secure." (Hebrews 6:19). It is forward-looking faith that chooses to believe God's promises even when circumstances do not yet reflect them.`,
    feelTips: [
      { text: `Let your optimism rest on God's declared intention, not your own forecast.`, scripture: `Jeremiah 29:11 — "I know the plans I have for you… They are plans for good and not for disaster, to give you a future and a hope."` },
      { text: `Biblical optimism is not naïve — it holds the tension of present difficulty and future certainty simultaneously.`, scripture: `2 Corinthians 4:8 — "We are pressed on every side by troubles, but we are not crushed."` },
      { text: `Confident expectation is a posture of faith, not merely positive thinking.`, scripture: `Exodus 14:14 — "The Lord himself will fight for you. Just stay calm."` },
    ],
    remedyTips: [
      { text: `When hope feels thin, return to the resurrection — the empty tomb is the historical anchor of Christian hope.`, scripture: `John 14:19 — "Because I live, you also will live."` },
      { text: `List God's past faithfulness — concrete, specific instances — to rebuild the foundation of hope.`, scripture: `Hebrews 10:23 — "Let us hold tightly without wavering to the hope we affirm, for God can be trusted to keep his promise."` },
      { text: `Present difficulty and future joy are not in contradiction — the harvest requires the planting season.`, scripture: `Psalm 126:5 — "Those who plant in tears will harvest with shouts of joy."` },
    ],
  },

  // ── Joy outer emotions ─────────────────────────────────────────────────────

  cheerful: {
    description: `Cheerfulness in Scripture is not the performance of happiness but the overflow of a heart at peace with God. "A cheerful heart is good medicine." (Proverbs 17:22). It is a gift worth sharing and a witness to a watching world.`,
    feelTips: [
      { text: `Let this lightness be a gift you give to others around you — cheerfulness is contagious and disarming.`, scripture: `Proverbs 17:22 — "A cheerful heart is good medicine, but a broken spirit saps a person's strength."` },
      { text: `Let it flow into praise — cheerfulness and gratitude to God belong together.`, scripture: `Psalm 100:2 — "Worship the Lord with gladness. Come before him, singing with joy."` },
      { text: `This is a fruit of a life rooted in God. Let it remind you of the source it comes from.`, scripture: `Galatians 5:22 — "The Holy Spirit produces this kind of fruit in our lives… joy."` },
    ],
    remedyTips: [
      { text: `When cheerfulness fades, return to what is unchangingly true about God's goodness rather than waiting for circumstances to improve.`, scripture: `Philippians 4:8 — "Fix your thoughts on what is true, and honorable, and right, and pure, and lovely, and admirable."` },
      { text: `Gratitude is the soil that cheerfulness grows in. Return to specific, named thanksgiving.`, scripture: `1 Thessalonians 5:18 — "Be thankful in all circumstances, for this is God's will for you."` },
      { text: `Community often restores cheerfulness. Don't be alone with a low mood when the body of Christ is available.`, scripture: `Proverbs 27:17 — "As iron sharpens iron, so a friend sharpens a friend."` },
    ],
  },

  playful: {
    description: `Playfulness reflects a heart free from relentless striving — a sign that you are resting in God's provision rather than driven by anxiety. Children are consistently held up in Scripture as a model of the kingdom precisely because of this quality.`,
    feelTips: [
      { text: `This lightness is not a distraction from serious faith — it is part of the image of kingdom life.`, scripture: `Matthew 18:3 — "Unless you turn from your sins and become like little children, you will never get into the Kingdom of Heaven."` },
      { text: `Let yourself enjoy what God has made. Creation is meant to delight us.`, scripture: `Psalm 104:24 — "O Lord, what a variety of things you have made! In wisdom you have made them all."` },
      { text: `Share it — playfulness builds community and reflects the joy of the Lord to others.`, scripture: `Ecclesiastes 3:4 — "There is a time to cry and a time to laugh. A time to grieve and a time to dance."` },
    ],
    remedyTips: [
      { text: `If you rarely feel playful, examine whether anxiety or performance pressure has crowded out the freedom God offers.`, scripture: `Matthew 11:28–30 — "Come to me, all of you who are weary and carry heavy burdens, and I will give you rest."` },
      { text: `God ordained rest and celebration alongside work. Sabbath is a holy practice, not a concession.`, scripture: `Exodus 20:8 — "Remember to observe the Sabbath day by keeping it holy."` },
      { text: `Ask God for the grace to receive delight — receiving joy is itself a spiritual act.`, scripture: `Psalm 37:4 — "Take delight in the Lord, and he will give you your heart's desires."` },
    ],
  },

  // ── Trust outer emotions ───────────────────────────────────────────────────

  faithful: {
    description: `Faithfulness is both a fruit of the Spirit and a defining characteristic of God Himself. "Know that the Lord your God is God — the faithful God." (Deuteronomy 7:9). When you feel faithful, you are reflecting something of the divine character back into the world.`,
    feelTips: [
      { text: `Faithfulness is a fruit of the Spirit — receive it as God working through you, not just your own willpower.`, scripture: `Galatians 5:22–23 — "The Holy Spirit produces this kind of fruit in our lives… faithfulness."` },
      { text: `God is faithful first — your faithfulness mirrors His. Let that be your motivation.`, scripture: `Deuteronomy 7:9 — "Know that the Lord your God is God — the faithful God who keeps his covenant and his love."` },
      { text: `Even faithfulness in small things matters eternally.`, scripture: `Matthew 25:21 — "Well done, my good and faithful servant. You have been faithful in handling this small amount."` },
    ],
    remedyTips: [
      { text: `When faithful commitment feels costly, return to the one who was faithful to you at the greatest cost.`, scripture: `2 Timothy 2:13 — "If we are unfaithful, he remains faithful, for he cannot deny who he is."` },
      { text: `Ask God to sustain your faithfulness — it is not something you maintain alone.`, scripture: `1 Thessalonians 5:24 — "God will make this happen, for he who calls you is faithful."` },
      { text: `Long obedience in the same direction is the biblical definition of faithfulness — not dramatic moments, but consistent presence.`, scripture: `Proverbs 3:3 — "Never let loyalty and kindness leave you! Tie them around your neck as a reminder. Write them deep within your heart."` },
    ],
  },

  assured: {
    description: `Biblical assurance is the confidence that comes from knowing who God is and what He has done for you in Christ. It is not presumption — it is trust grounded in promise. "I am convinced that nothing can ever separate us from God's love." (Romans 8:38)`,
    feelTips: [
      { text: `This assurance is not self-confidence — it is God-confidence. Rest in that distinction.`, scripture: `Romans 8:38–39 — "I am convinced that nothing can ever separate us from God's love."` },
      { text: `Let this settled feeling produce steadiness in how you treat others — assured people don't need to prove themselves.`, scripture: `Philippians 4:11 — "I have learned how to be content with whatever I have."` },
      { text: `Assurance is a gift — receive it with gratitude and let it anchor your decisions.`, scripture: `Hebrews 10:22 — "Let us go right into the presence of God with sincere hearts fully trusting him."` },
    ],
    remedyTips: [
      { text: `When assurance wavers, return to what is objectively true about God's character rather than how you feel in the moment.`, scripture: `2 Timothy 1:12 — "I know the one in whom I trust, and I am sure that he is able to guard what I have entrusted to him."` },
      { text: `Assurance is renewed through the word and community — make space for both.`, scripture: `1 John 5:13 — "I have written this to you who believe in the name of the Son of God, so that you may know you have eternal life."` },
      { text: `Ground your assurance in what God has done, not in how well you are performing.`, scripture: `Romans 5:1 — "We have been made right in God's sight by faith. We have peace with God because of what Jesus Christ our Lord has done for us."` },
    ],
  },

  comfortable: {
    description: `Comfort in Scripture is linked to God's own nature — He is called "the God of all comfort" (2 Corinthians 1:3). Feeling genuinely at ease is a grace worth receiving. It is also a prompt to extend that same ease to others who are still striving.`,
    feelTips: [
      { text: `Receive this comfort as coming from God — even when it arrives through people, places, or rest.`, scripture: `2 Corinthians 1:3–4 — "God is our merciful Father and the source of all comfort. He comforts us in all our troubles."` },
      { text: `Let this ease become generosity — the comfortable are often uniquely placed to make others feel welcome.`, scripture: `Romans 15:7 — "Accept each other just as Christ has accepted you so that God will be given glory."` },
      { text: `Rest is holy. Don't apologise for receiving it.`, scripture: `Psalm 23:2 — "He lets me rest in green meadows; he leads me beside peaceful streams."` },
    ],
    remedyTips: [
      { text: `Comfort that never leads to growth or service can become complacency — stay open to where God is calling you to step out.`, scripture: `Hebrews 12:1 — "Let us run with endurance the race God has set before us."` },
      { text: `If comfort has become avoidance, gently examine what you might be sheltering from.`, scripture: `2 Timothy 1:7 — "God has not given us a spirit of fear and timidity, but of power, love, and self-discipline."` },
      { text: `True comfort is found in closeness to God, not in ease of circumstance.`, scripture: `Psalm 16:11 — "You will show me the way of life, granting me the joy of your presence and the pleasures of living with you forever."` },
    ],
  },

  valued: {
    description: `Your worth in Scripture is not earned — it is declared by the One who made you. "You are precious to me. You are honored, and I love you." (Isaiah 43:4). Feeling valued is a glimpse of how God already sees you.`,
    feelTips: [
      { text: `Let this feeling point you to your deeper, permanent worth in God's eyes — not contingent on performance or approval.`, scripture: `Isaiah 43:4 — "You are precious to me. You are honored, and I love you."` },
      { text: `You are seen by the One who counts every hair on your head.`, scripture: `Luke 12:7 — "The very hairs on your head are all numbered. So don't be afraid; you are more valuable to God than a whole flock of sparrows."` },
      { text: `Let being valued by others be received as a reflection of how God already sees you — not as the source of your worth.`, scripture: `Ephesians 2:10 — "We are God's masterpiece. He has created us anew in Christ Jesus."` },
    ],
    remedyTips: [
      { text: `When you feel unseen or dismissed, return to what God says rather than what circumstances suggest.`, scripture: `1 Samuel 16:7 — "People judge by outward appearance, but the Lord looks at the heart."` },
      { text: `Your worth is secured in Christ — it cannot be taken by rejection or failure.`, scripture: `Romans 8:31 — "If God is for us, who can ever be against us?"` },
      { text: `The need to feel valued is a God-given desire. Bring it to Him first before seeking it horizontally.`, scripture: `Psalm 139:14 — "Thank you for making me so wonderfully complex! Your workmanship is marvelous."` },
    ],
  },

  // ── Fear outer emotions ────────────────────────────────────────────────────

  nervous: {
    description: `Nervousness before important things is a biblical reality — Joshua was told "be strong and courageous" repeatedly, which implies he felt the pull toward fear. The presence of nerves does not disqualify you; it is the place where faith becomes practical.`,
    feelTips: [
      { text: `Take your nervousness to God specifically — He is interested in the details, not just the headlines.`, scripture: `Philippians 4:6 — "Don't worry about anything; instead, pray about everything. Tell God what you need."` },
      { text: `Nerves often mean you care deeply. Offer that care to God as part of your preparation.`, scripture: `Psalm 55:22 — "Give your burdens to the Lord, and he will take care of you."` },
      { text: `You are not facing this alone — the same Spirit that raised Christ from the dead lives in you.`, scripture: `Romans 8:11 — "The Spirit of God, who raised Jesus from the dead, lives in you."` },
    ],
    remedyTips: [
      { text: `Do the preparation faithfully, then release the outcome. Your job is obedience; God's job is results.`, scripture: `Proverbs 16:3 — "Commit your actions to the Lord, and your plans will succeed."` },
      { text: `Let the nerves move you to prayer rather than to more planning or avoidance.`, scripture: `1 Peter 5:7 — "Give all your worries and cares to God, for he cares about you."` },
      { text: `Be strong — not because you are capable, but because He is.`, scripture: `Joshua 1:9 — "Be strong and courageous! Do not be afraid or discouraged. For the Lord your God is with you wherever you go."` },
    ],
  },

  hesitant: {
    description: `Hesitancy is not always unbelief — it can be wisdom seeking clarity before acting. But Scripture also calls us to step out in faith when God has spoken, trusting that His guidance will become clear as we move.`,
    feelTips: [
      { text: `Pause and pray before assuming your hesitancy is fear. It may be wisdom asking a good question.`, scripture: `James 1:5 — "If you need wisdom, ask our generous God, and he will give it to you."` },
      { text: `Bring the specific uncertainty to God — ask for the clarity you need before the next step.`, scripture: `Proverbs 3:5–6 — "Seek his will in all you do, and he will show you which path to take."` },
      { text: `The Spirit is a faithful guide — trust His prompting over your own anxiety.`, scripture: `Isaiah 30:21 — "Your own ears will hear him. Right behind you a voice will say, 'This is the way you should go.'"` },
    ],
    remedyTips: [
      { text: `If God has spoken, the next step is obedience — trust and clarity often follow the first movement of faith, not precede it.`, scripture: `Hebrews 11:8 — "Abraham went out, even though he did not know where he was going." (paraphrase)` },
      { text: `Ask whether the hesitancy is rooted in fear of failure or genuine wisdom. The answer changes what you do next.`, scripture: `2 Timothy 1:7 — "God has not given us a spirit of fear and timidity, but of power, love, and self-discipline."` },
      { text: `Discernment in community helps. Share the hesitancy with a trusted person before deciding alone.`, scripture: `Proverbs 15:22 — "Plans go wrong for lack of advice; many advisers bring success."` },
    ],
  },

  timid: {
    description: `Timidity is something God directly addresses in Scripture — not with condemnation but with a reminder of what He has actually placed inside you. "God has not given us a spirit of timidity, but of power." (2 Timothy 1:7)`,
    feelTips: [
      { text: `Timidity is understandable, but it is not your identity in Christ. Name the difference.`, scripture: `2 Timothy 1:7 — "God has not given us a spirit of fear and timidity, but of power, love, and self-discipline."` },
      { text: `Moses felt completely unqualified — God's answer was not to improve Moses' confidence but to promise His own presence.`, scripture: `Exodus 3:12 — "God said, 'I will be with you.'"` },
      { text: `Your smallness is not a problem for God — it is often the exact condition He works through most powerfully.`, scripture: `1 Corinthians 1:27 — "God chose things the world considers foolish in order to shame those who think they are wise."` },
    ],
    remedyTips: [
      { text: `Ask God to replace timidity with the courage that comes from knowing who He is, not from feeling more capable.`, scripture: `Psalm 27:1 — "The Lord is my light and my salvation — so why should I be afraid?"` },
      { text: `Take the small step that is in front of you. Courage is usually built one act of obedience at a time.`, scripture: `Zechariah 4:10 — "Do not despise these small beginnings, for the Lord rejoices to see the work begin."` },
      { text: `You are not alone in this — the same Spirit who empowered the apostles lives in you.`, scripture: `Acts 1:8 — "You will receive power when the Holy Spirit comes upon you."` },
    ],
  },

  // ── Surprise outer emotions ────────────────────────────────────────────────

  puzzled: {
    description: `Being puzzled is a natural response to the mystery of God's ways — "How unsearchable his judgments, and his paths beyond tracing out!" (Romans 11:33). Biblical faith does not require answers to every question; it requires trust in the One who holds the answers.`,
    feelTips: [
      { text: `Not everything needs to be resolved immediately — hold the question openly before God.`, scripture: `Proverbs 3:5 — "Trust in the Lord with all your heart; do not depend on your own understanding."` },
      { text: `God's ways are often beyond our comprehension — and that is not a flaw in the system.`, scripture: `Romans 11:33 — "How unsearchable are God's judgments, how mysterious his ways!"` },
      { text: `Bring your confusion to God directly — He is not threatened by your questions.`, scripture: `Jeremiah 33:3 — "Ask me and I will tell you remarkable secrets you do not know about things to come."` },
    ],
    remedyTips: [
      { text: `If you cannot see the path ahead, stay close to the One who can. Understanding follows relationship.`, scripture: `Psalm 73:24 — "You guide me with your counsel, leading me to a glorious destiny."` },
      { text: `Ask God for wisdom specifically — it is a promised gift for those who ask.`, scripture: `James 1:5 — "If you need wisdom, ask our generous God, and he will give it to you. He will not rebuke you for asking."` },
      { text: `Puzzlement is often the beginning of deeper discovery — stay curious and keep asking.`, scripture: `Matthew 7:7 — "Keep on asking, and you will receive what you ask for."` },
    ],
  },

  confused: {
    description: `Confusion is not a sign of weak faith — even the disciples were regularly confused by Jesus (John 16:17–18). God works in the confusion, not only after it passes. "He reveals deep and hidden things." (Daniel 2:22)`,
    feelTips: [
      { text: `Confusion in faith is common and not a sign of failure. Bring it honestly to God.`, scripture: `John 16:12 — "There is so much more I want to tell you, but you can't bear it now."` },
      { text: `The Holy Spirit is specifically given to lead you into truth — you are not navigating this alone.`, scripture: `John 16:13 — "When the Spirit of truth comes, he will guide you into all truth."` },
      { text: `Slow down before making decisions in confusion — wait for clarity.`, scripture: `Psalm 46:10 — "Be still, and know that I am God!"` },
    ],
    remedyTips: [
      { text: `Return to what you do know and stand there — confusion is often addressed by standing firmly on the clear truths while the unclear ones become more visible.`, scripture: `Deuteronomy 29:29 — "The Lord our God has secrets known to no one. We are not accountable for them, but we and our children are accountable forever for all that he has revealed to us."` },
      { text: `Seek wise counsel — God often clarifies through the body of Christ.`, scripture: `Proverbs 15:22 — "Plans go wrong for lack of advice; many advisers bring success."` },
      { text: `Ask the Spirit to illuminate your understanding — this is exactly what He does.`, scripture: `Ephesians 1:18 — "I pray that your hearts will be flooded with light so that you can understand the confident hope he has given to those he called."` },
    ],
  },

  unsettled: {
    description: `Feeling unsettled can be a sign of the Spirit's movement — God often disturbs our comfort before calling us forward. Or it can be anxiety asking for attention. Discernment between the two is a spiritual practice worth developing.`,
    feelTips: [
      { text: `Ask whether this unsettledness is the Spirit prompting you, or anxiety asking for surrender. Both need a response.`, scripture: `Psalm 139:23–24 — "Search me, O God, and know my heart; test me and know my anxious thoughts."` },
      { text: `When unsettled, return to the anchor — not to circumstances but to the character of God.`, scripture: `Hebrews 6:19 — "We have this hope as an anchor for the soul, firm and secure."` },
      { text: `Bring the vague disquiet to words in prayer — naming it before God often releases its grip.`, scripture: `Philippians 4:6 — "Don't worry about anything; instead, pray about everything."` },
    ],
    remedyTips: [
      { text: `God is the peace-giver — not an absence of problems but a settled presence within them.`, scripture: `John 14:27 — "I am leaving you with a gift — peace of mind and heart. And the peace I give is a gift the world cannot give."` },
      { text: `Root yourself in what is unchanging when everything else feels unstable.`, scripture: `Hebrews 13:8 — "Jesus Christ is the same yesterday, today, and forever."` },
      { text: `If the unsettledness persists, take it seriously — God may be inviting you to attend to something real.`, scripture: `Isaiah 30:21 — "Your own ears will hear him. Right behind you a voice will say, 'This is the way you should go.'"` },
    ],
  },

  startled: {
    description: `Being startled is a physical signal the body gives before the mind can process. Scripture doesn't pathologise the startle response — but it consistently calls us back to a foundational peace that outlasts any shock. "Do not be afraid or terrified… the Lord your God goes with you." (Deuteronomy 31:6)`,
    feelTips: [
      { text: `Take a breath before reacting. The startled response is fast — give your mind and spirit a moment to catch up.`, scripture: `Proverbs 29:20 — "There is more hope for a fool than for someone who speaks without thinking."` },
      { text: `God was not startled — return to His calm. He is sovereign over what surprised you.`, scripture: `Isaiah 46:10 — "Only I can tell the end from the beginning… I say whatever I please, and it all comes to pass."` },
      { text: `Even sudden, unexpected events are held within God's purposes.`, scripture: `Romans 8:28 — "God causes everything to work together for the good of those who love God."` },
    ],
    remedyTips: [
      { text: `Ground yourself in God's nearness — His presence is the steady ground under every surprise.`, scripture: `Psalm 46:1 — "God is our refuge and strength, always ready to help in times of trouble."` },
      { text: `After the startle passes, ask what, if anything, it is asking you to attend to.`, scripture: `Proverbs 4:23 — "Guard your heart above all else, for it determines the course of your life."` },
      { text: `Let the experience deepen your dependence on God rather than your self-protection.`, scripture: `Psalm 27:1 — "The Lord is my light and my salvation — so why should I be afraid?"` },
    ],
  },

  stunned: {
    description: `Being stunned — when normal processing halts and you are left speechless — is a deeply human experience that Scripture honours. When Ezekiel saw the vision of God, he fell facedown (Ezekiel 1:28). Stunned moments can be the beginning of profound encounter.`,
    feelTips: [
      { text: `Give yourself permission to not respond immediately. God is not in a hurry, and neither does He need you to process on demand.`, scripture: `Psalm 46:10 — "Be still, and know that I am God!"` },
      { text: `Stunned silence before God is a legitimate and ancient posture.`, scripture: `Job 40:4 — "I am nothing — how could I ever find the answers? I will cover my mouth with my hand."` },
      { text: `This feeling may be the beginning of something God is doing — stay open rather than rushing to resolution.`, scripture: `Isaiah 43:19 — "For I am about to do something new. See, I have already begun! Do you not see it?"` },
    ],
    remedyTips: [
      { text: `Return to what is constant when everything else is off-kilter.`, scripture: `Hebrews 13:8 — "Jesus Christ is the same yesterday, today, and forever."` },
      { text: `You don't need words yet. God receives silence as prayer.`, scripture: `Romans 8:26 — "The Holy Spirit prays for us with groanings that cannot be expressed in words."` },
      { text: `When you are ready, bring it to God and to a trusted person. Stunned experiences need to be witnessed, not carried alone.`, scripture: `Galatians 6:2 — "Share each other's burdens, and in this way obey the law of Christ."` },
    ],
  },

  // ── Sadness outer emotions ─────────────────────────────────────────────────

  gloomy: {
    description: `Gloom is the low-grade weight of a hard season — less acute than grief, more persistent than a bad day. The Psalms name this experience repeatedly. "Why am I discouraged? Why is my heart so sad?" (Psalm 42:5). The Psalmists always address their gloom by returning to what they know about God.`,
    feelTips: [
      { text: `Name the gloom honestly before God — He is not surprised or disappointed by it.`, scripture: `Psalm 42:5 — "Why am I discouraged? Why is my heart so sad? I will put my hope in God!"` },
      { text: `Gloom often lifts when we move from introspection to worship — preach truth to your own heart.`, scripture: `Lamentations 3:22–23 — "Great is his faithfulness; his mercies begin afresh each morning."` },
      { text: `Don't isolate — gloom thrives in solitude and weakens in community.`, scripture: `Hebrews 10:25 — "Let us not neglect our meeting together, as some people do, but encourage one another."` },
    ],
    remedyTips: [
      { text: `Gloom is a season, not a permanent state. Morning always comes.`, scripture: `Psalm 30:5 — "Weeping may last through the night, but joy comes with the morning."` },
      { text: `Basic physical care matters more than it seems — sleep, sunlight, and movement are good stewardship of the body God gave you.`, scripture: `1 Kings 19:5–7 — God's first response to Elijah's burnout was sleep, food, and water — not a sermon.` },
      { text: `Let your gloom become prayer rather than passive endurance.`, scripture: `Psalm 34:18 — "The Lord is close to the brokenhearted; he rescues those whose spirits are crushed."` },
    ],
  },

  forlorn: {
    description: `Forlornness — the ache of feeling lost, left behind, or without hope — is addressed with extraordinary tenderness in Scripture. "He reached down from heaven and rescued me." (Psalm 18:16). God is specifically the rescuer of the abandoned and forgotten.`,
    feelTips: [
      { text: `You are not as abandoned as it feels. Bring this ache directly to the One who calls Himself "Father to the fatherless."`, scripture: `Psalm 68:5–6 — "Father to the fatherless, defender of widows — this is God, whose dwelling is holy. God places the lonely in families."` },
      { text: `This longing is itself a spiritual signal — it points toward a belonging that only God can ultimately satisfy.`, scripture: `Psalm 73:26 — "My health may fail, and my spirit may grow weak, but God remains the strength of my heart; he is mine forever."` },
      { text: `The deepest homesickness is a longing for God — and He is closer than you think.`, scripture: `Acts 17:27 — "He is not far from any one of us."` },
    ],
    remedyTips: [
      { text: `Reach out — isolation deepens forlornness. One small connection, even imperfect, matters.`, scripture: `Ecclesiastes 4:10 — "If one person falls, the other can reach out and help."` },
      { text: `Let Scripture speak into the ache — read Psalms 22, 42, or 88 slowly. You are not alone in this pain.`, scripture: `Psalm 22:24 — "He has not ignored or belittled the suffering of the needy. He has not turned his back on them, but has listened to their cries for help."` },
      { text: `God is in the business of restoring what has been lost and calling the wandering home.`, scripture: `Luke 15:20 — "So he returned home to his father. And while he was still a long way off, his father saw him coming."` },
    ],
  },

  disappointed: {
    description: `Disappointment is grief over unmet expectation — and Scripture holds space for it honestly. "Hope deferred makes the heart sick." (Proverbs 13:12). But it also points beyond every earthly disappointment to a hope that cannot fail.`,
    feelTips: [
      { text: `Name what you were hoping for — disappointment that is not named cannot be properly grieved.`, scripture: `Proverbs 13:12 — "Hope deferred makes the heart sick, but a dream fulfilled is a tree of life."` },
      { text: `Let yourself feel the loss before rushing to "find the lesson." Grief needs space.`, scripture: `Ecclesiastes 3:4 — "There is a time to cry and a time to laugh. A time to grieve and a time to dance."` },
      { text: `God does not condemn disappointment — He met people in it throughout Scripture.`, scripture: `Romans 5:5 — "This hope will not lead to disappointment. For we know how dearly God loves us."` },
    ],
    remedyTips: [
      { text: `Ground your hope in what God has promised, not what you expected. His promises are the ones that cannot disappoint.`, scripture: `Romans 5:5 — "Hope does not put us to shame, because God's love has been poured into our hearts through the Holy Spirit."` },
      { text: `Ask God: is there something He is redirecting you toward that you cannot yet see?`, scripture: `Jeremiah 29:11 — "I know the plans I have for you… plans for good and not for disaster, to give you a future and a hope."` },
      { text: `What we most long for — wholeness, belonging, peace, joy — will be fully satisfied. Earthly disappointments are real, but they are not final.`, scripture: `Revelation 21:4 — "He will wipe every tear from their eyes, and there will be no more death or sorrow or crying or pain."` },
    ],
  },

  // ── Disgust outer emotions ─────────────────────────────────────────────────

  displeased: {
    description: `Displeasure at what falls short of what is good and right is a biblically valid response. God Himself is described as displeased with injustice and sin. The question is whether your displeasure leads toward constructive speech or withdrawal and bitterness.`,
    feelTips: [
      { text: `Hold your displeasure with discernment — not every disappointment is worth addressing, and not every battle is yours.`, scripture: `Proverbs 19:11 — "Sensible people control their temper; they earn respect by overlooking wrongs."` },
      { text: `Let your displeasure speak to standards rooted in love, not personal preference.`, scripture: `Micah 6:8 — "Do what is right, to love mercy, and to walk humbly with your God."` },
      { text: `God is patient with imperfection — you can be too, without abandoning your convictions.`, scripture: `2 Peter 3:9 — "The Lord is not slow in keeping his promise… He is patient with you."` },
    ],
    remedyTips: [
      { text: `If this displeasure needs to be spoken, do it from a place of love and with the right spirit.`, scripture: `Ephesians 4:15 — "We will speak the truth in love, growing in every way more and more like Christ."` },
      { text: `Ask whether this requires action, prayer, or simply letting it go.`, scripture: `Proverbs 17:9 — "Love prospers when a fault is forgiven, but dwelling on it separates close friends."` },
      { text: `Trust God with what you cannot control or correct.`, scripture: `Romans 12:19 — "Leave room for God to show his anger. He will take care of it."` },
    ],
  },

  offended: {
    description: `Feeling offended is common and human, but Scripture calls us to respond with far more grace than comes naturally. "A person's wisdom yields patience; it is to one's glory to overlook an offense." (Proverbs 19:11). The cross is the model for absorbing offence without retaliation.`,
    feelTips: [
      { text: `Pause before responding — an offence received in the flesh often escalates; one received in the Spirit can be the moment of grace.`, scripture: `Proverbs 19:11 — "Sensible people control their temper; they earn respect by overlooking wrongs."` },
      { text: `Ask whether this was intentional or careless. The response differs.`, scripture: `Proverbs 10:12 — "Hatred stirs up quarrels, but love makes up for all offenses."` },
      { text: `Your identity in Christ does not depend on how others treat you — that security changes everything about how you receive an offence.`, scripture: `Romans 8:31 — "If God is for us, who can ever be against us?"` },
    ],
    remedyTips: [
      { text: `Where forgiveness is needed, choose it early — not for their sake first, but for your own freedom.`, scripture: `Colossians 3:13 — "Forgive anyone who offends you. Remember, the Lord forgave you, so you must forgive others."` },
      { text: `If the offence needs to be addressed, do it privately and gently first.`, scripture: `Matthew 18:15 — "If another believer sins against you, go privately and point out the offense."` },
      { text: `Jesus was regularly misunderstood, dismissed, and mistreated — He understands what you are carrying.`, scripture: `Hebrews 4:15 — "Our High Priest understands our weaknesses, for he faced all of the same testings we do."` },
    ],
  },

  withdrawn: {
    description: `Withdrawal can be wisdom — Jesus regularly withdrew to pray (Luke 5:16). But it can also be a protective reaction that isolates rather than restores. The difference matters: holy retreat draws you toward God; defensive withdrawal draws you away from both God and others.`,
    feelTips: [
      { text: `Ask whether this withdrawal is rest and renewal, or avoidance and self-protection.`, scripture: `Luke 5:16 — "Jesus often withdrew to the wilderness for prayer."` },
      { text: `Time alone with God is genuinely restorative. Protect it.`, scripture: `Matthew 11:28 — "Come to me, all of you who are weary and carry heavy burdens, and I will give you rest."` },
      { text: `If you are pulling back to heal, that is wisdom. Name what you are healing from.`, scripture: `Psalm 23:2–3 — "He lets me rest in green meadows… He renews my strength."` },
    ],
    remedyTips: [
      { text: `If withdrawal has become isolation, gently challenge it — we were made for community, and prolonged solitude rarely heals what it set out to.`, scripture: `Hebrews 10:25 — "Let us not neglect our meeting together, as some people do, but encourage one another."` },
      { text: `Name what drove the withdrawal — hurt, exhaustion, fear, or shame — and bring it to God before bringing it to anyone else.`, scripture: `Psalm 62:8 — "Pour out your heart to him, for God is our refuge."` },
      { text: `One small re-engagement is often enough to begin the return. You don't have to re-enter everything at once.`, scripture: `Galatians 6:2 — "Share each other's burdens, and in this way obey the law of Christ."` },
    ],
  },

  reluctant: {
    description: `Reluctance is not always a spiritual problem — it can be wisdom recognising a cost. But when God has called and we hesitate, reluctance becomes the space where trust is built or avoided. Moses, Jonah, and Gideon were all reluctant — and God met them in it.`,
    feelTips: [
      { text: `Name what you are reluctant about. Be honest with yourself and with God.`, scripture: `Psalm 139:23 — "Search me, O God, and know my heart; test me and know my anxious thoughts."` },
      { text: `Is this reluctance wisdom (good reasons to wait) or fear (avoiding obedience)? The distinction matters.`, scripture: `James 1:5 — "If you need wisdom, ask our generous God, and he will give it to you."` },
      { text: `God is patient with reluctance — but He also calls us forward.`, scripture: `Judges 6:14 — "The Lord turned to him and said, 'Go with the strength you have… I am sending you!'"` },
    ],
    remedyTips: [
      { text: `God's answer to reluctance is almost always His presence, not the removal of the challenge.`, scripture: `Exodus 3:12 — "God said, 'I will be with you.'"` },
      { text: `Take the smallest faithful step available. Action often dissolves what deliberation cannot.`, scripture: `Zechariah 4:10 — "Do not despise these small beginnings, for the Lord rejoices to see the work begin."` },
      { text: `What would it look like to obey in a spirit of trust rather than willpower?`, scripture: `Philippians 2:13 — "God is working in you, giving you the desire and the power to do what pleases him."` },
    ],
  },

  // ── Anger outer emotions ───────────────────────────────────────────────────

  cross: {
    description: `Irritation at small frustrations is a human reality — Scripture doesn't demand emotional perfection, but it does call us to govern our response quickly. "A patient person shows great understanding." (Proverbs 14:29). The irritated heart often reveals what it is clinging to.`,
    feelTips: [
      { text: `Notice what this irritation is actually about — it often points to something more important underneath.`, scripture: `Proverbs 14:29 — "People with understanding control their anger; a hot temper shows great foolishness."` },
      { text: `Small irritations are often invitations to practise patience — a fruit of the Spirit that is built through use.`, scripture: `Galatians 5:22–23 — "The Holy Spirit produces… patience… as fruit in our lives."` },
      { text: `Ask: is this worth the energy it is taking from you?`, scripture: `Proverbs 19:11 — "Sensible people control their temper; they earn respect by overlooking wrongs."` },
    ],
    remedyTips: [
      { text: `Examine whether the irritation is revealing an unmet expectation. Is the expectation reasonable? Is it one God has actually required?`, scripture: `Psalm 62:5 — "Let all that I am wait quietly before God, for my hope is in him."` },
      { text: `Let the irritation pass before speaking or acting from it.`, scripture: `James 1:19–20 — "Be quick to listen, slow to speak, and slow to get angry. Human anger does not produce the righteousness God desires."` },
      { text: `Offer the irritation to God and ask for His perspective on whatever provoked it.`, scripture: `Philippians 4:7 — "You will experience God's peace, which exceeds anything we can understand."` },
    ],
  },

  peeved: {
    description: `Peeved is the feeling of a minor grievance that lingers longer than it should. Scripture's antidote to lingering petty resentment is love that "keeps no record of being wronged." (1 Corinthians 13:5). It is a small thing, but left unaddressed it accumulates into something larger.`,
    feelTips: [
      { text: `Name the specific grievance clearly — vague irritation is harder to release than a named one.`, scripture: `Ephesians 4:26 — "Don't sin by letting anger control you."` },
      { text: `Love does not keep a running tab. Ask whether you are adding this to a longer list.`, scripture: `1 Corinthians 13:5 — "Love does not demand its own way. It is not irritable, and it keeps no record of being wronged."` },
      { text: `Most minor offences are better overlooked than addressed — but they still need to be released, not suppressed.`, scripture: `Proverbs 17:9 — "Love prospers when a fault is forgiven, but dwelling on it separates close friends."` },
    ],
    remedyTips: [
      { text: `Choose to release it specifically and deliberately, rather than letting it linger.`, scripture: `Matthew 6:14 — "If you forgive those who sin against you, your heavenly Father will forgive you."` },
      { text: `Pray for the person who has irritated you — even briefly. It is hard to hold peeved feelings toward someone you are genuinely praying for.`, scripture: `Matthew 5:44 — "Pray for those who persecute you!"` },
      { text: `Ask: would I want to stand before God with this still on my mind? Let the perspective of eternity shrink its size.`, scripture: `Colossians 3:2 — "Think about the things of heaven, not the things of earth."` },
    ],
  },

  frustrated: {
    description: `Frustration at obstacles, slow progress, or circumstances beyond your control is one of the most common emotional experiences. Scripture addresses it through the lens of trust — "those who trust in the Lord will find new strength" (Isaiah 40:31) — and through the invitation to perseverance.`,
    feelTips: [
      { text: `Frustration is a signal, not a verdict. Ask what it is pointing toward — a need for help, a change of approach, or simply patience.`, scripture: `Romans 5:3–4 — "We can rejoice when we run into problems and trials, for we know that they help us develop endurance."` },
      { text: `Name the specific obstacle rather than letting frustration become a general feeling of helplessness.`, scripture: `Philippians 4:6 — "Tell God what you need, and thank him for all he has done."` },
      { text: `Perseverance under pressure is one of the most spiritually formative experiences — it is not wasted.`, scripture: `James 1:3–4 — "When your faith is tested, your endurance has a chance to grow."` },
    ],
    remedyTips: [
      { text: `Is there a step you have been avoiding that is actually the path forward? Ask God for the courage to take it.`, scripture: `Proverbs 16:9 — "We can make our plans, but the Lord determines our steps."` },
      { text: `Ask for fresh perspective — frustration often narrows vision to the problem rather than the solution.`, scripture: `Isaiah 40:31 — "Those who trust in the Lord will find new strength."` },
      { text: `Give the frustration to God — He is not frustrated by what frustrates you. He sees the whole picture.`, scripture: `Psalm 37:5 — "Commit everything you do to the Lord. Trust him, and he will help you."` },
    ],
  },

  impatient: {
    description: `Impatience is often the gap between God's timing and our own urgency. Scripture consistently calls God's people to wait — not passively, but actively, trustingly. "Wait patiently for the Lord. Be brave and courageous." (Psalm 27:14)`,
    feelTips: [
      { text: `Ask what this impatience is revealing about where you have placed your hope — in outcomes and timing, or in God Himself.`, scripture: `Psalm 27:14 — "Wait patiently for the Lord. Be brave and courageous. Yes, wait patiently for the Lord."` },
      { text: `God's timing is never early, never late, and never what we would choose. Trust that from His vantage point, now is exactly right.`, scripture: `Ecclesiastes 3:11 — "Yet God has made everything beautiful for its own time."` },
      { text: `Use this waiting period well — it is rarely empty in God's economy.`, scripture: `Romans 8:25 — "If we already have something, we don't need to hope for it. But if we look forward to something we don't yet have, we must wait patiently and confidently."` },
    ],
    remedyTips: [
      { text: `Patience is a fruit of the Spirit — ask God to grow it in you, and remember that fruit grows through seasons, not instantly.`, scripture: `Galatians 5:22 — "The Holy Spirit produces… patience… as fruit in our lives."` },
      { text: `Redirect the energy of impatience into prayer and faithful preparation rather than anxious waiting.`, scripture: `Isaiah 40:31 — "Those who trust in the Lord will find new strength. They will soar high on wings like eagles."` },
      { text: `God always comes through — in His time. Build your case for trust from His past faithfulness.`, scripture: `Lamentations 3:25 — "The Lord is good to those who depend on him, to those who search for him."` },
    ],
  },

  // ── Anticipation outer emotions ────────────────────────────────────────────

  eager: {
    description: `Eagerness is anticipation with energy and agency — a leaning-forward readiness. Biblically, eagerness toward God and His purposes is celebrated: "I run with determination to win." (1 Corinthians 9:26). Let this energy be consecrated.`,
    feelTips: [
      { text: `Channel this eagerness into faithful preparation — let the energy move you toward what God is calling you into.`, scripture: `1 Corinthians 9:24 — "Run to win! All athletes are disciplined in their training."` },
      { text: `Be eager for the right things — eagerness for God's kingdom is commended throughout Scripture.`, scripture: `Titus 2:14 — "He gave his life to free us from every kind of sin, to cleanse us, and to make us his very own people, totally committed to doing good deeds."` },
      { text: `Let this eagerness be shared — enthusiasm for God's work is contagious and builds others up.`, scripture: `2 Corinthians 9:2 — "Your enthusiasm has stirred up many of them."` },
    ],
    remedyTips: [
      { text: `Eagerness without discernment can become recklessness — bring your plans to God before charging forward.`, scripture: `Proverbs 19:2 — "Enthusiasm without knowledge is no good; haste makes mistakes."` },
      { text: `Make sure this eagerness is Spirit-led rather than self-driven.`, scripture: `Galatians 5:25 — "Since we are living by the Spirit, let us follow the Spirit's leading in every part of our lives."` },
      { text: `Channel eagerness into the good fight — there is plenty of worthy work to pour this energy into.`, scripture: `1 Timothy 6:12 — "Fight the good fight of faith."` },
    ],
  },

  curious: {
    description: `Curiosity is a gift — the desire to understand more of what God has made and what He is doing. Scripture commends the searching heart: "It is the glory of God to conceal a matter; it is the glory of kings to search a thing out." (Proverbs 25:2)`,
    feelTips: [
      { text: `Lean into the curiosity — God delights in the searching heart. He is not hiding from you.`, scripture: `Proverbs 25:2 — "It is the glory of God to conceal things, but the glory of kings is to search things out."` },
      { text: `All genuine knowledge points toward God — let curiosity be an act of worship.`, scripture: `Psalm 111:2 — "How amazing are the deeds of the Lord! All who delight in him should ponder them."` },
      { text: `Ask God to be your guide as you explore — wisdom and curiosity belong together.`, scripture: `Jeremiah 33:3 — "Call to me and I will answer you and tell you great and unsearchable things you do not know."` },
    ],
    remedyTips: [
      { text: `Let curiosity be governed by what is true, good, and worth pursuing — not every rabbit hole is worth going down.`, scripture: `Philippians 4:8 — "Fix your thoughts on what is true, and honorable, and right, and pure, and lovely, and admirable."` },
      { text: `The deepest curiosity is about God Himself — the inexhaustible subject.`, scripture: `Psalm 27:4 — "The one thing I ask of the Lord… is to live in the house of the Lord all the days of my life, delighting in the Lord's perfections and meditating in his Temple."` },
      { text: `Bring your questions to Scripture and to trusted people — curiosity thrives in community.`, scripture: `Acts 17:11 — "The people of Berea… listened eagerly to Paul's message. They searched the Scriptures day after day."` },
    ],
  },

  excited: {
    description: `Excitement is anticipation with a full-body charge — and in Scripture, excitement about what God is doing is entirely appropriate. The disciples were filled with great joy after the resurrection (Luke 24:52). Let this energy be received as a gift and offered back to the One who gave it.`,
    feelTips: [
      { text: `Let this excitement flow naturally into gratitude — joy received becomes praise.`, scripture: `Luke 24:52–53 — "They worshiped him and then returned to Jerusalem filled with great joy. And they spent all of their time in the Temple, praising God."` },
      { text: `Share it with someone — excitement expressed in community multiplies.`, scripture: `1 Thessalonians 5:11 — "Encourage each other and build each other up."` },
      { text: `Notice what this excitement reveals about what you love — it is a useful window into your deepest values and desires.`, scripture: `Psalm 37:4 — "Take delight in the Lord, and he will give you your heart's desires."` },
    ],
    remedyTips: [
      { text: `Let excitement be accompanied by wisdom — high energy can cloud discernment.`, scripture: `Proverbs 19:2 — "Enthusiasm without knowledge is no good; haste makes mistakes."` },
      { text: `Offer this excitement to God in prayer before acting from it — consecrated excitement is powerful.`, scripture: `Proverbs 16:3 — "Commit your actions to the Lord, and your plans will succeed."` },
      { text: `If you rarely feel excitement, ask God to renew your sense of what He is doing — there is always something to be excited about in His kingdom.`, scripture: `Isaiah 43:19 — "For I am about to do something new. See, I have already begun! Do you not see it?"` },
    ],
  },

  // ── Additional outer emotions ──────────────────────────────────────────────

  peaceful: {
    description: `"I am leaving you with a gift — peace of mind and heart. And the peace I give is a gift the world cannot give." (John 14:27). The peace of God is not the absence of difficulty but the presence of God in the midst of it.`,
    feelTips: [
      { text: `Receive this peace as a gift from God rather than a state you have achieved.`, scripture: `Philippians 4:7 — "The peace of God, which exceeds anything we can understand, will guard your hearts and minds as you live in Christ Jesus."` },
      { text: `Peace follows where your attention is anchored. Notice what your thoughts are currently fixed on.`, scripture: `Isaiah 26:3 — "You will keep in perfect peace all who trust in you, all whose thoughts are fixed on you!"` },
      { text: `Let this peace become available to others. Peacemakers are called children of God.`, scripture: `Matthew 5:9 — "God blesses those who work for peace, for they will be called the children of God."` },
    ],
    remedyTips: [
      { text: `When peace is disrupted, surrender is usually the path back — not solving.`, scripture: `Philippians 4:6 — "Don't worry about anything; instead, pray about everything."` },
      { text: `God leads you to rest — make space for it rather than filling every hour.`, scripture: `Psalm 23:2 — "He lets me rest in green meadows; he leads me beside peaceful streams."` },
      { text: `Let peace be a governing principle, not just a feeling — let it guide your decisions.`, scripture: `Colossians 3:15 — "Let the peace that comes from Christ rule in your hearts."` },
    ],
  },

  grateful: {
    description: `Gratitude is not merely a positive feeling in Scripture — it is a command and a spiritual discipline. "Give thanks in all circumstances; for this is God's will for you in Christ Jesus." (1 Thessalonians 5:18). Thanksgiving opens the heart to receive more of what God has already given.`,
    feelTips: [
      { text: `Let gratitude become explicit — move from vague to particular. Name what you are thankful for.`, scripture: `Psalm 107:1 — "Give thanks to the Lord, for he is good! His faithful love endures forever."` },
      { text: `Paul wrote this from prison — thankfulness is not conditional on comfort.`, scripture: `1 Thessalonians 5:16–18 — "Always be joyful. Never stop praying. Be thankful in all circumstances."` },
      { text: `Let gratitude shape not just what you feel but how you act.`, scripture: `Colossians 3:17 — "Whatever you do or say, do it as a representative of the Lord Jesus, giving thanks through him to God the Father."` },
    ],
    remedyTips: [
      { text: `When gratitude feels thin, list three particular gifts from today — not general blessings, but today's specifics.`, scripture: `James 1:17 — "Every good and perfect gift is from above, coming down from the Father of the heavenly lights."` },
      { text: `Sung or spoken praise often recovers gratitude that mere thinking cannot.`, scripture: `Psalm 7:17 — "I will give thanks to the Lord because of his righteousness; I will sing the praises of the name of the Lord Most High."` },
      { text: `Gratitude and prayer belong together — start with thanks even before the request.`, scripture: `Philippians 4:6 — "Tell God what you need, and thank him for all he has done."` },
    ],
  },

  proud: {
    description: `Healthy pride in Scripture is the joy of work done faithfully for God's glory. The key question is always: who is the glory going to? "Let the one who boasts boast in the Lord." (1 Corinthians 1:31)`,
    feelTips: [
      { text: `This is a genuine achievement — let thanks go back to God for the ability, the opportunity, and the outcome.`, scripture: `1 Corinthians 1:31 — "Let the one who boasts boast in the Lord."` },
      { text: `This feeling is a signal that you worked wholeheartedly — that is faithfulness.`, scripture: `Colossians 3:23 — "Whatever you do, work at it with all your heart, as working for the Lord."` },
      { text: `You are tasting a glimpse of what it will feel like to hear those words at the end.`, scripture: `Matthew 25:21 — "Well done, my good and faithful servant. You have been faithful in handling this small amount."` },
    ],
    remedyTips: [
      { text: `Everything you used to achieve this — talent, time, health, opportunity — was given. Receive it in that light.`, scripture: `1 Corinthians 4:7 — "What do you have that you did not receive?"` },
      { text: `Pride becomes fruitful when it inspires others toward what they are capable of.`, scripture: `1 Thessalonians 5:11 — "Encourage each other and build each other up."` },
      { text: `Keep humility as a companion to achievement — the two are not enemies.`, scripture: `Proverbs 16:18 — "Pride goes before destruction, and haughtiness before a fall."` },
    ],
  },

  lonely: {
    description: `Loneliness is taken seriously in Scripture. "It is not good for the man to be alone" (Genesis 2:18) is among the earliest observations God makes about human need. Yet Scripture consistently addresses those who feel abandoned with the promise of God's own companionship.`,
    feelTips: [
      { text: `Even when human presence is absent, this is God's stated position. Bring your loneliness to Him before bringing it to anyone else.`, scripture: `Hebrews 13:5 — "I will never fail you. I will never abandon you."` },
      { text: `Loneliness is not God's design for you — it is a signal that something is needed. Let it prompt you toward community rather than withdrawal.`, scripture: `Psalm 68:6 — "God sets the lonely in families."` },
      { text: `You are never actually alone — practise awareness of the presence that is always already there.`, scripture: `Psalm 139:7 — "Where can I go from your Spirit? Where can I flee from your presence?"` },
    ],
    remedyTips: [
      { text: `The antidote to loneliness in Scripture is community — it requires initiative. Take the smaller step anyway.`, scripture: `Hebrews 10:25 — "Let us not neglect our meeting together, as some people do, but encourage one another."` },
      { text: `Identify one specific person you could reach out to today.`, scripture: `Ecclesiastes 4:9 — "Two people are better off than one, for they can help each other succeed."` },
      { text: `You are accompanied by the One who made you.`, scripture: `Deuteronomy 31:8 — "The Lord himself goes before you and will be with you; he will never leave you nor forsake you."` },
    ],
  },

  worried: {
    description: `Worry is addressed directly by Jesus in the Sermon on the Mount, not with dismissal but with redirection. Scripture consistently pairs the command not to worry with a concrete alternative — prayer, trust, and returning attention to God's provision.`,
    feelTips: [
      { text: `Worry is often carrying what you were never designed to carry — give it away actively, not passively.`, scripture: `1 Peter 5:7 — "Give all your worries and cares to God, for he cares about you."` },
      { text: `For every worry you can name, there is a corresponding prayer you could pray. Work through them one by one.`, scripture: `Philippians 4:6 — "Don't worry about anything; instead, pray about everything."` },
      { text: `Worry redirects attention to what might go wrong; faith redirects to what God has promised.`, scripture: `Matthew 6:33 — "Seek the Kingdom of God above all else, and live righteously, and he will give you everything you need."` },
    ],
    remedyTips: [
      { text: `Bring both what is in your control and what is not to God — but act only on what is yours.`, scripture: `Philippians 4:6 — "In every situation… present your requests to God."` },
      { text: `God's track record with creation is the evidence for what He will do with you.`, scripture: `Matthew 6:26 — "Look at the birds… your heavenly Father feeds them. And aren't you far more valuable to him than they are?"` },
      { text: `The reality of difficulty is acknowledged by Jesus — and then placed inside a larger reality.`, scripture: `John 16:33 — "Here on earth you will have many trials and sorrows. But take heart, because I have overcome the world."` },
    ],
  },

  hopeful: {
    description: `Hope in Scripture is the confident expectation of what God has promised. "This hope is a strong and trustworthy anchor for our souls." (Hebrews 6:19). It is oriented toward both the immediate future and the ultimate future, anchored in the resurrection.`,
    feelTips: [
      { text: `Hope anchors you in the present while orienting you forward. Let it do both.`, scripture: `Hebrews 6:19 — "This hope is a strong and trustworthy anchor for our souls."` },
      { text: `This hope is grounded in God's declared intention, not in how things currently appear.`, scripture: `Jeremiah 29:11 — "I know the plans I have for you… to give you a future and a hope."` },
      { text: `Ask for more of it — hope is a gift of the Spirit.`, scripture: `Romans 15:13 — "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope."` },
    ],
    remedyTips: [
      { text: `When hope wavers, return to what God has specifically promised — not what you want, but what He has said.`, scripture: `Hebrews 10:23 — "God can be trusted to keep his promise."` },
      { text: `Present difficulty and future hope are not contradictory. The harvest requires the planting season.`, scripture: `Psalm 126:5 — "Those who plant in tears will harvest with shouts of joy."` },
      { text: `Hope is not wishful thinking — it is a source of actual energy. Let it move you forward.`, scripture: `Isaiah 40:31 — "Those who trust in the Lord will find new strength."` },
    ],
  },

  inspired: {
    description: `Inspiration in a biblical frame is often the movement of the Holy Spirit — a sudden sense of possibility, a calling, a creative impulse from beyond yourself. "For God is working in you, giving you the desire and the power to do what pleases him." (Philippians 2:13)`,
    feelTips: [
      { text: `Ask whether this inspiration might be God-given — and what faithful response to it looks like.`, scripture: `Philippians 2:13 — "God is working in you, giving you the desire and the power to do what pleases him."` },
      { text: `Creative inspiration may be exactly the work God planned for you.`, scripture: `Ephesians 2:10 — "We are God's masterpiece. He has created us anew in Christ Jesus, so we can do the good things he planned for us long ago."` },
      { text: `Let inspiration lead you toward what is true and excellent.`, scripture: `Philippians 4:8 — "Fix your thoughts on what is true, and honorable, and right, and pure, and lovely, and admirable."` },
    ],
    remedyTips: [
      { text: `Act quickly when inspiration comes — it is fragile and needs a first response.`, scripture: `Proverbs 16:3 — "Commit your actions to the Lord, and your plans will succeed."` },
      { text: `Offer the work back to God before you begin — inspiration consecrated to Him becomes something larger.`, scripture: `Proverbs 16:3 — "Commit your actions to the Lord, and your plans will succeed."` },
      { text: `The gap between inspiration and completion is crossed in His strength, not yours alone.`, scripture: `Philippians 4:13 — "I can do everything through Christ, who gives me strength."` },
    ],
  },

  overwhelmed: {
    description: `"Come to me, all of you who are weary and carry heavy burdens, and I will give you rest." (Matthew 11:28). Jesus spoke these words to people who knew what it felt like to carry more than they could bear. Overwhelm is an invitation to bring the weight to the only One who can actually carry it.`,
    feelTips: [
      { text: `This is a specific invitation to the specific state you are in right now. Accept it.`, scripture: `Matthew 11:28 — "Come to me, all of you who are weary and carry heavy burdens, and I will give you rest."` },
      { text: `Deliberately put each burden down in prayer before picking any of them up again.`, scripture: `Psalm 55:22 — "Cast your cares on the Lord and he will sustain you."` },
      { text: `If what you are carrying is crushing you, ask whether you are carrying God's assignment or something else.`, scripture: `Matthew 11:30 — "My yoke is easy to bear, and the burden I give you is light."` },
    ],
    remedyTips: [
      { text: `Overwhelm demands a smaller task than the whole. What is the one next thing? Begin there.`, scripture: `Zechariah 4:10 — "Do not despise these small beginnings, for the Lord rejoices to see the work begin."` },
      { text: `Jesus gives explicit permission to narrow your frame to today.`, scripture: `Matthew 6:34 — "Don't worry about tomorrow, for tomorrow will bring its own worries. Today's trouble is enough for today."` },
      { text: `Look up before you look at the list again.`, scripture: `Psalm 121:1–2 — "I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord, the Maker of heaven and earth."` },
    ],
  },

  heartbroken: {
    description: `Heartbreak in Scripture is met with extraordinary tenderness. "The Lord is close to the brokenhearted; he rescues those whose spirits are crushed." (Psalm 34:18). The Bible does not rush past grief — it honours it as a sign of love, and promises comfort.`,
    feelTips: [
      { text: `God draws closest in this particular pain. You are not as alone in it as it feels.`, scripture: `Psalm 34:18 — "The Lord is close to the brokenhearted; he rescues those whose spirits are crushed."` },
      { text: `Healing is promised but it comes through tending — let God tend to what hurts. Don't rush past the wound.`, scripture: `Psalm 147:3 — "He heals the brokenhearted and bandages their wounds."` },
      { text: `There is a morning in God's economy for every night of weeping.`, scripture: `Psalm 30:5 — "Weeping may last through the night, but joy comes with the morning."` },
    ],
    remedyTips: [
      { text: `Jesus has been to the deepest place of human loss. He does not offer sympathy from a distance.`, scripture: `Isaiah 53:3 — "He was despised and rejected — a man of sorrows, acquainted with deepest grief."` },
      { text: `The comfort is promised to those who allow themselves to mourn — not to those who suppress it.`, scripture: `Matthew 5:4 — "God blesses those who mourn, for they will be comforted."` },
      { text: `This heartbreak is real and present — and also temporary in the frame of eternity.`, scripture: `Revelation 21:4 — "He will wipe every tear from their eyes, and there will be no more death or sorrow or crying or pain."` },
    ],
  },

  resentful: {
    description: `Resentment is what Scripture calls a "root of bitterness" — something that begins small and grows until it defiles everything. The biblical path through resentment is the radical forgiveness modelled by Christ: absorbing the cost without retaliating.`,
    feelTips: [
      { text: `Examine what is being accumulated — this list is what needs to be released, not because what happened wasn't real, but because carrying it is destroying you.`, scripture: `1 Corinthians 13:5 — "Love keeps no record of being wronged."` },
      { text: `Resentment doesn't stay contained. Examine what it is affecting in your life.`, scripture: `Hebrews 12:15 — "See to it that no bitter root grows up to cause trouble and defile many."` },
      { text: `Forgiveness is commanded, which means it is possible — it is not a feeling but a decision sustained in prayer.`, scripture: `Colossians 3:13 — "Forgive anyone who has offended you. Remember, the Lord forgave you."` },
    ],
    remedyTips: [
      { text: `The standard is high — but so is what was forgiven for you.`, scripture: `Ephesians 4:31–32 — "Get rid of all bitterness, rage, anger… forgiving one another, just as God through Christ has forgiven you."` },
      { text: `Unforgiveness closes the flow of grace in both directions.`, scripture: `Matthew 6:15 — "If you refuse to forgive others, your Father will not forgive your sins."` },
      { text: `Praying for the person you resent is the most reliable route through resentment.`, scripture: `Matthew 5:44 — "Love your enemies! Pray for those who persecute you!"` },
    ],
  },

  repulsed: {
    description: `Repulsion at genuine evil is a biblical response — the prophets expressed it vividly, and Romans 12:9 commands us to "hate what is wrong." But Scripture also cautions that disgust must not become contempt for the person who bears God's image. Hate the sin; hold the person.`,
    feelTips: [
      { text: `Let this revulsion clarify what you are called to refuse — it is a form of moral discernment.`, scripture: `Romans 12:9 — "Don't just pretend to love others. Really love them. Hate what is wrong. Hold tightly to what is good."` },
      { text: `Moral repulsion can fuel righteous action — bring it under the authority of the Spirit so it becomes constructive rather than merely reactive.`, scripture: `Amos 5:15 — "Hate evil and love what is good; turn your courts into true halls of justice."` },
      { text: `Even in righteous repulsion, the heart must remain oriented toward love and restoration, not merely rejection.`, scripture: `1 Corinthians 14:1 — "Let love be your highest goal."` },
    ],
    remedyTips: [
      { text: `Examine the line between what repels you and the image-bearer involved. Jesus ate with the people others refused — while calling them to something better.`, scripture: `Romans 3:23 — "Everyone has sinned; we all fall short of God's glorious standard."` },
      { text: `Repulsion is a signal, not a destination. Ask what love requires in response to what you cannot tolerate.`, scripture: `Romans 12:21 — "Do not be overcome by evil, but overcome evil with good."` },
      { text: `Check your own heart for any self-righteousness mixed into the reaction.`, scripture: `Psalm 139:23 — "Search me, O God, and know my heart; test me and know my anxious thoughts."` },
    ],
  },

  secure: {
    description: `True security in Scripture is not found in circumstances, relationships, or achievement — it is found in the unchanging character of God. "The Lord is my rock, my fortress, and my savior." (Psalm 18:2). Anything else security is built on is, as Jesus noted, sand.`,
    feelTips: [
      { text: `Notice what this security is built on — let it remind you of the foundation beneath even the most unsettled seasons.`, scripture: `Psalm 18:2 — "The Lord is my rock, my fortress, and my savior; my God is my rock, in whom I find protection."` },
      { text: `Contentment and security travel together. Paul wrote this from prison — this security is not circumstance-dependent.`, scripture: `Philippians 4:11 — "I have learned how to be content with whatever I have."` },
      { text: `This is the definition of security in Scripture — not the absence of threat, but the assurance of provision and accompaniment.`, scripture: `Psalm 23:1 — "The Lord is my shepherd; I have all that I need."` },
    ],
    remedyTips: [
      { text: `When security is shaken, return to what is unshakeable.`, scripture: `Hebrews 13:8 — "Jesus Christ is the same yesterday, today, and forever."` },
      { text: `Name what is threatening your security. Whatever it is, it cannot separate you from His love.`, scripture: `Romans 8:38–39 — "Nothing can ever separate us from God's love."` },
      { text: `What does building your life on solid rock look like in your current season?`, scripture: `Matthew 7:24 — "Anyone who listens to my teaching and follows it is wise, like a person who builds a house on solid rock."` },
    ],
  },

};
