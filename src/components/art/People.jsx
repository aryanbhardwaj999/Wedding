import { useId } from 'react';

/** Couple seen from behind, turned toward the shop (viewBox 100×300). */
export function WomanBack({ className = '' }) {
  const u = useId().replace(/:/g, '');
  return (
    <svg className={`back-fig ${className}`} viewBox="0 0 100 300" aria-hidden="true">
      <defs>
        <linearGradient id={`${u}d`} x1="0" x2="1">
          <stop offset="0" stopColor="#e4d6bc" />
          <stop offset=".45" stopColor="#fbf4e4" />
          <stop offset="1" stopColor="#dccbae" />
        </linearGradient>
        <linearGradient id={`${u}h`} x1="0" x2="1">
          <stop offset="0" stopColor="#2a1a12" />
          <stop offset=".5" stopColor="#5a3a26" />
          <stop offset="1" stopColor="#24160f" />
        </linearGradient>
        <linearGradient id={`${u}s`} x1="0" x2="1">
          <stop offset="0" stopColor="#c8946a" />
          <stop offset="1" stopColor="#e2b088" />
        </linearGradient>
        <pattern id={`${u}w`} width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M0 0l4 4M4 0l-4 4" stroke="#7a4a1c" strokeWidth=".6" />
        </pattern>
      </defs>
      <ellipse cx="50" cy="296" rx="36" ry="4" fill="#3a2410" opacity=".28" />
      {/* hair */}
      <path d="M33 30C30 56 30 90 36 122c8 6 22 6 30 0 4-34 6-66 1-92z" fill={`url(#${u}h)`} />
      <path d="M40 40c-2 30 0 60 4 80M56 40c2 30 2 60-1 80" stroke="#6a4a32" strokeWidth=".9" fill="none" opacity=".6" />
      {/* skirt */}
      <path className="skirt" d="M38 98h26c8 60 16 120 20 178-18 8-48 8-68 0 4-58 14-118 22-178z" fill={`url(#${u}d)`} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${42 + i * 4} 102q${-8 + i * 3} 90 ${-14 + i * 12} 172`} stroke="#c9b894" strokeWidth=".8" fill="none" opacity=".55" />
      ))}
      <path d="M16 274q34 8 68 0" stroke="#d7c5a2" strokeWidth="1.5" fill="none" />
      {/* bodice + puff sleeves */}
      <path d="M36 54q15-8 30 0l2 48H34z" fill={`url(#${u}d)`} />
      <path d="M34 98q16 8 34 0v8q-17 6-34 0z" fill="#e3d3b4" />
      <ellipse cx="29" cy="62" rx="11" ry="15" fill={`url(#${u}d)`} />
      <ellipse cx="71" cy="60" rx="11" ry="15" fill={`url(#${u}d)`} />
      <path d="M20 72q9 6 18 0M62 70q9 6 18 0" stroke="#cdbb97" strokeWidth="1" fill="none" />
      {/* arms */}
      <path d="M26 74Q20 100 26 128" stroke={`url(#${u}s)`} strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M74 72Q82 96 74 124" stroke={`url(#${u}s)`} strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* bag strap + basket */}
      <path d="M62 50L24 140" stroke="#5a3a1c" strokeWidth="3" fill="none" />
      <g>
        <path d="M6 132h28l-3 34q-11 5-22 0z" fill="#b97b32" />
        <path d="M6 132h28l-3 34q-11 5-22 0z" fill={`url(#${u}w)`} />
        <path d="M8 132q12-14 24 0" stroke="#5a3a1c" strokeWidth="2.4" fill="none" />
        <ellipse cx="20" cy="132" rx="14" ry="3" fill="#8a5420" />
      </g>
      {/* neck + hat */}
      <path d="M44 40h12v14H44z" fill="#c8946a" />
      <ellipse cx="50" cy="30" rx="31" ry="8.5" fill="#e6c88e" />
      <ellipse cx="50" cy="30" rx="31" ry="8.5" fill="none" stroke="#c9a56a" strokeWidth="1" strokeDasharray="1.5 1.2" />
      <path d="M34 28q0-20 16-20t16 20q-16 8-32 0z" fill="#efd7a0" />
      <path d="M34 27q16 8 32 0v3q-16 7-32 0z" fill="#5a3322" />
      <path d="M62 29q10 2 14 12-6-2-10-5z" fill="#5a3322" />
      {/* legs + sandals */}
      <path d="M42 270h8v14h-8zM54 270h8v14h-8z" fill="#c8946a" />
      <path d="M38 285h16l2 7H38zM54 285h16l2 7H54z" fill="#b8742e" />
    </svg>
  );
}

export function ManBack({ className = '' }) {
  const u = useId().replace(/:/g, '');
  return (
    <svg className={`back-fig ${className}`} viewBox="0 0 100 300" aria-hidden="true">
      <defs>
        <linearGradient id={`${u}t`} x1="0" x2="1">
          <stop offset="0" stopColor="#0f3b44" />
          <stop offset=".5" stopColor="#1b5560" />
          <stop offset="1" stopColor="#0d3039" />
        </linearGradient>
        <linearGradient id={`${u}p`} x1="0" x2="1">
          <stop offset="0" stopColor="#a89a84" />
          <stop offset=".5" stopColor="#c6baa4" />
          <stop offset="1" stopColor="#9a8c76" />
        </linearGradient>
        <linearGradient id={`${u}s`} x1="0" x2="1">
          <stop offset="0" stopColor="#c58f64" />
          <stop offset="1" stopColor="#dca77c" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="296" rx="34" ry="4" fill="#3a2410" opacity=".28" />
      {/* legs */}
      <g className="leg-l">
        <path d="M33 140h19l-2 144H36z" fill={`url(#${u}p)`} />
        <path d="M33 282h18q3 2 4 9H30z" fill="#f4f1ea" />
        <path d="M30 289h25v3H30z" fill="#bdb8ae" />
      </g>
      <g className="leg-r">
        <path d="M50 140h19l-3 144H52z" fill={`url(#${u}p)`} />
        <path d="M50 282h18q3 2 4 9H46z" fill="#f4f1ea" />
        <path d="M46 289h25v3H46z" fill="#bdb8ae" />
      </g>
      <path d="M32 134h38v14H32z" fill="#a39580" />
      {/* torso */}
      <path d="M26 56Q50 44 74 56l4 84H24z" fill={`url(#${u}t)`} />
      <path d="M50 56v82" stroke="#0b2a31" strokeWidth=".8" opacity=".5" />
      {/* arms */}
      <g className="arm-l">
        <path d="M26 58Q14 78 14 100" stroke={`url(#${u}t)`} strokeWidth="13" strokeLinecap="round" fill="none" />
        <path d="M14 104Q12 126 18 142" stroke={`url(#${u}s)`} strokeWidth="8" strokeLinecap="round" fill="none" />
        <circle cx="18" cy="146" r="5" fill="#d29c70" />
      </g>
      <g className="arm-r">
        <path d="M74 58Q86 78 86 100" stroke={`url(#${u}t)`} strokeWidth="13" strokeLinecap="round" fill="none" />
        <path d="M86 104Q88 126 82 142" stroke={`url(#${u}s)`} strokeWidth="8" strokeLinecap="round" fill="none" />
        <circle cx="82" cy="146" r="5" fill="#d29c70" />
      </g>
      {/* neck, collar, head */}
      <path d="M43 40h14v18H43z" fill="#c08a60" />
      <path d="M38 56q12-9 24 0l-5 7-7-4-7 4z" fill="#0b2f37" />
      <ellipse cx="50" cy="27" rx="13.5" ry="16.5" fill="#2a1b13" />
      <ellipse cx="59.5" cy="33" rx="5" ry="10" fill="#d4a074" />
      <path d="M56 26q9-1 13 2" stroke="#101010" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M36 20q14-12 26-2" stroke="#4a3426" strokeWidth="1.5" fill="none" opacity=".6" />
    </svg>
  );
}

/** Tailor at the treadle machine, drawn in the shop's coordinate system (viewBox 130×170). */
export function TailorStation() {
  return (
    <svg className="tailor-svg" viewBox="0 0 130 170" aria-hidden="true">
      <defs>
        <linearGradient id="tk" x1="0" x2="1">
          <stop offset="0" stopColor="#e6dccb" />
          <stop offset=".5" stopColor="#fbf6ea" />
          <stop offset="1" stopColor="#d8ccb6" />
        </linearGradient>
        <linearGradient id="tm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a22a45" />
          <stop offset="1" stopColor="#6a1228" />
        </linearGradient>
        <pattern id="tmp" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r=".9" fill="#e8b878" opacity=".55" />
        </pattern>
      </defs>
      <g className="amb-nod">
        {/* torso */}
        <path d="M46 40q24-8 46 0l6 56H40z" fill="url(#tk)" />
        <path d="M70 44v52" stroke="#cbbfa6" strokeWidth=".8" />
        <path d="M60 44q10 14 20 0" stroke="#e8b830" strokeWidth="2.6" fill="none" />
        <rect x="80" y="62" width="9" height="11" rx="1" fill="none" stroke="#cbbfa6" strokeWidth=".8" />
        {/* arms to the machine */}
        <path d="M46 46Q34 70 52 92" stroke="url(#tk)" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M92 46Q104 70 90 90" stroke="url(#tk)" strokeWidth="10" strokeLinecap="round" fill="none" />
        <circle cx="54" cy="94" r="4.5" fill="#c58a5e" />
        <circle cx="88" cy="92" r="4.5" fill="#c58a5e" />
        {/* head + turban */}
        <rect x="63" y="30" width="12" height="14" rx="5" fill="#b87a52" />
        <ellipse cx="69" cy="22" rx="10" ry="12.4" fill="#c58a5e" />
        <path d="M56 20q-2-22 14-22t14 22q-6-9-14-9t-14 9z" fill="#c8222c" />
        <path d="M58 14q12-10 24 0M57 19q13-9 26 0M58 8q11-7 22 0" stroke="#8f1219" strokeWidth="1.2" fill="none" />
        <path d="M60 4q10-8 22-2" stroke="#e86a6a" strokeWidth="1" fill="none" opacity=".7" />
      </g>
      {/* table */}
      <rect x="6" y="96" width="122" height="12" rx="1.5" fill="#8a5a33" />
      <rect x="6" y="96" width="122" height="3" fill="#b07a4a" />
      <text x="20" y="106" fontSize="6" fill="#f3e7c4" fontFamily="Montserrat" fontWeight="700" letterSpacing="1.2">USHA</text>
      {/* machine */}
      <path d="M36 96V72h50q10 0 10 10v14z" fill="#171717" />
      <path d="M40 76h46" stroke="#c9962b" strokeWidth="1.4" />
      <rect x="40" y="82" width="38" height="3" fill="#2a2a2a" />
      <rect className="s1-needle" x="50" y="86" width="2" height="12" fill="#d6d6d6" />
      <g className="amb-wheel">
        <circle cx="96" cy="80" r="9" fill="none" stroke="#c9962b" strokeWidth="2.4" />
        <path d="M96 72v16M88 80h16" stroke="#c9962b" strokeWidth="1.2" />
      </g>
      {/* iron stand */}
      <g fill="none" stroke="#161616" strokeWidth="3.4" strokeLinecap="round">
        <path d="M16 108v52M18 112q10 8 0 20q-10 8 0 22M112 108v52M110 112q-10 8 0 20q10 8 0 22" />
        <path d="M16 160h96" strokeWidth="4" />
        <path d="M28 120h72" strokeWidth="1.6" />
        <circle cx="56" cy="142" r="9" strokeWidth="2.4" />
      </g>
      {/* maroon fabric */}
      <path d="M84 98q6 24 4 46 12 6 22 0 2-24 12-44z" fill="url(#tm)" />
      <path d="M84 98q6 24 4 46 12 6 22 0 2-24 12-44z" fill="url(#tmp)" />
      <path d="M96 100q-1 20 2 42M108 100q1 22-1 42" stroke="#4a0a1c" strokeWidth="1" fill="none" opacity=".6" />
      <ellipse cx="124" cy="166" rx="4" ry="3" fill="#f6c25a" opacity=".9" />
    </svg>
  );
}

/** Tailor cycling away (seen from behind) — viewBox 100×290. */
export function Cyclist() {
  const colors = ['#c2185b', '#0f8b8d', '#e0a526', '#5b2a86', '#c82a2a', '#1f9d55', '#e8672a'];
  return (
    <svg className="cyclist-svg" viewBox="0 0 100 290" aria-hidden="true">
      <defs>
        <linearGradient id="ck" x1="0" x2="1">
          <stop offset="0" stopColor="#dccfb8" />
          <stop offset=".5" stopColor="#fbf6ea" />
          <stop offset="1" stopColor="#d6c8ae" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="284" rx="22" ry="3" fill="#3a2410" opacity=".3" />
      {/* rear wheel + frame */}
      <g className="wheel-back">
        <ellipse cx="50" cy="244" rx="8" ry="38" fill="none" stroke="#181818" strokeWidth="4" />
        <path d="M50 206v76" stroke="#555" strokeWidth=".8" />
      </g>
      <path d="M50 150v100M44 176h12" stroke="#222" strokeWidth="3" />
      {/* stacked fabrics on carrier */}
      {colors.map((c, i) => (
        <rect key={c} x={26 + (i % 2) * 2} y={186 - i * 10} width={48 - (i % 3) * 3} height="11" rx="3" fill={c} stroke="#00000030" />
      ))}
      <rect x="22" y="188" width="56" height="5" fill="#3a2a1a" />
      {/* legs on pedals */}
      <g className="pedal-l">
        <path d="M42 120l-1 54" stroke="#f1e8d6" strokeWidth="11" strokeLinecap="round" />
        <path d="M34 178h14l1 6H32z" fill="#7a4a22" />
      </g>
      <g className="pedal-r">
        <path d="M58 120l1 44" stroke="#e8dec8" strokeWidth="11" strokeLinecap="round" />
        <path d="M52 168h14l1 6H50z" fill="#7a4a22" />
      </g>
      {/* torso, arms, bars */}
      <path d="M26 46Q50 36 74 46l3 76H23z" fill="url(#ck)" />
      <path d="M50 50v70" stroke="#cfc3a9" strokeWidth=".7" />
      <path d="M26 50Q12 66 14 82M74 50Q88 66 86 82" stroke="url(#ck)" strokeWidth="11" strokeLinecap="round" fill="none" />
      <path d="M6 84h88" stroke="#1a1a1a" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="14" cy="84" r="4.4" fill="#c58a5e" />
      <circle cx="86" cy="84" r="4.4" fill="#c58a5e" />
      {/* head + turban */}
      <rect x="43" y="26" width="14" height="14" rx="5" fill="#b87a52" />
      <ellipse cx="50" cy="20" rx="13" ry="14" fill="#c8222c" />
      <path d="M38 17q12-9 24 0M37 23q13-9 26 0M40 11q10-7 20 0" stroke="#8f1219" strokeWidth="1.3" fill="none" />
      <path d="M44 6q8-6 15-1" stroke="#ec7a7a" strokeWidth="1.2" fill="none" opacity=".7" />
    </svg>
  );
}
