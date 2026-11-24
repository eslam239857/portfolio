import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/data/site";
import { iconMap } from "./Icons";
import Reveal from "./Reveal";

function Thumb({ icon, i }: { icon: Project["icon"]; i: number }) {
  const Icon = iconMap[icon];
  const hue = [215, 265, 200, 245, 230][i % 5];
  return (
    <div className="relative grid aspect-[16/9] place-items-center overflow-hidden rounded-2xl" style={{ background: `linear-gradient(135deg, hsl(${hue} 70% 14%), hsl(${hue + 40} 60% 22%))` }} aria-hidden>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute h-40 w-40 rounded-full bg-electric/30 blur-3xl transition duration-500 group-hover:scale-125" />
      <Icon className="relative h-14 w-14 text-white/90 transition duration-500 group-hover:scale-110" strokeWidth={1.25} />
    </div>
  );
}

function LinkBtn({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  const base = "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition";
  if (!href) return <span className={`${base} cursor-not-allowed border-white/10 text-slate-500`} title="Link coming soon (add it in src/data/site.ts)">{icon}{children} (soon)</span>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} border-white/15 text-white hover:border-electric/60 hover:bg-white/5`}>{icon}{children}</a>;
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">03 / Projects</p>
          <h2 className="h2 mt-4 max-w-2xl">Tools and projects I&apos;ve built.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
              <article className={`group h-full rounded-3xl border bg-ink-800/50 p-4 transition duration-300 hover:-translate-y-1 hover:border-electric/40 sm:p-5 ${p.sample ? "border-dashed border-white/20" : "border-white/10"} ${i === 0 ? "md:grid md:grid-cols-2 md:gap-6" : ""}`}>
                <Thumb icon={p.icon} i={i} />
                <div className="flex flex-col px-1 pb-1 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl text-white">{p.title}</h3>
                    {p.sample && <span className="shrink-0 rounded-full bg-violet-glow/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-violet-300">Sample</span>}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => <li key={t} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-electric-soft">{t}</li>)}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    <LinkBtn href={p.demo} icon={<ExternalLink className="h-4 w-4" aria-hidden />}>View Project</LinkBtn>
                    <LinkBtn href={p.github} icon={<Github className="h-4 w-4" aria-hidden />}>GitHub</LinkBtn>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
