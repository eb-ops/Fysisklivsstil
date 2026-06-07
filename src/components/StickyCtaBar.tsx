import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { LINKS } from "@/lib/links";

interface StickyCtaBarProps {
  href?: string;
  label?: string;
  cta?: string;
}

const StickyCtaBar = ({
  href = LINKS.jaafitPro,
  label = "JAAFIT PRO – Testvinder 2026",
  cta = "Se tilbud",
}: StickyCtaBarProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="m-3 flex items-center justify-between gap-3 rounded-2xl bg-navy/95 px-4 py-3 shadow-[0_-8px_40px_-12px_rgba(20,18,75,0.6)] backdrop-blur-xl ring-1 ring-white/10">
        <div className="min-w-0">
          <p className="truncate font-body text-sm font-bold text-white">{label}</p>
          <p className="font-body text-[11px] text-brand-green">★★★★★ 30 dages garanti</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-green-soft to-brand-green px-5 py-2.5 font-body text-xs font-bold uppercase tracking-wider text-navy"
        >
          {cta}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
};

export default StickyCtaBar;
