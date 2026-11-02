'use client';

import React from 'react';
import { Award, ShieldCheck, Users, Store, HeartHandshake } from 'lucide-react';

export default function AboutUsSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% Garansi Resmi Distributor',
      desc: 'Setiap produk yang kami jual memiliki stiker distributor resmi (SEIN, TAM, iBox, Digimap) dengan IMEI yang terdaftar sah di Kemenperin RI.'
    },
    {
      icon: Award,
      title: 'Jaminan Harga & Promo Terbaik',
      desc: 'Kami berkomitmen memberikan penawaran harga paling kompetitif di Tasikmalaya dan Priangan Timur, didukung promo cashback dan bonus aksesoris.'
    },
    {
      icon: Users,
      title: 'Teknisi & Tim Berpengalaman',
      desc: 'Dukungan staf yang ramah, paham seluk-beluk spesifikasi gadget, serta teknisi handal yang siap membantu kebutuhan purna jual Anda.'
    },
    {
      icon: HeartHandshake,
      title: 'Layanan Terpercaya Sejak Lama',
      desc: 'Menjadi mitra gadget terpercaya bagi ribuan pelanggan setia, mulai dari pelajar, profesional, hingga keluarga di Tasikmalaya.'
    }
  ];

  return (
    <section id="about-us" className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
            <Store className="w-3.5 h-3.5" />
            Tentang Marshall Phone Cell
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            About Us — Profil & Komitmen Kami
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Pusat penjualan smartphone, tablet, dan aksesori bergaransi resmi terpercaya yang berlokasi strategis di pusat kota Tasikmalaya.
          </p>
        </div>

        {/* Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
              Melayani Kebutuhan Teknologi & Komunikasi Anda dengan Integritas Penuh
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              <strong>Marshall Phone Cell</strong> hadir di <strong>Jl. Hz Mustofa No 122 Yudanegara Cihideung, Kota Tasikmalaya</strong> sebagai solusi one-stop gadget terpercaya. Kami memahami bahwa smartphone bukan sekadar alat komunikasi, melainkan penunjang utama produktivitas, bisnis, dan hiburan Anda.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Karena itu, kami menolak segala bentuk barang rekondisi atau black market (BM). Semua unit smartphone (Apple, Samsung, Xiaomi, OPPO, vivo, realme, Infinix, TECNO, itel) yang keluar dari toko kami dipastikan baru, segel asli pabrik, dan aman digunakan tanpa risiko blokir IMEI.
            </p>

            {/* Quick stats pills */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-blue-50 rounded-xl text-center border border-blue-100">
                <span className="block text-lg sm:text-2xl font-black text-[#0066FF]">10K+</span>
                <span className="text-[11px] font-medium text-gray-600">Pelanggan Puas</span>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl text-center border border-emerald-100">
                <span className="block text-lg sm:text-2xl font-black text-emerald-600">100%</span>
                <span className="text-[11px] font-medium text-gray-600">Resmi Distributor</span>
              </div>
              <div className="p-3 bg-amber-50 rounded-xl text-center border border-amber-100">
                <span className="block text-lg sm:text-2xl font-black text-amber-600">15+</span>
                <span className="text-[11px] font-medium text-gray-600">Merek Resmi</span>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="p-4 rounded-xl border border-gray-200 bg-gray-50/70 hover:bg-white hover:border-[#0066FF] transition-all flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
