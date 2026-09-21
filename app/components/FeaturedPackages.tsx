"use client";

import Image from "next/image";
import { Clock, MapPin, Check, ArrowRight, Star } from "lucide-react";

interface PackageItem {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  imageSrc: string;
  tag: string;
  includes: string[];
}

const packages: PackageItem[] = [
  {
    id: "dubai",
    title: "Dubai Deluxe Tour & City Explorer",
    destination: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: "PKR 145,000*",
    imageSrc: "/tours_service.jpg",
    tag: "Best Seller",
    includes: ["UAE Tourist Visa", "4-Star Hotel Stay", "Desert Safari & Dinner", "Airport Transfers"],
  },
  {
    id: "turkey",
    title: "Istanbul & Cappadocia Wonders",
    destination: "Turkey",
    duration: "7 Days / 6 Nights",
    price: "PKR 285,000*",
    imageSrc: "/banner-1.png",
    tag: "Top Rated",
    includes: ["Turkey Sticker Visa", "Luxury Hotel Stay", "Bosphorus Cruise Tour", "Domestic Flight"],
  },
  {
    id: "baku",
    title: "Baku Azerbaijan Grand Tour",
    destination: "Baku, Azerbaijan",
    duration: "5 Days / 4 Nights",
    price: "PKR 165,000*",
    imageSrc: "/banner-2.png",
    tag: "Popular",
    includes: ["Easy E-Visa Issue", "City Sightseeing", "Gabala Day Trip", "Daily Breakfast"],
  },
  {
    id: "umrah-exec",
    title: "Executive 5-Star Umrah Package",
    destination: "Makkah & Madinah",
    duration: "14 Days / 13 Nights",
    price: "PKR 340,000*",
    imageSrc: "/visa_service.jpg",
    tag: "Spiritual",
    includes: ["Hotels Facing Haram", "Saudi Tourist/Umrah Visa", "VIP Transport", "Ziyarat Tours"],
  },
  {
    id: "malaysia",
    title: "Kuala Lumpur & Langkawi Escape",
    destination: "Malaysia",
    duration: "6 Days / 5 Nights",
    price: "PKR 195,000*",
    imageSrc: "/flight_service.jpg",
    tag: "Trending",
    includes: ["Malaysia E-Visa", "Beach Resort Stay", "Genting Cable Car", "Intercity Transfers"],
  },
  {
    id: "uk-tour",
    title: "London & UK Experience Package",
    destination: "United Kingdom",
    duration: "8 Days / 7 Nights",
    price: "PKR 490,000*",
    imageSrc: "/banner-1.png",
    tag: "Premium",
    includes: ["UK Visa Consultancy", "Central London Hotel", "Hop-On Sightseeing", "Airport Pickup"],
  },
];

export default function FeaturedPackages() {
  return (
    <section id="tours" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#e0f2fe] text-[#00a8e8] font-bold text-xs uppercase tracking-wider rounded-md border border-sky-200">
            <span>Featured Travel Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3663] tracking-tight">
            Popular Tour Destinations & Packages
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our curated international tour packages with all-inclusive hotel accommodations, guided tours, and visa assistance.
          </p>
        </div>

        {/* Tour Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-[#00a8e8] transition-all duration-300 group shadow-none"
            >
              <div>
                {/* Image Header */}
                <div className="relative w-full h-56 bg-slate-900 overflow-hidden">
                  <Image
                    src={pkg.imageSrc}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Tag Badge */}
                  <div className="absolute top-4 left-4 bg-[#e61c24] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-none">
                    {pkg.tag}
                  </div>

                  {/* Destination Info on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#00a8e8]">
                      <MapPin className="w-4 h-4 text-[#00a8e8]" />
                      <span>{pkg.destination}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>4.9</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      <Clock className="w-3.5 h-3.5 text-[#00a8e8]" />
                      {pkg.duration}
                    </span>
                    <span className="text-lg font-extrabold text-[#0b3663]">
                      {pkg.price}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0b3663] group-hover:text-[#00a8e8] transition-colors leading-snug">
                    {pkg.title}
                  </h3>

                  {/* Included List */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Package Includes:
                    </span>
                    {pkg.includes.map((inc, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#00a8e8] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button (Strict NO SHADOW) */}
              <div className="p-6 pt-0">
                <a 
                  href={`https://wa.me/923001871622?text=Hello%20Fly%20Sky%20Travels,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#0b3663] hover:bg-[#e61c24] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 border-none outline-none shadow-none"
                >
                  <span>Inquire This Package</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
