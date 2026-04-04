import React, { useState, useCallback } from 'react';
import EmotionWheel from './components/EmotionWheel';
import EmotionDetail from './components/EmotionDetail';
import Journal from './components/Journal';

export default function App() {
  const [selectedId, setSelectedId] = useState(null);   // e.g. "joy-moderate" or "love"
  const [selection, setSelection]   = useState(null);   // full data object for detail panel
  const [pulseId, setPulseId]       = useState(null);   // segment to pulse from journal
  const [journalOpen, setJournalOpen] = useState(false);
  const [panelOpen, setPanelOpen]     = useState(false);

  const handleWheelSelect = useCallback((selectionData) => {
    setSelection(selectionData);
    setPanelOpen(true);
    // Set the selectedId for highlight
    if (selectionData.type === 'blend') {
      setSelectedId(selectionData.data.id);
    } else {
      setSelectedId(`${selectionData.emotion.id}-${selectionData.level}`);
    }
    setPulseId(null); // stop pulse when manually selecting
  }, []);

  const handleDetailClose = useCallback(() => {
    setPanelOpen(false);
    setSelectedId(null);
    setSelection(null);
  }, []);

  const handleEmotionDetected = useCallback((segmentId) => {
    setPulseId(segmentId);
    // Auto-clear pulse after 6 seconds
    setTimeout(() => setPulseId(null), 6000);
  }, []);

  const handleRelatedClick = useCallback((newSelection) => {
    setSelection(newSelection);
    if (newSelection.type === 'blend') {
      setSelectedId(newSelection.data.id);
    } else {
      setSelectedId(`${newSelection.emotion.id}-${newSelection.level}`);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, #0f1f3d 0%, #060d18 60%)' }}>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-sm font-bold text-black shadow-lg">
            E
          </div>
          <div>
            <h1 className="text-base font-bold text-white leading-none">EmoWheel</h1>
            <p className="text-[10px] text-white/35 leading-none mt-0.5">Plutchik's Wheel of Emotions</p>
          </div>
        </div>
        <p className="text-xs text-white/25 hidden sm:block">
          Click any segment to explore · Journal to detect your emotion
        </p>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col lg:flex-row items-start gap-0 overflow-hidden relative">

        {/* Wheel container */}
        <div className={`flex-1 flex items-center justify-center p-4 lg:p-8 transition-all duration-300 ${panelOpen ? 'lg:w-3/5' : 'w-full'}`}>
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          </div>

          <EmotionWheel
            onSelect={handleWheelSelect}
            selectedId={selectedId}
            pulseId={pulseId}
          />
        </div>

        {/* Detail panel */}
        <div
          className={`
            fixed inset-y-0 right-0 z-20 w-full sm:w-96 lg:relative lg:w-96
            transition-all duration-300 ease-out
            ${panelOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-full lg:w-0 lg:opacity-0'}
          `}
          style={{
            top: panelOpen ? '0' : undefined,
          }}
        >
          {/* Mobile backdrop */}
          {panelOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-[-1] lg:hidden"
              onClick={handleDetailClose}
            />
          )}

          <div
            className="h-full overflow-hidden flex flex-col"
            style={{
              background: 'linear-gradient(180deg, #0c1829 0%, #080f1e 100%)',
              borderLeft: '1px solid rgba(255,255,255,0.07)',
            }}
          >
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

      {/* Instruction hint (shown when nothing selected) */}
      {!panelOpen && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 pointer-events-none z-10 lg:hidden">
          <div className="px-4 py-2 rounded-full text-xs text-white/30 border border-white/10 bg-black/30 backdrop-blur-sm whitespace-nowrap">
            Tap a segment to explore emotions
          </div>
        </div>
      )}

      {/* Journal */}
      <Journal
        isOpen={journalOpen}
        onToggle={() => setJournalOpen(o => !o)}
        onEmotionDetected={handleEmotionDetected}
      />
    </div>
  );
}
