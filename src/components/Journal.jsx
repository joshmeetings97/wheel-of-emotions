import React, { useState, useRef, useCallback } from 'react';
import { detectEmotion, CORE_EMOTIONS, BLEND_EMOTIONS, EMOTION_NAME_MAP } from '../data/emotions';
import { analyzeWithClaude } from '../api/claude';
import { useLocalStorage } from '../hooks/useLocalStorage';

const INTENSITY_COLORS = {
  intense:  '#ef4444',
  moderate: '#3b82f6',
  mild:     '#22c55e',
};

// Strip common PII patterns before sending to API.
// This is a best-effort measure — it removes the most obvious identifiers
// but is not a substitute for users exercising discretion.
function scrubPII(text) {
  return text
    .replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g, '[email]')
    .replace(/\b(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\b/g, '[phone]')
    .replace(/https?:\/\/\S+/gi, '[url]')
    .replace(/\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/g, '[date]');
}

function EmotionChip({ entry }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs">
      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
      <span className="font-medium text-slate-700">{entry.emotion}</span>
      <span className="text-slate-400">{entry.intensity}</span>
      <span className="ml-auto text-slate-300">{entry.time}</span>
    </div>
  );
}

// Collapsible privacy notice shown while AI mode is active
function AINotice({ onReviewDetails }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 overflow-hidden">
      {/* Summary row — always visible */}
      <div className="flex items-center gap-2 px-3 py-2.5">
        <span className="shrink-0">⚠</span>
        <span className="flex-1 leading-snug">
          AI mode — text sent to Anthropic (PII stripped first)
        </span>
        <button
          onClick={() => setExpanded(v => !v)}
          className="shrink-0 flex items-center gap-0.5 font-medium underline underline-offset-2 hover:text-amber-900 transition-colors"
          aria-expanded={expanded}
        >
          {expanded ? 'Less' : 'Details'}
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20" fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
          </svg>
        </button>
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div className="border-t border-amber-200 px-3 py-3 space-y-2 bg-amber-50/60">
          <Detail icon="✓" color="text-green-700">
            <strong>Encrypted in transit</strong> — sent over HTTPS, protected from interception.
          </Detail>
          <Detail icon="✓" color="text-green-700">
            <strong>Not used to train AI</strong> — Anthropic's API policy excludes API calls from model training.
          </Detail>
          <Detail icon="✓" color="text-green-700">
            <strong>PII stripped before sending</strong> — emails, phone numbers, URLs and dates are removed from your text automatically.
          </Detail>
          <Detail icon="✓" color="text-green-700">
            <strong>Text not stored here</strong> — only the detected emotion label is saved in your session log, never your words.
          </Detail>
          <Detail icon="↺" color="text-amber-700">
            <strong>Processed by Anthropic</strong> — your text is still read by Anthropic's servers. Toggle AI off for fully private analysis.
          </Detail>
          <div className="pt-1 flex items-center justify-between">
            <a
              href="https://www.anthropic.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-amber-700 underline underline-offset-2 hover:text-amber-900"
            >
              Anthropic Privacy Policy →
            </a>
            <button
              onClick={onReviewDetails}
              className="text-[10px] text-amber-700 underline underline-offset-2 hover:text-amber-900"
            >
              Re-read full consent
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Detail({ icon, color, children }) {
  return (
    <div className="flex gap-2 leading-relaxed">
      <span className={`shrink-0 mt-0.5 font-bold ${color}`}>{icon}</span>
      <span>{children}</span>
    </div>
  );
}

// One-time consent modal shown before AI mode is first activated
function ConsentModal({ onAccept, onDecline }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md p-6 animate-[fadeIn_0.2s_ease-out]">
        <h3 className="text-base font-bold text-slate-800 mb-1">Enable AI analysis?</h3>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed">
          Before your journal text is sent, here's exactly what happens:
        </p>

        <ul className="space-y-3 mb-5">
          <li className="flex gap-2.5 text-xs text-slate-600 leading-relaxed">
            <span className="mt-0.5 shrink-0 text-green-600">✓</span>
            <span><strong>Encrypted in transit.</strong> Text is sent over HTTPS — protected from interception.</span>
          </li>
          <li className="flex gap-2.5 text-xs text-slate-600 leading-relaxed">
            <span className="mt-0.5 shrink-0 text-green-600">✓</span>
            <span><strong>Not used to train AI.</strong> Anthropic's API policy explicitly excludes API data from model training, unlike the claude.ai consumer product.</span>
          </li>
          <li className="flex gap-2.5 text-xs text-slate-600 leading-relaxed">
            <span className="mt-0.5 shrink-0 text-green-600">✓</span>
            <span><strong>PII is stripped first.</strong> Emails, phone numbers, URLs, and dates are automatically removed from your text before it is sent.</span>
          </li>
          <li className="flex gap-2.5 text-xs text-slate-600 leading-relaxed">
            <span className="mt-0.5 shrink-0 text-green-600">✓</span>
            <span><strong>Not stored here.</strong> Only the detected emotion label is saved locally — never the text itself.</span>
          </li>
          <li className="flex gap-2.5 text-xs text-slate-600 leading-relaxed">
            <span className="mt-0.5 shrink-0 text-amber-500">↺</span>
            <span><strong>Processed by Anthropic.</strong> Your text is still read by Anthropic's servers to classify emotion. If you'd rather nothing leave your device, use Keyword mode instead.</span>
          </li>
        </ul>

        <a
          href="https://www.anthropic.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-slate-400 underline underline-offset-2 block mb-4 hover:text-slate-600"
        >
          Anthropic Privacy Policy →
        </a>

        <div className="flex gap-2">
          <button
            onClick={onAccept}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-all"
          >
            I understand, enable AI
          </button>
          <button
            onClick={onDecline}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-800 transition-all"
          >
            Keep keyword mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Journal({ isOpen, onToggle, onEmotionDetected, onEmotionOpen, detailOpen }) {
  const [text, setText]               = useState('');
  const [loading, setLoading]         = useState(false);
  const [result, setResult]           = useState(null);
  const [whyOpen, setWhyOpen]         = useState(false);
  const [error, setError]             = useState(null);
  const [useAI, setUseAI]             = useLocalStorage('emowheel-use-ai', false);
  const [consentGiven, setConsentGiven] = useLocalStorage('emowheel-ai-consent', false);
  const [showConsent, setShowConsent] = useState(false);
  const [entries, setEntries]         = useLocalStorage('emowheel-journal', []);
  const textareaRef                   = useRef(null);

  const hasApiKey = Boolean(
    import.meta.env.VITE_ANTHROPIC_API_KEY &&
    import.meta.env.VITE_ANTHROPIC_API_KEY !== 'your_key_here'
  );

  const aiActive = useAI && hasApiKey && consentGiven;

  const handleAIToggle = () => {
    if (!useAI) {
      // Turning AI on — show consent if not already given
      if (!consentGiven) {
        setShowConsent(true);
      } else {
        setUseAI(true);
      }
    } else {
      setUseAI(false);
    }
  };

  const handleConsentAccept = () => {
    setConsentGiven(true);
    setUseAI(true);
    setShowConsent(false);
  };

  const handleConsentDecline = () => {
    setShowConsent(false);
  };

  const handleSubmit = async () => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setLoading(true); setError(null); setResult(null); setWhyOpen(false);

    try {
      let detected;
      let fellBack = false;
      if (aiActive) {
        try {
          const sanitized = scrubPII(trimmed);
          detected = await analyzeWithClaude(sanitized);
        } catch {
          detected = detectEmotion(trimmed);
          fellBack = true;
        }
      } else {
        detected = detectEmotion(trimmed);
      }

      // Ensure emotions array with resolved segmentIds
      const emotions = (detected.emotions || []).map(e => ({
        ...e,
        segmentId: e.segmentId || findSegmentId(e.emotion, e.intensity),
      }));

      const finalResult = {
        emotions,
        insight: detected.insight,
        matchedTerms: detected.matchedTerms || [],
        fellBack,
        isAI: aiActive && !fellBack,
      };
      setResult(finalResult);

      // Add primary emotion to session log (label only, never raw text)
      const primary = emotions[0];
      if (primary) {
        const color = INTENSITY_COLORS[primary.intensity] || '#3b82f6';
        setEntries(prev => [{
          id:        Date.now(),
          emotion:   emotions.map(e => e.emotion).join(' · '),
          intensity: primary.intensity,
          segmentId: primary.segmentId,
          color,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }, ...prev].slice(0, 5));

        if (primary.segmentId) onEmotionDetected(primary.segmentId);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showConsent && (
        <ConsentModal onAccept={handleConsentAccept} onDecline={handleConsentDecline} />
      )}

      {/* Toggle button — hidden while detail panel is open to avoid overlap */}
      <button
        onClick={onToggle}
        className={`fixed right-5 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-sm bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-slate-700 ${detailOpen ? 'hidden' : ''}`}
        style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
        aria-label={isOpen ? 'Close journal' : 'Open emotion journal'}
      >
        <span className="text-base">{isOpen ? '✕' : '📓'}</span>
        <span>{isOpen ? 'Close' : 'Journal'}</span>
      </button>

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ maxHeight: '62vh' }}
      >
        <div className="bg-white rounded-t-3xl border-t border-x border-slate-200 shadow-2xl flex flex-col overflow-hidden" style={{ maxHeight: '62vh' }}>
          <div className="flex justify-center pt-3 pb-1 shrink-0">
            <div className="w-9 h-1 rounded-full bg-slate-200" />
          </div>

          <div className="flex-1 overflow-y-auto px-4 pt-2" style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}>

            {/* Header */}
            <div className="flex items-start justify-between mb-3 gap-3">
              <div>
                <h2 className="text-base font-semibold text-slate-800">Emotion Journal</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  {aiActive
                    ? 'Claude Haiku · PII stripped before sending'
                    : 'Keyword analysis · fully private'}
                </p>
              </div>
              {/* AI toggle — outer button provides ≥44px touch target on mobile */}
              <button
                role="switch"
                aria-checked={useAI && consentGiven}
                onClick={handleAIToggle}
                className="flex items-center gap-2 shrink-0 p-2 -m-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <span className="text-xs text-slate-500">AI</span>
                <span className={`relative inline-flex w-9 h-5 rounded-full transition-colors duration-200 ${aiActive ? 'bg-slate-700' : 'bg-slate-200'}`}>
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${aiActive ? 'translate-x-4' : 'translate-x-0'}`} />
                </span>
              </button>
            </div>

            {/* No key notice */}
            {useAI && !hasApiKey && (
              <div className="mb-3 flex gap-2 p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <span className="shrink-0 mt-0.5">ℹ</span>
                <span>
                  No API key found in this build. Add <code className="font-mono bg-slate-200 px-1 rounded">VITE_ANTHROPIC_API_KEY</code> to your Netlify environment variables and redeploy.
                </span>
              </div>
            )}

            {/* Active AI notice — collapsible */}
            {aiActive && <AINotice onReviewDetails={() => setShowConsent(true)} />}

            {/* AI upsell — shown when AI is off */}
            {!aiActive && (
              <div className="mb-3 rounded-xl border border-indigo-100 bg-indigo-50 px-3 py-2.5">
                {hasApiKey ? (
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-indigo-800 leading-snug">Get better results with AI</p>
                      <p className="text-[10px] text-indigo-500 leading-snug mt-0.5">Keyword detection is basic — AI understands context and nuance.</p>
                    </div>
                    <button
                      onClick={handleAIToggle}
                      className="shrink-0 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs font-semibold transition-colors"
                    >
                      Turn on AI
                    </button>
                  </div>
                ) : (
                  <div className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 shrink-0 mt-0.5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-[10px] text-indigo-600 leading-relaxed">
                      Keyword detection is limited. For much better results, add an Anthropic API key to enable AI analysis.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Textarea */}
            <textarea
              ref={textareaRef}
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSubmit(); }}
              placeholder="How are you feeling right now? Write freely…"
              rows={3}
              className="w-full resize-none rounded-2xl px-4 py-3 text-sm text-slate-700 placeholder-slate-300 border border-slate-200 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition-all leading-relaxed mb-1"
            />
            <p className="text-[10px] text-slate-300 text-right mb-3">
              <span className="hidden sm:inline">⌘↵ to submit</span>
              <span className="sm:hidden">Tap Detect Emotion to submit</span>
            </p>

            {/* Buttons */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={handleSubmit}
                disabled={!text.trim() || loading}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                      <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"/>
                    </svg>
                    Analysing…
                  </span>
                ) : 'Detect Emotion'}
              </button>
              {text && (
                <button
                  onClick={() => { setText(''); setResult(null); setError(null); textareaRef.current?.focus(); }}
                  className="px-4 py-2.5 rounded-xl text-sm text-slate-500 hover:text-slate-700 border border-slate-200 hover:border-slate-300 transition-all"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Error */}
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Result */}
            {result && !error && (
              <div className="mb-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 animate-[fadeIn_0.2s_ease-out]">
                <div className="flex flex-wrap gap-2 mb-3">
                  {result.emotions.filter(e => e.segmentId).map((e, i) => (
                    <button
                      key={i}
                      onClick={() => onEmotionOpen(e.segmentId)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border bg-white hover:bg-slate-50 active:scale-95 transition-all text-left"
                      style={{ borderColor: INTENSITY_COLORS[e.intensity] + '50' }}
                      title="Tap to explore on wheel"
                    >
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: INTENSITY_COLORS[e.intensity] }} />
                      <span className="font-semibold text-slate-800 text-sm">{e.emotion}</span>
                      <span className="text-[10px] uppercase tracking-wide font-medium" style={{ color: INTENSITY_COLORS[e.intensity] }}>
                        {e.intensity}
                      </span>
                      <span className="text-slate-300 text-[9px] ml-0.5">↗</span>
                    </button>
                  ))}
                </div>
                {/* Collapsible "Why these emotions?" */}
                <div className="mt-1 border-t border-slate-100 pt-2">
                  <button
                    onClick={() => setWhyOpen(v => !v)}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors w-full text-left"
                  >
                    <svg
                      className={`w-3 h-3 shrink-0 transition-transform duration-200 ${whyOpen ? 'rotate-90' : ''}`}
                      viewBox="0 0 20 20" fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.17 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">Why {result.emotions.length > 1 ? 'these emotions' : 'this emotion'}?</span>
                    <span className="ml-auto text-[9px] text-slate-300">
                      {result.fellBack ? 'keyword fallback' : result.isAI ? 'claude haiku' : 'keyword'}
                    </span>
                  </button>

                  {whyOpen && (
                    <div className="mt-3 space-y-3 animate-[fadeIn_0.15s_ease-out]">
                      {result.emotions.map((e, i) => (
                        <div key={i} className="pl-3 border-l-2" style={{ borderColor: INTENSITY_COLORS[e.intensity] + '60' }}>
                          <p className="text-xs font-semibold text-slate-700 mb-1">{e.emotion}</p>
                          {/* AI mode: per-emotion reason from Claude */}
                          {e.reason && (
                            <p className="text-xs text-slate-500 leading-relaxed mb-1.5">{e.reason}</p>
                          )}
                          {/* Keyword mode: matched phrases */}
                          {!result.isAI && e.matchedTerms && e.matchedTerms.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {e.matchedTerms.map((term, j) => (
                                <span key={j} className="px-1.5 py-0.5 rounded-full bg-slate-100 text-[10px] text-slate-500 border border-slate-200">
                                  "{term}"
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Session log */}
            {entries.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Session log</h3>
                  <button
                    onClick={() => setEntries([])}
                    className="text-[10px] text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    Clear
                  </button>
                </div>
                <div className="space-y-1.5">
                  {entries.map(e => <EmotionChip key={e.id} entry={e} />)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black/10 backdrop-blur-[2px]" onClick={onToggle} />
      )}
    </>
  );
}

// Common emotions the AI might name that aren't on Plutchik's wheel,
// mapped to the closest wheel equivalent.
const EMOTION_FALLBACK_MAP = {
  relief:        'joy-mild',       // tension released → serenity
  excitement:    'anticipation-intense', // high arousal forward-looking
  contentment:   'joy-mild',
  happiness:     'joy-moderate',
  gladness:      'joy-moderate',
  elation:       'joy-intense',
  enthusiasm:    'anticipation-moderate',
  nervousness:   'fear-mild',
  anxiety:       'fear-moderate',
  stress:        'fear-moderate',
  overwhelm:     'fear-moderate',
  embarrassment: 'fear-mild',
  shame:         'remorse',
  guilt:         'remorse',
  jealousy:      'anger-moderate',
  envy:          'anger-mild',
  frustration:   'anger-mild',
  loneliness:    'sadness-moderate',
  nostalgia:     'sadness-mild',
  melancholy:    'sadness-mild',
  disappointment:'disapproval',
  regret:        'remorse',
  pride:         'joy-moderate',
  gratitude:     'joy-moderate',
  compassion:    'love',
  empathy:       'love',
  curiosity:     'anticipation-mild',
  confusion:     'surprise-mild',
  shock:         'surprise-intense',
  wonder:        'awe',
  inspiration:   'joy-moderate',
  calm:          'joy-mild',
  peace:         'joy-mild',
  bittersweet:   'remorse',
  vulnerability: 'fear-mild',
};

function findSegmentId(emotionName, intensity) {
  const lower = emotionName.toLowerCase();
  // Direct match in the name map (covers all wheel emotion names)
  if (EMOTION_NAME_MAP[lower]) return EMOTION_NAME_MAP[lower];
  // Match core or blend by name
  const core = CORE_EMOTIONS.find(e => e.name.toLowerCase() === lower);
  if (core) return `${core.id}-${intensity || 'moderate'}`;
  const blend = BLEND_EMOTIONS.find(e => e.name.toLowerCase() === lower);
  if (blend) return blend.id;
  // Fallback map for emotions the AI names that aren't on the wheel
  if (EMOTION_FALLBACK_MAP[lower]) return EMOTION_FALLBACK_MAP[lower];
  return null;
}
