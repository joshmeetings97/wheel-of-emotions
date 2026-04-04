import React, { useState, useMemo, useCallback } from 'react';
import { CORE_EMOTIONS, BLEND_EMOTIONS } from '../data/emotions';

// ─── Geometry ────────────────────────────────────────────────────────────────
const CX = 340, CY = 340;
const R = {
  hole:  52,   // white center circle
  r1:   120,   // ring 1 — most intense (innermost color ring)
  r2:   193,   // ring 2 — core emotion
  r3:   261,   // ring 3 — mild
  r4:   328,   // ring 4 — outermost (2 sub-segments per emotion)
};

// Each core emotion: 40° sector centered on emotion.centerAngle
// Blend zones: 5° between adjacent emotions
// Outer ring (r3→r4): 2 sub-segments of 20° each per emotion

function toRad(d) { return (d * Math.PI) / 180; }
function pt(r, a)  { return { x: CX + r * Math.cos(toRad(a)), y: CY + r * Math.sin(toRad(a)) }; }

function wedge(r1, r2, a1, a2) {
  const s1 = pt(r1, a1), s2 = pt(r2, a1), e2 = pt(r2, a2), e1 = pt(r1, a2);
  let span = a2 - a1; if (span < 0) span += 360;
  const lg = span > 180 ? 1 : 0;
  return `M${s1.x},${s1.y} L${s2.x},${s2.y} A${r2},${r2} 0 ${lg} 1 ${e2.x},${e2.y} L${e1.x},${e1.y} A${r1},${r1} 0 ${lg} 0 ${s1.x},${s1.y}Z`;
}

function midPt(r1, r2, a1, a2) {
  return { ...pt((r1 + r2) / 2, (a1 + a2) / 2), angle: (a1 + a2) / 2 };
}

// Rotate text so it reads radially outward; flip left-half to avoid upside-down
function textRot(a) {
  let n = ((a % 360) + 360) % 360;
  return (n > 90 && n < 270) ? a + 180 : a;
}

// Return dark or white text depending on background luminance
function textClr(hex) {
  if (!hex || hex.length < 7) return '#1e293b';
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.58 ? '#1e293b' : '#ffffff';
}

