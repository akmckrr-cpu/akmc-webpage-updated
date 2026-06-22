import { Metadata } from "next";
import Link from "next/link";
import { vehiclePlywoodItems } from "@/lib/data/vehiclePlywood";
import { Truck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Chequered Plywood for Commercial Vehicles | Tata Ace, Dost, Jeeto | AKMC",
  description: "Vehicle-specific chequered plywood for Tata Ace, Ashok Leyland Dost, Dost+, Mahindra Jeeto, and more. BWP grade, anti-slip, custom cut. Wholesale at A Karur Metal Co., Karur.",
};

export default function VehiclePlywoodPage() {
  const brands = [...new Set(vehiclePlywoodItems.map(v => v.vehicleBrand))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-metal-900 mb-3">Vehicle-Specific Chequered Plywood</h1>
        <p className="text-metal-500 max-w-2xl mx-auto">
          Anti-slip chequered plywood pre-cut and customized for popular commercial vehicles. 
          BWP grade with marine bonding for maximum durability.
        </p>
      </div>

      {brands.map((brand) => {
        const vehicles = vehiclePlywoodItems.filter(v => v.vehicleBrand === brand);
        return (
          <div key={brand} className="mb-12">
            <h2 className="text-xl font-bold text-metal-900 mb-4">{brand}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((vehicle) => (
                <Link
                  key={vehicle.id}
                  href={`/vehicle-plywood/${vehicle.slug}`}
                  className="group p-6 bg-white rounded-2xl border border-metal-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-metal-900 mb-1 group-hover:text-primary-700 transition-colors">
                    {vehicle.vehicleName}
                  </h3>
                  <p className="text-sm text-metal-500 mb-3">{vehicle.vehicleBrand}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 bg-metal-50 text-metal-600 rounded border">{vehicle.thickness}</span>
                    <span className="text-xs px-2 py-1 bg-metal-50 text-metal-600 rounded border">{vehicle.size}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-primary-600 font-medium">
                    View Details <ArrowRight className="w-4 h-4" />
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
