// Single source of truth: copy, palettes, models. Mirrors the reference reel's structure.
// Every cutout can be replaced with a real transparent PNG via `imageUrl`.

export const AUDIO_SRC = '/audio/bgm.mp3'; // drop a track in /public/audio (optional)

const groom = 'Rajat';
const bride = 'Ashana';

// Optional: drop the couple's own photos in /public/people (see README there)
export const people = { rajat: '/people/rajat.jpg', ashana: '/people/ashana.jpg' };

export const wedding = {
  groom,
  bride,
  couple: `${groom} & ${bride}`,
  title: ['Wardrobe', 'Planner'],
  dates: 'December 3,4 & 5 - 2026',
  city: 'Jaipur',
};

export const intro = {
  shopSign: 'Shaadi ke Kapde',
  chalk: 'यहाँ शादी के कपड़े मिलते हैं',
  chat: {
    woman: `Hey, we need to get amazing outfits for ${groom} & ${bride}'s Wedding`,
    tailor: 'Sure, can you share with me the events & dress codes?',
    man: 'Yes!\nWe have it all ready for you',
  },
};

/**
 * models: { row: 'back'|'front', img: transparent PNG in /public/cutouts, x: left (cqw), h: height (cqw), b: bottom offset (cqw) }
 * Cutouts are real garment photos from Wikimedia Commons (see public/cutouts/CREDITS.md).
 */
