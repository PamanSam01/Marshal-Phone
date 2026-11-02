'use client';

import React from 'react';
import { Wrench, BatteryCharging, ShieldCheck, RefreshCw, Smartphone, CreditCard, CheckCircle2 } from 'lucide-react';

export default function ServiceSection() {
  const services = [
    {
      icon: Wrench,
      title: 'Servis & Ganti Sparepart LCD/Baterai',
      desc: 'Perbaikan layar pecah, ganti baterai drop, konektor charger rusak dengan komponen berkualitas dan bergaransi.',
      badge: 'Bisa Ditunggu'
    },
    {
      icon: ShieldCheck,
      title: 'Pengecekan IMEI & Garansi Resmi',
      desc: 'Bebas biaya cek keaslian IMEI Kemenperin & status garansi resmi distributor distributor (SEIN, TAM, iBox, Digimap).',
      badge: 'Gratis 100%'
    },
    {
      icon: RefreshCw,
      title: 'Trade-In / Tukar Tambah HP Lama',
      desc: 'Upgrade smartphone lama Anda ke model terbaru dengan taksiran harga wajar, transparan, dan proses cepat.',
      badge: 'Harga Terbaik'
    },
    {
      icon: Smartphone,
      title: 'Pindah Data & Setup HP Baru',
      desc: 'Bantuan transfer kontak, foto, chat WhatsApp, dan aplikasi dari handphone lama ke handphone baru tanpa ribet.',
      badge: 'Free Setup'
    },
    {
      icon: BatteryCharging,
      title: 'Pembersihan & Perawatan Gadget',
      desc: 'Pembersihan speaker, port charger berdebu, dan pasang tempered glass / hydrogel presisi dengan mesin pemotong laser.',
      badge: 'Presisi'
    },
    {
      icon: CreditCard,
      title: 'Simulasi Cicilan 0% & PayLater',
      desc: 'Fasilitas cicilan tanpa kartu kredit melalui Kredivo, Akulaku, Home Credit, Indodana, dan bank partner resmi.',
      badge: 'Bunga Ringan'
    }
  ];

  return (
    <section id="service" className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            Layanan & Servis Resmi
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Our Services & Care Center
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Dukungan purna jual dan layanan teknisi profesional untuk memastikan smartphone Anda selalu dalam performa maksimal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 sm:p-6 bg-gray-50/80 rounded-2xl border border-gray-200 hover:border-[#0066FF] hover:bg-white hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center group-hover:bg-[#0066FF] group-hover:text-white transition-colors shadow-2xs">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100/70 text-blue-800">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0066FF] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-xs text-[#0066FF] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Dikerjakan Teknisi Berpengalaman</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link to Booking */}
        <div className="mt-10 text-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Wrench className="w-4 h-4" />
            <span>Booking Jadwal Servis / Konsultasi Sekarang</span>
          </a>
        </div>

      </div>
    </section>
  );
}
