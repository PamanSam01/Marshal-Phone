import { notFound } from 'next/navigation';
import { getBrandConfig, ALL_BRAND_SLUGS } from '@/data/brands';
import BrandPageClient from '@/components/BrandPageClient';

interface BrandPageProps {
  params: Promise<{ brand: string }>;
}

/** Pre-generate all brand pages at build time */
export function generateStaticParams() {
  return ALL_BRAND_SLUGS.map((slug) => ({ brand: slug }));
}

/** Generate metadata per brand page */
export async function generateMetadata({ params }: BrandPageProps) {
  const { brand } = await params;
  const config = getBrandConfig(brand);
  if (!config) return { title: 'Katalog Tidak Ditemukan – Marshall Phone Cell' };
  return {
    title: `${config.displayName} – Marshall Phone Cell`,
    description: `${config.subTitle}. Beli smartphone original bergaransi resmi hanya di Marshall Phone Cell, Tasikmalaya.`,
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { brand } = await params;
  const config = getBrandConfig(brand);

  if (!config) {
    notFound();
  }

  // Pass only the serializable slug — BrandPageClient calls getBrandConfig(slug) itself
  // to avoid passing the non-serializable filter function across the server/client boundary
  return <BrandPageClient slug={brand} />;
}
