import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import EditorialIntro from "@/components/EditorialIntro";
import ComparisonTable from "@/components/ComparisonTable";
import ReviewSection from "@/components/ReviewSection";
import BuyingFactors from "@/components/BuyingFactors";
import TrustSignals from "@/components/TrustSignals";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import AuthorBox from "@/components/AuthorBox";
import StickyCtaBar from "@/components/StickyCtaBar";

const buyingFactors = [
  {
    title: "Modstand",
    text: "Lav modstand giver hurtigt et loft for fremgang. Vælg et system, der kan skaleres op – ægte styrketræning kræver progressiv overbelastning over tid.",
  },
  {
    title: "Plads & vægt",
    text: "Stort udstyr ender ofte ubrugt i et hjørne. Kompakte løsninger, der kan pakkes væk, bliver brugt langt oftere i en travl hverdag.",
  },
  {
    title: "Vejledning",
    text: "Udstyr alene skaber ikke resultater. En app med færdige programmer og øvelsesvideoer er forskellen på at gætte og at følge en plan.",
  },
  {
    title: "Kvalitet & holdbarhed",
    text: "Billige bånd knækker. Kig efter materialer i industriel kvalitet og en reel garanti, der dækker dig, hvis noget går i stykker.",
  },
  {
    title: "Tryghed ved køb",
    text: "Returret og tilfredshedsgaranti gør det risikofrit at prøve. Tjek altid Trustpilot og reelle brugeranmeldelser før du køber.",
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <AffiliateDisclosure />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <EditorialIntro />
        <ComparisonTable />
        <ReviewSection />
        <BuyingFactors
          subtitle="Inden du investerer i hjemmetræningsudstyr, så hold løsningerne op mod disse fem faktorer."
          factors={buyingFactors}
        />
        <TrustSignals />
        <FaqSection />
        <FinalCta />
        <section className="py-16">
          <div className="container-page">
            <AuthorBox />
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyCtaBar />
    </div>
  );
};

export default Index;
