import { ArrowRight } from "lucide-react";

type Variant = "gradient" | "green" | "outline";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
}

const variantClass: Record<Variant, string> = {
  gradient: "btn-gradient",
  green: "btn-green",
  outline: "btn-outline-navy",
};

const CtaButton = ({
  href,
  children,
  variant = "gradient",
  className = "",
  withArrow = true,
}: CtaButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer sponsored"
    className={`${variantClass[variant]} ${className}`}
  >
    {children}
    {withArrow && <ArrowRight className="h-4 w-4" />}
  </a>
);

export default CtaButton;
