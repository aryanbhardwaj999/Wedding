import { intro } from '../../data/eventsData.js';

const lerp = (a, b, t) => a + (b - a) * t;
const SVGP = { viewBox: '0 0 360 640', preserveAspectRatio: 'xMidYMid slice', 'aria-hidden': true };

/* ───────── Hawa Mahal ───────── */
function HawaMahal({ x = 0, y = 0, s = 1 }) {
  const tiers = [
    { x: 0, y: 150, w: 176, h: 130 },
    { x: 4, y: 112, w: 168, h: 40 },
    { x: 12, y: 76, w: 152, h: 38 },
    { x: 26, y: 46, w: 124, h: 32 },
    { x: 44, y: 22, w: 88, h: 26 },
  ];
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {tiers.map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={t.y} width={t.w} height={t.h} fill="url(#hwWall)" />
          <rect x={t.x + 3} y={t.y + 4} width={t.w - 6} height={t.h - 4} fill="url(#hwin)" />
          <rect x={t.x - 3} y={t.y - 3} width={t.w + 6} height="5" fill="#f0b896" />
          <path d={`M${t.x - 3} ${t.y - 3}h${t.w + 6}`} stroke="#b8604a" strokeWidth="1" />
          {/* corner chhatris */}
          {[t.x + 2, t.x + t.w - 12].map((cx, k) => (
            <g key={k}>
              <rect x={cx} y={t.y - 11} width="10" height="9" fill="#e8a88a" />
              <path d={`M${cx - 1} ${t.y - 11}q6 -12 12 0z`} fill="#f2c0a0" stroke="#b8604a" strokeWidth=".6" />
            </g>
          ))}
        </g>
      ))}
      <path d="M72 22q16 -26 32 0z" fill="#f2c0a0" stroke="#b8604a" strokeWidth=".8" />
      <path d="M88 -4v-8" stroke="#b8604a" strokeWidth="1.2" />
    </g>
  );
}

