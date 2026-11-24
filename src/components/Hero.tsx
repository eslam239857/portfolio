"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Bug, ShieldCheck, Terminal } from "lucide-react";
import { site } from "@/data/site";

const chips = [
  { icon: Bug, text: "Bug Bounty", cls: "-left-2 top-12 sm:-left-10" },
  { icon: ShieldCheck, text: "OWASP Top 10", cls: "-right-2 top-1/2 sm:-right-10" },
  { icon: Terminal, text: "Burp · Nmap", cls: "bottom-10 left-0 sm:-left-8" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-28 noise">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
      <div className="absolute -left-40 top-10 -z-10 h-[28rem] w-[28rem] animate-drift rounded-full bg-electric/25 blur-[120px]" aria-hidden />
      <div className="absolute -right-32 bottom-0 -z-10 h-[26rem] w-[26rem] animate-drift rounded-full bg-violet-glow/25 blur-[120px]" style={{ animationDelay: "-6s" }} aria-hidden />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-electric-soft">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
            Open to internships and bounty collaborations
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-electric-soft via-electric to-violet-glow bg-clip-text text-transparent">{site.name}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-5 font-display text-xl text-slate-200 sm:text-2xl">
            Cybersecurity Enthusiast &amp; Web Penetration Tester
            <span className="ml-1 inline-block h-6 w-[3px] translate-y-1 animate-blink bg-electric" aria-hidden />
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {site.intro}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View My Projects <ArrowDown className="h-4 w-4" aria-hidden /></a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-8 flex items-center gap-2 font-mono text-xs text-slate-500">
            <MapPin className="h-3.5 w-3.5" aria-hidden /> {site.location}
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-electric/30 to-violet-glow/30 blur-3xl" aria-hidden />
          <div className="relative rounded-[2rem] p-[2px]">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem]" aria-hidden>
              <div className="absolute left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-spin360" style={{ background: "conic-gradient(from 0deg, transparent 0 55%, #3b82ff 75%, #8b5cf6 90%, transparent)" }} />
            </div>
            <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-ink-900">
              <Image src={site.photo} alt={site.photoAlt} width={694} height={1041} priority sizes="(max-width: 640px) 90vw, 384px" className="aspect-[4/5] w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" aria-hidden />
              <p className="absolute bottom-4 left-4 font-mono text-xs text-white/80">~/eslam $ whoami</p>
            </div>
          </div>
          {chips.map((c) => (
            <div key={c.text} className={`absolute z-10 hidden animate-float border border-white/15 bg-ink-900/85 backdrop-blur-md items-center gap-2 rounded-xl px-3 py-2 text-xs text-white shadow-xl sm:flex ${c.cls}`}>
              <c.icon className="h-4 w-4 text-electric-soft" aria-hidden /> {c.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
