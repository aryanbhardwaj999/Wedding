import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { collage } from './stampData.js';

gsap.registerPlugin(DrawSVGPlugin);

// scene start times (seconds) — also used by prev / next
export const FULL = [18.4, 24.2, 29.8, 35.4, 41.0]; // moment each event card is fully on screen
export const MARKS = [0, 4.4, 8.6, 15.0, 17.5, 24.2, 29.8, 35.4, 41.0, 46.2, 50.0];
const TOTAL = 61.5;
const SHUT = 46.2;
const END = 50.0;

/** One master, scrubbable timeline for the whole stamp reel (≈ 61s, looping). */
export function buildStampTimeline(q, rootEl) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
  const show = (sel, from, to) => {
    tl.set(q(sel), { autoAlpha: 1 }, from);
    tl.set(q(sel), { autoAlpha: 0 }, to);
  };
  const cloud = (at) => {
    tl.fromTo(q('.cloud'), { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1.3, duration: 0.55, ease: 'power2.in' }, at - 0.55);
    tl.to(q('.cloud'), { opacity: 0, scale: 1.9, duration: 0.7, ease: 'power2.out' }, at);
  };

  /* wallpaper: slow drift for the whole reel */
  tl.fromTo(q('.sr-bg-in'), { xPercent: 0, yPercent: 0 }, { xPercent: -7, yPercent: -5, duration: TOTAL, ease: 'none' }, 0);

  /* 1 · intro stamp */
  show('.sr-intro', 0, 4.9);
  tl.fromTo(q('.intro-stamp'), { yPercent: -170, rotation: -18, opacity: 0 }, { yPercent: 0, rotation: -4, opacity: 1, duration: 1.3, ease: 'bounce.out' }, 0.1);
  tl.fromTo(q('.hi-w'), { scale: 0, opacity: 0, rotation: -10 }, { scale: 1, opacity: 1, rotation: 0, duration: 0.55, ease: 'back.out(2)', stagger: 0.45 }, 1.1);
  tl.fromTo(q('.intro-flower'), { scale: 0, rotation: -90 }, { scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.8)' }, 2.7);
  tl.fromTo(q('.intro-stamp'), { rotation: -4 }, { rotation: -1.2, duration: 0.4, yoyo: true, repeat: 5, ease: 'sine.inOut' }, 1.6);
  tl.to(q('.intro-stamp'), { xPercent: -175, rotation: -30, duration: 0.8, ease: 'power2.in' }, 4.0);

  /* 2 · title */
  show('.sr-title', 4.3, 9.9);
  tl.fromTo(q('.sr-presents'), { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 4.6);
  tl.fromTo(q('.sr-h .ch'), { y: 70, opacity: 0, rotation: (i) => (i % 2 ? 14 : -14), scale: 0.5 }, { y: 0, opacity: 1, rotation: 0, scale: 1, duration: 0.6, ease: 'back.out(2.2)', stagger: 0.05 }, 4.8);
  tl.fromTo(q('.sr-sub'), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6 }, 6.2);
  tl.fromTo(q('.sr-h'), { scale: 1 }, { scale: 1.06, duration: 4, ease: 'none' }, 5.2);
  tl.to(q('.sr-title > *'), { opacity: 0, yPercent: -25, duration: 0.7, ease: 'power2.in', stagger: 0.06 }, 8.8);

  /* 3 · trip stamps */
  show('.sr-info', 8.5, 16.4);
  const rests = [
    ['.i-couple', -5, 170],
    ['.i-date', 4, -170],
    ['.i-mono', 3, 170],
    ['.i-venue', -3, -170],
  ];
  rests.forEach(([sel, rot, from], i) => {
    tl.fromTo(q(sel), { xPercent: from, rotation: rot + (from > 0 ? 24 : -24), opacity: 0 }, { xPercent: 0, rotation: rot, opacity: 1, duration: 0.85, ease: 'back.out(1.4)' }, 8.8 + i * 0.4);
  });
  tl.fromTo(q('.istamp img'), { scale: 1.2 }, { scale: 1, duration: 4, ease: 'none' }, 9);
  tl.fromTo(q('.i-names,.i-city,.i-state,.i-dates,.i-month,.i-year'), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, 10.2);
  tl.to(q('.istamp'), { yPercent: -170, rotation: '+=12', duration: 0.7, ease: 'power2.in', stagger: 0.1 }, 15.0);

  /* 4 · event stamps → full cards */
  show('.sr-cards', 14.9, SHUT + 0.2);
  const cs = collage.map((c) => ({ x: c.cx - 50, y: ((c.cy - 88.9) / 177.8) * 100, rot: c.rot, s: c.s }));
  const cardEls = q('.ecard');
  // only the card on screen is rendered: the rest stay hidden until their wipe
  tl.set(cardEls.slice(1), { autoAlpha: 0 }, 18.6);
  cardEls.forEach((card, i) => {
    const c = cs[i];
    const e = gsap.utils.selector(card);
    const edge = e('.stamp-edge');
    // stamp pops in
    tl.fromTo(card, { scale: 0, xPercent: c.x, yPercent: c.y, rotation: c.rot - 25, zIndex: 1 + i }, { scale: c.s, rotation: c.rot, duration: 0.7, ease: 'back.out(1.6)' }, 15.1 + i * 0.3);

    // reaching "full screen"
    let tin;
    if (i === 0) {
      tin = 17.5;
      tl.fromTo(card, { scale: c.s, xPercent: c.x, yPercent: c.y, rotation: c.rot }, { scale: 1, xPercent: 0, yPercent: 0, rotation: 0, duration: 0.9, ease: 'power3.inOut', immediateRender: false }, 17.5);
      tl.set(card, { zIndex: 10 }, 17.5);
      tl.to(edge, { opacity: 0, duration: 0.5 }, 17.7);
    } else {
      // smooth push: the old card scales away to the left while the new one slides + scales in
      const ts = FULL[i] - 0.5;
      tin = ts + 0.15;
      tl.set(card, { autoAlpha: 1, zIndex: 10 + i }, ts - 0.01);
      tl.set(edge, { opacity: 0 }, ts - 0.01);
      tl.fromTo(card, { scale: 0.88, xPercent: 60, yPercent: 0, rotation: 3, opacity: 0 }, { scale: 1, xPercent: 0, rotation: 0, opacity: 1, duration: 1.0, ease: 'expo.out', immediateRender: false }, ts);
      tl.to(cardEls[i - 1], { scale: 0.86, xPercent: -38, rotation: -3, opacity: 0, duration: 0.85, ease: 'power3.in' }, ts);
      tl.set(cardEls[i - 1], { autoAlpha: 0 }, ts + 0.9);
    }

    // content enters
    const R = { immediateRender: false };
    tl.fromTo(e('.ec-frame'), { opacity: 0 }, { opacity: 1, duration: 0.6, ...R }, tin + 0.2);
    tl.fromTo(e('.ec-date,.ec-kind'), { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ...R }, tin + 0.1);
    tl.fromTo(e('.ec-title .ch'), { y: 54, opacity: 0, rotationX: -70, transformPerspective: 600 }, { y: 0, opacity: 1, rotationX: 0, duration: 0.9, ease: 'expo.out', stagger: 0.04, ...R }, tin + 0.2);
    tl.fromTo(e('.mo'), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.6)', stagger: 0.12, ...R }, tin + 0.3);
    tl.fromTo(e('.ec-slot'), { yPercent: 28, opacity: 0, scale: 0.9 }, { yPercent: 0, opacity: 1, scale: 1, duration: 1.0, ease: 'expo.out', stagger: 0.16, ...R }, tin + 0.4);
    tl.fromTo(e('.ec-spot'), { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out', stagger: 0.16, ...R }, tin + 0.4);
    tl.fromTo(e('.ec-floor'), { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.16, ...R }, tin + 0.7);
    tl.fromTo(e('.ec-burst i'), { x: 0, y: 0, scale: 0, opacity: 1 }, { x: (k) => Math.cos(k * 0.62) * (26 + (k % 4) * 9) * 4.2, y: (k) => Math.sin(k * 0.62) * (26 + (k % 4) * 9) * 4.2, scale: 1, opacity: 0, duration: 1.3, ease: 'power3.out', stagger: 0.015, ...R }, tin + 0.9);
        tl.fromTo(e('.ec-blurb'), { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ...R }, tin + 1.5);
    tl.fromTo(e('.ec-dress'), { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ...R }, tin + 1.9);
    tl.fromTo(e('.ec-sw'), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2)', stagger: 0.1, ...R }, tin + 2.2);
  });

  /* 5 · say cheese */
  cloud(SHUT);
  show('.sr-shutter', SHUT, END + 0.4);
  tl.fromTo(q('.sh-text'), { y: -26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, SHUT + 0.3);
  tl.fromTo(q('.sh-cam'), { yPercent: 110, rotation: 8 }, { yPercent: 0, rotation: 0, duration: 0.9, ease: 'back.out(1.4)' }, SHUT + 0.4);
  tl.fromTo(q('.sh-cam'), { scale: 1 }, { scale: 1.05, duration: 0.1, yoyo: true, repeat: 3, ease: 'sine.inOut' }, SHUT + 1.6);
  tl.fromTo(q('.flash'), { opacity: 0 }, { opacity: 1, duration: 0.07 }, SHUT + 2.1);
  tl.to(q('.flash'), { opacity: 0, duration: 0.55 }, SHUT + 2.18);
  tl.to(q('.sh-cam'), { yPercent: 110, duration: 0.5, ease: 'power2.in' }, SHUT + 3.0);
  cloud(END);

  /* 6 · finale */
  show('.sr-end', END, TOTAL);
  tl.fromTo(q('.end-arch'), { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9, ease: 'back.out(1.5)' }, END + 0.1);
  tl.fromTo(q('.arch-line'), { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.8, ease: 'power2.inOut' }, END + 0.2);
  tl.fromTo(q('.end-date'), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, END + 1.4);
  tl.fromTo(q('.end-rule'), { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, END + 1.7);
  tl.fromTo(q('.end-l1'), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, END + 2.2);
  tl.fromTo(q('.end-l2'), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, END + 3.0);
  tl.fromTo(q('.end-sign'), { opacity: 0 }, { opacity: 1, duration: 0.7 }, END + 4.0);
  tl.to(q('.end-arch,.end-date,.end-rule,.end-l1,.end-l2,.end-sign'), { opacity: 0, y: -18, duration: 0.6, ease: 'power2.in', stagger: 0.04 }, END + 6.2);
  tl.fromTo(q('.end-ready'), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, END + 7.0);
  tl.fromTo(q('.end-steps li'), { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', stagger: 0.4 }, END + 7.8);
  tl.to(q('.sr-end'), { autoAlpha: 0, duration: 0.5 }, TOTAL - 0.5);
  tl.to({}, { duration: 0.01 }, TOTAL);
  void rootEl;
  return tl;
}
