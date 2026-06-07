import { Star, ArrowRight, Check, Zap, RotateCcw, Activity, Briefcase, Dumbbell, MonitorSmartphone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import SectionHeading from "@/components/SectionHeading";
import RankedProductCard, { RankedProduct } from "@/components/RankedProductCard";
import TrustBar from "@/components/TrustBar";
import FaqSection, { Faq } from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import AuthorBox from "@/components/AuthorBox";
import JudgeMeCarousel from "@/components/JudgeMeCarousel";
import StickyCtaBar from "@/components/StickyCtaBar";
import { LINKS } from "@/lib/links";

const massageStats = [
  { value: "2-i-1", label: "rotation + pulsering" },
  { value: "5", label: "hastigheder (Pro)" },
  { value: "<1 kg", label: "vægt (Mini)" },
  { value: "30 dage", label: "tilfredshedsgaranti" },
];

const products: RankedProduct[] = [
  {
    rank: 1,
    name: "MassageRoller Bundle",
    tagline: "Begge rollers – mest fleksible løsning",
    rating: 4.9,
    score: 9.7,
    price: "Se pris",
    badge: "Bedste valg",
    winner: true,
    link: LINKS.massageBundle,
    ctaLabel: "Se Bundle",
    highlights: [
      { label: "Indhold", value: "Pro + Mini" },
      { label: "Brug", value: "Hjemme + på farten" },
      { label: "Garanti", value: "30 dage" },
    ],
    pros: [
      "Pro til intensiv restitution derhjemme",
      "Mini til kontoret, tasken og rejsen",
      "Dækker både hård træning og hverdagsspændinger",
      "Bedste pris pr. roller",
    ],
    cons: ["Større investering end en enkelt model"],
  },
  {
    rank: 2,
    name: "MassageRoller Pro",
    tagline: "Til intensiv restitution efter hård træning",
    rating: 4.8,
    price: "Se pris",
    link: LINKS.massagePro,
    ctaLabel: "Se Pro",
    highlights: [
      { label: "Hastigheder", value: "5" },
      { label: "Brug", value: "Intensiv" },
      { label: "Garanti", value: "30 dage" },
    ],
    pros: ["Fem hastigheder og kraftig motor", "Mere kontrol over intensiteten", "Ideel efter styrketræning"],
    cons: ["Lidt tungere at have med i tasken"],
  },
  {
    rank: 3,
    name: "MassageRoller Mini",
    tagline: "Kompakt og let – tag den med overalt",
    rating: 4.7,
    price: "Se pris",
    link: LINKS.massageMini,
    ctaLabel: "Se Mini",
    highlights: [
      { label: "Hastigheder", value: "3" },
      { label: "Vægt", value: "< 1 kg" },
      { label: "Garanti", value: "30 dage" },
    ],
    pros: ["Vejer under et kilo", "Perfekt til kontor og rejse", "Nem at bruge i få minutter"],
    cons: ["Mindre kraft end Pro til hård restitution"],
  },
];

const useCases = [
  { icon: Dumbbell, title: "Efter styrketræning", text: "Øget blodgennemstrømning understøtter kroppens restitution og dæmper ømhed i dagene efter." },
  { icon: MonitorSmartphone, title: "Skærmarbejde", text: "Skulder og nakke efter en lang dag foran computeren – brug den præcis der, hvor det sidder." },
  { icon: Briefcase, title: "Stillesiddende hverdag", text: "Stive hofter og træthed i benene efter for meget siddetid løsnes op på få minutter." },
  { icon: Activity, title: "Løb & sport", text: "Forbered musklerne før og hjælp dem med at restituere efter løb og anden aktivitet." },
];

const faqs: Faq[] = [
  {
    q: "Hvad bruger man en massageroller til?",
    a: "To ting: restitution efter styrketræning, hvor øget blodgennemstrømning dæmper ømhed, og hverdagsspændinger i nakke, skuldre, hofter og ben efter stillesiddende arbejde eller ensidige bevægelser.",
  },
  {
    q: "Hvordan virker en elektrisk massageroller?",
    a: "I modsætning til en klassisk foam roller, hvor effekten afhænger af din kropsvægt, arbejder en elektrisk massageroller aktivt med musklen gennem roterende og pulserende bevægelser. Du kan målrette spændte områder og justere intensiteten – uden at lægge hele kropsvægten ned over rullen.",
  },
  {
    q: "Skal jeg vælge Mini eller Pro?",
    a: "Mini er den letteste (under 1 kg, 3 hastigheder) og ideel til kontoret, tasken og rejsen. Pro har 5 hastigheder og mere kraft til intensiv restitution efter hård træning. Vil du have begge dele, er Bundle den mest fleksible – og billigste pr. roller.",
  },
  {
    q: "Passer den sammen med min træning?",
    a: "Ja. JAAFIT's massagerollers er tænkt som en naturlig forlængelse af din træning. Træner du med JAAFIT PRO og arbejder med progressiv belastning, er restitution en del af resultatet – og det er her en massageroller gør en konkret forskel i hverdagen.",
  },
  {
    q: "Hvornår giver en massageroller mest mening?",
    a: "Når kroppen belastes gentagne gange over tid – gennem træning, løb eller en hverdag med mange timer i samme position. Det afgørende er ikke hvor hårdt du træner, men hvor ofte kroppen ender i de samme belastninger uden aflastning.",
  },
];

const MassageRoller = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <AffiliateDisclosure />
      <main className="flex-1">
        {/* Hero */}
        <section className="section-navy grid-texture">
          <div className="container-wide relative z-10 py-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/15 px-3.5 py-1.5 font-body text-xs font-bold uppercase tracking-wider text-brand-green ring-1 ring-brand-green/30 animate-rise">
                <Zap className="h-3.5 w-3.5" /> Restitution · 2026
              </span>
              <h1 className="mt-6 text-[2.5rem] leading-[0.97] [hyphens:auto] [overflow-wrap:anywhere] text-white animate-rise delay-100 sm:text-6xl md:text-7xl">
                Løsn spændinger der, hvor <span className="text-gradient">de sidder</span>
              </h1>
              <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/75 animate-rise delay-200">
                Muskelspændinger rammer ikke kun dem, der træner hårdt. De opstår hos alle, der
                sidder foran en skærm, sover lidt forkert eller belaster kroppen ujævnt. En
                elektrisk massageroller er et af de mest direkte svar.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center animate-rise delay-300">
                <a href={LINKS.massageCollection} target="_blank" rel="noopener noreferrer sponsored" className="btn-green">
                  Se MassageRollers <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#sammenlign" className="inline-flex items-center gap-2 px-3 py-3 font-body text-sm font-semibold text-white/80 transition-colors hover:text-brand-green">
                  Sammenlign modellerne <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3 animate-rise delay-400">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-rating-star text-rating-star" />
                  ))}
                </div>
                <p className="font-body text-sm text-white/70">
                  Rotation + pulsering · dybere end en passiv foam roller
                </p>
              </div>
            </div>
          </div>
          <TrustBar stats={massageStats} />
        </section>

        {/* Editorial intro */}
        <section className="py-16">
          <div className="container-page">
            <div className="rounded-3xl border border-editorial-border bg-secondary/40 p-7 sm:p-10">
              <p className="font-body text-[15px] leading-relaxed text-foreground/80">
                Begge JAAFIT massagerollers kombinerer <strong>roterende massage med
                pulserende bevægelse</strong>, hvilket giver en dybere og mere målrettet effekt
                end en traditionel passiv massagerulle. Du styrer selv intensiteten via
                hastighedsindstillingerne og finder det niveau, der passer til området og dagen.
                Nedenfor sammenligner vi de tre løsninger, så du nemt kan vælge den rigtige.
              </p>
            </div>
          </div>
        </section>

        {/* Ranked comparison */}
        <section id="sammenlign" className="pb-8">
          <div className="container-page">
            <SectionHeading
              eyebrow="Sammenligning"
              title="Mini, Pro eller Bundle?"
              subtitle="De tre JAAFIT-løsninger holdt op mod hinanden, så du kan vælge ud fra dit behov."
            />
            <div className="mt-12 space-y-6">
              {products.map((p) => (
                <RankedProductCard key={p.rank} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-navy grid-texture mt-12">
          <div className="container-page relative z-10 py-20">
            <span className="eyebrow text-brand-green">Sådan virker den</span>
            <h2 className="mt-3 max-w-3xl text-4xl text-white sm:text-5xl">
              Aktiv massage – ikke bare <span className="text-gradient">vægt og tryk</span>
            </h2>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-white/70">
              Hvor en klassisk foam roller kræver, at du lægger kropsvægten ned over rullen,
              arbejder en elektrisk massageroller aktivt med musklen. Det betyder mere præcis
              massage og intensitet, du selv justerer.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: RotateCcw, title: "Roterende massage", text: "Bearbejder musklen i en jævn, rullende bevægelse." },
                { icon: Zap, title: "Pulserende effekt", text: "Tilføjer dybde og målrettet stimulering af spændte områder." },
                { icon: Activity, title: "Justerbar intensitet", text: "Find det niveau, der passer til området og dagen." },
              ].map((c) => (
                <div key={c.title} className="glass p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple">
                    <c.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-white">{c.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-white/65">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="Hvornår bruger man den"
              title="Lavet til hverdagen – ikke kun til gymmet"
              subtitle="En massageroller giver mest mening, når kroppen belastes gentagne gange over tid."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {useCases.map((u) => (
                <div key={u.title} className="premium-card flex gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <u.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-navy">{u.title}</h3>
                    <p className="mt-1 font-body text-sm leading-relaxed text-muted-foreground">{u.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pairs with JAAFIT PRO */}
        <section className="pb-8">
          <div className="container-page">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue/8 to-brand-purple/8 p-7 ring-1 ring-brand-blue/15 sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-3xl text-navy sm:text-4xl">En naturlig forlængelse af din træning</h2>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-muted-foreground">
                    Træner du med JAAFIT PRO og arbejder med progressiv belastning uge efter uge,
                    er restitution en del af resultatet. En massageroller gør det lettere at komme
                    tilbage til næste træning uden at føle dig tung eller stiv.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {["Hurtigere tilbage til næste træning", "Mindre ømhed i dagene efter", "Få minutters brug – nem at tage frem"].map((b) => (
                      <li key={b} className="flex items-center gap-2 font-body text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-winner" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={LINKS.jaafitPro} target="_blank" rel="noopener noreferrer sponsored" className="btn-outline-navy shrink-0">
                  Se JAAFIT PRO <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <JudgeMeCarousel />

        <FaqSection
          faqs={faqs}
          title="Ofte stillede spørgsmål"
          subtitle="Det du bør vide om elektriske massagerollers."
        />

        <FinalCta
          eyebrow="Restitution"
          title={<>Den bedste restitution er den, <span className="text-gradient">du faktisk bruger</span></>}
          text="Det bedste restitutionsudstyr er sjældent det mest avancerede – det er det, der er nemt at tage frem og bruge i få minutter. Find den MassageRoller, der passer til din hverdag."
          href={LINKS.massageCollection}
          cta="Se MassageRollers"
        />

        <section className="py-16">
          <div className="container-page">
            <AuthorBox />
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyCtaBar
        href={LINKS.massageCollection}
        label="JAAFIT MassageRoller"
        cta="Se pris"
      />
    </div>
  );
};

export default MassageRoller;
