import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

export interface Faq {
  q: string;
  a: string;
}

const defaultFaqs: Faq[] = [
  {
    q: "Kan man bygge muskler med elastikker?",
    a: "Ja. Forskning viser, at elastisk modstand kan give sammenlignelige muskelgevinster som frie vægte, så længe modstanden er tilstrækkelig. JAAFIT PRO leverer op til 145 kg, hvilket overgår de fleste hjemme-setups.",
  },
  {
    q: "Hvad er forskellen på JAAFIT PRO og billige elastikker?",
    a: "Standard elastikker giver typisk 2–25 kg og knækker ofte. JAAFIT PRO bruger multi-lag latex med en industriel stålbar, som giver op til 145 kg og langt højere holdbarhed – plus en app med færdige programmer.",
  },
  {
    q: "Er JAAFIT PRO pengene værd?",
    a: "Fra 999 kr. erstatter JAAFIT PRO udstyr til flere tusind kroner. App, programmer og kostplan (samlet værdi over 1.300 kr.) er inkluderet. Du har desuden 30 dages tilfredshedsgaranti.",
  },
  {
    q: "Hvor meget fylder sættet?",
    a: "Hele sættet vejer under 3 kg og pakkes i den medfølgende taske. Ideelt til rejser, udendørs træning og små lejligheder.",
  },
  {
    q: "Hvilke øvelser kan jeg lave?",
    a: "Squats, dødløft, bænkpres, rows, bicep curls, skulderpres og mange flere. Appen indeholder over 50 guidede øvelser fra begynder til øvet.",
  },
  {
    q: "Hvem har udviklet træningsprogrammerne?",
    a: "Programmerne er produceret af uddannede trænere og fysioterapeuter, og dækker alle niveauer fra nybegynder til erfaren.",
  },
];

const FaqSection = ({
  faqs = defaultFaqs,
  title = "Ofte stillede spørgsmål",
  subtitle = "Alt du skal vide, før du går i gang.",
}: {
  faqs?: Faq[];
  title?: string;
  subtitle?: string;
}) => {
  return (
    <section id="faq" className="py-20 bg-secondary/50">
      <div className="container-narrow">
        <SectionHeading eyebrow="FAQ" title={title} subtitle={subtitle} align="center" />
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="overflow-hidden rounded-xl border border-editorial-border bg-white px-5 data-[state=open]:shadow-[0_12px_40px_-24px_rgba(20,18,75,0.4)]"
            >
              <AccordionTrigger className="py-4 text-left font-body text-base font-semibold text-navy hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-[15px] leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
