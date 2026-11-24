import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Simple in-memory rate limit (per server instance). Use Upstash/Vercel KV for strict limits.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 3;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) return NextResponse.json({ error: "Too many messages. Try again later." }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  // Spam checks: honeypot filled, or submitted impossibly fast. Pretend success so bots learn nothing.
  if (body.website || (typeof body.elapsed === "number" && body.elapsed < 2500)) return NextResponse.json({ ok: true });

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  if (name.length < 2 || name.length > 100 || !emailRe.test(email) || email.length > 200 || message.length < 10 || message.length > 4000)
    return NextResponse.json({ error: "Please check the form fields." }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
  if (!key || !to) return NextResponse.json({ error: "Contact form is not configured yet." }, { status: 503 });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from, to: [to], reply_to: email,
      subject: `Portfolio message from ${name.replace(/[\r\n]/g, " ")}`,
      html: `<p><strong>${esc(name)}</strong> &lt;${esc(email)}&gt;</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });
  if (!res.ok) return NextResponse.json({ error: "Could not send the message right now." }, { status: 502 });

  hits.set(ip, [...recent, now]);
  return NextResponse.json({ ok: true });
}
