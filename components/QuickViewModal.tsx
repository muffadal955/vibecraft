
import React from 'react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const shareUrl = window.location.href;
  const shareText = `Check out this ${product.name} from VibeCraft!`;

  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Twitter',
      icon: 'share',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Pinterest',
      icon: 'push_pin',
      url: `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(product.imageUrl)}&description=${encodeURIComponent(shareText)}`,
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-20">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden animate-fade-in-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-all hover:scale-110"
        >
          <span className="material-symbols-outlined text-dark">close</span>
        </button>

        {/* Image Area */}
        <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-auto h-full">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Area */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
            {product.category}
          </span>
          <h2 className="text-dark text-3xl font-black tracking-tight mb-2 uppercase">
            {product.name}
          </h2>
          <p className="text-xl font-medium text-dark mb-8">{product.price}</p>
          
          <p className="text-gray-500 font-light leading-relaxed mb-10">
            A masterclass in minimal design, this piece is crafted from the finest materials to provide both comfort and an impeccable silhouette. Hand-finished for lasting quality.
          </p>

          <div className="flex flex-col gap-4 mb-12">
            <button className="premium-btn w-full bg-dark text-white py-4 text-[10px] font-black tracking-widest uppercase hover:bg-primary transition-colors rounded-[2px]">
              Add to Bag
            </button>
            <button className="premium-btn w-full border border-dark text-dark py-4 text-[10px] font-black tracking-widest uppercase hover:bg-luxury-gray transition-colors rounded-[2px]">
              Wishlist
            </button>
          </div>

          {/* Social Sharing */}
          <div className="border-t border-gray-100 pt-8">
            <h4 className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              Share this Piece
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-link flex items-center gap-2 py-1 group transition-colors"
                  title={`Share on ${social.name}`}
                >
                  <span className="material-symbols-outlined text-[16px] text-gray-400 group-hover:text-primary">
                    {social.icon}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 group-hover:text-dark">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
