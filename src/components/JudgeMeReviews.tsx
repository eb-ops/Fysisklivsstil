import { useEffect, useState } from "react";
import { Star, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ENDPOINT =
  "https://cache.judge.me/widgets/shopify/5ef46d-38.myshopify.com" +
  "?public_token=sthY3gs1hMBVmCD6z6DZZr_D_uk" +
  "&featured_carousel=1" +
  "&all_reviews_page=1";

interface Review {
  author: string;
  rating: number;
  title: string;
  body: string;
  product: string;
  verified: boolean;
}

function parseReviews(html: string): Review[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const items = Array.from(
    doc.querySelectorAll(".jdgm-carousel__item, .jdgm-rev")
  );

  return items
    .map((el) => {
      const ratingEl = el.querySelector("[data-score]");
      const authorEl = el.querySelector(
        ".jdgm-rev__author, .jdgm-carousel__author"
      );
      const titleEl = el.querySelector(
        ".jdgm-rev__title, .jdgm-carousel__title, b"
      );
      const bodyEl = el.querySelector(
        ".jdgm-rev__body, .jdgm-carousel__body, p"
      );
      const productEl = el.querySelector(
        ".jdgm-rev__product-name, .jdgm-carousel__product"
      );

      return {
        author: authorEl?.textContent?.trim() ?? "",
        rating: parseFloat(ratingEl?.getAttribute("data-score") ?? "5"),
        title: titleEl?.textContent?.trim() ?? "",
        body: bodyEl?.textContent?.trim() ?? "",
        product: productEl?.textContent?.trim() ?? "",
        verified: !!el.querySelector('[class*="verified"], [class*="badge"]'),
      };
    })
    .filter((r) => r.body.length > 5);
}

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.round(rating)
            ? "fill-rating-star text-rating-star"
            : "text-border"
        }`}
      />
    ))}
  </div>
);

const COLS = 3;

const JudgeMeReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(0);
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    fetch(ENDPOINT)
      .then((r) => r.json())
      .then((data) => {
        const carouselHtml: string =
          data.featured_carousel ?? data.all_reviews ?? "";
        const parsed = parseReviews(carouselHtml);
        setReviews(parsed);
        setStatus(parsed.length > 0 ? "ok" : "error");
      })
      .catch(() => setStatus("error"));
  }, []);

  const totalPages = Math.ceil(reviews.length / COLS);
  const visible = reviews.slice(page * COLS, page * COLS + COLS);

  if (status === "loading") return null;
  if (status === "error" || reviews.length === 0) return null;

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Verificerede anmeldelser"
            title="Hvad kunderne siger"
            subtitle={`${reviews.length}+ anmeldelser fra verificerede køb.`}
          />
          {totalPages > 1 && (
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-editorial-border bg-white text-navy transition hover:bg-secondary disabled:opacity-30"
                aria-label="Forrige"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-body text-xs text-muted-foreground">
                {page + 1} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-editorial-border bg-white text-navy transition hover:bg-secondary disabled:opacity-30"
                aria-label="Næste"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Desktop: 3 cols — Mobile: 1 col scroll */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((r, i) => (
            <figure
              key={i}
              className="premium-card flex h-full flex-col gap-3 p-6"
            >
              <Stars rating={r.rating} />
              {r.title && (
                <p className="font-display text-lg leading-snug text-navy">
                  {r.title}
                </p>
              )}
              <blockquote className="flex-1 font-body text-[14px] leading-relaxed text-foreground/80">
                "{r.body}"
              </blockquote>
              <figcaption className="flex items-center justify-between gap-2 border-t border-editorial-border pt-3 font-body text-sm">
                <span className="font-semibold text-navy">{r.author}</span>
                {r.verified && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-winner">
                    <BadgeCheck className="h-3.5 w-3.5" /> Verificeret
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Dot indicators */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === page
                    ? "w-6 bg-brand-blue"
                    : "w-2 bg-editorial-border hover:bg-navy/30"
                }`}
                aria-label={`Side ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JudgeMeReviews;
