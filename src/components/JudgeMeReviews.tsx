import { useState } from "react";
import { Star, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Review {
  title: string;
  body: string;
  rating: number;
  author: string;
}

const REVIEWS: Review[] = [
  { title: "Bruger det rent faktisk", body: "Endelig noget jeg rent faktisk bruger. Det fylder ingenting, og jeg træner nu 4 gange om ugen i stuen.", rating: 5, author: "Timmy K." },
  { title: "Appen gør forskellen", body: "Appen gør hele forskellen. Jeg ved altid hvad jeg skal lave, og programmerne er nemme at følge.", rating: 5, author: "Mia S." },
  { title: "Tog den med på ferie", body: "Tog det med i sommerhuset hele ferien. Modstanden er vild – man forstår ikke det fylder så lidt.", rating: 5, author: "Melinna K." },
  { title: "Holder ved denne gang", body: "Har købt og opgivet så meget udstyr før. Det her er det første der holder ved. Kan kun anbefale det.", rating: 5, author: "Sofie H." },
  { title: "Community er guld værd", body: "Community'et er guld værd. Fik svar på mine spørgsmål fra en rigtig træner inden for et par timer.", rating: 5, author: "Sanne J." },
  { title: "Professionel kvalitet", body: "Solid kvalitet hele vejen igennem. Stålbaren føles som professionelt udstyr.", rating: 5, author: "Thomas L." },
  { title: "Partræning", body: "Min partner og jeg har begge investeret i dette hjemmetræningsudstyr, og vi elsker det! Det giver os mulighed for at træne sammen derhjemme, hvilket har styrket vores forhold og motivation. Tak for et fantastisk produkt!", rating: 5, author: "Malene Thygesen" },
  { title: "Ny motivation", body: "Jeg har altid haft svært ved at holde mig motiveret til at træne derhjemme, men dette firma har virkelig givet mig den motivation, jeg har brug for. Produktet er af høj kvalitet, og træningsprogrammet er motiverende og effektivt.", rating: 5, author: "Frederik Knudsen" },
  { title: "Perfekt til både begyndere og øvede", body: "Perfekt til både begyndere og øvede! God service, hurtig levering og produkter af høj kvalitet. Træningsvideoerne er professionelle og forklarer øvelserne rigtig godt. Alt sammen super nemt at gå til.", rating: 5, author: "Rune Kirstein Hansen" },
  { title: "Som en der afskyr fitnesscentre", body: "Som en der afskyr fitnesscentre, men godt kan se ideen i at holde sin krop sund og rask, har dette været et kongeligt alternativ! Elastikkerne er top kvalitet, nemme at bruge, og man er aldrig i tvivl om hvad man skal lave.", rating: 5, author: "Andreas Jakobsen" },
  { title: "Fungerer sgu smaddergodt", body: "Træningssættet fungerer sgu smaddergodt. Sættet fylder ikke så meget og kan snildt være i min 48 kvm lejlighed. Jeg er tilmed blevet glad for at træne i løbet af hverdagen. Har før købt noget billigt bras – aldrig igen.", rating: 5, author: "Lasse Jarrels" },
  { title: "Fedt produkt til hjemmetræning", body: "Jeg er stor fan af disse træningselastikker og træningsprogrammer! De har virkelig gjort det nemt for mig at træne derhjemme, når det passer mig. Elastikkerne er lette at bruge, programmerne holder mig motiveret.", rating: 5, author: "Oliver J" },
  { title: "Fedt kit og god kundeservice", body: "Som nybegynder har dette kit været lige det jeg har været på udkig efter. Kittet er lige til at gå til, særlig pga. hjælp fra videoerne. Desuden hurtig og hjælpsom kundeservice – det gør hele forskellen.", rating: 5, author: "Lea Elisabeth Haugstrup" },
  { title: "Rigtigt godt og anvendeligt udstyr", body: "Efter at have brugt udstyret og de mange instruktionsvideoer i 2 uger kan jeg varmt anbefale JAAFIT PRO som et rigtigt godt og anvendeligt udstyr. Især baren og de mange vægtkombinationer er imponerende.", rating: 5, author: "Peter Freiesleben" },
  { title: "Super god træningsoplevelse", body: "Jeg kan varmt anbefale JAAFIT PRO! Jeg nyder meget at hjemmetræne og er imponeret over, hvor effektiv træningssættet er. Det er fremstillet i en lækker kvalitet, det fylder ikke meget, og det er let at bruge.", rating: 5, author: "Peter Lykke Nyrup Rasmussen" },
  { title: "Genialt træningsudstyr", body: "Købte JAAFIT Pro udvidet pakke i julen og det fungerer bare! Nem videoguide af de forskellige træningsredskaber, og videoer hvor man følger en træner. Kan nemt bruges hjemme i stuen eller tages med på rejsen.", rating: 5, author: "Mikkel" },
  { title: "Høj service og høj kvalitet", body: "Her kan man med sindsro handle, for her er mega service ud over det sædvanlige. Der svares på spørgsmål, produkter til fine priser, og et ønske om at gøre produkterne endnu bedre. Imponerende dansk brand.", rating: 5, author: "Lene Clausen" },
  { title: "Jaafit PRO er super", body: "Jeg er virkelig glad for sættet, der giver mulighed for at tilpasse elastikkerne til den enkelte øvelse og min styrke. De mange øvelsesvideoer gør det let at komme i gang. Er helt og holdent glad for købet.", rating: 5, author: "Hans-Jørgen Jensen" },
  { title: "Perfekt til en travl hverdag", body: "I en travl hverdag er der ikke længere en brugbar undskyldning med Jaafit ved hånden. Ukompliceret og ligetil. Jeg er imponeret over kundeservicen – de reagerede på min henvendelse dagen efter.", rating: 5, author: "Kirsten Hultèn" },
  { title: "Jeg er bare glad for mit nye udstyr", body: "Jeg har investeret i JAAFIT, og min oplevelse har været meget positiv. Allerede fra start er jeg blevet motiveret til at træne hver dag. Træningsvideoerne der følger med har været en enorm hjælp til at få struktur.", rating: 5, author: "Mikael Vergara" },
  { title: "Nemt at gå til", body: "JAAFIT PRO sættet er nemt at gå til og det fungerer vildt godt med den medfølgende app, hvor man bliver guidet godt på vej. Jeg får trænet nu, fordi jeg bare kan tage det frem og komme i gang.", rating: 5, author: "Sandra C" },
  { title: "Fantastisk produkt", body: "Elastikkerne er af højere kvalitet end jeg havde regnet med, og baren er utroligt stabil. Træningsprogrammet har virkelig gjort en forskel i min træning. Jeg kan kun anbefale JAAFIT.", rating: 5, author: "Sarah B. Jensen" },
  { title: "Godt produkt til hele familien", body: "Hurtig levering og meget udførlige videoer. Det er fedt at kunne score point og følge fremgangen. Elastikkerne er solide, og appen gør det nemt at komme i gang – selv for dem der aldrig har styrketrænet før.", rating: 5, author: "Morten Voigt Hansen" },
  { title: "Sparer transporten til fitness", body: "Fantastisk produkt. Giver mulighed for at spare transporten til fitness samt træne oftere. Stor mulighed for variation og en god app med øvelser og programmer – I har udviklet et virkelig godt produkt.", rating: 5, author: "Britt" },
  { title: "Super til hjemmetræning", body: "Jeg er super glad for mit træningsudstyr. Det sparer mig tid og gør det nemt at træne flere gange ugentligt. Jeg har styrketrænet i mange år og er positivt overrasket over kvaliteten.", rating: 5, author: "Desiree Balfelt" },
  { title: "Forfærdelig lækkert", body: "Aldrig i mit liv har jeg købt noget der var så forfærdeligt lækkert! Her køber man et super godt produkt og det eneste man får ud af det er, at man ikke kan sidde ned fordi man har ondt over det hele og ikke engang er ked af det.", rating: 5, author: "Rikke Vistisen" },
  { title: "Rigtigt god investering", body: "Produktet er fremragende og giver virkelig gode resultater. Jeg kan mærke fremgang hver uge. Appen er intuitiv og hjælper mig med at holde styr på mine træninger. Hurtig levering og super emballage.", rating: 5, author: "Thomas" },
  { title: "Kan anbefales til alle", body: "Produktet levede fuldt op til mine forventninger. God kvalitet, nem opsætning og et bredt udvalg af øvelser. Træningsprogrammerne er velstrukturerede og tilpasset alle niveauer. Vil helt klart anbefale det.", rating: 5, author: "Brian Gustafson" },
];

const COLS = 3;

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-rating-star text-rating-star" : "text-border"}`} />
    ))}
  </div>
);

