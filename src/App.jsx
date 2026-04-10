import React, { useState, useCallback, useEffect } from 'react';
import EmotionWheel from './components/EmotionWheel';
import EmotionDetail from './components/EmotionDetail';
import Journal from './components/Journal';
import { CORE_EMOTIONS, BLEND_EMOTIONS } from './data/emotions';
import { useLocalStorage } from './hooks/useLocalStorage';

// Convert a segment ID (e.g. "joy-moderate", "joy-outer-0", "love") into a selection object
function resolveSegment(segmentId) {
  if (!segmentId) return null;
  const blend = BLEND_EMOTIONS.find(b => b.id === segmentId);
  if (blend) return { type: 'blend', data: blend };

  // Outer ring format: "emotionId-outer-N"
  const outerMatch = segmentId.match(/^(.+)-outer-(\d)$/);
  if (outerMatch) {
    const emotion = CORE_EMOTIONS.find(e => e.id === outerMatch[1]);
    if (!emotion) return null;
    const idx = parseInt(outerMatch[2], 10);
    const outerName = emotion.outer?.[idx];
    const intensity = emotion.intensities.find(i => i.level === 'mild') || emotion.intensities[2];
    return { type: 'emotion', emotion, intensity, level: 'mild', outerName };
  }

  // Standard format: "emotionId-level"
  const lastDash = segmentId.lastIndexOf('-');
  if (lastDash === -1) return null;
  const emotionId = segmentId.slice(0, lastDash);
  const level = segmentId.slice(lastDash + 1);
  const emotion = CORE_EMOTIONS.find(e => e.id === emotionId);
  if (!emotion) return null;
  const intensity = emotion.intensities.find(i => i.level === level) || emotion.intensities[1];
  return { type: 'emotion', emotion, intensity, level: intensity.level };
}

