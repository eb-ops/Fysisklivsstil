import { Star } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

const defaultStats: Stat[] = [
  { value: "25.000+", label: "træner hjemme" },
  { value: "4,8 / 5", label: "på Trustpilot" },
  { value: "145 kg", label: "max modstand" },
  { value: "30 dage", label: "tilfredshedsgaranti" },
];

const TrustBar = ({ stats = defaultStats }: { stats?: Stat[] }) => (
  <div className="border-y border-white/10 bg-white/[0.03]">
    <div className="container-wide grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
      {stats.map((s, i) => (
        <div key={i} className="flex flex-col items-center py-6 px-3 text-center">
          <div className="flex items-center gap-1.5 font-display text-3xl md:text-4xl leading-none text-white">
            {s.value}
            {s.label.includes("Trustpilot") && (
              <Star className="h-5 w-5 fill-rating-star text-rating-star" />
            )}
          </div>
          <div className="mt-1.5 font-body text-[11px] font-semibold uppercase tracking-wider text-white/55">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TrustBar;
