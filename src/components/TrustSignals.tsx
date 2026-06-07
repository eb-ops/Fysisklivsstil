import { Star, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const reviews = [
  {
    name: "Timmy K.",
    text: "Endelig noget jeg rent faktisk bruger. Det fylder ingenting, og jeg træner nu 4 gange om ugen i stuen.",
  },
  {
    name: "Mia S.",
    text: "Appen gør hele forskellen. Jeg ved altid hvad jeg skal lave, og programmerne er nemme at følge.",
  },
  {
    name: "Melinna K.",
    text: "Tog det med i sommerhuset hele ferien. Modstanden er vild – man forstår ikke det fylder så lidt.",
  },
  {
    name: "Sofie H.",
    text: "Har købt og opgivet så meget udstyr før. Det her er det første der holder ved. Kan kun anbefale det.",
  },
  {
    name: "Sanne J.",
    text: "Community'et er guld værd. Fik svar på mine spørgsmål fra en rigtig træner inden for et par timer.",
  },
  {
    name: "Thomas L.",
    text: "Solid kvalitet hele vejen igennem. Stålbaren føles som professionelt udstyr.",
  },
];

const TrustSignals = () => {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Elsket af tusindvis"
            title="Hvad brugerne siger"
            subtitle="Verificerede anmeldelser fra det danske JAAFIT-community."
          />
          <div className="flex shrink-0 items-center gap-3 rounded-2xl bg-secondary px-5 py-4">
            <div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-rating-star text-rating-star" />
                ))}
              </div>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                <span className="font-bold text-navy">4,8/5</span> · 369 anmeldelser
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="premium-card flex h-full flex-col p-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-rating-star text-rating-star" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-foreground/85">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2 font-body text-sm">
                <span className="font-semibold text-navy">{r.name}</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-winner">
                  <BadgeCheck className="h-4 w-4" /> Verificeret
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
