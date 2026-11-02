import { Product, Brand } from '@/types/product';

import { APPLE_PRODUCTS } from './apple';
import { GOOGLE_PRODUCTS } from './google';
import { INFINIX_PRODUCTS } from './infinix';
import { ITEL_PRODUCTS } from './itel';
import { ONEPLUS_PRODUCTS } from './oneplus';
import { OPPO_PRODUCTS } from './oppo';
import { POCO_PRODUCTS } from './poco';
import { REALME_PRODUCTS } from './realme';
import { SAMSUNG_PRODUCTS } from './samsung';
import { TABLET_PRODUCTS } from './tablet';
import { TECNO_PRODUCTS } from './tecno';
import { VIVO_PRODUCTS } from './vivo';
import { XIAOMI_PRODUCTS } from './xiaomi';

export const ALL_PRODUCTS: Product[] = [
  ...APPLE_PRODUCTS,
  ...GOOGLE_PRODUCTS,
  ...INFINIX_PRODUCTS,
  ...ITEL_PRODUCTS,
  ...ONEPLUS_PRODUCTS,
  ...OPPO_PRODUCTS,
  ...POCO_PRODUCTS,
  ...REALME_PRODUCTS,
  ...SAMSUNG_PRODUCTS,
  ...TABLET_PRODUCTS,
  ...TECNO_PRODUCTS,
  ...VIVO_PRODUCTS,
  ...XIAOMI_PRODUCTS
];

export const PROMO_PRODUCTS: Product[] = ALL_PRODUCTS.filter((p) => p.category === 'promo').slice(0, 8);
export const TERLARIS_PRODUCTS: Product[] = ALL_PRODUCTS.filter((p) => p.category === 'terlaris').slice(0, 8);
export const TRENDING_PRODUCTS: Product[] = ALL_PRODUCTS.filter((p) => p.category === 'trending').slice(0, 8);
export const TERBARU_PRODUCTS: Product[] = ALL_PRODUCTS.filter((p) => p.category === 'terbaru').slice(0, 8);

export const POPULAR_BRANDS: Brand[] = [
  { id: 'samsung', name: 'Samsung', tagline: 'Galaxy AI & Flagship', count: 11, logoText: 'SAMSUNG', accentColor: '#1428A0' },
  { id: 'apple', name: 'Apple', tagline: 'iPhone & Ekosistem iOS', count: 12, logoText: 'APPLE', accentColor: '#000000' },
  { id: 'oppo', name: 'OPPO', tagline: 'Portrait Expert & VOOC', count: 8, logoText: 'OPPO', accentColor: '#0F8B44' },
  { id: 'vivo', name: 'vivo', tagline: 'Aura Light & Zeiss Optics', count: 9, logoText: 'VIVO', accentColor: '#415FFF' },
  { id: 'xiaomi', name: 'Xiaomi', tagline: 'Value King & Leica Cam', count: 11, logoText: 'XIAOMI', accentColor: '#FF6900' },
  { id: 'realme', name: 'realme', tagline: 'Periscope Camera & Speed', count: 8, logoText: 'REALME', accentColor: '#FFC800' },
  { id: 'infinix', name: 'Infinix', tagline: 'Gaming Phone & Mecha', count: 5, logoText: 'INFINIX', accentColor: '#000000' },
  { id: 'tecno', name: 'Tecno', tagline: 'Innovative Design & Camon', count: 5, logoText: 'TECNO', accentColor: '#0057B8' },
  { id: 'poco', name: 'POCO', tagline: 'Extreme Performance', count: 7, logoText: 'POCO', accentColor: '#FACC15' },
  { id: 'itel', name: 'itel', tagline: 'Budget 5G Terjangkau', count: 4, logoText: 'ITEL', accentColor: '#E60012' },
  { id: 'pixel', name: 'Google Pixel', tagline: 'Pure Android & AI', count: 5, logoText: 'PIXEL', accentColor: '#4285F4' },
  { id: 'oneplus', name: 'OnePlus', tagline: 'Never Settle Flagship', count: 4, logoText: 'ONEPLUS', accentColor: '#EB0029' }
];

export const HERO_SLIDES = [
  {
    id: 1,
    tag: 'SPESIAL PROMO BULAN INI',
    title: 'Smartphone Terbaru -\nTren Teknologi Terkini',
    description: 'Temukan koleksi smartphone terkini dengan fitur canggih, harga terbaik, dan promo menarik hanya di Marshall Phone Cell.',
    ctaText: 'Belanja Sekarang',
    badge: 'Diskon s.d 40% + Bebas Ongkir',
    image: '/images/hero-1.webp',
    gradient: 'from-[#0055ff] via-[#0066ff] to-[#0044cc]'
  },
  {
    id: 2,
    tag: 'FLAGSHIP AI REVOLUTION',
    title: 'Samsung Galaxy Series -\nEra Baru Galaxy AI',
    description: 'Nikmati performa puncak Snapdragon 8 Elite, kamera 200MP, dan fitur Live Translate AI. Cicilan 0% hingga 24 bulan.',
    ctaText: 'Lihat Penawaran',
    badge: 'Cashback s.d Rp 2.000.000',
    image: '/images/hero-2.webp',
    gradient: 'from-[#003bb3] via-[#0052cc] to-[#002f8a]'
  },
  {
    id: 3,
    tag: 'PROGRAM TRADE-IN FIESTA',
    title: 'Tukar Tambah HP Lama -\nLangsung Bawa Pulang Baru',
    description: 'Bawa smartphone lama Anda dalam kondisi apapun. Dapatkan taksiran harga tertinggi plus bonus earphone nirkabel premium.',
    ctaText: 'Simulasi Trade-In',
    badge: 'Bonus Ekstra Rp 1.500.000',
    image: '/images/hero-3.webp',
    gradient: 'from-[#0066ff] via-[#0077ff] to-[#0050d8]'
  }
];

export const TRUST_BADGES = [
  {
    id: 'original',
    title: '100% Original',
    desc: 'Produk resmi & bergaransi',
    sub: 'SEIN / TAM / iBox / Digimap'
  },
  {
    id: 'shipping',
    title: 'Gratis Pengiriman',
    desc: 'Min. pembelian tertentu',
    sub: 'Packing bubble wrap tebal + asuransi'
  },
  {
    id: 'discount',
    title: 'Pasti Diskon',
    desc: 'Promo terbaik setiap hari',
    sub: 'Flash sale & voucher cashback'
  },
  {
    id: 'support',
    title: 'Layanan 24 Jam',
    desc: 'Siap membantu kapan saja',
    sub: 'Konsultasi via WhatsApp & Call Center'
  }
];
