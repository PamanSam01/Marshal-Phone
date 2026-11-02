'use client';

import React from 'react';
import { POPULAR_BRANDS } from '@/data/products';

interface BrandsSectionProps {
  selectedBrand: string | null;
  onSelectBrand: (brand: string | null) => void;
}

export default function BrandsSection({
  selectedBrand,
  onSelectBrand
}: BrandsSectionProps) {
  return (
    <section id="merek" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            Merek Terpopuler
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Pilihan brand smartphone resmi paling dicari konsumen Indonesia
          </p>
        </div>

        {selectedBrand && (
          <button
            onClick={() => onSelectBrand(null)}
            className="text-xs font-semibold text-[#0066FF] hover:underline bg-blue-50 px-2.5 py-1 rounded-md cursor-pointer"
          >
            Tampilkan Semua Brand
          </button>
        )}
      </div>

      {/* Brand Grid / Horizontal Scroll */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {POPULAR_BRANDS.map((brand) => {
          const isSelected = selectedBrand === brand.name;
          return (
            <button
              key={brand.id}
              onClick={() => onSelectBrand(isSelected ? null : brand.name)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                isSelected
                  ? 'bg-blue-50/80 border-[#0066FF] shadow-xs ring-2 ring-[#0066FF]/20'
                  : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-sm tracking-wider text-gray-900 group-hover:text-[#0066FF] transition-colors">
                  {brand.logoText}
                </span>
                <span className="text-[10px] font-bold text-gray-400 bg-gray-100 group-hover:bg-blue-100 group-hover:text-[#0066FF] px-1.5 py-0.5 rounded transition-colors">
                  {brand.count} Seri
                </span>
              </div>
              <div className="mt-2">
                <p className="text-xs font-medium text-gray-500 line-clamp-1">
                  {brand.tagline}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
