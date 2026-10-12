import Cutout from '../art/Cutout.jsx';
import Decor from '../art/Decor.jsx';
import MiniFrame from '../art/MiniArt.jsx';
import { StreetBackdrop, OutroBackdrop, EventBg } from '../art/Backdrops.jsx';
import { WomanBack, ManBack, Cyclist } from '../art/People.jsx';
import { wedding, intro, events, pleaseNote, outro, people } from '../../data/eventsData.js';

// Round portrait with gold ring; hides itself if the photo file is not there
const Avatar = ({ src, className = '' }) => (
  <img className={`avatar ${className}`} src={src} alt="" draggable={false} onError={(e) => (e.currentTarget.style.display = 'none')} />
);

const Chars = ({ text }) =>
  text.split(' ').map((w, wi) => (
    <span key={wi} className="word">
      {[...w].map((c, i) => (
        <span key={i} className="ch">
          {c}
        </span>
      ))}
    </span>
  )).reduce((a, b, i) => (i ? [...a, ' ', b] : [b]), []);

/* ───────── Cover / invitation card (sized in em; 1em = 1% of card width) ───────── */
const SketchCorner = ({ flip }) => (
  <svg viewBox="0 0 120 90" className={`cv-sketch ${flip ? 'flip' : ''}`}>
    <g stroke="#b8943c" strokeWidth=".9" fill="none" opacity=".85">
      <path d="M0 90V30L30 22V86M30 22l30 -8v72M0 30l30-8M10 40h14M10 52h14M10 64h14M40 30h12M40 42h12M40 54h12" />
      <path d="M60 14l34 8v64M60 86h60M94 22V10l14 4v76M66 30h18M66 44h18M66 58h18M100 28h12M100 44h12" />
      <path d="M6 30q10-14 20-8M64 14q10-12 22 0" />
    </g>
  </svg>
);

export function Cover() {
  return (
    <div className="cover">
      <div className="cv-border" />
      <h1 className="cv-title">
        <span>{wedding.title[0]}</span>
        <span>{wedding.title[1]}</span>
      </h1>
      <p className="cv-small cv-in">YOUR STYLE GUIDE FOR</p>
      <p className="cv-names cv-in">{wedding.couple}’s</p>
      <p className="cv-small cv-in cv-wed">WEDDING</p>
      <p className="cv-date cv-in">
        {wedding.dates.toUpperCase()}
        <br />
        {wedding.city.toUpperCase()}
      </p>
      <SketchCorner />
      <SketchCorner flip />
      <div className="cv-photo cv-in">
        <div className="cv-photo-in">
          <Cutout imageUrl="/cutouts/lehenga_red.webp" className="cv-f" />
          <Cutout imageUrl="/cutouts/sherwani4.webp" className="cv-m" />
          <img className="cv-face cv-face-l" src={people.ashana} alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
          <img className="cv-face cv-face-r" src={people.rajat} alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
      </div>
    </div>
  );
}

/* ───────── Scene 1 — Shaadi ke Kapde ───────── */
export function Scene1() {
  return (
    <section className="scene s1">
      <div className="s1-bg">
        <StreetBackdrop />
      </div>
      <div className="s1-rays" />
      {Array.from({ length: 14 }).map((_, i) => (
        <i key={i} className="mote amb-drift" style={{ left: `${(i * 61) % 96}%`, top: `${12 + ((i * 37) % 60)}%` }} />
      ))}
      <img className="s1-auto" src="/cutouts/auto_jaipur.webp" alt="" draggable={false} />
      <div className="s1-lamp amb-glow" />
      <img className="s1-tailor" src="/cutouts/tailor.webp" alt="" draggable={false} />
      <div className="s1-couple">
        <WomanBack className="s1-woman" />
        <ManBack className="s1-man" />
      </div>
      <div className="bubble b-woman">
        <Avatar src={people.ashana} className="av-l" />
        {intro.chat.woman}
      </div>
      <div className="bubble b-tailor">{intro.chat.tailor}</div>
      <div className="bubble b-man">
        <Avatar src={people.rajat} className="av-l" />
        {intro.chat.man.split('\n').map((l, i) => (
          <span key={i}>
            {l}
            <br />
          </span>
        ))}
      </div>
      <div className="s1-card">
        <Cover />
      </div>
    </section>
  );
}

