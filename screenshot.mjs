#!/usr/bin/env node

/**
 * screenshot.mjs - Puppeteer screenshot utility for Claude Code visual QA.
 *
 * Usage:
 *   node screenshot.mjs <url>                     # full-page capture at 1440px
 *   node screenshot.mjs <url> <label>             # labelled capture
 *   node screenshot.mjs <url> <label> <width>     # custom viewport width
 *
 * Screenshots save to ./screenshots/screenshot-N.png (auto-incremented).
 * Labelled shots save as screenshot-N-<label>.png.
 *
 * Do not modify this file. It is referenced by CLAUDE.md and used by
 * Claude Code during the visual QA loop.
 */

import puppeteer from "puppeteer";
import { mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const SCREENSHOTS_DIR = "./screenshots";
const DEFAULT_WIDTH = 1440;
const DEFAULT_HEIGHT = 900;

const url = process.argv[2];
const label = process.argv[3] || "";
const width = parseInt(process.argv[4], 10) || DEFAULT_WIDTH;

if (!url) {
  console.error("Usage: node screenshot.mjs <url> [label] [width]");
  process.exit(1);
}

mkdirSync(SCREENSHOTS_DIR, { recursive: true });

// Auto-increment screenshot number
const existing = readdirSync(SCREENSHOTS_DIR)
  .filter((f) => f.startsWith("screenshot-") && f.endsWith(".png"))
  .map((f) => {
    const match = f.match(/^screenshot-(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  });
const next = existing.length > 0 ? Math.max(...existing) + 1 : 1;

const filename = label
  ? `screenshot-${next}-${label}.png`
  : `screenshot-${next}.png`;
const filepath = join(SCREENSHOTS_DIR, filename);

async function capture() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width, height: DEFAULT_HEIGHT });

  try {
    await page.goto(url, { waitUntil: "networkidle2", timeout: 15000 });
  } catch {
    // If networkidle2 times out (common with dev servers that keep
    // a websocket open), fall back to domcontentloaded.
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 10000 });
    // Give animations and fonts a moment to settle.
    await new Promise((r) => setTimeout(r, 1500));
  }

  // Let any entrance animations finish.
  await new Promise((r) => setTimeout(r, 800));

  await page.screenshot({ path: filepath, fullPage: true });
  console.log(`Saved: ${filepath}`);

  await browser.close();
}

capture().catch((err) => {
  console.error("Screenshot failed:", err.message);
  process.exit(1);
});
