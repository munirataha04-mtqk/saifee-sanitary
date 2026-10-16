
"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  Megaphone,
  Menu,
  MessageSquare,
  Search,
  X,
} from "lucide-react";
import { nav, site } from "@/data/site";
import { categories } from "@/data/categories";
import { useApp } from "./AppProvider";
import { Logo, SocialLinks } from "./Icons";

export default function Header() {
  const { openQuote, setSearchOpen, chooseCategory } = useApp();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setDropOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const linkClass = (id: string) =>
    `relative py-2 text-sm font-medium transition-colors duration-300 hover:text-[#B07A14] ${
      active === id
        ? "text-[#B07A14] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-[#E9AD43]"
        : "text-[#071C35]"
    }`;

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setDropOpen(false);
  };

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#06172B] text-white">
        <div className="container-x flex items-center justify-between gap-3 py-2 text-[11px] sm:text-xs">
          <div className="flex min-w-0 items-center gap-3">
            <Megaphone
              className="h-3.5 w-3.5 shrink-0 text-[#E9AD43] transition-transform duration-300 hover:rotate-12"
              aria-hidden="true"
            />

            <span className="truncate">
              Premium Sanitary Ware &amp; Bathroom Fittings
            </span>

            <span
              className="hidden h-3 w-px bg-white/30 md:block"
              aria-hidden="true"
            />

            <span className="hidden md:inline">
              100% Original Products
            </span>

            <span
              className="hidden h-3 w-px bg-white/30 lg:block"
              aria-hidden="true"
            />

            <span className="hidden lg:inline">
              Delivery Across Karachi
            </span>
          </div>

          <SocialLinks boxClass="h-6 w-6" />
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-40 border-b border-[#EDE8DC] bg-white/95 shadow-sm backdrop-blur">
        <div className="container-x flex items-center justify-between gap-3 py-3">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="group flex min-w-0 items-center gap-2.5"
            aria-label={`${site.name} home`}
          >
            <span className="transition-transform duration-300 group-hover:scale-105">
              <Logo />
            </span>

            <span className="min-w-0">
              <span className="font-display block truncate text-lg font-semibold leading-tight text-[#071C35] transition-colors duration-300 group-hover:text-[#B07A14] sm:text-xl">
                {site.name}
              </span>

              <span className="hidden text-[10px] leading-tight text-[#6F7A88] md:block">
                {site.tagline}
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Main"
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            <a href="#home" className={linkClass("home")}>
              Home
            </a>

            <a href="#shop" className={linkClass("shop")}>
              Shop
            </a>

            {/* Collections dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null
                  )
                ) {
                  setDropOpen(false);
                }
              }}
            >
              <button
                type="button"
                aria-expanded={dropOpen}
                aria-haspopup="true"
                onClick={() => setDropOpen((open) => !open)}
                className={`inline-flex items-center gap-1 ${linkClass(
                  "collections"
                )}`}
              >
                Collections

                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${
                    dropOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                className={`absolute left-0 top-full z-50 pt-2 transition-all duration-200 ${
                  dropOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-1 opacity-0"
                }`}
                aria-hidden={!dropOpen}
              >
                <ul className="w-60 rounded-xl border border-[#EDE8DC] bg-white p-2 shadow-lg shadow-[#071C35]/10">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <button
                        type="button"
                        tabIndex={dropOpen ? 0 : -1}
                        onClick={() => {
                          setDropOpen(false);
                          chooseCategory(category.slug);
                        }}
                        className="w-full rounded-lg px-3 py-2 text-left text-sm text-[#071C35] transition-all duration-200 hover:translate-x-1 hover:bg-[#F8F6F1] hover:text-[#B07A14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9AD43]"
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a href="#about" className={linkClass("about")}>
              About Us
            </a>

            <a href="#projects" className={linkClass("projects")}>
              Projects
            </a>

            <a href="#contact" className={linkClass("contact")}>
              Contact
            </a>
          </nav>

          {/* Search, quote and mobile menu */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <button
              type="button"
              aria-label="Search products and categories"
              onClick={() => setSearchOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#071C35] transition-all duration-300 hover:scale-105 hover:bg-[#F8F6F1] hover:text-[#B07A14] active:scale-95"
            >
              <Search
                className="h-5 w-5 transition-transform duration-300 hover:rotate-12"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={() => openQuote()}
              className="hidden items-center gap-2 rounded-full bg-[#071C35] px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-[#E9AD43] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d2b4d] hover:shadow-md hover:shadow-[#071C35]/20 active:translate-y-0 sm:inline-flex"
            >
              <MessageSquare
                className="h-4 w-4 text-[#E9AD43] transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              Get a Quote
            </button>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#071C35] transition-all duration-300 hover:scale-105 hover:bg-[#F8F6F1] hover:text-[#B07A14] active:scale-95 lg:hidden"
            >
              {menuOpen ? (
                <X
                  className="h-6 w-6 transition-transform duration-300"
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  className="h-6 w-6 transition-transform duration-300"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-menu"
          aria-hidden={!menuOpen}
          className={`grid overflow-hidden border-t border-[#EDE8DC] bg-white transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav aria-label="Mobile" className="min-h-0 overflow-hidden">
            <ul className="container-x py-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={closeMobileMenu}
                    className={`block border-b border-[#F1EDE3] py-3 text-base font-medium transition-all duration-200 hover:translate-x-1 hover:pl-2 hover:text-[#B07A14] ${
                      active === item.href.slice(1)
                        ? "text-[#B07A14]"
                        : "text-[#071C35]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              {/* Mobile collections */}
              <li className="border-b border-[#F1EDE3] py-2">
                <button
                  type="button"
                  aria-expanded={dropOpen}
                  onClick={() => setDropOpen((open) => !open)}
                  className="flex w-full items-center justify-between py-2 text-base font-medium text-[#071C35] transition-colors duration-200 hover:text-[#B07A14]"
                >
                  Collections

                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      dropOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
                    dropOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <ul className="min-h-0 overflow-hidden pl-3">
                    {categories.map((category) => (
                      <li key={category.slug}>
                        <button
                          type="button"
                          tabIndex={menuOpen && dropOpen ? 0 : -1}
                          onClick={() => {
                            closeMobileMenu();
                            chooseCategory(category.slug);
                          }}
                          className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-[#6F7A88] transition-colors duration-200 hover:bg-[#F8F6F1] hover:text-[#B07A14]"
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    openQuote();
                  }}
                  className="btn-gold w-full transition-all duration-300 hover:shadow-lg hover:shadow-[#E9AD43]/20 active:scale-[0.99]"
                >
                  <MessageSquare
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  Get a Quote
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
