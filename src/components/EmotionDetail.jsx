import React from 'react';
import { CORE_EMOTIONS, BLEND_EMOTIONS } from '../data/emotions';

const INTENSITY_BADGE = {
  intense:  { label: 'Intense',  bg: 'bg-red-900/60',    text: 'text-red-200',    border: 'border-red-700/50'    },
  moderate: { label: 'Moderate', bg: 'bg-blue-900/60',   text: 'text-blue-200',   border: 'border-blue-700/50'   },
  mild:     { label: 'Mild',     bg: 'bg-green-900/60',  text: 'text-green-200',  border: 'border-green-700/50'  },
};

function Section({ title, items, icon }) {
  return (
    <div className="mb-5">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 flex items-center gap-1.5">
        <span>{icon}</span>{title}
      </h3>
      <ul className="space-y-2">
        {items.map((tip, i) => (
          <li key={i} className="flex gap-2 text-sm text-white/75 leading-relaxed">
            <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white/50">{i + 1}</span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RelatedChip({ id, color, onClick }) {
  const emotion = CORE_EMOTIONS.find(e => e.id === id)
               || BLEND_EMOTIONS.find(e => e.id === id);
  if (!emotion) return null;
  return (
    <button
      onClick={() => onClick(id)}
      className="px-2.5 py-1 rounded-full text-xs font-medium border transition-all hover:scale-105 active:scale-95"
      style={{
        borderColor: `${color}60`,
        color,
        background: `${color}20`,
      }}
    >
      {emotion.name}
    </button>
  );
}

export default function EmotionDetail({ selection, onClose, onRelatedClick }) {
  if (!selection) return null;

  const { type, data, emotion, intensity, level } = selection;

  const isBlend = type === 'blend';
  const name        = isBlend ? data.name : intensity?.name || emotion?.name;
  const description = isBlend ? data.description : intensity?.description;
  const feelTips    = isBlend ? data.feelTips    : intensity?.feelTips;
  const remedyTips  = isBlend ? data.remedyTips  : intensity?.remedyTips;
  const related     = isBlend ? data.related     : emotion?.related;
  const color       = isBlend ? data.color       : emotion?.colors?.[level] || emotion?.colors?.core;
  const badgeInfo   = !isBlend && INTENSITY_BADGE[level];

  const handleRelatedClick = (relatedId) => {
    // Find matching emotion or blend and call onRelatedClick
    const coreEmotion = CORE_EMOTIONS.find(e => e.id === relatedId);
    if (coreEmotion) {
      onRelatedClick({ type: 'emotion', emotion: coreEmotion, intensity: coreEmotion.intensities[1], level: 'moderate' });
      return;
    }
    const blendEmotion = BLEND_EMOTIONS.find(e => e.id === relatedId);
    if (blendEmotion) {
      onRelatedClick({ type: 'blend', data: blendEmotion });
    }
  };

  return (
    <div className="flex flex-col h-full animate-[fadeIn_0.2s_ease-out]">
      {/* Header */}
      <div className="flex items-start justify-between mb-4 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {isBlend && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white/50 border border-white/10">
                Blend
              </span>
            )}
            {badgeInfo && (
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${badgeInfo.bg} ${badgeInfo.text} ${badgeInfo.border}`}>
                {badgeInfo.label}
              </span>
            )}
            {isBlend && (
              <span className="text-[10px] text-white/40">
                {(() => {
                  const e1 = CORE_EMOTIONS.find(e => e.id === data.emotion1);
                  const e2 = CORE_EMOTIONS.find(e => e.id === data.emotion2);
                  return e1 && e2 ? `${e1.name} + ${e2.name}` : '';
                })()}
              </span>
            )}
          </div>
          <h2 className="text-2xl font-bold" style={{ color }}>
            {name}
          </h2>
          {!isBlend && emotion && (
            <p className="text-xs text-white/40 mt-0.5">{emotion.name} family</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="shrink-0 w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 transition-colors flex items-center justify-center text-white/50 hover:text-white/80"
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      {/* Color accent bar */}
      <div className="h-0.5 w-full rounded-full mb-5 opacity-60"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-1" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}>
        {/* Description */}
        <div className="mb-5">
          <p className="text-sm text-white/70 leading-relaxed">{description}</p>
        </div>

        {feelTips && (
          <Section title="Feel It" items={feelTips} icon="✦" />
        )}

        {remedyTips && (
          <Section title="Remedy It" items={remedyTips} icon="↺" />
        )}

        {/* Related emotions */}
        {related && related.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
              Related
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {related.map(id => (
                <RelatedChip
                  key={id}
                  id={id}
                  color={color}
                  onClick={handleRelatedClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
