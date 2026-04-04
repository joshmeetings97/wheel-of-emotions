import React, { useState, useMemo, useCallback } from 'react';
import { CORE_EMOTIONS, BLEND_EMOTIONS } from '../data/emotions';

// ─── Geometry ────────────────────────────────────────────────────────────────
const CX = 340, CY = 340;
const R = { hole: 52, r1: 120, r2: 193, r3: 261, r4: 328 };

// Each core emotion: ±18.5° around its centerAngle (= 37° sector)
// Each blend zone: 8° wide (start = emotion_end, end = next_emotion_start)
const HALF = 18.5;
const BLEND_SPAN = 8;

function toRad(d) { return d * Math.PI / 180; }
function pt(r, a)  { return { x: CX + r * Math.cos(toRad(a)), y: CY + r * Math.sin(toRad(a)) }; }

function wedge(r1, r2, a1, a2) {
  const s1 = pt(r1,a1), s2 = pt(r2,a1), e2 = pt(r2,a2), e1 = pt(r1,a2);
  let span = a2 - a1; if (span < 0) span += 360;
  const lg = span > 180 ? 1 : 0;
  return `M${s1.x},${s1.y} L${s2.x},${s2.y} A${r2},${r2} 0 ${lg} 1 ${e2.x},${e2.y} L${e1.x},${e1.y} A${r1},${r1} 0 ${lg} 0 ${s1.x},${s1.y}Z`;
}

function midPt(r1, r2, a1, a2) {
  return { ...pt((r1+r2)/2, (a1+a2)/2), angle:(a1+a2)/2 };
}

// Text reads radially outward; flip left-half to stay readable
function textRot(a) {
  const n = ((a % 360) + 360) % 360;
  return (n > 90 && n < 270) ? a + 180 : a;
}

// Dark or white text based on background luminance
function textClr(hex) {
  if (!hex || hex.length < 7) return '#1e293b';
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return (0.299*r + 0.587*g + 0.114*b)/255 > 0.58 ? '#1e293b' : '#ffffff';
}

// Auto-scale font so text length fits within available radial depth
function autoFont(text, radialPx, maxPx, minPx = 6) {
  const needed = text.length * maxPx * 0.62;
  if (needed <= radialPx) return maxPx;
  return Math.max(Math.floor(radialPx / (text.length * 0.62)), minPx);
}

