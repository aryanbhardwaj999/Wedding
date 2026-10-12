// Small gold-framed illustrations that hang beside the dress-code frame.
const art = {
  brass: (
    <svg viewBox="0 0 60 70">
      <rect width="60" height="70" fill="#f6efd8" />
      <path d="M14 34q0-14 16-14t16 14q0 16-8 20H22q-8-4-8-20z" fill="#d9a844" stroke="#8a5d12" strokeWidth="1" />
      <ellipse cx="30" cy="20" rx="12" ry="4" fill="#f0cc6a" stroke="#8a5d12" />
      {[22, 30, 38, 26, 34].map((x, i) => (
        <circle key={i} cx={x} cy={14 - (i % 2) * 3} r="5" fill="#d8466a" />
      ))}
      <ellipse cx="30" cy="58" rx="20" ry="5" fill="#e8c4cc" />
      {[14, 22, 30, 38, 46].map((x) => (
        <circle key={x} cx={x} cy="58" r="3.2" fill="#c8305a" />
      ))}
    </svg>
  ),
  peacock: (
    <svg viewBox="0 0 60 60">
      <rect width="60" height="60" fill="#f6efd8" />
      <path d="M30 56C18 40 18 20 30 6c12 14 12 34 0 50z" fill="#1d8a6a" />
      <path d="M30 50C22 38 22 22 30 12c8 10 8 26 0 38z" fill="#d8b440" />
      <ellipse cx="30" cy="26" rx="7" ry="11" fill="#1d4f9a" />
      <ellipse cx="30" cy="26" rx="3" ry="6" fill="#0f2f6a" />
      <path d="M30 56v-6" stroke="#3a6a3a" strokeWidth="1.4" />
    </svg>
  ),
  green: (
    <svg viewBox="0 0 60 50">
      <rect width="60" height="50" fill="#3f6a3a" />
      {Array.from({ length: 22 }).map((_, i) => (
        <ellipse key={i} cx={(i * 19) % 60} cy={(i * 13) % 50} rx="9" ry="3.6" fill={i % 2 ? '#5a8a4a' : '#2c5230'} transform={`rotate(${(i * 41) % 180} ${(i * 19) % 60} ${(i * 13) % 50})`} />
      ))}
    </svg>
  ),
  pavilion: (
    <svg viewBox="0 0 60 70">
      <rect width="60" height="70" fill="#f6efd8" />
      <g fill="none" stroke="#8a6a3a" strokeWidth="1">
        <path d="M14 26q16-22 32 0z" fill="#e8d2a0" />
        <path d="M18 26v22M42 26v22M26 26v22M34 26v22" />
        <path d="M12 48h36v4H12z" fill="#d8c090" />
        <circle cx="20" cy="58" r="7" />
        <circle cx="42" cy="58" r="7" />
        <path d="M20 58h22" />
      </g>
    </svg>
  ),
  disco: (
    <svg viewBox="0 0 60 60">
      <rect width="60" height="60" fill="#f6efd8" />
      <circle cx="30" cy="32" r="20" fill="#d8aa3a" />
      {Array.from({ length: 6 }).map((_, i) => (
        <path key={i} d={`M10 ${22 + i * 6}q20 6 40 0`} stroke="#8a6a1a" strokeWidth=".8" fill="none" />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <path key={i} d={`M${16 + i * 6} 12q-8 20 0 40`} stroke="#8a6a1a" strokeWidth=".8" fill="none" />
      ))}
      <circle cx="23" cy="24" r="6" fill="#fff6c8" opacity=".6" />
      <path d="M30 12V4" stroke="#8a6a1a" />
    </svg>
  ),
  butterfly: (
    <svg viewBox="0 0 60 50">
      <rect width="60" height="50" fill="#f6efd8" />
      <path d="M30 26C18 6 6 12 10 26c3 9 14 8 20 0zM30 26c12-20 24-14 20 0-3 9-14 8-20 0z" fill="#e87aa8" />
      <path d="M30 28C20 32 18 44 26 44c4 0 6-8 4-16zM30 28c10 4 12 16 4 16-4 0-6-8-4-16z" fill="#f7c4dc" />
      <rect x="29" y="14" width="2" height="26" rx="1" fill="#4a2a3a" />
    </svg>
  ),
  lotus: (
    <svg viewBox="0 0 60 50">
      <rect width="60" height="50" fill="#f6efd8" />
      <g fill="#e6b83a" stroke="#a87a1a" strokeWidth=".8">
        <path d="M30 8c10 8 12 20 0 32C18 28 20 16 30 8z" />
        <path d="M18 14c8 4 12 14 12 26-12-4-18-14-12-26zM42 14c-8 4-12 14-12 26 12-4 18-14 12-26z" />
        <path d="M8 24c10 0 18 6 22 16-12 0-20-6-22-16zM52 24c-10 0-18 6-22 16 12 0 20-6 22-16z" />
      </g>
    </svg>
  ),
  necklace: (
    <svg viewBox="0 0 60 70">
      <rect width="60" height="70" fill="#4a1226" />
      <path d="M12 12q18 36 36 0" stroke="#e6b83a" strokeWidth="2.4" fill="none" />
      <path d="M18 30q12 18 24 0" stroke="#e6b83a" strokeWidth="2" fill="none" />
      {[16, 24, 30, 36, 44].map((x, i) => (
        <circle key={x} cx={x} cy={[26, 38, 44, 38, 26][i]} r="3" fill={i === 2 ? '#d8305a' : '#e6b83a'} />
      ))}
      <path d="M26 46h8l-4 12z" fill="#e6b83a" />
      <circle cx="18" cy="62" r="3" fill="#e6b83a" />
      <circle cx="42" cy="62" r="3" fill="#e6b83a" />
    </svg>
  ),
  paisley: (
    <svg viewBox="0 0 60 50">
      <rect width="60" height="50" fill="#6a7230" />
      {[[14, 14], [38, 12], [24, 34], [48, 34], [8, 40]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y}q10-10 16 0q4 12-10 14q-10-4-6-14z`} fill="none" stroke="#d8d8a0" strokeWidth="1.4" />
      ))}
    </svg>
  ),
  roses: (
    <svg viewBox="0 0 60 70">
      <rect width="60" height="70" fill="#eaf0e2" />
      {[24, 32, 40, 28, 36].map((x, i) => (
        <circle key={i} cx={x} cy={14 + (i % 2) * 6} r="6" fill="#c8202e" stroke="#7a0f1a" strokeWidth=".8" />
      ))}
      <path d="M20 26q10 8 20 0v14q-10 6-20 0z" fill="#d9b24a" stroke="#8a6a1a" />
      <ellipse cx="30" cy="58" rx="22" ry="5" fill="#e8e0c8" stroke="#b8a070" />
      <path d="M14 56q4-14 8-14M46 56q-4-14-8-14" stroke="#b8a070" fill="none" />
    </svg>
  ),
  bluewhite: (
    <svg viewBox="0 0 60 50">
      <rect width="60" height="50" fill="#f2f6f6" />
      <path d="M6 40c8-16 18-22 30-18 8 2 14 8 18 16z" fill="#bcd8e6" />
      <path d="M12 34q10-8 22-4M20 40q12-6 26-2" stroke="#4a7aa8" strokeWidth="1.4" fill="none" />
      <circle cx="44" cy="14" r="5" fill="#d8e8f0" />
    </svg>
  ),
};

export default function MiniFrame({ kind, className = '' }) {
  return (
    <div className={`mini ${className}`}>
      <div className="mini-in">{art[kind] || art.green}</div>
    </div>
  );
}
