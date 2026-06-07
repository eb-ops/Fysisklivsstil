import ArticleLayout from "@/components/ArticleLayout";
import { LINKS } from "@/lib/links";

const split = [
  {
    day: "Dag 1 – Overkrop (push)",
    exercises: ["Bænkpres med stålbar", "Skulderpres", "Triceps pushdown", "Lateral raises"],
  },
  {
    day: "Dag 2 – Underkrop",
    exercises: ["Front squat med stålbar", "Rumænsk dødløft", "Lunges", "Standende lægpres"],
  },
  {
    day: "Dag 3 – Overkrop (pull)",
    exercises: ["Rows med stålbar", "Bicep curls", "Face pulls", "Rear delt flyes"],
  },
];

const TraeningGuide = () => (
  <ArticleLayout
    category="Træningsguide"
    title="Full-body træningsguide for travle hverdage"
    intro="Du behøver hverken et center eller to timer om dagen. Med den rette modstand og struktur kan du se resultater på 30 minutter – hjemmefra."
    readingTime="6 min"
    ctaHref={LINKS.jaafitPro}
    ctaLabel="Få udstyret til planen – JAAFIT PRO"
  >
    <p>
      Den her plan er bygget til travle mennesker. Tre korte træninger om ugen, fuld krop,
      og øvelser du kan lave med et enkelt elastiksystem. Kør 3 sæt af 10–15 gentagelser pr.
      øvelse, og øg modstanden, så snart det føles for let.
    </p>

    <h2>3-dages split med elastikker</h2>
    {split.map((d) => (
      <div
        key={d.day}
        className="my-5 rounded-2xl border border-editorial-border bg-secondary/40 p-5"
      >
        <h3 className="!mt-0">{d.day}</h3>
        <ul className="mt-2 space-y-1.5">
          {d.exercises.map((e) => (
            <li key={e} className="font-body text-sm text-foreground/80">
              {e} <span className="text-muted-foreground">· 3 sæt × 10–15 reps</span>
            </li>
          ))}
        </ul>
      </div>
    ))}

    <h2>Sådan får du fremgang</h2>
    <p>
      Hold styr på dine sæt og øg modstanden hver gang du kan tage flere gentagelser end
      målet. Det er progressiv overbelastning i praksis. Med JAAFIT PRO justerer du modstanden
      fra 5 til 145 kg på sekunder, og appen logger dine øvelser, så du altid ved hvor du er.
    </p>

    <h2>Restitution er en del af planen</h2>
    <p>
      Musklerne vokser mellem træningerne, ikke under dem. Sørg for protein, søvn og at lade
      muskelgrupperne hvile mindst 48 timer. En massageroller efter træning kan hjælpe
      blodgennemstrømningen og dæmpe ømhed i dagene efter.
    </p>
  </ArticleLayout>
);

export default TraeningGuide;
