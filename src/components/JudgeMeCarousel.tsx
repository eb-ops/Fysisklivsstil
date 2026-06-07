import { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";

const WIDGETS_HTML = `
  <div class="jdgm-widget jdgm-all-reviews-widget" style="margin-bottom:2rem">
    <div class="jdgm-all-reviews__body"></div>
  </div>

  <div class="jdgm-carousel-wrapper" style="margin-bottom:2rem">
    <h2 class="jdgm-carousel-title" style="display:none">Kundeanmeldelser</h2>
    <a href="https://jaafit.dk/pages/reviews" class="jdgm-all-reviews-rating-wrapper" target="_blank" rel="noopener noreferrer">
      <div data-score="" class="jdgm-all-reviews-rating"></div>
      fra <span class="jdgm-all-reviews-count"></span> anmeldelser
    </a>
  </div>

  <div class="jdgm-verified-badge-wrapper" style="margin-bottom:1rem"></div>
  <div class="jdgm-medals-wrapper" style="margin-bottom:1rem"></div>
  <div class="jdgm-all-reviews-text"></div>
`;

const JudgeMeCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Inject exact HTML Judge.me expects — bypasses JSX rendering quirks
    ref.current.innerHTML = WIDGETS_HTML;

    const w = window as any;

    const tryInit = () => {
      if (!w.jdgm) return false;
      if (typeof w.jdgm.init === "function") { w.jdgm.init(); return true; }
      if (typeof w.jdgm.onDomReady === "function") { w.jdgm.onDomReady(); return true; }
      return false;
    };

    // Try immediately, then retry if script hasn't loaded yet
    if (!tryInit()) {
      const t1 = setTimeout(tryInit, 300);
      const t2 = setTimeout(tryInit, 1000);
      const t3 = setTimeout(tryInit, 2500);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Verificerede anmeldelser"
          title="Hvad kunderne siger"
          subtitle="Anmeldelser fra verificerede køb via Judge.me."
        />
        <div className="mt-10" ref={ref} />
      </div>
    </section>
  );
};

export default JudgeMeCarousel;
