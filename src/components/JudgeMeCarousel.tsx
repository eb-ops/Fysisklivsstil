import { useEffect } from "react";
import SectionHeading from "./SectionHeading";

const JudgeMeCarousel = () => {
  useEffect(() => {
    const w = window as any;
    if (w.jdgm?.init) w.jdgm.init();
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Verificerede anmeldelser"
          title="Hvad kunderne siger"
          subtitle="Anmeldelser fra verificerede køb."
        />
        <div className="mt-10 jdgm-carousel-wrapper">
          <h2 className="jdgm-carousel-title" style={{ display: "none" }}>
            Kundeanmeldelser
          </h2>
          <a
            href="https://jaafit.dk/pages/reviews"
            className="jdgm-all-reviews-rating-wrapper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-score="" className="jdgm-all-reviews-rating" />
            fra <span className="jdgm-all-reviews-count" /> anmeldelser
          </a>
        </div>
      </div>
    </section>
  );
};

export default JudgeMeCarousel;
