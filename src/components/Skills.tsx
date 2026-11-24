"use client";
import { useRef } from "react";
import { skillGroups } from "@/data/site";
import { iconMap } from "./Icons";
import Reveal from "./Reveal";

function SpotCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        ref.current!.style.setProperty("--x", `${e.clientX - r.left}px`);
        ref.current!.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 p-6 transition hover:border-electric/40 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(320px circle at var(--x) var(--y), rgba(59,130,255,.16), transparent 60%)" }} aria-hidden />
      <div className="relative">{children}</div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-ink-900/60 py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">02 / Skills</p>
          <h2 className="h2 mt-4 max-w-2xl">The toolkit I use.</h2>
          <p className="mt-4 max-w-xl text-slate-400">Grouped by what I use them for. No inflated percentages, just what I work with.</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-6">
          {skillGroups.map((g, i) => {
            const Icon = iconMap[g.icon];
            return (
              <Reveal key={g.title} delay={i * 0.07} className={i === 0 ? "md:col-span-6" : "md:col-span-2"}>
                <SpotCard className="h-full">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-electric/15 text-electric-soft"><Icon className="h-5 w-5" aria-hidden /></span>
                    <h3 className="font-display text-lg text-white">{g.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-electric/50 hover:text-white">{s}</li>
                    ))}
                  </ul>
                </SpotCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
