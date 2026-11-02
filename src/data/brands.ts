import { Product } from '@/types/product';

export interface BrandConfig {
  slug: string;
  displayName: string;
  subTitle: string;
  accentColor: string;
  borderColor: string;
  hoverBorder: string;
  filter: (p: Product) => boolean;
}

export const BRAND_CONFIGS: BrandConfig[] = [
  {
    slug: 'oppo',
    displayName: 'Katalog Smartphone OPPO Resmi',
    subTitle: 'OPPO Indonesia – Portrait Expert & SUPERVOOC',
    accentColor: '#008b47',
    borderColor: 'border-[#008b47]',
    hoverBorder: 'hover:border-[#00aa55]',
    filter: (p) => p.brand.toLowerCase() === 'oppo',
  },
  {
    slug: 'vivo',
    displayName: 'Katalog Smartphone vivo Resmi',
    subTitle: 'vivo Indonesia – Aura Light & FlashCharge',
    accentColor: '#415fff',
    borderColor: 'border-[#415fff]',
    hoverBorder: 'hover:border-[#6080ff]',
    filter: (p) => p.brand.toLowerCase() === 'vivo',
  },
  {
    slug: 'samsung-a',
    displayName: 'Katalog SAMSUNG Galaxy A Series',
    subTitle: 'Samsung Indonesia – Galaxy A Series (SEIN)',
    accentColor: '#0c2340',
    borderColor: 'border-[#0c2340]',
    hoverBorder: 'hover:border-blue-700',
    filter: (p) =>
      p.brand.toLowerCase() === 'samsung' && p.name.toLowerCase().includes(' a'),
  },
  {
    slug: 'samsung-s',
    displayName: 'Katalog SAMSUNG Galaxy S & Z Series',
    subTitle: 'Samsung Indonesia – Flagship Galaxy S & Fold/Flip',
    accentColor: '#0c2340',
    borderColor: 'border-[#0c2340]',
    hoverBorder: 'hover:border-blue-700',
    filter: (p) =>
      p.brand.toLowerCase() === 'samsung' &&
      (p.name.toLowerCase().includes(' s') || p.name.toLowerCase().includes(' z')),
  },
  {
    slug: 'xiaomi',
    displayName: 'Katalog Smartphone Xiaomi & Redmi',
    subTitle: 'Xiaomi Indonesia – Redmi, POCO & Mi Series',
    accentColor: '#ff6700',
    borderColor: 'border-[#ff6700]',
    hoverBorder: 'hover:border-[#ff8533]',
    filter: (p) =>
      p.brand.toLowerCase() === 'xiaomi' ||
      p.brand.toLowerCase() === 'redmi' ||
      p.brand.toLowerCase() === 'poco',
  },
  {
    slug: 'realme',
    displayName: 'Katalog Smartphone realme Resmi',
    subTitle: 'realme Indonesia – Periscope Camera & Speed',
    accentColor: '#ffc915',
    borderColor: 'border-[#ffc915]',
    hoverBorder: 'hover:border-amber-400',
    filter: (p) => p.brand.toLowerCase() === 'realme',
  },
  {
    slug: 'infinix',
    displayName: 'Katalog Smartphone Infinix Resmi',
    subTitle: 'Infinix Indonesia – Gaming & Mecha Series',
    accentColor: '#111111',
    borderColor: 'border-gray-900',
    hoverBorder: 'hover:border-black',
    filter: (p) => p.brand.toLowerCase() === 'infinix',
  },
  {
    slug: 'apple',
    displayName: 'Katalog Apple iPhone Resmi iBox/Digimap',
    subTitle: 'Apple iPhone – iBox & Digimap (Resmi Indonesia)',
    accentColor: '#111111',
    borderColor: 'border-gray-900',
    hoverBorder: 'hover:border-black',
    filter: (p) => p.brand.toLowerCase() === 'apple',
  },
  {
    slug: 'tecno',
    displayName: 'Katalog Smartphone TECNO Resmi',
    subTitle: 'TECNO Indonesia – Camon & Spark Series',
    accentColor: '#0085ff',
    borderColor: 'border-[#0085ff]',
    hoverBorder: 'hover:border-blue-500',
    filter: (p) => p.brand.toLowerCase() === 'tecno',
  },
  {
    slug: 'poco-itel',
    displayName: 'Katalog Smartphone POCO & itel',
    subTitle: 'POCO – Flagship Killer | itel – Budget 5G Terjangkau',
    accentColor: '#facc15',
    borderColor: 'border-[#facc15]',
    hoverBorder: 'hover:border-amber-400',
    filter: (p) =>
      p.brand.toLowerCase() === 'poco' || p.brand.toLowerCase() === 'itel',
  },
  {
    slug: 'pixel-oneplus',
    displayName: 'Katalog Google Pixel & OnePlus',
    subTitle: 'Google Pixel & OnePlus – Pure Android & Never Settle',
    accentColor: '#333333',
    borderColor: 'border-gray-800',
    hoverBorder: 'hover:border-black',
    filter: (p) =>
      p.brand.toLowerCase() === 'google' ||
      p.brand.toLowerCase() === 'oneplus',
  },
  {
    slug: 'tablet',
    displayName: 'Katalog Tablet & iPad',
    subTitle: 'Semua Merek Tablet & iPad – Android & iPadOS',
    accentColor: '#333333',
    borderColor: 'border-gray-900',
    hoverBorder: 'hover:border-black',
    filter: (p) =>
      p.name.toLowerCase().includes('pad') ||
      p.name.toLowerCase().includes('tab'),
  },
];

export function getBrandConfig(slug: string): BrandConfig | null {
  return BRAND_CONFIGS.find((b) => b.slug === slug) ?? null;
}

export const ALL_BRAND_SLUGS = BRAND_CONFIGS.map((b) => b.slug);
