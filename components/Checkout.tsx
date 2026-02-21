import React from "react";
import { useCart } from "../context/CartContext";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const API_BASE = "https://vibecraft-amiw.onrender.com";

const Checkout: React.FC = () => {
  const { cart, clearCart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  /* ---------------- PAYMENT HANDLER ---------------- */

  const handlePayment = async () => {
    if (subtotal <= 0) {
      alert("Invalid order amount.");
      return;
    }

    try {
      // 1️⃣ Create order on backend
      const response = await fetch(`${API_BASE}/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: subtotal }),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const order = await response.json();

      // 2️⃣ Open Razorpay popup
      const options = {
        key: "rzp_test_SIQl6uuIVxVyXy",
        amount: order.amount,
        currency: "INR",
        name: "VibeCraft",
        description: "Order Payment",
        order_id: order.id,
        theme: { color: "#0F2F1F" },

        handler: async function (response: any) {
          try {
            const verifyRes = await fetch(
              `${API_BASE}/verify-payment`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response),
              }
            );

            if (!verifyRes.ok) {
              throw new Error("Verification failed");
            }

            const verifyData = await verifyRes.json();

            if (verifyData.status === "success") {
              alert("Payment Successful!");
              clearCart();
              window.location.hash = "home";
            } else {
              alert("Payment Verification Failed");
            }
          } catch (err) {
            console.error("Verification error:", err);
            alert("Payment verification failed.");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  /* ---------------- EMPTY STATE ---------------- */

  if (cart.length === 0) {
    return (
      <div className="w-full bg-secondary pt-48 pb-32 px-6 lg:px-20 min-h-screen text-center">
        <h1 className="text-4xl font-brand text-primary mb-6">
          Your Bag is Empty
        </h1>
        <p className="text-primary/60 mb-10">
          Add something beautiful before checking out.
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

  /* ---------------- MAIN CHECKOUT ---------------- */

  return (
    <div className="w-full bg-secondary pt-48 pb-32 px-6 lg:px-20 min-h-screen">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-24">

        {/* -------- LEFT: SHIPPING FORM -------- */}
        <div className="lg:col-span-7 space-y-16">
          <h2 className="text-3xl font-brand text-primary">
            Shipping Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-transparent border-b border-primary/20 py-4 focus:border-primary outline-none"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-transparent border-b border-primary/20 py-4 focus:border-primary outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="md:col-span-2 w-full bg-transparent border-b border-primary/20 py-4 focus:border-primary outline-none"
            />

            <input
              type="text"
              placeholder="Full Address"
              className="md:col-span-2 w-full bg-transparent border-b border-primary/20 py-4 focus:border-primary outline-none"
            />

            <input
              type="text"
              placeholder="City"
              className="w-full bg-transparent border-b border-primary/20 py-4 focus:border-primary outline-none"
            />

            <input
              type="text"
              placeholder="ZIP Code"
              className="w-full bg-transparent border-b border-primary/20 py-4 focus:border-primary outline-none"
            />

          </div>
        </div>

        {/* -------- RIGHT: SUMMARY -------- */}
        <div className="lg:col-span-5">
          <div className="bg-[#F3EBDD] p-10 rounded-sm shadow-sm border border-primary/10 sticky top-40 space-y-8">

            <h3 className="text-2xl font-brand text-primary">
              Order Summary
            </h3>

            {/* CART ITEMS */}
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-6 items-center"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-20 object-cover rounded-sm"
                  />

                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary">
                      {item.name}
                    </p>
                    <p className="text-xs text-primary/60">
                      Size: {item.size} × {item.quantity}
                    </p>
                  </div>

                  <p className="text-sm font-semibold text-primary">
                    ₹ {item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            {/* TOTALS */}
            <div className="border-t border-primary/10 pt-6 space-y-4">
              <div className="flex justify-between text-primary/70 text-sm">
                <span>Subtotal</span>
                <span>₹ {subtotal}</span>
              </div>

              <div className="flex justify-between text-lg font-semibold text-primary">
                <span>Total</span>
                <span>₹ {subtotal}</span>
              </div>
            </div>

            {/* PAY BUTTON */}
            <button
              onClick={handlePayment}
              className="group relative w-full overflow-hidden px-10 py-4 border border-primary text-primary text-[11px] uppercase tracking-[0.35em]"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-secondary">
                Pay Securely
              </span>
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>

            <p className="text-[10px] text-primary/50 text-center uppercase tracking-[0.3em]">
              Secure Payments via Razorpay
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