export const events = [
  {
    id: 'sagai',
    title: 'Shireen Bagh',
    sub: 'SAGAI & GHUNNI',
    attire: 'Hues of Peacock!',
    bg: 'twilight',
    script: '#7d8bab',
    body: '#43587a',
    palette: ['#5aa02c', '#9be59a', '#8fd0f5', '#1f5fd0'],
    lines: ['Women – Kurti Sets & Indowestern', 'OR Plazzos & Flowy Drapes', 'Men – Kurta Set & Bandhgala'],
    minis: ['brass', 'peacock', 'green'],
    decor: ['stars', 'lotus', 'flowers'],
    models: [
      { row: 'back', img: '/cutouts/lehenga_teal.webp', x: -9, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/bandhgala_navy.webp', x: 22, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/sherwani1.webp', x: 50, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/saree_sage.webp', x: 72, h: 74, b: 14 },
      { row: 'front', img: '/cutouts/ghagra_green.webp', x: 3, h: 84, b: -22 },
      { row: 'front', img: '/cutouts/jodhpuri.webp', x: 27, h: 70, b: -6 },
      { row: 'front', img: '/cutouts/lehenga_emerald.webp', x: 48, h: 84, b: -22 },
      { row: 'front', img: '/cutouts/suit_mann.webp', x: 74, h: 84, b: -22 },
    ],
  },
  {
    id: 'sangeet',
    title: 'The Green Symphony',
    sub: 'ENGAGEMENT & SANGEET',
    attire: 'Sparkle & Shine',
    bg: 'lawn',
    script: '#8a6a86',
    body: '#5a2f4a',
    palette: ['#7a1236', '#1f3f8f', '#8a3a5a', '#e0b840'],
    lines: ['Women – Gowns, Indowesterns', '& Studded Lehengas', 'Men – Statement Jackets, Jodhpuri & Tuxedos'],
    minis: ['pavilion', 'disco', 'green'],
    decor: ['fairy', 'bokeh', 'chandelier'],
    models: [
      { row: 'back', img: '/cutouts/lehenga_red.webp', x: -8, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/suit_mann.webp', x: 24, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/sherwani2.webp', x: 50, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/saree_maroon.webp', x: 74, h: 74, b: 14 },
      { row: 'front', img: '/cutouts/lehenga_plum.webp', x: 2, h: 84, b: -22 },
      { row: 'front', img: '/cutouts/bandhgala.webp', x: 30, h: 84, b: -22 },
      { row: 'front', img: '/cutouts/saree_pink.webp', x: 52, h: 84, b: -22 },
      { row: 'front', img: '/cutouts/jodhpuri.webp', x: 70, h: 70, b: -6 },
    ],
  },
  {
    id: 'haldi',
    title: 'Pink Parade',
    sub: 'HALDI CARNIVAL',
    attire: 'Colors of Sunrise',
    bg: 'pink',
    script: '#9a6a82',
    body: '#8a3050',
    palette: ['#fff2a8', '#f06a8a', '#f0a050', '#b88af0'],
    lines: ['Women – Easy breezy shararas, Co-ord sets', '& Lightweight lehengas', 'Men – Printed kurtas, Linen sets,', 'Relaxed festive wear'],
    minis: ['lotus', 'pavilion', 'butterfly'],
    decor: ['pinkflower', 'petals'],
    models: [
      { row: 'back', img: '/cutouts/ghagra.webp', x: -4, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/saree_peach.webp', x: 24, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/sherwani4.webp', x: 52, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/lehenga_pink.webp', x: 76, h: 74, b: 14 },
      { row: 'front', img: '/cutouts/ghagra_pink.webp', x: 0, h: 84, b: -22 },
      { row: 'front', img: '/cutouts/jodhpuri.webp', x: 26, h: 70, b: -6 },
      { row: 'front', img: '/cutouts/sherwani1.webp', x: 48, h: 84, b: -22 },
      { row: 'front', img: '/cutouts/saree_pink.webp', x: 72, h: 84, b: -22 },
    ],
  },
  {
    id: 'mehendi',
    title: 'Bazm-e-Bahar',
    sub: 'MEHENDI SUFI NIGHT',
    attire: 'Bring in your Royal sleeves',
    bg: 'teal',
    script: '#9a7a8a',
    body: '#6a3040',
    palette: ['#d8aa3a', '#1f7a1f', '#8a1a3a', '#5a1a9a'],
    lines: ['Women – Embroided & Printed fabrics,', 'Flowy plazzo, Lehengas & Sharaaras', 'Men – Layered kurtas, Indo-westerns, Shawls'],
    minis: ['necklace', 'lotus', 'paisley'],
    decor: ['fairy', 'lanterns', 'notes'],
    models: [
      { row: 'back', img: '/cutouts/lehenga_plum.webp', x: -6, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/bandhgala_green.webp', x: 24, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/sherwani2.webp', x: 52, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/saree_maroon.webp', x: 76, h: 74, b: 14 },
      { row: 'front', img: '/cutouts/ghagra_green.webp', x: 0, h: 84, b: -22 },
      { row: 'front', img: '/cutouts/lehenga_blue.webp', x: 24, h: 84, b: -22 },
      { row: 'front', img: '/cutouts/bandhgala.webp', x: 52, h: 84, b: -22 },
      { row: 'front', img: '/cutouts/jodhpuri.webp', x: 72, h: 70, b: -6 },
    ],
  },
  {
    id: 'wedding',
    title: 'Ivory Eden',
    sub: 'THE WEDDING',
    attire: 'Timeless & Regal',
    bg: 'sage',
    script: '#7d8da3',
    body: '#4a5d82',
    palette: ['#bfe6c4', '#6b9a78', '#ffffff', '#d8a850'],
    lines: ['Women – Timeless Lehengas & Sarees', 'Men – Classic Sherwanis, Bandhgalas', 'Tailored traditional wear'],
    minis: ['roses', 'paisley', 'bluewhite'],
    decor: ['bells', 'petals', 'flowers'],
    models: [
      { row: 'back', img: '/cutouts/lehenga_ivory.webp', x: -6, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/sherwani4.webp', x: 24, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/saree_sage.webp', x: 52, h: 74, b: 14 },
      { row: 'back', img: '/cutouts/sherwani1.webp', x: 74, h: 74, b: 14 },
      { row: 'front', img: '/cutouts/saree_peach.webp', x: 2, h: 84, b: -22 },
      { row: 'front', img: '/cutouts/sherwani2.webp', x: 26, h: 84, b: -22 },
      { row: 'front', img: '/cutouts/lehenga_emerald.webp', x: 48, h: 84, b: -22 },
      { row: 'front', img: '/cutouts/jodhpuri.webp', x: 72, h: 70, b: -6 },
    ],
  },
];

export const pleaseNote = {
  title: 'Please Note',
  paragraphs: [
    "Jaipur's expected temperature during the wedding festivities will range between 22°C during the day and approximately 8°C at night.",
    "Be sure to pack your sunglasses, warm layers for the evenings, and swimwear if you'd like to make the most of the pool.",
    "While we'd love to see everyone dressed up for the celebrations, the best outfit is always the one that keeps you comfortable and lets you enjoy every moment.",
  ],
};

export const outro = { credit: '' }; // e.g. 'Designed with love for Rajat & Ashana'
