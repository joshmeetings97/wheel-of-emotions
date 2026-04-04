import React, { useState, useRef } from 'react';
import { detectEmotion, CORE_EMOTIONS, BLEND_EMOTIONS, EMOTION_NAME_MAP } from '../data/emotions';
import { analyzeWithClaude } from '../api/claude';
import { useLocalStorage } from '../hooks/useLocalStorage';

const INTENSITY_COLORS = {
  intense:  '#F87171',
  moderate: '#60A5FA',
  mild:     '#4ADE80',
};

function EmotionChip({ entry }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs">
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: entry.color }}
      />
      <span className="font-medium text-white/80">{entry.emotion}</span>
      <span className="text-white/35">{entry.intensity}</span>
      <span className="ml-auto text-white/25">{entry.time}</span>
    </div>
  );
}

export default function Journal({ isOpen, onToggle, onEmotionDetected }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [entries, setEntries] = useLocalStorage('emowheel-journal', []);
  const textareaRef = useRef(null);

  const hasApiKey = Boolean(
    import.meta.env.VITE_ANTHROPIC_API_KEY &&
    import.meta.env.VITE_ANTHROPIC_API_KEY !== 'your_key_here'
  );

  const handleSubmit = async () => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      let detected;

      if (hasApiKey) {
        try {
          const apiResult = await analyzeWithClaude(trimmed);
          detected = {
            ...apiResult,
            segmentId: findSegmentId(apiResult.emotion, apiResult.intensity),
          };
        } catch (apiErr) {
          // Fall back to keyword detection silently
          detected = detectEmotion(trimmed);
        }
      } else {
        detected = detectEmotion(trimmed);
      }

      setResult(detected);

      const color = INTENSITY_COLORS[detected.intensity] || '#60A5FA';
      const entry = {
        id:        Date.now(),
        text:      trimmed.length > 60 ? trimmed.slice(0, 57) + '…' : trimmed,
        emotion:   detected.emotion,
        intensity: detected.intensity,
        segmentId: detected.segmentId,
        color,
        time:      new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setEntries(prev => [entry, ...prev].slice(0, 5));

      if (detected.segmentId) {
        onEmotionDetected(detected.segmentId);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
  };

  const handleClear = () => {
    setText('');
    setResult(null);
    setError(null);
    textareaRef.current?.focus();
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-sm shadow-2xl transition-all hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #1e3a5f, #0f2040)',
          border: '1px solid rgba(255,255,255,0.15)',
          color: 'white',
          boxShadow: '0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
        }}
        aria-label={isOpen ? 'Close journal' : 'Open emotion journal'}
      >
        <span className="text-base">{isOpen ? '✕' : '📓'}</span>
        <span>{isOpen ? 'Close' : 'Journal'}</span>
      </button>

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ maxHeight: '60vh' }}
      >
        <div
          className="relative rounded-t-3xl overflow-hidden flex flex-col"
          style={{
            background: 'linear-gradient(180deg, #0f1929 0%, #0a1220 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderBottom: 'none',
            boxShadow: '0 -8px 40px rgba(0,0,0,0.6)',
            maxHeight: '60vh',
          }}
        >
          {/* Drag handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 rounded-full bg-white/15" />
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-6 pt-2">
            {/* Title row */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-base font-semibold text-white/90">Emotion Journal</h2>
                <p className="text-xs text-white/35 mt-0.5">
                  {hasApiKey ? 'AI-powered analysis active' : 'Keyword analysis active — add API key for AI'}
                </p>
              </div>
            </div>

            {/* Text input */}
            <div className="relative mb-3">
              <textarea
                ref={textareaRef}
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="How are you feeling right now? Write freely…"
                rows={3}
                className="w-full resize-none rounded-2xl px-4 py-3 text-sm text-white/85 placeholder-white/25 outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  lineHeight: '1.6',
                }}
                onFocus={e => e.target.style.border = '1px solid rgba(255,255,255,0.25)'}
                onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
              />
              <p className="text-[10px] text-white/20 mt-1 text-right">⌘↵ or ⌃↵ to submit</p>
            </div>

            {/* Submit row */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={handleSubmit}
                disabled={!text.trim() || loading}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8, #1e40af)',
                  color: 'white',
                  boxShadow: '0 2px 12px rgba(29,78,216,0.4)',
                }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                      <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                    </svg>
                    Analysing…
                  </span>
                ) : 'Detect Emotion'}
              </button>
              {text && (
                <button
                  onClick={handleClear}
                  className="px-4 py-2.5 rounded-xl text-sm text-white/50 hover:text-white/80 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Result */}
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-900/30 border border-red-700/40 text-sm text-red-300">
                {error}
              </div>
            )}

            {result && !error && (
              <div
                className="mb-4 p-4 rounded-2xl border text-sm animate-[fadeIn_0.25s_ease-out]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-semibold text-white text-base">{result.emotion}</span>
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      background: `${INTENSITY_COLORS[result.intensity]}20`,
                      color: INTENSITY_COLORS[result.intensity],
                      border: `1px solid ${INTENSITY_COLORS[result.intensity]}40`,
                    }}
                  >
                    {result.intensity}
                  </span>
                  {!hasApiKey && (
                    <span className="text-[9px] text-white/25 ml-auto">keyword detection</span>
                  )}
                </div>
                <p className="text-white/60 text-xs leading-relaxed">{result.insight}</p>
              </div>
            )}

            {/* Session log */}
            {entries.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">
                  Session log
                </h3>
                <div className="space-y-1.5">
                  {entries.map(entry => (
                    <EmotionChip key={entry.id} entry={entry} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm"
          onClick={onToggle}
        />
      )}
    </>
  );
}

// Helper to map emotion name + intensity to a segment ID
function findSegmentId(emotionName, intensity) {
  const lower = emotionName.toLowerCase();
  if (EMOTION_NAME_MAP[lower]) return EMOTION_NAME_MAP[lower];
  const core = CORE_EMOTIONS.find(e => e.name.toLowerCase() === lower);
  if (core) return `${core.id}-${intensity || 'moderate'}`;
  const blend = BLEND_EMOTIONS.find(e => e.name.toLowerCase() === lower);
  if (blend) return blend.id;
  return null;
}