// ─── Build segments ───────────────────────────────────────────────────────────
function buildSegments() {
  const segs = [];

  CORE_EMOTIONS.forEach((emotion) => {
    const ca = emotion.centerAngle;
    const a1 = ca - HALF, a2 = ca + HALF;
    const [c1,c2,c3,c4] = emotion.ringColors || [
      emotion.colors.intense, emotion.colors.core, emotion.colors.mild, '#f0f4f8',
    ];

    [
      { id:`${emotion.id}-intense`,  color:c1, r1:R.hole, r2:R.r1, name:emotion.intensities[0].name, level:'intense'  },
      { id:`${emotion.id}-moderate`, color:c2, r1:R.r1,   r2:R.r2, name:emotion.name,               level:'moderate' },
      { id:`${emotion.id}-mild`,     color:c3, r1:R.r2,   r2:R.r3, name:emotion.intensities[2].name, level:'mild'    },
    ].forEach(({ id,color,r1,r2,name,level }) => {
      segs.push({ id,type:'emotion',emotionId:emotion.id,level,name,color,a1,a2,r1,r2,
        path:wedge(r1,r2,a1,a2), mid:midPt(r1,r2,a1,a2) });
    });

    // Outer ring — 2 sub-segments; each extends BLEND_SPAN/2 into the adjacent blend gap
    // so the outer ring has no dead zones where clicks fall through to the background.
    (emotion.outer || []).forEach((outerObj, idx) => {
      const sa = idx === 0 ? a1 - BLEND_SPAN / 2 : ca;
      const ea = idx === 0 ? ca : a2 + BLEND_SPAN / 2;
      segs.push({ id:`${emotion.id}-outer-${idx}`, type:'emotion', emotionId:emotion.id,
        level:'mild', name:outerObj.name, color:c4,
        a1:sa, a2:ea, r1:R.r3, r2:R.r4,
        path:wedge(R.r3,R.r4,sa,ea), mid:midPt(R.r3,R.r4,sa,ea) });
    });
  });

  // Blend zones — span r1→r3 only (middle two rings).
  // This makes clear they are a compound of two adjacent emotions,
  // not a standalone emotion with their own full intensity range.
  // The inner core (hole→r1) and outer sub-emotions (r3→r4) stay pure.
  BLEND_EMOTIONS.forEach((blend) => {
    const a1 = blend.blendAngle, a2 = blend.blendAngle + BLEND_SPAN;
    segs.push({ id:blend.id, type:'blend', name:blend.name, color:blend.color,
      a1, a2, r1:R.r1, r2:R.r3,
      path:wedge(R.r1,R.r3,a1,a2), mid:midPt(R.r1,R.r3,a1,a2) });
  });

  return segs;
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function EmotionWheel({ onSelect, selectedId, pulseId }) {
  const [hoverId, setHoverId] = useState(null);
  const segments = useMemo(() => buildSegments(), []);

  const handleClick = useCallback((seg) => {
    if (seg.type === 'blend') {
      onSelect({ type:'blend', data:BLEND_EMOTIONS.find(b => b.id === seg.id) });
    } else {
      const emotion = CORE_EMOTIONS.find(e => e.id === seg.emotionId);
      const intensity = emotion?.intensities.find(i => i.level === seg.level)
                     || emotion?.intensities[2];
      // Outer ring segments have their own name (e.g. "Elated") distinct from the intensity name
      const isOuter = seg.id.includes('-outer-');
      onSelect({
        type: 'emotion',
        emotion,
        intensity,
        level: intensity?.level || 'mild',
        outerName: isOuter ? seg.name : undefined,
        segmentId: seg.id,
      });
    }
  }, [onSelect]);

  return (
    <div className="relative w-full max-w-[680px] mx-auto select-none"
      style={{ filter:'drop-shadow(0 4px 24px rgba(0,0,0,0.12))' }}>
      <svg viewBox="0 0 680 680" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          <style>{`
            .seg { cursor:pointer; transition:filter 0.15s; }
            .seg:hover { filter:brightness(0.88); }
            .seg:active { filter:brightness(0.80); }
            .seg:focus { outline:none; }
            @keyframes pulseRing {
              0%,100% { filter:brightness(1.1) drop-shadow(0 0 6px rgba(0,0,0,0.3)); }
              50%      { filter:brightness(1.25) drop-shadow(0 0 18px rgba(0,0,0,0.5)); }
            }
            .pulse { animation:pulseRing 1.4s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* ── Segments — unselected first, selected last so it renders on top ── */}
        {[...segments.filter(s => s.id !== selectedId), ...segments.filter(s => s.id === selectedId)].map((seg) => {
          const isSel   = seg.id === selectedId;
          const isPulse = seg.id === pulseId;
          // Scale selected segment outward from its midpoint for a clear "raised" look
          const SEL_SCALE = 1.045;
          const mx = seg.mid.x, my = seg.mid.y;
          const selTransform = isSel
            ? `translate(${mx * (1 - SEL_SCALE)}, ${my * (1 - SEL_SCALE)}) scale(${SEL_SCALE})`
            : undefined;
          return (
            <path key={seg.id} d={seg.path}
              fill={seg.color}
              stroke="white" strokeWidth={isSel ? 3.5 : 1.2} strokeLinejoin="round"
              className={`seg ${isPulse ? 'pulse' : ''}`}
              transform={selTransform}
              style={isSel ? { filter:'drop-shadow(0 4px 16px rgba(0,0,0,0.55)) brightness(1.12)' } : undefined}
              onClick={() => handleClick(seg)}
              onMouseEnter={() => setHoverId(seg.id)}
              onMouseLeave={() => setHoverId(null)}
              role="button" tabIndex={0} aria-label={seg.name}
              onKeyDown={e => e.key==='Enter' && handleClick(seg)}
            />
          );
        })}

        {/* ── Ring dividers ── */}
        {[R.r1,R.r2,R.r3,R.r4].map(r => (
          <circle key={r} cx={CX} cy={CY} r={r} fill="none" stroke="white" strokeWidth="1.5"/>
        ))}

        {/* ── Ring 1 labels (intense names) ── */}
        {CORE_EMOTIONS.map((e) => {
          const {a1,a2,r1,r2} = { a1:e.centerAngle-HALF, a2:e.centerAngle+HALF, r1:R.hole, r2:R.r1 };
          const {x,y,angle} = midPt(r1,r2,a1,a2);
          const name = e.intensities[0].name;
          const fs = autoFont(name, r2-r1, 9);
          return <text key={`r1-${e.id}`} x={x} y={y} textAnchor="middle" dominantBaseline="central"
            transform={`rotate(${textRot(angle)},${x},${y})`}
            fontSize={fs} fontWeight="600" fontFamily="Inter,Arial,sans-serif"
            fill={textClr(e.ringColors?.[0])} style={{pointerEvents:'none'}}>{name}</text>;
        })}

        {/* ── Ring 2 labels (core emotion names) ── */}
        {CORE_EMOTIONS.map((e) => {
          const {a1,a2,r1,r2} = { a1:e.centerAngle-HALF, a2:e.centerAngle+HALF, r1:R.r1, r2:R.r2 };
          const {x,y,angle} = midPt(r1,r2,a1,a2);
          const name = e.name.toUpperCase();
          const fs = autoFont(name, r2-r1, 10.5);
          return <text key={`r2-${e.id}`} x={x} y={y} textAnchor="middle" dominantBaseline="central"
            transform={`rotate(${textRot(angle)},${x},${y})`}
            fontSize={fs} fontWeight="700" fontFamily="Inter,Arial,sans-serif"
            fill={textClr(e.ringColors?.[1])} style={{pointerEvents:'none',letterSpacing:'0.02em'}}>{name}</text>;
        })}

        {/* ── Ring 3 labels (mild names) ── */}
        {CORE_EMOTIONS.map((e) => {
          const {a1,a2,r1,r2} = { a1:e.centerAngle-HALF, a2:e.centerAngle+HALF, r1:R.r2, r2:R.r3 };
          const {x,y,angle} = midPt(r1,r2,a1,a2);
          const name = e.intensities[2].name;
          const fs = autoFont(name, r2-r1, 9.5);
          return <text key={`r3-${e.id}`} x={x} y={y} textAnchor="middle" dominantBaseline="central"
            transform={`rotate(${textRot(angle)},${x},${y})`}
            fontSize={fs} fontFamily="Inter,Arial,sans-serif"
            fill={textClr(e.ringColors?.[2])} style={{pointerEvents:'none'}}>{name}</text>;
        })}

        {/* ── Ring 4 labels (outer sub-emotions) ── */}
        {CORE_EMOTIONS.map((e) => (e.outer||[]).map((outerObj, idx) => {
          const word = outerObj.name;
          const ca = e.centerAngle;
          const sa = idx===0 ? ca-HALF : ca;
          const ea = idx===0 ? ca : ca+HALF;
          const {x,y,angle} = midPt(R.r3,R.r4,sa,ea);
          const fs = autoFont(word, R.r4-R.r3, 8.5);
          return <text key={`r4-${e.id}-${idx}`} x={x} y={y} textAnchor="middle" dominantBaseline="central"
            transform={`rotate(${textRot(angle)},${x},${y})`}
            fontSize={fs} fontFamily="Inter,Arial,sans-serif"
            fill={textClr(e.ringColors?.[3])} style={{pointerEvents:'none'}}>{word}</text>;
        }))}

        {/* ── Blend zone labels (always visible, small) ── */}
        {BLEND_EMOTIONS.map((blend) => {
          const a1 = blend.blendAngle, a2 = blend.blendAngle + BLEND_SPAN;
          const {x,y,angle} = midPt(R.r1,R.r2,a1,a2);
          const fs = autoFont(blend.name, R.r2-R.r1, 7.5);
          return <text key={`blend-${blend.id}`} x={x} y={y} textAnchor="middle" dominantBaseline="central"
            transform={`rotate(${textRot(angle)},${x},${y})`}
            fontSize={fs} fontWeight="600" fontFamily="Inter,Arial,sans-serif"
            fill="white" style={{pointerEvents:'none'}}>{blend.name}</text>;
        })}

        {/* ── Center circle ── */}
        <circle cx={CX} cy={CY} r={R.hole} fill="white" stroke="white" strokeWidth="1"/>
        <text x={CX} y={CY-8} textAnchor="middle" dominantBaseline="central"
          fontSize="11" fontWeight="800" fontFamily="Inter,Arial,sans-serif" fill="#1e293b"
          style={{pointerEvents:'none'}}>Emotion</text>
        <text x={CX} y={CY+8} textAnchor="middle" dominantBaseline="central"
          fontSize="11" fontWeight="800" fontFamily="Inter,Arial,sans-serif" fill="#1e293b"
          style={{pointerEvents:'none'}}>Wheel</text>

        {/* ── Hover tooltip ── */}
        {hoverId && (() => {
          const seg = segments.find(s => s.id === hoverId);
          if (!seg) return null;
          const {x,y} = seg.mid;
          const dx=x-CX, dy=y-CY, len=Math.sqrt(dx*dx+dy*dy)||1;
          const tx=x+(dx/len)*24, ty=y+(dy/len)*24;
          const w = Math.max(60, seg.name.length*7+16);
          return <g style={{pointerEvents:'none'}}>
            <rect x={tx-w/2} y={ty-12} width={w} height={22} rx="5" fill="rgba(15,23,42,0.88)"/>
            <text x={tx} y={ty+1} textAnchor="middle" dominantBaseline="central"
              fontSize="10" fontWeight="500" fontFamily="Inter,Arial,sans-serif" fill="white">
              {seg.name}
            </text>
          </g>;
        })()}
      </svg>
    </div>
  );
}
