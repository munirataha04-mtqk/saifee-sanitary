
"use client";

import { ArrowRight, ShieldCheck, Tag, Truck, User } from "lucide-react";
import { images } from "@/data/site";
import { useApp } from "./AppProvider";
import SmartImage from "./SmartImage";

const trust = [
  { label: "100% Original Products", Icon: ShieldCheck },
  { label: "Expert Guidance & Support", Icon: User },
  { label: "Fast Delivery in Karachi", Icon: Truck },
  { label: "Competitive Prices", Icon: Tag },
];

export default function Hero() {
  const { openQuote } = useApp();

  return (
    <section
      id="home"
      className="w-full isolate overflow-hidden bg-[#06172B] text-white"
    >
      <div className="absolute inset-0 -z-30">
        <SmartImage
          src="/images/bathroom-hero.png"
          alt="Luxury bathroom with freestanding bathtub, marble walls and gold fixtures"
          className="h-full w-full object-cover object-[68%_center] transition-transform duration-700 ease-out motion-safe:hover:scale-[1.03]"
          priority
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[#071C35]/75 md:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-[#071C35] via-[#071C35]/80 to-transparent md:block" />

      <div className="container-x py-14 sm:py-20 lg:py-24">
        <div className="max-w-xl">
          <p className="eyebrow eyebrow-light">
            Premium Sanitary Solutions
          </p>

          <h1 className="font-display mt-4 text-[clamp(2.1rem,6.5vw,3.75rem)] font-semibold leading-[1.1]">
            Upgrade Your <br className="hidden sm:block" />
            Bathroom with{" "}
            <span className="block text-[#E9AD43]">
              Style &amp; Quality
            </span>
          </h1>

          <p className="mt-5 max-w-md text-[clamp(0.95rem,2.2vw,1.05rem)] leading-relaxed text-white/85">
            Trusted sanitary ware, bathroom fittings, faucets, showers and
            more — now in Karachi.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#collections"
              className="btn-gold group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#E9AD43]/20 active:translate-y-0"
            >
              Explore Collection
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <button
              type="button"
              onClick={() => openQuote()}
              className="btn-outline transition-all duration-300 hover:-translate-y-1 hover:border-[#E9AD43] hover:bg-white/10 hover:shadow-lg active:translate-y-0"
            >
              Get a Quote
            </button>
          </div>
        </div>

        <ul className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {trust.map(({ label, Icon }) => (
            <li
              key={label}
              className="group flex items-center gap-2.5 rounded-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E9AD43] text-[#071C35] transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-[#E9AD43]/30">
                <Icon
                  className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6"
                  aria-hidden="true"
                />
              </span>
              <span className="text-xs leading-snug text-white/90 transition-colors duration-300 group-hover:text-[#E9AD43]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
