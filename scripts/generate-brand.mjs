#!/usr/bin/env node
// One-shot brand generation for Foxes.ai.
//
// Usage:
//   node scripts/generate-brand.mjs generate [--prompt promptKey] [--n 4]
//   node scripts/generate-brand.mjs finalize --pick <candidate_index>
//   node scripts/generate-brand.mjs og            # compose opengraph-image.png
//   node scripts/generate-brand.mjs wordmark      # write wordmark.svg
//   node scripts/generate-brand.mjs all --pick <idx>  # finalize + og + wordmark
//
// Generated files:
//   public/brand/raw/icon-candidate-{i}.png        (from OpenAI)
//   public/brand/icon.png                          (1024 master)
//   public/brand/icon-white.png                    (1024 white variant)
//   public/brand/icon-black.png                    (1024 black variant)
//   public/brand/wordmark.svg                      (icon + live Inter text)
//   app/icon.png                                   (32)
//   app/apple-icon.png                             (180)
//   app/opengraph-image.png                        (1200x630)

import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const RAW_DIR = path.join(ROOT, "public", "brand", "raw");
const BRAND_DIR = path.join(ROOT, "public", "brand");
const APP_DIR = path.join(ROOT, "app");

// Load .env.local manually (no dotenv dep)
async function loadEnv() {
  const envPath = path.join(ROOT, ".env.local");
  if (!existsSync(envPath)) return;
  const raw = await readFile(envPath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const k = trimmed.slice(0, eq).trim();
    const v = trimmed.slice(eq + 1).trim();
    if (!(k in process.env)) process.env[k] = v;
  }
}

const PROMPTS = {
  ears: `A single minimalist geometric brand mark for a premium AI-era company called Foxes.ai. Two sharp upward triangles forming stylized fox ears that also read as an upward signal spark — the exact conceptual elegance of the brand marks at attio.com, route.com, granola.so, and listenlabs.ai. Flat vector art, ONE solid fill color in warm orange #FF6B35, NO gradient, NO shading, NO outlines, NO stroke, NO text, NO background, dead-centered in the canvas with generous negative space, perfectly symmetrical, precise sharp geometric edges, high contrast against transparency. The mark reads clearly at 16 pixels. Transparent background. Brand identity iconography, premium tech startup aesthetic, confident and calm.`,

  diamond: `A minimal abstract brand mark, single geometric shape that reads as both a stylized fox head silhouette and an upward diamond/chevron — in the exact style of Attio's geometric mark, Route's minimal logo, Granola's soft geometric mark, and Listen Labs' clean identity. Flat vector, single solid fill color #FF6B35 (warm orange), NO gradient, NO shadow, NO texture, NO text, NO background. Bold confident geometry, razor-sharp edges, perfectly centered with breathing room, symmetrical. Scales down to a 16px favicon without losing legibility. Transparent PNG.`,

  fmark: `A premium brand monogram: a custom lowercase letter "f" drawn as a single continuous rounded geometric shape, with a subtle spark/arrow accent at the top-right suggesting AI-answer discovery. In the exact design language of Attio's typographic mark, Route's wordmark mark, Granola's playful rounded geometry. Flat vector, single solid fill color #FF6B35, NO gradient, NO shadow, NO outlines, NO text labels, NO background. Centered in 1024×1024 canvas with generous padding, perfectly balanced optical weight, confident and minimal. Transparent PNG, sharp vector edges.`,

  spark: `A minimalist brand icon: a single upward-pointing geometric spark/arrow formed from two asymmetric triangles that together suggest fox ears and an answer signal. Flat design in the style of Attio, Route, Granola, Listen Labs brand identities. One solid fill color #FF6B35 warm orange, ABSOLUTELY NO gradient, NO shadow, NO stroke, NO text, NO letterforms, NO background. Dead center, symmetric composition, generous negative space, razor-sharp geometric precision, reads at 16 pixels. Transparent PNG.`,
};

