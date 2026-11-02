export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  isNew?: boolean;
  inStock: boolean;
  stockStatus: string;
  image: string;
  rating?: number;
  soldCount?: number;
  category: 'promo' | 'terlaris' | 'trending' | 'terbaru';
  specs?: {
    screen: string;
    ramStorage: string;
    camera: string;
    battery: string;
    processor: string;
    warranty: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  count: number;
  logoText?: string;
  accentColor?: string;
}
