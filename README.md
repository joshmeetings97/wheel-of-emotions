# EmoWheel

An interactive Plutchik's Wheel of Emotions built with React + Vite + Tailwind CSS.

## Features

- **Interactive SVG wheel** — all 8 core Plutchik emotions with 3 intensity rings and 8 blend zones
- **Emotion detail panel** — descriptions, "Feel It" tips, and "Remedy It" tips for every segment
- **Emotion journal** — write how you feel and detect your primary emotion
  - Works offline via keyword analysis (free, no setup)
  - Optionally upgrades to Claude AI analysis with an API key
- **Session log** — last 5 journal entries stored in localStorage
- Fully responsive · dark theme · smooth animations

---

## Local development

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/wheel-of-emotions.git
cd wheel-of-emotions

# 2. Install dependencies
npm install

# 3. (Optional) Add your Anthropic API key for AI emotion analysis
cp .env.example .env
# Edit .env and replace "your_key_here" with your key from console.anthropic.com
# Without this, the app uses free keyword-based detection instead.

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Deploy to Netlify

### Option A — Netlify UI (recommended)

1. Push this repo to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
3. Connect your GitHub repo
4. Build settings are auto-detected from `netlify.toml` (build command: `npm run build`, publish dir: `dist`)
5. **(Optional)** Add your API key: **Site settings → Environment variables → Add variable**
   - Key: `VITE_ANTHROPIC_API_KEY`
   - Value: your Anthropic API key
6. Click **Deploy site**

### Option B — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init        # link to a new or existing site
netlify deploy --prod
```

---

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `VITE_ANTHROPIC_API_KEY` | No | Enables Claude AI emotion analysis. Without it, keyword detection runs automatically. |

> **Security note:** `VITE_` variables are embedded in the client bundle and visible to anyone who inspects the page source. This is fine for personal/demo apps. For a production app, proxy the API call through a Netlify Function to keep the key server-side.

---

## Tech stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- SVG-based interactive wheel (no canvas libraries)
- [Claude API](https://docs.anthropic.com/) (optional)
