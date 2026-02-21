import React from "react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
}) => {
  return (
    <div
      className="group flex flex-col gap-6 cursor-pointer"
      onClick={() => onQuickView(product)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F6F3EE]">
        <img
          src={product.images[0]}  // ✅ FIXED
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
        />

        {product.tag && (
          <span className="absolute top-5 left-5 text-[9px] tracking-[0.3em] uppercase text-[#0F2F1F] bg-[#E7DECF] px-3 py-1">
            {product.tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-[#0F2F1F] text-lg font-medium tracking-tight leading-snug group-hover:opacity-70 transition-opacity">
            {product.name}
          </h3>

          <p className="text-[#0F2F1F] font-semibold text-base">
            ₹ {product.price}
          </p>
        </div>

        <p className="text-[11px] uppercase tracking-[0.3em] text-[#0F2F1F]/50">
          {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
