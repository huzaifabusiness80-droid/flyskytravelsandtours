"use client";

import Image from "next/image";
import { Award, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Visual Brand Card */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 p-8 text-white min-h-[420px] flex flex-col justify-between shadow-none">
            <Image
              src="/banner-1.png"
              alt="Fly Sky Travel & Tourism Office"
              fill
              className="object-cover opacity-30"
            />
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00a8e8] text-white font-bold text-xs uppercase tracking-wider rounded-md">
                <Award className="w-4 h-4" />
                <span>Government Licensed Agency</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white leading-tight">
                FLY SKY TRAVEL & TOURISM
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                Licensed under <span className="text-[#00a8e8] font-bold">LIC # LHR 10981</span>. Delivering trusted flight ticketing, visa documentation, and customized global tour arrangements.
              </p>
            </div>

            {/* Office Contact Info Card inside Banner */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/15 space-y-3 mt-6">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-100">
                <MapPin className="w-4 h-4 text-[#e61c24] shrink-0" />
                <span>Office No 1, F-Block, Freed Joyland Road, Vehari</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-100">
                <Phone className="w-4 h-4 text-[#00a8e8] shrink-0" />
                <span>0300-1871622 | 0308-8171622 | 0370-4171622</span>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#00a8e8]/10 text-[#00a8e8] font-bold text-xs uppercase tracking-wider rounded-md border border-[#00a8e8]/20">
              <span>About Our Agency</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3663] tracking-tight leading-tight">
              Providing Exceptional Travel Experiences Worldwide
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Fly Sky Travel & Tourism is a premier travel management company dedicated to making travel easy, accessible, and hassle-free. Whether you require fast-track visa processing, domestic or international air ticketing, Umrah arrangements, or customized holiday packages, our team of experts provides professional guidance at every step.
            </p>

            {/* Core Values Bullet List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00a8e8] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0b3663] text-sm">Professional Visa Consultancy</h4>
                  <p className="text-slate-600 text-xs mt-0.5">High approval preparation for UK, USA, Schengen Europe, Turkey, and UAE visas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00a8e8] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0b3663] text-sm">Best Airline Fares Guaranteed</h4>
                  <p className="text-slate-600 text-xs mt-0.5">Direct airline access for competitive rates on all major domestic and international routes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00a8e8] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0b3663] text-sm">End-to-End Tour & Umrah Management</h4>
                  <p className="text-slate-600 text-xs mt-0.5">Complete hotel, transportation, and itinerary assistance for individuals and groups.</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/923001871622"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#e61c24] hover:bg-[#cc141b] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-none border-none outline-none"
              >
                <span>Chat On WhatsApp</span>
              </a>
              <a
                href="tel:03001871622"
                className="px-6 py-3 bg-[#0b3663] hover:bg-[#072545] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-none border-none outline-none"
              >
                <span>Call 0300-1871622</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
