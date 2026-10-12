import { useId } from 'react';

const parse = (h) => {
  const n = parseInt(h.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const mix = (a, b, t) => {
  const [r1, g1, b1] = parse(a);
  const [r2, g2, b2] = parse(b);
  const c = (x, y) => Math.round(x + (y - x) * t);
  return `rgb(${c(r1, r2)},${c(g1, g2)},${c(b1, b2)})`;
};
export const dk = (c, t = 0.3) => mix(c, '#000000', t);
export const lt = (c, t = 0.3) => mix(c, '#ffffff', t);

/** Faceless fashion cutout (sticker style), viewBox 110×300. */
export default function Cutout({
  g = 'f',
  outfit = 'lehenga',
  top = '#c2185b',
  bottom,
  accent = '#e8c25a',
  stole,
  inner = '#f3ecdc',
  skin = '#d29a6e',
  hair = '#1c1310',
  beard,
  glasses,
  imageUrl,
  mannequin,
  className = '',
  style,
}) {
  const uid = useId().replace(/:/g, '');
  if (imageUrl) return <img className={`cut ${className}`} style={style} src={imageUrl} alt="" draggable={false} />;
  if (mannequin) skin = '#f1eadb';
  const bot = bottom || top;
  const id = `c${uid}`;
  const U = (n) => `url(#${id}${n})`;
  const female = g === 'f';

  const defs = (
    <defs>
      <linearGradient id={`${id}skin`} x1="0" x2="1">
        <stop offset="0" stopColor={dk(skin, 0.14)} />
        <stop offset=".5" stopColor={lt(skin, 0.1)} />
        <stop offset="1" stopColor={dk(skin, 0.18)} />
      </linearGradient>
      <linearGradient id={`${id}top`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={lt(top, 0.2)} />
        <stop offset=".5" stopColor={top} />
        <stop offset="1" stopColor={dk(top, 0.3)} />
      </linearGradient>
      <linearGradient id={`${id}bot`} x1="0" x2="1">
        <stop offset="0" stopColor={dk(bot, 0.3)} />
        <stop offset=".4" stopColor={lt(bot, 0.12)} />
        <stop offset="1" stopColor={dk(bot, 0.34)} />
      </linearGradient>
      <linearGradient id={`${id}gold`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={lt(accent, 0.4)} />
        <stop offset="1" stopColor={dk(accent, 0.25)} />
      </linearGradient>
      <linearGradient id={`${id}hair`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={lt(hair, 0.25)} />
        <stop offset="1" stopColor={dk(hair, 0.3)} />
      </linearGradient>
      <pattern id={`${id}emb`} width="8" height="8" patternUnits="userSpaceOnUse">
        <circle cx="4" cy="4" r="1" fill={accent} />
        <path d="M0 0l2 2M8 0l-2 2M0 8l2-2M8 8l-2-2" stroke={accent} strokeWidth=".6" />
      </pattern>
    </defs>
  );

  const head = (
    <g>
      <rect x="49" y="34" width="12" height="18" rx="5" fill={dk(skin, 0.12)} />
      <ellipse cx="44" cy="25" rx="2" ry="3.4" fill={dk(skin, 0.1)} />
      <ellipse cx="66" cy="25" rx="2" ry="3.4" fill={dk(skin, 0.1)} />
      <ellipse cx="55" cy="24" rx="11.4" ry="14.6" fill={U('skin')} />
      {beard && <path d="M44 28q11 26 22 0q-2 14-11 16-9-2-11-16z" fill={hair} opacity=".85" />}
      {glasses && (
        <g stroke="#14100d" strokeWidth="1.6" fill="#14100d" fillOpacity=".75">
          <rect x="45" y="22" width="9" height="6" rx="2.4" />
          <rect x="56" y="22" width="9" height="6" rx="2.4" />
          <path d="M54 24h2" fill="none" />
        </g>
      )}
    </g>
  );

  /* ---------- hair ---------- */
  const hairBack = female ? <path d="M42 22C40 2 70 2 68 22c4 22 3 44-5 58H47c-8-14-9-36-5-58z" fill={U('hair')} /> : null;
  const hairTop = female ? (
    <>
      <path d="M43 26C41 6 69 6 67 26c-2-8-6-13-12-13s-10 5-12 13z" fill={U('hair')} />
      <path d="M55 12v7" stroke={dk(hair, 0.4)} strokeWidth=".7" />
    </>
  ) : (
    <path d="M43 22C42 4 68 4 67 22c-1-6-5-9-12-9s-11 3-12 9z" fill={U('hair')} />
  );

  /* ---------- arms ---------- */
  const armsSkin = (
    <g stroke={U('skin')} strokeLinecap="round" fill="none">
      <path d={female ? 'M41 58Q31 96 36 138' : 'M35 58Q24 100 24 146'} strokeWidth={female ? 7 : 8.5} />
      <path d={female ? 'M69 58Q79 96 74 138' : 'M75 58Q86 100 86 146'} strokeWidth={female ? 7 : 8.5} />
    </g>
  );
  const hands = female ? (
    <>
      <circle cx="36" cy="143" r="4.2" fill={U('skin')} />
      <circle cx="74" cy="143" r="4.2" fill={U('skin')} />
    </>
  ) : (
    <>
      <circle cx="24" cy="152" r="5" fill={U('skin')} />
      <circle cx="86" cy="152" r="5" fill={U('skin')} />
    </>
  );
  const sleeves = (len = 0.5, col = U('top'), w = female ? 9 : 12) => (
    <g stroke={col} strokeLinecap="round" fill="none" strokeWidth={w}>
      <path d={female ? `M41 58Q${41 - 10 * len} ${58 + 38 * len} ${40 - 5 * len} ${58 + 80 * len}` : `M35 58Q${35 - 11 * len} ${58 + 42 * len} ${35 - 11 * len} ${58 + 88 * len}`} />
      <path d={female ? `M69 58Q${69 + 10 * len} ${58 + 38 * len} ${70 + 5 * len} ${58 + 80 * len}` : `M75 58Q${75 + 11 * len} ${58 + 42 * len} ${75 + 11 * len} ${58 + 88 * len}`} />
    </g>
  );

  /* ---------- legs / shoes (men trousers & shorter outfits) ---------- */
  const trousers = (from = 130, col = U('bot')) => (
    <>
      <path d={`M39 ${from}h16l-1 ${286 - from}H41z`} fill={col} />
      <path d={`M55 ${from}h16l-2 ${286 - from}H56z`} fill={col} />
      <path d={`M55 ${from + 4}v${280 - from}`} stroke={dk(bot, 0.5)} strokeWidth=".7" opacity=".5" />
      <path d="M38 283h18q3 1 6 8H36zM72 283H56q-3 1-6 8h26z" fill="#2a1d16" />
    </>
  );

  /* ---------- FEMALE ---------- */
  const femaleBody = () => {
    switch (outfit) {
      case 'saree':
        return (
          <>
            <path d="M40 112h30l6 28c4 60 6 110 8 148H26c2-38 4-88 8-148z" fill={U('bot')} />
            <path d="M26 288h58l-1-12H27z" fill={U('gold')} />
            {[0, 1, 2, 3, 4].map((i) => (
              <path key={i} d={`M${46 + i * 4} 120q-${i} 80 ${-6 + i * 3} 164`} stroke={dk(bot, 0.45)} strokeWidth=".7" fill="none" opacity=".5" />
            ))}
            <path d="M40 112h30l6 28H34z" fill={U('gold')} opacity=".55" />
            <path d="M44 56h22l-2 46H46z" fill={U('top')} />
            <path d="M46 98h18v14H46z" fill={U('skin')} />
            {/* pallu */}
            <path d="M40 54l14 2 28 96-14 10-34-70z" fill={U('bot')} />
            <path d="M40 54l14 2 28 96" stroke={U('gold')} strokeWidth="3" fill="none" />
            <path d="M40 54l14 2 28 96-14 10-34-70z" fill={U('emb')} opacity=".5" />
          </>
        );
      case 'gown':
        return (
          <>
            <path d="M42 108h26c2 44 6 84 12 122 8 28 20 48 28 60H4c8-12 20-32 28-60 6-38 8-78 10-122z" fill={U('bot')} />
            <path d="M42 108h26c2 44 6 84 12 122 8 28 20 48 28 60H4c8-12 20-32 28-60 6-38 8-78 10-122z" fill={U('emb')} opacity=".35" />
            <path d="M40 58q15-4 30 0l-2 52H42z" fill={U('top')} />
            <path d="M42 80h26M42 94h26" stroke={accent} strokeWidth=".8" opacity=".7" />
            <path d="M39 56q16 6 32 0" stroke={U('gold')} strokeWidth="1.5" fill="none" />
          </>
        );
      case 'sharara':
        return (
          <>
            <path d="M42 126h13l-4 162H12c14-52 26-100 30-162z" fill={U('bot')} />
            <path d="M55 126h13c4 62 16 110 30 162H59z" fill={U('bot')} />
            <path d="M12 276h40M60 276h40" stroke={U('gold')} strokeWidth="3" />
            <path d="M40 58h30l3 40q-3 24-3 34H40q0-10-3-34z" fill={U('top')} />
            <path d="M40 118h30v10H40z" fill={U('gold')} />
            <path d="M40 58h30l3 40H37z" fill={U('emb')} opacity=".5" />
          </>
        );
      case 'kurti':
        return (
          <>
            <path d="M40 130h12l-1 158H42zM58 130h12l-2 158H59z" fill={dk(bot, 0.1)} />
            <path d="M39 58h32l5 70 6 82H28l6-82z" fill={U('top')} />
            <path d="M39 58h32l5 70 6 82H28l6-82z" fill={U('emb')} opacity=".45" />
            <path d="M52 58l3 36 3-36" stroke={U('gold')} strokeWidth="1.5" fill="none" />
            <path d="M28 206h54" stroke={U('gold')} strokeWidth="2.5" />
            <path d="M36 288h14M60 288h14" stroke="#2a1d16" strokeWidth="5" />
          </>
        );
      case 'coord':
        return (
          <>
            <path d="M41 126h14l-3 162H20c14-54 20-100 21-162z" fill={U('bot')} />
            <path d="M55 126h14c1 62 9 108 21 162H58z" fill={U('bot')} />
            <path d="M42 98h26v28H42z" fill={U('skin')} />
            <path d="M42 58h26l-2 40H44z" fill={U('top')} />
            <path d="M42 58h26l-2 40H44z" fill={U('emb')} opacity=".6" />
            <path d="M41 126h28v6H41z" fill={U('gold')} />
          </>
        );
      default: // lehenga
        return (
          <>
            <path d="M42 112h26c16 68 30 128 40 178H2c10-50 24-110 40-178z" fill={U('bot')} />
            {Array.from({ length: 8 }).map((_, i) => (
              <path key={i} d={`M${44 + i * 3} 118Q${(44 + i * 3 + 8 + i * 12) / 2 - 4} 200 ${8 + i * 13} 288`} stroke={dk(bot, 0.5)} strokeWidth=".7" fill="none" opacity=".4" />
            ))}
            <path d="M42 112h26c16 68 30 128 40 178H2c10-50 24-110 40-178z" fill={U('emb')} opacity=".35" />
            <path d="M3 272h104l3 18H0z" fill={U('gold')} />
            <path d="M42 98h26v16H42z" fill={U('skin')} />
            <path d="M41 58h28l1 40q-14 6-30 0z" fill={U('top')} />
            <path d="M41 58h28l1 40q-14 6-30 0z" fill={U('emb')} opacity=".55" />
            <path d="M41 110h28v5H41z" fill={U('gold')} />
          </>
        );
    }
  };

  const femaleStole = stole && (
    <g className="cut-sway">
      <path d="M42 54C32 90 30 140 34 200l12-2c-4-50-2-100 6-142z" fill={stole} opacity=".92" />
      <path d="M40 56Q60 82 86 72l2 14Q60 100 38 72z" fill={dk(stole, 0.1)} opacity=".92" />
    </g>
  );

  /* ---------- MALE ---------- */
  const maleBody = () => {
    switch (outfit) {
      case 'sherwani':
        return (
          <>
            {trousers(205, U('bot'))}
            {sleeves(1, U('top'))}
            <path d="M34 56Q55 48 76 56l5 66 6 96q-32 8-64 0l6-96z" fill={U('top')} />
            <path d="M34 56Q55 48 76 56l5 66 6 96q-32 8-64 0l6-96z" fill={U('emb')} opacity=".5" />
            <path d="M55 60v158" stroke={dk(top, 0.4)} strokeWidth="1" />
            {[84, 106, 128, 150, 172].map((y) => (
              <circle key={y} cx="55" cy={y} r="2.1" fill={U('gold')} />
            ))}
            <path d="M22 212q33 8 66 0" stroke={U('gold')} strokeWidth="4" fill="none" />
            <path d="M46 52l9 8 9-8 2 10-11 5-11-5z" fill={dk(top, 0.15)} stroke={U('gold')} strokeWidth="1" />
            {stole && <path d="M70 54Q84 90 80 160l-9 2Q74 100 62 60z" fill={stole} opacity=".95" />}
          </>
        );
      case 'kurta':
        return (
          <>
            {trousers(190, U('bot'))}
            {sleeves(1, U('top'))}
            <path d="M35 56Q55 48 75 56l4 70 4 76q-28 8-56 0l4-76z" fill={U('top')} />
            <path d="M35 56Q55 48 75 56l4 70 4 76q-28 8-56 0l4-76z" fill={U('emb')} opacity=".35" />
            <path d="M55 56v50" stroke={U('gold')} strokeWidth="2" />
            <path d="M42 56l13 12 13-12" stroke={dk(top, 0.3)} strokeWidth="1.2" fill="none" />
            {[72, 84, 96].map((y) => (
              <circle key={y} cx="55" cy={y} r="1.5" fill={U('gold')} />
            ))}
          </>
        );
      case 'jacket':
        return (
          <>
            {trousers(132, U('bot'))}
            {sleeves(1, inner)}
            <path d="M36 56Q55 48 74 56l3 40 3 40H30l3-40z" fill={inner} />
            <path d="M55 56v78" stroke={dk(inner, 0.3)} strokeWidth=".8" />
            {sleeves(0.8, U('top'), 12)}
            <path d="M35 56Q55 48 75 56l4 40 3 42H28l3-42z" fill={U('top')} opacity=".98" />
            <path d="M35 56Q55 48 75 56l4 40 3 42H28l3-42z" fill={U('emb')} opacity=".4" />
            <path d="M55 62v76" stroke={dk(top, 0.4)} strokeWidth="1" />
            {[80, 96, 112].map((y) => (
              <circle key={y} cx="55" cy={y} r="1.8" fill={U('gold')} />
            ))}
            <path d="M46 52l9 12 9-12" fill={inner} stroke={dk(top, 0.3)} strokeWidth=".8" />
          </>
        );
      case 'tux':
        return (
          <>
            {trousers(134, U('bot'))}
            <path d="M43 58h24l-2 60H45z" fill="#f6f2ea" />
            {sleeves(1, U('top'))}
            <path d="M33 56l16-4 6 66-14 22H33zM77 56l-16-4-6 66 14 22h10z" fill={U('top')} />
            <path d="M33 56l16-4 6 66-14 22H33zM77 56l-16-4-6 66 14 22h10z" fill={U('emb')} opacity=".4" />
            <path d="M49 52l6 20 6-20-3-2h-6z" fill="#fff" />
            <path d="M49 52l-4 18 10 22M61 52l4 18-10 22" stroke={U('gold')} strokeWidth="1.4" fill="none" />
            <path d="M50 58h10l-5 5z" fill="#14100d" />
            <path d="M42 130h26" stroke="#14100d" strokeWidth="2" />
          </>
        );
      case 'printed':
        return (
          <>
            {trousers(134, U('bot'))}
            {sleeves(0.6, U('top'))}
            <path d="M35 56Q55 48 75 56l4 40 2 42H29l2-42z" fill={U('top')} />
            <path d="M35 56Q55 48 75 56l4 40 2 42H29l2-42z" fill={U('emb')} opacity=".7" />
            <path d="M44 52l11 14 11-14" fill={dk(top, 0.15)} stroke={dk(top, 0.4)} strokeWidth=".8" />
            {[88, 104, 120].map((y) => (
              <circle key={y} cx="55" cy={y} r="1.5" fill={lt(top, 0.5)} />
            ))}
          </>
        );
      default: // linen
        return (
          <>
            {trousers(134, U('bot'))}
            <path d="M42 58h26l-2 60H44z" fill="#efe9dc" />
            {sleeves(0.85, U('top'))}
            <path d="M35 56l14-4 4 24-4 58H31zM75 56l-14-4-4 24 4 58h10z" fill={U('top')} />
            <path d="M49 52l6 12 6-12" fill="#efe9dc" stroke={dk(top, 0.3)} strokeWidth=".8" />
          </>
        );
    }
  };

  return (
    <svg className={`cut ${className}`} style={style} viewBox="0 0 110 300" aria-hidden="true">
      {defs}
      {female ? (
        <>
          {!mannequin && hairBack}
          {armsSkin}
          {femaleBody()}
          {sleeves(0.35, U('top'), 9)}
          {hands}
          {head}
          {!mannequin && hairTop}
          <path d="M33 288h16M61 288h16" stroke="#6b4a2a" strokeWidth="3" strokeLinecap="round" />
          {femaleStole}
        </>
      ) : (
        <>
          {armsSkin}
          {maleBody()}
          {hands}
          {head}
          {!mannequin && hairTop}
        </>
      )}
    </svg>
  );
}
