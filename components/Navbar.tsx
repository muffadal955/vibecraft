import React from "react";
import { useCart } from "../context/CartContext";

interface NavbarProps {
  activeView: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeView }) => {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="fixed top-0 z-50 w-full bg-secondary border-b border-primary/10 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 h-[70px] flex items-center justify-between relative">

        {/* LEFT NAV */}
        <nav className="hidden md:flex gap-10 text-[11px] tracking-[0.4em] uppercase text-primary/70 font-ui">
          {["Shop", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group transition-all duration-300 hover:text-primary"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CENTER LOGO */}
        <a
  href="#"
  className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
>
  <img
    src="/images/logo.png"
    alt="VibeCraft Logo"
    className="h-60 md:h-70 object-contain transition-transform duration-300 hover:scale-105"
  />
</a> 

        {/* RIGHT NAV */}
        <div className="flex items-center gap-8 text-[11px] tracking-[0.4em] uppercase text-primary/80 font-ui">

          <a
            href="#contact"
            className="hidden md:block relative group transition-all duration-300 hover:text-primary"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#cart"
            className="relative group transition-all duration-300 hover:text-primary active:scale-95 flex items-center"
          >
            Bag

            {totalItems > 0 && (
              <span className="ml-2 text-primary font-semibold animate-pulse scale-110">
                ({totalItems})
              </span>
            )}

            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
          </a>

        </div>
      </div>
    </header>
  );
};

export default Navbar;