import { Search, Users, ShieldCheck, BarChart3 } from "lucide-react";

const criteria = [
  { icon: BarChart3, title: "Produktdata", desc: "Specifikationer, modstand og kvalitet analyseres." },
  { icon: Users, title: "Brugeranmeldelser", desc: "Vi læser hundredvis af reelle kundeerfaringer." },
  { icon: Search, title: "Uafhængige tests", desc: "Eksterne tests og research sammenholdes." },
  { icon: ShieldCheck, title: "Garanti & service", desc: "Returret, garanti og kundeservice vægtes." },
];

const EditorialIntro = () => (
  <section className="py-16">
    <div className="container-page">
      <div className="rounded-3xl border border-editorial-border bg-secondary/40 p-7 sm:p-10">
        <p className="font-body text-[15px] leading-relaxed text-foreground/80">
          Hos FysiskLivsstil tester og sammenligner vi hjemmetræningsudstyr, så du kan
          træffe et trygt valg. Vi gennemgår produktdata, læser brugeranmeldelser og
          sammenholder uafhængige tests — uden at lade kommercielle samarbejder påvirke
          vurderingen.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {criteria.map((c) => (
            <div key={c.title} className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-editorial-border">
                <c.icon className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="font-display text-xl text-navy">{c.title}</h3>
                <p className="font-body text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EditorialIntro;
