// Small decorative SVGs for the stamp reel.

const Feather = ({ className = '', flip }) => (
  <svg viewBox="0 0 80 190" className={`mo amb-sway-b ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M40 188C38 140 30 90 40 6" stroke="#2a8f5a" strokeWidth="2.4" fill="none" />
    {Array.from({ length: 26 }).map((_, i) => {
      const y = 20 + i * 6;
      const w = 22 - Math.abs(i - 11) * 0.8;
      return <path key={i} d={`M40 ${y + 40}q-${w} -10 -${w + 6} -${22 + (i % 3)}M40 ${y + 40}q${w} -10 ${w + 6} -${22 + (i % 3)}`} stroke="#1fb089" strokeWidth="1.1" fill="none" opacity=".75" />;
    })}
    <ellipse cx="40" cy="48" rx="23" ry="34" fill="#12806a" />
    <ellipse cx="40" cy="48" rx="17" ry="26" fill="#2a56d6" />
    <ellipse cx="40" cy="50" rx="11" ry="17" fill="#17b8a6" />
    <ellipse cx="40" cy="52" rx="6" ry="10" fill="#f2c14e" />
    <ellipse cx="40" cy="53" rx="3" ry="6" fill="#0a2f5c" />
  </svg>
);

const Disco = ({ className = '' }) => (
  <svg viewBox="0 0 90 140" className={`mo amb-sway ${className}`}>
    <path d="M45 0v40" stroke="#ffd56b" strokeWidth="2" />
    <defs>
      <radialGradient id="dg" cx="35%" cy="30%" r="80%">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset=".35" stopColor="#d9b8ff" />
        <stop offset="1" stopColor="#5a2fa8" />
      </radialGradient>
    </defs>
    <circle cx="45" cy="86" r="42" fill="url(#dg)" />
    {Array.from({ length: 7 }).map((_, i) => (
      <path key={i} d={`M3 ${60 + i * 8}q42 12 84 0`} stroke="#1a0b4a" strokeOpacity=".45" strokeWidth=".9" fill="none" />
    ))}
    {Array.from({ length: 7 }).map((_, i) => (
      <path key={i} d={`M${14 + i * 10} 46q-18 40 0 80`} stroke="#1a0b4a" strokeOpacity=".45" strokeWidth=".9" fill="none" />
    ))}
    {[[30, 70], [58, 96], [40, 110], [62, 66]].map(([x, y], i) => (
      <path key={i} className="amb-twinkle" d={`M${x} ${y - 6}q1 5 6 6-5 1-6 6-1-5-6-6 5-1 6-6z`} fill="#fff" />
    ))}
  </svg>
);

const Garland = ({ className = '' }) => (
  <svg viewBox="0 0 360 80" className={`mo amb-sway-b ${className}`} preserveAspectRatio="none">
    <path d="M-5 6Q90 60 180 30T365 6" stroke="#3da34d" strokeWidth="2.4" fill="none" />
    {Array.from({ length: 17 }).map((_, i) => {
      const t = i / 16;
      const x = -5 + t * 370;
      const y = 6 + Math.sin(t * Math.PI) * 38 + (t > 0.5 ? -(t - 0.5) * 10 : 0);
      return (
        <g key={i} transform={`translate(${x} ${y})`}>
          {Array.from({ length: 8 }).map((_, k) => (
            <ellipse key={k} cx="0" cy="-8" rx="4.6" ry="8" fill={k % 2 ? '#ffb300' : '#ff7a00'} transform={`rotate(${k * 45})`} />
          ))}
          <circle r="4" fill="#d84a00" />
        </g>
      );
    })}
  </svg>
);

const Paisley = ({ className = '', flip }) => (
  <svg viewBox="0 0 120 140" className={`mo amb-float ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined}>
    <g fill="none" stroke="#f5c542" strokeWidth="2">
      <path d="M20 20q50-18 70 20q18 40-24 70q-40 16-48-30q-4-24 18-30q22-4 22 18" />
      <path d="M36 34q34-10 46 14q10 26-16 44" strokeWidth="1.2" />
    </g>
    {[[88, 30], [96, 52], [30, 100]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="4" fill="#f5c542" />
    ))}
  </svg>
);

