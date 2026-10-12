// "Stamp reel" content. Swap any text / colour / garment here.
// Garments are the transparent cutouts in /public/cutouts (real fabric photos, Wikimedia Commons).

export const trip = {
  couple: 'Rajat & Ashana',
  mono: ['R', 'A'],
  dates: ['3rd – 5th', 'DECEMBER'],
  year: '2026',
  city: 'Jaipur',
  state: 'Rajasthan',
};

export const hindi = {
  start: ['तैयारी', 'शुरू', 'की जाए'], // "let the preparations begin"
  presents: 'प्रस्तुत है',
};

export const endText = {
  line1: 'The wardrobe is planned.',
  line2: 'Now all that is missing is YOU, dressed to dazzle.',
  signoff: 'Rajat & Ashana',
  ready: "Rajat & Ashana's Wardrobe Planner is Ready",
  steps: ['Shop Smart', 'Pack Light', 'Shine Bright'],
};

/**
 * theme: bg / bg2 gradient, ink (text), accent, gold
 * figs: [{ img, h }]  h = display height in cqw
 */
export const cards = [
  {
    id: 'sagai',
    date: '3rd December 2026',
    kind: 'SAGAI & GHUNNI',
    title: 'Peacock Promenade',
    blurb: 'Jewel-toned silks, zari borders and a flash of feather-green. Dress like the garden is yours.',
    dress: 'Indowestern, kurta sets & flowy drapes',
    theme: { bg: '#0b5e6b', bg2: '#0a2f5c', ink: '#f6f0dc', accent: '#35d0c0', gold: '#f2c14e' },
    palette: [
      { c: '#0fa3a3', n: 'Teal' },
      { c: '#1f4fd0', n: 'Sapphire' },
      { c: '#17a05a', n: 'Emerald' },
      { c: '#f2c14e', n: 'Gold' },
    ],
    motif: 'peacock',
    decor: ['lotus', 'bokeh'],
    figs: [{ img: 'lehenga_teal' }, { img: 'bandhgala_navy' }, { img: 'lehenga_emerald' }],
  },
  {
    id: 'sangeet',
    date: '3rd December 2026',
    kind: 'ENGAGEMENT & SANGEET',
    title: 'Disco Diwali',
    blurb: 'A high-glam night of sequins, velvet and dance floors that never sleep. Be bold. Be dazzling.',
    dress: 'Gowns, studded lehengas & statement jackets',
    theme: { bg: '#2a0f5e', bg2: '#0b0630', ink: '#fdf0ff', accent: '#ff4fa3', gold: '#ffd56b' },
    palette: [
      { c: '#e0147a', n: 'Magenta' },
      { c: '#6a2be0', n: 'Violet' },
      { c: '#ffd56b', n: 'Gold' },
      { c: '#14102a', n: 'Midnight' },
    ],
    motif: 'disco',
    decor: ['fairy', 'bokeh', 'stars'],
    figs: [{ img: 'lehenga_plum' }, { img: 'suit_mann' }, { img: 'lehenga_pink' }],
  },
  {
    id: 'haldi',
    date: '4th December 2026',
    kind: 'HALDI',
    title: 'Marigold Morning',
    blurb: 'Sun-washed yellows, saffron and citrus pops. Wear something you can happily get turmeric on.',
    dress: 'Cotton kurtas, shararas & breezy co-ords',
    theme: { bg: '#ffd23f', bg2: '#ff8a1f', ink: '#5a1d00', accent: '#e8590c', gold: '#b45309' },
    palette: [
      { c: '#ffd23f', n: 'Marigold' },
      { c: '#ff8a1f', n: 'Saffron' },
      { c: '#fff3a8', n: 'Lemon' },
      { c: '#3da34d', n: 'Leaf' },
    ],
    motif: 'marigold',
    decor: ['petals', 'pinkflower'],
    figs: [{ img: 'ghagra' }, { img: 'sherwani4' }, { img: 'ghagra_pink' }],
  },
  {
    id: 'mehendi',
    date: '4th December 2026',
    kind: 'MEHENDI SUFI NIGHT',
    title: 'Henna Garden',
    blurb: 'Lanterns, paisleys and sufi sparkle. Wear earthy greens, mustard and rust with royal sleeves.',
    dress: 'Layered kurtas, plazzos, sharaaras & shawls',
    theme: { bg: '#4a6b1f', bg2: '#1e3a12', ink: '#fbf3d6', accent: '#e6b422', gold: '#f5c542' },
    palette: [
      { c: '#5f8a2a', n: 'Henna' },
      { c: '#e6b422', n: 'Mustard' },
      { c: '#b5441e', n: 'Rust' },
      { c: '#f7efd2', n: 'Ivory' },
    ],
    motif: 'paisley',
    decor: ['lanterns', 'petals'],
    figs: [{ img: 'ghagra_green' }, { img: 'bandhgala_green' }, { img: 'lehenga_blue' }],
  },
  {
    id: 'wedding',
    date: '5th December 2026',
    kind: 'THE WEDDING',
    title: 'Royal Vermilion',
    blurb: 'Ivory, vermilion and old gold. Timeless, regal and made for the pheras.',
    dress: 'Lehengas, sarees, sherwanis & bandhgalas',
    theme: { bg: '#fff4de', bg2: '#f6d9b0', ink: '#6b1020', accent: '#c1121f', gold: '#b8860b' },
    palette: [
      { c: '#fff4de', n: 'Ivory' },
      { c: '#c1121f', n: 'Vermilion' },
      { c: '#d4a017', n: 'Old Gold' },
      { c: '#f4b6b6', n: 'Blush' },
    ],
    motif: 'lotus',
    decor: ['bells', 'petals', 'lotus'],
    figs: [{ img: 'lehenga_red' }, { img: 'sherwani2' }, { img: 'lehenga_ivory' }],
  },
];

// stamp-collage layout for the cards: centre (cqw) + tilt + scale
export const collage = [
  { cx: 27, cy: 44, rot: -5, s: 0.36 },
  { cx: 73, cy: 40, rot: 4, s: 0.36 },
  { cx: 26, cy: 100, rot: 3, s: 0.36 },
  { cx: 74, cy: 98, rot: -4, s: 0.36 },
  { cx: 50, cy: 152, rot: 2, s: 0.36 },
];
