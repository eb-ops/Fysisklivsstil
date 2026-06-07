import ArticleLayout from "@/components/ArticleLayout";
import { LINKS } from "@/lib/links";

const ElastikkerVsVaegt = () => (
  <ArticleLayout
    category="Sammenligning"
    title="Elastikker vs. frie vægte: Hvad bygger muskler hurtigst?"
    intro="Debatten er gammel, men forskningen er overraskende klar. Her er hvad data faktisk siger – og hvorfor elastisk modstand kan matche håndvægte."
    readingTime="5 min"
    ctaHref={LINKS.jaafitPro}
    ctaLabel="Se JAAFIT PRO – op til 145 kg"
  >
    <p>
      Spørgsmålet deler træningsverdenen: Kan man overhovedet bygge muskler med elastikker,
      eller skal man have frie vægte? Nyere studier – bl.a. publiceret i{" "}
      <em>Journal of Sports Science</em> – viser, at elastisk modstand kan give{" "}
      <strong>sammenlignelige muskelgevinster</strong> som frie vægte, så længe modstanden
      er tilstrækkelig høj og du træner til muskulær udmattelse.
    </p>

    <h2>Det handler om progressiv overbelastning</h2>
    <p>
      Muskelvækst styres af progressiv overbelastning – at du gradvist øger belastningen
      over tid. Det er her billige elastikker fejler: de topper ofte ved 15–25 kg. Et system
      som JAAFIT PRO leverer op til <strong>145 kg modstand</strong>, så du kan blive ved med
      at øge belastningen præcis som med håndvægte og vægtstænger.
    </p>

    <h2>Fordele ved elastisk modstand</h2>
    <ul className="space-y-2 pl-0">
      <li>⚡ <strong>Konstant spænding</strong> gennem hele bevægelsen – modsat frie vægte, hvor belastningen falder i visse vinkler.</li>
      <li>🦵 <strong>Lavere skaderisiko</strong> for led og sener, fordi modstanden er glidende.</li>
      <li>🎒 <strong>Portabilitet</strong> – hele sættet vejer under 3 kg og kan tages med overalt.</li>
      <li>📈 <strong>Variabel modstandskurve</strong> stimulerer musklen anderledes og kan øge tid under spænding.</li>
    </ul>

    <h2>Hvornår giver frie vægte stadig mening?</h2>
    <p>
      Frie vægte er stærke til tunge enkeltløft og maksimal styrke for erfarne atleter med
      adgang til et center. Men for langt de fleste, der træner hjemme og vil bygge muskel,
      vedligeholde form og spare plads, vinder et justerbart elastiksystem på fleksibilitet,
      pris og brugbarhed i hverdagen.
    </p>

    <h2>Konklusion</h2>
    <p>
      For hjemmetræning er et elastiksystem med høj, justerbar modstand det mest praktiske
      valg – og forskningen bakker det op. JAAFIT PRO kombinerer 145 kg modstand med en app,
      der fortæller dig præcis hvad du skal lave, så du faktisk kommer i gang.
    </p>
  </ArticleLayout>
);

export default ElastikkerVsVaegt;
