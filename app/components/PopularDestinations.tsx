"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plane } from "lucide-react";

interface Destination {
  id: string;
  name: string;
  country: string;
  imageSrc: string;
  visaType: string;
  processingTime: string;
  highlight: string;
  link: string;
}

const destinations: Destination[] = [
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    imageSrc: "/destinations/dubai.jpg",
    visaType: "5 Year Multiple & Tourist",
    processingTime: "24-48 Hours",
    highlight: "Done Base Tourist Visa",
    link: "/services/visa-processing/uae-visa",
  },
  {
    id: "bahrain",
    name: "Bahrain",
    country: "Bahrain",
    imageSrc: "/destinations/bahrain.jpg",
    visaType: "Single & Multiple Entry",
    processingTime: "3-5 Working Days",
    highlight: "Stunning Views & Visit Visa",
    link: "/services/visa-processing",
  },
  {
    id: "turkey",
    name: "Turkey",
    country: "Turkey",
    imageSrc: "/destinations/turkey.jpg",
    visaType: "E-Visa & Sticker Visa",
    processingTime: "Hassle-Free Approval",
    highlight: "Istanbul & Cappadocia",
    link: "/services/visa-processing/turkey-visa",
  },
  {
    id: "malaysia",
    name: "Malaysia",
    country: "Malaysia",
    imageSrc: "/destinations/malaysia.jpg",
    visaType: "E-Visa & Tourist Visa",
    processingTime: "Quick Approval",
    highlight: "Kuala Lumpur & Islands",
    link: "/services/tour-packages",
  },
  {
    id: "thailand",
    name: "Thailand",
    country: "Thailand",
    imageSrc: "/destinations/thailand.jpg",
    visaType: "Tourist Visa",
    processingTime: "Fast Processing",
    highlight: "Bangkok & Phuket Tours",
    link: "/services/tour-packages",
  },
  {
    id: "azerbaijan",
    name: "Azerbaijan",
    country: "Azerbaijan",
    imageSrc: "/destinations/azerbaijan.jpg",
    visaType: "ASAN E-Visa",
    processingTime: "3 Hours / 3 Days",
    highlight: "Baku City & Mountains",
    link: "/services/visa-processing/azerbaijan-visa",
  },
  {
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    imageSrc: "/destinations/singapore.jpg",
    visaType: "E-Visa Facility",
    processingTime: "Fast Track",
    highlight: "Marina Bay & City Tours",
    link: "/services/visa-processing",
  },
  {
    id: "egypt",
    name: "Egypt",
    country: "Egypt",
    imageSrc: "/destinations/egypt.jpg",
    visaType: "Tourist & Visit Visa",
    processingTime: "Smooth Processing",
    highlight: "Pyramids & Historic Tours",
    link: "/services/visa-processing",
  },
];

export default function PopularDestinations() {
  const [list, setList] = useState<Destination[]>(destinations);

  useEffect(() => {
    fetch("/api/admin/destinations")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          const mapped: Destination[] = data.data.map((d: any) => ({
            id: d.id,
            name: d.name,
            country: d.country,
            imageSrc: d.imageSrc || d.image || "/destinations/dubai.jpg",
            visaType: d.visaType || "Tourist & Visit Visa",
            processingTime: d.processingTime || "Fast Processing",
            highlight: d.highlight || d.description || `${d.name} tours and visas`,
            link: d.link || `/services/visa-processing`,
          }));
          setList(mapped);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="destinations" className="w-full py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matches User's UI Reference Exactly) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Popular Destinations
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2.5 font-normal">
            World&apos;s best tourist destinations &amp; visa services
          </p>
        </div>

        {/* 4-Column Grid of Square Destination Cards (Matches Reference UI) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {list.map((dest) => (
            <Link
              key={dest.id}
              href={dest.link}
              className="group relative aspect-square overflow-hidden cursor-pointer bg-slate-900 select-none transition-all duration-300 hover:shadow-lg"
            >
              {/* Destination Background Image with Smooth Hover Zoom */}
              <Image
                src={dest.imageSrc}
                alt={`${dest.name} - ${dest.country}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Bottom Dark Gradient Shadow for High Contrast Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Top Badge: Visa Availability with Professional Plane Icon */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-2.5 py-1 bg-[#e61c24] text-white text-[11px] font-semibold rounded-none uppercase tracking-wide flex items-center gap-1.5 shadow-none">
                  <Plane className="w-3 h-3 rotate-45" />
                  Apply Visa
                </span>
              </div>

              {/* Bottom Information (Matches Reference UI: Clean, balanced font weight) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 flex items-end justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl text-white tracking-normal leading-tight font-bold">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00a8e8]" />
                    {dest.visaType}
                  </p>
                </div>

                {/* Modern Action Arrow */}
                <div className="w-7 h-7 rounded-none bg-white/20 backdrop-blur-sm group-hover:bg-[#00a8e8] text-white flex items-center justify-center transition-all duration-300 shrink-0 mb-0.5">
                  <ArrowUpRight className="w-4 h-4 transform group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
