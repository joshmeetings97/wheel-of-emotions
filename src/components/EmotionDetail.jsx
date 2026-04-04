import React from 'react';
import { CORE_EMOTIONS, BLEND_EMOTIONS } from '../data/emotions';

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
      <ul className="space-y-2">
        {items.map((tip, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
            <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
              {i + 1}
            </span>
            <span>{tip}</span>
          </li>
        ))}
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
      className="px-2.5 py-1 rounded-full text-xs font-medium border transition-all hover:scale-105 active:scale-95 bg-white"
      style={{ borderColor: accentColor + '80', color: accentColor }}
    >
      {emotion.name}
    </button>
  );
}

export default function EmotionDetail({ selection, onClose, onRelatedClick }) {
  if (!selection) return null;

  const { type, data, emotion, intensity, level, outerName } = selection;
  const isBlend = type === 'blend';

  // Look up the full outer emotion object when an outer segment is clicked
  const outerData = outerName && !isBlend
    ? emotion?.outer?.find(o => o.name === outerName)
    : undefined;

  const name        = isBlend ? data.name        : outerName || intensity?.name || emotion?.name;
  const description = isBlend ? data.description : outerData?.description || intensity?.description;
  const feelTips    = isBlend ? data.feelTips    : outerData?.feelTips    || intensity?.feelTips;
  const remedyTips  = isBlend ? data.remedyTips  : outerData?.remedyTips  || intensity?.remedyTips;
  const related     = isBlend ? data.related     : emotion?.related;
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
          className="shrink-0 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 transition-colors flex items-center justify-center text-slate-400 hover:text-slate-600 text-sm"
          aria-label="Close"
        >✕</button>
      </div>

      {/* Color accent bar */}
      <div className="h-1 w-full rounded-full mb-5"
        style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}30)` }} />

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto space-y-0.5 pr-0.5">
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
      </div>
    </div>
  );
}
