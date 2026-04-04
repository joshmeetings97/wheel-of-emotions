import React, { useState, useMemo, useCallback } from 'react';
import { CORE_EMOTIONS, BLEND_EMOTIONS } from '../data/emotions';

// ─── Wheel geometry ──────────────────────────────────────────────────────────
const CX = 290;
const CY = 290;
const R = {
  center:  52,   // inner "logo" circle
  intense: 118,  // inner ring (most intense emotions)
  core:    192,  // middle ring (core named emotions)
  mild:    260,  // outer ring (mild emotions)
};

// Each core emotion occupies 40°; each blend zone 5°.
// Core emotions start at centerAngle − 20°, end at centerAngle + 20°.
// Blend zones occupy the 5° gap between adjacent emotions.

function toRad(d) { return (d * Math.PI) / 180; }
function pt(r, a) {
  return { x: CX + r * Math.cos(toRad(a)), y: CY + r * Math.sin(toRad(a)) };
}

function wedgePath(r1, r2, a1, a2) {
  const s1 = pt(r1, a1), s2 = pt(r2, a1);
  const e2 = pt(r2, a2), e1 = pt(r1, a2);
  // Use actual angular span to decide large-arc flag (handle wrap-around safely)
  let span = a2 - a1;
  if (span < 0) span += 360;
  const lg = span > 180 ? 1 : 0;
  return (
    `M ${s1.x.toFixed(3)},${s1.y.toFixed(3)} ` +
    `L ${s2.x.toFixed(3)},${s2.y.toFixed(3)} ` +
    `A ${r2},${r2} 0 ${lg} 1 ${e2.x.toFixed(3)},${e2.y.toFixed(3)} ` +
    `L ${e1.x.toFixed(3)},${e1.y.toFixed(3)} ` +
    `A ${r1},${r1} 0 ${lg} 0 ${s1.x.toFixed(3)},${s1.y.toFixed(3)} Z`
  );
}

function midPoint(r1, r2, a1, a2) {
  const mr = (r1 + r2) / 2;
  const ma = (a1 + a2) / 2;
  return { ...pt(mr, ma), angle: ma };
}

// Text rotation: make text radially outward and always readable
function textRotation(midAngle) {
  let n = midAngle % 360;
  if (n < 0) n += 360;
  // Right half (315–360 and 0–90): text reads outward left-to-right
  // Left half (90–270): flip 180° so text reads outward left-to-right from the other side
  return (n > 90 && n < 270) ? midAngle + 180 : midAngle;
}

// Darken/lighten a hex color for hover effect
function adjustBrightness(hex, factor) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const clamp = v => Math.max(0, Math.min(255, Math.round(v * factor)));
  return `rgb(${clamp(r)},${clamp(g)},${clamp(b)})`;
}

