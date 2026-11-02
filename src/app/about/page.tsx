import type { Metadata } from 'next';
import SharedLayout from '@/components/SharedLayout';
import AboutUsSection from '@/components/AboutUsSection';

export const metadata: Metadata = {
  title: 'Tentang Kami – Marshall Phone Cell',
  description:
    'Profil dan komitmen Marshall Phone Cell, sentra smartphone & gadget resmi di Jl. Hz Mustofa No 122 Cihideung, Tasikmalaya.',
};

export default function AboutPage() {
  return (
    <SharedLayout activeNav="about">
      <AboutUsSection />
    </SharedLayout>
  );
}
