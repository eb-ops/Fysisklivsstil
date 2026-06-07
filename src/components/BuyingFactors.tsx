import SectionHeading from "./SectionHeading";

interface Factor {
  title: string;
  text: string;
}

interface BuyingFactorsProps {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  factors: Factor[];
}

const BuyingFactors = ({
  eyebrow = "Køberguide",
  title = "5 ting du bør tjekke før du køber",
  subtitle,
  factors,
}: BuyingFactorsProps) => (
  <section className="py-20 bg-secondary/50">
    <div className="container-page">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {factors.map((f, i) => (
          <div key={i} className="premium-card flex gap-5 p-6">
            <span className="font-display text-5xl leading-none text-gradient">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-2xl text-navy">{f.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BuyingFactors;
