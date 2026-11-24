import { about, stats } from "@/data/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">01 / About</p>
          <h2 className="h2 mt-4">Curious about how things <span className="text-electric-soft">break</span>.</h2>
          <div className="mt-8 grid grid-cols-3 gap-3 lg:grid-cols-1">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 sm:p-5 lg:flex lg:items-baseline lg:gap-4">
                <p className="font-display text-3xl font-semibold text-white sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-slate-400 sm:text-sm lg:mt-0">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg lg:col-span-7 lg:pt-12">
          {about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          <p className="border-l-2 border-electric pl-4 font-display text-xl text-white">Always learning, always within scope, always disclosed responsibly.</p>
        </Reveal>
      </div>
    </section>
  );
}
