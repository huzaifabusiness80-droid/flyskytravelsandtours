"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  imageSrc: string;
}

const services: ServiceItem[] = [
  {
    id: "visa",
    slug: "visa-processing",
    title: "Visa Processing",
    imageSrc: "/visa_service.jpg",
  },
  {
    id: "flights",
    slug: "air-ticketing",
    title: "Air Ticketing",
    imageSrc: "/flight_service.jpg",
  },
  {
    id: "tours",
    slug: "tour-packages",
    title: "Tour Packages",
    imageSrc: "/tours_service.jpg",
  },
  {
    id: "umrah",
    slug: "umrah-services",
    title: "Umrah Services",
    imageSrc: "/destinations/dubai.jpg",
  },
  {
    id: "hotel",
    slug: "hotel-bookings",
    title: "Hotel Bookings",
    imageSrc: "/destinations/bahrain.jpg",
  },
  {
    id: "insurance",
    slug: "travel-insurance",
    title: "Travel Insurance",
    imageSrc: "/destinations/turkey.jpg",
  },
];

export default function ServicesSection() {
  const [list, setList] = useState<ServiceItem[]>(services);

  useEffect(() => {
    fetch("/api/admin/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          const mapped: ServiceItem[] = data.data.map((s: any) => ({
            id: s.id,
            slug: s.slug,
            title: s.title || s.name,
            imageSrc: s.heroImage || s.image || "/visa_service.jpg",
          }));
          setList(mapped);
        }
      })
      .catch(() => {});
  }, []);
  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2.5 font-normal">
            Comprehensive travel management and licensed visa solutions
          </p>
        </div>

        {/* Minimal Grid: Taller Image + Short Crisp Heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {list.map((service) => (
            <Link 
              key={service.id}
              href={`/services/${service.slug}`}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Container: Natural balanced 4/3 ratio, No Border, No Roundedness */}
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden rounded-none border border-slate-200 group-hover:border-[#00a8e8] transition-colors">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Interactive Pill Button Overlay on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-[#00a8e8] text-white text-xs font-bold uppercase tracking-wider rounded-none shadow-none flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Explore Service
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Heading: Bigger Font & Bold Text */}
              <div className="flex items-center justify-between mt-3.5">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-[#00a8e8] transition-colors">
                  {service.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#00a8e8] transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
