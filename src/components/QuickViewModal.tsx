'use client';

import React from 'react';
import { X, Check, ShoppingCart, ShieldCheck, Cpu, Battery, Camera, Smartphone, Heart, Layers } from 'lucide-react';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}: QuickViewModalProps) {
  const router = useRouter();
  if (!product) return null;

  const formatRupiah = (val: number) => 'Rp ' + val.toLocaleString('id-ID');

  const specsList = product.specs ? [
    { icon: Smartphone, label: 'Layar', value: product.specs.screen },
    { icon: Layers, label: 'Memori (RAM/ROM)', value: product.specs.ramStorage },
    { icon: Cpu, label: 'Processor', value: product.specs.processor },
    { icon: Camera, label: 'Kamera', value: product.specs.camera },
    { icon: Battery, label: 'Baterai', value: product.specs.battery },
    { icon: ShieldCheck, label: 'Garansi', value: product.specs.warranty },
  ].filter(item => Boolean(item.value)) : [];

  const handleDirectBuy = () => {
    onAddToCart(product);
    onClose();
    router.push(`/booking?product=${encodeURIComponent(product.id)}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-10 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 p-2 text-gray-400 hover:text-gray-700 bg-white/80 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Product Media */}
          <div className="md:col-span-5 bg-gray-50/80 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
            <div className="relative w-full aspect-square flex items-center justify-center">
              <img
                src={`${product.image}?v=gsm2`}
                alt={product.name}
                className="max-h-full max-w-full object-contain drop-shadow-md"
              />
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="md:col-span-7 p-6 flex flex-col justify-between">
            <div>
              {/* Brand & Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-[#0066FF] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                  {product.brand}
                </span>
                {product.discountPercent && (
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    Hemat {product.discountPercent}%
                  </span>
                )}
                <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Stok Tersedia
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-gray-900 leading-snug">
                {product.name}
              </h3>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-black text-gray-950">
                  {formatRupiah(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatRupiah(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Specs Summary */}
              {specsList.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Spesifikasi Utama
                  </h4>
                  <div className="space-y-1.5 text-xs text-gray-700">
                    {specsList.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-2">
                          <Icon className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                          <span className="font-medium text-gray-500 w-16 shrink-0">{item.label}:</span>
                          <span className="font-semibold text-gray-900">{item.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => onToggleWishlist(product)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  isWishlisted 
                    ? 'border-rose-200 bg-rose-50 text-rose-500' 
                    : 'border-gray-200 hover:border-rose-300 text-gray-500'
                }`}
                title="Favorit"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>

              <button
                type="button"
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="py-3 px-3 sm:px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                title="Simpan di keranjang"
              >
                <ShoppingCart className="w-4 h-4 stroke-[2]" />
                <span className="hidden sm:inline">Keranjang</span>
              </button>

              <button
                type="button"
                onClick={handleDirectBuy}
                className="flex-1 py-3 px-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Beli Sekarang</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
