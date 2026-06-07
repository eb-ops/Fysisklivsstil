import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { NAV, LINKS } from "@/lib/links";

const SiteFooter = () => (
  <footer className="section-navy">
    <div className="container-wide relative z-10 py-14">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src="/brand/logo-mark.svg" alt="" className="h-8 w-8" />
            <span className="font-display text-2xl font-bold text-white">Fysisklivsstil</span>
          </div>
          <p className="font-body text-sm leading-relaxed text-white/65 max-w-sm">
            Uafhængig redaktion for sundhed, træning og livsstil i Danmark. Vi tester
            og sammenligner, så du kan træffe et trygt valg.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 ring-1 ring-white/10">
            <ShieldCheck className="h-4 w-4 text-brand-green" />
            Redaktionelt uafhængig · Opdateret 2026
          </div>
        </div>

        <div>
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
            Guides
          </p>
          <ul className="space-y-2.5 font-body text-sm text-white/75">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors hover:text-brand-green">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
            JAAFIT
          </p>
          <ul className="space-y-2.5 font-body text-sm text-white/75">
            <li>
              <a href={LINKS.jaafitPro} target="_blank" rel="noopener noreferrer sponsored" className="hover:text-brand-green">
                JAAFIT PRO
              </a>
            </li>
            <li>
              <a href={LINKS.massageCollection} target="_blank" rel="noopener noreferrer sponsored" className="hover:text-brand-green">
                MassageRoller
              </a>
            </li>
            <li>
              <a href={LINKS.trustpilot} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green">
                Trustpilot
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="font-body text-xs leading-relaxed text-white/45 max-w-2xl">
          Denne side indeholder affiliate-links. Vi kan modtage provision ved køb via
          vores links — uden ekstra omkostning for dig. Det påvirker ikke vores
          vurderinger.
        </p>
        <p className="font-body text-xs text-white/45">
          © {new Date().getFullYear()} FysiskLivsstil.dk
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
