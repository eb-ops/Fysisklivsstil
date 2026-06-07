import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

const ENDPOINT =
  "https://cache.judge.me/widgets/shopify/5ef46d-38.myshopify.com" +
  "?public_token=sthY3gs1hMBVmCD6z6DZZr_D_uk" +
  "&featured_carousel=1" +
  "&all_reviews_page=1";

// Re-execute any <script> tags inside injected HTML
function runScripts(container: HTMLDivElement) {
  container.querySelectorAll("script").forEach((old) => {
    const s = document.createElement("script");
    if (old.src) s.src = old.src;
    else s.textContent = old.textContent;
    old.parentNode?.replaceChild(s, old);
  });
}

const JudgeMeReviews = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    fetch(ENDPOINT)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((html) => {
        if (cancelled || !ref.current) return;
        ref.current.innerHTML = html;
        runScripts(ref.current);
        setStatus("ok");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => { cancelled = true; };
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Verificerede anmeldelser"
          title="Hvad kunderne siger"
          subtitle="Anmeldelser fra verificerede køb via Judge.me."
        />
        <div className="mt-10">
          {status === "loading" && (
            <p className="font-body text-sm text-muted-foreground">Indlæser anmeldelser…</p>
          )}
          {status === "error" && (
            <p className="font-body text-sm text-muted-foreground">Kunne ikke indlæse anmeldelser.</p>
          )}
          <div ref={ref} />
        </div>
      </div>
    </section>
  );
};

export default JudgeMeReviews;
