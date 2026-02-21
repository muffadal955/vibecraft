import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryShowcase from "./components/CategoryShowcase";
import VideoShowcase from "./components/VideoShowcase";
import ProductCard from "./components/ProductCard";
import ProductListing from "./components/ProductListing";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import Philosophy from "./components/Philosophy";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import { Product } from "./types";
import { supabase } from "./supabase";

type ViewState =
  | "home"
  | "shop"
  | "product"
  | "cart"
  | "checkout"
  | "about"
  | "contact"
  | "privacy"
  | "terms"
  | "shipping"
  | "returns";

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [view, setView] = useState<ViewState>("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loadingFeatured, setLoadingFeatured] = useState(true);

  /* ---------------- FETCH FEATURED PRODUCTS ---------------- */

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .limit(4);

    if (error) {
      console.error("Featured fetch error:", error);
      setLoadingFeatured(false);
      return;
    }

    const formatted = data.map((p: any) => ({
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

    setFeaturedProducts(formatted);
    setLoadingFeatured(false);
  };

  /* ---------------- ROUTING ---------------- */

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "") as ViewState;
      const targetView = hash || "home";

      if (targetView !== view) {
        setIsTransitioning(true);

        setTimeout(() => {
          setView(targetView);
          window.scrollTo({ top: 0, behavior: "smooth" });
          setIsTransitioning(false);
        }, 250);
      }
    };

    window.addEventListener("hashchange", handleHash);
    handleHash();

    return () => window.removeEventListener("hashchange", handleHash);
  }, [view]);

  const openProductPage = (product: Product) => {
    setSelectedProduct(product);
    window.location.hash = "product";
  };

  /* ---------------- VIEW SWITCH ---------------- */

  const renderView = () => {
    switch (view) {
      case "shop":
        return <ProductListing onQuickView={openProductPage} />;

      case "product":
        return selectedProduct ? (
          <ProductDetails product={selectedProduct} />
        ) : (
          <ProductListing onQuickView={openProductPage} />
        );

      case "cart":
        return <Cart />;

      case "checkout":
        return <Checkout />;

      case "about":
        return <About />;

      case "contact":
        return <Contact />;

      case "privacy":
        return <Policy title="Privacy Policy" />;

      case "terms":
        return <Policy title="Terms & Conditions" />;

      case "shipping":
        return <Policy title="Shipping Policy" />;

      case "returns":
        return <Policy title="Return & Refund Policy" />;

      case "home":
      default:
        return (
          <>
            <Hero />
            <CategoryShowcase />
            <VideoShowcase />

            {/* ---------------- FEATURED COLLECTION ---------------- */}
            <section className="w-full bg-secondary py-32 px-6 lg:px-20">
              <div className="max-w-[1400px] mx-auto">

                <div className="space-y-6 mb-20">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-primary/60">
                    Featured Collection
                  </p>

                  <h2 className="text-5xl md:text-6xl font-brand text-primary leading-tight">
                    Elevated Shirts for <br /> Modern Gatherings
                  </h2>

                  <p className="text-primary/70 max-w-xl leading-relaxed">
                    Breathable linen fabrics tailored for celebrations,
                    festive occasions and elevated everyday wear.
                    Designed for comfort. Refined for presence.
                  </p>
                </div>

                {loadingFeatured ? (
                  <div className="text-center py-20 text-primary/60">
                    Loading featured products...
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-24">
                    {featuredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onQuickView={openProductPage}
                      />
                    ))}
                  </div>
                )}

                <div className="mt-20 text-center">
                  <a
                    href="#shop"
                    className="group relative inline-block overflow-hidden px-12 py-4 border border-primary text-primary text-[11px] uppercase tracking-[0.3em]"
                  >
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-secondary">
                      View Full Collection
                    </span>
                    <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  </a>
                </div>

              </div>
            </section>

            <Philosophy />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-secondary selection:bg-primary selection:text-secondary">
      <Navbar activeView={view} />

      <main
        className={`flex-grow transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {renderView()}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default App;