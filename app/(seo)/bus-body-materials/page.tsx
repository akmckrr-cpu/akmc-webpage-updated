import { Metadata } from "next";
import Link from "next/link";
import { busBodyMaterials } from "@/lib/data/busBodyMaterials";
import { Bus, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bus Body Building Materials | Complete Range | AKMC Karur",
  description: "Complete range of bus body building materials: aluminium extrusion, ACP sheets, plywood, hardware, sealants, paints. AIS-052 compliant. Wholesale at A Karur Metal Co., Karur.",
};

export default function BusBodyMaterialsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-metal-900 mb-3">Bus Body Building Materials</h1>
        <p className="text-metal-500 max-w-2xl mx-auto">
          Complete range of materials for bus body construction. All products meet AIS-052 standards.
          Custom packages available for OEMs and body builders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {busBodyMaterials.map((material) => (
          <Link
            key={material.id}
            href={`/bus-body-materials/${material.slug}`}
            className="group flex gap-5 p-6 bg-white rounded-2xl border border-metal-200 hover:shadow-lg transition-all"
          >
            <div className="w-20 h-20 bg-metal-100 rounded-xl flex items-center justify-center shrink-0">
              <Bus className="w-8 h-8 text-metal-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-metal-900 mb-2 group-hover:text-primary-700 transition-colors">
                {material.title}
              </h3>
              <p className="text-sm text-metal-500 line-clamp-2 mb-3">{material.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {material.applications.slice(0, 3).map((app) => (
                  <span key={app} className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded">{app}</span>
                ))}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-metal-300 group-hover:text-primary-600 transition-colors shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
