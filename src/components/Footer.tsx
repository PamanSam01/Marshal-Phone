import React from 'react';
import { Smartphone, PhoneCall, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const couriers = [
    'JNE Express', 'SiCepat', 'J&T Express', 'Anteraja', 'GoSend', 'GrabExpress'
  ];

  const paymentPartners = [
    { name: 'BCA', src: '/payments/bca.png' },
    { name: 'BNI', src: '/payments/bni.png' },
    { name: 'BRI', src: '/payments/bri.png' },
    { name: 'Bank Mandiri', src: '/payments/mandiri.png' },
    { name: 'Bank BJB', src: '/payments/bank-bjb.png' },
    { name: 'CIMB Niaga', src: '/payments/cimb-niaga.png' },
    { name: 'Kredivo', src: '/payments/kredivo.png' },
    { name: 'Akulaku', src: '/payments/akulaku.png' },
    { name: 'Indodana', src: '/payments/indodana.png' },
    { name: 'Blibli InStore', src: '/payments/blibli-instore.png' },
    { name: 'SPayLater', src: '/payments/spaylater.png' },
    { name: 'Avanto', src: '/payments/avanto.png' },
    { name: 'Finance+', src: '/payments/finance-plus.png' },
    { name: 'KreditPlus', src: '/payments/kreditplus.png' },
    { name: 'Home Credit', src: '/payments/home-credit.png' },
    { name: 'Spektra', src: '/payments/spektra.png' },
    { name: 'Vast Finance', src: '/payments/vast-finance.png' },
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      handle: '0822-2123-4596',
      href: 'https://wa.me/6282221234596',
      bgHover: 'hover:bg-emerald-500 hover:text-white hover:border-emerald-500',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      handle: '@marshallphonecell',
      href: 'https://instagram.com/marshallphonecell',
      bgHover: 'hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      handle: '@marshallphonecell',
      href: 'https://tiktok.com/@marshallphonecell',
      bgHover: 'hover:bg-black hover:text-white hover:border-black',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.043.868.125V9.33a6.33 6.33 0 0 0-.868-.06 6.338 6.338 0 0 0-6.33 6.34 6.338 6.338 0 0 0 6.33 6.34 6.335 6.335 0 0 0 6.34-6.34V8.71a8.19 8.19 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.14z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      handle: 'Marshall Phone Cell',
      href: 'https://facebook.com/marshallphonecell',
      bgHover: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  return (
    <footer id="kontak" className="bg-white border-t border-gray-200 mt-12 text-gray-700">
      
      {/* WhatsApp Help Banner */}
      <div className="bg-gradient-to-r from-[#0055ff] to-[#0066FF] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold">Butuh Rekomendasi atau Konsultasi Smartphone?</h4>
              <p className="text-xs sm:text-sm text-blue-100">Tim spesialis Marshall Phone Cell siap membantu memilih handphone terbaik sesuai budget Anda.</p>
            </div>
          </div>
          <a
            href="https://wa.me/6282221234596"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 bg-white text-[#0066FF] hover:bg-blue-50 font-bold text-xs sm:text-sm rounded-full shadow-md transition-all shrink-0 cursor-pointer flex items-center gap-2"
          >
            <span>Chat WhatsApp CS: 0822-2123-4596 (24 Jam)</span>
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* 1. Payment Methods & Shipping Partners (Top Section) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-gray-100">
          
          {/* Individual Payment Partners Badges */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Metode Pembayaran Resmi
              </span>
              <span className="text-[11px] text-gray-400 font-medium hidden sm:inline">
                Bank Transfer, PayLater & Cicilan Resmi
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 sm:gap-2.5 items-center">
              {paymentPartners.map((partner) => (
                <div 
                  key={partner.name}
                  title={partner.name}
                  className="bg-white border border-gray-200 hover:border-[#0066FF] hover:shadow-xs rounded-lg px-2.5 py-1.5 h-10 sm:h-11 flex items-center justify-center transition-all duration-200 group cursor-default"
                >
                  <img 
                    src={partner.src} 
                    alt={partner.name} 
                    className="max-h-5 sm:max-h-6 max-w-[80px] sm:max-w-[95px] w-auto h-auto object-contain transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Logistics */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
              Jasa Pengiriman Terpercaya
            </span>
            <div className="flex flex-wrap gap-1.5">
              {couriers.map((courier) => (
                <span 
                  key={courier}
                  className="px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-[11px] font-semibold text-gray-700 hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
                >
                  {courier}
                </span>
              ))}
            </div>
            <div className="pt-2 text-[11px] text-gray-500">
              ✅ Pengiriman berasuransi penuh ke seluruh Indonesia dengan packing kayu & bubble wrap tebal.
            </div>
          </div>
        </div>

        {/* 2. Brand Info, Categories, Customer Service, Warranty (Bottom Section) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-8">
          
          {/* Brand & Store Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#0066FF] flex items-center justify-center text-white shadow-xs">
                <Smartphone className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                Marshall<span className="text-[#0066FF]"> Phone Cell</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
              Sentra ritel smartphone resmi dan terlengkap di Indonesia. Menghadirkan produk 100% original bergaransi resmi distributor (SEIN, TAM, iBox, Digimap) dengan jaminan harga terbaik dan fasilitas cicilan 0%.
            </p>
            
            <div className="space-y-2.5 text-xs text-gray-600 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span className="font-medium text-gray-800">Jl. Hz Mustofa No 122 Yudanegara Cihideung</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0066FF] shrink-0" />
                <span>Buka Setiap Hari: 10:00 - 21:00 WIB</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#0066FF] shrink-0" />
                <a 
                  href="https://wa.me/6282221234596" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="font-bold text-[#0066FF] hover:underline"
                >
                  WhatsApp: 0822-2123-4596
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0066FF] shrink-0" />
                <span>support@marshallphonecell.co.id</span>
              </div>
            </div>

            {/* Social Media Icons (TikTok, IG, WA, Facebook) */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-2.5">
                Ikuti Media Sosial Kami:
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className={`w-9 h-9 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-sm ${social.bgHover}`}
                    title={`${social.name}: ${social.handle}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
              Kategori Smartphone
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#promo" className="hover:text-[#0066FF] transition-colors">🔥 Promo Flash Sale</a></li>
              <li><a href="#terlaris" className="hover:text-[#0066FF] transition-colors">Smartphone Terlaris</a></li>
              <li><a href="#trending" className="hover:text-[#0066FF] transition-colors">Gaming Phone 5G</a></li>
              <li><a href="#terbaru" className="hover:text-[#0066FF] transition-colors">Flagship Terbaru</a></li>
              <li><a href="#merek" className="hover:text-[#0066FF] transition-colors">Apple iPhone Official</a></li>
              <li><a href="#merek" className="hover:text-[#0066FF] transition-colors">Samsung Galaxy Series</a></li>
            </ul>
          </div>

          {/* Customer Service & Warranty */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
              Layanan Pelanggan
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#beranda" className="hover:text-[#0066FF] transition-colors">Cek Status Garansi IMEI</a></li>
              <li><a href="#beranda" className="hover:text-[#0066FF] transition-colors">Program Trade-In (Tukar Tambah)</a></li>
              <li><a href="#beranda" className="hover:text-[#0066FF] transition-colors">Simulasi Cicilan 0%</a></li>
              <li><a href="#beranda" className="hover:text-[#0066FF] transition-colors">Kebijakan Retur & Garansi</a></li>
              <li><a href="#beranda" className="hover:text-[#0066FF] transition-colors">Lacak Status Pengiriman</a></li>
              <li><a href="#beranda" className="hover:text-[#0066FF] transition-colors">FAQ & Bantuan</a></li>
            </ul>
          </div>

          {/* Security & Official Warranty Badge */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
              Jaminan Belanja
            </h4>
            <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF]">
                <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
                <span>100% Distributor Resmi</span>
              </div>
              <p className="text-[11px] text-gray-600 leading-snug">
                Semua smartphone berstiker Kemenperin & Bea Cukai, serta terdaftar di service center resmi Indonesia.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2026 Marshall Phone Cell Indonesia. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-gray-700 cursor-pointer">Syarat & Ketentuan</span>
            <span>•</span>
            <span className="hover:text-gray-700 cursor-pointer">Kebijakan Privasi</span>
            <span>•</span>
            <span className="hover:text-gray-700 cursor-pointer">Peta Situs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
