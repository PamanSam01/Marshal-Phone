import React from 'react';
import { ShieldCheck, Truck, Percent, Headphones } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      id: 'original',
      icon: ShieldCheck,
      title: '100% Original',
      subtitle: 'Produk resmi & bergaransi',
    },
    {
      id: 'shipping',
      icon: Truck,
      title: 'Gratis Pengiriman',
      subtitle: 'Min. pembelian tertentu',
    },
    {
      id: 'discount',
      icon: Percent,
      title: 'Pasti Diskon',
      subtitle: 'Promo terbaik setiap hari',
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'Layanan 24 Jam',
      subtitle: 'Siap membantu kapan saja',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div className="bg-white border border-gray-200/90 rounded-xl p-3.5 sm:p-5 shadow-xs">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={badge.id} 
                className={`flex items-center gap-2.5 sm:gap-3.5 p-1 sm:p-0 ${
                  idx > 0 ? 'lg:border-l lg:border-gray-100 lg:pl-6' : ''
                } group`}
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300">
                  <Icon className="w-4.5 h-4.5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight leading-snug truncate">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-normal leading-tight mt-0.5 line-clamp-1">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
