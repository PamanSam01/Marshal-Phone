'use client';

import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, CreditCard, CheckCircle2 } from 'lucide-react';

export default function SocialAndMapSection() {
  const socialIcons = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/6282221234596',
      bg: 'bg-[#25D366]',
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/marshallphonecell',
      bg: 'bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600',
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/marshallphonecell',
      bg: 'bg-[#1877F2]',
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@marshallphonecell',
      bg: 'bg-[#000000]',
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.043.868.125V9.33a6.33 6.33 0 0 0-.868-.06 6.338 6.338 0 0 0-6.33 6.34 6.338 6.338 0 0 0 6.33 6.34 6.335 6.335 0 0 0 6.34-6.34V8.71a8.19 8.19 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.14z"/>
        </svg>
      )
    }
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

  return (
    <section id="contact-us" className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Title like Agung Cellular */}
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">
            Subscribe - Chat - Call
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            Hubungi kami langsung via WhatsApp atau ikuti update gadget dan promo menarik di media sosial resmi kami.
          </p>
        </div>

        {/* Circular Social & Chat Buttons */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          {socialIcons.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${item.bg} flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer`}
              title={item.name}
              aria-label={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Google Maps & Metode Pembayaran — Side by Side Columns */}
        <div className="pt-6 border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            {/* Kolom Kiri: Lokasi Toko & Google Maps */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-200 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                      Lokasi Toko Marshall Phone Cell
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Jl. Hz Mustofa No 122 Yudanegara Cihideung, Kota Tasikmalaya
                    </p>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Jl.+Hz+Mustofa+No+122+Yudanegara+Cihideung+Tasikmalaya"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0066FF] hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors shrink-0 cursor-pointer self-start sm:self-auto"
                  >
                    <span>Buka di Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Google Map Interactive Embed */}
                <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-gray-300 shadow-inner">
                  <iframe
                    title="Lokasi Toko Marshall Phone Cell Tasikmalaya"
                    src="https://maps.google.com/maps?q=Jl.+Hz+Mustofa+No+122+Yudanegara+Cihideung+Tasikmalaya&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Quick Details Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 pt-3 border-t border-gray-200/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0066FF] shrink-0" />
                  <span>Buka Setiap Hari: 10:00 - 21:00 WIB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0066FF] shrink-0" />
                  <span>WhatsApp CS: 0822-2123-4596</span>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Metode Pembayaran (Logo Masing-masing) */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-200 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#0066FF] shrink-0" />
                    Metode Pembayaran
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Menerima pembayaran tunai, transfer bank, hingga cicilan resmi tanpa kartu kredit.
                  </p>
                </div>

                {/* Grid Logo Pembayaran Individual */}
                <div className="w-full bg-white rounded-xl p-3 sm:p-4 border border-gray-200 shadow-xs flex flex-wrap gap-2 sm:gap-2.5 items-center justify-center content-center min-h-[224px] sm:min-h-[256px]">
                  {paymentPartners.map((partner) => (
                    <div
                      key={partner.name}
                      title={partner.name}
                      className="bg-white border border-gray-200 hover:border-[#0066FF] hover:shadow-xs rounded-lg px-2.5 py-1.5 h-10 sm:h-11 flex items-center justify-center transition-all duration-200 group cursor-default"
                    >
                      <img
                        src={partner.src}
                        alt={partner.name}
                        className="max-h-5 sm:max-h-6 max-w-[70px] sm:max-w-[85px] w-auto h-auto object-contain transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Details Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 pt-3 border-t border-gray-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cicilan 0% &amp; Paylater Resmi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Proses Cepat di Toko</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
