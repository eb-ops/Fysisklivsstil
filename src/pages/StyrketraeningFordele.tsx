import ArticleLayout from "@/components/ArticleLayout";
import { LINKS } from "@/lib/links";

const benefits = [
  {
    title: "Øget muskelmasse og hurtigere stofskifte",
    text: "Mere muskelmasse hæver dit basale stofskifte, så du forbrænder flere kalorier – også i hvile. Styrketræning er den mest effektive måde at ændre din kropssammensætning på.",
  },
  {
    title: "Stærkere knogler",
    text: "Modstandstræning stimulerer knogledannelse og reducerer risikoen for osteoporose. Effekten er veldokumenteret i kliniske studier, særligt med alderen.",
  },
  {
    title: "Bedre mental sundhed",
    text: "Regelmæssig styrketræning er forbundet med markant lavere niveauer af angst- og depressionssymptomer – og bedre søvn samt energiniveau i hverdagen.",
  },
  {
    title: "Forbedret hjerte-kar-sundhed",
    text: "Styrketræning sænker blodtrykket, forbedrer kolesterolprofilen og reducerer risikoen for hjerte-kar-sygdom – også uden klassisk konditionstræning.",
  },
  {
    title: "Øget funktionel styrke",
    text: "Du bliver stærkere i hverdagen: bære indkøb, løfte børn, undgå skader. Træner du hjemme, bliver det langt nemmere at være konsekvent uge efter uge.",
  },
];

const StyrketraeningFordele = () => (
  <ArticleLayout
    category="Sundhed"
    title="5 videnskabelige fordele ved styrketræning derhjemme"
    intro="Styrketræning er ikke kun for bodybuildere. Her er fem evidensbaserede grunde til at træne – og hvorfor hjemmetræning gør det nemmere end nogensinde."
    readingTime="4 min"
    ctaHref={LINKS.jaafitPro}
    ctaLabel="Start din styrketræning – JAAFIT PRO"
  >
    <p>
      Du behøver hverken et fitnessabonnement eller timevis i et center for at høste de
      store gevinster ved styrketræning. Med den rette modstand og lidt struktur kan du
      opnå reelle resultater hjemmefra. Her er de fem vigtigste grunde til at gå i gang.
    </p>

    {benefits.map((b, i) => (
      <div key={i}>
        <h2>
          {i + 1}. {b.title}
        </h2>
        <p>{b.text}</p>
      </div>
    ))}

    <h2>Sådan kommer du i gang derhjemme</h2>
    <p>
      Den største barriere er sjældent motivation – det er besvær. Et kompakt system, der
      altid er klar, og en app, der fortæller dig hvad du skal lave, fjerner undskyldningerne.
      Det er præcis hvad JAAFIT PRO er bygget til: op til 145 kg modstand, færdige programmer
      og 50+ øvelser, så du kan begynde i dag.
    </p>
  </ArticleLayout>
);

export default StyrketraeningFordele;
