import { timeline } from "@/data/site";
import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">05 / Experience &amp; learning</p>
          <h2 className="h2 mt-4">The path so far.</h2>
          <p className="mt-4 text-slate-400">Education, training and goals. Entries are easy to edit in <code className="font-mono text-electric-soft">src/data/site.ts</code>.</p>
        </Reveal>
        <ol className="relative space-y-8 border-l border-white/10 pl-8 lg:col-span-8">
          {timeline.map((t, i) => (
            <li key={t.title} className="relative">
              <span className="absolute -left-[2.45rem] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-ink-950 ring-2 ring-electric"><span className="h-1.5 w-1.5 rounded-full bg-electric" /></span>
              <Reveal delay={i * 0.04}>
                <p className="font-mono text-xs uppercase tracking-wider text-electric-soft">{t.when}</p>
                <h3 className="mt-1 font-display text-xl text-white">{t.title}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-slate-400">{t.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
