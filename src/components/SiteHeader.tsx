import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { LINKS, NAV } from "@/lib/links";

const logo = "/brand/logo.png";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-editorial-border shadow-[0_4px_30px_-20px_rgba(20,18,75,0.5)]"
          : "bg-white/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-3.5">
        <Link to="/" className="flex items-center gap-2.5" aria-label="FysiskLivsstil forside">
          <img src={logo} alt="JAAFIT" className="h-6 w-auto sm:h-7" />
          <span className="hidden sm:block h-5 w-px bg-editorial-border" />
          <span className="hidden sm:block font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            FysiskLivsstil
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 font-body text-[13px] font-semibold text-navy/70">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition-colors hover:text-brand-blue ${
                location.pathname === item.to ? "text-navy" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LINKS.jaafitPro}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2.5 font-body text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-blue"
          >
            Se JAAFIT PRO
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-navy/5"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-editorial-border bg-white/95 backdrop-blur-xl">
          <nav className="container-wide flex flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`py-3 font-body text-sm font-semibold border-b border-editorial-border/60 last:border-0 ${
                  location.pathname === item.to ? "text-brand-blue" : "text-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={LINKS.jaafitPro}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-gradient mt-4 w-full"
            >
              Se JAAFIT PRO <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
