'use client';

import React from 'react';
import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Product } from '@/types/product';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlist,
  onRemoveFromWishlist,
  onAddToCart
}: WishlistDrawerProps) {
  if (!isOpen) return null;

  const formatRupiah = (val: number) => 'Rp ' + val.toLocaleString('id-ID');

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/40 backdrop-blur-xs" />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="font-bold text-gray-900 text-base">
              Produk Favorit ({wishlist.length})
            </h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {wishlist.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 bg-rose-50 text-rose-400 rounded-full flex items-center justify-center mb-3">
              <Heart className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h4 className="font-bold text-gray-800">Belum Ada Favorit</h4>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Simpan produk yang kamu taksir dengan menekan ikon hati pada kartu produk.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {wishlist.map((product) => (
              <div 
                key={product.id}
                className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-2xs"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-lg p-1 shrink-0 flex items-center justify-center">
                  <img
                    src={`${product.image}?v=gsm2`}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-gray-900 truncate">
                    {product.name}
                  </h4>
                  <div className="text-xs font-bold text-[#0066FF] mt-0.5">
                    {formatRupiah(product.price)}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onAddToCart(product);
                      onRemoveFromWishlist(product);
                    }}
                    className="p-2 bg-[#0066FF] hover:bg-[#0052cc] text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                    title="Pindahkan ke Keranjang"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onRemoveFromWishlist(product)}
                    className="p-2 text-gray-400 hover:text-rose-500 rounded-lg transition-colors cursor-pointer"
                    title="Hapus"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