async function generateCandidates(promptKey = "ears", n = 4) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error("OPENAI_API_KEY missing in .env.local");
  const prompt = PROMPTS[promptKey];
  if (!prompt) throw new Error(`Unknown prompt key: ${promptKey}`);

  await mkdir(RAW_DIR, { recursive: true });

  console.log(`[generate] prompt=${promptKey} n=${n}`);
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
      quality: "high",
      background: "transparent",
      n,
      output_format: "png",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenAI error ${res.status}: ${text}`);
  }
  const json = await res.json();
  const existing = (await readdir(RAW_DIR).catch(() => []))
    .filter((f) => f.startsWith(`${promptKey}-`) && f.endsWith(".png"))
    .length;

  const saved = [];
  for (let i = 0; i < json.data.length; i++) {
    const b64 = json.data[i].b64_json;
    if (!b64) throw new Error("No b64_json in response");
    const buf = Buffer.from(b64, "base64");
    const idx = existing + i + 1;
    const file = path.join(RAW_DIR, `${promptKey}-${idx}.png`);
    await writeFile(file, buf);
    saved.push(file);
    console.log(`[generate] wrote ${path.relative(ROOT, file)} (${buf.length} bytes)`);
  }
  return saved;
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

// Tight-crop the alpha channel, then recenter with consistent padding.
async function normalizeIcon(inputPath, paddingPct = 10) {
  const img = sharp(inputPath).ensureAlpha();
  const { width, height } = await img.metadata();
  // Extract alpha channel to find bounds
  const alpha = await sharp(inputPath)
    .ensureAlpha()
    .extractChannel("alpha")
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { data, info } = alpha;
  let minX = info.width, minY = info.height, maxX = 0, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const a = data[y * info.width + x];
      if (a > 10) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < minX || maxY < minY) {
    console.warn("[normalize] no non-transparent pixels found, skipping crop");
    return sharp(inputPath).ensureAlpha();
  }
  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;
  const cropped = await sharp(inputPath)
    .ensureAlpha()
    .extract({ left: minX, top: minY, width: cropW, height: cropH })
    .toBuffer();

  // Now place on a square canvas at 1024 with padding
  const target = 1024;
  const pad = Math.round(target * (paddingPct / 100));
  const boxSize = target - pad * 2;
  const scale = Math.min(boxSize / cropW, boxSize / cropH);
  const newW = Math.round(cropW * scale);
  const newH = Math.round(cropH * scale);

  return sharp({
    create: {
      width: target,
      height: target,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: await sharp(cropped).resize(newW, newH).png().toBuffer(),
        left: Math.round((target - newW) / 2),
        top: Math.round((target - newH) / 2),
      },
    ])
    .png();
}

// Recolor non-transparent pixels to a solid color, preserving alpha.
async function tintIcon(inputBuffer, hex) {
  const { r, g, b } = hexToRgb(hex);
  const img = sharp(inputBuffer).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    out[i] = r;
    out[i + 1] = g;
    out[i + 2] = b;
    out[i + 3] = data[i + 3];
  }
  return sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png();
}

async function finalizeIcon(pickedFile) {
  console.log(`[finalize] source=${path.relative(ROOT, pickedFile)}`);
  await mkdir(BRAND_DIR, { recursive: true });

  const normalized = await normalizeIcon(pickedFile, 10);
  const masterBuf = await normalized.toBuffer();
  await writeFile(path.join(BRAND_DIR, "icon.png"), masterBuf);
  console.log("[finalize] wrote public/brand/icon.png");

  // Mono variants from the normalized silhouette
  const whiteBuf = await (await tintIcon(masterBuf, "#FFFFFF")).toBuffer();
  await writeFile(path.join(BRAND_DIR, "icon-white.png"), whiteBuf);
  console.log("[finalize] wrote public/brand/icon-white.png");

  const blackBuf = await (await tintIcon(masterBuf, "#0A0A0B")).toBuffer();
  await writeFile(path.join(BRAND_DIR, "icon-black.png"), blackBuf);
  console.log("[finalize] wrote public/brand/icon-black.png");

  // Also enforce the exact accent orange on the accent variant
  const accentBuf = await (await tintIcon(masterBuf, "#FF6B35")).toBuffer();
  await writeFile(path.join(BRAND_DIR, "icon.png"), accentBuf);
  console.log("[finalize] wrote public/brand/icon.png (re-tinted to #FF6B35)");

  // Next.js favicon + apple icon live in /app
  await sharp(accentBuf).resize(32, 32).png().toFile(path.join(APP_DIR, "icon.png"));
  console.log("[finalize] wrote app/icon.png (32x32)");

  await sharp(accentBuf)
    .resize(180, 180)
    // Apple icons are opaque — put dark bg under
    .flatten({ background: "#0A0A0B" })
    .png()
    .toFile(path.join(APP_DIR, "apple-icon.png"));
  console.log("[finalize] wrote app/apple-icon.png (180x180)");
}

async function writeWordmark() {
  // Live-font SVG. Uses Inter (system-fallback) so browsers render perfect type.
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 140" width="560" height="140" role="img" aria-label="Foxes.ai">
  <title>Foxes.ai</title>
  <image href="/brand/icon.png" x="0" y="10" width="120" height="120" />
  <text x="140" y="98"
        font-family="'Inter Display', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        font-size="84"
        font-weight="600"
        letter-spacing="-0.04em"
        fill="#F5F5F7">foxes<tspan fill="#FF6B35">.ai</tspan></text>
</svg>
`;
  await writeFile(path.join(BRAND_DIR, "wordmark.svg"), svg);
  console.log("[wordmark] wrote public/brand/wordmark.svg");
}

