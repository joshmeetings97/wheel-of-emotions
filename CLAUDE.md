# Wheel of Emotions — Project Notes

## Tech Stack
- React 18 + Vite 5 + Tailwind CSS 3
- No required API key (Claude Haiku optional for AI features)
- `useLocalStorage` hook for persisted settings

## Key Files
| File | Purpose |
|---|---|
| `src/data/emotions.js` | CORE_EMOTIONS, BLEND_EMOTIONS, KEYWORD_MAP |
| `src/data/processQuestions.js` | Per-emotion guided reflection questions (secular) |
| `src/data/processQuestions_christian.js` | Per-emotion guided reflection questions (biblical) |
| `src/data/christianContent.js` | Biblical overrides for descriptions/tips |
| `src/api/claude.js` | `analyzeWithClaude`, `reflectWithClaude` — both accept `christianMode` param |
| `src/components/EmotionWheel.jsx` | SVG wheel rendering |
| `src/components/EmotionDetail.jsx` | Right-panel detail view |
| `src/components/ProcessEmotion.jsx` | Guided emotion-processing flow |
| `src/components/Journal.jsx` | Emotion journal with AI/keyword detection |
| `src/App.jsx` | Root layout, zoom state, christianMode state |

## Features Implemented

### Emotion Wheel
- Plutchik 8-emotion wheel with 3 intensity rings + outer sub-emotion ring
- Blend zones between adjacent core emotions
- Tap/click any segment → detail panel

### Detail Panel
- Description, Feel It tips, Remedy It tips, Related emotions
- "Process this emotion" button → guided reflection

### Emotion Journal
- Free-text entry with keyword and optional AI (Claude Haiku) emotion detection
- Detected emotions highlighted on wheel + clickable chips
- Session log of past entries

### Process Emotion Flow
- Per-emotion question sets (text, scale, multiselect)
- Optional AI reflection via `reflectWithClaude`
- AI returns insight + action items
- Each action card is individually collapsible (default: collapsed)

### Zoom Controls
- +/−/% buttons in header
- Range: 50%–150%, step 10%
- Applied as CSS `zoom` on `<main>` element

### Biblical Mode
- Cross toggle in header (persisted in localStorage)
- Overrides descriptions, feelTips, remedyTips with NLT-scripture content
- Tips rendered as `{ text, scripture }` objects — scripture shown in amber callout block
- AI prompts (analyze + reflect) gain pastoral/NLT-scripture instructions
- Separate question set: `CHRISTIAN_PROCESS_QUESTIONS`

#### Biblical Coverage (complete — no fallbacks needed)
`christianContent.js` has entries for every emotion:
- 8 core emotions: joy, trust, fear, surprise, sadness, disgust, anger, anticipation
- 8 blends: love, submission, awe, disapproval, remorse, contempt, aggressiveness, optimism
- All 40 outer emotions: cheerful, playful, peaceful, grateful, proud, faithful, assured, comfortable, valued, secure, nervous, hesitant, timid, overwhelmed, puzzled, confused, unsettled, startled, stunned, gloomy, lonely, forlorn, disappointed, heartbroken, displeased, offended, withdrawn, reluctant, repulsed, cross, peeved, frustrated, impatient, resentful, eager, hopeful, curious, inspired, excited + peaceful/grateful/proud/lonely/worried/hopeful/inspired (joy/sadness/anticipation extras)

`processQuestions_christian.js` has entries for:
- 8 core emotions, 8 blends, and outer emotions: grateful, worried, lonely, proud, hopeful, inspired, frustrated, excited, secure, overwhelmed, stunned, heartbroken, repulsed, resentful
- `default` fallback covers all remaining emotions

## Data Conventions

### Emotion IDs
- Core emotions: `joy`, `trust`, `fear`, `surprise`, `sadness`, `disgust`, `anger`, `anticipation`
- Blends: `love`, `submission`, `awe`, `disapproval`, `remorse`, `contempt`, `aggressiveness`, `optimism`
- Outer emotions: looked up by `outerName.toLowerCase()` (e.g. `cheerful`, `excited`)

### Process Question Field Names
- Scale questions: use `scaleMin` / `scaleMax` (NOT `label_low` / `label_high`)
- UI renders 1–5 scale, don't include "1 = X, 5 = Y" in question text

### Christian Content Tip Format
```js
feelTips: [
  { text: 'Main tip text...', scripture: 'Psalm 1:1 — "Blessed is the one..."' },
]
```
Plain strings also work (secular tips pass through unchanged).

### EMOTION_NAME_MAP
Auto-built from `CORE_EMOTIONS[n].outer` arrays in `emotions.js`. Adding an outer emotion to the array is sufficient — no manual map additions needed.

## Outer Emotions Added
All 7 new outer emotions added across Anticipation, Trust, Sadness, Surprise, Disgust, Anger:
- **Anticipation**: Excited (5th outer)
- **Trust**: Secure
- **Sadness**: Heartbroken
- **Surprise**: Stunned
- **Disgust**: Repulsed
- **Anger**: Resentful
- **Fear**: Overwhelmed

Each has: description, feelTips, remedyTips in `emotions.js`; keyword entries in KEYWORD_MAP; question set in `processQuestions.js`; and biblical content in `christianContent.js`.

## Running Locally
```bash
# dev server (uses nvm node)
~/.nvm/versions/node/v20.20.1/bin/node node_modules/.bin/vite

# production build
arch -arm64 ~/.nvm/versions/node/v20.20.1/bin/node node_modules/.bin/vite build
```
Note: `npm` shebang is broken in the sandbox — invoke node directly as above.
