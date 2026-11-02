'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  ShoppingBag, 
  Wrench, 
  Smartphone, 
  Calendar, 
  Clock, 
  Send, 
  ShieldCheck, 
  User, 
  Phone, 
  MapPin, 
  CreditCard, 
  CheckCircle, 
  Search, 
  ChevronRight, 
  Sparkles, 
  Truck, 
  Store, 
  Plus, 
  Minus, 
  X,
  Layers,
  Cpu,
  Camera,
  Battery
} from 'lucide-react';
import { ALL_PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';

export default function BookingSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productIdParam = searchParams.get('product');

  // Mode: 'purchase' (pembelian) or 'service' (servis HP)
  const [activeTab, setActiveTab] = useState<'purchase' | 'service'>('purchase');

  // Selected Product State
  const [selectedProduct, setSelectedProduct] = useState<Product>(() => {
    if (productIdParam) {
      const found = ALL_PRODUCTS.find((p) => p.id === productIdParam);
      if (found) return found;
    }
    // Default to OPPO Find X8 Pro or first product
    const defaultProduct = ALL_PRODUCTS.find((p) => p.id === 'oppo-find-x8-pro') || ALL_PRODUCTS[0];
    return defaultProduct;
  });

  // Keep selectedProduct in sync if query param changes
  useEffect(() => {
    if (productIdParam) {
      const found = ALL_PRODUCTS.find((p) => p.id === productIdParam);
      if (found) {
        setSelectedProduct(found);
      }
    }
  }, [productIdParam]);

  // Modal State for Choosing Another Product
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState('all');

  // Purchase Form State
  const [purchaseForm, setPurchaseForm] = useState({
    name: '',
    phone: '',
    color: 'Hitam / Standar',
    quantity: 1,
    pickupMethod: 'pickup', // 'pickup' | 'delivery'
    deliveryAddress: '',
    date: '',
    time: '11:00',
    paymentMethod: 'store', // 'store' | 'transfer' | 'cicilan'
    notes: ''
  });

  // Service Form State
  const [serviceForm, setServiceForm] = useState({
    name: '',
    phone: '',
    phoneModel: '',
    serviceType: 'Servis LCD / Layar Retak',
    date: '',
    time: '11:00',
    notes: ''
  });

  const [isSuccessSubmitted, setIsSuccessSubmitted] = useState(false);
  const [lastOrderType, setLastOrderType] = useState<'purchase' | 'service'>('purchase');

  const formatRupiah = (val: number) => 'Rp ' + val.toLocaleString('id-ID');

  // Unique brands list for filter in product selector
  const availableBrands = useMemo(() => {
    const brands = Array.from(new Set(ALL_PRODUCTS.map((p) => p.brand)));
    return ['all', ...brands];
  }, []);

  // Filtered products in product selector modal
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((p) => {
      const matchesBrand = selectedBrandFilter === 'all' || p.brand.toLowerCase() === selectedBrandFilter.toLowerCase();
      const matchesSearch = 
        p.name.toLowerCase().includes(searchKeyword.toLowerCase()) || 
        p.brand.toLowerCase().includes(searchKeyword.toLowerCase());
      return matchesBrand && matchesSearch;
    });
  }, [searchKeyword, selectedBrandFilter]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(false);
    // Update URL query param smoothly
    router.replace(`/booking?product=${encodeURIComponent(product.id)}`, { scroll: false });
  };

  // Submit Purchase Booking
  const handlePurchaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const pickupLabel = purchaseForm.pickupMethod === 'pickup'
      ? 'Ambil Langsung di Toko Marshall (Jl. Hz Mustofa No 122 Yudanegara Cihideung, Tasikmalaya)'
      : `Kirim ke Alamat / COD Tasikmalaya (Alamat: ${purchaseForm.deliveryAddress || '-'})`;

    const paymentLabel = 
      purchaseForm.paymentMethod === 'store' ? 'Bayar di Toko (Cash / Debit / QRIS)' :
      purchaseForm.paymentMethod === 'transfer' ? 'Transfer Bank Langsung (BCA / Mandiri / BRI)' :
      'Cicilan 0% / Paylater (Kredivo / Akulaku / Home Credit)';

    const totalPrice = selectedProduct.price * purchaseForm.quantity;

    const waText = 
      `*Halo Admin Marshall Phone Cell, saya mau pesan/booking unit smartphone:*%0A%0A` +
      `📱 *Nama Unit:* ${encodeURIComponent(selectedProduct.name)}%0A` +
      `🏷️ *Brand & Garansi:* Garansi Resmi ${encodeURIComponent(selectedProduct.brand)} 1 Tahun%0A` +
      `💰 *Harga Satuan:* ${encodeURIComponent(formatRupiah(selectedProduct.price))}%0A` +
      `📦 *Jumlah Unit:* ${purchaseForm.quantity} unit%0A` +
      `💵 *Total Pembayaran:* ${encodeURIComponent(formatRupiah(totalPrice))}%0A` +
      `🎨 *Pilihan Warna:* ${encodeURIComponent(purchaseForm.color)}%0A%0A` +
      `👤 *Data Pemesan:*%0A` +
      `• *Nama:* ${encodeURIComponent(purchaseForm.name || '-')}%0A` +
      `• *No. WhatsApp:* ${encodeURIComponent(purchaseForm.phone || '-')}%0A` +
      `• *Metode Pengambilan:* ${encodeURIComponent(pickupLabel)}%0A` +
      `• *Rencana Waktu:* ${encodeURIComponent(purchaseForm.date || 'Hari Ini')} jam ${encodeURIComponent(purchaseForm.time)} WIB%0A` +
      `• *Metode Pembayaran:* ${encodeURIComponent(paymentLabel)}%0A` +
      (purchaseForm.notes ? `• *Catatan Tambahan:* ${encodeURIComponent(purchaseForm.notes)}%0A%0A` : '%0A') +
      `Mohon info ketersediaan stok & unit segera diamankan. Terima kasih! 🙏`;

    const waUrl = `https://wa.me/6282221234596?text=${waText}`;
    window.open(waUrl, '_blank');
    setLastOrderType('purchase');
    setIsSuccessSubmitted(true);
  };

  // Submit Service Booking
  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waText = 
      `*Halo Marshall Phone Cell, saya ingin booking antrean Servis HP:*%0A%0A` +
      `👤 *Nama:* ${encodeURIComponent(serviceForm.name || '-')}%0A` +
      `📞 *No. WhatsApp:* ${encodeURIComponent(serviceForm.phone || '-')}%0A` +
      `📱 *Merek & Tipe HP:* ${encodeURIComponent(serviceForm.phoneModel || '-')}%0A` +
      `🔧 *Layanan Servis:* ${encodeURIComponent(serviceForm.serviceType)}%0A` +
      `📅 *Rencana Kedatangan:* ${encodeURIComponent(serviceForm.date || 'Hari ini')} jam ${encodeURIComponent(serviceForm.time)} WIB%0A` +
      `📍 *Lokasi:* Toko Marshall Jl. Hz Mustofa No 122 Cihideung%0A` +
      (serviceForm.notes ? `📝 *Keluhan:* ${encodeURIComponent(serviceForm.notes)}%0A%0A` : '%0A') +
      `Mohon info kesiapan teknisi & estimasi pengerjaan. Terima kasih!`;

    const waUrl = `https://wa.me/6282221234596?text=${waText}`;
    window.open(waUrl, '_blank');
    setLastOrderType('service');
    setIsSuccessSubmitted(true);
  };

  return (
    <section id="booking" className="py-10 bg-gray-50/70 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Top Header Badge & Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-100 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            Layanan Resmi Marshall Phone Cell Tasikmalaya
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 tracking-tight">
            Booking & Pemesanan Smartphone
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">
            Pesan smartphone idamanmu atau reservasi perbaikan HP. Bebas antre, unit langsung disiapkan, dan bergaransi resmi 100%.
          </p>

          {/* Tab Switcher: Pembelian vs Servis */}
          <div className="pt-3 flex items-center justify-center">
            <div className="bg-gray-200/80 p-1 rounded-2xl flex items-center shadow-inner max-w-md w-full">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('purchase');
                  setIsSuccessSubmitted(false);
                }}
                className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'purchase'
                    ? 'bg-white text-gray-950 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-[#0066FF]" />
                <span>Pemesanan Smartphone</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('service');
                  setIsSuccessSubmitted(false);
                }}
                className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'service'
                    ? 'bg-white text-gray-950 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Wrench className="w-4 h-4 text-emerald-600" />
                <span>Booking Servis HP</span>
              </button>
            </div>
          </div>
        </div>

        {/* Success Alert State */}
        {isSuccessSubmitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm text-center max-w-2xl mx-auto space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900">
                {lastOrderType === 'purchase' ? 'Detail Pemesanan Terkirim ke WhatsApp!' : 'Jadwal Booking Servis Terkirim!'}
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
                Admin WhatsApp resmi Marshall Phone Cell (<strong>0822-2123-4596</strong>) akan segera memverifikasi ketersediaan dan menyiapkan pesanan Anda.
              </p>
            </div>

            <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-2xl text-left max-w-md mx-auto text-xs text-blue-900 space-y-1.5">
              <div className="font-bold text-blue-950 flex items-center gap-1.5">
                <Store className="w-4 h-4 text-[#0066FF]" />
                Alamat Toko Kami:
              </div>
              <p>Jl. Hz Mustofa No 122 Yudanegara, Kec. Cihideung, Kota Tasikmalaya, Jawa Barat 46121</p>
              <p className="text-[11px] text-blue-700">Jam Operasional: Setiap Hari 10:00 - 21:00 WIB</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                type="button"
                onClick={() => setIsSuccessSubmitted(false)}
                className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                Buat Pesanan Lain
              </button>
              <button
                type="button"
                onClick={() => router.push('/product')}
                className="px-6 py-2.5 bg-[#0066FF] hover:bg-[#0052cc] text-white rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                Kembali ke Katalog Produk
              </button>
            </div>
          </div>
        ) : activeTab === 'purchase' ? (
          /* ==============================================================
             TAB 1: BOOKING & PEMBELIAN PRODUK (SMARTPHONE)
             ============================================================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Detail Produk yang Dipilih */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066FF] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    Unit Terpilih
                  </span>
                  
                  {/* Change Product Button */}
                  <button
                    type="button"
                    onClick={() => setIsProductModalOpen(true)}
                    className="text-xs font-bold text-[#0066FF] hover:text-[#0052cc] flex items-center gap-1 cursor-pointer hover:underline"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Ganti Smartphone</span>
                  </button>
                </div>

                {/* Product Image Frame */}
                <div className="relative w-full aspect-square bg-gray-50/80 rounded-2xl p-4 flex items-center justify-center border border-gray-100 mb-4 overflow-hidden">
                  <img
                    src={`${selectedProduct.image}?v=gsm2`}
                    alt={selectedProduct.name}
                    className="max-h-full max-w-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                  {selectedProduct.discountPercent && (
                    <div className="absolute top-3 left-3 bg-rose-600 text-white text-[11px] font-extrabold px-2 py-0.5 rounded-md shadow-xs">
                      Hemat {selectedProduct.discountPercent}%
                    </div>
                  )}
                </div>

                {/* Brand & Name */}
                <div className="space-y-1">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {selectedProduct.brand} • Garansi Resmi
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-gray-950 leading-tight">
                    {selectedProduct.name}
                  </h2>
                </div>

                {/* Price Display */}
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-gray-950 tracking-tight">
                    {formatRupiah(selectedProduct.price)}
                  </span>
                  {selectedProduct.originalPrice && selectedProduct.originalPrice > selectedProduct.price && (
                    <span className="text-xs sm:text-sm text-gray-400 line-through">
                      {formatRupiah(selectedProduct.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Specs Box */}
                {selectedProduct.specs && (
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5" />
                      Spesifikasi Resmi
                    </h3>
                    <div className="grid grid-cols-1 gap-1.5 text-xs">
                      {selectedProduct.specs.screen && (
                        <div className="flex items-center gap-2 text-gray-700 bg-gray-50/70 p-2 rounded-lg">
                          <Smartphone className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                          <span className="font-medium text-gray-500 w-16 shrink-0">Layar:</span>
                          <span className="font-semibold text-gray-900 truncate">{selectedProduct.specs.screen}</span>
                        </div>
                      )}
                      {selectedProduct.specs.processor && (
                        <div className="flex items-center gap-2 text-gray-700 bg-gray-50/70 p-2 rounded-lg">
                          <Cpu className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                          <span className="font-medium text-gray-500 w-16 shrink-0">Chipset:</span>
                          <span className="font-semibold text-gray-900 truncate">{selectedProduct.specs.processor}</span>
                        </div>
                      )}
                      {selectedProduct.specs.camera && (
                        <div className="flex items-center gap-2 text-gray-700 bg-gray-50/70 p-2 rounded-lg">
                          <Camera className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                          <span className="font-medium text-gray-500 w-16 shrink-0">Kamera:</span>
                          <span className="font-semibold text-gray-900 truncate">{selectedProduct.specs.camera}</span>
                        </div>
                      )}
                      {selectedProduct.specs.battery && (
                        <div className="flex items-center gap-2 text-gray-700 bg-gray-50/70 p-2 rounded-lg">
                          <Battery className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                          <span className="font-medium text-gray-500 w-16 shrink-0">Baterai:</span>
                          <span className="font-semibold text-gray-900 truncate">{selectedProduct.specs.battery}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Free Bonuses at Marshall */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-xs font-bold text-emerald-800 mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Keuntungan Beli di Marshall Phone Cell:
                  </div>
                  <ul className="text-[11px] text-gray-600 space-y-1 list-disc list-inside">
                    <li>100% Produk Original & Bergaransi Resmi Indonesia</li>
                    <li>Gratis Pasang Antigores / Tempered Glass Presisi</li>
                    <li>Gratis Pindah Data Lengkap dari Smartphone Lama</li>
                    <li>Unit Baru Segel Pabrik (Bisa unboxing di toko)</li>
                  </ul>
                </div>

              </div>

              {/* Store Location Card */}
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-2xs flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-gray-900">Alamat Toko Marshall:</div>
                  <div className="text-gray-500 mt-0.5">
                    Jl. Hz Mustofa No 122 Yudanegara, Cihideung, Kota Tasikmalaya (Samping Apotek Bintang)
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Formulir Pemesanan & Rincian Pembelian */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-950">
                    Formulir Booking Pembelian
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Lengkapi data di bawah ini untuk konfirmasi pesanan langsung via WhatsApp Admin.
                  </p>
                </div>

                <form onSubmit={handlePurchaseSubmit} className="space-y-5">
                  
                  {/* Step 1: Varian & Kuantitas */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-800 block">
                      1. Pilihan Warna & Jumlah Unit
                    </label>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold text-gray-500 mb-1 block">Warna Pilihan:</label>
                        <select
                          value={purchaseForm.color}
                          onChange={(e) => setPurchaseForm({ ...purchaseForm, color: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm bg-white cursor-pointer"
                        >
                          <option value="Hitam / Black">Hitam / Black</option>
                          <option value="Putih / Silver">Putih / Silver</option>
                          <option value="Biru / Navy / Titanium">Biru / Navy / Titanium</option>
                          <option value="Warna Apapun yang Tersedia (Rekomendasi Admin)">Warna Apapun yang Tersedia</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-gray-500 mb-1 block">Jumlah Unit:</label>
                        <div className="flex items-center border border-gray-300 rounded-xl bg-gray-50/50">
                          <button
                            type="button"
                            onClick={() => setPurchaseForm({ ...purchaseForm, quantity: Math.max(1, purchaseForm.quantity - 1) })}
                            className="p-2.5 text-gray-600 hover:bg-gray-200 rounded-l-xl transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="flex-1 text-center font-bold text-sm text-gray-900">
                            {purchaseForm.quantity} Unit
                          </span>
                          <button
                            type="button"
                            onClick={() => setPurchaseForm({ ...purchaseForm, quantity: purchaseForm.quantity + 1 })}
                            className="p-2.5 text-gray-600 hover:bg-gray-200 rounded-r-xl transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Data Pembeli */}
                  <div className="space-y-3 pt-2 border-t border-gray-100">
                    <label className="text-xs font-bold text-gray-800 block">
                      2. Identitas Pembeli
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold text-gray-500 mb-1 flex items-center gap-1">
                          <User className="w-3 h-3 text-[#0066FF]" />
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Rian Anggara"
                          value={purchaseForm.name}
                          onChange={(e) => setPurchaseForm({ ...purchaseForm, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-gray-500 mb-1 flex items-center gap-1">
                          <Phone className="w-3 h-3 text-[#0066FF]" />
                          Nomor WhatsApp
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Contoh: 081234567890"
                          value={purchaseForm.phone}
                          onChange={(e) => setPurchaseForm({ ...purchaseForm, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Metode Pengambilan */}
                  <div className="space-y-3 pt-2 border-t border-gray-100">
                    <label className="text-xs font-bold text-gray-800 block">
                      3. Metode Pengambilan Unit
                    </label>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Option A: Ambil di Toko */}
                      <label 
                        onClick={() => setPurchaseForm({ ...purchaseForm, pickupMethod: 'pickup' })}
                        className={`p-3.5 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                          purchaseForm.pickupMethod === 'pickup'
                            ? 'border-[#0066FF] bg-blue-50/40 text-blue-950 shadow-2xs'
                            : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="pickupMethod"
                          checked={purchaseForm.pickupMethod === 'pickup'}
                          onChange={() => {}}
                          className="mt-1"
                        />
                        <div className="text-xs">
                          <div className="font-bold flex items-center gap-1">
                            <Store className="w-3.5 h-3.5 text-[#0066FF]" />
                            Ambil di Toko Marshall
                          </div>
                          <div className="text-[11px] text-gray-500 mt-1">
                            Jl. HZ Mustofa 122 Tasikmalaya. Unit disiapkan & bisa langsung cek fisik/unboxing.
                          </div>
                        </div>
                      </label>

                      {/* Option B: Kirim ke Alamat / COD */}
                      <label 
                        onClick={() => setPurchaseForm({ ...purchaseForm, pickupMethod: 'delivery' })}
                        className={`p-3.5 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                          purchaseForm.pickupMethod === 'delivery'
                            ? 'border-[#0066FF] bg-blue-50/40 text-blue-950 shadow-2xs'
                            : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="pickupMethod"
                          checked={purchaseForm.pickupMethod === 'delivery'}
                          onChange={() => {}}
                          className="mt-1"
                        />
                        <div className="text-xs">
                          <div className="font-bold flex items-center gap-1">
                            <Truck className="w-3.5 h-3.5 text-emerald-600" />
                            Kirim ke Rumah / COD
                          </div>
                          <div className="text-[11px] text-gray-500 mt-1">
                            Area Kota Tasikmalaya. Kurir toko mengantar langsung sampai depan pintu.
                          </div>
                        </div>
                      </label>
                    </div>

                    {/* Conditional Delivery Address */}
                    {purchaseForm.pickupMethod === 'delivery' && (
                      <div className="pt-1">
                        <label className="text-[11px] font-semibold text-gray-600 mb-1 block">
                          Alamat Lengkap Pengiriman (Kota Tasikmalaya & Sekitarnya):
                        </label>
                        <textarea
                          rows={2}
                          required
                          placeholder="Tuliskan nama jalan, no rumah, kelurahan/kecamatan, dan patokan..."
                          value={purchaseForm.deliveryAddress}
                          onChange={(e) => setPurchaseForm({ ...purchaseForm, deliveryAddress: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm resize-none"
                        />
                      </div>
                    )}
                  </div>

                  {/* Step 4: Rencana Tanggal & Waktu */}
                  <div className="space-y-3 pt-2 border-t border-gray-100">
                    <label className="text-xs font-bold text-gray-800 block">
                      4. Jadwal Pengambilan / Pengiriman
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold text-gray-500 mb-1 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#0066FF]" />
                          Rencana Tanggal
                        </label>
                        <input
                          type="date"
                          value={purchaseForm.date}
                          onChange={(e) => setPurchaseForm({ ...purchaseForm, date: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-gray-500 mb-1 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#0066FF]" />
                          Estimasi Jam (10:00 - 21:00 WIB)
                        </label>
                        <input
                          type="time"
                          value={purchaseForm.time}
                          onChange={(e) => setPurchaseForm({ ...purchaseForm, time: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Metode Pembayaran */}
                  <div className="space-y-3 pt-2 border-t border-gray-100">
                    <label className="text-xs font-bold text-gray-800 block">
                      5. Rencana Pembayaran
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs">
                      <label 
                        onClick={() => setPurchaseForm({ ...purchaseForm, paymentMethod: 'store' })}
                        className={`p-3 rounded-xl border-2 flex flex-col justify-between cursor-pointer transition-all ${
                          purchaseForm.paymentMethod === 'store'
                            ? 'border-[#0066FF] bg-blue-50/50 font-bold text-blue-900'
                            : 'border-gray-200 bg-white text-gray-700'
                        }`}
                      >
                        <span>Bayar di Toko</span>
                        <span className="text-[10px] text-gray-500 font-normal mt-1">Cash / QRIS / Debit</span>
                      </label>

                      <label 
                        onClick={() => setPurchaseForm({ ...purchaseForm, paymentMethod: 'transfer' })}
                        className={`p-3 rounded-xl border-2 flex flex-col justify-between cursor-pointer transition-all ${
                          purchaseForm.paymentMethod === 'transfer'
                            ? 'border-[#0066FF] bg-blue-50/50 font-bold text-blue-900'
                            : 'border-gray-200 bg-white text-gray-700'
                        }`}
                      >
                        <span>Transfer Bank</span>
                        <span className="text-[10px] text-gray-500 font-normal mt-1">BCA / Mandiri / BRI</span>
                      </label>

                      <label 
                        onClick={() => setPurchaseForm({ ...purchaseForm, paymentMethod: 'cicilan' })}
                        className={`p-3 rounded-xl border-2 flex flex-col justify-between cursor-pointer transition-all ${
                          purchaseForm.paymentMethod === 'cicilan'
                            ? 'border-[#0066FF] bg-blue-50/50 font-bold text-blue-900'
                            : 'border-gray-200 bg-white text-gray-700'
                        }`}
                      >
                        <span>Cicilan / Paylater</span>
                        <span className="text-[10px] text-gray-500 font-normal mt-1">Kredivo / Akulaku / 0%</span>
                      </label>
                    </div>
                  </div>

                  {/* Step 6: Catatan Tambahan */}
                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    <label className="text-xs font-bold text-gray-800">
                      Catatan Tambahan (Opsional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Contoh: Minta tolong dipasangkan tempered glass langsung, minta dibantu pindah data dari HP lama, dll."
                      value={purchaseForm.notes}
                      onChange={(e) => setPurchaseForm({ ...purchaseForm, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm resize-none"
                    />
                  </div>

                  {/* Summary Cost Card */}
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-2 text-xs">
                    <div className="font-bold text-gray-900 pb-1 border-b border-gray-200">
                      Ringkasan Pemesanan
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>{selectedProduct.name} ({purchaseForm.quantity}x)</span>
                      <span className="font-semibold text-gray-900">
                        {formatRupiah(selectedProduct.price * purchaseForm.quantity)}
                      </span>
                    </div>
                    <div className="flex justify-between text-emerald-700">
                      <span>Layanan Pindah Data & Pasang Antigores</span>
                      <span className="font-bold">GRATIS</span>
                    </div>
                    <div className="flex justify-between text-emerald-700">
                      <span>Biaya Penyiapan Unit di Toko</span>
                      <span className="font-bold">GRATIS</span>
                    </div>
                    <div className="flex justify-between text-base font-black text-gray-950 pt-2 border-t border-gray-200">
                      <span>Total Estimasi Bayar:</span>
                      <span className="text-[#0066FF]">
                        {formatRupiah(selectedProduct.price * purchaseForm.quantity)}
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp Submission CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
                  >
                    <Send className="w-5 h-5" />
                    <span>Pesan & Booking via WhatsApp (0822-2123-4596)</span>
                  </button>

                  <p className="text-[11px] text-gray-500 text-center flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>Tidak ada pembayaran otomatis di web. Anda hanya membayar setelah unit dikonfirmasi admin.</span>
                  </p>

                </form>

              </div>
            </div>

          </div>
        ) : (
          /* ==============================================================
             TAB 2: BOOKING SERVIS & PERBAIKAN HP
             ============================================================== */
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <div className="mb-6 pb-4 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-950 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-emerald-600" />
                Formulir Booking Servis Smartphone
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Jadwalkan servis HP Anda agar langsung ditangani teknisi berpengalaman tanpa antre panjang di toko Jl. HZ Mustofa 122.
              </p>
            </div>

            <form onSubmit={handleServiceSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
                    <User className="w-3 h-3 text-[#0066FF]" />
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Rian Anggara"
                    value={serviceForm.name}
                    onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#0066FF]" />
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={serviceForm.phone}
                    onChange={(e) => setServiceForm({ ...serviceForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
                    <Smartphone className="w-3 h-3 text-[#0066FF]" />
                    Merek & Tipe Handphone
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: iPhone 13 / Samsung A55 / OPPO Reno"
                    value={serviceForm.phoneModel}
                    onChange={(e) => setServiceForm({ ...serviceForm, phoneModel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">
                    Layanan Servis yang Dibutuhkan
                  </label>
                  <select
                    value={serviceForm.serviceType}
                    onChange={(e) => setServiceForm({ ...serviceForm, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm bg-white cursor-pointer"
                  >
                    <option value="Servis LCD / Layar Retak / Blank">Servis LCD / Layar Retak / Blank</option>
                    <option value="Ganti Baterai Original / Kembung">Ganti Baterai Original / Kembung</option>
                    <option value="Perbaikan Port Charger / Mic / Speaker">Perbaikan Port Charger / Speaker</option>
                    <option value="Pengecekan Mati Total / Kena Air">Pengecekan Mati Total / Kena Air</option>
                    <option value="Bypass / Flash Software / Bootloop">Flash Software / Bootloop</option>
                    <option value="Pindah Data HP Lama ke Baru">Pindah Data HP Lama ke Baru</option>
                    <option value="Konsultasi Kerusakan Lainnya">Konsultasi Kerusakan Lainnya</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#0066FF]" />
                    Rencana Tanggal Servis
                  </label>
                  <input
                    type="date"
                    required
                    value={serviceForm.date}
                    onChange={(e) => setServiceForm({ ...serviceForm, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#0066FF]" />
                    Estimasi Jam Kedatangan
                  </label>
                  <input
                    type="time"
                    value={serviceForm.time}
                    onChange={(e) => setServiceForm({ ...serviceForm, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">
                  Keluhan / Gejala Kerusakan (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ceritakan kendala pada smartphone Anda agar teknisi dapat menyiapkan sparepart yang cocok..."
                  value={serviceForm.notes}
                  onChange={(e) => setServiceForm({ ...serviceForm, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] text-xs sm:text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Booking Servis ke WhatsApp Admin</span>
              </button>
            </form>
          </div>
        )}

      </div>

      {/* ==============================================================
          MODAL: PILIH / GANTI PRODUK SMARTPHONE LAIN
          ============================================================== */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setIsProductModalOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          />

          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/60">
              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                  Pilih Smartphone yang Ingin Dipesan
                </h3>
                <p className="text-xs text-gray-500">
                  Tersedia 90+ smartphone & tablet resmi dari berbagai merek
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsProductModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search & Brand Filter Bar */}
            <div className="p-4 border-b border-gray-100 space-y-3 bg-white">
              {/* Search input */}
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari merek atau tipe HP (cth: Find X8, S25, iPhone 16, Redmi)..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                />
              </div>

              {/* Brand Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
                {availableBrands.map((brand) => (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => setSelectedBrandFilter(brand)}
                    className={`px-3 py-1 rounded-full uppercase font-bold text-[11px] whitespace-nowrap transition-colors cursor-pointer ${
                      selectedBrandFilter === brand
                        ? 'bg-[#0066FF] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {brand === 'all' ? 'Semua Merek' : brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid List */}
            <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {filteredProducts.length === 0 ? (
                <div className="col-span-full py-12 text-center text-gray-500 text-xs sm:text-sm">
                  Tidak ditemukan smartphone dengan kata kunci &quot;{searchKeyword}&quot;.
                </div>
              ) : (
                filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => handleSelectProduct(prod)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 hover:border-[#0066FF] hover:shadow-sm ${
                      selectedProduct.id === prod.id
                        ? 'border-[#0066FF] bg-blue-50/50'
                        : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-14 h-14 bg-gray-50 rounded-xl p-1 shrink-0 flex items-center justify-center border border-gray-100">
                      <img
                        src={`${prod.image}?v=gsm2`}
                        alt={prod.name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold text-gray-400 uppercase">
                        {prod.brand}
                      </div>
                      <div className="text-xs font-bold text-gray-900 truncate">
                        {prod.name}
                      </div>
                      <div className="text-xs font-bold text-[#0066FF] mt-0.5">
                        {formatRupiah(prod.price)}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                  </div>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 border-t border-gray-100 bg-gray-50/60 text-right">
              <button
                type="button"
                onClick={() => setIsProductModalOpen(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
