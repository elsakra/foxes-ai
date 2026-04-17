# Foxes.ai

Marketing site for Foxes.ai — the AEO (Answer Engine Optimization) agency that gets brands named by ChatGPT, Claude, Perplexity, Gemini, and Copilot.

## Stack

- Next.js 16 (App Router, RSC, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Radix UI primitives (accordion, dialog, etc.)
- Supabase (demo lead capture)
- Deployed on Vercel

## Getting started

```bash
pnpm install
cp .env.example .env.local
# fill in NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
pnpm dev
```

The site runs at <http://localhost:3000>.

## Environment variables

| Key | Description |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only key used by `/api/lead` to insert demo leads |

## Structure

```
app/
  layout.tsx                # Root layout, fonts, Nav, Footer
  page.tsx                  # Homepage
  platform/page.tsx         # How it works
  solutions/page.tsx        # Audience-shaped engagements
  results/page.tsx          # Measurement + outcome ranges
  about/page.tsx
  faq/page.tsx
  resources/page.tsx        # Blog landing
  demo/page.tsx             # Book-a-demo form
  api/lead/route.ts         # POST endpoint → Supabase `leads` table
components/
  nav.tsx / footer.tsx
  mockups/                  # Interactive "feels-like-product" UI
    LiveScanPanel.tsx       # Hero: rotating prompt, model tabs, mention rate
    ShareOfVoiceChart.tsx   # Animated horizontal bars
    MentionRateLine.tsx     # Climbing line chart w/ content-ship markers
    BuyerQuestionStream.tsx # Marquee of buyer prompts
    ContentPipelineBoard.tsx
    AuditReportPreview.tsx  # Light mock of the free AEO audit PDF
  sections/                 # Homepage sections
  ui/                       # Button, Container, Accordion, Eyebrow, Logo
lib/
  utils.ts supabase.ts copy.ts
```

## Calendly booking

All “Book a demo” CTAs use `BOOKING_URL` in `lib/copy.ts` (Calendly) and open in
a new tab. The `/demo` page still hosts the lead form plus inline links to the
same calendar.

## Company

Foxes.ai is a service of Lazarus LLC · 30 N Gould St, Sheridan, WY 82801.
