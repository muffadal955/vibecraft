import React from "react";

interface PolicyProps {
  title: string;
}

const Policy: React.FC<PolicyProps> = ({ title }) => {
  return (
    <div className="w-full bg-secondary pt-48 pb-32 px-6 lg:px-20">
      <div className="max-w-[800px] mx-auto space-y-20">

        {/* ---------- HEADER ---------- */}
        <div className="space-y-6 text-center">
          <span className="text-primary/60 font-bold tracking-[0.4em] text-[10px] uppercase block">
            Legal Information
          </span>

          <h1 className="text-5xl md:text-6xl font-brand text-primary leading-tight">
            {title}
          </h1>

          <p className="text-primary/50 text-xs uppercase tracking-[0.3em]">
            Last Updated: October 2024
          </p>

          <div className="w-16 h-[2px] bg-primary mx-auto mt-6" />
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="space-y-16 text-primary/70 leading-relaxed">

          <section className="space-y-6">
            <h2 className="text-2xl font-brand text-primary">
              1. Overview
            </h2>

            <div className="w-10 h-[2px] bg-primary/40" />

            <p>
              VibeCraft is committed to transparency and respect for our
              community. This policy outlines our operational guidelines
              to ensure a consistent and secure experience.
            </p>

            <p>
              By using our platform, you acknowledge and agree to the
              terms outlined below.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-brand text-primary">
              2. Data & Privacy
            </h2>

            <div className="w-10 h-[2px] bg-primary/40" />

            <p>
              We treat your information with care. Your data is protected
              using secure systems and is never sold or shared without consent.
            </p>

            <ul className="list-disc pl-6 space-y-3 marker:text-primary">
              <li>Secure checkout and encrypted transactions.</li>
              <li>Opt-in communication for new collections and updates.</li>
              <li>Responsible handling of customer information.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-brand text-primary">
              3. Intellectual Property
            </h2>

            <div className="w-10 h-[2px] bg-primary/40" />

            <p>
              All designs, branding, imagery and written content belong
              to VibeCraft. Unauthorized reproduction or commercial use
              is strictly prohibited.
            </p>
          </section>

          {/* ---------- FOOTER CTA ---------- */}
          <div className="pt-16 border-t border-primary/10 text-center space-y-6">

            <p className="text-[11px] uppercase tracking-[0.4em] text-primary/60">
              Need Further Clarification?
            </p>

            <a
              href="#contact"
              className="group relative inline-block overflow-hidden px-10 py-4 border border-primary text-primary text-[11px] uppercase tracking-[0.35em]"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-secondary">
                Contact Support
              </span>

              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Policy;