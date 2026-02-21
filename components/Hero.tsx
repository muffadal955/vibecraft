import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop",
    subtitle: "Urban Earth Collection",
    title: "Crafted in Linen.\nRooted in Earth.",
    description:
      "Modern party and traditional shirts designed for urban celebrations. Breathable fabrics. Refined silhouettes. Accessible luxury under ₹2000.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop",
    subtitle: "Summer Essentials",
    title: "Lightweight.\nEffortless.\nEssential.",
    description:
      "Tailored silhouettes in breathable fabrics. Designed for movement. Built for modern India.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop",
    subtitle: "Evening Edit",
    title: "Refined.\nElevated.\nTimeless.",
    description:
      "Structured fits. Deep earthy tones. Modern celebration wear under ₹2000.",
  },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative flex items-center"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Warmer Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

            {/* Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-20 text-white">

              <p className="text-[11px] uppercase tracking-[0.5em] mb-6 text-white/80">
                {slide.subtitle}
              </p>

              <h1 className="whitespace-pre-line text-5xl md:text-7xl lg:text-[90px] leading-[0.95] font-brand mb-8">
                {slide.title}
              </h1>

              <p className="max-w-xl text-lg text-white/80 leading-relaxed mb-10">
                {slide.description}
              </p>

              <div className="flex gap-6">

                {/* Primary Button */}
                <a
                  href="#shop"
                  className="group relative overflow-hidden px-10 py-4 border border-white text-white text-[11px] tracking-[0.35em] uppercase transition-all duration-500"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-secondary">
                    Shop Now
                  </span>

                  <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </a>

                {/* Secondary Button */}
                <a
                  href="#about"
                  className="group relative overflow-hidden px-10 py-4 border border-white text-white text-[11px] tracking-[0.35em] uppercase transition-all duration-500"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-secondary">
                    Discover More
                  </span>

                  <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-[2px] w-10 transition-all duration-500 ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;