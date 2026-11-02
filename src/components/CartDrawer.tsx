'use client';

import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { CartItem } from '@/types/product';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [voucherMessage, setVoucherMessage] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const total = Math.max(0, subtotal - discountAmount);

  const formatRupiah = (val: number) => 'Rp ' + val.toLocaleString('id-ID');

  const handleApplyVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    if (voucherCode.trim().toUpperCase() === 'MARSHALLHEMAT') {
      const discount = Math.min(500000, Math.round(subtotal * 0.05));
      setDiscountAmount(discount);
      setVoucherMessage(`Voucher aktif! Potongan Rp ${discount.toLocaleString('id-ID')}`);
    } else {
      setVoucherMessage('Gunakan kode promo: MARSHALLHEMAT');
    }
  };

  const handleSimulateCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Window */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#0066FF]" />
            <h3 className="font-bold text-gray-900 text-base">
              Keranjang Belanja ({items.reduce((acc, cur) => acc + cur.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Alert Banner */}
        <div className="bg-blue-50/80 px-4 py-2.5 border-b border-blue-100 flex items-center gap-2 text-xs text-blue-900">
          <Truck className="w-4 h-4 text-[#0066FF] shrink-0" />
          <span>
            {subtotal >= 1000000
              ? 'Selamat! Pesanan Anda mendapatkan Bebas Ongkir se-Indonesia 🚚'
              : `Belanja ${formatRupiah(1000000 - subtotal)} lagi untuk Gratis Ongkir!`}
          </span>
        </div>

        {/* Body content */}
        {checkoutSuccess ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Pesanan Diterima!</h4>
            <p className="text-sm text-gray-500 mt-2">
              Terima kasih telah berbelanja di Marshall Phone Cell. Invoice dan nomor resi akan dikirim via WhatsApp.
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
              <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
            </div>
            <h4 className="text-lg font-bold text-gray-800">Keranjang Anda Kosong</h4>
            <p className="text-sm text-gray-500 mt-1 max-w-xs">
              Yuk jelajahi produk smartphone impianmu dan dapatkan diskon menarik hari ini!
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Mulai Belanja
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.map((item) => (
              <div 
                key={item.product.id}
                className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-2xs hover:border-gray-200 transition-colors"
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 bg-gray-50 rounded-lg p-1 shrink-0 flex items-center justify-center border border-gray-100">
                  <img
                    src={`${item.product.image}?v=gsm2`}
                    alt={item.product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 truncate">
                    {item.product.name}
                  </h4>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Garansi Resmi {item.product.brand}
                  </div>
                  <div className="text-sm font-bold text-[#0066FF] mt-1">
                    {formatRupiah(item.product.price)}
                  </div>
                </div>

                {/* Counter controls */}
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-gray-400 hover:text-rose-500 p-1 transition-colors cursor-pointer"
                    title="Hapus"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, -1)}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded-l-md transition-colors cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 text-xs font-bold text-gray-900 min-w-[20px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, 1)}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded-r-md transition-colors cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Voucher input */}
            <form onSubmit={handleApplyVoucher} className="pt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Kode voucher (cth: MARSHALLHEMAT)"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-[#0066FF]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Gunakan
                </button>
              </div>
              {voucherMessage && (
                <p className="text-[11px] text-emerald-600 font-medium mt-1">
                  {voucherMessage}
                </p>
              )}
            </form>
          </div>
        )}

        {/* Footer / Checkout */}
        {items.length > 0 && !checkoutSuccess && (
          <div className="p-4 border-t border-gray-100 bg-gray-50/50 space-y-3">
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">{formatRupiah(subtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600">
                  <span>Diskon Promo</span>
                  <span className="font-semibold">-{formatRupiah(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Biaya Pengiriman</span>
                <span className="font-semibold text-emerald-600">Gratis (Promo Toko)</span>
              </div>
              <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-200">
                <span>Total Bayar</span>
                <span className="text-[#0066FF]">{formatRupiah(total)}</span>
              </div>
            </div>

            <button
              onClick={handleSimulateCheckout}
              className="w-full py-3 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Lanjut ke Pembayaran</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Pembayaran Aman & 100% Bergaransi Resmi</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