function HowToUse({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/30 backdrop-blur-sm"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md p-6 m-4 max-h-[85vh] overflow-y-auto animate-[fadeIn_0.2s_ease-out]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-800">How to use this wheel</h3>
          <button onClick={onClose} className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 flex items-center justify-center text-slate-400 hover:text-slate-600 text-sm transition-colors">✕</button>
        </div>

        {/* Biblical mode callout */}
        <div className="mb-4 rounded-2xl bg-amber-50 border border-amber-200 px-4 py-3 flex gap-3 items-start">
          <div className="shrink-0 mt-0.5 w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-amber-700">
              <rect x="10.5" y="2" width="3" height="20" rx="1"/>
              <rect x="4" y="8.5" width="16" height="3" rx="1"/>
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-amber-800 mb-0.5">Biblical mode available</p>
            <p className="text-xs text-amber-700 leading-relaxed">Tap the cross icon in the header to replace all content with Scripture-based descriptions, NLT verses, and faith-rooted reflection questions.</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600">
          <div>
            <h4 className="font-semibold text-slate-700 mb-1.5">The four rings</h4>
            <ul className="space-y-1.5 text-xs leading-relaxed">
              <li className="flex gap-2"><span className="shrink-0 font-bold text-slate-400">①</span><span><strong>Inner ring</strong> — the most intense form of each emotion (e.g. Ecstasy, Terror, Rage)</span></li>
              <li className="flex gap-2"><span className="shrink-0 font-bold text-slate-400">②</span><span><strong>Second ring</strong> — the core emotion name (Joy, Fear, Anger…)</span></li>
              <li className="flex gap-2"><span className="shrink-0 font-bold text-slate-400">③</span><span><strong>Third ring</strong> — the mild form (Serenity, Apprehension, Annoyance…)</span></li>
              <li className="flex gap-2"><span className="shrink-0 font-bold text-slate-400">④</span><span><strong>Outer ring</strong> — nuanced sub-emotions within each family (e.g. Heartbroken, Resentful, Overwhelmed)</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 mb-1.5">Blend zones</h4>
            <p className="text-xs leading-relaxed">
              The narrow wedges between core emotions are <strong>blends</strong> — compound feelings made from two adjacent emotions. Love (Joy + Trust), Awe (Fear + Trust), Remorse (Sadness + Disgust), and five others. They only span the middle rings because they don't have the same intensity range as pure emotions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 mb-1.5">Detail panel</h4>
            <p className="text-xs leading-relaxed">
              Tap or click any segment to open a detail panel with a description, tips for sitting with the emotion, ways to work through it, and related emotions to explore. Tap <strong>Process this emotion</strong> to begin a guided reflection with journaling questions and optional AI insight.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 mb-1.5">Emotion Journal</h4>
            <p className="text-xs leading-relaxed">
              Tap <strong>Journal</strong> in the bottom-right corner and write freely about how you're feeling. The wheel will identify the emotion(s) present and highlight them. Tap any detected emotion chip to open its detail panel. The AI toggle sends your text to Claude Haiku for more nuanced detection — keyword mode runs entirely in your browser.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 mb-1.5">Zoom</h4>
            <p className="text-xs leading-relaxed">
              Use the <strong>− / % / +</strong> controls in the header to zoom the wheel between 50% and 150%. Tap the percentage to reset to 100%.
            </p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-all"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

const ZOOM_STEP = 0.1;
const ZOOM_MIN  = 0.5;
const ZOOM_MAX  = 1.5;

export default function App() {
  const [selectedId, setSelectedId]   = useState(null);
  const [selection, setSelection]     = useState(null);
  const [pulseId, setPulseId]         = useState(null);
  const [journalOpen, setJournalOpen] = useState(false);
  const [panelOpen, setPanelOpen]     = useState(false);
  const [howToOpen, setHowToOpen]     = useState(false);
  const [zoom, setZoom]               = useState(1.0);
  const [christianMode, setChristianMode] = useLocalStorage('emowheel-christian', false);

  const zoomIn  = useCallback(() => setZoom(z => Math.min(ZOOM_MAX, parseFloat((z + ZOOM_STEP).toFixed(1)))), []);
  const zoomOut = useCallback(() => setZoom(z => Math.max(ZOOM_MIN, parseFloat((z - ZOOM_STEP).toFixed(1)))), []);
  const zoomReset = useCallback(() => setZoom(1.0), []);

  const openSelection = useCallback((sel, segId) => {
    setSelection(sel);
    setSelectedId(segId);
    setPanelOpen(true);
    setPulseId(null);
  }, []);

  const handleWheelSelect = useCallback((sel) => {
    const segId = sel.type === 'blend' ? sel.data.id : (sel.segmentId || `${sel.emotion.id}-${sel.level}`);
    openSelection(sel, segId);
    setJournalOpen(false);
  }, [openSelection]);

  const handleDetailClose = useCallback(() => {
    setPanelOpen(false);
    setSelectedId(null);
    setSelection(null);
  }, []);

  const handleEmotionDetected = useCallback((segmentId) => {
    setPulseId(segmentId);
    setTimeout(() => setPulseId(null), 6000);
  }, []);

  // Called when user taps an emotion chip in the journal result
  const handleEmotionOpen = useCallback((segmentId) => {
    const sel = resolveSegment(segmentId);
    if (!sel) return;
    openSelection(sel, segmentId);
    setPulseId(segmentId);
    setTimeout(() => setPulseId(null), 6000);
    setJournalOpen(false);
  }, [openSelection]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (howToOpen) { setHowToOpen(false); return; }
      if (panelOpen) { handleDetailClose(); return; }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [howToOpen, panelOpen, handleDetailClose]);

  const handleRelatedClick = useCallback((newSel) => {
    const segId = newSel.type === 'blend' ? newSel.data.id : `${newSel.emotion.id}-${newSel.level}`;
    openSelection(newSel, segId);
  }, [openSelection]);

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex flex-col">
      {howToOpen && <HowToUse onClose={() => setHowToOpen(false)} />}

      {/* ── Header ── */}
      <header className="flex items-center justify-between px-6 py-3.5 bg-white border-b border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#BDD23F] to-[#8FA918] flex items-center justify-center text-sm font-bold text-white shadow">
            E
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-800 leading-none">Emotion Wheel</h1>
            <p className="text-[10px] text-slate-400 leading-none mt-0.5">Plutchik's Wheel of Emotions</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-slate-400 hidden sm:block">
            Click any segment to explore · Journal to identify your emotion
          </p>
          {/* Zoom controls */}
          <div className="flex items-center gap-0.5 bg-slate-100 rounded-xl px-1 py-1">
            <button
              onClick={zoomOut}
              disabled={zoom <= ZOOM_MIN}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-200 active:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-base font-bold leading-none"
              aria-label="Zoom out"
              title="Zoom out"
            >−</button>
            <button
              onClick={zoomReset}
              className="min-w-[3rem] h-9 px-1 rounded-lg flex items-center justify-center text-xs font-semibold text-slate-500 hover:bg-slate-200 active:bg-slate-300 transition-colors tabular-nums"
              aria-label="Reset zoom"
              title="Reset zoom"
            >{Math.round(zoom * 100)}%</button>
            <button
              onClick={zoomIn}
              disabled={zoom >= ZOOM_MAX}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-200 active:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-base font-bold leading-none"
              aria-label="Zoom in"
              title="Zoom in"
            >+</button>
          </div>
          <button
            onClick={() => setChristianMode(v => !v)}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
            style={{
              backgroundColor: christianMode ? '#fef3c7' : '#f1f5f9',
              color: christianMode ? '#b45309' : '#64748b',
            }}
            aria-label={christianMode ? 'Disable Biblical mode' : 'Enable Biblical mode'}
            title={christianMode ? 'Biblical mode on' : 'Biblical mode'}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <rect x="10.5" y="2" width="3" height="20" rx="1"/>
              <rect x="4" y="8.5" width="16" height="3" rx="1"/>
            </svg>
          </button>
          <button
            onClick={() => setHowToOpen(true)}
            className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors"
            aria-label="How to use"
            title="How to use"
          >?</button>
        </div>
      </header>

      {/* ── Main layout ── */}
      <main className="flex-1 flex flex-col lg:flex-row items-start overflow-hidden" style={{ zoom }}>

        {/* Wheel area */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <EmotionWheel
            onSelect={handleWheelSelect}
            selectedId={selectedId}
            pulseId={pulseId}
          />
        </div>

        {/* Detail panel
            Mobile:  fixed bottom sheet (translate-y)
            Desktop: fixed right side panel (translate-x)
        */}
        <div
          className={`
            fixed z-20
            bottom-0 inset-x-0
            lg:inset-x-auto lg:inset-y-0 lg:right-0 lg:w-[400px]
            transition-transform duration-300 ease-out
            ${panelOpen
              ? 'translate-y-0 lg:translate-x-0'
              : 'translate-y-full lg:translate-y-0 lg:translate-x-full'}
          `}
        >
          {/* Backdrop */}
          {panelOpen && (
            <div
              className="fixed inset-0 bg-black/20 z-[-1]"
              onClick={handleDetailClose}
            />
          )}
          <div className="flex flex-col bg-white
            rounded-t-3xl lg:rounded-none
            border-t border-x lg:border-t-0 lg:border-x-0 lg:border-l
            border-slate-200 shadow-2xl lg:shadow-none
            max-h-[80vh] lg:max-h-none lg:h-full"
          >
            {/* Drag handle — mobile only */}
            <div className="flex justify-center pt-3 pb-1 shrink-0 lg:hidden">
              <div className="w-9 h-1 rounded-full bg-slate-200" />
            </div>

            {panelOpen && selection && (
              <div className="flex-1 overflow-y-auto p-6" style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}>
                <EmotionDetail
                  selection={selection}
                  onClose={handleDetailClose}
                  onRelatedClick={handleRelatedClick}
                  christianMode={christianMode}
                />
              </div>
            )}
          </div>
        </div>
      </main>


      <Journal
        isOpen={journalOpen}
        onToggle={() => setJournalOpen(o => !o)}
        onEmotionDetected={handleEmotionDetected}
        onEmotionOpen={handleEmotionOpen}
        detailOpen={panelOpen}
        christianMode={christianMode}
      />
    </div>
  );
}
