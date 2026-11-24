import { Github, Linkedin, Bug, ShieldCheck } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  const links = [
    { icon: Linkedin, href: site.links.linkedin, label: "LinkedIn" },
    { icon: Bug, href: site.links.bugcrowd, label: "Bugcrowd" },
    { icon: ShieldCheck, href: site.links.yeswehack, label: "YesWeHack" },
    ...(site.links.github ? [{ icon: Github, href: site.links.github, label: "GitHub" }] : []),
  ];
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <ul className="flex gap-2">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-electric/60 hover:text-white">
                <l.icon className="h-4 w-4" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
