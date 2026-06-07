import { BadgeCheck, CalendarDays } from "lucide-react";

interface AuthorBoxProps {
  updated?: string;
}

const AuthorBox = ({ updated = "Juni 2026" }: AuthorBoxProps) => (
  <div className="premium-card p-6 sm:p-7">
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple font-display text-2xl text-white">
        ML
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <h3 className="font-display text-xl text-navy">Redaktionen, FysiskLivsstil</h3>
          <BadgeCheck className="h-4 w-4 text-brand-blue" />
        </div>
        <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Research & produktanalyse
        </p>
        <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
          Vores team gennemgår produktdata, brugeranmeldelser og uafhængige tests for
          at give dig et retvisende overblik. Vi opdaterer løbende, så anbefalingerne
          følger markedet.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 font-body text-xs font-semibold text-navy/70">
          <CalendarDays className="h-3.5 w-3.5" />
          Sidst opdateret: {updated}
        </div>
      </div>
    </div>
  </div>
);

export default AuthorBox;
