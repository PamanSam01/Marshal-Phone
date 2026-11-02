import { Product, Brand } from '@/types/product';

export const PROMO_PRODUCTS: Product[] = [
  {
    id: 'promo-1',
    name: 'Samsung Galaxy A55 5G',
    brand: 'Samsung',
    price: 4999000,
    originalPrice: 5999000,
    discountPercent: 17,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/samsung-a55.jpg',
    rating: 4.9,
    soldCount: 342,
    category: 'promo',
    specs: {
      screen: '6.6" Super AMOLED 120Hz',
      ramStorage: '8GB / 256GB',
      camera: '50MP OIS + 12MP Ultrawide + 5MP Macro',
      battery: '5000 mAh 25W Fast Charge',
      processor: 'Exynos 1480 (4nm)',
      warranty: '1 Tahun Garansi Resmi SEIN'
    }
  },
  {
    id: 'promo-2',
    name: 'Xiaomi Redmi Note 13 Pro 5G',
    brand: 'Xiaomi',
    price: 3699000,
    originalPrice: 4499000,
    discountPercent: 17,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/redmi-note-13.jpg',
    rating: 4.8,
    soldCount: 521,
    category: 'promo',
    specs: {
      screen: '6.67" AMOLED 1.5K 120Hz',
      ramStorage: '12GB / 512GB',
      camera: '200MP OIS Ultra-Clear Camera',
      battery: '5100 mAh 67W Turbo Charge',
      processor: 'Snapdragon 7s Gen 2',
      warranty: '15 Bulan Garansi Resmi Xiaomi'
    }
  },
  {
    id: 'promo-3',
    name: 'OPPO Reno11 5G',
    brand: 'OPPO',
    price: 5499000,
    originalPrice: 6499000,
    discountPercent: 15,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/oppo-reno-11.jpg',
    rating: 4.9,
    soldCount: 289,
    category: 'promo',
    specs: {
      screen: '6.7" 3D Curved AMOLED 120Hz',
      ramStorage: '8GB / 256GB',
      camera: '50MP Sony IMX890 OIS + 32MP Telephoto',
      battery: '5000 mAh 67W SUPERVOOC',
      processor: 'MediaTek Dimensity 7050',
      warranty: '1 Tahun Garansi Resmi OPPO Indonesia'
    }
  },
  {
    id: 'promo-4',
    name: 'realme 12 Pro+ 5G',
    brand: 'realme',
    price: 5299000,
    originalPrice: 6299000,
    discountPercent: 16,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/realme-12-pro.jpg',
    rating: 4.8,
    soldCount: 198,
    category: 'promo',
    specs: {
      screen: '6.7" Curved OLED 120Hz',
      ramStorage: '12GB / 512GB',
      camera: '64MP Periscope Telephoto 3x Optical',
      battery: '5000 mAh 67W SuperVOOC',
      processor: 'Snapdragon 7s Gen 2',
      warranty: '1 Tahun Garansi Resmi realme'
    }
  }
];

