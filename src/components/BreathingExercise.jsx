import React, { useState, useEffect, useRef, useCallback } from 'react';

// Phases: [{ label, duration (seconds), scale, instruction }]
const PHASES = [
  { label: 'Breathe in',  duration: 4, scale: 1.0,  instruction: 'Through your nose, slowly…' },
  { label: 'Hold',        duration: 4, scale: 1.0,  instruction: 'Let it settle…' },
  { label: 'Breathe out', duration: 6, scale: 0.48, instruction: 'Slowly, completely…' },
];

const TOTAL_CYCLE = PHASES.reduce((s, p) => s + p.duration, 0); // 14s

export default function BreathingExercise({ accentColor, targetCycles = 3, onDone }) {
  const [started, setStarted]   = useState(false);
  const [phase, setPhase]       = useState(0);
  const [tick, setTick]         = useState(0);       // counts up from 0 within current phase
  const [cycles, setCycles]     = useState(0);
  const [finished, setFinished] = useState(false);
  const intervalRef             = useRef(null);

  const advance = useCallback(() => {
    setTick(prev => {
      const dur = PHASES[phase].duration;
      if (prev + 1 >= dur) {
        // Move to next phase
        const nextPhase = (phase + 1) % PHASES.length;
        setPhase(nextPhase);
        if (nextPhase === 0) {
          setCycles(c => {
            const next = c + 1;
            if (next >= targetCycles) setFinished(true);
            return next;
          });
        }
        return 0;
      }
      return prev + 1;
    });
  }, [phase, targetCycles]);

  useEffect(() => {
    if (!started || finished) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(advance, 1000);
    return () => clearInterval(intervalRef.current);
  }, [advance, finished, started]);

  const currentPhase = PHASES[phase];
  const timeLeft     = currentPhase.duration - tick;
  const progress     = cycles / targetCycles;

  if (!started) {
    return (
      <div className="flex flex-col items-center py-2 select-none">
        <div
          className="w-28 h-28 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: accentColor + '20' }}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 0v4m0-4h4m-4 0H8"/>
          </svg>
        </div>
        <p className="text-sm font-semibold text-slate-700 mb-1">4 · 4 · 6 breathing</p>
        <p className="text-xs text-slate-400 mb-6 text-center leading-relaxed">
          Inhale 4s · hold 4s · exhale 6s<br />
          {targetCycles} cycles · about {Math.round(targetCycles * 14 / 60)} minute
        </p>
        <button
          onClick={() => setStarted(true)}
          className="w-full py-3 rounded-xl text-sm font-semibold text-white mb-3 transition-all active:scale-[0.98]"
          style={{ backgroundColor: accentColor }}
        >
          Begin
        </button>
        <button
          onClick={onDone}
          className="w-full py-2 rounded-xl text-xs text-slate-400 hover:text-slate-600 border border-slate-200 hover:border-slate-300 transition-all"
        >
          Skip breathing
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-2 select-none">

      {/* Breathing circle */}
      <div className="relative flex items-center justify-center mb-6" style={{ width: 160, height: 160 }}>
        {/* Outer glow ring */}
        <div
          className="absolute rounded-full transition-all"
          style={{
            width: 160,
            height: 160,
            backgroundColor: accentColor + '15',
            transform: `scale(${finished ? 0.9 : currentPhase.scale})`,
            transition: `transform ${currentPhase.duration}s ease-in-out, background-color 0.5s`,
          }}
        />
        {/* Mid ring */}
        <div
          className="absolute rounded-full transition-all"
          style={{
            width: 128,
            height: 128,
            backgroundColor: accentColor + '25',
            transform: `scale(${finished ? 0.9 : currentPhase.scale})`,
            transition: `transform ${currentPhase.duration}s ease-in-out`,
          }}
        />
        {/* Core circle */}
        <div
          className="absolute rounded-full flex items-center justify-center"
          style={{
            width: 96,
            height: 96,
            backgroundColor: accentColor + (finished ? '50' : '35'),
            transform: `scale(${finished ? 0.9 : currentPhase.scale})`,
            transition: `transform ${currentPhase.duration}s ease-in-out, background-color 0.5s`,
          }}
        >
          {!finished && (
            <span
              className="text-2xl font-bold tabular-nums"
              style={{ color: accentColor }}
            >
              {timeLeft}
            </span>
          )}
          {finished && (
            <svg className="w-7 h-7" viewBox="0 0 20 20" fill={accentColor}>
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/>
            </svg>
          )}
        </div>
      </div>

      {/* Phase label */}
      <p className="text-base font-semibold text-slate-700 mb-1 min-h-[24px]">
        {finished ? 'Well done' : currentPhase.label}
      </p>
      <p className="text-xs text-slate-400 mb-5 min-h-[18px]">
        {finished ? 'Your nervous system has settled.' : currentPhase.instruction}
      </p>

      {/* Cycle dots */}
      <div className="flex gap-2 mb-6">
        {Array.from({ length: targetCycles }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full transition-all duration-500"
            style={{ backgroundColor: i < cycles ? accentColor : accentColor + '30' }}
          />
        ))}
      </div>

      {/* Done button — available immediately but prominent after completion */}
      <button
        onClick={onDone}
        className="py-2.5 rounded-xl text-sm font-semibold transition-all text-white"
        style={{
          backgroundColor: accentColor,
          opacity: finished ? 1 : 0.6,
          width: '100%',
        }}
      >
        {finished ? 'Continue' : 'Skip breathing'}
      </button>
    </div>
  );
}
