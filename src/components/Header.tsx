'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Smartphone,
  Menu,
  X,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';

interface HeaderProps {
  onOpenWarranty: () => void;
  // kept for backward compat
  cartCount?: number;
  wishlistCount?: number;
  onOpenCart?: () => void;
  onOpenWishlist?: () => void;
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
  activeNav?: string;
  setActiveNav?: (nav: string) => void;
}

const navLinks = [
  { id: 'home',       label: 'Home',       href: '/'        },
  { id: 'product',    label: 'Product',    href: '/product' },
  { id: 'about',      label: 'About Us',   href: '/about'   },
  { id: 'service',    label: 'Service',    href: '/service' },
  { id: 'booking',    label: 'Booking',    href: '/booking', badge: 'NEW' },
];

export default function Header({
  onOpenWarranty,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  /** Mark a link active if the pathname starts with its href
   *  (exact match for '/', prefix for others) */
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-gray-100 transition-colors duration-200">
      {/* Main Sticky Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">

          {/* Logo */}
          <div className="flex items-center gap-4 lg:gap-8 min-w-0">
            <Link
              href="/"
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
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`relative px-2.5 xl:px-3 py-2 text-sm font-semibold transition-colors flex items-center gap-1 whitespace-nowrap ${
                      active
                        ? 'text-[#0066FF]'
                        : 'text-gray-600 hover:text-[#0066FF]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] bg-red-500 text-white font-bold px-1.5 py-0.5 rounded-full uppercase">
                        {link.badge}
                      </span>
                    )}
                    {active && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0066FF] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 shadow-xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'bg-blue-50 text-[#0066FF]'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-[#0066FF]'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] bg-red-500 text-white font-bold px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
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
                href="https://wa.me/6282221234596"
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
