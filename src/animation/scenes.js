import gsap from 'gsap';
import { events } from '../data/eventsData.js';

/**
 * Every builder: (tl, q, t0) => endTime
 *  - tl: master timeline, q: scoped selector, t0: absolute start (seconds)
 *  - only GPU props (x/y/scale/rotation/opacity) are animated
 *  - everything is a fromTo / set so the timeline is fully scrubbable & seekable
 * Timing follows the reference reel (≈ 63s loop).
 */

const hide = (tl, el, at, d = 0.3) => tl.to(el, { autoAlpha: 0, duration: d, ease: 'none' }, at);

/* ───────── Scene 1 — Shaadi ke Kapde (0 → 13.4s) ───────── */
export function buildScene1(tl, q, t0) {
  const S = q('.s1');
  tl.set(S, { autoAlpha: 1 }, t0);

  tl.fromTo(q('.s1-bg'), { scale: 1.06, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }, t0);
  tl.fromTo(q('.s1-bg-svg'), { scale: 1, transformOrigin: '50% 60%' }, { scale: 1.035, duration: 12, ease: 'none' }, t0);
  tl.fromTo(q('.s1-auto'), { xPercent: 0 }, { xPercent: 90, duration: 10, ease: 'none' }, t0);
  tl.fromTo(q('.s1-tailor'), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, t0 + 0.2);
  // layered parallax: shop / tailor drift slower than the people in front
  tl.fromTo(q('.s1-tailor'), { x: 0 }, { x: -6, duration: 12, ease: 'none' }, t0);
  tl.fromTo(q('.s1-couple'), { x: 0 }, { x: 8, duration: 12, ease: 'none' }, t0 + 3);
  tl.fromTo(q('.s1-rays'), { opacity: 0 }, { opacity: 1, duration: 2 }, t0);
  tl.fromTo(q('.s1-needle'), { y: 0 }, { y: 6, duration: 0.11, yoyo: true, repeat: 99, ease: 'sine.inOut' }, t0 + 0.4);

  // Man walks in first, the woman follows
  tl.fromTo(q('.s1-man'), { xPercent: -190, opacity: 1 }, { xPercent: 0, duration: 2.6, ease: 'power2.out' }, t0 + 0.4);
  tl.fromTo(q('.s1-woman'), { xPercent: -250 }, { xPercent: 0, duration: 2.8, ease: 'power2.out' }, t0 + 1.4);
  // stride: legs swing, body bobs
  tl.fromTo(q('.s1-man .leg-l'), { rotation: -13, transformOrigin: '50% 0%' }, { rotation: 13, duration: 0.42, yoyo: true, repeat: 5, ease: 'sine.inOut' }, t0 + 0.4);
  tl.fromTo(q('.s1-man .leg-r'), { rotation: 13, transformOrigin: '50% 0%' }, { rotation: -13, duration: 0.42, yoyo: true, repeat: 5, ease: 'sine.inOut' }, t0 + 0.4);
  tl.fromTo(q('.s1-man'), { y: 0 }, { y: -5, duration: 0.21, yoyo: true, repeat: 11, ease: 'sine.inOut' }, t0 + 0.4);
  tl.fromTo(q('.s1-woman'), { y: 0 }, { y: -5, duration: 0.24, yoyo: true, repeat: 11, ease: 'sine.inOut' }, t0 + 1.4);
  tl.fromTo(q('.s1-woman .skirt'), { skewX: -3, transformOrigin: '50% 0%' }, { skewX: 3, duration: 0.48, yoyo: true, repeat: 5, ease: 'sine.inOut' }, t0 + 1.4);
  tl.fromTo(q('.s1-man .arm-l'), { rotation: 10, transformOrigin: '50% 0%' }, { rotation: -10, duration: 0.42, yoyo: true, repeat: 5, ease: 'sine.inOut' }, t0 + 0.4);

  tl.to(q('.s1-man .leg-l, .s1-man .leg-r, .s1-man .arm-l'), { rotation: 0, duration: 0.35, ease: 'power2.out' }, t0 + 3);
  tl.to(q('.s1-woman .skirt'), { skewX: 0, duration: 0.35 }, t0 + 4.3);

  // conversation — bubbles accumulate like the reference
  const bubble = (sel, at, hold) => {
    tl.fromTo(q(sel), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }, at);
    tl.to(q(sel), { scale: 0.9, opacity: 0, duration: 0.35, ease: 'power2.in' }, at + hold);
  };
  bubble('.b-woman', t0 + 4.3, 3.1);
  bubble('.b-tailor', t0 + 5.8, 3.4);
  bubble('.b-man', t0 + 7.6, 3.0);

  // man lifts his arm, hands over the invitation
  const h = t0 + 10.3;
  tl.fromTo(q('.s1-man .arm-r'), { rotation: 0, transformOrigin: '50% 0%' }, { rotation: -42, duration: 0.6, ease: 'power2.out' }, h - 0.2);
  tl.fromTo(q('.s1-card'), { opacity: 0, scale: 0.12, xPercent: 0, yPercent: 0, rotation: 0 }, { opacity: 1, scale: 0.2, duration: 0.5, ease: 'back.out(1.7)' }, h + 0.2);
  tl.to(q('.s1-card'), { xPercent: 20, yPercent: -2, scale: 0.3, rotation: -3, duration: 1, ease: 'power2.inOut' }, h + 0.9);
  tl.to(q('.s1-man .arm-r'), { rotation: -30, duration: 1, ease: 'power2.inOut' }, h + 0.9);
  // the card opens up and fills the screen
  tl.to(q('.s1-card'), { scale: 1.19, xPercent: -9.5, yPercent: -9.25, rotation: 0, duration: 1.5, ease: 'power3.inOut' }, h + 2.1);
  return h + 3.6;
}

