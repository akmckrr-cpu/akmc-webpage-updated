"use client";

import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  slug: string;
  name: string;
  description: string;
  image?: string;
  category?: string;
}

export default function ProductCard({ slug, name, description, image, category }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`} className="block">
      <div className="card h-full">
        {/* Image */}
        <div className="product-image aspect-[4/3] relative overflow-hidden">
          {image ? (
            <Image 
              src={image} 
              alt={name} 
              fill 
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl opacity-20">
              ⚙
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {category && (
            <div className="typo-caption mb-2">{category}</div>
          )}
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-sm opacity-70 line-clamp-2">{description}</p>
          <div className="mt-4 flex items-center gap-1 text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
            View Details <span className="text-lg">›</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
