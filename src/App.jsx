import React, { useState, useCallback } from 'react';
import EmotionWheel from './components/EmotionWheel';
import EmotionDetail from './components/EmotionDetail';
import Journal from './components/Journal';
import { CORE_EMOTIONS, BLEND_EMOTIONS } from './data/emotions';

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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md p-6 max-h-[85vh] overflow-y-auto animate-[fadeIn_0.2s_ease-out]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-800">How to use this wheel</h3>
          <button onClick={onClose} className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 text-sm transition-colors">✕</button>
        </div>

        <div className="space-y-4 text-sm text-slate-600">
          <div>
            <h4 className="font-semibold text-slate-700 mb-1.5">The four rings</h4>
            <ul className="space-y-1.5 text-xs leading-relaxed">
              <li className="flex gap-2"><span className="shrink-0 font-bold text-slate-400">①</span><span><strong>Inner ring</strong> — the most intense form of each emotion (e.g. Ecstasy, Terror, Rage)</span></li>
              <li className="flex gap-2"><span className="shrink-0 font-bold text-slate-400">②</span><span><strong>Second ring</strong> — the core emotion name (Joy, Fear, Anger…)</span></li>
              <li className="flex gap-2"><span className="shrink-0 font-bold text-slate-400">③</span><span><strong>Third ring</strong> — the mild form (Serenity, Apprehension, Annoyance…)</span></li>
              <li className="flex gap-2"><span className="shrink-0 font-bold text-slate-400">④</span><span><strong>Outer ring</strong> — nuanced sub-emotions within each family</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 mb-1.5">Blend zones</h4>
            <p className="text-xs leading-relaxed">
              The narrow wedges between core emotions are <strong>blends</strong> — compound feelings made from two adjacent emotions. Remorse (Sadness + Disgust), Love (Joy + Trust), Awe (Trust + Fear), and five others. They only span the middle rings because they don't have the same intensity range as pure emotions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 mb-1.5">Exploring the wheel</h4>
            <p className="text-xs leading-relaxed">
              Tap or click any segment to open a detail panel with a description, tips for sitting with the emotion, ways to work through it, and related emotions to explore.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 mb-1.5">Emotion Journal</h4>
            <p className="text-xs leading-relaxed">
              Tap <strong>Journal</strong> in the bottom-right corner and write freely about how you're feeling. The wheel will identify the emotion(s) present and highlight them. Tap any detected emotion chip to open its detail panel. The AI toggle sends your text to Claude Haiku for more nuanced detection — keyword mode runs entirely in your browser.
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

export default function App() {
  const [selectedId, setSelectedId]   = useState(null);
  const [selection, setSelection]     = useState(null);
  const [pulseId, setPulseId]         = useState(null);
  const [journalOpen, setJournalOpen] = useState(false);
  const [panelOpen, setPanelOpen]     = useState(false);
  const [howToOpen, setHowToOpen]     = useState(false);

  const openSelection = useCallback((sel, segId) => {
    setSelection(sel);
    setSelectedId(segId);
    setPanelOpen(true);
    setPulseId(null);
  }, []);

  const handleWheelSelect = useCallback((sel) => {
    const segId = sel.type === 'blend' ? sel.data.id : `${sel.emotion.id}-${sel.level}`;
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
        <div className="flex items-center gap-3">
          <p className="text-xs text-slate-400 hidden sm:block">
            Click any segment to explore · Journal to identify your emotion
          </p>
          <button
            onClick={() => setHowToOpen(true)}
            className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors"
            aria-label="How to use"
            title="How to use"
          >?</button>
        </div>
      </header>

      {/* ── Main layout ── */}
      <main className="flex-1 flex flex-col lg:flex-row items-start overflow-hidden">

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
      />
    </div>
  );
}