/* ───────── Scene 2 — cover ───────── */
export function Scene2() {
  return (
    <section className="scene s2">
      <div className="s2-cardwrap">
        <Cover />
      </div>
    </section>
  );
}

/* ───────── Scenes 3–7 — events ───────── */
export function EventScene({ ev, index }) {
  const style = { '--script': ev.script, '--body': ev.body };
  return (
    <section className={`scene ev ev-${ev.id}`} data-ev={index} style={style}>
      <div className="ev-card">
        <div className="ev-bg">
          <EventBg kind={ev.bg} />
        </div>
        <Decor kinds={ev.decor} />
        <h2 className="ev-title">
          <Chars text={ev.title} />
        </h2>
        <p className="ev-sub ev-in">{ev.sub}</p>

        <div className="ev-frame">
          <div className="ev-paper">
            <p className="ev-attire ev-txt">Attire :</p>
            <p className="ev-phrase ev-txt" style={{ '--n': ev.attire.length }}>
              {ev.attire}
            </p>
            <div className="ev-dots">
              {ev.palette.map((c) => (
                <i key={c} className="dot" style={{ background: c }} />
              ))}
            </div>
            <p className="ev-pal ev-txt">Color Palette</p>
            <ul className="ev-lines">
              {ev.lines.map((l) => (
                <li key={l} className="ev-txt">
                  {l}
                </li>
              ))}
            </ul>
            <div className="ev-shine" />
          </div>
        </div>
        <MiniFrame kind={ev.minis[0]} className="mini-a" />
        <MiniFrame kind={ev.minis[1]} className="mini-b" />
        <MiniFrame kind={ev.minis[2]} className="mini-c" />

        <div className="ev-models">
          {ev.models.map((m, i) => (
            <Cutout key={i} imageUrl={m.img} className={`cut-${m.row}`} style={{ left: `${m.x}cqw`, height: `${m.h}cqw`, bottom: `${m.b}cqw` }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Scene 8 — Please Note ───────── */
const Luggage = () => (
  <svg viewBox="0 0 80 70" className="luggage" aria-hidden="true">
    <g>
      <path d="M12 12h26v46a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3z" fill="#7a9a6a" />
      <path d="M12 12h26v46" fill="none" stroke="#5a7a4a" strokeWidth="1" />
      {[18, 25, 32].map((x) => (
        <path key={x} d={`M${x} 16v40`} stroke="#6a8a5a" strokeWidth="1.4" />
      ))}
      <path d="M20 12V6h10v6" fill="none" stroke="#4a3a2a" strokeWidth="2" />
      <circle cx="18" cy="63" r="2.4" fill="#2a2a2a" />
      <circle cx="32" cy="63" r="2.4" fill="#2a2a2a" />
    </g>
    <g>
      <rect x="42" y="34" width="32" height="26" rx="4" fill="#e8a0b8" stroke="#c8708a" />
      <path d="M52 34v-5h12v5" fill="none" stroke="#8a4a5a" strokeWidth="2" />
      <rect x="42" y="44" width="32" height="3" fill="#c8708a" opacity=".6" />
      <circle cx="58" cy="52" r="2" fill="#c8708a" />
    </g>
  </svg>
);

export function Scene8() {
  return (
    <section className="scene s8">
      <div className="s8-bg">
        <OutroBackdrop />
      </div>
      <div className="note">
        <h2>
          <Chars text={pleaseNote.title} />
        </h2>
        <MiniFrame kind="roses" className="note-mini" />
        {pleaseNote.paragraphs.map((p) => (
          <p key={p} className="note-p">
            {p}
          </p>
        ))}
        <Luggage />
      </div>
    </section>
  );
}

/* ───────── Scene 9 — outro ───────── */
export function Scene9() {
  return (
    <section className="scene s9">
      <div className="s9-bg">
        <OutroBackdrop />
      </div>
      <div className="s9-cyclist">
        <Cyclist />
      </div>
      <div className="s9-end">
        <div className="s9-faces">
          <Avatar src={people.ashana} />
          <Avatar src={people.rajat} />
        </div>
        <p>See you in the Pink City</p>
        <h3>{wedding.couple}</h3>
      </div>
      {outro.credit && <p className="s9-credit">{outro.credit}</p>}
    </section>
  );
}

export const allEvents = events;
