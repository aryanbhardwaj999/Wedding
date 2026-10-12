// Content from https://ranjhanainlove.netlify.app — Rajat & Aashana, 4–5 December 2026, Jaipur.
// Garments are the transparent cutouts in /public/cutouts (real fabric photos, Wikimedia Commons).

export const trip = {
  couple: 'Rajat & Aashana',
  mono: ['R', 'A'],
  dates: ['4th – 5th', 'DECEMBER'],
  year: '2026',
  city: 'Jaipur',
  place: 'Kasturi Bagh & Abhaneri',
  hashtag: '#Raन्झna',
};

export const hindi = {
  start: ['तैयारी', 'शुरू', 'की जाए'], // "let the preparations begin"
  presents: 'प्रस्तुत है',
};

export const endText = {
  line1: 'Two days. Four celebrations.',
  line2: 'The colours are chosen. Now all that is missing is YOU, dressed to dazzle.',
  signoff: 'Rajat & Aashana',
  ready: "Rajat & Aashana's Wardrobe Planner is Ready",
  steps: ['Shop Smart', 'Pack a Shawl', 'Shine Bright'],
};

/** theme_: bg / bg2 gradient, ink (text), accent, gold — figs: transparent WebP names in /public/cutouts */
export const cards = [
  {
    id: 'mehndi',
    day: 'Friday · 4 December 2026',
    fn: 'Mehndi',
    name: 'Rang, Riwaaz & Ranjhana',
    theme: 'Hues of Peacock',
    time: '11:30 AM',
    venue: 'Kasturi Bagh, Jaipur',
    women: 'Kurti Sets & Indowesterns OR Plazzos & Flowy Drapes',
    men: 'Kurta Sets & Bandhgalas',
    theme_: { bg: '#0f7c80', bg2: '#082f33', ink: '#f2fff4', accent: '#30c5c9', gold: '#f2c14e' },
    palette: [
      { c: '#2E8B57', n: 'Sea Green' },
      { c: '#30C5C9', n: 'Turquoise' },
      { c: '#3FA34D', n: 'Peacock' },
      { c: '#0F7C80', n: 'Deep Teal' },
    ],
    motif: 'peacock',
    decor: ['lotus', 'bokeh'],
    figs: [{ img: 'lehenga_teal' }, { img: 'bandhgala_green' }, { img: 'lehenga_emerald' }],
  },
  {
    id: 'sangeet',
    day: 'Friday · 4 December 2026',
    fn: 'Sangeet',
    name: 'Aaja Nachle with Ranjhana',
    theme: 'Sparkle & Shine',
    time: '6:30 PM',
    venue: 'Kasturi Bagh, Jaipur',
    women: 'Gowns, Indowesterns and Stunning Lehengas',
    men: 'Statement Jackets, Suits and Tuxedos',
    theme_: { bg: '#1b2a4a', bg2: '#07050d', ink: '#fdf0ff', accent: '#ff4f9a', gold: '#ffd56b' },
    palette: [
      { c: '#000000', n: 'Black' },
      { c: '#1B2A4A', n: 'Navy' },
      { c: '#4E342E', n: 'Espresso' },
      { c: '#6D1A36', n: 'Wine' },
    ],
    motif: 'disco',
    decor: ['fairy', 'stars'],
    figs: [{ img: 'lehenga_plum' }, { img: 'suit_mann' }, { img: 'lehenga_red' }],
  },
  {
    id: 'haldi',
    day: 'Saturday · 5 December 2026',
    fn: 'Haldi',
    name: 'Rang De Ranjhana',
    theme: 'Colours of Sunrise',
    time: '10:30 AM',
    venue: 'Kasturi Bagh, Jaipur',
    women: 'Easy-breezy Shararas, Co-ord Sets & Lehengas',
    men: 'Printed Kurtas, Linen Suits & Relaxed Festive Wear',
    theme_: { bg: '#fbe38e', bg2: '#f9a86a', ink: '#5a2a00', accent: '#e8590c', gold: '#b45309' },
    palette: [
      { c: '#FBE38E', n: 'Sunrise' },
      { c: '#F9C08A', n: 'Peach' },
      { c: '#FAD4C0', n: 'Blush' },
      { c: '#BFE3F5', n: 'Sky' },
    ],
    motif: 'marigold',
    decor: ['petals', 'pinkflower'],
    figs: [{ img: 'ghagra' }, { img: 'sherwani4' }, { img: 'ghagra_pink' }],
  },
  {
    id: 'wedding',
    day: 'Saturday · 5 December 2026',
    fn: 'Wedding',
    name: 'Ranjhana: The Forever Chapter',
    theme: 'Timeless & Regal',
    time: '7:30 PM',
    venue: 'Abhaneri, Jaipur',
    women: 'Traditional & Royal Lehengas & Sarees',
    men: 'Classic Sherwanis, Bandhgalas & Tailored Traditional Wear',
    theme_: { bg: '#7a1325', bg2: '#33060f', ink: '#fff1d6', accent: '#f2c14e', gold: '#f2c14e' },
    palette: [
      { c: '#E75480', n: 'Rose' },
      { c: '#2547A8', n: 'Royal Blue' },
      { c: '#138A5B', n: 'Emerald' },
      { c: '#7B3FA0', n: 'Violet' },
      { c: '#F28C28', n: 'Saffron' },
    ],
    motif: 'lotus',
    decor: ['bells', 'petals', 'lotus'],
    figs: [{ img: 'lehenga_pink' }, { img: 'sherwani2' }, { img: 'lehenga_blue' }],
  },
];

// stamp-collage layout for the cards: centre (cqw) + tilt + scale
export const collage = [
  { cx: 27, cy: 48, rot: -5, s: 0.4 },
  { cx: 73, cy: 44, rot: 4, s: 0.4 },
  { cx: 27, cy: 118, rot: 3, s: 0.4 },
  { cx: 73, cy: 114, rot: -4, s: 0.4 },
];
