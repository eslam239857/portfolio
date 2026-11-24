"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { nav, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => { const el = document.querySelector(n.href); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled ? "border-b border-white/10 bg-ink-950/75 backdrop-blur-xl" : ""}`}>
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-white" aria-label="Back to top">
          <Terminal className="h-4 w-4 text-electric" aria-hidden /> eslam<span className="text-electric">@</span>sec
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className={`rounded-full px-4 py-2 text-sm transition hover:text-white ${active === n.href ? "bg-white/10 text-white" : "text-slate-400"}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="btn btn-primary hidden !py-2 md:inline-flex">Hire me</a>
        <button className="rounded-lg p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-b border-white/10 bg-ink-950/95 backdrop-blur-xl md:hidden">
            <ul className="container-x flex flex-col py-3">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block py-3 text-slate-300 hover:text-white">{n.label}</a></li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
