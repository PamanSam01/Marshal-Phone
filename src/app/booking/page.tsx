import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import SharedLayout from '@/components/SharedLayout';
import BookingSection from '@/components/BookingSection';

export const metadata: Metadata = {
  title: 'Booking & Pemesanan Smartphone – Marshall Phone Cell',
  description:
    'Pemesanan smartphone resmi dan reservasi servis HP di Marshall Phone Cell Tasikmalaya. Beli unit impian bergaransi resmi atau booking servis online.',
};

export default function BookingPage() {
  return (
    <SharedLayout activeNav="booking">
      <Suspense fallback={
        <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 text-center">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-gray-500 font-medium text-sm">Memuat halaman booking & pemesanan...</p>
        </div>
      }>
        <BookingSection />
      </Suspense>
    </SharedLayout>
  );
}