async function writeOg() {
  const iconPath = path.join(BRAND_DIR, "icon.png");
  const icon = await sharp(iconPath).resize(160, 160).png().toBuffer();

  // Dark canvas with subtle radial accent + grid-ish noise-free field
  const width = 1200;
  const height = 630;
  const bg = await sharp({
    create: { width, height, channels: 4, background: "#08080A" },
  })
    .composite([
      {
        // Radial glow at top-left (done as a feathered ellipse via SVG)
        input: Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <defs>
    <radialGradient id="g" cx="18%" cy="22%" r="55%">
      <stop offset="0%" stop-color="#FF6B35" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#FF6B35" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#FF6B35" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="url(#grid-fade)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
</svg>`),
        top: 0,
        left: 0,
      },
      { input: icon, top: 80, left: 80 },
      {
        input: Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <style>
    .t1 { font: 600 72px 'Inter Display','Inter',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif; letter-spacing: -0.03em; fill: #F5F5F7; }
    .t2 { font: 500 36px 'Inter','Inter Display',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif; letter-spacing: -0.01em; fill: #A7A7AE; }
    .kicker { font: 500 18px 'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,monospace; letter-spacing: 0.22em; text-transform: uppercase; fill: #FF6B35; }
  </style>
  <text x="80" y="310" class="kicker">The AEO Agency</text>
  <text x="80" y="400" class="t1">Win the answer in ChatGPT,</text>
  <text x="80" y="488" class="t1">Claude, Perplexity, Gemini, Copilot.</text>
  <text x="80" y="560" class="t2">Foxes.ai · get named, stay named.</text>
</svg>`),
        top: 0,
        left: 0,
      },
    ])
    .png()
    .toFile(path.join(APP_DIR, "opengraph-image.png"));
  console.log(`[og] wrote app/opengraph-image.png`);
}

function parseArgs(argv) {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const k = a.slice(2);
      const v = argv[i + 1];
      out[k] = v;
      i++;
    } else out._.push(a);
  }
  return out;
}

async function main() {
  await loadEnv();
  const args = parseArgs(process.argv.slice(2));
  const cmd = args._[0] || "generate";

  if (cmd === "generate") {
    const prompt = args.prompt || "ears";
    const n = Number(args.n || 4);
    await generateCandidates(prompt, n);
    console.log("\nNext: inspect candidates in public/brand/raw and then run:");
    console.log(`  node scripts/generate-brand.mjs all --pick public/brand/raw/<file>.png`);
    return;
  }

  if (cmd === "finalize" || cmd === "all") {
    if (!args.pick) throw new Error("--pick <path-to-candidate.png> required");
    const pickedFile = path.isAbsolute(args.pick) ? args.pick : path.join(ROOT, args.pick);
    if (!existsSync(pickedFile)) throw new Error(`not found: ${pickedFile}`);
    await finalizeIcon(pickedFile);
    if (cmd === "all") {
      await writeWordmark();
      await writeOg();
    }
    return;
  }

  if (cmd === "og") {
    await writeOg();
    return;
  }

  if (cmd === "wordmark") {
    await writeWordmark();
    return;
  }

  throw new Error(`unknown command: ${cmd}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
