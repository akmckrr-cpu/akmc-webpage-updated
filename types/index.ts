export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory?: string;
  brand: string;
  description: string;
  shortDescription: string;
  price?: number;
  unit: string;
  variants: ProductVariant[];
  images: string[];
  specs: Record<string, string>;
  faqs: FAQ[];
  seoTitle: string;
  seoDescription: string;
  schema: Record<string, unknown>;
  inStock: boolean;
  minOrderQty: number;
  tags: string[];
}

export interface ProductVariant {
  id: string;
  name: string;
  value: string;
  price?: number;
  sku: string;
  inStock: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ACPCatalogItem {
  id: string;
  slug: string;
  name: string;
  designName: string;
  series: string;
  image: string;
  thumbnail: string;
  dimensions: string;
  colors: string[];
  usage: string[];
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export interface VehiclePlywoodItem {
  id: string;
  slug: string;
  vehicleName: string;
  vehicleBrand: string;
  vehicleModel: string;
  image: string;
  thickness: string;
  size: string;
  description: string;
  features: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface LocationPage {
  city: string;
  citySlug: string;
  state: string;
  stateSlug: string;
  category: string;
  categorySlug: string;
  categoryDisplay: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  products: string[];
  nearbyAreas: string[];
}

export interface BusBodyMaterial {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  applications: string[];
  specifications: Record<string, string>;
  relatedProducts: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface QuoteItem {
  productId: string;
  productName: string;
  variant?: string;
  quantity: number;
  unit: string;
  notes?: string;
}

export interface QuoteRequest {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  company?: string;
  city: string;
  items: QuoteItem[];
  message?: string;
  status: "pending" | "quoted" | "closed";
  createdAt?: string;
}

export interface City {
  name: string;
  slug: string;
  state: string;
  stateSlug: string;
  type: "major" | "secondary";
  population?: string;
  industries?: string[];
}

export interface Category {
  name: string;
  slug: string;
  displayName: string;
  description: string;
  icon: string;
  subcategories?: string[];
}
