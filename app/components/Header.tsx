"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Award, Menu, X, Send, MessageSquare } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Visa Services", href: "/services/visa-processing" },
    { name: "Flight Booking", href: "/services/air-ticketing" },
    { name: "Tour Packages", href: "/services/tour-packages" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-none border-b border-slate-200">
      {/* Top Info Bar (Fully Mobile Responsive) */}
      <div className="bg-[#00a8e8] text-white text-xs sm:text-sm py-2 sm:py-2.5 border-b border-sky-400/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left Side: Contact Numbers & License */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-white">
            <div className="flex items-center gap-1 font-bold bg-white/20 px-2 py-0.5 rounded-none text-white text-[11px] sm:text-[13px] shrink-0">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span>LIC # LHR 10981</span>
            </div>

            <span className="hidden sm:inline text-sky-200">|</span>

            <div className="flex items-center gap-1.5 text-[11px] sm:text-sm flex-wrap justify-center font-semibold">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
              <span>Call:</span>
              <a href="tel:03001871622" className="hover:underline transition-colors">
                0300-1871622
              </a>
              <span className="text-sky-200">•</span>
              <a href="tel:03088171622" className="hover:underline transition-colors">
                0308-8171622
              </a>
              <span className="text-sky-200 hidden xs:inline">•</span>
              <a href="tel:03704171622" className="hover:underline transition-colors hidden xs:inline">
                0370-4171622
              </a>
            </div>
          </div>

          {/* Right Side: Office Address (Responsive truncate/hide on small screens) */}
          <div className="hidden md:flex items-center gap-1.5 text-white font-medium text-xs">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
            <span className="truncate">
              Office No 1, F-Block, Freed Joyland Road, Vehari
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-48 sm:w-56 flex items-center">
            <Image
              src="/navbarlogo.png"
              alt="Fly Sky Travel & Tourism"
              width={220}
              height={55}
              className="object-contain max-h-12 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[15px] font-semibold transition-colors py-1 ${
                idx === 0
                  ? "text-[#e61c24] border-b-2 border-[#e61c24]"
                  : "text-slate-800 hover:text-[#00a8e8]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Header Action Buttons (Strict NO SHADOW) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Inquire Now -> Opens Contact Us Page */}
          <Link
            href="/contact"
            className="px-4 py-2.5 bg-[#00a8e8] hover:bg-[#0092ca] text-white font-semibold text-sm rounded-none transition-colors flex items-center gap-2 outline-none border-none shadow-none focus:ring-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquire Now</span>
          </Link>

          {/* Book Now -> Direct WhatsApp Booking Chat */}
          <a
            href="https://wa.me/923001871622?text=Assalam-o-Alaikum%20Fly%20Sky%20Travel!%20I%20want%20to%20book%20a%20flight%20ticket%20/%20visa%20/%20tour%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[#e61c24] hover:bg-[#cc141b] text-white font-semibold text-sm rounded-none transition-colors flex items-center gap-2 outline-none border-none shadow-none focus:ring-0"
          >
            <Send className="w-4 h-4" />
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button (NO SHADOW) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-[#0b3663] rounded-none focus:outline-none border border-slate-200 shadow-none bg-slate-50"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#00a8e8] rounded-none"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full px-5 py-2.5 bg-[#00a8e8] hover:bg-[#0092ca] text-white font-semibold text-center rounded-none transition-colors flex items-center justify-center gap-2 border-none shadow-none"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire Now</span>
            </Link>
            <a
              href="https://wa.me/923001871622?text=Assalam-o-Alaikum%20Fly%20Sky%20Travel!%20I%20want%20to%20book%20a%20flight%20ticket%20/%20visa%20/%20tour%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-5 py-2.5 bg-[#e61c24] hover:bg-[#cc141b] text-white font-semibold text-center rounded-none transition-colors flex items-center justify-center gap-2 border-none shadow-none"
            >
              <Send className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
