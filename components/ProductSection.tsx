
"use client";

import { Star } from "lucide-react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { useApp } from "./AppProvider";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";

export default function ProductSection() {
  const { categoryFilter, chooseCategory, openQuote } = useApp();

  const list = categoryFilter
    ? products.filter((p) => p.categorySlug === categoryFilter)
    : products;

  const activeCategory = categories.find(
    (c) => c.slug === categoryFilter
  );

  return (
    <section id="shop" className="bg-white py-14 sm:py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="Best Sellers"
          title="Popular Products"
          linkLabel="View All Products"
          href="#shop"
          onLinkClick={() => chooseCategory(null)}
        />

        {activeCategory && (
          <p className="mb-5 text-sm text-[#27364A]" role="status">
            Showing: <strong>{activeCategory.name}</strong>{" "}
            <button
              type="button"
              onClick={() => chooseCategory(null)}
              className="ml-2 font-semibold text-[#B07A14] underline underline-offset-2 transition-colors duration-200 hover:text-[#071C35]"
            >
              Show all products
            </button>
          </p>
        )}

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {list.map((p) => (
            <li key={p.id} className="flex">
              <article className="group flex w-full flex-col overflow-hidden rounded-xl border border-[#E7E2D6] bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E9AD43] hover:shadow-lg hover:shadow-[#071C35]/10 sm:p-3">
                <div className="aspect-square overflow-hidden rounded-lg bg-[#F8F6F1]">
                  <SmartImage
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-3 text-sm font-semibold leading-snug text-[#071C35] transition-colors duration-300 group-hover:text-[#B07A14]">
                  {p.name}
                </h3>

                <p
                  className="mt-1 flex items-center gap-1 text-xs text-[#6F7A88]"
                  aria-label={`Rated ${p.rating} out of 5 from ${p.reviews} reviews`}
                >
                  <Star
                    className="h-3.5 w-3.5 fill-[#E9AD43] text-[#E9AD43] transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  {p.rating.toFixed(1)} ({p.reviews})
                </p>

                <p className="mt-3 text-sm font-semibold text-[#071C35]">
                  Request Price
                </p>

                <button
                  type="button"
                  onClick={() => openQuote(p.name)}
                  className="mt-3 w-full rounded-md bg-[#E9AD43] px-3 py-2 text-xs font-semibold text-[#071C35] transition-all duration-300 hover:bg-[#f3c06a] hover:shadow-md hover:shadow-[#E9AD43]/25 active:scale-[0.98]"
                >
                  Enquire Now
                </button>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
