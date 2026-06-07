import { Info } from "lucide-react";

const AffiliateDisclosure = () => (
  <div className="bg-secondary/70 border-b border-editorial-border">
    <div className="container-wide flex items-center justify-center gap-2 py-2 text-center">
      <Info className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
      <p className="font-body text-[11px] sm:text-xs text-muted-foreground">
        Annonce · Artiklen indeholder kommercielle links. Vores vurderinger er baseret på
        selvstændig research.
      </p>
    </div>
  </div>
);

export default AffiliateDisclosure;