/* ───────── Scene 2 — cover (≈ 2.4s) ───────── */
export function buildScene2(tl, q, t0) {
  const S = q('.s2');
  tl.set(S, { autoAlpha: 1 }, t0);
  tl.fromTo(q('.s2-cardwrap'), { scale: 1 }, { scale: 1.04, duration: 1.2, ease: 'none' }, t0);
  tl.fromTo(q('.cv-title span'), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.12 }, t0 - 0.05);
  tl.fromTo(q('.cv-photo'), { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.7)' }, t0 + 0.3);
  tl.to(q('.s2-cardwrap'), { scale: 1.7, opacity: 0, duration: 0.9, ease: 'power2.in' }, t0 + 1.4);
  hide(tl, S, t0 + 2.3, 0.05);
  return t0 + 2.3;
}

/* ───────── Scenes 3–7 — events (≈ 6.6s each) ───────── */
export function buildEventScene(tl, q, t0, i) {
  const root = q(`[data-ev="${i}"]`);
  const e = gsap.utils.selector(root[0]);
  tl.set(root, { autoAlpha: 1 }, t0);

  // zoom-out reveal (mirrors the zoom-through of the previous scene)
  tl.fromTo(e('.ev-card'), { scale: 1.4, opacity: 0, transformOrigin: '30% 35%' }, { scale: 1, opacity: 1, duration: 0.9, ease: 'power3.out' }, t0);
  tl.fromTo(e('.ev-bg'), { scale: 1 }, { scale: 1.06, duration: 6, ease: 'none' }, t0);

  tl.fromTo(e('.ev-title .ch'), { y: 36, opacity: 0, rotationX: -90, transformPerspective: 500 }, { y: 0, opacity: 1, rotationX: 0, duration: 0.6, ease: 'back.out(1.7)', stagger: 0.035 }, t0 + 0.3);
  tl.fromTo(e('.ev-sub'), { x: -14, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, t0 + 0.9);

  // cutouts rise: back row first, then the front row
  tl.fromTo(e('.ev-models .cut'), { yPercent: 38, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power2.out', stagger: 0.09 }, t0 + 0.4);
  tl.fromTo(e('.ev-models .cut'), { rotation: -2 }, { rotation: 0, duration: 1.2, ease: 'elastic.out(1,0.5)', stagger: 0.09 }, t0 + 1.2);

  // frame + paper text, revealed in order like the reference
  tl.fromTo(e('.ev-frame'), { scale: 0.88, opacity: 0, transformOrigin: '50% 50%' }, { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' }, t0 + 0.5);
  tl.fromTo(e('.ev-attire'), { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5 }, t0 + 1.1);
  tl.fromTo(e('.ev-phrase'), { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6 }, t0 + 1.4);
  tl.fromTo(e('.dot'), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)', stagger: 0.1 }, t0 + 1.9);
  tl.fromTo(e('.ev-pal'), { opacity: 0 }, { opacity: 1, duration: 0.4 }, t0 + 2.2);
  tl.fromTo(e('.ev-lines li'), { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.18 }, t0 + 2.4);
  tl.fromTo(e('.mini'), { scale: 0, rotation: -8, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.8)', stagger: 0.12 }, t0 + 1);
  tl.fromTo(e('.ev-shine'), { xPercent: -160 }, { xPercent: 380, duration: 1.1, ease: 'power2.inOut' }, t0 + 3);
  tl.fromTo(e('.decor-layer'), { opacity: 0 }, { opacity: 1, duration: 1 }, t0 + 0.6);

  // slow push toward the frame, then zoom through into the next scene
  tl.fromTo(e('.ev-frame'), { y: 0 }, { y: -3, duration: 3, ease: 'sine.inOut' }, t0 + 2.5);
  const out = t0 + 5.6;
  tl.to(e('.ev-card'), { scale: 1.9, opacity: 0, transformOrigin: '30% 35%', duration: 1, ease: 'power2.in' }, out);
  hide(tl, root, out + 1, 0.05);
  return out + 1;
}

/* ───────── Scene 8 — Please Note (≈ 6s) ───────── */
export function buildScene8(tl, q, t0) {
  const S = q('.s8');
  tl.set(S, { autoAlpha: 1 }, t0);
  tl.fromTo(q('.s8-bg'), { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1.02, duration: 1, ease: 'power2.out' }, t0);
  tl.fromTo(q('.note'), { yPercent: 40, rotation: 3, opacity: 0, scale: 0.9 }, { yPercent: 0, rotation: 0, opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.3)' }, t0 + 0.2);
  tl.fromTo(q('.note h2 .ch'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', stagger: 0.04 }, t0 + 0.9);
  tl.fromTo(q('.note-mini'), { scale: 0, rotation: 10 }, { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.8)' }, t0 + 1.1);
  tl.fromTo(q('.note-p'), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.55 }, t0 + 1.5);
  tl.fromTo(q('.luggage'), { scale: 0, rotation: -12, transformOrigin: '30% 100%' }, { scale: 1, rotation: 0, duration: 0.7, ease: 'back.out(1.8)' }, t0 + 3.3);
  // the note turns translucent and dissolves, revealing the street
  const out = t0 + 5.4;
  tl.to(q('.note'), { opacity: 0.0, scale: 1.05, duration: 1.1, ease: 'power1.inOut' }, out);
  hide(tl, S, out + 1.6, 0.05);
  return out + 0.8;
}

/* ───────── Scene 9 — ride away through the gate (≈ 5.6s) ───────── */
export function buildScene9(tl, q, t0) {
  const S = q('.s9');
  tl.set(S, { autoAlpha: 1 }, t0);
  tl.fromTo(q('.s9-bg'), { opacity: 0 }, { opacity: 1, duration: 0.9, ease: 'power1.inOut' }, t0);
  // slow dolly toward the vanishing point
  tl.fromTo(q('.s9-bg-svg'), { scale: 1, transformOrigin: '50% 66%' }, { scale: 1.12, duration: 5.6, ease: 'power1.inOut' }, t0);
  tl.fromTo(q('.s9-cyclist'), { xPercent: 0, yPercent: 0, scale: 1, opacity: 1 }, { xPercent: 0, yPercent: -74, scale: 0.1, duration: 4.4, ease: 'power2.inOut' }, t0 + 0.8);
  tl.fromTo(q('.s9-cyclist'), { rotation: -1.4 }, { rotation: 1.4, duration: 0.45, yoyo: true, repeat: 9, ease: 'sine.inOut' }, t0 + 0.8);
  tl.to(q('.s9-cyclist'), { opacity: 0, duration: 0.6 }, t0 + 4.7);
  tl.fromTo(q('.s9-end'), { opacity: 0, y: 24, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.4)' }, t0 + 4.2);
  tl.fromTo(q('.s9-credit'), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.8 }, t0 + 3.4);
  const out = t0 + 7.4;
  hide(tl, S, out, 0.7);
  return out + 0.7;
}

export const eventBuilders = events.map((_, i) => (tl, q, t0) => buildEventScene(tl, q, t0, i));
