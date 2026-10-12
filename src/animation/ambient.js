import gsap from 'gsap';

/**
 * Endlessly-looping decorative motion. Kept OUTSIDE the master timeline
 * (infinite children would make its duration infinite). Returns the tweens
 * so the player can pause / resume them together with the master timeline.
 */
export function buildAmbient(root) {
  const tweens = [];
  const each = (sel, fn) => root.querySelectorAll(sel).forEach(fn);
  const r = (a, b) => a + Math.random() * (b - a);

  each('.amb-float', (el) =>
    tweens.push(gsap.to(el, { y: '+=10', rotation: '+=3', duration: r(2, 3.2), yoyo: true, repeat: -1, ease: 'sine.inOut' }))
  );
  each('.amb-sway', (el) =>
    tweens.push(gsap.fromTo(el, { rotation: -4, transformOrigin: '50% 0%' }, { rotation: 4, duration: r(1.8, 2.6), yoyo: true, repeat: -1, ease: 'sine.inOut' }))
  );
  // warm glow pulse on lanterns
  each('.amb-glow', (el) =>
    tweens.push(gsap.fromTo(el, { opacity: 0.45, scale: 0.85 }, { opacity: 1, scale: 1.15, duration: r(1.1, 1.7), yoyo: true, repeat: -1, ease: 'sine.inOut' }))
  );
  each('.amb-flap', (el) =>
    tweens.push(gsap.fromTo(el, { scaleX: 1, transformOrigin: '50% 50%' }, { scaleX: 0.35, duration: 0.22, yoyo: true, repeat: -1, ease: 'sine.inOut' }))
  );
  each('.amb-drift', (el) =>
    tweens.push(gsap.to(el, { x: '+=26', y: '-=22', duration: r(3, 4.5), yoyo: true, repeat: -1, ease: 'sine.inOut' }))
  );
  // falling petals
  each('.amb-fall', (el) => {
    tweens.push(
      gsap.fromTo(
        el,
        { y: -40, rotation: r(0, 360) },
        { y: 700, x: `+=${r(-50, 50)}`, rotation: `+=${r(180, 540)}`, duration: r(5, 9), delay: -r(0, 8), repeat: -1, ease: 'none' }
      )
    );
  });
  // characters: breathing, blinking, dupatta flutter
  each('.fig', (el) =>
    tweens.push(gsap.fromTo(el, { scaleY: 1, transformOrigin: '50% 100%' }, { scaleY: 1.014, duration: r(1.8, 2.6), yoyo: true, repeat: -1, ease: 'sine.inOut' }))
  );
  each('.fig-eyes', (el) =>
    tweens.push(
      gsap
        .timeline({ repeat: -1, repeatDelay: r(2.2, 4.5) })
        .fromTo(el, { scaleY: 1, transformOrigin: '50% 50%' }, { scaleY: 0.08, duration: 0.07 })
        .to(el, { scaleY: 1, duration: 0.1 })
    )
  );
  each('.fig-dupatta', (el) =>
    tweens.push(gsap.fromTo(el, { rotation: -1.8, skewX: -2, transformOrigin: '50% 0%' }, { rotation: 2.2, skewX: 3, duration: r(1.6, 2.4), yoyo: true, repeat: -1, ease: 'sine.inOut' }))
  );
  each('.amb-nod', (el) =>
    tweens.push(gsap.fromTo(el, { rotation: -2, transformOrigin: '50% 100%' }, { rotation: 3, duration: 1.4, yoyo: true, repeat: -1, ease: 'sine.inOut' }))
  );
  each('.amb-spin', (el) =>
    tweens.push(gsap.to(el, { rotation: 360, duration: r(70, 110), repeat: -1, ease: 'none', transformOrigin: '50% 50%' }))
  );
  each('.amb-wheel', (el) =>
    tweens.push(gsap.to(el, { rotation: 360, duration: 0.7, repeat: -1, ease: 'none', transformOrigin: '50% 50%' }))
  );
  each('.amb-cloud', (el) =>
    tweens.push(gsap.to(el, { x: '+=40', duration: r(9, 14), yoyo: true, repeat: -1, ease: 'sine.inOut' }))
  );
  each('.amb-bird', (el) => {
    tweens.push(gsap.fromTo(el, { x: 0 }, { x: 460, duration: r(9, 13), repeat: -1, delay: r(0, 4), ease: 'none' }));
    tweens.push(gsap.fromTo(el, { scaleY: 1, transformOrigin: '50% 50%' }, { scaleY: 0.4, duration: 0.25, yoyo: true, repeat: -1, ease: 'sine.inOut' }));
  });
  each('.amb-twinkle', (el) =>
    tweens.push(gsap.fromTo(el, { scale: 0, opacity: 0, rotation: 0 }, { scale: 1, opacity: 1, rotation: 90, duration: r(0.9, 1.6), yoyo: true, repeat: -1, repeatDelay: r(0, 1.4), delay: r(0, 2), ease: 'sine.inOut' }))
  );
  each('.pedal-l', (el) => tweens.push(gsap.fromTo(el, { y: -7 }, { y: 7, duration: 0.45, yoyo: true, repeat: -1, ease: 'sine.inOut' })));
  each('.pedal-r', (el) => tweens.push(gsap.fromTo(el, { y: 7 }, { y: -7, duration: 0.45, yoyo: true, repeat: -1, ease: 'sine.inOut' })));
  each('.amb-sway-b', (el) =>
    tweens.push(gsap.fromTo(el, { rotation: -2.5, transformOrigin: '50% 100%' }, { rotation: 2.5, duration: r(2, 3), yoyo: true, repeat: -1, ease: 'sine.inOut' }))
  );
  each('.amb-ring', (el) =>
    tweens.push(gsap.fromTo(el, { rotation: -6 }, { rotation: 6, duration: r(1.4, 2), yoyo: true, repeat: -1, ease: 'sine.inOut' }))
  );
  each('.amb-twinkle-dot', (el) =>
    tweens.push(gsap.fromTo(el, { opacity: 0.25 }, { opacity: 1, duration: r(0.5, 1.4), yoyo: true, repeat: -1, delay: r(0, 1.5), ease: 'sine.inOut' }))
  );
  each('.amb-note', (el) =>
    tweens.push(gsap.fromTo(el, { y: 20, opacity: 0, x: 0 }, { y: -90, x: r(-18, 18), opacity: 1, duration: r(3, 4.5), repeat: -1, delay: r(0, 3), ease: 'power1.out' }))
  );
  each('.back-fig', (el) =>
    tweens.push(gsap.fromTo(el, { scaleY: 1, transformOrigin: '50% 100%' }, { scaleY: 1.008, duration: r(1.8, 2.4), yoyo: true, repeat: -1, ease: 'sine.inOut' }))
  );
  each('.amb-bob', (el, i) =>
    tweens.push(gsap.fromTo(el, { y: 0 }, { y: -7, duration: r(2.2, 3.2), yoyo: true, repeat: -1, delay: i * 0.15, ease: 'sine.inOut' }))
  );
  return tweens;
}
