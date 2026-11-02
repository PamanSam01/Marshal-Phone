'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SharedLayout from '@/components/SharedLayout';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';

import { ALL_PRODUCTS } from '@/data/products';
import { getBrandConfig } from '@/data/brands';
import { Product } from '@/types/product';
import { ArrowLeft, Smartphone, Search, X, ShoppingCart } from 'lucide-react';

interface BrandPageClientProps {
  slug: string;
}

export default function BrandPageClient({ slug }: BrandPageClientProps) {
  const config = getBrandConfig(slug);
  if (!config) return notFound();

  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<{ id: string; qty: number }[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      return exists ? prev.filter((p) => p.id !== product.id) : [...prev, product];
    });
  };

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      return exists
        ? prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { id: product.id, qty: 1 }];
    });
  };

  const brandProducts = useMemo(() => ALL_PRODUCTS.filter(config.filter), [config]);

  const displayedProducts = useMemo(() => {
    if (!searchQuery.trim()) return brandProducts;
    const q = searchQuery.toLowerCase();
    return brandProducts.filter(
      (p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
    );
  }, [brandProducts, searchQuery]);

  return (
    <SharedLayout activeNav="product">
      {/* Brand Hero Banner */}
      <div
        className="border-b border-gray-200 py-8 sm:py-10"
        style={{ background: `linear-gradient(135deg, ${config.accentColor}12 0%, #ffffff 60%)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 mb-5 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Kembali ke Katalog Merek
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: config.accentColor }}>
                Marshall Phone Cell — Katalog Resmi
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
                {config.displayName}
              </h1>
              <p className="text-sm text-gray-500 mt-1.5">{config.subTitle}</p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              {cart.length > 0 && (
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 text-amber-800 rounded-xl text-xs font-bold">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  {cart.reduce((s, i) => s + i.qty, 0)} item dipilih
                </span>
              )}
              <span
                className="px-4 py-2 rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: config.accentColor }}
              >
                {brandProducts.length} Unit Tersedia
              </span>
            </div>
          </div>

          {/* Search bar */}
          <div className="mt-5 relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder={`Cari produk ${config.displayName.replace('Katalog ', '')}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {displayedProducts.length === 0 ? (
          <div className="py-20 text-center">
            <Smartphone className="w-14 h-14 text-gray-300 mx-auto mb-3" />
            <p className="text-lg font-bold text-gray-700">
              {searchQuery ? 'Produk tidak ditemukan' : 'Belum ada produk untuk merek ini'}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {searchQuery
                ? `Coba kata kunci lain selain "${searchQuery}"`
                : 'Stok sedang diperbarui. Hubungi kami untuk info ketersediaan.'}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-colors cursor-pointer"
                style={{ backgroundColor: config.accentColor }}
              >
                Tampilkan Semua Produk
              </button>
            )}
          </div>
        ) : (
          <>
            {searchQuery && (
              <p className="text-sm text-gray-500 mb-4">
                Menampilkan{' '}
                <span className="font-bold text-gray-800">{displayedProducts.length}</span> hasil
                untuk &quot;{searchQuery}&quot;
              </p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlist.some((p) => p.id === product.id)}
                  onToggleWishlist={handleToggleWishlist}
                  onAddToCart={handleAddToCart}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          </>
        )}

        {/* WhatsApp CTA */}
        <div
          className="mt-10 p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          style={{ background: `${config.accentColor}08`, borderColor: `${config.accentColor}30` }}
        >
          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Tidak menemukan yang kamu cari? Chat langsung ke Admin!
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Cek stok warna, varian memori, program tukar tambah &amp; harga spesial via WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/6282221234596"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition-colors shrink-0 cursor-pointer"
          >
            💬 Chat WhatsApp: 0822-2123-4596
          </a>
        </div>
      </div>

      {/* Modal Cek Spek Produk */}
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
    </SharedLayout>
  );
}
