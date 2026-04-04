import React, { useState, useEffect, useRef } from 'react';
import { PROCESS_QUESTIONS } from '../data/processQuestions';
import { reflectWithClaude } from '../api/claude';
import { useLocalStorage } from '../hooks/useLocalStorage';
import BreathingExercise from './BreathingExercise';

function scrubPII(text) {
  return text
    .replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g, '[email]')
    .replace(/\b(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\b/g, '[phone]')
    .replace(/https?:\/\/\S+/gi, '[url]')
    .replace(/\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/g, '[date]');
}

const DEFAULT_SETTINGS = {
  breathing:    true,   // show breathing steps
  somatic:      true,   // show body awareness questions
  instructions: true,   // show therapist context notes
  aiReflection: true,   // show AI reflection at the end
  depth:        'full', // 'quick' | 'full' — filters optional: true questions
};

function isAnswered(q, value) {
  if (!value) return false;
  return value.trim().length > 0;
}

// ── Scale input — 1 to 5 tap buttons ─────────────────────────────────────
function ScaleInput({ q, value, onChange, accentColor }) {
  return (
    <div>
      <div className="flex gap-2 mb-2.5">
        {[1, 2, 3, 4, 5].map(n => {
          const selected = value === String(n);
          return (
            <button
              key={n}
              onClick={() => onChange(String(n))}
              className="flex-1 py-4 rounded-xl text-sm font-bold border-2 transition-all active:scale-95"
              style={{
                borderColor:     selected ? accentColor : '#e2e8f0',
                backgroundColor: selected ? accentColor : 'white',
                color:           selected ? 'white' : '#94a3b8',
              }}
            >
              {n}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between px-0.5">
        <span className="text-[10px] text-slate-400 leading-tight max-w-[42%]">{q.scaleMin}</span>
        <span className="text-[10px] text-slate-400 leading-tight max-w-[42%] text-right">{q.scaleMax}</span>
      </div>
    </div>
  );
}

// ── Settings panel ────────────────────────────────────────────────────────
function SettingsPanel({ settings, onChange, onClose }) {
  const toggle = key => onChange({ ...settings, [key]: !settings[key] });

  const Row = ({ label, desc, settingKey }) => (
    <div className="flex items-start justify-between gap-3 py-3 border-b border-slate-100 last:border-0">
      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-700">{label}</p>
        <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">{desc}</p>
      </div>
      <button
        role="switch"
        aria-checked={settings[settingKey]}
        onClick={() => toggle(settingKey)}
        className="shrink-0 mt-0.5"
      >
        <span className={`relative inline-flex w-9 h-5 rounded-full transition-colors duration-200 ${settings[settingKey] ? 'bg-slate-700' : 'bg-slate-200'}`}>
          <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${settings[settingKey] ? 'translate-x-4' : 'translate-x-0'}`} />
        </span>
      </button>
    </div>
  );

  return (
    <div className="absolute inset-0 bg-white z-10 flex flex-col animate-[fadeIn_0.15s_ease-out] rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-slate-800">Processing Settings</h3>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 text-xs transition-colors"
        >✕</button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3">Therapy tools</p>

        <Row
          settingKey="breathing"
          label="Guided breathing"
          desc="Animated breathing exercises before activating emotions like anger and fear. Helps regulate before reflecting."
        />
        <Row
          settingKey="somatic"
          label="Body check-ins"
          desc="Questions about where you feel the emotion physically. Effective for grounding, but skip if this isn't your style."
        />
        <Row
          settingKey="instructions"
          label="Therapist notes"
          desc="Brief context prompts before heavy questions, explaining why a particular question is being asked."
        />
        <Row
          settingKey="aiReflection"
          label="AI reflection"
          desc="Claude reads your answers and offers a personal insight at the end. Requires AI to be enabled in the Journal."
        />

        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mt-5 mb-3">Depth</p>

        <div className="flex gap-2">
          {['quick', 'full'].map(mode => (
            <button
              key={mode}
              onClick={() => onChange({ ...settings, depth: mode })}
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all"
              style={{
                borderColor:     settings.depth === mode ? '#334155' : '#e2e8f0',
                backgroundColor: settings.depth === mode ? '#334155' : 'white',
                color:           settings.depth === mode ? 'white' : '#64748b',
              }}
            >
              {mode === 'quick' ? 'Quick' : 'Full'}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
          {settings.depth === 'quick'
            ? 'Core questions only — fewer steps, less time.'
            : 'All questions — deeper exploration, more time.'}
        </p>
      </div>
    </div>
  );
}

export default function ProcessEmotion({ emotionId, emotionName, accentColor, onBack }) {
  const [settings, setSettings] = useLocalStorage('emowheel-process-settings', DEFAULT_SETTINGS);
  const [showSettings, setShowSettings] = useState(false);

  // Build filtered question list from settings
  const rawQuestions = PROCESS_QUESTIONS[emotionId] || PROCESS_QUESTIONS.default;
  const questions = rawQuestions.filter(q => {
    if (q.type === 'breathe' && !settings.breathing) return false;
    if (q.somatic && !settings.somatic) return false;
    if (q.optional && settings.depth === 'quick') return false;
    return true;
  });

  const [step, setStep]             = useState(0);
  const [answers, setAnswers]       = useState(() => Array(questions.length).fill(''));
  const [reflection, setReflection] = useState(null);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState(null);
  const textareaRef                 = useRef(null);

  const [useAI]        = useLocalStorage('emowheel-use-ai', false);
  const [consentGiven] = useLocalStorage('emowheel-ai-consent', false);
  const hasApiKey      = Boolean(
    import.meta.env.VITE_ANTHROPIC_API_KEY &&
    import.meta.env.VITE_ANTHROPIC_API_KEY !== 'your_key_here'
  );
  const aiActive = useAI && hasApiKey && consentGiven;

  // Re-sync answers array length if settings change question count
  useEffect(() => {
    setAnswers(Array(questions.length).fill(''));
    setStep(0);
    setReflection(null);
    setError(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions.length]);

  const isComplete = step === questions.length;
  const progress   = step / questions.length;
  const q          = questions[step];

  // Focus textarea when a text question appears
  useEffect(() => {
    if (!isComplete && q?.type === 'text') {
      setTimeout(() => textareaRef.current?.focus(), 80);
    }
  }, [step, isComplete, q?.type]);

  const setAnswer = (val) => {
    setAnswers(prev => {
      const next = [...prev]; next[step] = val; return next;
    });
  };

  const setAnswerAndAdvance = (val) => {
    setAnswers(prev => {
      const next = [...prev]; next[step] = val; return next;
    });
    setTimeout(() => { if (step < questions.length) setStep(s => s + 1); }, 400);
  };

  const handleNext = () => { if (step < questions.length) setStep(s => s + 1); };
  const handlePrev = () => { if (step > 0) setStep(s => s - 1); };

  const handleReflect = async () => {
    setLoading(true); setError(null);
    try {
      const pairs = questions.map((q, i) => ({ q: q.q, a: answers[i] || '' }));
      const sanitized = pairs.map(p => ({ ...p, a: scrubPII(p.a) }));
      const text = await reflectWithClaude(emotionName, sanitized);
      setReflection(text);
    } catch {
      setError('Could not get a reflection right now. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const answered = answers.filter((a, i) => isAnswered(questions[i], a)).length;
  const reset = () => {
    setStep(0); setAnswers(Array(questions.length).fill(''));
    setReflection(null); setError(null);
  };

  return (
    <div className="relative flex flex-col h-full animate-[fadeIn_0.2s_ease-out]">

      {/* Settings overlay */}
      {showSettings && (
        <SettingsPanel
          settings={settings}
          onChange={setSettings}
          onClose={() => setShowSettings(false)}
        />
      )}

      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-700 transition-colors shrink-0 py-1"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd"/>
          </svg>
          Back
        </button>
        <span className="text-xs text-slate-400">·</span>
        <span className="text-xs font-medium text-slate-600 truncate flex-1">Processing: {emotionName}</span>
        <button
          onClick={() => setShowSettings(true)}
          className="shrink-0 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
          title="Processing settings"
        >
          <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full bg-slate-100 rounded-full mb-5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${Math.max(progress * 100, isComplete ? 100 : 4)}%`, backgroundColor: accentColor }}
        />
      </div>

      {!isComplete ? (
        <div className="flex flex-col flex-1">

          {/* Stage label */}
          {q.label && (
            <p className="text-[10px] font-bold uppercase tracking-widest mb-1"
               style={{ color: accentColor + 'cc' }}>
              {q.label}
            </p>
          )}
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-3">
            {step + 1} / {questions.length}
          </p>

          {/* Breathing step */}
          {q.type === 'breathe' ? (
            <>
              <p className="text-sm font-semibold text-slate-800 leading-relaxed mb-2">{q.q}</p>
              {settings.instructions && q.instruction && (
                <p className="text-xs text-slate-400 italic leading-relaxed mb-4 pl-3 border-l-2 border-slate-200">
                  {q.instruction}
                </p>
              )}
              <BreathingExercise
                accentColor={accentColor}
                targetCycles={q.cycles || 3}
                onDone={() => { setAnswer('done'); handleNext(); }}
              />
            </>
          ) : (
            <>
              {/* Instruction (optional therapist note) */}
              {settings.instructions && q.instruction && (
                <p className="text-xs text-slate-400 italic leading-relaxed mb-4 pl-3 border-l-2 border-slate-200">
                  {q.instruction}
                </p>
              )}

              {/* Question */}
              <p className="text-sm font-semibold text-slate-800 leading-relaxed mb-4">{q.q}</p>

              {/* Scale input */}
              {q.type === 'scale' ? (
                <ScaleInput
                  q={q}
                  value={answers[step]}
                  onChange={setAnswerAndAdvance}
                  accentColor={accentColor}
                />
              ) : (
                /* Text input */
                <textarea
                  ref={textareaRef}
                  value={answers[step]}
                  onChange={e => setAnswer(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey) && answers[step].trim()) handleNext();
                  }}
                  placeholder={q.placeholder}
                  rows={4}
                  className="w-full resize-none rounded-2xl px-4 py-3 text-sm text-slate-700 placeholder-slate-300 border border-slate-200 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition-all leading-relaxed"
                />
              )}

              {/* Nav for text questions */}
              {q.type === 'text' && (
                <div className="flex items-center gap-2 mt-4">
                  {step > 0 && (
                    <button onClick={handlePrev} className="px-4 py-2.5 rounded-xl text-sm text-slate-500 hover:text-slate-700 border border-slate-200 hover:border-slate-300 transition-all">
                      Back
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    disabled={!answers[step].trim()}
                    className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-35 disabled:cursor-not-allowed text-white"
                    style={{ backgroundColor: answers[step].trim() ? accentColor : '#94a3b8' }}
                  >
                    {step === questions.length - 1 ? 'Finish' : 'Next'}
                  </button>
                  <button onClick={handleNext} className="px-3 py-2.5 rounded-xl text-xs text-slate-400 hover:text-slate-600 border border-slate-200 hover:border-slate-300 transition-all">
                    Skip
                  </button>
                </div>
              )}

              {/* Nav for scale questions (auto-advances on tap, but show Back + Skip) */}
              {q.type === 'scale' && (
                <div className="flex items-center gap-2 mt-4">
                  {step > 0 && (
                    <button onClick={handlePrev} className="px-4 py-2.5 rounded-xl text-sm text-slate-500 hover:text-slate-700 border border-slate-200 transition-all">
                      Back
                    </button>
                  )}
                  <button onClick={handleNext} className="ml-auto px-3 py-2.5 rounded-xl text-xs text-slate-400 hover:text-slate-600 border border-slate-200 transition-all">
                    Skip
                  </button>
                </div>
              )}
            </>
          )}
        </div>

      ) : (
        /* ── Summary screen ── */
        <div className="flex-1 overflow-y-auto">
          <p className="text-xs font-semibold text-slate-500 mb-3">Your responses</p>

          <div className="space-y-3 mb-5">
            {questions.map((q, i) => {
              if (!isAnswered(q, answers[i]) || answers[i] === 'done') return null;
              return (
                <div key={i} className="rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-3">
                  {q.label && (
                    <p className="text-[9px] font-bold uppercase tracking-widest mb-0.5" style={{ color: accentColor + 'aa' }}>
                      {q.label}
                    </p>
                  )}
                  <p className="text-[10px] text-slate-400 mb-1.5 leading-snug">{q.q}</p>
                  {q.type === 'scale' ? (
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold" style={{ color: accentColor }}>{answers[i]}</span>
                      <span className="text-xs text-slate-400">/ 5 ·</span>
                      <span className="text-xs text-slate-500">
                        {Number(answers[i]) <= 2 ? q.scaleMin : Number(answers[i]) >= 4 ? q.scaleMax : 'In between'}
                      </span>
                    </div>
                  ) : (
                    <p className="text-sm text-slate-700 leading-relaxed">{answers[i]}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* AI reflection */}
          {settings.aiReflection && (
            <div className="rounded-2xl border border-slate-200 overflow-hidden mb-4">
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200">
                <p className="text-xs font-semibold text-slate-700">AI Reflection</p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  {aiActive
                    ? `Claude reads what you shared and offers a reflection specific to ${emotionName}.`
                    : 'Turn on AI in the Journal to unlock personalised reflections.'}
                </p>
              </div>
              <div className="px-4 py-3">
                {reflection ? (
                  <p className="text-sm text-slate-600 leading-relaxed">{reflection}</p>
                ) : error ? (
                  <div className="space-y-2">
                    <p className="text-xs text-red-500">{error}</p>
                    <button onClick={handleReflect} className="text-xs font-medium text-slate-600 underline underline-offset-2">Try again</button>
                  </div>
                ) : loading ? (
                  <div className="flex items-center gap-2 text-xs text-slate-400 py-1">
                    <svg className="animate-spin w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"/>
                    </svg>
                    Reflecting on your {emotionName.toLowerCase()}…
                  </div>
                ) : (
                  <button
                    onClick={handleReflect}
                    disabled={!aiActive || answered === 0}
                    className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-35 disabled:cursor-not-allowed text-white"
                    style={{ backgroundColor: aiActive && answered > 0 ? accentColor : '#94a3b8' }}
                  >
                    {!aiActive ? 'Enable AI in Journal first' : answered === 0 ? 'Answer at least one question' : 'Reflect with AI'}
                  </button>
                )}
              </div>
            </div>
          )}

          <button onClick={reset} className="w-full text-xs text-slate-400 hover:text-slate-600 transition-colors py-2">
            Start over
          </button>
        </div>
      )}
    </div>
  );
}