export const TERLARIS_PRODUCTS: Product[] = [
  {
    id: 'laris-1',
    name: 'Apple iPhone 15 128GB',
    brand: 'Apple',
    price: 13999000,
    originalPrice: 15499000,
    discountPercent: 10,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/iphone-15.jpg',
    rating: 5.0,
    soldCount: 840,
    category: 'terlaris',
    specs: {
      screen: '6.1" Super Retina XDR OLED Dynamic Island',
      ramStorage: '6GB / 128GB',
      camera: '48MP Main + 12MP Ultra Wide',
      battery: 'USB-C Fast Charging + MagSafe',
      processor: 'Apple A16 Bionic (4nm)',
      warranty: '1 Tahun Garansi Resmi iBox / Digimap'
    }
  },
  {
    id: 'laris-2',
    name: 'Samsung Galaxy S24 FE 5G',
    brand: 'Samsung',
    price: 9499000,
    originalPrice: 10499000,
    discountPercent: 10,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/samsung-s24.jpg',
    rating: 4.9,
    soldCount: 412,
    category: 'terlaris',
    specs: {
      screen: '6.7" Dynamic AMOLED 2X 120Hz',
      ramStorage: '8GB / 256GB',
      camera: '50MP OIS + 8MP Tele 3x + 12MP UW',
      battery: '4700 mAh 25W Fast Charge',
      processor: 'Exynos 2400e (4nm)',
      warranty: '1 Tahun Garansi Resmi SEIN'
    }
  },
  {
    id: 'laris-3',
    name: 'POCO X6 Pro 5G',
    brand: 'Xiaomi',
    price: 4299000,
    originalPrice: 4899000,
    discountPercent: 12,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/poco-x6.jpg',
    rating: 4.9,
    soldCount: 673,
    category: 'terlaris',
    specs: {
      screen: '6.67" Flow AMOLED 1.5K 120Hz',
      ramStorage: '12GB / 512GB UFS 4.0',
      camera: '64MP OIS Triple Camera',
      battery: '5000 mAh 67W Turbo Charge',
      processor: 'Dimensity 8300-Ultra (Flagship Killer)',
      warranty: '15 Bulan Garansi Resmi Xiaomi'
    }
  },
  {
    id: 'laris-4',
    name: 'vivo V30 5G',
    brand: 'vivo',
    price: 5799000,
    originalPrice: 6299000,
    discountPercent: 8,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/vivo-v30.jpg',
    rating: 4.8,
    soldCount: 388,
    category: 'terlaris',
    specs: {
      screen: '6.78" 3D Curved AMOLED 120Hz',
      ramStorage: '12GB + 12GB Extended / 512GB',
      camera: '50MP VCS True Color OIS + Aura Light Portrait',
      battery: '5000 mAh 80W FlashCharge',
      processor: 'Snapdragon 7 Gen 3',
      warranty: '1 Tahun Garansi Resmi vivo Indonesia'
    }
  }
];

export const TRENDING_PRODUCTS: Product[] = [
  {
    id: 'trend-1',
    name: 'Samsung Galaxy A35 5G',
    brand: 'Samsung',
    price: 4399000,
    originalPrice: 4799000,
    discountPercent: 8,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/samsung-a35.jpg',
    rating: 4.8,
    soldCount: 295,
    category: 'trending',
    specs: {
      screen: '6.6" Super AMOLED 120Hz Gorilla Glass Victus+',
      ramStorage: '8GB / 256GB',
      camera: '50MP OIS + 8MP Ultrawide',
      battery: '5000 mAh 25W Fast Charge',
      processor: 'Exynos 1380 (5nm)',
      warranty: '1 Tahun Garansi Resmi SEIN'
    }
  },
  {
    id: 'trend-2',
    name: 'Infinix GT 20 Pro 5G',
    brand: 'Infinix',
    price: 3999000,
    originalPrice: 4399000,
    discountPercent: 9,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/infinix-gt.jpg',
    rating: 4.9,
    soldCount: 510,
    category: 'trending',
    specs: {
      screen: '6.78" AMOLED 144Hz Cyber Mecha Design',
      ramStorage: '12GB / 256GB',
      camera: '108MP OIS Triple Camera + LED RGB Backlit',
      battery: '5000 mAh 45W FastCharge',
      processor: 'Dimensity 8200 Ultimate 4nm + Dedicated Gaming Chip',
      warranty: '1 Tahun Garansi Resmi Carlcare'
    }
  },
  {
    id: 'trend-3',
    name: 'itel P55 5G',
    brand: 'itel',
    price: 2099000,
    originalPrice: 2299000,
    discountPercent: 9,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/itel-p55.jpg',
    rating: 4.7,
    soldCount: 780,
    category: 'trending',
    specs: {
      screen: '6.6" HD+ 90Hz Display',
      ramStorage: '6GB + 6GB / 128GB',
      camera: '50MP Dual Rear Camera',
      battery: '5000 mAh 18W Fast Charge',
      processor: 'MediaTek Dimensity 6080 5G',
      warranty: '1 Tahun Garansi Resmi itel'
    }
  },
  {
    id: 'trend-4',
    name: 'Tecno Camon 20 Premier 5G',
    brand: 'Tecno',
    price: 4699000,
    originalPrice: 5199000,
    discountPercent: 10,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/tecno-camon.jpg',
    rating: 4.8,
    soldCount: 224,
    category: 'trending',
    specs: {
      screen: '6.67" AMOLED 120Hz Ceramic Back',
      ramStorage: '8GB / 512GB',
      camera: '50MP RGBW Sensor-Shift OIS + 108MP UW',
      battery: '5000 mAh 45W Flash Charge',
      processor: 'MediaTek Dimensity 8050',
      warranty: '13 Bulan Garansi Resmi Tecno'
    }
  }
];

