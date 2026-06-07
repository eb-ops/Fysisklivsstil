import { ArrowRight } from "lucide-react";
import { LINKS } from "@/lib/links";

interface FinalCtaProps {
  eyebrow?: string;
  title?: React.ReactNode;
  text?: string;
  href?: string;
  cta?: string;
}

const FinalCta = ({
  eyebrow = "Testvinder 2026",
  title = (
    <>
      Måske er det ikke dig.{" "}
      <span className="text-gradient">Måske er det løsningen.</span>
    </>
  ),
  text = "Har du prøvet fitnesscenter, hjemmetræning eller apps før uden held, er det måske ikke dig, men løsningen, der var problemet. Prøv JAAFIT PRO risikofrit i 30 dage.",
  href = LINKS.jaafitPro,
  cta = "Se JAAFIT PRO",
}: FinalCtaProps) => (
  <section className="section-navy grid-texture">
    <div className="container-page relative z-10 py-20 text-center">
      <span className="eyebrow text-brand-green">{eyebrow}</span>
      <h2 className="mx-auto mt-4 max-w-3xl text-4xl text-white sm:text-6xl">{title}</h2>
      <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-white/70">
        {text}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="btn-green mt-9"
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </a>
      <p className="mt-4 font-body text-xs text-white/45">
        30 dages tilfredshedsgaranti · Gratis fragt i DK
      </p>
    </div>
  </section>
);

export default FinalCta;
