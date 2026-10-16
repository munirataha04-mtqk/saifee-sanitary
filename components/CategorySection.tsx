
"use client";

import { categories } from "@/data/categories";
import { useApp } from "./AppProvider";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";

export default function CategorySection() {
  const { chooseCategory } = useApp();

  return (
    <section id="collections" className="bg-[#F8F6F1] py-14 sm:py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Explore Our Categories"
          linkLabel="View All Categories"
          href="#shop"
          onLinkClick={() => chooseCategory(null)}
        />

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {categories.map((c) => (
            <li key={c.slug} className="group">
              <button
                type="button"
                onClick={() => chooseCategory(c.slug)}
                aria-label={`Explore ${c.name} category`}
                className="group/card relative block aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#071C35] text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#071C35]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9AD43] focus-visible:ring-offset-2 active:translate-y-0"
              >
                {/* Category image */}
                <SmartImage
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                />

                {/* Dark overlay */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071C35]/95 via-[#071C35]/45 to-transparent transition-colors duration-500 group-hover/card:from-[#071C35]/90 group-hover/card:via-[#071C35]/35" />

                {/* Gold accent border */}
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent transition-all duration-300 group-hover/card:ring-[#E9AD43]/80" />

                {/* Category text */}
                <span className="absolute inset-x-0 bottom-0 p-3 text-center sm:p-4">
                  <span className="block text-sm font-semibold text-white transition-transform duration-300 group-hover/card:-translate-y-1">
                    {c.name}
                  </span>

                  <span className="mt-1 block text-[11px] leading-tight text-white/75 transition-colors duration-300 group-hover/card:text-[#E9AD43] sm:text-xs">
                    {c.subtitle}
                  </span>

                  {/* Animated gold underline */}
                  <span className="mx-auto mt-2 block h-0.5 w-0 rounded-full bg-[#E9AD43] transition-all duration-300 group-hover/card:w-10" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
