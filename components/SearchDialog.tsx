"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { useApp } from "./AppProvider";

export default function SearchDialog() {
  const { searchOpen, setSearchOpen } = useApp();
  if (!searchOpen) return null;
  return <SearchBox onClose={() => setSearchOpen(false)} />;
}

function SearchBox({ onClose }: { onClose: () => void }) {
  const { chooseCategory, openQuote } = useApp();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  const q = query.trim().toLowerCase();
  const catResults = q ? categories.filter((c) => `${c.name} ${c.subtitle}`.toLowerCase().includes(q)) : [];
  const prodResults = q ? products.filter((p) => p.name.toLowerCase().includes(q)) : [];
  const none = q && catResults.length === 0 && prodResults.length === 0;

  const rowClass =
    "w-full rounded-lg px-3 py-2.5 text-left text-sm text-[#071C35] hover:bg-[#F8F6F1]";

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-[#06172B]/70 p-4 pt-16 sm:pt-24">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="w-full max-w-lg rounded-2xl bg-white p-4 shadow-xl"
      >
        <div className="flex items-center gap-2 rounded-lg border border-[#D9D3C4] px-3">
          <Search className="h-4 w-4 shrink-0 text-[#6F7A88]" aria-hidden="true" />
          <label htmlFor="site-search" className="sr-only">Search products and categories</label>
          <input
            id="site-search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search faucets, showers, toilets…"
            className="w-full bg-transparent py-3 text-sm outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#F8F6F1]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-3 max-h-[50vh] overflow-y-auto" aria-live="polite">
          {none && <p className="p-3 text-sm text-[#6F7A88]">No results for “{query}”. Try another word.</p>}

          {catResults.length > 0 && (
            <>
              <p className="px-3 pt-2 text-[11px] font-semibold uppercase tracking-wider text-[#B07A14]">Categories</p>
              <ul>
                {catResults.map((c) => (
                  <li key={c.slug}>
                    <button
                      type="button"
                      className={rowClass}
                      onClick={() => {
                        onClose();
                        chooseCategory(c.slug);
                      }}
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}

          {prodResults.length > 0 && (
            <>
              <p className="px-3 pt-2 text-[11px] font-semibold uppercase tracking-wider text-[#B07A14]">Products</p>
              <ul>
                {prodResults.map((p) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      className={rowClass}
                      onClick={() => {
                        onClose();
                        openQuote(p.name);
                      }}
                    >
                      {p.name} <span className="text-xs text-[#6F7A88]">— Enquire</span>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}