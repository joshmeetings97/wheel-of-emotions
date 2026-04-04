import React, { useState, useCallback } from 'react';
import EmotionWheel from './components/EmotionWheel';
import EmotionDetail from './components/EmotionDetail';
import Journal from './components/Journal';

export default function App() {
  const [selectedId, setSelectedId]   = useState(null);
  const [selection, setSelection]     = useState(null);
  const [pulseId, setPulseId]         = useState(null);
  const [journalOpen, setJournalOpen] = useState(false);
  const [panelOpen, setPanelOpen]     = useState(false);

  const handleWheelSelect = useCallback((sel) => {
    setSelection(sel);
    setPanelOpen(true);
    setSelectedId(
      sel.type === 'blend'
        ? sel.data.id
        : `${sel.emotion.id}-${sel.level}`
    );
    setPulseId(null);
  }, []);

  const handleDetailClose = useCallback(() => {
    setPanelOpen(false);
    setSelectedId(null);
    setSelection(null);
  }, []);

  const handleEmotionDetected = useCallback((segmentId) => {
    setPulseId(segmentId);
    setTimeout(() => setPulseId(null), 6000);
  }, []);

  const handleRelatedClick = useCallback((newSel) => {
    setSelection(newSel);
    setSelectedId(
      newSel.type === 'blend'
        ? newSel.data.id
        : `${newSel.emotion.id}-${newSel.level}`
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex flex-col">

      {/* ── Header ── */}
      <header className="flex items-center justify-between px-6 py-3.5 bg-white border-b border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#BDD23F] to-[#8FA918] flex items-center justify-center text-sm font-bold text-white shadow">
            E
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-800 leading-none">EmoWheel</h1>
            <p className="text-[10px] text-slate-400 leading-none mt-0.5">Plutchik's Wheel of Emotions</p>
          </div>
        </div>
        <p className="text-xs text-slate-400 hidden sm:block">
          Click any segment to explore · Journal to identify your emotion
        </p>
      </header>

      {/* ── Main layout ── */}
      <main className="flex-1 flex flex-col lg:flex-row items-start overflow-hidden">

        {/* Wheel area */}
        <div className={`flex-1 flex items-center justify-center p-4 md:p-8 transition-all duration-300 ${panelOpen ? 'lg:pr-4' : ''}`}>
          <EmotionWheel
            onSelect={handleWheelSelect}
            selectedId={selectedId}
            pulseId={pulseId}
          />
        </div>

        {/* Detail panel */}
        <div
          className={`
            fixed inset-y-0 right-0 z-20 w-full sm:w-[400px]
            lg:relative lg:w-[400px] lg:shrink-0
            transition-transform duration-300 ease-out
            ${panelOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-full'}
          `}
        >
          {/* Mobile backdrop */}
          {panelOpen && (
            <div
              className="fixed inset-0 bg-black/20 z-[-1] lg:hidden"
              onClick={handleDetailClose}
            />
          )}
          <div className="h-full flex flex-col bg-white border-l border-slate-200 shadow-xl lg:shadow-none">
            {panelOpen && selection && (
              <div className="flex-1 overflow-y-auto p-6">
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

      {/* Mobile hint */}
      {!panelOpen && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 pointer-events-none z-10 lg:hidden">
          <div className="px-4 py-2 rounded-full text-xs text-slate-500 bg-white/80 border border-slate-200 shadow-sm backdrop-blur-sm whitespace-nowrap">
            Tap a segment to explore
          </div>
        </div>
      )}

      <Journal
        isOpen={journalOpen}
        onToggle={() => setJournalOpen(o => !o)}
        onEmotionDetected={handleEmotionDetected}
      />
    </div>
  );
}
