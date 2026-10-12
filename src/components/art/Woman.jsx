import { useId } from 'react';
import { dk, lt } from './Cutout.jsx';

/**
 * Detailed fashion mannequin (viewBox 120x300).
 * outfit: saree | lehenga | gown | sharara
 */
export default function Woman({ outfit = 'lehenga', top = '#c2185b', bottom, accent = '#f2c14e', dupatta, className = '', style }) {
  const uid = useId().replace(/:/g, '');
  const bot = bottom || top;
  const id = `w${uid}`;
  const U = (n) => `url(#${id}${n})`;
  const skin = '#f1e8d6';

  const defs = (
    <defs>
      <linearGradient id={`${id}sk`} x1="0" x2="1">
        <stop offset="0" stopColor={dk(skin, 0.16)} />
        <stop offset=".45" stopColor="#fffaf0" />
        <stop offset="1" stopColor={dk(skin, 0.2)} />
      </linearGradient>
      <radialGradient id={`${id}hd`} cx="38%" cy="32%" r="75%">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset=".6" stopColor="#efe6d2" />
        <stop offset="1" stopColor="#c9bda5" />
      </radialGradient>
      <linearGradient id={`${id}tp`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={lt(top, 0.28)} />
        <stop offset=".5" stopColor={top} />
        <stop offset="1" stopColor={dk(top, 0.38)} />
      </linearGradient>
      <linearGradient id={`${id}bt`} x1="0" x2="1">
        <stop offset="0" stopColor={dk(bot, 0.42)} />
        <stop offset=".3" stopColor={lt(bot, 0.2)} />
        <stop offset=".55" stopColor={bot} />
        <stop offset="1" stopColor={dk(bot, 0.45)} />
      </linearGradient>
      <linearGradient id={`${id}gd`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={lt(accent, 0.5)} />
        <stop offset=".5" stopColor={accent} />
        <stop offset="1" stopColor={dk(accent, 0.35)} />
      </linearGradient>
      <linearGradient id={`${id}sheen`} x1="0" x2="1">
        <stop offset="0" stopColor="#fff" stopOpacity="0" />
        <stop offset=".35" stopColor="#fff" stopOpacity=".28" />
        <stop offset=".5" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <pattern id={`${id}zari`} width="9" height="9" patternUnits="userSpaceOnUse">
        <path d="M4.5 1.2l1.6 3.3-1.6 3.3-1.6-3.3z" fill={accent} opacity=".9" />
        <circle cx="0" cy="0" r=".7" fill={accent} />
        <circle cx="9" cy="9" r=".7" fill={accent} />
      </pattern>
      <pattern id={`${id}seq`} width="5" height="5" patternUnits="userSpaceOnUse">
        <circle cx="2.5" cy="2.5" r=".95" fill="#fff" opacity=".75" />
      </pattern>
    </defs>
  );

  /* ── mannequin body ── */
  const arms = (
    <g>
      <path d="M41 58C32 78 28 108 31 140l7 1C38 112 41 86 47 66z" fill={U('sk')} />
      <path d="M79 58C88 78 92 108 89 140l-7 1C82 112 79 86 73 66z" fill={U('sk')} />
      <ellipse cx="34" cy="146" rx="4.4" ry="7" fill={U('sk')} />
      <ellipse cx="86" cy="146" rx="4.4" ry="7" fill={U('sk')} />
    </g>
  );
  const neckHead = (
    <g>
      <path d="M53 36h14l1.6 20-9 6-9-6z" fill={U('sk')} />
      <ellipse cx="60" cy="23" rx="10.5" ry="14.5" fill={U('hd')} />
      <path d="M54 36q6 3 12 0" stroke="#bfb297" strokeWidth=".7" fill="none" opacity=".7" />
    </g>
  );
  const torso = <path d="M43 58q17-7 34 0l-3 22q3 14 0 28H46q-3-14 0-28z" fill={U('sk')} />;

  /* ── outfits ── */
  const choli = (len = 98) => (
    <g>
      <path d={`M42 60q18-8 36 0l1 ${len - 62}q-19 7-38 0z`} fill={U('tp')} />
      <path d={`M42 60q18-8 36 0l1 ${len - 62}q-19 7-38 0z`} fill={U('zari')} opacity=".55" />
      <path d="M48 58q12 20 24 0" stroke={U('gd')} strokeWidth="1.8" fill="none" />
      <path d="M46 62q14 24 28 0" fill={U('sk')} />
      <path d={`M42 ${len - 2}q18 6 36 0`} stroke={U('gd')} strokeWidth="2" fill="none" />
      <path d="M42 60C36 70 35 80 36 90l9-2c-1-8 0-16 3-24z" fill={U('tp')} />
      <path d="M78 60c6 10 7 20 6 30l-9-2c1-8 0-16-3-24z" fill={U('tp')} />
      <path d="M36 88h9M75 88h9" stroke={U('gd')} strokeWidth="2.2" />
    </g>
  );

  const necklace = <path d="M51 56q9 16 18 0" stroke={U('gd')} strokeWidth="1.6" fill="none" />;

  const lehenga = () => (
    <g>
      {/* skirt */}
      <path d="M45 106h30c14 46 32 112 40 182H5c8-70 26-136 40-182z" fill={U('bt')} />
      {Array.from({ length: 11 }).map((_, i) => {
        const x0 = 46 + i * 2.8;
        const x1 = 7 + i * 10.6;
        return <path key={i} d={`M${x0} 110Q${(x0 + x1) / 2 + (i - 5) * 1.4} 200 ${x1} 286`} stroke={dk(bot, 0.55)} strokeWidth=".7" fill="none" opacity=".35" />;
      })}
      {/* tiers: embroidered bands that follow the skirt's flare */}
      {[170, 218, 262].map((y) => {
        const L = 45 - (y - 106) * 0.22;
        const R = 120 - L;
        const L2 = 45 - (y + 8 - 106) * 0.22;
        return (
          <g key={y}>
            <path d={`M${L} ${y}H${R}L${120 - L2} ${y + 8}H${L2}z`} fill={U('gd')} />
            <path d={`M${L2} ${y + 11}H${120 - L2}`} stroke={accent} strokeWidth="1.1" strokeDasharray="1.8 1.6" />
            <path d={`M${L} ${y}H${R}`} stroke={dk(accent, 0.45)} strokeWidth=".7" />
          </g>
        );
      })}
      <path d="M45 106h30c14 46 32 112 40 182H5c8-70 26-136 40-182z" fill={U('zari')} opacity=".35" />
      <path d="M45 106h30c14 46 32 112 40 182H5c8-70 26-136 40-182z" fill={U('sheen')} />
      {/* waist + midriff */}
      <path d="M44 96h32l1 12H43z" fill={U('sk')} />
      <path d="M43 104h34l1 6H42z" fill={U('gd')} />
      {choli()}
      {necklace}
      {/* dupatta over one shoulder */}
      <g className="fig-dupatta">
        <path d="M44 60C32 96 26 150 30 218l16 3c-4-52 0-100 8-146z" fill={dupatta || lt(top, 0.15)} opacity=".88" />
        <path d="M44 60C32 96 26 150 30 218" stroke={U('gd')} strokeWidth="2.4" fill="none" />
        <path d="M44 60C32 96 26 150 30 218l16 3c-4-52 0-100 8-146z" fill={U('zari')} opacity=".4" />
        <path d="M44 62Q62 84 84 76l2 8Q62 98 42 70z" fill={dupatta || lt(top, 0.15)} opacity=".9" />
      </g>
    </g>
  );

  const saree = () => (
    <g>
      {/* petticoat skirt */}
      <path d="M46 106h28c10 52 20 120 26 182H20c6-62 16-130 26-182z" fill={U('bt')} />
      {/* front pleats */}
      {Array.from({ length: 7 }).map((_, i) => (
        <path key={i} d={`M${50 + i * 3.4} 112q${-2 + i * 2.2} 90 ${-2 + i * 6.4} 174`} stroke={dk(bot, 0.55)} strokeWidth="1.1" fill="none" opacity=".55" />
      ))}
      <path d="M46 106h28c10 52 20 120 26 182H20c6-62 16-130 26-182z" fill={U('sheen')} />
      <path d="M46 106h28c10 52 20 120 26 182H20c6-62 16-130 26-182z" fill={U('zari')} opacity=".28" />
      {/* hem border */}
      <path d="M20.6 270h78.8l.6 18H20z" fill={U('gd')} />
      <path d="M21 276h78M21 282h78" stroke={dk(accent, 0.45)} strokeWidth=".8" strokeDasharray="2 1.6" />
      {/* waist, blouse */}
      <path d="M44 96h32l1 12H43z" fill={U('sk')} />
      {choli(96)}
      {necklace}
      {/* wrap over the hip */}
      <path d="M43 104Q60 118 86 108l8 42-34-6-20-34z" fill={U('bt')} opacity=".9" />
      <path d="M43 104Q60 118 86 108" stroke={U('gd')} strokeWidth="2.2" fill="none" />
      {/* pallu: over the left shoulder, across and down the back */}
      <g className="fig-dupatta">
        <path d="M40 58l14-2 20 40 30 50 4 70-22 8-10-60-26-50-16-30z" fill={U('bt')} />
        <path d="M40 58l14-2 20 40 30 50 4 70-22 8-10-60-26-50-16-30z" fill={U('zari')} opacity=".4" />
        <path d="M40 58l14-2 20 40 30 50 4 70" stroke={U('gd')} strokeWidth="3" fill="none" />
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M${46 + i * 8} ${66 + i * 14}q10 16 ${12 + i * 3} 44`} stroke={dk(bot, 0.5)} strokeWidth=".8" fill="none" opacity=".5" />
        ))}
        <path d="M100 196l4 70-22 8" stroke={U('gd')} strokeWidth="5" fill="none" />
      </g>
    </g>
  );

  const gown = () => (
    <g>
      <path d="M46 100c-3 22-5 42-8 62 10 40 8 74-22 126h88c-30-52-32-86-22-126-3-20-5-40-8-62z" fill={U('bt')} />
      <path d="M46 100c-3 22-5 42-8 62 10 40 8 74-22 126h88c-30-52-32-86-22-126-3-20-5-40-8-62z" fill={U('seq')} opacity=".55" />
      <path d="M46 100c-3 22-5 42-8 62 10 40 8 74-22 126h88c-30-52-32-86-22-126-3-20-5-40-8-62z" fill={U('sheen')} />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${52 + i * 4} 170Q${48 + i * 6} 230 ${34 + i * 13} 286`} stroke={dk(bot, 0.5)} strokeWidth=".8" fill="none" opacity=".4" />
      ))}
      <path d="M16 276h88v12H16z" fill={U('gd')} opacity=".8" />
      <path d="M42 58q18-9 36 0l-1 46q-17 6-34 0z" fill={U('tp')} />
      <path d="M42 58q18-9 36 0l-1 46q-17 6-34 0z" fill={U('seq')} opacity=".6" />
      <path d="M44 60q16 24 32 0" fill={U('sk')} />
      <path d="M44 60q16 24 32 0" stroke={U('gd')} strokeWidth="1.6" fill="none" />
      <path d="M42 100q18 8 36 0" stroke={U('gd')} strokeWidth="2.4" fill="none" />
      {necklace}
      <g className="fig-dupatta">
        <path d="M80 60c10 20 14 60 8 120l12-2c4-60 0-100-12-124z" fill={dupatta || lt(top, 0.25)} opacity=".6" />
      </g>
    </g>
  );

  const sharara = () => (
    <g>
      {/* flared palazzo / sharara legs */}
      <path d="M45 118h14l-8 170H8c12-52 28-110 37-170z" fill={U('bt')} />
      <path d="M61 118h14c9 60 25 118 37 170H69z" fill={U('bt')} />
      <path d="M45 118h14l-8 170H8c12-52 28-110 37-170zM61 118h14c9 60 25 118 37 170H69z" fill={U('sheen')} />
      <path d="M8 268h43l-1 20H8zM69 268h43l-1 20H69z" fill={U('gd')} />
      <path d="M9 262h42M69 262h42" stroke={accent} strokeWidth="1" strokeDasharray="1.6 1.6" />
      {/* kurti */}
      <path d="M42 58q18-9 36 0l5 36 3 46c-14 6-38 6-52 0l3-46z" fill={U('tp')} />
      <path d="M42 58q18-9 36 0l5 36 3 46c-14 6-38 6-52 0l3-46z" fill={U('zari')} opacity=".5" />
      <path d="M52 58q8 22 16 0" fill={U('sk')} />
      <path d="M52 58q8 22 16 0" stroke={U('gd')} strokeWidth="1.6" fill="none" />
      <path d="M36 138q24 8 48 0" stroke={U('gd')} strokeWidth="2.4" fill="none" />
      <path d="M42 60c-6 12-6 26-4 38l8-2c-1-10 0-22 4-32zM78 60c6 12 6 26 4 38l-8-2c1-10 0-22-4-32z" fill={U('tp')} />
      {necklace}
      <g className="fig-dupatta">
        <path d="M44 62C34 100 30 150 34 200l14 2c-4-50 0-96 8-136z" fill={dupatta || lt(top, 0.3)} opacity=".78" />
      </g>
    </g>
  );

  const body = { saree, lehenga, gown, sharara }[outfit] || lehenga;
  return (
    <svg className={`cut ${className}`} style={style} viewBox="0 0 120 300" aria-hidden="true">
      {defs}
      <ellipse cx="60" cy="291" rx="44" ry="4" fill="#000" opacity=".2" />
      {arms}
      {torso}
      {neckHead}
      {body()}
      <path d="M30 288h14M76 288h14" stroke="#4a3320" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
