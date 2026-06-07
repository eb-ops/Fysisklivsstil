import { Star, Trophy, ArrowRight, Check } from "lucide-react";
import { LINKS } from "@/lib/links";

const HeroSection = () => {
  return (
    <section className="section-navy grid-texture">
      <div className="container-wide relative z-10 grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Copy */}
        <div>
          <div className="flex flex-wrap items-center gap-3 animate-rise">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/15 px-3.5 py-1.5 font-body text-xs font-bold uppercase tracking-wider text-brand-green ring-1 ring-brand-green/30">
              <Trophy className="h-3.5 w-3.5" /> Testvinder 2026
            </span>
            <span className="font-body text-xs font-semibold text-white/55">
              Uafhængig test · Opdateret juni 2026
            </span>
          </div>

          <h1 className="mt-6 text-[2.5rem] leading-[0.95] text-white animate-rise delay-100 [hyphens:auto] [overflow-wrap:anywhere] sm:text-6xl md:text-7xl">
            Det bedste{" "}
            <span className="text-gradient">hjemmetræningsudstyr</span>{" "}
            i 2026
          </h1>

          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-white/75 animate-rise delay-200">
            Vores ekspertpanel har testet og sammenlignet de mest populære
            hjemmetræningsløsninger på det danske marked. Én løsning skiller sig markant ud.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 animate-rise delay-200">
            {["Op til 145 kg modstand", "App med 50+ øvelser", "Fylder mindre end en sportstaske"].map(
              (b) => (
                <span key={b} className="inline-flex items-center gap-2 font-body text-sm text-white/80">
                  <Check className="h-4 w-4 text-brand-green" /> {b}
                </span>
              )
            )}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center animate-rise delay-300">
            <a href={LINKS.jaafitPro} target="_blank" rel="noopener noreferrer sponsored" className="btn-green">
              Se testvinderen <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#sammenligning" className="inline-flex items-center gap-2 px-3 py-3 font-body text-sm font-semibold text-white/80 transition-colors hover:text-brand-green">
              Se hele sammenligningen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 animate-rise delay-400">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-rating-star text-rating-star" />
              ))}
            </div>
            <p className="font-body text-sm text-white/70">
              <span className="font-bold text-white">4,8/5</span> · 10.000+ danskere træner hjemme
            </p>
          </div>
        </div>

        {/* Stats visual */}
        <div className="relative animate-rise delay-300">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-brand-blue/30 via-brand-purple/20 to-brand-green/20 blur-3xl" />
          <div className="glass relative p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-5xl text-white leading-none">9,8</p>
                <p className="font-body text-xs font-bold uppercase tracking-wider text-white/50 mt-1">Redaktionel score</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-rating-star text-rating-star" />
                  ))}
                </div>
                <p className="font-body text-xs text-white/60">4,8 · Trustpilot</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { label: "Max modstand", value: "145 kg" },
                { label: "Øvelser i app", value: "50+" },
                { label: "Kunder", value: "10.000+" },
                { label: "Garanti", value: "30 dage" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="font-display text-2xl text-white">{s.value}</p>
                  <p className="font-body text-[11px] text-white/50 uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="pt-2 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 flex items-center justify-between">
              <div>
                <p className="font-display text-2xl text-white">JAAFIT PRO</p>
                <p className="font-body text-xs text-white/60">Fra 999 kr. · 30 dages garanti</p>
              </div>
              <span className="rounded-full bg-brand-green px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-navy">#1 valg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
