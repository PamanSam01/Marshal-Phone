'use client';

import React, { useState } from 'react';
import { 
  Smartphone, 
  Search, 
  ShoppingCart, 
  User, 
  Heart, 
  Menu, 
  X, 
  ShieldCheck, 
  PhoneCall, 
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenWarranty: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export default function Header({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenWarranty,
  searchQuery,
  onSearchChange,
  activeNav,
  setActiveNav
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'beranda', label: 'Beranda', href: '#beranda' },
    { id: 'kategori', label: 'Kategori', href: '#merek' },
    { id: 'promo', label: 'Promo', href: '#promo', badge: 'HOT' },
    { id: 'garansi', label: 'Cek Garansi', isAction: true },
    { id: 'blog', label: 'Blog', href: '#tentang' },
    { id: 'kontak', label: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.isAction) {
      onOpenWarranty();
    } else {
      setActiveNav(link.id);
      const el = document.querySelector(link.href || '#');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-gray-100">
      {/* Top Utility Bar (Desktop & Wide Tablets) */}
      <div className="bg-[#0047b3] text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              Flash Sale Hari Ini! Diskon Hingga 40% & Bebas Ongkir se-Indonesia
            </span>
            <span className="text-blue-200">|</span>
            <span className="flex items-center gap-1 text-blue-100">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              100% Produk Resmi SEIN / TAM / iBox
            </span>
          </div>
          <div className="flex items-center gap-4 text-blue-100 shrink-0">
            <button 
              onClick={onOpenWarranty} 
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Cek IMEI & Garansi
            </button>
            <span>|</span>
            <a 
              href="https://wa.me/6282221234596" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              CS WhatsApp: 0822-2123-4596
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          
          {/* Logo & Brand: Marshall Phone Cell */}
          <div className="flex items-center gap-4 lg:gap-8 min-w-0">
            <a 
              href="#beranda" 
              className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer focus:outline-none shrink-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#0066FF] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center">
                  <span className="text-base sm:text-xl lg:text-2xl font-black tracking-tight text-gray-900 truncate">
                    Marshall<span className="text-[#0066FF]"> Phone Cell</span>
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-gray-500 -mt-0.5 sm:-mt-1 font-medium tracking-wider hidden xs:inline-block">
                  SENTRA GADGET RESMI
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeNav === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link)}
                    className={`relative px-2.5 xl:px-3 py-2 text-sm font-semibold transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                      isActive 
                        ? 'text-[#0066FF]' 
                        : 'text-gray-600 hover:text-[#0066FF]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] bg-red-500 text-white font-bold px-1.5 py-0.2 rounded-full uppercase">
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.75 bg-[#0066FF] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Search Bar (Tablet landscape and desktop) */}
          <div className="flex-1 max-w-xs md:max-w-sm lg:max-w-md hidden md:block">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Cari smartphone, aksesoris, dll..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-3.5 pr-11 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] transition-all"
              />
              <button 
                type="button"
                className="absolute right-1 top-1 bottom-1 px-3 bg-[#0066FF] hover:bg-[#0052cc] text-white rounded-md flex items-center justify-center transition-colors cursor-pointer"
                title="Cari"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* User Actions: Wishlist, Account, Cart */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="p-1.5 sm:p-2 text-gray-600 hover:text-[#0066FF] hover:bg-blue-50 rounded-lg transition-colors relative cursor-pointer"
              title="Favorit Saya"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 sm:w-5 sm:h-5 bg-rose-500 text-white text-[10px] sm:text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Account Profile (hidden on small mobile) */}
            <button 
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-2 text-gray-700 hover:text-[#0066FF] hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
              title="Akun Saya"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
              <span className="text-xs sm:text-sm font-semibold">Akun</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-2 bg-blue-50 sm:bg-[#0066FF] hover:bg-[#0052cc] text-[#0066FF] sm:text-white rounded-lg transition-all shadow-xs cursor-pointer group"
              title="Keranjang Belanja"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8] text-[#0066FF] sm:text-white group-hover:scale-105 transition-transform" />
                <span className="absolute -top-2 -right-2.5 min-w-[18px] sm:min-w-[20px] h-4.5 sm:h-5 px-1 bg-amber-400 text-gray-950 text-[10px] sm:text-[11px] font-extrabold rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              </div>
              <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider pl-1">
                Keranjang
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (Only on phones & small tablets) */}
        <div className="pb-3 md:hidden">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Cari smartphone, aksesoris, dll..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-3.5 pr-11 py-2 bg-gray-50 border border-gray-300 rounded-lg text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF]"
            />
            <button 
              type="button"
              className="absolute right-1 top-1 bottom-1 px-3 bg-[#0066FF] text-white rounded-md flex items-center justify-center"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-[#0066FF] rounded-lg transition-colors text-left"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] bg-red-500 text-white font-bold px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
              <button 
                onClick={onOpenWarranty}
                className="w-full py-2.5 bg-blue-50 text-[#0066FF] text-sm font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                Cek Status Garansi Resmi
              </button>
              <a 
                href="https://wa.me/6281288889999" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Hubungi WhatsApp Marshall Phone Cell
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
