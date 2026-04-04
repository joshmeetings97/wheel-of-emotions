import React, { useState, useRef } from 'react';
import { detectEmotion, CORE_EMOTIONS, BLEND_EMOTIONS, EMOTION_NAME_MAP } from '../data/emotions';
import { analyzeWithClaude } from '../api/claude';
import { useLocalStorage } from '../hooks/useLocalStorage';

const INTENSITY_COLORS = {
  intense:  '#ef4444',
  moderate: '#3b82f6',
  mild:     '#22c55e',
};

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

export default function Journal({ isOpen, onToggle, onEmotionDetected }) {
  const [text, setText]       = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult]   = useState(null);
  const [error, setError]     = useState(null);
  const [entries, setEntries] = useLocalStorage('emowheel-journal', []);
  const textareaRef           = useRef(null);

  const hasApiKey = Boolean(
    import.meta.env.VITE_ANTHROPIC_API_KEY &&
    import.meta.env.VITE_ANTHROPIC_API_KEY !== 'your_key_here'
  );

  const handleSubmit = async () => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setLoading(true); setError(null); setResult(null);

    try {
      let detected;
      if (hasApiKey) {
        try { detected = { ...await analyzeWithClaude(trimmed), segmentId: null }; }
        catch { detected = detectEmotion(trimmed); }
      } else {
        detected = detectEmotion(trimmed);
      }

      // Resolve segmentId if missing (from Claude response)
      if (!detected.segmentId) {
        detected.segmentId = findSegmentId(detected.emotion, detected.intensity);
      }

      setResult(detected);

      const color = INTENSITY_COLORS[detected.intensity] || '#3b82f6';
      setEntries(prev => [{
        id:        Date.now(),
        text:      trimmed.length > 60 ? trimmed.slice(0, 57) + '…' : trimmed,
        emotion:   detected.emotion,
        intensity: detected.intensity,
        segmentId: detected.segmentId,
        color,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }, ...prev].slice(0, 5));

      if (detected.segmentId) onEmotionDetected(detected.segmentId);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-sm bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-slate-700"
        aria-label={isOpen ? 'Close journal' : 'Open emotion journal'}
      >
        <span className="text-base">{isOpen ? '✕' : '📓'}</span>
        <span>{isOpen ? 'Close' : 'Journal'}</span>
      </button>

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ maxHeight: '58vh' }}
      >
        <div className="bg-white rounded-t-3xl border-t border-x border-slate-200 shadow-2xl flex flex-col overflow-hidden" style={{ maxHeight: '58vh' }}>
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-9 h-1 rounded-full bg-slate-200" />
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-6 pt-2">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-base font-semibold text-slate-800">Emotion Journal</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  {hasApiKey ? 'AI-powered · Claude analysis' : 'Keyword analysis · add API key for AI'}
                </p>
              </div>
            </div>

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
            <p className="text-[10px] text-slate-300 text-right mb-3">⌘↵ to submit</p>

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
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-semibold text-slate-800 text-base">{result.emotion}</span>
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border"
                    style={{
                      background: INTENSITY_COLORS[result.intensity] + '15',
                      color: INTENSITY_COLORS[result.intensity],
                      borderColor: INTENSITY_COLORS[result.intensity] + '40',
                    }}
                  >
                    {result.intensity}
                  </span>
                  {!hasApiKey && <span className="text-[9px] text-slate-300 ml-auto">keyword</span>}
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{result.insight}</p>
              </div>
            )}

            {/* Session log */}
            {entries.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Session log</h3>
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

function findSegmentId(emotionName, intensity) {
  const lower = emotionName.toLowerCase();
  if (EMOTION_NAME_MAP[lower]) return EMOTION_NAME_MAP[lower];
  const core = CORE_EMOTIONS.find(e => e.name.toLowerCase() === lower);
  if (core) return `${core.id}-${intensity || 'moderate'}`;
  const blend = BLEND_EMOTIONS.find(e => e.name.toLowerCase() === lower);
  if (blend) return blend.id;
  return null;
}
