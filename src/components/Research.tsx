import { ArrowUpRight, Bug, Trophy } from "lucide-react";
import { achievements, site } from "@/data/site";
import Reveal from "./Reveal";

const platforms = [
  { name: "Bugcrowd", href: site.links.bugcrowd, handle: "eslamhesuien77a2ca" },
  { name: "YesWeHack", href: site.links.yeswehack, handle: "eslam125" },
];

export default function Research() {
  return (
    <section id="research" className="bg-ink-900/60 py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">04 / Bug bounty &amp; achievements</p>
          <h2 className="h2 mt-4 max-w-3xl">Hunting in scope. Competing in CTFs.</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-6 sm:p-8">
              <Bug className="h-7 w-7 text-electric-soft" aria-hidden />
              <h3 className="mt-4 font-display text-2xl text-white">Bug bounty journey</h3>
              <p className="mt-3 leading-relaxed text-slate-400">
                I test web apps and APIs on public bug bounty platforms, following each program&apos;s scope and rules, and report findings through responsible disclosure. See my public profiles for current activity.
              </p>
              <div className="mt-6 space-y-3">
                {platforms.map((p) => (
                  <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-ink-800/70 px-5 py-4 transition hover:border-electric/50">
                    <span><span className="block font-display text-white">{p.name}</span><span className="font-mono text-xs text-slate-500">{p.handle}</span></span>
                    <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric-soft" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-ink-800/50 p-6 sm:p-8">
              <Trophy className="h-7 w-7 text-electric-soft" aria-hidden />
              <h3 className="mt-4 font-display text-2xl text-white">CTF achievements</h3>
              <ul className="mt-5 divide-y divide-white/10">
                {achievements.map((a) => (
                  <li key={a.title} className="py-4 first:pt-0 last:pb-0">
                    <p className="font-display text-lg text-white">{a.title} <span className="font-sans text-sm text-slate-500">· {a.team}</span></p>
                    <p className="mt-1 text-sm text-electric-soft">{a.result}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
