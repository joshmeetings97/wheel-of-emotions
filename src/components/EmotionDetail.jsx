import React, { useState, useEffect } from 'react';
import { CORE_EMOTIONS, BLEND_EMOTIONS } from '../data/emotions';
import { PROCESS_QUESTIONS } from '../data/processQuestions';
import { CHRISTIAN_PROCESS_QUESTIONS } from '../data/processQuestions_christian';
import { CHRISTIAN_CONTENT } from '../data/christianContent';
import ProcessEmotion from './ProcessEmotion';

const INTENSITY_BADGE = {
  intense:  { label: 'Intense',  cls: 'bg-red-50 text-red-700 border-red-200'      },
  moderate: { label: 'Moderate', cls: 'bg-blue-50 text-blue-700 border-blue-200'   },
  mild:     { label: 'Mild',     cls: 'bg-green-50 text-green-700 border-green-200' },
};

function Section({ title, items, icon }) {
  return (
    <div className="mb-5">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
        <span className="text-base leading-none">{icon}</span>{title}
      </h3>
      <ul className="space-y-3">
        {items.map((tip, i) => {
          const isObj = tip && typeof tip === 'object';
          return (
            <li key={i} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
              <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                {i + 1}
              </span>
              <span className="flex-1">
                {isObj ? (
                  <>
                    <span>{tip.text}</span>
                    {tip.scripture && (
                      <span className="block mt-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50 border border-amber-100 text-[11px] italic text-amber-800 leading-snug">
                        {tip.scripture}
                      </span>
                    )}
                  </>
                ) : tip}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function RelatedChip({ id, accentColor, onClick }) {
  const emotion = CORE_EMOTIONS.find(e => e.id === id)
               || BLEND_EMOTIONS.find(e => e.id === id);
  if (!emotion) return null;
  return (
    <button
      onClick={() => onClick(id)}
      className="px-3 py-2.5 rounded-full text-xs font-medium border transition-all hover:scale-105 active:scale-95 bg-white min-h-[36px]"
      style={{ borderColor: accentColor + '80', color: accentColor }}
    >
      {emotion.name}
    </button>
  );
}

export default function EmotionDetail({ selection, onClose, onRelatedClick, christianMode = false }) {
  const [processing, setProcessing] = useState(false);

  // Reset processing view whenever the selected emotion changes
  useEffect(() => { setProcessing(false); }, [selection]);

  if (!selection) return null;

  const { type, data, emotion, intensity, level, outerName } = selection;
  const isBlend = type === 'blend';

  // Look up the full outer emotion object when an outer segment is clicked
  const outerData = outerName && !isBlend
    ? emotion?.outer?.find(o => o.name === outerName)
    : undefined;

  const name        = isBlend ? data.name        : outerName || intensity?.name || emotion?.name;
  let   description = isBlend ? data.description : outerData?.description || intensity?.description;
  let   feelTips    = isBlend ? data.feelTips    : outerData?.feelTips    || intensity?.feelTips;
  let   remedyTips  = isBlend ? data.remedyTips  : outerData?.remedyTips  || intensity?.remedyTips;
  const related     = isBlend ? data.related     : emotion?.related;

  // Apply Christian content overrides when mode is active
  if (christianMode) {
    const outerKey     = outerName?.toLowerCase();
    const intensityKey = !outerName && !isBlend ? intensity?.name?.toLowerCase() : undefined;
    const coreKey      = isBlend ? data.id : emotion?.id;
    const cc = (outerKey && CHRISTIAN_CONTENT[outerKey])
            || (intensityKey && CHRISTIAN_CONTENT[intensityKey])
            || CHRISTIAN_CONTENT[coreKey];
    if (cc) {
      if (cc.description) description = cc.description;
      if (cc.feelTips)    feelTips    = cc.feelTips;
      if (cc.remedyTips)  remedyTips  = cc.remedyTips;
    }
  }
  const accentColor = isBlend
    ? data.color
    : emotion?.ringColors?.[level === 'intense' ? 0 : level === 'moderate' ? 1 : 2] || '#4f46e5';
  const badgeInfo = !isBlend && INTENSITY_BADGE[level];

  const handleRelatedClick = (relatedId) => {
    const coreEmotion = CORE_EMOTIONS.find(e => e.id === relatedId);
    if (coreEmotion) {
      onRelatedClick({
        type: 'emotion',
        emotion: coreEmotion,
        intensity: coreEmotion.intensities[1],
        level: 'moderate',
      });
      return;
    }
    const blend = BLEND_EMOTIONS.find(e => e.id === relatedId);
    if (blend) onRelatedClick({ type: 'blend', data: blend });
  };

  return (
    <div className="flex flex-col h-full animate-[fadeIn_0.2s_ease-out]">
      {/* Header */}
      <div className="flex items-start justify-between mb-3 gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 mb-1">
            {isBlend && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200">
                Blend
              </span>
            )}
            {isBlend && (
              <span className="text-[10px] text-slate-400">
                {(() => {
                  const e1 = CORE_EMOTIONS.find(e => e.id === data.emotion1);
                  const e2 = CORE_EMOTIONS.find(e => e.id === data.emotion2);
                  return e1 && e2 ? `${e1.name} + ${e2.name}` : '';
                })()}
              </span>
            )}
            {badgeInfo && (
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${badgeInfo.cls}`}>
                {badgeInfo.label}
              </span>
            )}
          </div>
          <h2 className="text-xl font-bold text-slate-800 truncate">{name}</h2>
          {!isBlend && emotion && (
            <p className="text-xs text-slate-400 mt-0.5">
              {outerName
                ? `${emotion.name} family · variant of ${intensity?.name}`
                : `${emotion.name} family`}
            </p>
          )}
        </div>
        <button
          onClick={onClose}
          className="shrink-0 w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 transition-colors flex items-center justify-center text-slate-400 hover:text-slate-600 text-sm"
          aria-label="Close"
        >✕</button>
      </div>

      {/* Color accent bar */}
      <div className="h-1 w-full rounded-full mb-5"
        style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}30)` }} />

      {/* Scrollable body — switches between detail view and processing view */}
      <div className="flex-1 overflow-y-auto pr-0.5">
        {processing ? (
          <ProcessEmotion
            emotionId={isBlend ? data.id : (outerName ? outerName.toLowerCase() : emotion?.id)}
            emotionName={name}
            accentColor={accentColor}
            onBack={() => setProcessing(false)}
            christianMode={christianMode}
          />
        ) : (
          <div className="space-y-0.5">
            <div className="mb-5">
              <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
            </div>
            {feelTips   && <Section title="Feel It"   items={feelTips}   icon="✦" />}
            {remedyTips && <Section title="Remedy It" items={remedyTips} icon="✓" />}
            {related?.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Related</h3>
                <div className="flex flex-wrap gap-1.5">
                  {related.map(id => (
                    <RelatedChip key={id} id={id} accentColor={accentColor} onClick={handleRelatedClick} />
                  ))}
                </div>
              </div>
            )}

            {/* Process this emotion */}
            <div className="pt-5 pb-1">
              <div className="h-px bg-slate-100 mb-4" />
              <button
                onClick={() => setProcessing(true)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 active:scale-[0.98] transition-all group"
              >
                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                    Process this emotion
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {(() => {
                    const id = isBlend ? data.id : (outerName ? outerName.toLowerCase() : emotion?.id);
                    const qs = christianMode
                      ? (CHRISTIAN_PROCESS_QUESTIONS[id] || CHRISTIAN_PROCESS_QUESTIONS.default)
                      : (PROCESS_QUESTIONS[id] || PROCESS_QUESTIONS.default);
                    return qs.length;
                  })()} questions · optional AI reflection
                  </p>
                </div>
                <svg className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.17 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
