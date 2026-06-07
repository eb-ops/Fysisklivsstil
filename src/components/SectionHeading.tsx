interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
}: SectionHeadingProps) => {
  const center = align === "center";
  return (
    <div className={center ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}>
      {eyebrow && (
        <span
          className={`eyebrow ${dark ? "text-brand-green" : "text-brand-blue"}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-4xl sm:text-5xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <div className={`divider-gradient mt-5 ${center ? "mx-auto" : ""}`} />
      {subtitle && (
        <p
          className={`mt-5 font-body text-base leading-relaxed ${
            dark ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
