import { useId } from 'react';
import { dk, lt } from './Cutout.jsx';

/* Stylised fashion-illustration figures (faceless, natural pose, flowing fabric). viewBox 0 0 120 300 */

const Defs = ({ id, skin, hair, top, bot, accent, hairless }) => (
  <defs>
    <linearGradient id={`${id}sk`} x1="0" x2="1">
      <stop offset="0" stopColor={dk(skin, 0.18)} />
      <stop offset=".4" stopColor={lt(skin, 0.12)} />
      <stop offset="1" stopColor={dk(skin, 0.24)} />
    </linearGradient>
    <radialGradient id={`${id}hd`} cx="40%" cy="34%" r="75%">
      <stop offset="0" stopColor={lt(skin, 0.22)} />
      <stop offset="1" stopColor={dk(skin, 0.16)} />
    </radialGradient>
    <linearGradient id={`${id}hr`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor={lt(hair, 0.3)} />
      <stop offset=".5" stopColor={hair} />
      <stop offset="1" stopColor={dk(hair, 0.5)} />
    </linearGradient>
    <linearGradient id={`${id}tp`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor={lt(top, 0.3)} />
      <stop offset=".5" stopColor={top} />
      <stop offset="1" stopColor={dk(top, 0.4)} />
    </linearGradient>
    <linearGradient id={`${id}bt`} x1="0" x2="1">
      <stop offset="0" stopColor={dk(bot, 0.5)} />
      <stop offset=".28" stopColor={lt(bot, 0.22)} />
      <stop offset=".6" stopColor={bot} />
      <stop offset="1" stopColor={dk(bot, 0.5)} />
    </linearGradient>
    <linearGradient id={`${id}gd`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor={lt(accent, 0.55)} />
      <stop offset=".5" stopColor={accent} />
      <stop offset="1" stopColor={dk(accent, 0.4)} />
    </linearGradient>
    <linearGradient id={`${id}fold`} x1="0" x2="1">
      <stop offset="0" stopColor="#000" stopOpacity=".28" />
      <stop offset=".22" stopColor="#000" stopOpacity="0" />
      <stop offset=".42" stopColor="#fff" stopOpacity=".26" />
      <stop offset=".6" stopColor="#fff" stopOpacity="0" />
      <stop offset="1" stopColor="#000" stopOpacity=".32" />
    </linearGradient>
    <pattern id={`${id}zari`} width="8" height="8" patternUnits="userSpaceOnUse">
      <path d="M4 1l1.5 3L4 7 2.5 4z" fill={accent} opacity=".85" />
      <circle cx="0" cy="0" r=".7" fill={accent} />
      <circle cx="8" cy="8" r=".7" fill={accent} />
    </pattern>
    <pattern id={`${id}seq`} width="4.6" height="4.6" patternUnits="userSpaceOnUse">
      <circle cx="2.3" cy="2.3" r=".9" fill="#fff" opacity=".8" />
    </pattern>
  </defs>
);

/* ───────── woman ───────── */
export function Woman({ outfit = 'lehenga', top = '#c2185b', bottom, accent = '#f2c14e', dupatta, skin = '#cf9a70', hair = '#1d1410', bun, className = '', style }) {
  const id = `fw${useId().replace(/:/g, '')}`;
  const bot = bottom || top;
  const U = (n) => `url(#${id}${n})`;
  const dup = dupatta || lt(top, 0.2);

  /* head, neck, hair, arms */
  const hairBack = bun ? (
    <path d="M47 16C45 2 75 2 73 16c1 8-2 12-4 14H51c-2-2-5-6-4-14z" fill={U('hr')} />
  ) : (
    <path d="M46 17C42 0 78 0 74 17c6 20 5 46-2 74-6 4-18 4-24 0-7-28-8-54-2-74z" fill={U('hr')} />
  );
  const head = (
    <g>
      {bun && <ellipse cx="60" cy="3.5" rx="7.5" ry="6" fill={U('hr')} />}
      <path d="M54.5 30h11l1.4 17-7 5-7-5z" fill={U('sk')} />
      <ellipse cx="49.3" cy="20.5" rx="2" ry="3.2" fill={dk(skin, 0.1)} />
      <ellipse cx="70.7" cy="20.5" rx="2" ry="3.2" fill={dk(skin, 0.1)} />
      <path d="M60 5.5C52 5.5 49 12 49.6 20c.6 8 5 15 10.4 15s9.8-7 10.4-15C71 12 68 5.5 60 5.5z" fill={U('hd')} />
      <path d="M48.6 21C46 0 74 0 71.4 21 69 12 65 8 60 8c-5 0-9 4-11.4 13z" fill={U('hr')} />
      <path d="M56 30q4 3 8 0" stroke={dk(skin, 0.3)} strokeWidth=".6" fill="none" opacity=".5" />
    </g>
  );
  const shoulders = <path d="M41 50q19-8 38 0l-1 14q-18 7-36 0z" fill={U('sk')} />;
  const armL = (
    <g stroke={U('sk')} strokeLinecap="round" fill="none">
      <path d="M41 54Q31 74 34 96" strokeWidth="7.5" />
      <path d="M34 96Q35 116 40 134" strokeWidth="6.2" />
      <ellipse cx="41" cy="140" rx="3.6" ry="6" fill={skin} stroke="none" transform="rotate(8 41 140)" />
    </g>
  );
  const armR = (
    <g stroke={U('sk')} strokeLinecap="round" fill="none">
      <path d="M79 54Q89 74 86 96" strokeWidth="7.5" />
      <path d="M86 96Q96 104 82 114" strokeWidth="6.2" />
      <ellipse cx="80" cy="115" rx="4.6" ry="3.3" fill={skin} stroke="none" transform="rotate(-20 80 115)" />
    </g>
  );
  const midriff = <path d="M45 88q15 6 30 0l1.5 18q-16.5 7-33 0z" fill={U('sk')} />;

  const choli = (cut = 'v') => (
    <g>
      <path d="M43 51q17-8 34 0l2 12q-1 14-2 26q-17 6-34 0-1-12-2-26z" fill={U('tp')} />
      <path d="M43 51q17-8 34 0l2 12q-1 14-2 26q-17 6-34 0-1-12-2-26z" fill={U('zari')} opacity=".5" />
      <path d="M43 51q17-8 34 0l2 12q-1 14-2 26q-17 6-34 0-1-12-2-26z" fill={U('fold')} />
      {cut === 'v' ? <path d="M51 50L60 72 69 50z" fill={U('sk')} /> : <path d="M50 50q4 14 10 8 6 6 10-8z" fill={U('sk')} />}
      <path d={cut === 'v' ? 'M51 50L60 72 69 50' : 'M50 50q4 14 10 8 6 6 10-8'} stroke={U('gd')} strokeWidth="1.4" fill="none" />
      <path d="M44 88q16 7 32 0" stroke={U('gd')} strokeWidth="2.2" fill="none" />
      <path d="M41 52c-7 7-8 20-6 33l9-2c-1-10 0-20 4-29zM79 52c7 7 8 20 6 33l-9-2c1-10 0-20-4-29z" fill={U('tp')} />
      <path d="M35 85h9M76 85h9" stroke={U('gd')} strokeWidth="2.4" />
    </g>
  );
  const jewel = <path d="M51 49q9 14 18 0" stroke={U('gd')} strokeWidth="1.5" fill="none" />;

  const lehenga = () => (
    <g>
      {midriff}
      <path d="M43 102Q38 140 31 182Q18 232 6 288H114Q102 232 89 182Q82 140 77 102Z" fill={U('bt')} />
      <path d="M43 102Q38 140 31 182Q18 232 6 288H114Q102 232 89 182Q82 140 77 102Z" fill={U('zari')} opacity=".3" />
      {[158, 206, 252].map((y, k) => {
        const lx = 43 - (y - 102) * 0.21;
        return (
          <g key={y}>
            <path d={`M${lx} ${y}Q60 ${y + 7} ${120 - lx} ${y}l-1.5 8Q60 ${y + 15} ${lx + 1.5} ${y + 8}z`} fill={U('gd')} />
            <path d={`M${lx + 2} ${y + 11}Q60 ${y + 18} ${118 - lx} ${y + 11}`} stroke={accent} strokeWidth="1" strokeDasharray="1.8 1.6" fill="none" />
          </g>
        );
      })}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path key={i} d={`M${46 + i * 4.6} 108Q${40 + i * 6.7 - (i - 3) * 2} 200 ${12 + i * 16} 286`} stroke={dk(bot, 0.6)} strokeWidth=".8" fill="none" opacity=".4" />
      ))}
      <path d="M43 102Q38 140 31 182Q18 232 6 288H114Q102 232 89 182Q82 140 77 102Z" fill={U('fold')} />
      <path d="M43 99h34l1 7H42z" fill={U('gd')} />
      {choli('sweet')}
      {jewel}
      <g className="fig-dupatta">
        <path d="M78 51Q100 86 96 140Q93 196 106 246l-14 5Q82 196 84 142Q86 100 70 70z" fill={dup} opacity=".82" />
        <path d="M78 51Q100 86 96 140Q93 196 106 246" stroke={U('gd')} strokeWidth="2.4" fill="none" />
        <path d="M44 58Q58 88 76 74" stroke={dup} strokeWidth="5" fill="none" opacity=".9" />
      </g>
    </g>
  );

  const saree = () => (
    <g>
      {midriff}
      <path d="M44 104Q40 142 35 190Q28 240 20 288H100Q92 240 85 190Q80 142 77 104Z" fill={U('bt')} />
      {Array.from({ length: 9 }).map((_, i) => (
        <path key={i} d={`M${47 + i * 3.2} 110Q${44 + i * 4.4} 200 ${24 + i * 8.6} 286`} stroke={dk(bot, 0.6)} strokeWidth="1" fill="none" opacity=".55" />
      ))}
      <path d="M44 104Q40 142 35 190Q28 240 20 288H100Q92 240 85 190Q80 142 77 104Z" fill={U('fold')} />
      <path d="M44 104Q40 142 35 190Q28 240 20 288H100Q92 240 85 190Q80 142 77 104Z" fill={U('zari')} opacity=".28" />
      <path d="M20.5 270H99.5L100 288H20z" fill={U('gd')} />
      <path d="M21 276H99M21 282H99" stroke={dk(accent, 0.5)} strokeWidth=".8" strokeDasharray="2 1.6" />
      {choli('v')}
      {jewel}
      {/* wrap across the hip, then pallu over the left shoulder falling down the back-right */}
      <path d="M43 103Q62 122 88 108l6 38-34 4-18-38z" fill={U('bt')} />
      <path d="M43 103Q62 122 88 108" stroke={U('gd')} strokeWidth="2.4" fill="none" />
      <g className="fig-dupatta">
        <path d="M38 52l14-3 16 30q16 24 30 38 8 40 8 98l-24 6q2-60-8-96-14-22-28-38z" fill={U('bt')} />
        <path d="M92 236l-2 20" stroke={U('gd')} strokeWidth="3" />
        <path d="M38 52l14-3 16 30q16 24 30 38 8 40 8 98l-24 6q2-60-8-96-14-22-28-38z" fill={U('zari')} opacity=".4" />
        <path d="M38 52l14-3 16 30q16 24 30 38 8 40 8 98" stroke={U('gd')} strokeWidth="3.2" fill="none" />
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M${48 + i * 7} ${62 + i * 12}q9 14 ${10 + i * 3} 40`} stroke={dk(bot, 0.55)} strokeWidth=".9" fill="none" opacity=".5" />
        ))}
      </g>
    </g>
  );

  const gown = () => (
    <g>
      <path d="M45 92Q42 124 41 154Q38 196 30 234Q18 264 5 288H115Q102 264 90 234Q82 196 79 154Q78 124 75 92Z" fill={U('bt')} />
      <path d="M45 92Q42 124 41 154Q38 196 30 234Q18 264 5 288H115Q102 264 90 234Q82 196 79 154Q78 124 75 92Z" fill={U('seq')} opacity=".55" />
      <path d="M45 92Q42 124 41 154Q38 196 30 234Q18 264 5 288H115Q102 264 90 234Q82 196 79 154Q78 124 75 92Z" fill={U('fold')} />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${50 + i * 5} 170Q${44 + i * 8} 230 ${28 + i * 15} 286`} stroke={dk(bot, 0.55)} strokeWidth=".8" fill="none" opacity=".4" />
      ))}
      <path d="M43 52q17-7 34 0l1 14q-1 12-2 24q-16 6-32 0-1-12-2-24z" fill={U('tp')} />
      <path d="M43 52q17-7 34 0l1 14q-1 12-2 24q-16 6-32 0-1-12-2-24z" fill={U('seq')} opacity=".6" />
      <path d="M43 52q17 10 34 0" fill={U('sk')} />
      <path d="M43 52q17 10 34 0" stroke={U('gd')} strokeWidth="1.6" fill="none" />
      <path d="M44 90q16 7 32 0" stroke={U('gd')} strokeWidth="2.6" fill="none" />
      {jewel}
      <g className="fig-dupatta">
        <path d="M78 50c14 22 18 70 10 130l14-2c6-62 2-106-14-134z" fill={dup} opacity=".5" />
      </g>
    </g>
  );

  const sharara = () => (
    <g>
      <path d="M44 106h16l-3 182H12C26 232 38 168 44 106z" fill={U('bt')} />
      <path d="M60 106h16c6 62 18 126 32 182H63z" fill={U('bt')} />
      <path d="M44 106h16l-3 182H12C26 232 38 168 44 106zM60 106h16c6 62 18 126 32 182H63z" fill={U('fold')} />
      <path d="M12 268h45l-.5 20H12zM63 268h45l-1 20H63z" fill={U('gd')} />
      <path d="M13 262h44M63 262h44" stroke={accent} strokeWidth="1" strokeDasharray="1.6 1.6" />
      <path d="M43 103h34l1 8H42z" fill={U('gd')} />
      <path d="M42 50q18-8 36 0l6 40 2 22q-26 8-52 0l2-22z" fill={U('tp')} />
      <path d="M42 50q18-8 36 0l6 40 2 22q-26 8-52 0l2-22z" fill={U('zari')} opacity=".55" />
      <path d="M42 50q18-8 36 0l6 40 2 22q-26 8-52 0l2-22z" fill={U('fold')} />
      <path d="M52 50q8 16 16 0" fill={U('sk')} />
      <path d="M52 50q8 16 16 0" stroke={U('gd')} strokeWidth="1.5" fill="none" />
      <path d="M40 110q20 7 40 0" stroke={U('gd')} strokeWidth="2.4" fill="none" />
      <path d="M41 52c-8 8-9 24-7 40l9-2c-1-12 0-24 5-34zM79 52c8 8 9 24 7 40l-9-2c1-12 0-24-5-34z" fill={U('tp')} />
      {jewel}
      <g className="fig-dupatta">
        <path d="M44 58C32 98 28 150 33 204l15 3c-4-52 0-98 8-140z" fill={dup} opacity=".78" />
        <path d="M44 58C32 98 28 150 33 204" stroke={U('gd')} strokeWidth="2" fill="none" />
      </g>
    </g>
  );

  const outfits = { saree, lehenga, gown, sharara };
  return (
    <svg className={`cut ${className}`} style={style} viewBox="0 0 120 300" aria-hidden="true">
      <Defs id={id} skin={skin} hair={hair} top={top} bot={bot} accent={accent} />
      <ellipse cx="60" cy="291" rx="46" ry="4" fill="#000" opacity=".22" />
      {hairBack}
      {shoulders}
      {armL}
      {armR}
      {(outfits[outfit] || lehenga)()}
      {head}
      <path d="M32 288h16M72 288h16" stroke="#3a281c" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* ───────── man ───────── */
export function Man({ top = '#1c8f84', bottom = '#f1e6cf', accent = '#f2c14e', stole, skin = '#cf9a70', hair = '#17100c', className = '', style }) {
  const id = `fm${useId().replace(/:/g, '')}`;
  const U = (n) => `url(#${id}${n})`;
  return (
    <svg className={`cut ${className}`} style={style} viewBox="0 0 120 300" aria-hidden="true">
      <Defs id={id} skin={skin} hair={hair} top={top} bot={bottom} accent={accent} />
      <ellipse cx="60" cy="291" rx="40" ry="4" fill="#000" opacity=".22" />
      {/* churidar legs */}
      <path d="M44 196h16l-2 84H46z" fill={U('bt')} />
      <path d="M60 196h16l-2 84H62z" fill={U('bt')} />
      <path d="M44 196h16l-2 84H46zM60 196h16l-2 84H62z" fill={U('fold')} />
      {[236, 246, 256, 266].map((y) => (
        <path key={y} d={`M46 ${y}q6 3 12 0M62 ${y}q6 3 12 0`} stroke="#000" strokeOpacity=".16" strokeWidth=".8" fill="none" />
      ))}
      {/* mojari */}
      <path d="M40 280h20q5 2 7 9H38z" fill="#6b3a1c" />
      <path d="M80 280H60q-5 2-7 9h31z" fill="#6b3a1c" />
      <path d="M42 284h16M62 284h16" stroke={U('gd')} strokeWidth="1.2" strokeDasharray="1.6 1.4" />
      {/* arms (sleeves) */}
      <g stroke={U('tp')} strokeLinecap="round" fill="none">
        <path d="M37 52Q26 84 27 118" strokeWidth="12" />
        <path d="M27 118Q27 134 31 150" strokeWidth="10" />
        <path d="M83 52Q94 84 93 116" strokeWidth="12" />
        <path d="M93 116Q96 130 92 148" strokeWidth="10" />
      </g>
      <path d="M24 144h14M82 142h14" stroke={U('gd')} strokeWidth="2.6" />
      <ellipse cx="31" cy="156" rx="4.4" ry="6.4" fill={U('sk')} />
      <ellipse cx="91" cy="154" rx="4.4" ry="6.4" fill={U('sk')} />
      {/* sherwani */}
      <path d="M35 52Q60 42 85 52L90 112Q92 162 96 208Q60 220 24 208Q28 162 30 112Z" fill={U('tp')} />
      <path d="M35 52Q60 42 85 52L90 112Q92 162 96 208Q60 220 24 208Q28 162 30 112Z" fill={U('zari')} opacity=".45" />
      <path d="M35 52Q60 42 85 52L90 112Q92 162 96 208Q60 220 24 208Q28 162 30 112Z" fill={U('fold')} />
      <path d="M60 56v156" stroke="#000" strokeOpacity=".35" strokeWidth="1" />
      {[78, 100, 122, 144, 166, 188].map((y) => (
        <g key={y}>
          <circle cx="60" cy={y} r="2.5" fill={U('gd')} />
          <circle cx="60" cy={y} r=".9" fill={dk(accent, 0.5)} />
        </g>
      ))}
      <path d="M40 70q9 16 15 32M80 70q-9 16-15 32M38 128q12 20 20 40M82 128q-12 20-20 40" stroke={U('gd')} strokeWidth="1.1" fill="none" strokeDasharray="2 1.6" />
      <path d="M26 200q34 10 68 0" stroke={U('gd')} strokeWidth="5" fill="none" />
      <path d="M70 76l9-2 1 7-10 1z" fill={lt(accent, 0.65)} />
      {stole && (
        <g className="fig-dupatta">
          <path d="M72 48Q92 80 88 130L84 200l14 2q4-60 2-92Q96 70 76 44z" fill={stole} opacity=".95" />
          <path d="M72 48Q92 80 88 130L84 200" stroke={U('gd')} strokeWidth="2" fill="none" />
        </g>
      )}
      {/* neck + head + hair */}
      <path d="M52 32h16l2 20-10 6-10-6z" fill={U('sk')} />
      <path d="M47 52l13 12 13-12 4 6-17 10-17-10z" fill={dk(top, 0.18)} stroke={U('gd')} strokeWidth="1.2" />
      <ellipse cx="48.2" cy="20.5" rx="2.2" ry="3.4" fill={dk(skin, 0.1)} />
      <ellipse cx="71.8" cy="20.5" rx="2.2" ry="3.4" fill={dk(skin, 0.1)} />
      <path d="M60 5.5C51 5.5 48.5 12 49 21c.6 8.5 5.4 15 11 15s10.4-6.5 11-15c.5-9-2-15.5-11-15.5z" fill={U('hd')} />
      <path d="M47.4 22C43 -3 77 -3 72.6 22 70.5 13 66 9 60 9c-6 0-10.5 4-12.6 13z" fill={U('hr')} />
      <ellipse cx="60" cy="6" rx="12" ry="5" fill={U('hr')} />
      <path d="M52 8q10-4 20 1" stroke={lt(hair, 0.5)} strokeWidth="1" fill="none" opacity=".5" />
    </svg>
  );
}