/* ───────── Scene 1: Shaadi ke Kapde street ───────── */
export function StreetBackdrop() {
  const bolts = ['#d8b070', '#7a2b3a', '#e0906a', '#6b8f6a', '#efd8a8', '#a63d46', '#4a6a8a', '#c9a040'];
  return (
    <svg className="bd-svg" {...SVGP}>
      <defs>
        <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7dbdee" />
          <stop offset=".55" stopColor="#bfe0f4" />
          <stop offset="1" stopColor="#f6e6c8" />
        </linearGradient>
        <linearGradient id="hwWall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ecaa84" />
          <stop offset=".6" stopColor="#da8a6a" />
          <stop offset="1" stopColor="#c46e52" />
        </linearGradient>
        <pattern id="hwin" width="11" height="15" patternUnits="userSpaceOnUse">
          <path d="M2.5 14V7a3 3 0 0 1 6 0v7z" fill="#7a3a30" />
          <path d="M3.6 13V7.2a1.9 1.9 0 0 1 3.8 0V13z" fill="#f4d2a8" opacity=".9" />
        </pattern>
        <linearGradient id="terra" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c2603f" />
          <stop offset=".5" stopColor="#b8523a" />
          <stop offset="1" stopColor="#a04230" />
        </linearGradient>
        <linearGradient id="teal" x1="0" x2="1">
          <stop offset="0" stopColor="#1d7e92" />
          <stop offset="1" stopColor="#135868" />
        </linearGradient>
        <linearGradient id="gold1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f0cc7a" />
          <stop offset="1" stopColor="#c9962b" />
        </linearGradient>
        <linearGradient id="ground1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dcae6c" />
          <stop offset="1" stopColor="#c08a4a" />
        </linearGradient>
        <pattern id="floral" width="34" height="34" patternUnits="userSpaceOnUse">
          <rect width="34" height="34" fill="#a63a72" />
          <g fill="#5b2b82">
            <circle cx="9" cy="9" r="5" />
            <circle cx="26" cy="22" r="6" />
          </g>
          <g fill="#f0a8c4">
            <circle cx="9" cy="9" r="2" />
            <circle cx="26" cy="22" r="2.4" />
          </g>
          <path d="M16 30q4-8 10-6M2 22q6-2 8 4" stroke="#6a9a4a" strokeWidth="1.6" fill="none" />
        </pattern>
        <linearGradient id="fadeG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" />
          <stop offset=".22" stopColor="#fff" />
        </linearGradient>
        <mask id="photoFade" maskUnits="userSpaceOnUse" x="-200" y="0" width="760" height="520">
          <rect x="-200" y="52" width="760" height="405" fill="url(#fadeG)" />
        </mask>
        <linearGradient id="archShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a0a05" stopOpacity=".55" />
          <stop offset=".5" stopColor="#1a0a05" stopOpacity=".1" />
          <stop offset="1" stopColor="#1a0a05" stopOpacity=".35" />
        </linearGradient>
        <filter id="stone" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".03 .07" numOctaves="4" seed="7" />
          <feColorMatrix values="0 0 0 0 .25  0 0 0 0 .12  0 0 0 0 .08  0 0 0 1.4 -.35" />
        </filter>
        <filter id="soft">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>
      <rect width="360" height="640" fill="url(#sky1)" />
      {/* clouds */}
      <g fill="#fff" opacity=".85" filter="url(#soft)">
        <ellipse className="amb-cloud" cx="70" cy="60" rx="52" ry="12" />
        <ellipse className="amb-cloud" cx="250" cy="40" rx="40" ry="9" />
        <ellipse className="amb-cloud" cx="170" cy="100" rx="34" ry="7" />
      </g>
      {/* real Hawa Mahal photo (Wikimedia Commons, CC BY-SA - see public/photos/CREDITS.md) */}
      <g mask="url(#photoFade)">
        <image className="photo-grade" href="/photos/hawa_front.jpg" x="-150" y="52" width="540" height="405" preserveAspectRatio="none" />
      </g>
      {/* ground */}
      <rect y="404" width="360" height="236" fill="url(#ground1)" />
      <path d="M0 560C80 540 200 548 360 530V640H0z" fill="#b87c3e" opacity=".28" />

      {/* ── shop ── */}
      {/* teal side wall */}
      <rect x="66" y="184" width="66" height="214" fill="url(#teal)" />
      <path d="M66 184h66" stroke="#0e4452" strokeWidth="2" />
      {/* niche window */}
      <path d="M80 262V228a14 14 0 0 1 28 0v34z" fill="#efe6c8" />
      <path d="M85 258V230a9 9 0 0 1 18 0v28z" fill="#2c1e1a" />
      <path d="M85 240h18M94 230v28" stroke="#6a4a30" strokeWidth=".8" />
      {/* chalkboard */}
      <rect x="76" y="276" width="38" height="38" rx="2" fill="#1a2420" stroke="#e6d9b4" strokeWidth="1.6" />
      <text x="95" y="293" fontSize="5.2" fill="#f4efe0" textAnchor="middle" fontFamily="'Noto Sans Devanagari', sans-serif">यहाँ शादी के</text>
      <text x="95" y="301" fontSize="5.2" fill="#f4efe0" textAnchor="middle" fontFamily="'Noto Sans Devanagari', sans-serif">कपड़े मिलते हैं</text>
      <path d="M82 306h26" stroke="#c9b97a" strokeWidth=".7" />
      {/* potted plant */}
      <g>
        <path d="M76 372h30l-4 24H80z" fill="#b8643a" />
        <g fill="#2f6a34">
          <ellipse cx="82" cy="360" rx="10" ry="14" transform="rotate(-24 82 360)" />
          <ellipse cx="98" cy="358" rx="10" ry="15" transform="rotate(24 98 358)" />
          <ellipse cx="90" cy="352" rx="9" ry="15" />
        </g>
        <g fill="#4a8a44">
          <ellipse cx="88" cy="356" rx="5" ry="10" transform="rotate(-10 88 356)" />
          <ellipse cx="96" cy="362" rx="5" ry="9" transform="rotate(20 96 362)" />
        </g>
      </g>

      {/* main facade */}
      <rect x="96" y="100" width="190" height="300" fill="url(#terra)" />
      <rect x="96" y="100" width="190" height="300" filter="url(#stone)" opacity=".7" />
      {/* parapet */}
      <rect x="92" y="84" width="198" height="20" fill="#a64a30" />
      <rect x="88" y="78" width="206" height="9" fill="#8a3a28" />
      <rect x="100" y="90" width="182" height="9" fill="#c26a48" />
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x={104 + i * 15} y="92" width="9" height="5" fill="#8a3a28" />
      ))}
      {/* sign */}
      <rect x="112" y="116" width="158" height="62" rx="2" fill="#7a3a1c" />
      <rect x="116" y="120" width="150" height="54" rx="1" fill="url(#gold1)" />
      <rect x="120" y="124" width="142" height="46" fill="none" stroke="#8a4a1c" strokeWidth="1.2" />
      {[[120, 124], [262, 124], [120, 170], [262, 170]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.4" fill="#7a3a1c" />
      ))}
      <text x="191" y="156" fontSize="23" textLength="128" lengthAdjust="spacingAndGlyphs" textAnchor="middle" fill="#7a2020" fontFamily="'Pinyon Script', cursive">{intro.shopSign}</text>
      {/* cloth strips hanging at the arch top */}
      {['#c2185b', '#e0a526', '#0f8b8d', '#7a2b82', '#d8562a'].map((c, i) => (
        <g key={c} className="amb-sway-b" style={{ transformOrigin: `${142 + i * 24}px 196px` }}>
          <path d={`M${136 + i * 24} 196h16v${34 + (i % 3) * 8}q-8 4-16 0z`} fill={c} opacity=".92" />
          <path d={`M${140 + i * 24} 198v${30 + (i % 3) * 8}`} stroke="#fff" strokeOpacity=".25" />
        </g>
      ))}
      {/* pigeons crossing the sky */}
      {[0, 1, 2].map((i) => (
        <path key={i} className="amb-bird" d="M0 0q5-6 10 0q5-6 10 0" stroke="#4a3a3a" strokeWidth="1.5" fill="none" transform={`translate(${-30 - i * 28} ${44 + i * 14})`} />
      ))}
      {/* arch opening */}
      <path d="M126 336V232q0-42 66-44t66 44v104z" fill="#a8482e" />
      <path d="M134 336V236q0-34 58-36t58 36v100z" fill="#2a1612" />
      <path d="M126 232q0-42 66-44t66 44" stroke="#e8c090" strokeWidth="2" fill="none" />
      {Array.from({ length: 11 }).map((_, i) => {
        const a = Math.PI + (i * Math.PI) / 10;
        return <path key={i} d={`M${192 + Math.cos(a) * 70} ${236 + Math.sin(a) * 46 - 3}l2 3-2 3-2-3z`} fill="#f2dcb0" />;
      })}
      {/* interior: real Jaipur textile-shop photos (Wikimedia Commons, CC BY) */}
      <clipPath id="archClip">
        <path d="M134 336V236q0-34 58-36t58 36v100z" />
      </clipPath>
      <g clipPath="url(#archClip)">
        <rect x="134" y="198" width="116" height="140" fill="#2a1612" />
        <svg x="134" y="198" width="116" height="104" viewBox="930 20 350 330" preserveAspectRatio="xMidYMid slice">
          <image href="/photos/shop_shelves2.jpg" width="1280" height="857" />
        </svg>
        <svg x="134" y="296" width="116" height="42" viewBox="0 120 1280 330" preserveAspectRatio="xMidYMid slice">
          <image href="/photos/shop_stack.jpg" width="1280" height="871" />
        </svg>
        <rect x="134" y="198" width="116" height="140" fill="url(#archShade)" />
      </g>
      {/* mannequin in cream sherwani */}
      <g>
        <path d="M200 226q12-6 24 0l3 46q-15 8-30 0z" fill="#e8d8b8" />
        <path d="M212 232v40" stroke="#c0a878" strokeWidth=".8" />
        {[240, 250, 260].map((y) => (
          <circle key={y} cx="212" cy={y - 8} r="1.2" fill="#c0a878" />
        ))}
        <rect x="209" y="214" width="6" height="14" fill="#c9a878" />
        <path d="M212 272v52" stroke="#2a1c14" strokeWidth="2" />
      </g>
      {/* floral right wall */}
      <rect x="274" y="124" width="100" height="280" fill="url(#floral)" />
      <path d="M284 330V190q0-42 32-52t32 52v140z" fill="none" stroke="#f0c8a0" strokeWidth="3" opacity=".8" />
      <path d="M274 124v280" stroke="#7a2a50" strokeWidth="3" />
      {/* vine in front of wall */}
      <path d="M284 128q-14 60 4 110t-8 100" stroke="#4a7a3a" strokeWidth="2.4" fill="none" />
      {[150, 180, 210, 245, 280, 315].map((y, i) => (
        <ellipse key={y} cx={284 + (i % 2 ? 9 : -9)} cy={y} rx="9" ry="4.4" fill="#5a9a48" transform={`rotate(${i % 2 ? 28 : -28} ${284 + (i % 2 ? 9 : -9)} ${y})`} />
      ))}
      <rect y="404" width="360" height="236" filter="url(#stone)" opacity=".35" />
      {/* stone ledge / steps */}
      <path d="M30 398h272l22 16H8z" fill="#ecd2a0" />
      <path d="M8 414h316l10 12H0z" fill="#d2ae74" />
      <path d="M0 426h340v8H0z" fill="#b88a50" opacity=".5" />
      {/* lemon tree top-right */}
      <path d="M360 -4C330 20 298 40 262 62M318 24c-8 22-4 40 4 58" stroke="#5a3a22" strokeWidth="3" fill="none" />
      {Array.from({ length: 26 }).map((_, i) => (
        <ellipse key={i} cx={262 + ((i * 29) % 96)} cy={4 + ((i * 17) % 64)} rx="9" ry="4.4" fill={i % 3 ? '#4f8a3a' : '#6aa04a'} transform={`rotate(${(i * 47) % 180} ${262 + ((i * 29) % 96)} ${4 + ((i * 17) % 64)})`} />
      ))}
      {[[284, 34], [312, 54], [338, 28], [296, 70], [326, 80]].map(([cx, cy], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx="5" ry="6.4" fill="#f2cf2a" stroke="#c9a010" strokeWidth=".6" />
      ))}
      {/* foreground fern bottom-left */}
      <g stroke="#2f6a34" strokeWidth="2" fill="#3f8040">
        {[-30, -10, 12, 34, 56].map((r, i) => (
          <path key={i} d={`M8 640Q${20 + i * 6} ${590 - i * 6} ${52 + i * 9} ${572 + i * 6}`} fill="none" transform={`rotate(${r * 0.2} 8 640)`} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <ellipse key={i} cx={20 + i * 8} cy={618 - i * 5} rx="11" ry="4" transform={`rotate(${-30 - i * 4} ${20 + i * 8} ${618 - i * 5})`} stroke="none" />
        ))}
      </g>
    </svg>
  );
}

