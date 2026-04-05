import React, { useState } from 'react';

const STEPS = [
  {
    count: 5,
    sense: 'See',
    instruction: 'Look around slowly and name 5 things you can see right now.',
    hint: 'A colour, an object, a shadow, a texture…',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    count: 4,
    sense: 'Touch',
    instruction: 'Notice 4 things you can physically feel right now.',
    hint: 'Your clothes, the surface beneath you, the temperature of the air…',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 00-2-2 2 2 0 00-2 2v2M14 7a2 2 0 00-2-2 2 2 0 00-2 2v2M10 9a2 2 0 00-2-2 2 2 0 00-2 2v6a6 6 0 0012 0v-5a2 2 0 00-2-2 2 2 0 00-2 2"/>
      </svg>
    ),
  },
  {
    count: 3,
    sense: 'Hear',
    instruction: 'Listen carefully for 3 things you can hear right now.',
    hint: 'Near sounds, distant sounds, subtle background sounds…',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 9a3 3 0 115.12 2.12C13.42 11.83 13 12.9 13 14v1M12 18h.01"/>
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" strokeOpacity="0.3"/>
        <path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13"/>
      </svg>
    ),
  },
  {
    count: 2,
    sense: 'Smell',
    instruction: 'Notice 2 things you can smell — or could smell if you moved.',
    hint: 'The air, fabric, food nearby, a familiar scent…',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a4 4 0 004-4c0-1.6-.8-3-2-3.9V8a2 2 0 10-4 0v6.1C8.8 15 8 16.4 8 18a4 4 0 004 4z"/>
        <path d="M9 3c0 1.1.9 2 2 2s2-.9 2-2M7 6c0 1.1.9 2 2 2" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    count: 1,
    sense: 'Taste',
    instruction: 'Notice 1 thing you can taste — or bring a taste to mind.',
    hint: 'Something lingering, or the neutral taste of the air…',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" strokeOpacity="0.3"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3"/>
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3"/>
      </svg>
    ),
  },
];

export default function GroundingExercise({ accentColor, onDone }) {
  const [stepIdx, setStepIdx]   = useState(0);
  const [tapped, setTapped]     = useState(new Set());
  const [finished, setFinished] = useState(false);

  const step    = STEPS[stepIdx];
  const allDone = tapped.size >= step.count;

  const handleDot = (i) => {
    setTapped(prev => {
      if (prev.has(i)) return prev;
      return new Set([...prev, i]);
    });
  };

  const advance = () => {
    if (stepIdx + 1 >= STEPS.length) {
      setFinished(true);
    } else {
      setStepIdx(s => s + 1);
      setTapped(new Set());
    }
  };

  if (finished) {
    return (
      <div className="flex flex-col items-center py-4 select-none">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
          style={{ backgroundColor: accentColor + '20' }}
        >
          <svg className="w-9 h-9" viewBox="0 0 20 20" fill={accentColor}>
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/>
          </svg>
        </div>
        <p className="text-base font-semibold text-slate-700 mb-1">Grounded</p>
        <p className="text-xs text-slate-400 mb-6 text-center leading-relaxed max-w-[240px]">
          You just brought your attention fully into the present moment. That's the practice.
        </p>
        <button
          onClick={onDone}
          className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all active:scale-[0.98]"
          style={{ backgroundColor: accentColor }}
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-2 select-none">

      {/* Step progress */}
      <div className="flex gap-1.5 mb-6">
        {STEPS.map((_, i) => (
          <div
            key={i}
            className="h-1 rounded-full transition-all duration-500"
            style={{
              width: i === stepIdx ? 24 : 8,
              backgroundColor: i <= stepIdx ? accentColor : accentColor + '30',
            }}
          />
        ))}
      </div>

      {/* Sense icon + number */}
      <div
        className="w-24 h-24 rounded-full flex flex-col items-center justify-center mb-4 transition-all duration-300"
        style={{ backgroundColor: accentColor + '15' }}
      >
        <div className="w-7 h-7 mb-0.5" style={{ color: accentColor }}>
          {step.icon}
        </div>
        <span className="text-2xl font-bold tabular-nums" style={{ color: accentColor }}>
          {step.count}
        </span>
      </div>

      <p className="text-base font-semibold text-slate-800 mb-1 text-center">{step.sense}</p>
      <p className="text-sm text-slate-600 leading-relaxed mb-1 text-center px-4">{step.instruction}</p>
      <p className="text-xs text-slate-400 mb-6 text-center px-6">{step.hint}</p>

      {/* Tappable dots */}
      <div className="flex gap-3 mb-2">
        {Array.from({ length: step.count }).map((_, i) => {
          const done = tapped.has(i);
          return (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className="transition-all duration-200 active:scale-90"
              style={{ width: 40, height: 40 }}
              aria-label={`Item ${i + 1}`}
            >
              <div
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200"
                style={{
                  borderColor:     done ? accentColor : accentColor + '40',
                  backgroundColor: done ? accentColor : 'transparent',
                  transform:       done ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {done && (
                  <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/>
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-[10px] text-slate-400 mb-6">
        {allDone ? 'All found — ready to continue' : `Tap a dot for each thing you ${step.sense.toLowerCase()}`}
      </p>

      <button
        onClick={advance}
        disabled={!allDone}
        className="w-full py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed text-white"
        style={{ backgroundColor: accentColor }}
      >
        {stepIdx + 1 >= STEPS.length ? 'Finish' : 'Next sense →'}
      </button>

      <button
        onClick={onDone}
        className="w-full mt-2 py-2 rounded-xl text-xs text-slate-400 hover:text-slate-600 border border-slate-200 transition-all"
      >
        Skip grounding
      </button>
    </div>
  );
}
