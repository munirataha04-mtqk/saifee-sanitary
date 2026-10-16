import { images } from "./site";

export type Product = {
  id: string;
  name: string;
  categorySlug: string;
  image: string;
  rating: number; // SAMPLE values: replace with real ones
  reviews: number;
};

export const products: Product[] = [
  { id: "basin-mixer-faucet", name: "Basin Mixer Faucet", categorySlug: "faucets", image: images.productFaucet, rating: 4.8, reviews: 120 },
  { id: "rainfall-shower-set", name: "Rainfall Shower Set", categorySlug: "showers", image: images.productShower, rating: 4.7, reviews: 96 },
  { id: "one-piece-toilet", name: "One Piece Toilet", categorySlug: "toilets", image: images.productToilet, rating: 4.8, reviews: 143 },
  { id: "counter-top-basin", name: "Counter Top Basin", categorySlug: "basins", image: images.productBasin, rating: 4.6, reviews: 88 },
  { id: "bathroom-accessories", name: "Bathroom Accessories", categorySlug: "accessories", image: images.productAccessories, rating: 4.7, reviews: 76 },
  { id: "plumbing-connectors", name: "Plumbing Connectors", categorySlug: "plumbing", image: images.productConnectors, rating: 4.5, reviews: 62 },
];