'use client';

import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye, Check } from 'lucide-react';
import { Product } from '@/types/product';

import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
}: ProductCardProps) {
  const router = useRouter();
  const [isBuying, setIsBuying] = useState(false);

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBuying(true);
    onAddToCart(product);
    // Langsung arahkan ke menu booking pembelian produk
    router.push(`/booking?product=${encodeURIComponent(product.id)}`);
  };

  return (
    <div 
      onClick={() => onQuickView(product)}
      className="group relative bg-white border border-gray-200 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer overflow-hidden"
    >
      {/* Top Badges & Wishlist Action */}
      <div className="flex items-center justify-between gap-1 w-full z-10">
        <div>
          {product.isNew ? (
            <span className="inline-block bg-emerald-500 text-white text-[11px] font-extrabold px-2 py-0.5 rounded tracking-wider uppercase shadow-2xs">
              BARU
            </span>
          ) : product.discountPercent ? (
            <span className="inline-block border border-rose-400 text-rose-600 bg-rose-50 text-[11px] font-bold px-2 py-0.5 rounded shadow-2xs">
              {product.discountPercent}%
            </span>
          ) : (
            <span className="text-[10px] text-gray-400 font-medium">Garansi Resmi</span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`p-1.5 rounded-full transition-transform active:scale-125 cursor-pointer ${
            isWishlisted 
              ? 'text-rose-500 bg-rose-50' 
              : 'text-gray-400 hover:text-rose-500 hover:bg-gray-100'
          }`}
          title={isWishlisted ? "Hapus dari Favorit" : "Tambah ke Favorit"}
        >
          <Heart 
            className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${isWishlisted ? 'fill-rose-500 stroke-rose-500' : 'stroke-[1.8]'}`} 
          />
        </button>
      </div>

      {/* Product Image */}
      <div className="relative w-full aspect-square my-2 sm:my-3 flex items-center justify-center p-2.5 rounded-lg bg-gray-50/70 border border-gray-100 overflow-hidden">
        <img
          src={`${product.image}?v=gsm2`}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="eager"
        />

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
          <span className="px-2.5 py-1 bg-white/95 text-gray-800 text-xs font-semibold rounded-full shadow-sm flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-[#0066FF]" />
            Lihat Spek
          </span>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="flex flex-col flex-1 justify-between pt-1">
        
        {/* Name */}
        <div>
          <h3 
            className="text-sm font-semibold text-gray-900 group-hover:text-[#0066FF] transition-colors line-clamp-2 leading-snug"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Specs preview (RAM/Storage) */}
          {product.specs?.ramStorage && (
            <div className="mt-1 text-[11px] text-gray-500 font-medium truncate">
              {product.specs.ramStorage}
            </div>
          )}

          {/* Pricing */}
          <div className="mt-1.5 flex flex-col">
            <span className="text-base sm:text-lg font-bold text-gray-950 tracking-tight leading-tight">
              {formatRupiah(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-gray-400 line-through leading-tight">
                {formatRupiah(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Actions: Spek & Buy Button */}
        <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between gap-1.5">
          
          {/* Cek Spek Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="px-2 sm:px-2.5 py-1.5 rounded-lg border border-gray-200 hover:border-blue-300 bg-gray-50 hover:bg-blue-50/70 text-gray-700 hover:text-[#0066FF] font-bold text-xs flex items-center gap-1 transition-all cursor-pointer shrink-0"
            title="Lihat Spesifikasi Lengkap"
          >
            <Eye className="w-3.5 h-3.5 text-[#0066FF]" />
            <span className="text-[11px] sm:text-xs">Spek</span>
          </button>

          {/* Buy Button (Sentraponsel Style) */}
          <button
            type="button"
            onClick={handleBuyClick}
            disabled={!product.inStock}
            className={`px-3 sm:px-4 py-1.5 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-1 sm:gap-1.5 shadow-xs transition-all cursor-pointer shrink-0 whitespace-nowrap ${
              isBuying
                ? 'bg-emerald-600 text-white scale-95'
                : 'bg-[#0066FF] hover:bg-[#0052cc] text-white active:scale-95'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5 stroke-[2.2]" />
            <span>{isBuying ? 'Ditambah!' : 'Beli'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