// ─── Build all segments from data ────────────────────────────────────────────
function buildSegments() {
  const segs = [];

  CORE_EMOTIONS.forEach((emotion) => {
    const ca = emotion.centerAngle;
    const a1 = ca - 20; // sector start
    const a2 = ca + 20; // sector end

    const rings = [
      { level: 'intense', r1: R.center,  r2: R.intense, color: emotion.colors.intense },
      { level: 'moderate', r1: R.intense, r2: R.core,    color: emotion.colors.core    },
      { level: 'mild',     r1: R.core,    r2: R.mild,    color: emotion.colors.mild    },
    ];

    rings.forEach(({ level, r1, r2, color }) => {
      const mid = midPoint(r1, r2, a1, a2);
      segs.push({
        id:        `${emotion.id}-${level}`,
        type:      'emotion',
        emotionId: emotion.id,
        level,
        name:      emotion.intensities.find(i => i.level === level)?.name || emotion.name,
        color,
        a1, a2, r1, r2,
        path: wedgePath(r1, r2, a1, a2),
        mid,
      });
    });
  });

  BLEND_EMOTIONS.forEach((blend) => {
    const a1 = blend.blendAngle;
    const a2 = blend.blendAngle + 5;
    const mid = midPoint(R.center, R.mild, a1, a2);
    segs.push({
      id:    blend.id,
      type:  'blend',
      name:  blend.name,
      color: blend.color,
      a1, a2,
      r1:    R.center,
      r2:    R.mild,
      path:  wedgePath(R.center, R.mild, a1, a2),
      mid,
    });
  });

  return segs;
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function EmotionWheel({ onSelect, selectedId, pulseId }) {
  const [hoverId, setHoverId] = useState(null);
  const segments = useMemo(() => buildSegments(), []);

  const handleClick = useCallback((seg) => {
    // Find full data for this segment
    if (seg.type === 'blend') {
      const blend = BLEND_EMOTIONS.find(b => b.id === seg.id);
      onSelect({ type: 'blend', data: blend });
    } else {
      const emotion = CORE_EMOTIONS.find(e => e.id === seg.emotionId);
      const intensity = emotion?.intensities.find(i => i.level === seg.level);
      onSelect({ type: 'emotion', emotion, intensity, level: seg.level });
    }
  }, [onSelect]);

  return (
    <div className="relative w-full max-w-[580px] mx-auto select-none">
      <svg
        viewBox="0 0 580 580"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 0 40px rgba(0,0,0,0.6))' }}
      >
        <defs>
          {/* Glow filter for selected/pulse */}
          <filter id="glow-strong" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Radial gradient for center circle */}
          <radialGradient id="centerGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%"   stopColor="#1e2a4a" />
            <stop offset="100%" stopColor="#0d1424" />
          </radialGradient>
          {/* Ring separators */}
          <style>{`
            .seg-path {
              transition: opacity 0.15s ease, filter 0.15s ease;
              cursor: pointer;
            }
            .seg-path:hover { opacity: 0.92; }
            @keyframes pulseGlow {
              0%, 100% { filter: url(#glow-strong) brightness(1.1); opacity: 1; }
              50%       { filter: url(#glow-strong) brightness(1.9); opacity: 0.8; }
            }
            .pulse-anim { animation: pulseGlow 1.4s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* ── Background ring separators ── */}
        {[R.intense, R.core, R.mild].map(r => (
          <circle key={r} cx={CX} cy={CY} r={r}
            fill="none" stroke="#0d1424" strokeWidth="2" opacity="0.7" />
        ))}

        {/* ── Segments ── */}
        {segments.map((seg) => {
          const isSelected = seg.id === selectedId;
          const isHovered  = seg.id === hoverId;
          const isPulse    = seg.id === pulseId;

          let fill = seg.color;
          if (isHovered && !isSelected) fill = adjustBrightness(seg.color, 1.25);
          if (isSelected) fill = adjustBrightness(seg.color, 1.4);

          const filterAttr = isSelected ? 'url(#glow-strong)'
                           : isHovered  ? 'url(#glow-soft)'
                           : undefined;

          return (
            <path
              key={seg.id}
              d={seg.path}
              fill={fill}
              stroke="#0d1424"
              strokeWidth={isSelected ? 2.5 : 1.5}
              strokeLinejoin="round"
              filter={filterAttr}
              className={`seg-path ${isPulse ? 'pulse-anim' : ''}`}
              onClick={() => handleClick(seg)}
              onMouseEnter={() => setHoverId(seg.id)}
              onMouseLeave={() => setHoverId(null)}
              aria-label={seg.name}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && handleClick(seg)}
            />
          );
        })}

        {/* ── Ring separator lines on top ── */}
        {[R.intense, R.core, R.mild].map(r => (
          <circle key={`line-${r}`} cx={CX} cy={CY} r={r}
            fill="none" stroke="#0d1424" strokeWidth="1.5" opacity="0.5" />
        ))}

        {/* ── Core emotion name labels (middle ring) ── */}
        {CORE_EMOTIONS.map((emotion) => {
          const ca = emotion.centerAngle;
          const a1 = ca - 20, a2 = ca + 20;
          const { x, y, angle } = midPoint(R.intense, R.core, a1, a2);
          const rot = textRotation(angle);
          return (
            <text
              key={`label-core-${emotion.id}`}
              x={x} y={y}
              textAnchor="middle"
              dominantBaseline="central"
              transform={`rotate(${rot.toFixed(1)},${x.toFixed(1)},${y.toFixed(1)})`}
              fontSize="10"
              fontWeight="600"
              fontFamily="Inter, sans-serif"
              fill="rgba(255,255,255,0.9)"
              style={{ pointerEvents: 'none', letterSpacing: '0.04em' }}
            >
              {emotion.name.toUpperCase()}
            </text>
          );
        })}

        {/* ── Intensity labels (mild/outer ring) ── */}
        {CORE_EMOTIONS.map((emotion) => {
          const ca = emotion.centerAngle;
          const a1 = ca - 20, a2 = ca + 20;
          const { x, y, angle } = midPoint(R.core, R.mild, a1, a2);
          const rot = textRotation(angle);
          const mildName = emotion.intensities.find(i => i.level === 'mild')?.name || '';
          return (
            <text
              key={`label-mild-${emotion.id}`}
              x={x} y={y}
              textAnchor="middle"
              dominantBaseline="central"
              transform={`rotate(${rot.toFixed(1)},${x.toFixed(1)},${y.toFixed(1)})`}
              fontSize="8.5"
              fontFamily="Inter, sans-serif"
              fill="rgba(255,255,255,0.7)"
              style={{ pointerEvents: 'none' }}
            >
              {mildName}
            </text>
          );
        })}

        {/* ── Intense ring labels ── */}
        {CORE_EMOTIONS.map((emotion) => {
          const ca = emotion.centerAngle;
          const a1 = ca - 20, a2 = ca + 20;
          const { x, y, angle } = midPoint(R.center, R.intense, a1, a2);
          const rot = textRotation(angle);
          const intenseName = emotion.intensities.find(i => i.level === 'intense')?.name || '';
          return (
            <text
              key={`label-intense-${emotion.id}`}
              x={x} y={y}
              textAnchor="middle"
              dominantBaseline="central"
              transform={`rotate(${rot.toFixed(1)},${x.toFixed(1)},${y.toFixed(1)})`}
              fontSize="7.5"
              fontFamily="Inter, sans-serif"
              fill="rgba(255,255,255,0.65)"
              style={{ pointerEvents: 'none' }}
            >
              {intenseName}
            </text>
          );
        })}

        {/* ── Center circle ── */}
        <circle cx={CX} cy={CY} r={R.center}
          fill="url(#centerGrad)"
          stroke="#1e3a5f"
          strokeWidth="2" />
        <text x={CX} y={CY - 8}
          textAnchor="middle" dominantBaseline="central"
          fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif"
          fill="rgba(255,255,255,0.9)"
          style={{ pointerEvents: 'none' }}
        >Emo</text>
        <text x={CX} y={CY + 10}
          textAnchor="middle" dominantBaseline="central"
          fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif"
          fill="rgba(255,255,255,0.9)"
          style={{ pointerEvents: 'none' }}
        >Wheel</text>

        {/* ── Hover tooltip ── */}
        {hoverId && (() => {
          const seg = segments.find(s => s.id === hoverId);
          if (!seg) return null;
          const { x, y } = seg.mid;
          // Offset tooltip slightly outward from center
          const dx = x - CX, dy = y - CY;
          const len = Math.sqrt(dx * dx + dy * dy);
          const tx = x + (dx / len) * 28;
          const ty = y + (dy / len) * 28;
          return (
            <g style={{ pointerEvents: 'none' }}>
              <rect x={tx - 40} y={ty - 12} width="80" height="22"
                rx="6" fill="rgba(10,15,30,0.88)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <text x={tx} y={ty + 1}
                textAnchor="middle" dominantBaseline="central"
                fontSize="9.5" fontWeight="500" fontFamily="Inter, sans-serif"
                fill="white"
              >{seg.name}</text>
            </g>
          );
        })()}
      </svg>

      {/* ── Outer emotion name labels (HTML, around SVG) ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {BLEND_EMOTIONS.map((blend) => {
          const seg = segments.find(s => s.id === blend.id);
          if (!seg) return null;
          // Position between the two emotions
          const angle = blend.blendAngle + 2.5; // midpoint of 5° zone
          const labelR = 0.495; // as fraction of SVG size (580px)
          const { x, y } = pt(R.mild + 16, angle);
          // Convert SVG coords to % of container
          const left = `${(x / 580) * 100}%`;
          const top  = `${(y / 580) * 100}%`;
          return (
            <div
              key={blend.id}
              className="absolute text-[9px] font-medium text-white/50 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
              style={{ left, top, color: blend.color, textShadow: `0 0 8px ${blend.color}` }}
            >
              {blend.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
