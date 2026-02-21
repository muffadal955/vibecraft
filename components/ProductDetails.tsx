import { useState, useEffect } from "react";
import { Product } from "../types";
import { supabase } from "../supabase";
import { useCart } from "../context/CartContext";

interface Props {
  product: Product;
}

const ProductDetails: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>(
    product.availableSizes?.[0] || ""
  );

  const [activeImage, setActiveImage] = useState(0);
  const [openSection, setOpenSection] = useState<string | null>("description");
  const [added, setAdded] = useState(false);

  const images = product.images || [];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart(product, selectedSize);

    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <section className="w-full bg-secondary pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20">

            {/* LEFT - GALLERY */}
            <div className="relative select-none">

              <div className="absolute top-4 left-4 right-4 flex gap-2 z-10">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-[3px] bg-white/40 rounded-full overflow-hidden"
                  >
                    <div
                      className={`h-full bg-white transition-all duration-500 ${
                        i <= activeImage ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                ))}
              </div>

              <div className="aspect-[4/5] bg-white overflow-hidden rounded-md shadow-sm relative">
                <img
                  src={images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />

                <div
                  className="absolute left-0 top-0 h-full w-1/2 cursor-pointer"
                  onClick={() =>
                    setActiveImage((prev) =>
                      prev === 0 ? images.length - 1 : prev - 1
                    )
                  }
                />

                <div
                  className="absolute right-0 top-0 h-full w-1/2 cursor-pointer"
                  onClick={() =>
                    setActiveImage((prev) =>
                      prev === images.length - 1 ? 0 : prev + 1
                    )
                  }
                />
              </div>
            </div>

            {/* RIGHT - DETAILS */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary/60">
                {product.category}
              </span>

              <h1 className="mt-4 text-4xl font-brand text-primary">
                {product.name}
              </h1>

              <div className="mt-3 flex items-center gap-4">
                <p className="text-2xl text-primary">
                  ₹ {product.price}
                </p>

                <span className="text-sm text-primary/60">
                  ⭐ {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="mt-6 text-sm text-primary/70 leading-relaxed">
                {product.description}
              </p>

              {/* SIZE */}
              {product.availableSizes?.length > 0 && (
                <div className="mt-10">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-primary/60 mb-4">
                    Select Size
                  </p>

                  <div className="flex gap-4 flex-wrap">
                    {product.availableSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 rounded-full border text-sm transition ${
                          selectedSize === size
                            ? "bg-primary text-white border-primary"
                            : "border-primary/20 text-primary hover:border-primary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ADD TO CART */}
              <button
                onClick={handleAddToCart}
                className="mt-10 w-full py-4 rounded-full bg-primary text-white uppercase tracking-[0.3em] text-[12px] hover:opacity-90 transition"
              >
                {added ? "Added ✓" : "Add to Cart"}
              </button>

              {/* ACCORDION */}
              <div className="mt-12 space-y-4">

                <div className="border rounded-lg bg-white">
                  <button
                    onClick={() =>
                      setOpenSection(
                        openSection === "description" ? null : "description"
                      )
                    }
                    className="w-full px-6 py-4 flex justify-between items-center"
                  >
                    <span className="text-sm font-medium text-primary">
                      Description & Fit
                    </span>
                    <span>{openSection === "description" ? "−" : "+"}</span>
                  </button>

                  {openSection === "description" && (
                    <div className="px-6 pb-6 text-sm text-primary/70">
                      {product.description}
                    </div>
                  )}
                </div>

                <div className="border rounded-lg bg-white">
                  <button
                    onClick={() =>
                      setOpenSection(
                        openSection === "shipping" ? null : "shipping"
                      )
                    }
                    className="w-full px-6 py-4 flex justify-between items-center"
                  >
                    <span className="text-sm font-medium text-primary">
                      Shipping
                    </span>
                    <span>{openSection === "shipping" ? "−" : "+"}</span>
                  </button>

                  {openSection === "shipping" && (
                    <div className="px-6 pb-6 text-sm text-primary/70">
                      Free shipping on prepaid orders.  
                      Delivery within 3–5 working days.
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="w-full bg-[#F3EBDD] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-brand text-primary mb-12">
            Rating & Reviews
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-6xl font-light text-primary">
                {product.rating} <span className="text-xl">/5</span>
              </div>
              <p className="text-primary/50 mt-2">
                Based on {product.reviewCount} reviews
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-primary/70 text-sm leading-relaxed">
                Exceptional fabric quality and tailored fit.
                Perfect for events and celebrations.
              </p>
              <p className="mt-6 text-primary font-medium">
                — Verified Customer
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;