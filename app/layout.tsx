import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import AppProvider from "@/components/AppProvider";
import QuoteModal from "@/components/QuoteModal";
import SearchDialog from "@/components/SearchDialog";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Saifee Sanitary | Premium Sanitary Ware & Bathroom Fittings in Karachi",
  description:
    "Premium sanitary ware, bathroom fittings, faucets, showers, basins and plumbing solutions in Karachi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <AppProvider>
          {children}
          <QuoteModal />
          <SearchDialog />
        </AppProvider>
      </body>
    </html>
  );
}