import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductsByCategory, searchProducts } from "@/lib/data/products";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { generateBreadcrumbSchema } from "@/lib/seo-utils";
import Script from "next/script";
import { ShoppingCart, Filter, Search } from "lucide-react";

interface ProductsPageProps {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export async function generateMetadata({ searchParams }: ProductsPageProps): Promise<Metadata> {
  const { category, q } = await searchParams;
  if (q) {
    return {
      title: `Search: ${q} | Bus Body Materials`,
      description: `Search results for "${q}" in bus body building materials.`,
    };
  }
  if (category) {
    const cat = getCategoryBySlug(category);
    return {
      title: `${cat?.displayName || "Products"} | Bus Body Materials`,
      description: cat?.description || "Browse our complete range of bus body building materials.",
    };
  }
  return {
    title: "All Products | Bus Body Building Materials",
    description: "Complete catalog of aluminium extrusions, ACP sheets, plywood, paints, sealants, and hardware for bus body construction.",
  };
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category, q } = await searchParams;

  let displayProducts = products;
  let activeCategory = null;

  if (q) {
    displayProducts = searchProducts(q);
  } else if (category) {
    activeCategory = getCategoryBySlug(category);
    if (!activeCategory) notFound();
    displayProducts = getProductsByCategory(category);
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    ...(activeCategory ? [{ name: activeCategory.displayName, url: `/products?category=${activeCategory.slug}` }] : []),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-primary-600" />
              <h2 className="font-semibold text-metal-900">Categories</h2>
            </div>
            <div className="space-y-1">
              <Link
                href="/products"
                className={`block px-3 py-2 rounded-lg text-sm ${!category ? "bg-primary-50 text-primary-700 font-medium" : "text-metal-600 hover:bg-metal-50"}`}
              >
                All Products
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products?category=${cat.slug}`}
                  className={`block px-3 py-2 rounded-lg text-sm ${category === cat.slug ? "bg-primary-50 text-primary-700 font-medium" : "text-metal-600 hover:bg-metal-50"}`}
                >
                  {cat.displayName}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-metal-900 mb-2">
              {q ? `Search: "${q}"` : activeCategory?.displayName || "All Products"}
            </h1>
            <p className="text-metal-500">
              {displayProducts.length} product{displayProducts.length !== 1 ? "s" : ""} available
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {displayProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-2xl border border-metal-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] bg-metal-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-metal-400">
                    <ShoppingCart className="w-12 h-12" />
                  </div>
                  {product.inStock && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-md">
                      In Stock
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-metal-900 group-hover:text-primary-700 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm text-metal-500 mb-3 line-clamp-2">{product.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary-700">
                        ₹{Math.min(...product.variants.map(v => v.price || 0)).toLocaleString()}
                      </span>
                      <span className="text-sm text-metal-400"> / {product.unit}</span>
                    </div>
                    <span className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded-md">
                      {product.brand}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {product.variants.slice(0, 3).map((v) => (
                      <span key={v.id} className="text-xs px-2 py-1 bg-metal-50 text-metal-600 rounded border border-metal-200">
                        {v.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {displayProducts.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-metal-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-metal-700 mb-2">No products found</h3>
              <p className="text-metal-500">Try adjusting your search or browse all categories</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
