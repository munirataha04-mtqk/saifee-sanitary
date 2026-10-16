"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type AppContextValue = {
  quoteOpen: boolean;
  quoteProduct: string;
  openQuote: (product?: string) => void;
  closeQuote: () => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  categoryFilter: string | null;
  chooseCategory: (slug: string | null) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}

export default function AppProvider({ children }: { children: ReactNode }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const openQuote = useCallback((product = "") => {
    setQuoteProduct(product);
    setQuoteOpen(true);
  }, []);
  const closeQuote = useCallback(() => setQuoteOpen(false), []);

  const chooseCategory = useCallback((slug: string | null) => {
    setCategoryFilter(slug);
    setTimeout(() => {
      document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, []);

  const value = useMemo(
    () => ({ quoteOpen, quoteProduct, openQuote, closeQuote, searchOpen, setSearchOpen, categoryFilter, chooseCategory }),
    [quoteOpen, quoteProduct, openQuote, closeQuote, searchOpen, categoryFilter, chooseCategory]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}