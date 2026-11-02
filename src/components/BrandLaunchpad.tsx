'use client';

import React from 'react';
import Link from 'next/link';
import { Tablet } from 'lucide-react';

interface BrandTile {
  slug: string;         // URL slug, e.g. "/oppo"
  label: string;        // Aria label
  borderColor: string;
  hoverBorder: string;
  customIcon: React.ReactNode;
}

const tiles: BrandTile[] = [
  {
    slug: 'oppo',
    label: 'Lihat katalog OPPO',
    borderColor: 'border-[#008b47]',
    hoverBorder: 'hover:border-[#00aa55]',
    customIcon: (
      <span className="text-2xl sm:text-3xl font-bold tracking-tight lowercase font-sans text-[#008b47]">
        oppo
      </span>
    ),
  },
  {
    slug: 'vivo',
    label: 'Lihat katalog vivo',
    borderColor: 'border-[#415fff]',
    hoverBorder: 'hover:border-[#6080ff]',
    customIcon: (
      <span className="text-2xl sm:text-3xl font-bold tracking-wider lowercase font-sans text-[#415fff]">
        vivo
      </span>
    ),
  },
  {
    slug: 'samsung-a',
    label: 'Lihat katalog Samsung Galaxy A Series',
    borderColor: 'border-[#0c2340]',
    hoverBorder: 'hover:border-blue-700',
    customIcon: (
      <div className="flex flex-col items-center leading-tight">
        <span className="text-lg sm:text-xl font-black tracking-widest text-[#0c2340]">SAMSUNG</span>
        <span className="text-[11px] sm:text-xs font-semibold text-blue-900 mt-0.5">Galaxy A Series</span>
      </div>
    ),
  },
  {
    slug: 'samsung-s',
    label: 'Lihat katalog Samsung Galaxy S & Z Series',
    borderColor: 'border-[#0c2340]',
    hoverBorder: 'hover:border-blue-700',
    customIcon: (
      <div className="flex flex-col items-center leading-tight">
        <span className="text-lg sm:text-xl font-black tracking-widest text-[#0c2340]">SAMSUNG</span>
        <span className="text-[11px] sm:text-xs font-semibold text-blue-900 mt-0.5">Galaxy S & Z Series</span>
      </div>
    ),
  },
  {
    slug: 'xiaomi',
    label: 'Lihat katalog Xiaomi & Redmi',
    borderColor: 'border-[#ff6700]',
    hoverBorder: 'hover:border-[#ff8533]',
    customIcon: (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#ff6700] flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-xs">
        mi
      </div>
    ),
  },
  {
    slug: 'realme',
    label: 'Lihat katalog realme',
    borderColor: 'border-[#ffc915]',
    hoverBorder: 'hover:border-amber-400',
    customIcon: (
      <span className="text-xl sm:text-2xl font-bold tracking-tight lowercase font-sans text-gray-900">
        realme
      </span>
    ),
  },
  {
    slug: 'infinix',
    label: 'Lihat katalog Infinix',
    borderColor: 'border-gray-900',
    hoverBorder: 'hover:border-black',
    customIcon: (
      <span className="text-xl sm:text-2xl font-black tracking-tight text-gray-900">
        Infinix
      </span>
    ),
  },
  {
    slug: 'apple',
    label: 'Lihat katalog Apple iPhone',
    borderColor: 'border-gray-900',
    hoverBorder: 'hover:border-black',
    customIcon: (
      <div className="flex flex-col items-center">
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-gray-900" viewBox="0 0 170 170">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14.01-6.1-9.48-10.9-20.64-14.41-33.48-3.51-12.84-5.27-24.97-5.27-36.4 0-16.12 4.11-29.6 12.33-40.43 8.21-10.83 18.66-16.37 31.33-16.63 4.58 0 10.04 1.25 16.39 3.76 6.35 2.51 10.26 3.82 11.73 3.93 1.83-.22 6.03-1.63 12.61-4.23 6.58-2.6 12.08-3.75 16.5-3.46 12.74.88 23.01 5.95 30.81 15.22-11.08 6.74-16.51 16.12-16.3 28.14.22 9.57 3.82 17.57 10.8 24 6.98 6.43 15.17 10.15 24.58 11.16-2.07 6.1-4.42 12.09-7.05 17.97zM119.22 31.84c0-7.39 2.67-14.35 8.01-20.89 5.34-6.54 11.89-10.51 19.64-11.91 1.09 7.83-.98 15.24-6.21 22.23-5.23 6.98-11.96 11.01-20.2 12.09-.22-.54-.62-.97-.84-1.52-.27 0-.4-.01-.4 0z" />
        </svg>
        <span className="text-sm sm:text-base font-bold text-gray-900 mt-1">iPhone</span>
      </div>
    ),
  },
  {
    slug: 'tecno',
    label: 'Lihat katalog TECNO',
    borderColor: 'border-[#0085ff]',
    hoverBorder: 'hover:border-blue-500',
    customIcon: (
      <span className="text-xl sm:text-2xl font-black tracking-widest text-[#0085ff]">
        TECNO
      </span>
    ),
  },
  {
    slug: 'poco-itel',
    label: 'Lihat katalog POCO & itel',
    borderColor: 'border-[#facc15]',
    hoverBorder: 'hover:border-amber-400',
    customIcon: (
      <div className="flex flex-col items-center">
        <span className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">POCO</span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-600 text-white mt-0.5 italic">
          itel
        </span>
      </div>
    ),
  },
  {
    slug: 'pixel-oneplus',
    label: 'Lihat katalog Google Pixel & OnePlus',
    borderColor: 'border-gray-800',
    hoverBorder: 'hover:border-black',
    customIcon: (
      <div className="flex flex-col items-center text-center">
        <span className="text-sm sm:text-base font-bold text-gray-800">Google Pixel</span>
        <span className="text-[11px] sm:text-xs font-semibold text-red-600 font-mono mt-0.5">1+ ONEPLUS</span>
      </div>
    ),
  },
  {
    slug: 'tablet',
    label: 'Lihat katalog Tablet & iPad',
    borderColor: 'border-gray-900',
    hoverBorder: 'hover:border-black',
    customIcon: (
      <div className="flex flex-col items-center">
        <Tablet className="w-8 h-8 sm:w-9 sm:h-9 text-gray-900 stroke-[1.8]" />
        <span className="text-xs sm:text-sm font-bold text-gray-900 mt-1 uppercase tracking-wider">TABLET</span>
      </div>
    ),
  },
];

export default function BrandLaunchpad() {
  return (
    <section className="py-6 sm:py-8 bg-gray-50/60 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Grid: 3 columns mobile → 4 on tablet+ */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-5">
          {tiles.map((tile) => (
            <Link
              key={tile.slug}
              href={`/${tile.slug}`}
              aria-label={tile.label}
              className={`aspect-square w-full bg-white rounded-2xl sm:rounded-3xl border-[2.5px] sm:border-[3px] ${tile.borderColor} ${tile.hoverBorder} p-2 sm:p-4 flex flex-col items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md hover:scale-[1.03] active:scale-95`}
            >
              {tile.customIcon}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
