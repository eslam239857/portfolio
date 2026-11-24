"use client";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Bug, ShieldCheck, Send, Loader2 } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverMsg, setServerMsg] = useState("");
  const openedAt = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const errs: Errors = {};
    if (name.length < 2) errs.name = "Please enter your name.";
    if (!emailRe.test(email)) errs.email = "Please enter a valid email.";
    if (message.length < 10) errs.message = "Message should be at least 10 characters.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website: fd.get("website"), elapsed: Date.now() - openedAt.current }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setServerMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const field = "w-full rounded-xl border border-white/10 bg-ink-900/70 px-4 py-3 text-white placeholder:text-slate-600 transition focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30";
  const contacts = [
    { icon: Mail, label: site.email, href: site.emailIsPlaceholder ? undefined : `mailto:${site.email}`, note: site.emailIsPlaceholder ? "placeholder, update in src/data/site.ts" : undefined },
    { icon: Linkedin, label: "LinkedIn", href: site.links.linkedin },
    { icon: Github, label: site.links.github ? "GitHub" : "GitHub (add link)", href: site.links.github || undefined },
    { icon: Bug, label: "Bugcrowd", href: site.links.bugcrowd },
    { icon: ShieldCheck, label: "YesWeHack", href: site.links.yeswehack },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-900/60 py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-electric/10 blur-[120px]" aria-hidden />
      <div className="container-x relative grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">06 / Contact</p>
          <h2 className="h2 mt-4">Let&apos;s talk security.</h2>
          <p className="mt-4 max-w-md text-slate-400">Internships, collaborations, CTF teams or a question about my work. I read everything.</p>
          <ul className="mt-8 space-y-3">
            {contacts.map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-300 transition hover:text-white">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-electric/50"><c.icon className="h-4 w-4 text-electric-soft" aria-hidden /></span>{c.label}
                  </a>
                ) : (
                  <span className="flex items-center gap-3 text-slate-500">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5"><c.icon className="h-4 w-4" aria-hidden /></span>
                    <span>{c.label}{c.note && <span className="block text-xs">{c.note}</span>}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-3xl p-6 sm:p-8" aria-label="Contact form">
            {/* Honeypot: hidden from people and assistive tech; bots fill it in. */}
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
              <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
            </div>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-slate-300">Name</label>
              <input id="name" name="name" autoComplete="name" className={field} placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} maxLength={100} />
              {errors.name && <p id="name-err" role="alert" className="mt-1.5 text-sm text-rose-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-slate-300">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" className={field} placeholder="you@example.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} maxLength={200} />
              {errors.email && <p id="email-err" role="alert" className="mt-1.5 text-sm text-rose-400">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-slate-300">Message</label>
              <textarea id="message" name="message" rows={5} className={field} placeholder="How can I help?" aria-invalid={!!errors.message} aria-describedby={errors.message ? "msg-err" : undefined} maxLength={4000} />
              {errors.message && <p id="msg-err" role="alert" className="mt-1.5 text-sm text-rose-400">{errors.message}</p>}
            </div>
            <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60">
              {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending</> : <><Send className="h-4 w-4" aria-hidden /> Send message</>}
            </button>
            <p aria-live="polite" className="min-h-[1.25rem] text-sm">
              {status === "sent" && <span className="text-emerald-400">Thanks, your message was sent.</span>}
              {status === "error" && <span className="text-rose-400">{serverMsg} {!site.emailIsPlaceholder && <>You can also email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</>}</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
