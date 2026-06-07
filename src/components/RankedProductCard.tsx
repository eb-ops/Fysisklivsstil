import { Star, Check, X, ArrowRight } from "lucide-react";

export interface RankedProduct {
  rank: number;
  name: string;
  tagline: string;
  rating: number; // out of 5
  score?: number; // editorial /10
  price: string;
  oldPrice?: string;
  highlights: { label: string; value: string }[];
  pros: string[];
  cons?: string[];
  image?: string;
  link?: string;
  ctaLabel?: string;
  badge?: string;
  winner?: boolean;
}

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.round(rating) ? "fill-rating-star text-rating-star" : "text-border"
        }`}
      />
    ))}
    <span className="ml-1.5 font-body text-sm font-bold text-navy">{rating.toFixed(1)}</span>
  </div>
);

const RankedProductCard = ({ product: p }: { product: RankedProduct }) => {
  return (
    <div
      className={`relative ${p.winner ? "rank-glow" : ""} premium-card overflow-hidden ${
        p.winner ? "lg:grid lg:grid-cols-[260px_1fr]" : ""
      }`}
    >
      {/* rank ribbon */}
      <div
        className={`absolute left-0 top-0 z-10 flex h-9 items-center gap-1.5 rounded-br-2xl px-3 font-body text-xs font-bold uppercase tracking-wider text-white ${
          p.winner ? "bg-gradient-to-r from-brand-blue to-brand-purple" : "bg-navy/85"
        }`}
      >
        #{p.rank} {p.badge && <span className="opacity-90">· {p.badge}</span>}
      </div>

      {/* image (winner only / when provided) */}
      {p.image && (
        <div className="flex items-center justify-center bg-gradient-to-br from-secondary to-white p-6 pt-12">
          <img src={p.image} alt={p.name} className="max-h-56 w-auto object-contain" loading="lazy" />
        </div>
      )}

      <div className={`p-6 ${p.image ? "" : "pt-12"}`}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-3xl text-navy">{p.name}</h3>
            <p className="font-body text-sm text-muted-foreground">{p.tagline}</p>
          </div>
          {p.score && (
            <div className="flex flex-col items-center rounded-xl bg-navy px-3 py-1.5 text-center text-white">
              <span className="font-display text-2xl leading-none">{p.score.toFixed(1)}</span>
              <span className="font-body text-[8px] font-bold uppercase tracking-wider opacity-70">
                Score
              </span>
            </div>
          )}
        </div>

        <div className="mt-3">
          <Stars rating={p.rating} />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 rounded-xl bg-secondary/60 p-3 sm:grid-cols-3">
          {p.highlights.map((h) => (
            <div key={h.label}>
              <p className="font-body text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {h.label}
              </p>
              <p className="font-body text-sm font-semibold text-navy">{h.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <ul className="space-y-1.5">
            {p.pros.map((pro) => (
              <li key={pro} className="flex items-start gap-2 font-body text-sm text-foreground/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-winner" /> {pro}
              </li>
            ))}
          </ul>
          {p.cons && p.cons.length > 0 && (
            <ul className="space-y-1.5">
              {p.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" /> {con}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="font-body">
            <span className="font-display text-3xl text-navy">{p.price}</span>
            {p.oldPrice && (
              <span className="ml-2 text-sm text-muted-foreground line-through">{p.oldPrice}</span>
            )}
          </div>
          {p.link ? (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={p.winner ? "btn-green" : "btn-gradient"}
            >
              {p.ctaLabel ?? "Se pris"} <ArrowRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="font-body text-xs text-muted-foreground">Ikke anbefalet</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RankedProductCard;
