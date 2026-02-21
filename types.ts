
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  fabric: string;
  description: string;
  images: string[];
  available_sizes: string[];
  rating: number;
  review_count: number;
  tag?: string;
}

  export interface NavItem {
    label: string;
    href: string;
  }
