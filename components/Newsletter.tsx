
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-20 border-t border-gray-100">
      <div className="max-w-[800px] mx-auto text-center space-y-10">
        <div className="flex justify-center">
          <span className="material-symbols-outlined text-5xl text-primary font-light">mail</span>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-dark text-3xl font-black tracking-tight uppercase">Join the Inner Circle</h2>
          <p className="text-gray-500 font-light max-w-md mx-auto">
            Subscribe to receive early access to new collections and exclusive event invitations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 px-6 py-4 bg-luxury-gray border-none focus:ring-2 focus:ring-primary/20 text-sm tracking-wide transition-all outline-none"
          />
          <button className="premium-btn px-10 py-4 bg-primary text-secondary text-[10px] font-black tracking-widest uppercase hover:bg-dark transition-all rounded-[1px]">
            Subscribe
          </button>
        </div>
        
        <p className="text-[9px] text-gray-400 tracking-[0.3em] font-bold uppercase">By subscribing you agree to our Privacy Policy.</p>
      </div>
    </section>
  );
};

export default Newsletter;
