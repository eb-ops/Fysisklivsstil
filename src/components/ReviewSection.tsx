import { Dumbbell, Smartphone, ClipboardList, Salad, Users, ArrowRight } from "lucide-react";
import { LINKS } from "@/lib/links";

const stack = [
  { icon: Dumbbell, title: "Komplet udstyr", desc: "Stålbar, håndtag og elastikker med 5–145 kg modstand.", value: "1.299 kr." },
  { icon: Smartphone, title: "Træningsapp", desc: "8 videoprogrammer og 50+ guidede øvelser fra trænere.", value: "699 kr." },
  { icon: ClipboardList, title: "Færdige programmer", desc: "Strukturerede forløb fra begynder til øvet.", value: "399 kr." },
  { icon: Salad, title: "Kostplan", desc: "38 opskrifter der matcher dine træningsmål.", value: "249 kr." },
  { icon: Users, title: "Community + coaching", desc: "Stil spørgsmål og få svar fra uddannede trænere.", value: "Uvurderlig" },
];

const ReviewSection = () => {
  return (
    <section className="section-navy grid-texture">
      <div className="container-page relative z-10 py-20">
        <span className="eyebrow text-brand-green">Hvorfor det vinder</span>
        <h2 className="mt-3 max-w-3xl text-4xl text-white sm:text-5xl">
          Ikke bare elastikker — et <span className="text-gradient">komplet system</span>
        </h2>
        <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-white/70">
          JAAFIT PRO erstatter både håndvægte, kabelmaskiner og fitnessabonnement. Du får
          hardware, software og vejledning i én pakke — det er derfor eksperterne kårer det
          som #1.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((s) => (
            <div key={s.title} className="glass p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-display text-2xl text-white">{s.title}</h3>
                <span className="rounded-full bg-white/10 px-2.5 py-1 font-body text-[11px] font-bold text-brand-green">
                  {s.value}
                </span>
              </div>
              <p className="mt-2 font-body text-sm leading-relaxed text-white/65">{s.desc}</p>
            </div>
          ))}

          {/* total value CTA card */}
          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-brand-green-soft to-brand-green p-6 text-navy">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-wider">Samlet værdi</p>
              <p className="font-display text-5xl leading-none">2.600+ kr.</p>
              <p className="mt-2 font-body text-sm font-semibold">
                Din pris i dag: fra 999 kr.
              </p>
            </div>
            <a
              href={LINKS.jaafitPro}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 font-body text-sm font-bold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
            >
              Sikr dit sæt <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