/* ───────── Outro street: real Ajmeri Gate photo (CC BY-SA) with foliage framing ───────── */
export function OutroBackdrop() {
  return (
    <svg className="bd-svg" {...SVGP}>
      <defs>
        <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7ebdee" />
          <stop offset="1" stopColor="#d8e8f0" />
        </linearGradient>
      </defs>
      <rect width="360" height="640" fill="url(#sky2)" />
      <image className="photo-grade" href="/photos/gate_street.jpg" x="-349" y="0" width="853" height="640" preserveAspectRatio="xMidYMid slice" />
      <path d="M-4 330C14 360 22 410 12 470" stroke="#5a3a22" strokeWidth="2.6" fill="none" />
      {Array.from({ length: 22 }).map((_, i) => (
        <ellipse key={i} cx={4 + ((i * 13) % 44)} cy={330 + ((i * 23) % 130)} rx="8" ry="3.8" fill={i % 3 ? '#4f8a3a' : '#6aa04a'} transform={`rotate(${(i * 53) % 180} ${4 + ((i * 13) % 44)} ${330 + ((i * 23) % 130)})`} />
      ))}
      {[[16, 360], [30, 392], [10, 420], [34, 450]].map(([cx, cy], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx="4.6" ry="5.6" fill="#f2cf2a" />
      ))}
      {[[40, 630, 46], [330, 632, 40]].map(([cx, cy, r], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill="#4f8a44" />
          <circle cx={cx - r * 0.5} cy={cy - r * 0.2} r={r * 0.6} fill="#68a458" />
          <circle cx={cx + r * 0.5} cy={cy - r * 0.3} r={r * 0.55} fill="#3f7838" />
        </g>
      ))}
    </svg>
  );
}

