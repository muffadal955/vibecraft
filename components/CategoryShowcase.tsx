import React from "react";

const CategoryShowcase: React.FC = () => {
  return (
    <section className="w-full bg-secondary py-36 px-6 lg:px-20">

      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <div className="mb-24 text-center">
          <p className="text-[11px] uppercase tracking-[0.5em] text-primary/60 mb-4">
            Curated Edit
          </p>
          <h2 className="text-4xl md:text-5xl font-brand text-primary">
            The Collection
          </h2>
          <p className="mt-6 text-primary/60 max-w-xl mx-auto">
            Breathable linen. Elevated silhouettes. Earth-inspired tones
            designed for modern celebrations.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Large Left - Linen */}
          <a
            href="#shop"
            className="group relative overflow-hidden aspect-[4/5] rounded-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1600&auto=format&fit=crop"
              alt="Linen Shirts"
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/70 mb-3">
                Breathable • Minimal • Modern
              </p>
              <h3 className="text-3xl font-brand">Linen Shirts</h3>
            </div>
          </a>

          {/* Right Column */}
          <div className="flex flex-col gap-10">

            {/* Party Wear */}
            <a
              href="#shop"
              className="group relative overflow-hidden aspect-[4/3] rounded-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1600&auto=format&fit=crop"
                alt="Party Wear"
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/70 mb-2">
                  Evening Edit
                </p>
                <h3 className="text-2xl font-brand">Party Wear</h3>
              </div>
            </a>

            {/* Traditional */}
            <a
              href="#shop"
              className="group relative overflow-hidden aspect-[4/3] rounded-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1600&auto=format&fit=crop"
                alt="Traditional Wear"
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/70 mb-2">
                  Festive Essentials
                </p>
                <h3 className="text-2xl font-brand">Traditional Wear</h3>
              </div>
            </a>

          </div>
        </div>

        {/* Bottom Premium Banner */}
        <div className="mt-16">
          <a
            href="#shop"
            className="group relative overflow-hidden aspect-[5/2] block rounded-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop"
              alt="New Arrivals"
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

            <div className="absolute left-14 top-1/2 -translate-y-1/2 text-white">
              <p className="text-[11px] uppercase tracking-[0.5em] text-white/70 mb-4">
                Limited Drop
              </p>
              <h3 className="text-4xl font-brand">
                New Arrivals
              </h3>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CategoryShowcase;