export const TERBARU_PRODUCTS: Product[] = [
  {
    id: 'baru-1',
    name: 'Samsung Galaxy S25 Ultra 5G',
    brand: 'Samsung',
    price: 19999000,
    originalPrice: 21999000,
    discountPercent: 9,
    isNew: true,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/samsung-s25-ultra.jpg',
    rating: 5.0,
    soldCount: 94,
    category: 'terbaru',
    specs: {
      screen: '6.8" Dynamic AMOLED 2X QHD+ 120Hz Anti-Reflective',
      ramStorage: '12GB / 512GB Titanium Frame',
      camera: '200MP Main + 50MP Periscope 5x + 50MP UW + S-Pen',
      battery: '5000 mAh 45W Fast Charging 2.0',
      processor: 'Snapdragon 8 Elite for Galaxy (3nm)',
      warranty: '1 Tahun Garansi Resmi SEIN'
    }
  },
  {
    id: 'baru-2',
    name: 'Apple iPhone 16 128GB',
    brand: 'Apple',
    price: 15999000,
    originalPrice: 16999000,
    discountPercent: 6,
    isNew: true,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/iphone-16.jpg',
    rating: 5.0,
    soldCount: 165,
    category: 'terbaru',
    specs: {
      screen: '6.1" Super Retina XDR Ceramic Shield Gen 2',
      ramStorage: '8GB / 128GB (Apple Intelligence Ready)',
      camera: '48MP Fusion Camera + Camera Control Button',
      battery: 'Up to 22h Video Playback + 25W MagSafe',
      processor: 'Apple A18 Chip (3nm)',
      warranty: '1 Tahun Garansi Resmi Apple Indonesia'
    }
  },
  {
    id: 'baru-3',
    name: 'OnePlus 13 5G',
    brand: 'OnePlus',
    price: 12499000,
    originalPrice: 13499000,
    discountPercent: 7,
    isNew: true,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/oneplus-13.jpg',
    rating: 4.9,
    soldCount: 82,
    category: 'terbaru',
    specs: {
      screen: '6.82" 2K Oriental Screen 120Hz LTPO',
      ramStorage: '16GB / 512GB',
      camera: '50MP Sony LYT-808 Hasselblad Triple Camera',
      battery: '6000 mAh Glacier Battery 100W SUPERVOOC',
      processor: 'Snapdragon 8 Elite (3nm)',
      warranty: '1 Tahun Garansi Resmi OnePlus'
    }
  },
  {
    id: 'baru-4',
    name: 'Google Pixel 9 5G',
    brand: 'Google',
    price: 10999000,
    originalPrice: 11999000,
    discountPercent: 8,
    isNew: true,
    inStock: true,
    stockStatus: 'Ada',
    image: '/products/pixel-9.jpg',
    rating: 4.9,
    soldCount: 76,
    category: 'terbaru',
    specs: {
      screen: '6.3" Actua OLED 120Hz Gorilla Glass Victus 2',
      ramStorage: '12GB / 128GB (Gemini Nano On-Device)',
      camera: '50MP Main + 48MP Ultrawide Macro Focus',
      battery: '4700 mAh 27W Fast Charge + 7 Years OS Updates',
      processor: 'Google Tensor G4 + Titan M2 Security',
      warranty: '1 Tahun Garansi Toko & IMEI Terdaftar Bea Cukai'
    }
  }
];

