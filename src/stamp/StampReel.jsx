import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Pause, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import Decor from '../components/art/Decor.jsx';
import { buildAmbient } from '../animation/ambient.js';
import { trip, hindi, endText, cards } from './stampData.js';
import { buildStampTimeline, MARKS } from './stampTimeline.js';
import { Motif, Camera, Monogram } from './StampArt.jsx';

gsap.registerPlugin(useGSAP);

const CLEAN = new URLSearchParams(window.location.search).has('clean'); // ?clean hides the UI for screen-recording
const NAMES = ['Begin', 'Title', 'Trip', 'Events', ...cards.map((c) => c.title), 'Say cheese', 'Finale'];

const Chars = ({ text }) =>
  text
    .split(' ')
    .map((w, wi) => (
      <span key={wi} className="word">
        {[...w].map((c, i) => (
          <span key={i} className="ch">
            {c}
          </span>
        ))}
      </span>
    ))
    .reduce((a, b, i) => (i ? [...a, ' ', b] : [b]), []);

function Edge({ className = '' }) {
  return <div className={`stamp-edge ${className}`} />;
}

export default function StampReel() {
  const root = useRef(null);
  const tlRef = useRef(null);
  const marksRef = useRef([]);
  const ambient = useRef([]);
  const fill = useRef(null);
  const sceneRef = useRef(0);
  const scrubbing = useRef(false);
  const [playing, setPlaying] = useState(true);
  const [scene, setScene] = useState(0);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const tl = buildStampTimeline(q, root.current);
      tlRef.current = tl;
      marksRef.current = MARKS;
      ambient.current = buildAmbient(root.current);
      const at = new URLSearchParams(window.location.search).get('t'); // ?t=12 freezes at 12s (debug / stills)
      if (at !== null) tl.time(parseFloat(at)).pause();
      tl.eventCallback('onUpdate', () => {
        if (fill.current) fill.current.style.transform = `scaleX(${tl.time() / tl.duration()})`;
        const now = tl.time();
        let idx = 0;
        MARKS.forEach((m, i) => now + 0.001 >= m && (idx = i));
        if (idx !== sceneRef.current) {
          sceneRef.current = idx;
          setScene(idx);
        }
      });
    },
    { scope: root }
  );

  const applyPlaying = useCallback((on) => {
    const tl = tlRef.current;
    if (!tl) return;
    tl.paused(!on);
    ambient.current.forEach((t) => t.paused(!on));
    setPlaying(on);
  }, []);
  const toggle = () => applyPlaying(!playing);
  const replay = () => {
    tlRef.current.restart();
    applyPlaying(true);
  };
  const goTo = useCallback((i) => {
    const n = MARKS.length;
    tlRef.current.time(MARKS[(i + n) % n] + (i > 0 ? 0.05 : 0));
  }, []);
  const next = () => goTo(sceneRef.current + 1);
  const prev = () => goTo(tlRef.current.time() - MARKS[sceneRef.current] > 1.5 ? sceneRef.current : sceneRef.current - 1);

  const scrubTo = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    tlRef.current.time(p * tlRef.current.duration());
  };
  const down = (e) => {
    scrubbing.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    tlRef.current.pause();
    scrubTo(e);
  };
  const move = (e) => scrubbing.current && scrubTo(e);
  const up = () => {
    if (!scrubbing.current) return;
    scrubbing.current = false;
    applyPlaying(playing);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Space') (e.preventDefault(), toggle());
      if (e.code === 'ArrowRight') next();
      if (e.code === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <div className="reel">
      <div className="canvas" ref={root}>
        {/* wallpaper */}
        <div className="sr-bg">
          <div className="sr-bg-in" />
        </div>

        {/* 1 · "let the preparations begin" stamp */}
        <section className="sr-sec sr-intro">
          <div className="intro-stamp">
            <Edge />
            <div className="stamp-face intro-face">
              {hindi.start.map((w) => (
                <span key={w} className="hi-w">
                  {w}
                </span>
              ))}
              <i className="intro-flower" />
            </div>
          </div>
        </section>

        {/* 2 · title */}
        <section className="sr-sec sr-title">
          <p className="sr-presents">{hindi.presents}</p>
          <h1 className="sr-h">
            <span className="ln">
              <Chars text="WARDROBE" />
            </span>
            <span className="ln">
              <Chars text="PLANNER" />
            </span>
          </h1>
          <p className="sr-sub">for {trip.couple}&rsquo;s wedding</p>
        </section>

        {/* 3 · trip stamps */}
        <section className="sr-sec sr-info">
          <div className="istamp i-couple">
            <Edge className="sm" />
            <div className="stamp-face">
              <img src="/photos/hawa_front.jpg" alt="" />
              <span className="i-names">{trip.couple}</span>
            </div>
          </div>
          <div className="istamp i-date">
            <Edge className="sm" />
            <div className="stamp-face">
              <span className="i-dates">{trip.dates[0]}</span>
              <span className="i-month">{trip.dates[1]}</span>
              <span className="i-year">{trip.year}</span>
            </div>
          </div>
          <div className="istamp i-mono">
            <Edge className="sm" />
            <div className="stamp-face">
              <Monogram />
            </div>
          </div>
          <div className="istamp i-venue">
            <Edge className="sm" />
            <div className="stamp-face">
              <img src="/photos/gate_street.jpg" alt="" />
              <span className="i-city">{trip.city.toUpperCase()}</span>
              <span className="i-state">{trip.state}</span>
            </div>
          </div>
        </section>

        {/* 4 · event stamps → full cards */}
        <section className="sr-sec sr-cards">
          {cards.map((c, i) => (
            <article
              key={c.id}
              className={`ecard ec-${c.id}`}
              data-i={i}
              style={{ '--bg': c.theme.bg, '--bg2': c.theme.bg2, '--ink': c.theme.ink, '--accent': c.theme.accent, '--gold': c.theme.gold }}
            >
              <Edge />
              <div className="ecard-face">
                <Decor kinds={c.decor} />
                <Motif kind={c.motif} />
                <div className="ec-frame" />
                <p className="ec-date ec-in">{c.date}</p>
                <h2 className="ec-title">
                  <Chars text={c.title} />
                </h2>
                <p className="ec-kind ec-in">{c.kind}</p>
                <div className="ec-figs">
                  {c.figs.map((f, k) => (
                    <div key={k} className="ec-slot">
                      <i className="ec-spot" />
                      <img className="ec-fig amb-bob" src={`/cutouts/${f.img}.png`} alt="" draggable={false} />
                      <i className="ec-floor" />
                    </div>
                  ))}
                </div>
                <div className="ec-burst">
                  {Array.from({ length: 16 }).map((_, k) => (
                    <i key={k} />
                  ))}
                </div>
                <p className="ec-blurb ec-in">{c.blurb}</p>
                <p className="ec-dress ec-in">
                  Dress code · <b>{c.dress}</b>
                </p>
                <div className="ec-pal">
                  {c.palette.map((p) => (
                    <span key={p.n} className="ec-sw">
                      <i style={{ background: p.c }} />
                      {p.n}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <div className="cloud" />
        </section>

        {/* 5 · say cheese */}
        <section className="sr-sec sr-shutter">
          <p className="sh-text">Capture every look</p>
          <div className="sh-cam">
            <Camera />
          </div>
          <div className="flash" />
        </section>

        {/* 6 · finale */}
        <section className="sr-sec sr-end">
          <div className="end-arch">
            <Monogram big />
          </div>
          <p className="end-date">
            {trip.dates[0].toUpperCase()} {trip.dates[1]}
          </p>
          <div className="end-rule" />
          <p className="end-l1">{endText.line1}</p>
          <p className="end-l2">{endText.line2}</p>
          <p className="end-sign">&mdash; {endText.signoff} &mdash;</p>
          <p className="end-ready">{endText.ready}</p>
          <ul className="end-steps">
            {endText.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <div className="vignette" />
        <div className="grain" />
      </div>

      {!CLEAN && (
        <>
          <button className="tap tap-l" aria-label="Previous" onClick={prev} />
          <button className="tap tap-c" aria-label="Play or pause" onClick={toggle} />
          <button className="tap tap-r" aria-label="Next" onClick={next} />
          <div className="ui-bar" onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} role="slider" aria-label="Progress">
            <div className="ui-bar-track">
              <div className="ui-bar-fill" ref={fill} />
            </div>
          </div>
          <div className="ui-controls">
            <button onClick={prev} aria-label="Previous scene"><ChevronLeft size={16} /></button>
            <button onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>{playing ? <Pause size={16} /> : <Play size={16} />}</button>
            <button onClick={next} aria-label="Next scene"><ChevronRight size={16} /></button>
            <button onClick={replay} aria-label="Replay"><RotateCcw size={15} /></button>
          </div>
          <div className="ui-label">{NAMES[scene]}</div>
        </>
      )}
    </div>
  );
}
