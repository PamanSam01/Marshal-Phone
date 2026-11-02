'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import TrustBadges from '@/components/TrustBadges';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import BrandsSection from '@/components/BrandsSection';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import QuickViewModal from '@/components/QuickViewModal';
import WarrantyCheckModal from '@/components/WarrantyCheckModal';
import Toast from '@/components/Toast';
import Footer from '@/components/Footer';

import { 
  PROMO_PRODUCTS, 
  TERLARIS_PRODUCTS, 
  TRENDING_PRODUCTS, 
  TERBARU_PRODUCTS, 
  ALL_PRODUCTS 
} from '@/data/products';
import { Product, CartItem } from '@/types/product';
import { X, Sparkles, Filter } from 'lucide-react';

export default function HomePage() {
  // Navigation & Filter state
  const [activeNav, setActiveNav] = useState('beranda');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // Cart and Wishlist state
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PROMO_PRODUCTS[0], // Samsung Galaxy A55 5G default sample
      quantity: 1
    }
  ]);
  const [wishlist, setWishlist] = useState<Product[]>([PROMO_PRODUCTS[1]]);

  // Modal states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isWarrantyOpen, setIsWarrantyOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Notification Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'cart' | 'wishlist' | 'info'>('cart');

  const showToast = (msg: string, type: 'cart' | 'wishlist' | 'info' = 'cart') => {
    setToastMessage(msg);
    setToastType(type);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add to Cart
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

  // Update Cart Quantity
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

  // Remove from Cart
  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Produk dihapus dari keranjang', 'info');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Toggle Wishlist
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`${product.name} dihapus dari favorit`, 'wishlist');
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`${product.name} ditambahkan ke favorit! ❤️`, 'wishlist');
        return [...prev, product];
      }
    });
  };

  // Filtered products when searching or brand is selected
  const filteredSearchProducts = useMemo(() => {
    if (!searchQuery.trim() && !selectedBrand) return null;

    return ALL_PRODUCTS.filter((prod) => {
      const matchesSearch = searchQuery.trim() === '' || 
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.brand.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesBrand = !selectedBrand || 
        prod.brand.toLowerCase() === selectedBrand.toLowerCase();

      return matchesSearch && matchesBrand;
    });
  }, [searchQuery, selectedBrand]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Sticky Header */}
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenWarranty={() => setIsWarrantyOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* If Active Search or Brand Filter is set, show focused results */}
        {filteredSearchProducts !== null ? (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-[#0066FF]" />
                  <h2 className="text-xl font-bold text-gray-900">
                    Hasil Pencarian: {searchQuery ? `"${searchQuery}"` : ''} {selectedBrand ? `(Brand: ${selectedBrand})` : ''}
                  </h2>
                  <span className="text-xs bg-blue-50 text-[#0066FF] font-bold px-2 py-0.5 rounded-full">
                    {filteredSearchProducts.length} Produk Ditemukan
                  </span>
                </div>

                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedBrand(null);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  Reset Filter
                </button>
              </div>

              {filteredSearchProducts.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-base font-semibold text-gray-800">
                    Tidak ditemukan produk yang cocok
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Coba kata kunci lain atau pilih merek smartphone yang tersedia.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mt-6">
                  {filteredSearchProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isWishlisted={wishlist.some((p) => p.id === product.id)}
                      onToggleWishlist={handleToggleWishlist}
                      onAddToCart={handleAddToCart}
                      onQuickView={setQuickViewProduct}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        ) : (
          <>
            {/* 1. Hero Slider Banner */}
            <HeroSlider onShopClick={() => scrollToSection('promo')} />

            {/* 2. Trust Badges Bar */}
            <TrustBadges />

            {/* 3. Section Produk Promo */}
            <section id="promo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5">
              <SectionHeader
                title="Produk Promo"
                hasCountdown={true}
                onViewAll={() => scrollToSection('promo')}
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                {PROMO_PRODUCTS.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlist.some((p) => p.id === product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onAddToCart={handleAddToCart}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
            </section>

            {/* 4. Section Produk Terlaris */}
            <section id="terlaris" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5">
              <SectionHeader
                title="Produk Terlaris"
                onViewAll={() => scrollToSection('terlaris')}
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                {TERLARIS_PRODUCTS.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlist.some((p) => p.id === product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onAddToCart={handleAddToCart}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
            </section>

            {/* 5. Section Produk Trending */}
            <section id="trending" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5">
              <SectionHeader
                title="Produk Trending"
                onViewAll={() => scrollToSection('trending')}
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                {TRENDING_PRODUCTS.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlist.some((p) => p.id === product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onAddToCart={handleAddToCart}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
            </section>

            {/* 6. Section Produk Terbaru */}
            <section id="terbaru" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5">
              <SectionHeader
                title="Produk Terbaru"
                onViewAll={() => scrollToSection('terbaru')}
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                {TERBARU_PRODUCTS.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlist.some((p) => p.id === product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onAddToCart={handleAddToCart}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
            </section>

            {/* 7. Section Merek Terpopuler */}
            <BrandsSection
              selectedBrand={selectedBrand}
              onSelectBrand={setSelectedBrand}
            />

            {/* 8. Extra Promo Trade-In & Garansi Banner */}
            <section id="tentang" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="bg-gradient-to-r from-blue-900 to-[#0055ff] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
                <div className="space-y-2 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-amber-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    PROGRAM RESMI MARSHALL PHONE CELL
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black">
                    Punya Smartphone Lama? Tukar Tambah dengan Nilai Tertinggi!
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
                    Cek estimasi harga HP lamamu dalam 3 menit. Dapatkan voucher tambahan hingga Rp 1.500.000 untuk pembelian smartphone impianmu.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setIsWarrantyOpen(true)}
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
                  >
                    Cek Garansi IMEI
                  </button>
                  <a
                    href="https://wa.me/6281288889999"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-gray-950 font-black text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Konsultasi Trade-In
                  </a>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewProduct ? wishlist.some((p) => p.id === quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Warranty IMEI Check Modal */}
      <WarrantyCheckModal
        isOpen={isWarrantyOpen}
        onClose={() => setIsWarrantyOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <Toast message={toastMessage} type={toastType} />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
