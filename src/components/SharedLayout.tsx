'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import { MapPin, Clock, Phone } from 'lucide-react';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import QuickViewModal from '@/components/QuickViewModal';
import WarrantyCheckModal from '@/components/WarrantyCheckModal';
import Toast from '@/components/Toast';

import { PROMO_PRODUCTS } from '@/data/products';
import { Product, CartItem } from '@/types/product';

interface SharedLayoutProps {
  children: React.ReactNode;
  activeNav?: string;
}

export default function SharedLayout({ children, activeNav = 'home' }: SharedLayoutProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const [cart, setCart] = useState<CartItem[]>([
    { product: PROMO_PRODUCTS[0], quantity: 1 },
  ]);
  const [wishlist, setWishlist] = useState<Product[]>([PROMO_PRODUCTS[1]]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isWarrantyOpen, setIsWarrantyOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'cart' | 'wishlist' | 'info'>('cart');

  const showToast = (msg: string, type: 'cart' | 'wishlist' | 'info' = 'cart') => {
    setToastMessage(msg);
    setToastType(type);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`${product.name} dimasukkan ke keranjang!`, 'cart');
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Produk dihapus dari keranjang', 'info');
  };

  const handleClearCart = () => setCart([]);

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`${product.name} dihapus dari favorit`, 'wishlist');
        return prev.filter((p) => p.id !== product.id);
      }
      showToast(`${product.name} ditambahkan ke favorit! ❤️`, 'wishlist');
      return [...prev, product];
    });
  };

  // Expose handlers via context so child pages can use them
  // (e.g. BrandPageClient needs onAddToCart)
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenWarranty={() => setIsWarrantyOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeNav={activeNav}
        setActiveNav={() => {}}
      />

      <main className="flex-1">
        {children}
      </main>

      {/* Store Info Footer */}
      <footer className="bg-gray-900 text-white">
        {activeNav !== 'home' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 border-b border-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <MapPin className="w-6 h-6 text-yellow-400 shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Alamat</p>
                  <p className="text-sm font-semibold">Jl. Hz Mustofa No 122</p>
                  <p className="text-xs text-gray-400">Yudanegara Cihideung, Kota Tasikmalaya</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <Clock className="w-6 h-6 text-yellow-400 shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Jam Buka</p>
                  <p className="text-sm font-semibold">Buka Setiap Hari: 10:00 – 21:00 WIB</p>
                  <p className="text-xs text-gray-400">Senin s/d Minggu (Bebas Antre)</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <Phone className="w-6 h-6 text-yellow-400 shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Kontak WhatsApp</p>
                  <a
                    href="https://wa.me/6282221234596"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold hover:text-yellow-300 transition-colors"
                  >
                    0822-2123-4596
                  </a>
                  <p className="text-xs text-gray-400">Admin resmi Marshall Phone Cell</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Copyright Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 text-center sm:text-left">
          <p>© 2026 Marshall Phone Cell Tasikmalaya. Hak Cipta Dilindungi.</p>
          <p className="text-gray-500">
            Sentra Smartphone, Tablet &amp; Aksesori Resmi Bergaransi Distributor
          </p>
        </div>
      </footer>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onAddToCart={handleAddToCart}
        onRemoveFromWishlist={handleToggleWishlist}
      />
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={
          quickViewProduct
            ? wishlist.some((p) => p.id === quickViewProduct.id)
            : false
        }
        onToggleWishlist={handleToggleWishlist}
      />
      <WarrantyCheckModal
        isOpen={isWarrantyOpen}
        onClose={() => setIsWarrantyOpen(false)}
      />
      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
