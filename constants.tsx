import { Product, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Shop All", href: "#shop" },
  { label: "Linen", href: "#shop" },
  { label: "Party Wear", href: "#shop" },
  { label: "Traditional", href: "#shop" },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Ivory Linen Party Shirt",
    price: 2499,
    category: "Linen",
    fabric: "100% Linen",
    images: [
      "/p1/1.jpeg",
      "/p1/2.jpeg",
      "/p1/3.jpeg",
      "/p1/4.jpeg",
      "/p1/5.jpeg",
    ],
    tag: "BESTSELLER",
    description:
      "Premium breathable linen shirt crafted for evening gatherings and refined occasions. Tailored for comfort and elegance.",
    availableSizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviewCount: 124,
  },

  {
    id: "p2",
    name: "Olive Heritage Linen Shirt",
    price: 2699,
    category: "Traditional",
    fabric: "100% Linen",
    images: [
      "/p2/1.jpeg",
      "/p2/2.jpeg",
      "/p2/3.jpeg",
      "/p2/4.jpeg",
    ],
    description:
      "Earth-toned linen shirt inspired by traditional aesthetics with a modern slim fit silhouette.",
    availableSizes: ["S", "M", "L", "XL"],
    rating: 4.4,
    reviewCount: 89,
  },

  {
    id: "p3",
    name: "Sandstone Classic Shirt",
    price: 2299,
    category: "Linen",
    fabric: "Linen Blend",
    images: [
      "/p3/1.jpeg",
      "/p3/2.jpeg",
      "/p3/3.jpeg",
      "/p3/4.jpeg",
      "/p3/5.jpeg",
    ],
    description:
      "Lightweight linen blend shirt designed for comfort, breathability and versatile styling.",
    availableSizes: ["S", "M", "L", "XL"],
    rating: 4.2,
    reviewCount: 64,
  },
];
