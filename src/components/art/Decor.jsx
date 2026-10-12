// Animated overlays for event scenes. Motion is wired by class name in animation/ambient.js
const Star4 = ({ className = '', style }) => (
  <svg viewBox="0 0 20 20" className={`spark amb-twinkle ${className}`} style={style}>
    <path d="M10 0q1 9 10 10-9 1-10 10-1-9-10-10 9-1 10-10z" fill="#fff6d0" />
  </svg>
);

export const Sparkles = ({ count = 14, region = [0, 0, 100, 100] }) => (
  <div className="sparkles" aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <Star4
        key={i}
        style={{
          left: `${region[0] + ((i * 37 + 8) % (region[2] - region[0]))}%`,
          top: `${region[1] + ((i * 53 + 5) % (region[3] - region[1]))}%`,
          width: `${1.8 + (i % 3) * 1.2}cqw`,
        }}
      />
    ))}
  </div>
);

const Lotus = ({ className = '', white }) => (
  <svg viewBox="0 0 100 70" className={`deco amb-float ${className}`}>
    <g fill={white ? '#fffaf0' : '#f7a8c4'} stroke={white ? '#cfc8b8' : '#c2185b'} strokeWidth="1">
      <path d="M50 6c14 12 16 32 0 52C34 38 36 18 50 6Z" />
      <path d="M28 14c10 6 18 20 22 44C34 52 20 34 28 14Z" />
      <path d="M72 14c-10 6-18 20-22 44 16-6 30-24 22-44Z" />
      <path d="M8 30c14 0 30 10 42 28-18 2-38-6-42-28Z" />
      <path d="M92 30c-14 0-30 10-42 28 18 2 38-6 42-28Z" />
    </g>
  </svg>
);

const Flowers = ({ className = '' }) => (
  <svg viewBox="0 0 120 120" className={`deco amb-sway-b ${className}`}>
    {[[20, 80, 14], [44, 56, 10], [70, 84, 16], [96, 60, 11], [58, 100, 12], [30, 36, 9]].map(([x, y, r], i) => (
      <g key={i}>
        {Array.from({ length: 6 }).map((_, k) => (
          <ellipse key={k} cx={x} cy={y - r * 0.6} rx={r * 0.34} ry={r * 0.6} fill="#fffdf6" stroke="#e0dccc" strokeWidth=".6" transform={`rotate(${k * 60} ${x} ${y})`} />
        ))}
        <circle cx={x} cy={y} r={r * 0.22} fill="#e8c25a" />
      </g>
    ))}
    <g stroke="#4a7a3a" strokeWidth="1.5" fill="none">
      <path d="M20 94q-4 20 0 26M44 66q-2 30 4 54M70 100q0 12 2 20M96 71q2 24-6 49" />
    </g>
  </svg>
);

const PinkFlower = ({ className = '' }) => (
  <svg viewBox="0 0 100 80" className={`deco amb-sway-b ${className}`}>
    {Array.from({ length: 7 }).map((_, k) => (
      <ellipse key={k} cx="30" cy="22" rx="9" ry="20" fill={k % 2 ? '#f5a6c8' : '#e8789e'} transform={`rotate(${k * 36 - 90} 30 40)`} />
    ))}
    <circle cx="30" cy="40" r="6" fill="#f8d84a" />
  </svg>
);

const Bells = ({ className = '' }) => (
  <svg viewBox="0 0 70 130" className={`deco ${className}`}>
    {[14, 46].map((x, i) => (
      <g key={x} className="amb-ring" style={{ transformOrigin: `${x}px 0` }}>
        <path d={`M${x} 0v${50 + i * 20}`} stroke="#fffdf0" strokeWidth="2.4" strokeDasharray="3 2" />
        <path d={`M${x - 9} ${70 + i * 20}q9-26 18 0z`} fill="#d9a844" stroke="#8a5d12" strokeWidth=".8" />
        <circle cx={x} cy={74 + i * 20} r="2.6" fill="#8a5d12" />
        <path d={`M${x - 3} ${50 + i * 20}h6v10h-6z`} fill="#c9962b" />
      </g>
    ))}
  </svg>
);

