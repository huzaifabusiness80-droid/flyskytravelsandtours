"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Star } from "lucide-react";

interface PackageItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  originalPrice?: string;
  imageSrc: string;
  rating: number;
  reviewsCount: number;
  isSale?: boolean;
  link?: string;
}

const packages: PackageItem[] = [
  {
    id: "dubai-deluxe",
    title: "Dubai Deluxe Explorer",
    category: "City Tours, Desert Safari, Burj Khalifa",
    duration: "5 days",
    price: "PKR 145,000",
    originalPrice: "PKR 165,000",
    imageSrc: "/destinations/dubai.jpg",
    rating: 5,
    reviewsCount: 28,
    isSale: true,
    link: "/services/tour-packages/dubai-tour",
  },
  {
    id: "grand-turkey",
    title: "Grand Turkey & Cappadocia",
    category: "Istanbul, Bosphorus, Hot Air Balloon",
    duration: "7 days",
    price: "PKR 285,000",
    imageSrc: "/destinations/turkey.jpg",
    rating: 5,
    reviewsCount: 34,
    link: "/services/tour-packages/turkey-tour",
  },
  {
    id: "baku-azerbaijan",
    title: "Baku & Gabala Mountain Tour",
    category: "Shahdag Snow, City Tours, Historic",
    duration: "5 days",
    price: "PKR 165,000",
    originalPrice: "PKR 185,000",
    imageSrc: "/destinations/azerbaijan.jpg",
    rating: 5,
    reviewsCount: 19,
    isSale: true,
    link: "/services/tour-packages/baku-tour",
  },
  {
    id: "malaysia-escape",
    title: "Discover Malaysia & Langkawi",
    category: "Kuala Lumpur, Genting Cable Car, Beach",
    duration: "6 days",
    price: "PKR 195,000",
    imageSrc: "/destinations/malaysia.jpg",
    rating: 5,
    reviewsCount: 22,
    link: "/services/tour-packages",
  },
  {
    id: "thailand-island",
    title: "Thailand Bangkok & Phuket",
    category: "Island Hopping, City Tours, Beaches",
    duration: "6 days",
    price: "PKR 175,000",
    imageSrc: "/destinations/thailand.jpg",
    rating: 5,
    reviewsCount: 16,
    link: "/services/tour-packages",
  },
  {
    id: "london-uk",
    title: "London & UK Experience",
    category: "Iconic Landmarks, Shopping, Urban",
    duration: "8 days",
    price: "PKR 490,000",
    imageSrc: "/destinations/london.jpg",
    rating: 5,
    reviewsCount: 12,
    link: "/services/visa-processing/uk-visa",
  },
];

export default function FeaturedPackages() {
  const [list, setList] = useState<PackageItem[]>(packages);

  useEffect(() => {
    fetch("/api/admin/packages")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          const mapped: PackageItem[] = data.data.map((p: any) => ({
            id: p.id,
            title: p.title,
            category: p.category || p.destination || p.badge || "Guided Tour",
            duration: p.duration || "5 days",
            price: p.price,
            originalPrice: p.originalPrice,
            imageSrc: p.imageSrc || p.image || "/destinations/dubai.jpg",
            rating: p.rating || 5,
            reviewsCount: p.reviewsCount || 20,
            isSale: p.isSale !== undefined ? p.isSale : (p.badge?.toLowerCase().includes("sale") || false),
            link: p.link || `/services/tour-packages/${p.slug}`,
          }));
          setList(mapped);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="tours" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Consistent Style with Popular Destinations) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Featured Tour Packages
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2.5 font-normal">
            World&apos;s best international travel packages &amp; guided holidays
          </p>
        </div>

        {/* 3-Column Grid matching the exact reference card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {list.map((pkg) => (
            <Link
              key={pkg.id}
              href={pkg.link || "/services/tour-packages"}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-md hover:border-slate-300 group"
            >
              {/* Image Container with Price Badge and Sale Tag */}
              <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                <Image
                  src={pkg.imageSrc}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Price Badge on Bottom Left of Image */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 z-10">
                  {pkg.originalPrice && (
                    <span className="bg-black/60 backdrop-blur-xs text-white/80 line-through text-xs font-semibold px-2 py-1 rounded-xs">
                      {pkg.originalPrice}
                    </span>
                  )}
                  <span className="bg-[#e61c24] text-white text-xs sm:text-sm font-bold px-2.5 py-1 rounded-xs shadow-none">
                    {pkg.price}
                  </span>
                </div>

                {/* Sale Tag on Top Right */}
                {pkg.isSale && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-[#00a8e8] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Sale
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body (Clean, structured, matching reference design) */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-900 group-hover:text-[#00a8e8] transition-colors leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal line-clamp-1">
                    {pkg.category}
                  </p>
                </div>

                {/* Card Footer: Rating Stars + Duration */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  {/* Rating Stars & Reviews in Cyan/Teal color */}
                  <div className="flex items-center gap-1.5 text-[#00a8e8]">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < pkg.rating ? "fill-[#00a8e8] text-[#00a8e8]" : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-slate-500 font-normal">
                      {pkg.reviewsCount} reviews
                    </span>
                  </div>

                  {/* Duration with clock icon */}
                  <div className="flex items-center gap-1 text-slate-600 font-normal">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
