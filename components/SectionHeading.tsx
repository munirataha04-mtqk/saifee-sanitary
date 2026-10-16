import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  linkLabel?: string;
  href?: string;
  onLinkClick?: () => void;
  dark?: boolean;
  children?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, linkLabel, href = "#", onLinkClick, dark = false }: Props) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
      <div>
        <p className={`eyebrow ${dark ? "eyebrow-light" : ""}`}>{eyebrow}</p>
        <h2
          className={`font-display mt-2 text-[clamp(1.6rem,4vw,2.25rem)] font-semibold leading-tight ${
            dark ? "text-white" : "text-[#071C35]"
          }`}
        >
          {title}
        </h2>
      </div>
      {linkLabel && (
        <a
          href={href}
          onClick={onLinkClick}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#071C35] transition hover:text-[#B07A14]"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4 text-[#E9AD43]" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}