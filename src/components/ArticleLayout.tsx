import { CalendarDays, Clock } from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import AffiliateDisclosure from "./AffiliateDisclosure";
import StickyCtaBar from "./StickyCtaBar";
import AuthorBox from "./AuthorBox";

interface ArticleLayoutProps {
  category: string;
  title: string;
  intro: string;
  readingTime?: string;
  updated?: string;
  ctaHref: string;
  ctaLabel: string;
  children: React.ReactNode;
}

const ArticleLayout = ({
  category,
  title,
  intro,
  readingTime = "4 min",
  updated = "Juni 2026",
  ctaHref,
  ctaLabel,
  children,
}: ArticleLayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <SiteHeader />
    <AffiliateDisclosure />
    <main className="flex-1">
      {/* Article hero */}
      <header className="section-navy grid-texture">
        <div className="container-page relative z-10 py-16 sm:py-20">
          <span className="eyebrow text-brand-green">{category}</span>
          <h1 className="mt-4 max-w-4xl text-[2.5rem] leading-[0.97] [hyphens:auto] [overflow-wrap:anywhere] text-white sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/75">
            {intro}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4 font-body text-xs font-semibold text-white/55">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" /> Opdateret {updated}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {readingTime} læsetid
            </span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="container-narrow py-14 sm:py-16">
        <div className="space-y-6 font-body text-[15px] leading-[1.75] text-foreground/85 [&_h2]:mt-12 [&_h2]:mb-1 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-navy [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:text-navy [&_a]:font-semibold [&_a]:text-brand-blue">
          {children}
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-to-br from-brand-blue/8 to-brand-purple/8 p-7 ring-1 ring-brand-blue/15">
          <p className="font-display text-3xl text-navy">Klar til at komme i gang?</p>
          <p className="mt-2 font-body text-sm text-muted-foreground">
            Prøv risikofrit med 30 dages tilfredshedsgaranti.
          </p>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-gradient mt-5"
          >
            {ctaLabel}
          </a>
        </div>

        <div className="mt-10">
          <AuthorBox updated={updated} />
        </div>
      </article>
    </main>
    <SiteFooter />
    <StickyCtaBar href={ctaHref} label="JAAFIT PRO – Testvinder 2026" />
  </div>
);

export default ArticleLayout;
