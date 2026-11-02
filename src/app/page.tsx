import type { Metadata } from 'next';
import HomePageClient from '../components/HomePageClient';

export const metadata: Metadata = {
  title: 'Marshall Phone Cell – Toko Smartphone & Gadget Resmi Tasikmalaya',
  description:
    'Marshall Phone Cell adalah sentra smartphone, tablet, dan aksesori bergaransi resmi di Jl. Hz Mustofa No 122 Cihideung, Tasikmalaya. Produk 100% original SEIN/TAM/iBox.',
};

export default function HomePage() {
  return <HomePageClient />;
}
