import type { Metadata } from 'next';
import SharedLayout from '@/components/SharedLayout';
import BrandLaunchpad from '@/components/BrandLaunchpad';

export const metadata: Metadata = {
  title: 'Katalog Produk – Marshall Phone Cell',
  description:
    'Pilih merek smartphone favoritmu. OPPO, Samsung, Xiaomi, Apple iPhone, vivo, realme, Infinix, TECNO, POCO, itel, Google Pixel, OnePlus, Tablet & iPad.',
};

export default function ProductPage() {
  return (
    <SharedLayout activeNav="product">
      <div className="bg-white border-b border-gray-200 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">Katalog Produk</span>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
            Pilih Merek Smartphone
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Klik salah satu merek di bawah untuk melihat katalog produk lengkap beserta harga resminya.
          </p>
        </div>
        <BrandLaunchpad />
      </div>
    </SharedLayout>
  );
}
