"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/data/site";
import { categories } from "@/data/categories";
import { useApp } from "./AppProvider";
import { Logo, SocialLinks } from "./Icons";

const headingClass = "font-display text-lg font-semibold text-white";
const linkClass = "text-sm text-white/75 transition hover:text-[#E9AD43]";

export default function Footer() {
  const { chooseCategory } = useApp();
  return (
    <footer id="contact" className="border-t-2 border-[#E9AD43] bg-[#071C35] text-white">
      <div className="container-x grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-display text-xl font-semibold">{site.name}</span>
          </div>
          <p className="mt-2 text-[11px] text-white/60">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">{site.description}</p>
          <div className="mt-4">
            <SocialLinks boxClass="h-9 w-9 border border-white/25" />
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className={headingClass}>Quick Links</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className={linkClass}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our collections">
          <h2 className={headingClass}>Our Collections</h2>
          <ul className="mt-4 space-y-2.5">
            {categories.map((c) => (
              <li key={c.slug}>
                <button type="button" onClick={() => chooseCategory(c.slug)} className={`${linkClass} text-left`}>
                  {c.name}
                </button>
              </li>
            ))}
            <li>
              <a href="#collections" className={linkClass}>Ceramics</a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Get in Touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E9AD43]" aria-hidden="true" />
              {site.address}
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#E9AD43]" aria-hidden="true" />
              Phone: {site.phoneDisplay}
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#E9AD43]" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-[#E9AD43]">{site.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#E9AD43]" aria-hidden="true" />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.year} {site.name}. All Rights Reserved.</p>
          <p className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-[#E9AD43]">Privacy Policy</a>
            <span className="h-3 w-px bg-white/25" aria-hidden="true" />
            <a href="/terms" className="hover:text-[#E9AD43]">Terms &amp; Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}