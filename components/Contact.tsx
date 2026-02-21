import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="w-full bg-secondary pt-48 pb-36 px-6 lg:px-20 min-h-screen">
      <div className="max-w-[1200px] mx-auto">

        {/* ---------- HEADER ---------- */}
        <div className="text-center mb-24 space-y-6">
          <p className="text-[11px] uppercase tracking-[0.5em] text-primary/60">
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-6xl font-brand text-primary leading-tight">
            We’d Love To Hear <br /> From You
          </h1>

          <p className="max-w-xl mx-auto text-primary/70 leading-relaxed">
            Whether it’s sizing guidance, order support or collaboration
            inquiries — our team is here to help you.
          </p>
        </div>

        {/* ---------- CONTENT GRID ---------- */}
        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT SIDE - INFO */}
          <div className="space-y-14">

            <div className="space-y-4">
              <h3 className="text-[11px] uppercase tracking-[0.4em] text-primary/60">
                Customer Support
              </h3>
              <p className="text-primary text-lg">
                support@vibecraft.com
              </p>
              <p className="text-primary/60 text-sm">
                Response time: 24–48 working hours
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[11px] uppercase tracking-[0.4em] text-primary/60">
                Business Inquiries
              </h3>
              <p className="text-primary text-lg">
                info@vibecraft.co.in
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[11px] uppercase tracking-[0.4em] text-primary/60">
                Follow Us
              </h3>

              <div className="flex gap-10 text-sm text-primary/70">
                <a
                  href="#"
                  className="relative group transition-all duration-300 hover:text-primary"
                >
                  Instagram
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                </a>

                <a
                  href="#"
                  className="relative group transition-all duration-300 hover:text-primary"
                >
                  WhatsApp
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-[#F3EBDD] p-10 md:p-14 rounded-sm shadow-sm border border-primary/10">

            <form className="space-y-10">

              <div className="grid md:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-primary/20 py-4 focus:border-primary outline-none text-sm"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-primary/20 py-4 focus:border-primary outline-none text-sm"
                />
              </div>

              <input
                type="text"
                placeholder="Order ID (Optional)"
                className="w-full bg-transparent border-b border-primary/20 py-4 focus:border-primary outline-none text-sm"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-primary/20 py-4 focus:border-primary outline-none text-sm resize-none"
              />

              <button
                type="submit"
                className="group relative w-full overflow-hidden px-10 py-4 border border-primary text-primary text-[11px] uppercase tracking-[0.35em]"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-secondary">
                  Send Message
                </span>
                <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;