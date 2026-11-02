import type { Metadata } from 'next';
import SharedLayout from '@/components/SharedLayout';
import ServiceSection from '@/components/ServiceSection';

export const metadata: Metadata = {
  title: 'Layanan Servis HP – Marshall Phone Cell',
  description:
    'Servis HP, ganti layar, baterai, kamera, software, dan aksesori original di Marshall Phone Cell Tasikmalaya. Teknisi berpengalaman & bergaransi.',
};

export default function ServicePage() {
  return (
    <SharedLayout activeNav="service">
      <ServiceSection />
    </SharedLayout>
  );
}
