import React from "react";

const Philosophy: React.FC = () => {
  return (
    <section className="w-full bg-[#F3EBDD] py-36 px-6 lg:px-20">
      <div className="max-w-[1200px] mx-auto text-center">

        {/* Top Label */}
        <p className="text-[11px] uppercase tracking-[0.5em] text-primary/60 mb-6">
          Our Philosophy
        </p>

        {/* Main Statement */}
        <h2 className="text-4xl md:text-6xl font-brand text-primary leading-[1.1] mb-10">
          Designed for Presence. <br />
          Built for Celebration.
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-primary/70 leading-relaxed mb-24">
          We believe clothing should feel effortless yet powerful.
          Every piece is crafted in breathable linen, tailored with
          intention, and refined for modern gatherings.
          Accessible luxury without compromise.
        </p>

        {/* Philosophy Pillars */}
        <div className="grid md:grid-cols-3 gap-16 text-left">

          {/* Pillar 1 */}
          <div className="space-y-6">
            <div className="w-12 h-[2px] bg-primary" />
            <h3 className="text-2xl font-brand text-primary">
              Breathable Craft
            </h3>
            <p className="text-primary/70 leading-relaxed">
              Premium linen fabrics designed for India's climate.
              Lightweight. Airy. Comfortable for long celebrations.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-6">
            <div className="w-12 h-[2px] bg-primary" />
            <h3 className="text-2xl font-brand text-primary">
              Refined Silhouettes
            </h3>
            <p className="text-primary/70 leading-relaxed">
              Structured tailoring that enhances posture and presence.
              Modern fits inspired by timeless aesthetics.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="space-y-6">
            <div className="w-12 h-[2px] bg-primary" />
            <h3 className="text-2xl font-brand text-primary">
              Accessible Luxury
            </h3>
            <p className="text-primary/70 leading-relaxed">
              Elevated design without inflated pricing.
              Celebration-ready pieces under ₹2000.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Philosophy;