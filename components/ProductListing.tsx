import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import ProductCard from "./ProductCard";
import { Product } from "../types";

interface ProductListingProps {
  onQuickView: (product: Product) => void;
}

const ProductListing: React.FC<ProductListingProps> = ({
  onQuickView,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("Relevance");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    // 🔥 MAP DATABASE FIELDS TO FRONTEND FORMAT
    const formattedProducts: Product[] = data.map((p: any) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      category: p.category,
      fabric: p.fabric,
      description: p.description,
      images: p.images || [],
      availableSizes: p.available_sizes || [],
      rating: p.rating,
      reviewCount: p.review_count,
      tag: p.tag,
    }));

    setProducts(formattedProducts);
    setLoading(false);
  };

  const toggleValue = (
    value: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  let filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const sizeMatch =
      selectedSizes.length === 0 ||
      selectedSizes.some((size) =>
        product.availableSizes?.includes(size)
      );

    const fabricMatch =
      selectedFabrics.length === 0 ||
      selectedFabrics.includes(product.fabric);

    return categoryMatch && sizeMatch && fabricMatch;
  });

  if (sortOption === "Price Low to High") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortOption === "Price High to Low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  if (loading) {
    return (
      <div className="text-center py-40 text-primary">
        Loading products...
      </div>
    );
  }

  return (
    <section className="w-full bg-[#F6F3EE] pt-44 pb-32 px-6 lg:px-20">
      <div className="max-w-[1600px] mx-auto">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-16 text-[11px] uppercase tracking-[0.3em] text-primary/60">
          <div>Home / Collection</div>

          <div className="flex items-center gap-4">
            <span>Sort By:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-transparent border-b border-primary/30 focus:outline-none"
            >
              <option>Relevance</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-20 text-center text-primary/60">
            No products match your filters.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductListing;
