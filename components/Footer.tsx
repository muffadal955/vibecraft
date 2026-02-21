import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F3EBDD] pt-28 pb-14 px-6 lg:px-20 border-t border-primary/10">
      <div className="max-w-[1400px] mx-auto space-y-24">

        {/* ---------------- TOP GRID ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

          {/* Brand Column */}
          <div className="space-y-8">
            <h2 className="text-lg font-brand tracking-[0.4em] uppercase text-primary">
              VibeCraft
            </h2>

            <p className="text-primary/70 leading-relaxed max-w-sm">
              Modern linen shirts crafted for urban gatherings,
              festive occasions and elevated everyday wear.
              Premium quality under ₹2000.
            </p>

            <div className="space-y-3 text-[11px] uppercase tracking-[0.35em] text-primary/60">
              <p>Free Shipping Above ₹1499</p>
              <p>Cash on Delivery Available</p>
              <p>Easy 7-Day Returns</p>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-[0.5em] text-primary">
              Shop
            </h4>

            <ul className="space-y-4 text-primary/70">
              {[
                "Linen Collection",
                "Party Wear",
                "Traditional Shirts",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#shop"
                    className="relative group text-sm transition-all duration-300 hover:text-primary"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-[0.5em] text-primary">
              Support
            </h4>

            <ul className="space-y-4 text-primary/70">
              {[
                { label: "Shipping Policy", link: "#shipping" },
                { label: "Returns & Refunds", link: "#returns" },
                { label: "Privacy Policy", link: "#privacy" },
                { label: "Terms & Conditions", link: "#terms" },
                { label: "Contact Us", link: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="relative group text-sm transition-all duration-300 hover:text-primary"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ---------------- DIVIDER ---------------- */}
        <div className="border-t border-primary/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-[11px] uppercase tracking-[0.35em] text-primary/60">
            © {currentYear} VibeCraft. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-[11px] uppercase tracking-[0.35em] text-primary/60">
            <a
              href="#privacy"
              className="relative group transition-all duration-300 hover:text-primary"
            >
              Privacy
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#terms"
              className="relative group transition-all duration-300 hover:text-primary"
            >
              Terms
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          <div className="text-[11px] uppercase tracking-[0.35em] text-primary/60 text-center">
            Secure Payments • COD Available
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;