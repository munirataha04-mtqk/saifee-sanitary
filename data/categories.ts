import { images } from "./site";

export type Category = {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
};

export const categories: Category[] = [
  { slug: "faucets", name: "Faucets & Mixers", subtitle: "Stylish & Durable", image: images.categoryFaucets },
  { slug: "showers", name: "Shower Sets", subtitle: "Luxury & Comfort", image: images.categoryShowers },
  { slug: "toilets", name: "Toilets", subtitle: "Modern & Efficient", image: images.categoryToilets },
  { slug: "basins", name: "Basins & Vanities", subtitle: "Elegant Designs", image: images.categoryBasins },
  { slug: "accessories", name: "Accessories", subtitle: "Small Details, Big Impact", image: images.categoryAccessories },
  { slug: "plumbing", name: "Plumbing Fittings", subtitle: "Strong & Reliable", image: images.categoryPlumbing },
];