'use client';

import React from 'react';
import Link from 'next/link';
import SharedLayout from '@/components/SharedLayout';
import {
  ShieldCheck,
  Star,
  Wrench,
  ChevronRight,
  Smartphone,
  Award,
  Users,
  TrendingUp,
  MapPin,
  Clock,
} from 'lucide-react';
import SocialAndMapSection from '@/components/SocialAndMapSection';

const stats = [
  { icon: Users, value: '10K+', label: 'Pelanggan Puas' },
  { icon: ShieldCheck, value: '100%', label: 'Resmi Distributor' },
  { icon: Award, value: '15+', label: 'Merek Resmi' },
  { icon: TrendingUp, value: '8 Thn', label: 'Pengalaman' },
];

const highlights = [
  {
    icon: ShieldCheck,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    title: '100% Garansi Resmi Distributor',
    desc: 'Semua produk kami memiliki garansi distributor resmi (SEIN, TAM, iBox, Digimap) dengan IMEI terdaftar di Kemenperin RI.',
  },
  {
    icon: Star,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    title: 'Harga Terbaik & Promo Menarik',
    desc: 'Kami berkomitmen memberikan harga paling kompetitif di Tasikmalaya. Flash sale, cashback, dan bonus aksesori setiap hari.',
  },
  {
    icon: Wrench,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    title: 'Teknisi & Tim Berpengalaman',
    desc: 'Dukungan staf yang ramah, paham betul spesifikasi gadget, serta teknisi handal yang siap membantu kebutuhan purna jual.',
  },
  {
    icon: Award,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    title: 'Layanan Terpercaya Sejak Lama',
    desc: 'Menjadi mitra gadget terpercaya bagi ribuan pelanggan sehingga, mulai dari pelajar, profesional, hingga keluarga di Tasikmalaya.',
  },
];

const quickLinks = [
  { href: '/product', label: 'Lihat Katalog Produk', icon: Smartphone, color: 'bg-[#0066FF]' },
  { href: '/service', label: 'Layanan Servis HP', icon: Wrench, color: 'bg-emerald-600' },
  { href: '/booking', label: 'Booking Servis Online', icon: Clock, color: 'bg-amber-500' },
  { href: '#contact-us', label: 'Hubungi & Lokasi Kami', icon: MapPin, color: 'bg-red-500' },
];

export default function HomePageClient() {
  return (
    <SharedLayout activeNav="home">
      {/* Hero — Beranda Toko */}
      <section className="relative text-white py-16 sm:py-24 overflow-hidden">
        {/* Background Image from Google Maps */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/images/store-banner.jpg')" }}
        />
        {/* Neutral Dark Overlay (No blue tint) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-5 border border-white/20">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-300" /> Terpercaya Sejak 2016 · Tasikmalaya
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-tight drop-shadow-md">
                Marshall <span className="text-yellow-300">Phone Cell</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed drop-shadow-sm font-medium">
                Sentra penjualan smartphone, tablet, dan aksesori bergaransi resmi terpercaya di
                pusat kota Tasikmalaya. Produk 100% original, harga transparan, layanan ramah.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href="/product"
                  className="px-7 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black rounded-xl text-sm transition-all shadow-lg hover:shadow-yellow-400/40 hover:scale-105 text-center"
                >
                  🛍️ Lihat Katalog Produk
                </Link>
                <a
                  href="https://wa.me/6282221234596"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl text-sm border border-white/30 backdrop-blur-md transition-all hover:scale-105 text-center"
                >
                  💬 Chat WhatsApp Admin
                </a>
              </div>
            </div>

            {/* Right: Mascot with Floating Speech Bubble */}
            <div className="relative shrink-0 flex flex-col items-center group pt-4 md:pt-0">
              {/* Speech bubble */}
              <div className="animate-bounce mb-3 px-4 py-2 bg-white text-gray-900 text-xs sm:text-sm font-bold rounded-2xl shadow-xl relative border border-gray-100 flex items-center gap-2">
                <span>Halo! Selamat Datang di Marshall 👋</span>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white" />
              </div>

              {/* Mascot image */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/images/mascot.png"
                  alt="Maskot Sheriff Marshall Phone Cell"
                  className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-100">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center justify-center py-6 px-4 text-center">
                <Icon className="w-6 h-6 text-[#0066FF] mb-2" />
                <span className="text-2xl sm:text-3xl font-black text-gray-900">{value}</span>
                <span className="text-xs text-gray-500 font-medium mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-black text-gray-900 mb-5 text-center">Menu Cepat</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {quickLinks.map(({ href, label, icon: Icon, color }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:scale-[1.02] transition-all text-center group"
              >
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800 leading-tight">{label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0066FF] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Highlights */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">Tentang Kami</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
              Mengapa Pilih Marshall Phone Cell?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map(({ icon: Icon, color, bg, title, desc }) => (
              <div key={title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF] text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors"
            >
              Selengkapnya Tentang Kami <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us — Social & Map */}
      <SocialAndMapSection />
    </SharedLayout>
  );
}
