import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full bg-secondary">

      {/* ---------- HERO SECTION ---------- */}
      <section className="pt-48 pb-36 px-6 lg:px-20">
        <div className="max-w-[1200px] mx-auto text-center space-y-10">

          <p className="text-[11px] uppercase tracking-[0.5em] text-primary/60">
            About VibeCraft
          </p>

          <h1 className="text-5xl md:text-7xl font-brand text-primary leading-[1.05]">
            Crafted for Modern <br />
            Celebrations.
          </h1>

          <p className="max-w-2xl mx-auto text-primary/70 text-lg leading-relaxed">
            VibeCraft was founded with a simple intention — to create
            breathable linen shirts that feel refined, effortless and
            celebration-ready. Designed for India's climate.
            Tailored for presence.
          </p>

        </div>
      </section>

      {/* ---------- STORY SECTION ---------- */}
      <section className="py-32 px-6 lg:px-20 bg-[#F3EBDD]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-brand text-primary">
              Linen. Elevated.
            </h2>

            <p className="text-primary/70 leading-relaxed">
              We believe true luxury is comfort. Every VibeCraft piece
              begins with breathable linen fabrics selected for
              durability, softness and climate adaptability.
            </p>

            <p className="text-primary/70 leading-relaxed">
              Our silhouettes are structured yet relaxed —
              designed for weddings, festive evenings and
              urban gatherings where confidence matters.
            </p>

            <div className="flex gap-16 pt-6">
              <div>
                <p className="text-4xl font-brand text-primary">100%</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary/60">
                  Linen Focused
                </p>
              </div>

              <div>
                <p className="text-4xl font-brand text-primary">Premium</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary/60">
                  Accessible Luxury
                </p>
              </div>
            </div>

          </div>

          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1600&auto=format&fit=crop"
              alt="Linen Fabric Detail"
              className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
            />
          </div>

        </div>
      </section>

      {/* ---------- VALUES SECTION ---------- */}
      <section className="py-36 px-6 lg:px-20">
        <div className="max-w-[1200px] mx-auto text-center space-y-24">

          <div className="space-y-6">
            <p className="text-[11px] uppercase tracking-[0.5em] text-primary/60">
              Our Values
            </p>

            <h2 className="text-4xl md:text-6xl font-brand text-primary leading-tight">
              Presence Without Excess.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16 text-left">

            <div className="space-y-6">
              <div className="w-12 h-[2px] bg-primary" />
              <h3 className="text-2xl font-brand text-primary">
                Breathability
              </h3>
              <p className="text-primary/70 leading-relaxed">
                Fabrics selected for comfort in Indian climates.
                Designed for long evenings and warm gatherings.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-[2px] bg-primary" />
              <h3 className="text-2xl font-brand text-primary">
                Refinement
              </h3>
              <p className="text-primary/70 leading-relaxed">
                Clean lines, structured fits and timeless silhouettes.
                Minimal yet impactful.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-[2px] bg-primary" />
              <h3 className="text-2xl font-brand text-primary">
                Accessibility
              </h3>
              <p className="text-primary/70 leading-relaxed">
                Premium feel without inflated pricing.
                Celebration-ready pieces under ₹2000.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ---------- FINAL STATEMENT ---------- */}
      <section className="py-40 px-6 lg:px-20 bg-[#F3EBDD] text-center">
        <div className="max-w-3xl mx-auto space-y-12">

          <h2 className="text-4xl md:text-6xl font-brand text-primary leading-[1.1]">
            Designed for movement. <br />
            Refined for presence.
          </h2>

          <div className="w-16 h-[2px] bg-primary mx-auto" />

          <p className="text-primary/60 uppercase tracking-[0.4em] text-[11px]">
            VibeCraft • Modern Linen Wear
          </p>

        </div>
      </section>

    </div>
  );
};

export default About;