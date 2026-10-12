import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Pause, Play, RotateCcw, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';
import { Scene1, Scene2, EventScene, Scene8, Scene9 } from './scenes/Scenes.jsx';
import { buildScene1, buildScene2, eventBuilders, buildScene8, buildScene9 } from '../animation/scenes.js';
import { buildAmbient } from '../animation/ambient.js';
import { events, AUDIO_SRC } from '../data/eventsData.js';

gsap.registerPlugin(useGSAP);

const OVERLAP = 0.25; // next scene starts this long before the previous one ends
const SCENE_NAMES = ['Intro', 'Cover', ...events.map((e) => e.title), 'Note', 'Outro'];
const CLEAN = new URLSearchParams(window.location.search).has('clean'); // ?clean hides UI for screen-recording

/** Master timeline: one continuous, looping, scrubbable timeline. */
function buildMaster(q) {
  const tl = gsap.timeline({ paused: false, repeat: -1 });
  const builders = [buildScene1, buildScene2, ...eventBuilders, buildScene8, buildScene9];
  const marks = [];
  let t = 0;
  builders.forEach((build, i) => {
    marks.push(t);
    tl.addLabel(`scene${i}`, t);
    t = build(tl, q, t) - OVERLAP;
  });
  return { tl, marks };
}

export default function Reel() {
  const root = useRef(null);
  const tlRef = useRef(null);
  const marksRef = useRef([]);
  const ambient = useRef([]);
  const fill = useRef(null);
  const audio = useRef(null);
  const sceneRef = useRef(0);
  const scrubbing = useRef(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [scene, setScene] = useState(0);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const { tl, marks } = buildMaster(q);
      tlRef.current = tl;
      marksRef.current = marks;
      const at = new URLSearchParams(window.location.search).get('t'); // ?t=12 → freeze at 12s (debug / stills)
      if (at !== null) tl.time(parseFloat(at)).pause();
      ambient.current = buildAmbient(root.current);

      tl.eventCallback('onUpdate', () => {
        const p = tl.time() / tl.duration();
        if (fill.current) fill.current.style.transform = `scaleX(${p})`;
        const now = tl.time();
        let idx = 0;
        marks.forEach((m, i) => now + 0.001 >= m && (idx = i));
        if (idx !== sceneRef.current) {
          sceneRef.current = idx;
          setScene(idx);
        }
      });
    },
    { scope: root }
  );

  /* ── playback ── */
  const applyPlaying = useCallback((on) => {
    const tl = tlRef.current;
    if (!tl) return;
    tl.paused(!on);
    ambient.current.forEach((t) => t.paused(!on));
    const a = audio.current;
    if (a) on && !a.muted ? a.play().catch(() => {}) : a.pause();
    setPlaying(on);
  }, []);

  const toggle = () => applyPlaying(!playing);
  const replay = () => {
    tlRef.current.restart();
    applyPlaying(true);
  };

  const goTo = useCallback((i) => {
    const marks = marksRef.current;
    const n = marks.length;
    const idx = (i + n) % n;
    tlRef.current.time(idx === 0 ? 0 : marks[idx] + OVERLAP);
  }, []);
  const next = () => goTo(sceneRef.current + 1);
  const prev = () => {
    const tl = tlRef.current;
    const cur = sceneRef.current;
    goTo(tl.time() - marksRef.current[cur] > 1.5 ? cur : cur - 1);
  };

  /* ── audio (optional track in /public/audio/bgm.mp3, kept in sync with the timeline) ── */
  const toggleMute = () => {
    const a = audio.current;
    const m = !muted;
    setMuted(m);
    if (a) {
      a.muted = m;
      if (!m && playing) {
        a.currentTime = tlRef.current.time() % (a.duration || Infinity) || 0;
        a.play().catch(() => {});
      }
    }
  };
  useEffect(() => {
    const id = setInterval(() => {
      const a = audio.current;
      const tl = tlRef.current;
      if (!a || !tl || a.muted || a.paused || !isFinite(a.duration)) return;
      const target = tl.time() % a.duration;
      if (Math.abs(a.currentTime - target) > 0.4) a.currentTime = target;
    }, 500);
    return () => clearInterval(id);
  }, []);

  /* ── scrubbable progress bar ── */
  const scrubTo = (e, el) => {
    const r = el.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    const tl = tlRef.current;
    tl.time(p * tl.duration());
  };
  const onDown = (e) => {
    scrubbing.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    tlRef.current.pause();
    ambient.current.forEach((t) => t.pause());
    scrubTo(e, e.currentTarget);
  };
  const onMove = (e) => scrubbing.current && scrubTo(e, e.currentTarget);
  const onUp = () => {
    if (!scrubbing.current) return;
    scrubbing.current = false;
    applyPlaying(playing);
  };

  /* ── keyboard ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Space') (e.preventDefault(), toggle());
      if (e.code === 'ArrowRight') next();
      if (e.code === 'ArrowLeft') prev();
      if (e.key === 'm') toggleMute();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <div className="reel">
      <div className="canvas" ref={root}>
        <Scene1 />
        <Scene2 />
        {events.map((ev, i) => (
          <EventScene key={ev.id} ev={ev} index={i} />
        ))}
        <Scene8 />
        <Scene9 />
        <div className="vignette" />
        <div className="grain" />
      </div>

      {AUDIO_SRC && <audio ref={audio} src={AUDIO_SRC} loop muted preload="auto" />}

      {!CLEAN && (
        <>
          <button className="tap tap-l" aria-label="Previous" onClick={prev} />
          <button className="tap tap-c" aria-label="Play or pause" onClick={toggle} />
          <button className="tap tap-r" aria-label="Next" onClick={next} />

          <div className="ui-bar" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} role="slider" aria-label="Progress" aria-valuemin={0} aria-valuemax={100}>
            <div className="ui-bar-track">
              <div className="ui-bar-fill" ref={fill} />
            </div>
          </div>

          <div className="ui-controls">
            <button onClick={prev} aria-label="Previous scene"><ChevronLeft size={16} /></button>
            <button onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>{playing ? <Pause size={16} /> : <Play size={16} />}</button>
            <button onClick={next} aria-label="Next scene"><ChevronRight size={16} /></button>
            <button onClick={replay} aria-label="Replay"><RotateCcw size={15} /></button>
            <button onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>{muted ? <VolumeX size={16} /> : <Volume2 size={16} />}</button>
          </div>
          <div className="ui-label">{SCENE_NAMES[scene]}</div>
        </>
      )}
    </div>
  );
}
