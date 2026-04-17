import { NextResponse } from "next/server";
import { z } from "zod";
import { getServiceClient } from "@/lib/supabase";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  company: z.string().min(1).max(200),
  website: z.string().min(1).max(400),
  competitors: z.string().min(1).max(1000),
  prompt: z.string().max(2000).optional().default(""),
});

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const ua = req.headers.get("user-agent") ?? "";
  const referer = req.headers.get("referer") ?? "";

  const supabase = getServiceClient();

  // If Supabase isn't configured yet, still succeed the submission — we log
  // server-side and return OK so the UX is consistent. This lets us ship
  // before env vars are wired.
  if (!supabase) {
    console.log("[lead] (no supabase configured) received:", {
      ...data,
      ua,
      referer,
    });
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("leads").insert({
    name: data.name,
    email: data.email,
    company: data.company,
    website: data.website,
    competitors: data.competitors,
    prompt: data.prompt,
    user_agent: ua,
    referer,
  });

  if (error) {
    console.error("[lead] supabase insert error", error);
    return NextResponse.json({ error: "Could not save lead" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