// ─── Build segment list ───────────────────────────────────────────────────────
function buildSegments() {
  const segs = [];

  CORE_EMOTIONS.forEach((emotion) => {
    const ca = emotion.centerAngle;
    const a1 = ca - 20, a2 = ca + 20;          // full 40° sector
    const [c1, c2, c3, c4] = emotion.ringColors || [
      emotion.colors.intense, emotion.colors.core, emotion.colors.mild, '#f8f9fa',
    ];
    const levels = [
      { id: `${emotion.id}-intense`,  color: c1, r1: R.hole, r2: R.r1, name: emotion.intensities[0].name, level: 'intense' },
      { id: `${emotion.id}-moderate`, color: c2, r1: R.r1,   r2: R.r2, name: emotion.intensities[1].name, level: 'moderate' },
      { id: `${emotion.id}-mild`,     color: c3, r1: R.r2,   r2: R.r3, name: emotion.intensities[2].name, level: 'mild'     },
    ];
    levels.forEach(({ id, color, r1, r2, name, level }) => {
      segs.push({
        id, type: 'emotion', emotionId: emotion.id, level, name, color,
        a1, a2, r1, r2, path: wedge(r1, r2, a1, a2), mid: midPt(r1, r2, a1, a2),
      });
    });

    // Outer ring: 2 sub-segments of 20° each
    const outer = emotion.outer || [emotion.intensities[2].name, emotion.intensities[0].name];
    [[a1, ca, outer[0]], [ca, a2, outer[1]]].forEach(([sa, ea, outerName], idx) => {
      segs.push({
        id: `${emotion.id}-outer-${idx}`, type: 'emotion', emotionId: emotion.id, level: 'mild',
        name: outerName, color: c4,
        a1: sa, a2: ea, r1: R.r3, r2: R.r4,
        path: wedge(R.r3, R.r4, sa, ea),
        mid: midPt(R.r3, R.r4, sa, ea),
      });
    });
  });

  // Blend zones — full height (hole→r4), 5° wide
  BLEND_EMOTIONS.forEach((blend) => {
    const a1 = blend.blendAngle, a2 = blend.blendAngle + 5;
    segs.push({
      id: blend.id, type: 'blend', name: blend.name, color: blend.color,
      a1, a2, r1: R.hole, r2: R.r4,
      path: wedge(R.hole, R.r4, a1, a2),
      mid: midPt(R.r2, R.r3, a1, a2),
    });
  });

  return segs;
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function EmotionWheel({ onSelect, selectedId, pulseId }) {
  const [hoverId, setHoverId] = useState(null);
  const segments = useMemo(() => buildSegments(), []);

  const handleClick = useCallback((seg) => {
    if (seg.type === 'blend') {
      const blend = BLEND_EMOTIONS.find(b => b.id === seg.id);
      onSelect({ type: 'blend', data: blend });
    } else {
      const emotion = CORE_EMOTIONS.find(e => e.id === seg.emotionId);
      const intensity = emotion?.intensities.find(i => i.level === seg.level)
                     || emotion?.intensities[2]; // outer sub-segments → mild
      onSelect({ type: 'emotion', emotion, intensity, level: intensity?.level || 'mild' });
    }
  }, [onSelect]);

  return (
    <div className="relative w-full max-w-[680px] mx-auto select-none">
      <svg
        viewBox="0 0 680 680"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.13))' }}
      >
        <defs>
          <style>{`
            .seg { cursor: pointer; transition: filter 0.12s ease; }
            .seg:hover { filter: brightness(0.88); }
            @keyframes pulseRing {
              0%,100% { filter: brightness(1.08) drop-shadow(0 0 6px rgba(0,0,0,0.35)); }
              50%      { filter: brightness(1.22) drop-shadow(0 0 16px rgba(0,0,0,0.5)); }
            }
            .pulse { animation: pulseRing 1.4s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* ── All segments ── */}
        {segments.map((seg) => {
          const isSelected = seg.id === selectedId;
          const isPulse    = seg.id === pulseId;
          return (
            <path
              key={seg.id}
              d={seg.path}
              fill={seg.color}
              stroke="white"
              strokeWidth={isSelected ? 2.5 : 1.2}
              strokeLinejoin="round"
              className={`seg ${isPulse ? 'pulse' : ''}`}
              style={isSelected ? { filter: 'brightness(0.82)' } : undefined}
              onClick={() => handleClick(seg)}
              onMouseEnter={() => setHoverId(seg.id)}
              onMouseLeave={() => setHoverId(null)}
              role="button"
              tabIndex={0}
              aria-label={seg.name}
              onKeyDown={e => e.key === 'Enter' && handleClick(seg)}
            />
          );
        })}

        {/* ── Emotion name labels — ring 1 (innermost) ── */}
        {CORE_EMOTIONS.map((emotion) => {
          const ca = emotion.centerAngle;
          const a1 = ca - 20, a2 = ca + 20;
          const { x, y, angle } = midPt(R.hole, R.r1, a1, a2);
          const color = emotion.ringColors?.[0] || emotion.colors.intense;
          return (
            <text key={`r1-${emotion.id}`}
              x={x} y={y} textAnchor="middle" dominantBaseline="central"
              transform={`rotate(${textRot(angle)},${x},${y})`}
              fontSize="10" fontWeight="700" fontFamily="Inter, Arial, sans-serif"
              fill={textClr(color)} style={{ pointerEvents: 'none', letterSpacing: '0.02em' }}
            >
              {emotion.intensities[0].name}
            </text>
          );
        })}

        {/* ── Ring 2 — core emotion name ── */}
        {CORE_EMOTIONS.map((emotion) => {
          const ca = emotion.centerAngle;
          const a1 = ca - 20, a2 = ca + 20;
          const { x, y, angle } = midPt(R.r1, R.r2, a1, a2);
          const color = emotion.ringColors?.[1] || emotion.colors.core;
          return (
            <text key={`r2-${emotion.id}`}
              x={x} y={y} textAnchor="middle" dominantBaseline="central"
              transform={`rotate(${textRot(angle)},${x},${y})`}
              fontSize="11" fontWeight="700" fontFamily="Inter, Arial, sans-serif"
              fill={textClr(color)} style={{ pointerEvents: 'none', letterSpacing: '0.03em' }}
            >
              {emotion.name.toUpperCase()}
            </text>
          );
        })}

        {/* ── Ring 3 — mild name ── */}
        {CORE_EMOTIONS.map((emotion) => {
          const ca = emotion.centerAngle;
          const a1 = ca - 20, a2 = ca + 20;
          const { x, y, angle } = midPt(R.r2, R.r3, a1, a2);
          const color = emotion.ringColors?.[2] || emotion.colors.mild;
          return (
            <text key={`r3-${emotion.id}`}
              x={x} y={y} textAnchor="middle" dominantBaseline="central"
              transform={`rotate(${textRot(angle)},${x},${y})`}
              fontSize="10" fontFamily="Inter, Arial, sans-serif"
              fill={textClr(color)} style={{ pointerEvents: 'none' }}
            >
              {emotion.intensities[2].name}
            </text>
          );
        })}

        {/* ── Ring 4 — outer sub-emotion labels ── */}
        {CORE_EMOTIONS.map((emotion) => {
          const ca = emotion.centerAngle;
          const a1 = ca - 20, a2 = ca + 20;
          const outer = emotion.outer || [];
          const color = emotion.ringColors?.[3] || '#f0f0f0';
          return outer.map((word, idx) => {
            const sa = idx === 0 ? a1 : ca;
            const ea = idx === 0 ? ca : a2;
            const { x, y, angle } = midPt(R.r3, R.r4, sa, ea);
            return (
              <text key={`r4-${emotion.id}-${idx}`}
                x={x} y={y} textAnchor="middle" dominantBaseline="central"
                transform={`rotate(${textRot(angle)},${x},${y})`}
                fontSize="9" fontFamily="Inter, Arial, sans-serif"
                fill={textClr(color)} style={{ pointerEvents: 'none' }}
              >
                {word}
              </text>
            );
          });
        })}

        {/* ── Blend zone labels (center of each blend) ── */}
        {BLEND_EMOTIONS.map((blend) => {
          const a1 = blend.blendAngle, a2 = blend.blendAngle + 5;
          // Only show on hover to avoid clutter in narrow zones
          if (hoverId !== blend.id) return null;
          const { x, y } = midPt(R.r1, R.r3, a1, a2);
          const angle = (a1 + a2) / 2;
          return (
            <text key={`blend-lbl-${blend.id}`}
              x={x} y={y} textAnchor="middle" dominantBaseline="central"
              transform={`rotate(${textRot(angle)},${x},${y})`}
              fontSize="9" fontWeight="600" fontFamily="Inter, Arial, sans-serif"
              fill="white" style={{ pointerEvents: 'none' }}
            >
              {blend.name}
            </text>
          );
        })}

        {/* ── Ring divider lines ── */}
        {[R.r1, R.r2, R.r3, R.r4].map(r => (
          <circle key={`ring-${r}`} cx={CX} cy={CY} r={r}
            fill="none" stroke="white" strokeWidth="1.5" />
        ))}

        {/* ── Center white circle ── */}
        <circle cx={CX} cy={CY} r={R.hole} fill="white" stroke="white" strokeWidth="1" />
        <text x={CX} y={CY - 9} textAnchor="middle" dominantBaseline="central"
          fontSize="13" fontWeight="800" fontFamily="Inter, Arial, sans-serif" fill="#1e293b"
          style={{ pointerEvents: 'none' }}>Emo</text>
        <text x={CX} y={CY + 9} textAnchor="middle" dominantBaseline="central"
          fontSize="13" fontWeight="800" fontFamily="Inter, Arial, sans-serif" fill="#1e293b"
          style={{ pointerEvents: 'none' }}>Wheel</text>

        {/* ── Hover tooltip ── */}
        {hoverId && (() => {
          const seg = segments.find(s => s.id === hoverId);
          if (!seg) return null;
          const { x, y } = seg.mid;
          const dx = x - CX, dy = y - CY;
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          const tx = x + (dx / len) * 22, ty = y + (dy / len) * 22;
          const w = Math.max(60, seg.name.length * 7 + 16);
          return (
            <g style={{ pointerEvents: 'none' }}>
              <rect x={tx - w / 2} y={ty - 13} width={w} height={22}
                rx="5" fill="rgba(15,23,42,0.88)" />
              <text x={tx} y={ty + 1} textAnchor="middle" dominantBaseline="central"
                fontSize="10" fontWeight="500" fontFamily="Inter, Arial, sans-serif" fill="white">
                {seg.name}
              </text>
            </g>
          );
        })()}
      </svg>
    </div>
  );
}
