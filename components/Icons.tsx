import { site } from "@/data/site";

type IconProps = { className?: string };

export function Facebook({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 8h2.5V4.5H14C11.8 4.5 10.5 6 10.5 8.2V10H8v3.5h2.5V20H14v-6.5h2.4l.6-3.5H14V8.6c0-.4.2-.6 1-.6z" />
    </svg>
  );
}

export function Instagram({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Youtube({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Logo({ className = "h-11 w-11 text-xl" }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={`font-display inline-flex shrink-0 items-center justify-center rounded-full border-2 border-[#E9AD43] bg-[#071C35] font-semibold text-[#E9AD43] ${className}`}
    >
      S
    </span>
  );
}

export function SocialLinks({ boxClass = "h-8 w-8" }: { boxClass?: string }) {
  const items = [
    { label: "Facebook", href: site.social.facebook, Icon: Facebook },
    { label: "Instagram", href: site.social.instagram, Icon: Instagram },
    { label: "YouTube", href: site.social.youtube, Icon: Youtube },
  ];
  return (
    <ul className="flex items-center gap-2">
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`inline-flex items-center justify-center rounded-full text-white transition hover:text-[#E9AD43] ${boxClass}`}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}