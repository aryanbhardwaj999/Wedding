// Renders the stamp reel to an MP4 (1080x1920, 30fps) by stepping the GSAP timeline frame by frame.
//   1) npm run dev            (in another terminal)
//   2) npm run export         -> export/rajat-aashana-wardrobe-planner.mp4
// Needs Microsoft Edge or Chrome installed (CHROME_PATH can override the location) and ffmpeg on PATH.
import puppeteer from 'puppeteer-core';
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';

const URL = process.env.REEL_URL || 'http://localhost:5173/?render';
const FPS = 30;
const DURATION = Number(process.env.REEL_SECONDS || 56.2);
const OUT = process.env.REEL_OUT || 'export/rajat-aashana-wardrobe-planner.mp4';
const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);
const executablePath = candidates.find((p) => existsSync(p));
if (!executablePath) throw new Error('Chrome/Edge not found — set CHROME_PATH');
mkdirSync('export', { recursive: true });

const browser = await puppeteer.launch({ executablePath, headless: 'new', args: ['--hide-scrollbars', '--font-render-hinting=none', '--disable-gpu-vsync'] });
const page = await browser.newPage();
await page.setViewport({ width: 720, height: 1280, deviceScaleFactor: 1.5 }); // 1080 x 1920 output
await page.goto(URL, { waitUntil: 'networkidle0' });
await page.waitForFunction('window.__ready === true && typeof window.__seek === "function"', { timeout: 120000 });
await page.evaluate(() => document.fonts.ready);

const ff = spawn(
  'ffmpeg',
  ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-', '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', OUT],
  { stdio: ['pipe', 'inherit', 'inherit'] }
);
const frames = Math.round(DURATION * FPS);
for (let i = 0; i < frames; i++) {
  await page.evaluate((t) => window.__seek(t), i / FPS);
  const buf = await page.screenshot({ type: 'jpeg', quality: 93 });
  if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
  if (i % 60 === 0) console.log(`frame ${i}/${frames}`);
}
ff.stdin.end();
await new Promise((r) => ff.on('close', r));
await browser.close();
console.log('saved', OUT);