const LotusArch = ({ className = '' }) => (
  <svg viewBox="0 0 120 80" className={`mo amb-float ${className}`}>
    <g fill="#f4b6b6" stroke="#c1121f" strokeWidth="1.2">
      <path d="M60 6c14 12 16 36 0 56C44 42 46 18 60 6Z" />
      <path d="M36 16c10 8 20 24 24 46C42 56 28 38 36 16Z" fill="#f7c9c9" />
      <path d="M84 16c-10 8-20 24-24 46 18-6 32-24 24-46Z" fill="#f7c9c9" />
      <path d="M12 34c16 0 34 12 48 28-20 2-44-6-48-28Z" fill="#fbdcdc" />
      <path d="M108 34c-16 0-34 12-48 28 20 2 44-6 48-28Z" fill="#fbdcdc" />
    </g>
    <circle cx="60" cy="52" r="4" fill="#d4a017" />
  </svg>
);

export function Motif({ kind }) {
  switch (kind) {
    case 'peacock':
      return (
        <>
          <Feather className="m-tl" />
          <Feather className="m-tr" flip />
        </>
      );
    case 'disco':
      return (
        <>
          <Disco className="m-disco" />
          <svg viewBox="0 0 60 60" className="mo m-moon amb-float">
            <path d="M40 6a26 26 0 1 0 14 40A22 22 0 0 1 40 6z" fill="#ffd56b" />
          </svg>
        </>
      );
    case 'marigold':
      return <Garland className="m-garland" />;
    case 'paisley':
      return (
        <>
          <Paisley className="m-tl" />
          <Paisley className="m-tr" flip />
        </>
      );
    default:
      return (
        <>
          <LotusArch className="m-lotus-l" />
          <LotusArch className="m-lotus-r" />
        </>
      );
  }
}

export function Camera() {
  return (
    <svg viewBox="0 0 240 250" aria-hidden="true">
      <defs>
        <radialGradient id="lens" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#7aa8ff" />
          <stop offset=".35" stopColor="#1e2a5a" />
          <stop offset="1" stopColor="#05070f" />
        </radialGradient>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b3f4a" />
          <stop offset="1" stopColor="#171a21" />
        </linearGradient>
      </defs>
      <rect x="86" y="52" width="68" height="22" rx="6" fill="#262a33" />
      <rect x="30" y="66" width="180" height="120" rx="16" fill="url(#body)" />
      <rect x="30" y="66" width="180" height="26" rx="12" fill="#a82a3a" opacity=".92" />
      <circle cx="120" cy="132" r="50" fill="#0c0e14" />
      <circle cx="120" cy="132" r="42" fill="url(#lens)" stroke="#555a66" strokeWidth="3" />
      <circle cx="120" cy="132" r="22" fill="none" stroke="#9ab6ff" strokeOpacity=".5" strokeWidth="2" />
      <circle cx="104" cy="116" r="7" fill="#fff" opacity=".6" />
      <rect x="170" y="74" width="26" height="12" rx="3" fill="#fff4c2" />
      <circle cx="48" cy="82" r="5" fill="#ff5a5a" />
      {/* hands */}
      <path d="M10 236C6 200 14 170 40 160l26 10-8 40z" fill="#e6a77a" />
      <path d="M230 236c4-36-4-66-30-76l-26 10 8 40z" fill="#e6a77a" />
      <ellipse cx="46" cy="170" rx="22" ry="12" fill="#e6a77a" transform="rotate(-20 46 170)" />
      <ellipse cx="194" cy="170" rx="22" ry="12" fill="#e6a77a" transform="rotate(20 194 170)" />
    </svg>
  );
}

export function Monogram({ big }) {
  return (
    <svg viewBox="0 0 160 200" className={`mono ${big ? 'mono-big' : ''}`} aria-hidden="true">
      <path className="arch-line" d="M24 190V86q0-62 56-72t56 72v104" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M32 190V90q0-52 48-62t48 62v100" fill="none" stroke="currentColor" strokeWidth=".8" opacity=".6" />
      <text x="48" y="120" fontSize="64" fontFamily="'Cinzel', serif" fontWeight="700" fill="currentColor">R</text>
      <text x="78" y="148" fontSize="54" fontFamily="'Great Vibes', cursive" fill="#d4a017">&amp;</text>
      <text x="86" y="150" fontSize="64" fontFamily="'Cinzel', serif" fontWeight="700" fill="currentColor">A</text>
      <g className="amb-flap" fill="#e0147a">
        <path d="M118 44q-10-12-16 0t16 0z" />
      </g>
      <path d="M60 176q20 8 40 0" stroke="#d4a017" strokeWidth="1.6" fill="none" />
      <path d="M100 52q6-8 12 0" stroke="#d4a017" strokeWidth="1.2" fill="none" />
    </svg>
  );
}
