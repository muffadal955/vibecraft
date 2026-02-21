import React from "react";
import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="w-full bg-secondary pt-48 pb-32 px-6 lg:px-20 min-h-screen text-center">
        <h1 className="text-4xl font-brand text-primary mb-6">
          Your Bag is Empty
        </h1>
        <p className="text-primary/60 mb-10">
          Explore our collection and find your perfect linen piece.
        </p>
        <a
          href="#shop"
          className="group relative inline-block overflow-hidden px-10 py-4 border border-primary text-primary text-[11px] uppercase tracking-[0.35em]"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-secondary">
            Continue Shopping
          </span>
          <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </a>
      </div>
    );
  }

  return (
    <div className="w-full bg-secondary pt-48 pb-32 px-6 lg:px-20 min-h-screen">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-20">

        {/* -------- LEFT SIDE - ITEMS -------- */}
        <div className="lg:col-span-7 space-y-12">

          <h2 className="text-4xl font-brand text-primary mb-10">
            Your Bag
          </h2>

          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex gap-8 border-b border-primary/10 pb-10"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-28 h-36 object-cover rounded-sm"
              />

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-lg font-brand text-primary">
                    {item.name}
                  </h3>
                  <p className="text-sm text-primary/60">
                    Size: {item.size}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.size, item.quantity - 1)
                    }
                    className="w-8 h-8 border border-primary/30 flex items-center justify-center text-primary hover:border-primary"
                  >
                    −
                  </button>

                  <span className="text-primary">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.size, item.quantity + 1)
                    }
                    className="w-8 h-8 border border-primary/30 flex items-center justify-center text-primary hover:border-primary"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="text-xs uppercase tracking-[0.3em] text-primary/50 hover:text-primary transition"
                >
                  Remove
                </button>
              </div>

              <div className="text-right">
                <p className="text-lg font-semibold text-primary">
                  ₹ {item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* -------- RIGHT SIDE - SUMMARY -------- */}
        <div className="lg:col-span-5">
          <div className="bg-[#F3EBDD] p-10 rounded-sm shadow-sm border border-primary/10 sticky top-40 space-y-8">

            <h3 className="text-2xl font-brand text-primary">
              Order Summary
            </h3>

            <div className="flex justify-between text-primary/70 text-sm">
              <span>Subtotal</span>
              <span>₹ {subtotal}</span>
            </div>

            <div className="flex justify-between text-primary font-semibold text-lg">
              <span>Total</span>
              <span>₹ {subtotal}</span>
            </div>

            <a
              href="#checkout"
              className="group relative w-full inline-block overflow-hidden px-10 py-4 border border-primary text-primary text-[11px] uppercase tracking-[0.35em] text-center"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-secondary">
                Proceed to Checkout
              </span>
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;