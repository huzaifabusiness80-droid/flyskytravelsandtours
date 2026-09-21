"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Award, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#072545] text-white border-t border-slate-800">
      {/* Main Footer Body */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Logo & License */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-lg inline-block">
              <Image
                src="/navbarlogo.png"
                alt="Fly Sky Travel & Tourism"
                width={200}
                height={50}
                className="object-contain max-h-11 w-auto"
              />
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Your trusted licensed travel partner for fast-track visa processing, worldwide flight bookings, Umrah packages, and tour destinations.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00a8e8]/20 text-[#00a8e8] font-bold text-xs rounded-md border border-[#00a8e8]/30">
              <Award className="w-3.5 h-3.5 text-[#00a8e8]" />
              <span>LIC # LHR 10981</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#00a8e8] border-b border-slate-700/60 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li>
                <Link href="#" className="hover:text-[#00a8e8] transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#00a8e8] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#00a8e8] transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="#tours" className="hover:text-[#00a8e8] transition-colors">Tour Packages</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#00a8e8] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Travel Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#00a8e8] border-b border-slate-700/60 pb-2">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li>Visit & Work Visa Consultancy</li>
              <li>Domestic & International Air Ticketing</li>
              <li>Executive & Economy Umrah Packages</li>
              <li>Worldwide Tour Destinations</li>
              <li>Hotel Reservations & Travel Insurance</li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#e61c24] border-b border-slate-700/60 pb-2">
              Vehari Head Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e61c24] shrink-0 mt-0.5" />
                <span className="leading-normal">
                  Office No 1, F-Block, Freed Joyland Road, Vehari, Punjab
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#00a8e8] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p><a href="tel:03001871622" className="hover:text-[#00a8e8]">0300-1871622</a></p>
                  <p><a href="tel:03088171622" className="hover:text-[#00a8e8]">0308-8171622</a></p>
                  <p><a href="tel:03704171622" className="hover:text-[#00a8e8]">0370-4171622</a></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-slate-800 bg-[#051c36] py-5 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Fly Sky Travel & Tourism (LIC # LHR 10981). All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 bg-[#00a8e8] hover:bg-[#0090c7] text-white rounded-md transition-colors shadow-none border-none outline-none flex items-center gap-1.5 font-bold text-xs"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