export const ALL_PRODUCTS: Product[] = [
  ...PROMO_PRODUCTS,
  ...TERLARIS_PRODUCTS,
  ...TRENDING_PRODUCTS,
  ...TERBARU_PRODUCTS
];

export const POPULAR_BRANDS: Brand[] = [
  { id: 'samsung', name: 'Samsung', tagline: 'Galaxy AI & Flagship', count: 48, logoText: 'SAMSUNG', accentColor: '#1428A0' },
  { id: 'apple', name: 'Apple', tagline: 'iPhone & Ekosistem iOS', count: 32, logoText: 'APPLE', accentColor: '#000000' },
  { id: 'oppo', name: 'OPPO', tagline: 'Portrait Expert & VOOC', count: 27, logoText: 'OPPO', accentColor: '#0F8B44' },
  { id: 'vivo', name: 'vivo', tagline: 'Aura Light & Zeiss Optics', count: 24, logoText: 'VIVO', accentColor: '#415FFF' },
  { id: 'xiaomi', name: 'Xiaomi', tagline: 'Value King & Leica Cam', count: 39, logoText: 'XIAOMI', accentColor: '#FF6900' },
  { id: 'realme', name: 'realme', tagline: 'Periscope Camera & Speed', count: 21, logoText: 'REALME', accentColor: '#FFC800' },
  { id: 'infinix', name: 'Infinix', tagline: 'Gaming Phone & Mecha', count: 18, logoText: 'INFINIX', accentColor: '#000000' },
  { id: 'tecno', name: 'Tecno', tagline: 'Innovative Design & Camon', count: 15, logoText: 'TECNO', accentColor: '#0057B8' },
  { id: 'itel', name: 'itel', tagline: 'Budget 5G Terjangkau', count: 12, logoText: 'ITEL', accentColor: '#E60012' },
  { id: 'oneplus', name: 'OnePlus', tagline: 'Never Settle Flagship', count: 9, logoText: 'ONEPLUS', accentColor: '#EB0029' }
];

export const HERO_SLIDES = [
  {
    id: 1,
    tag: 'SPESIAL PROMO BULAN INI',
    title: 'Smartphone Terbaru -\nTren Teknologi Terkini',
    description: 'Temukan koleksi smartphone terkini dengan fitur canggih, harga terbaik, dan promo menarik hanya di Marshall Phone Cell.',
    ctaText: 'Belanja Sekarang',
    badge: 'Diskon s.d 40% + Bebas Ongkir',
    image: '/images/hero-1.jpg',
    gradient: 'from-[#0055ff] via-[#0066ff] to-[#0044cc]'
  },
  {
    id: 2,
    tag: 'FLAGSHIP AI REVOLUTION',
    title: 'Samsung Galaxy Series -\nEra Baru Galaxy AI',
    description: 'Nikmati performa puncak Snapdragon 8 Elite, kamera 200MP, dan fitur Live Translate AI. Cicilan 0% hingga 24 bulan.',
    ctaText: 'Lihat Penawaran',
    badge: 'Cashback s.d Rp 2.000.000',
    image: '/images/hero-2.jpg',
    gradient: 'from-[#003bb3] via-[#0052cc] to-[#002f8a]'
  },
  {
    id: 3,
    tag: 'PROGRAM TRADE-IN FIESTA',
    title: 'Tukar Tambah HP Lama -\nLangsung Bawa Pulang Baru',
    description: 'Bawa smartphone lama Anda dalam kondisi apapun. Dapatkan taksiran harga tertinggi plus bonus earphone nirkabel premium.',
    ctaText: 'Simulasi Trade-In',
    badge: 'Bonus Ekstra Rp 1.500.000',
    image: '/images/hero-3.jpg',
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