const Lantern = ({ className = '' }) => (
  <div className={`deco lantern ${className}`}>
    <div className="amb-glow lantern-glow" />
    <svg viewBox="0 0 40 80" className="amb-sway">
      <path d="M20 0v14" stroke="#d9b45a" strokeWidth="1.2" />
      <path d="M12 14h16l3 5H9z" fill="#c9962b" />
      <path d="M10 19h20l-2 38H12z" fill="#f6c25a" stroke="#8a5d12" strokeWidth="1" />
      <path d="M20 19v38M15 19l-1 38M25 19l1 38" stroke="#8a5d12" strokeWidth=".7" />
      <path d="M12 57h16l-2 6H14z" fill="#c9962b" />
    </svg>
  </div>
);

const Notes = () => (
  <>
    {['♪', '♫', '♪', '♬'].map((n, i) => (
      <span key={i} className="mnote amb-note" style={{ left: `${10 + i * 22}%`, top: `${36 + (i % 2) * 8}%` }}>
        {n}
      </span>
    ))}
  </>
);

const Fairy = () => (
  <svg viewBox="0 0 360 80" className="deco fairy" preserveAspectRatio="none">
    {[0, 1].map((r) => (
      <g key={r}>
        <path d={`M-10 ${8 + r * 14}Q90 ${46 + r * 10} 190 ${14 + r * 10}T380 ${6 + r * 14}`} stroke="#a89878" strokeWidth=".8" fill="none" opacity=".7" />
        {Array.from({ length: 16 }).map((_, i) => {
          const t = i / 15;
          const x = -6 + t * 372;
          const y = r === 0 ? 14 + Math.sin(t * Math.PI * 2) * 12 + 18 * t * (1 - t) * 3 : 24 + Math.sin(t * Math.PI * 2.4) * 10;
          return <circle key={i} className="amb-twinkle-dot" cx={x} cy={y} r="2.2" fill="#fff0b8" />;
        })}
      </g>
    ))}
  </svg>
);

const Chandelier = ({ className = '' }) => (
  <svg viewBox="0 0 70 80" className={`deco amb-sway ${className}`}>
    <path d="M35 0v18" stroke="#c9a040" strokeWidth="1.4" />
    <path d="M22 18h26l-4 10H26z" fill="#d9aa44" />
    <path d="M10 34q25 16 50 0M16 44q19 12 38 0" stroke="#d9aa44" strokeWidth="1.6" fill="none" />
    {[12, 22, 35, 48, 58].map((x, i) => (
      <g key={x}>
        <path d={`M${x} 34v${8 + (i % 2) * 6}`} stroke="#f0d88a" strokeWidth="1" />
        <circle className="amb-twinkle-dot" cx={x} cy={44 + (i % 2) * 6} r="2.4" fill="#fff0b8" />
      </g>
    ))}
    {[18, 30, 42, 52].map((x) => (
      <path key={x} d={`M${x} 52l-2 12 2 4 2-4z`} fill="#f4e4a8" opacity=".8" />
    ))}
  </svg>
);

const Petals = ({ count = 14 }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="petal amb-fall" style={{ left: `${(i * 97) % 100}%` }}>
        <svg viewBox="0 0 20 28">
          <path d="M10 0C20 8 20 22 10 28 0 22 0 8 10 0Z" fill={i % 3 ? '#f7b8c4' : '#f5d6a8'} />
        </svg>
      </div>
    ))}
  </>
);

const Bokeh = () => (
  <>
    {Array.from({ length: 14 }).map((_, i) => (
      <i key={i} className="bokeh amb-twinkle-dot" style={{ left: `${(i * 71) % 96}%`, top: `${(i * 43) % 60}%`, width: `${1.4 + (i % 4)}cqw`, height: `${1.4 + (i % 4)}cqw` }} />
    ))}
  </>
);

export default function Decor({ kinds = [] }) {
  const has = (k) => kinds.includes(k);
  return (
    <div className="decor-layer" aria-hidden="true">
      {has('stars') && <Sparkles count={10} region={[0, 0, 100, 28]} />}
      {has('lotus') && <Lotus className="d-lotus" white />}
      {has('flowers') && <Flowers className="d-flowers-l" />}
      {has('flowers') && <Flowers className="d-flowers-r" />}
      {has('fairy') && <Fairy />}
      {has('bokeh') && <Bokeh />}
      {has('chandelier') && <Chandelier className="d-chandelier" />}
      {has('pinkflower') && <PinkFlower className="d-pinkflower" />}
      {has('petals') && <Petals />}
      {has('bells') && <Bells className="d-bells" />}
      {has('lanterns') && (
        <>
          <Lantern className="d-lan1" />
          <Lantern className="d-lan2" />
          <Lantern className="d-lan3" />
        </>
      )}
      {has('notes') && <Notes />}
    </div>
  );
}
