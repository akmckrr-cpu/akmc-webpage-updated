import { Metadata } from "next";
import Link from "next/link";
import { acpDesigns, getAllSeries } from "@/lib/data/acpDesigns";
import { Layers, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ACP Sheet Designs for Bus Interior | 20+ Designs | AKMC Karur",
  description: "Browse 20+ ACP sheet designs for bus ceiling and interior applications. Floral, geometric, wood grain, metallic finishes. Wholesale pricing at A Karur Metal Co., Karur.",
};

export default function ACPDesignsPage() {
  const series = getAllSeries();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-metal-900 mb-3">ACP Sheet Design Catalog</h1>
        <p className="text-metal-500 max-w-2xl mx-auto">
          Premium aluminium composite panel designs for bus interiors, ceilings, and decorative applications. 
          Available in multiple series with custom print options.
        </p>
      </div>

      {series.map((seriesName) => {
        const designs = acpDesigns.filter((d) => d.series === seriesName);
        return (
          <div key={seriesName} className="mb-12">
            <h2 className="text-xl font-bold text-metal-900 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary-600" />
              {seriesName}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {designs.map((design) => (
                <Link
                  key={design.id}
                  href={`/acp-designs/${design.slug}`}
                  className="group bg-white rounded-xl border border-metal-200 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="aspect-square bg-metal-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-metal-400">
                      <Layers className="w-10 h-10" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                      <span className="text-white text-xs font-medium">{design.designName}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-sm text-metal-500 line-clamp-1">{design.usage.slice(0, 2).join(", ")}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