const JudgeMeReviews = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(REVIEWS.length / COLS);
  const visible = REVIEWS.slice(page * COLS, page * COLS + COLS);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Verificerede anmeldelser"
            title="Hvad kunderne siger"
            subtitle={`${REVIEWS.length}+ verificerede anmeldelser · 4,8/5 på Trustpilot`}
          />
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-editorial-border bg-white text-navy transition hover:bg-secondary disabled:opacity-30"
              aria-label="Forrige"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="font-body text-xs text-muted-foreground tabular-nums">
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
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((r, i) => (
            <figure key={i} className="premium-card flex h-full flex-col gap-3 p-6">
              <Stars rating={r.rating} />
              <p className="font-display text-lg leading-snug text-navy">{r.title}</p>
              <blockquote className="flex-1 font-body text-[14px] leading-relaxed text-foreground/80">
                "{r.body}"
              </blockquote>
              <figcaption className="flex items-center justify-between gap-2 border-t border-editorial-border pt-3 font-body text-sm">
                <span className="font-semibold text-navy">{r.author}</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-winner">
                  <BadgeCheck className="h-3.5 w-3.5" /> Verificeret
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${i === page ? "w-6 bg-brand-blue" : "w-2 bg-editorial-border hover:bg-navy/30"}`}
              aria-label={`Side ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgeMeReviews;
