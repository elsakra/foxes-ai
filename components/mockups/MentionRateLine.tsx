"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

type Point = { x: number; y: number; label?: string; marker?: string };

const POINTS: Point[] = [
  { x: 0, y: 8 },
  { x: 1, y: 9 },
  { x: 2, y: 12, label: "Wk 3", marker: "2 comparison pages shipped" },
  { x: 3, y: 16 },
  { x: 4, y: 18 },
  { x: 5, y: 24, label: "Wk 6", marker: "G2 category page live" },
  { x: 6, y: 28 },
  { x: 7, y: 32 },
  { x: 8, y: 38, label: "Wk 9", marker: "Reddit authority thread" },
  { x: 9, y: 44 },
  { x: 10, y: 49 },
  { x: 11, y: 57, label: "Wk 12", marker: "Category default on 3 prompts" },
];

export function MentionRateLine({
  className,
  title = "Your mention rate · 12-week engagement",
}: {
  className?: string;
  title?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const w = 720;
  const h = 260;
  const pad = { l: 36, r: 16, t: 18, b: 28 };
  const minX = 0;
  const maxX = POINTS[POINTS.length - 1].x;
  const maxY = 64;
  const fx = (x: number) => pad.l + ((x - minX) / (maxX - minX)) * (w - pad.l - pad.r);
  const fy = (y: number) => h - pad.b - (y / maxY) * (h - pad.t - pad.b);

  const path = POINTS.map((p, i) => `${i === 0 ? "M" : "L"}${fx(p.x)},${fy(p.y)}`).join(" ");
  const area =
    `M${fx(POINTS[0].x)},${h - pad.b} ` +
    POINTS.map((p) => `L${fx(p.x)},${fy(p.y)}`).join(" ") +
    ` L${fx(POINTS[POINTS.length - 1].x)},${h - pad.b} Z`;

  return (
    <div ref={ref} className={className}>
      <div className="flex items-center justify-between mb-3">
        <div className="eyebrow">{title}</div>
        <div className="mono text-[11px] text-[color:var(--success)]">+612% vs. baseline</div>
      </div>

      <div className="relative w-full overflow-hidden rounded-lg bg-black/20 ring-1 ring-inset ring-white/[0.06] p-2">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
          <defs>
            <linearGradient id="mentGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="mentStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFB088" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
          </defs>

          {/* y grid */}
          {[0, 16, 32, 48, 64].map((v) => (
            <g key={v}>
              <line
                x1={pad.l}
                x2={w - pad.r}
                y1={fy(v)}
                y2={fy(v)}
                stroke="rgba(255,255,255,0.06)"
                strokeDasharray="2 4"
              />
              <text
                x={pad.l - 6}
                y={fy(v) + 3}
                textAnchor="end"
                className="fill-[color:var(--ink-mute)]"
                fontSize="10"
                fontFamily="var(--font-mono)"
              >
                {v}%
              </text>
            </g>
          ))}

          {/* area */}
          <motion.path
            d={area}
            fill="url(#mentGrad)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* line */}
          <motion.path
            d={path}
            stroke="url(#mentStroke)"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* markers */}
          {POINTS.filter((p) => p.marker).map((p, i) => {
            const label = p.marker!;
            // 10px JetBrains Mono ≈ 6.2px per char; add comfortable padding
            const charW = 6.2;
            const padX = 12;
            const rectW = Math.round(label.length * charW + padX * 2);
            const rectH = 22;
            const cx = fx(p.x);
            // Clamp rect inside chart bounds so labels never clip
            const minLeft = pad.l + 2;
            const maxLeft = w - pad.r - rectW - 2;
            const rectX = Math.max(minLeft, Math.min(cx - rectW / 2, maxLeft));
            const rectY = fy(p.y) - 46;
            const textX = rectX + rectW / 2;
            return (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.2 }}
              >
                <line
                  x1={cx}
                  x2={cx}
                  y1={fy(p.y) - 6}
                  y2={fy(p.y) - 22}
                  stroke="rgba(255,255,255,0.3)"
                  strokeDasharray="2 2"
                />
                <circle cx={cx} cy={fy(p.y)} r="4" fill="#FF6B35" />
                <circle cx={cx} cy={fy(p.y)} r="7" fill="rgba(255,107,53,0.18)" />
                <rect
                  x={rectX}
                  y={rectY}
                  width={rectW}
                  height={rectH}
                  rx="6"
                  fill="rgba(20,20,24,0.95)"
                  stroke="rgba(255,255,255,0.1)"
                />
                <text
                  x={textX}
                  y={rectY + 15}
                  textAnchor="middle"
                  className="fill-[color:var(--ink-dim)]"
                  fontSize="10"
                  fontFamily="var(--font-mono)"
                >
                  {label}
                </text>
              </motion.g>
            );
          })}

          {/* x axis */}
          {[0, 3, 6, 9, 12].map((v) => (
            <text
              key={v}
              x={fx(v)}
              y={h - 8}
              textAnchor="middle"
              className="fill-[color:var(--ink-mute)]"
              fontSize="10"
              fontFamily="var(--font-mono)"
            >
              Wk {v}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}
