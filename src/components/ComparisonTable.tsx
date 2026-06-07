import { Check, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import RankedProductCard, { RankedProduct } from "./RankedProductCard";
import jaafitImage from "@/assets/jaafit-pro-set.png";
import { LINKS } from "@/lib/links";

const products: RankedProduct[] = [
  {
    rank: 1,
    name: "JAAFIT PRO",
    tagline: "Komplet hjemmetræningssystem med app",
    rating: 4.9,
    score: 9.8,
    price: "Fra 999 kr.",
    badge: "Redaktionens valg",
    winner: true,
    image: jaafitImage,
    link: LINKS.jaafitPro,
    ctaLabel: "Se JAAFIT PRO",
    highlights: [
      { label: "Modstand", value: "5–145 kg" },
      { label: "App", value: "50+ øvelser" },
      { label: "Garanti", value: "30 dage" },
    ],
    pros: [
      "Op til 145 kg modstand – ægte styrketræning",
      "App med videoprogrammer og kostplan",
      "Vejer under 3 kg – træn hvor som helst",
      "Dansk brand med 4,8 på Trustpilot",
    ],
    cons: ["Kræver kort tilvænning til elastik-modstand"],
  },
  {
    rank: 2,
    name: "Justerbare håndvægte",
    tagline: "Klassisk løsning til isolationsøvelser",
    rating: 3.6,
    price: "2.500–5.000 kr.",
    link: LINKS.jaafitPro,
    ctaLabel: "Se bedre valg",
    highlights: [
      { label: "Modstand", value: "2–32 kg" },
      { label: "App", value: "Nej" },
      { label: "Garanti", value: "2 år" },
    ],
    pros: ["God til isolationsøvelser", "Holdbar konstruktion"],
    cons: ["Begrænset øvelsesudvalg", "Tung at transportere", "Ingen vejledning"],
  },
  {
    rank: 3,
    name: "Hjemme-multimaskine",
    tagline: "Stort stativ til faste øvelser",
    rating: 3.2,
    price: "4.000–12.000 kr.",
    link: LINKS.jaafitPro,
    ctaLabel: "Se bedre valg",
    highlights: [
      { label: "Modstand", value: "op til 80 kg" },
      { label: "App", value: "Nej" },
      { label: "Garanti", value: "1 år" },
    ],
    pros: ["Stabil ramme"],
    cons: ["Fylder enormt", "Meget dyr", "Kan ikke flyttes"],
  },
  {
    rank: 4,
    name: "Standard elastikbånd",
    tagline: "Billige løse bånd uden system",
    rating: 2.4,
    price: "100–300 kr.",
    link: LINKS.jaafitPro,
    ctaLabel: "Se bedre valg",
    highlights: [
      { label: "Modstand", value: "2–25 kg" },
      { label: "App", value: "Nej" },
      { label: "Garanti", value: "Sjældent" },
    ],
    pros: ["Billig indgang"],
    cons: ["Meget lav modstand", "Knækker ofte", "Ingen vejledning"],
  },
];

const specRows = [
  { label: "Max modstand", values: ["5–145 kg", "2–32 kg", "op til 80 kg", "2–25 kg"] },
  { label: "Træningsapp", values: ["check", "x", "x", "x"] },
  { label: "Transportabel", values: ["check", "x", "x", "check"] },
  { label: "Hele kroppen", values: ["check", "x", "check", "x"] },
  { label: "Pris", values: ["Fra 999 kr.", "2.500+ kr.", "4.000+ kr.", "100+ kr."] },
];
const specCols = ["JAAFIT PRO", "Håndvægte", "Multimaskine", "Elastikbånd"];

const Cell = ({ v }: { v: string }) => {
  if (v === "check") return <Check className="mx-auto h-4 w-4 text-winner" />;
  if (v === "x") return <X className="mx-auto h-4 w-4 text-destructive" />;
  return <span>{v}</span>;
};

const ComparisonTable = () => {
  return (
    <section id="sammenligning" className="py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Bedst i test 2026"
          title={<>Sådan klarede de sig i testen</>}
          subtitle="Vi vurderede modstand, kvalitet, pris-ydelse, app-support og brugertilfredshed på markedets mest populære hjemmetræningsløsninger."
        />

        <div className="mt-12 space-y-6">
          {products.map((p) => (
            <RankedProductCard key={p.rank} product={p} />
          ))}
        </div>

        {/* Spec comparison table */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-editorial-border">
          <div className="bg-navy px-6 py-4">
            <h3 className="font-display text-2xl text-white">JAAFIT PRO vs. alternativerne</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-body text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="px-4 py-3 text-left font-semibold text-navy"> </th>
                  {specCols.map((c, i) => (
                    <th
                      key={c}
                      className={`px-4 py-3 text-center font-bold ${
                        i === 0 ? "text-brand-blue" : "text-navy/70"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specRows.map((row, ri) => (
                  <tr key={row.label} className={ri % 2 ? "bg-secondary/40" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-navy">{row.label}</td>
                    {row.values.map((v, ci) => (
                      <td
                        key={ci}
                        className={`px-4 py-3 text-center ${
                          ci === 0 ? "bg-brand-blue/5 font-semibold text-navy" : "text-muted-foreground"
                        }`}
                      >
                        <Cell v={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