/* ───────── Event backgrounds ───────── */
const Stars = ({ n = 30 }) =>
  Array.from({ length: n }).map((_, i) => (
    <circle key={i} cx={(i * 83) % 360} cy={(i * 47) % 280} r={0.5 + (i % 3) * 0.4} fill="#fff" opacity={0.5 + (i % 4) * 0.12} />
  ));

const ArchRow = ({ y, h, color, glow, n = 8 }) => (
  <g>
    <rect x="0" y={y} width="360" height={h} fill={color} />
    {Array.from({ length: n }).map((_, i) => {
      const w = 360 / n;
      const x = i * w + w * 0.2;
      return (
        <g key={i}>
          <path d={`M${x} ${y + h}V${y + h * 0.4}a${w * 0.3} ${w * 0.3} 0 0 1 ${w * 0.6} 0V${y + h}z`} fill="#1a1020" opacity=".5" />
          {glow && <path d={`M${x + 6} ${y + h}V${y + h * 0.45}a${w * 0.24} ${w * 0.24} 0 0 1 ${w * 0.48} 0V${y + h}z`} fill={glow} opacity=".55" />}
        </g>
      );
    })}
  </g>
);

export function EventBg({ kind }) {
  switch (kind) {
    case 'twilight':
      return (
        <svg className="bd-svg" {...SVGP}>
          <defs>
            <linearGradient id="e1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2c2a40" />
              <stop offset=".45" stopColor="#5a4650" />
              <stop offset="1" stopColor="#7a5848" />
            </linearGradient>
            <pattern id="chk" width="40" height="22" patternUnits="userSpaceOnUse">
              <rect width="40" height="22" fill="#6a4a38" />
              <rect width="20" height="11" fill="#8a6a50" />
              <rect x="20" y="11" width="20" height="11" fill="#8a6a50" />
            </pattern>
            <filter id="bl1"><feGaussianBlur stdDeviation="3" /></filter>
            <linearGradient id="fg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#000" /><stop offset=".3" stopColor="#fff" /></linearGradient>
            <mask id="fade1" maskUnits="userSpaceOnUse" x="-100" y="190" width="660" height="460"><rect x="-100" y="250" width="560" height="360" fill="url(#fg1)" /></mask>
          </defs>
          <rect width="360" height="640" fill="url(#e1)" />
          <g filter="url(#bl1)" fill="#6c5a6a" opacity=".55">
            <ellipse cx="80" cy="90" rx="90" ry="22" />
            <ellipse cx="270" cy="140" rx="100" ry="20" />
            <ellipse cx="140" cy="210" rx="120" ry="16" />
          </g>
          <Stars n={34} />
          <image className="photo-grade" href="/photos/gate_night.jpg" x="-60" y="250" width="480" height="360" preserveAspectRatio="none" mask="url(#fade1)" style={{ filter: 'brightness(.85) saturate(1.1)' }} />
          <rect y="470" width="360" height="170" fill="#000" opacity=".1" />
        </svg>
      );
    case 'lawn':
      return (
        <svg className="bd-svg" {...SVGP}>
          <defs>
            <linearGradient id="e2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2c5568" />
              <stop offset=".4" stopColor="#3f6e62" />
              <stop offset=".6" stopColor="#2d5a38" />
              <stop offset="1" stopColor="#1f4128" />
            </linearGradient>
            <filter id="bl2"><feGaussianBlur stdDeviation="4" /></filter>
          </defs>
          <rect width="360" height="640" fill="url(#e2)" />
          <g filter="url(#bl2)" fill="#1d3a2a">
            {[20, 90, 160, 230, 300].map((x, i) => (
              <ellipse key={x} cx={x} cy={300 + (i % 2) * 14} rx="56" ry="64" />
            ))}
          </g>
          <rect y="330" width="360" height="40" fill="#325a40" opacity=".5" />
          <g fill="#e8e6d8" opacity=".55">
            {[40, 120, 220, 300].map((x) => (
              <ellipse key={x} cx={x} cy="420" rx="22" ry="5" />
            ))}
          </g>
        </svg>
      );
    case 'pink':
      return (
        <svg className="bd-svg" {...SVGP}>
          <defs>
            <linearGradient id="e3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#c8509e" />
              <stop offset=".5" stopColor="#a8409a" />
              <stop offset="1" stopColor="#c46aa8" />
            </linearGradient>
            <filter id="bl3"><feGaussianBlur stdDeviation="1.6" /></filter>
            <linearGradient id="fg3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#000" /><stop offset=".3" stopColor="#fff" /></linearGradient>
            <mask id="fade3" maskUnits="userSpaceOnUse" x="-100" y="150" width="660" height="548"><rect x="-100" y="210" width="560" height="448" fill="url(#fg3)" /></mask>
          </defs>
          <rect width="360" height="640" fill="url(#e3)" />
          <g filter="url(#bl3)" fill="#d4789e" opacity=".85">
            <path d="M120 330V270h14v-14h12v14h14v-18h14v18h14v-14h12v14h14v-18h16v18h14v62z" />
            <path d="M120 270h232v-44H120z" opacity=".7" />
            {Array.from({ length: 14 }).map((_, i) => (
              <rect key={i} x={124 + i * 17} y="216" width="9" height="12" />
            ))}
          </g>
          <image href="/photos/hawa_2011.jpg" x="-80" y="210" width="520" height="448" preserveAspectRatio="none" mask="url(#fade3)" style={{ filter: 'hue-rotate(-35deg) saturate(1.5) brightness(.95)' }} />
          <rect y="200" width="360" height="440" fill="#b8409a" opacity=".38" />
          {[0, 1, 2, 3].map((i) => (
            <path key={i} d={`M0 ${380 + i * 22}H360`} stroke="#d880b0" strokeWidth="1.5" opacity=".5" />
          ))}
        </svg>
      );
    case 'teal':
      return (
        <svg className="bd-svg" {...SVGP}>
          <defs>
            <linearGradient id="e4" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#11384c" />
              <stop offset=".5" stopColor="#1d6370" />
              <stop offset="1" stopColor="#2a7684" />
            </linearGradient>
            <filter id="bl4"><feGaussianBlur stdDeviation="2" /></filter>
            <linearGradient id="fg4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#000" /><stop offset=".3" stopColor="#fff" /></linearGradient>
            <mask id="fade4" maskUnits="userSpaceOnUse" x="-150" y="170" width="720" height="520"><rect x="-150" y="230" width="620" height="420" fill="url(#fg4)" /></mask>
          </defs>
          <rect width="360" height="640" fill="url(#e4)" />
          <g filter="url(#bl4)" fill="#1a4a5c">
            <rect x="260" y="150" width="40" height="190" />
            <path d="M255 150q25-40 50 0z" />
            <rect x="40" y="220" width="130" height="120" />
            <path d="M60 220q45-50 90 0z" />
            <rect x="200" y="250" width="160" height="90" />
          </g>
          <image href="/photos/hawa_east.jpg" x="-120" y="230" width="560" height="420" preserveAspectRatio="none" mask="url(#fade4)" style={{ filter: 'brightness(.5) saturate(.7) hue-rotate(150deg) contrast(1.1)' }} />
          <rect y="230" width="360" height="410" fill="#10506a" opacity=".35" />
        </svg>
      );
    default:
      return (
        <svg className="bd-svg" {...SVGP}>
          <defs>
            <linearGradient id="e5" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8aa07c" />
              <stop offset=".6" stopColor="#a4b58a" />
              <stop offset="1" stopColor="#7e9468" />
            </linearGradient>
            <filter id="bl5"><feGaussianBlur stdDeviation="5" /></filter>
          </defs>
          <rect width="360" height="640" fill="url(#e5)" />
          <g filter="url(#bl5)">
            {[[40, 160, 70], [150, 120, 60], [260, 170, 74], [330, 120, 50], [110, 250, 56], [230, 280, 64]].map(([cx, cy, r], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} fill={i % 2 ? '#6e8a5a' : '#7c9866'} opacity=".8" />
            ))}
          </g>
          <path d="M0 400C90 380 250 390 360 372V640H0z" fill="#98ae82" />
          <path d="M120 640Q160 470 190 396" stroke="#c8d0a8" strokeWidth="26" opacity=".25" fill="none" />
        </svg>
      );
  }
}
