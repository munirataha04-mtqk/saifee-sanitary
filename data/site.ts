export const site = {
  name: "Saifee Sanitary",
  tagline: "Sanitary Ware | Bathroom Fittings | Plumbing Solutions",
  description:
    "Premium sanitary ware and bathroom fittings for modern homes and commercial projects in Karachi.",
  // PLACEHOLDER: digits only, with country code, no "+" or spaces. Example: 923001234567
  whatsappNumber: "92XXXXXXXXXX",
  phoneDisplay: "+92 XXX XXXXXXX", // PLACEHOLDER
  email: "info@saifeesanitary.pk", // PLACEHOLDER
  hours: "Mon – Sat, 9:00 AM – 7:00 PM",
  address: "Karachi, Pakistan",
  year: 2026,
  social: {
    // PLACEHOLDERS: replace with your real page links
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Collections", href: "#collections" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const hasRealWhatsApp = () => /^\d{10,15}$/.test(site.whatsappNumber);

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Change an image by changing its filename here (files live in public/images/)
export const images = {
  hero: "/images/hero-bathroom.jpg",
  promo: "/images/promo-bathroom.jpg",
  collection: "/images/bathroom-collection.jpg",
  whatsapp: "/images/whatsapp-banner.jpg",
  categoryFaucets: "/images/category-faucets.jpg",
  categoryShowers: "/images/category-showers.jpg",
  categoryToilets: "/images/category-toilets.jpg",
  categoryBasins: "/images/category-basins.jpg",
  categoryAccessories: "/images/category-accessories.jpg",
  categoryPlumbing: "/images/category-plumbing.jpg",
  productFaucet: "/images/product-faucet.jpg",
  productShower: "/images/product-shower.jpg",
  productToilet: "/images/product-toilet.jpg",
  productBasin: "/images/product-basin.jpg",
  productAccessories: "/images/product-accessories.jpg",
  productConnectors: "/images/product-connectors.jpg",
  projectFamily: "/images/project-family-bathroom.jpg",
  projectVilla: "/images/project-luxury-villa.jpg",
  projectResidential: "/images/project-residential.jpg",
};