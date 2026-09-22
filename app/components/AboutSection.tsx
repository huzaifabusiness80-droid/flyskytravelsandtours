"use client";

import Image from "next/image";
import { Award, Compass, FileCheck2, PlaneTakeoff, HeartHandshake, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <FileCheck2 className="w-5 h-5 text-[#00a8e8] shrink-0" />,
      title: "Licensed Visa Consultancy",
      desc: "High approval file preparation for UK, USA, Schengen, UAE, Turkey & worldwide.",
    },
    {
      icon: <PlaneTakeoff className="w-5 h-5 text-[#00a8e8] shrink-0" />,
      title: "Direct Airline Ticketing",
      desc: "Instant confirmed seats and exclusive fares across major domestic & global airlines.",
    },
    {
      icon: <Compass className="w-5 h-5 text-[#00a8e8] shrink-0" />,
      title: "Customized Tour Packages",
      desc: "Tailor-made itineraries with verified 3 to 5-star hotels and private transfers.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#00a8e8] shrink-0" />,
      title: "Executive Umrah & Hajj",
      desc: "End-to-end pilgrimage management with hotels near Haramain & fast e-visas.",
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/destinations/dubai.jpg"
          alt="Fly Sky Travel and Tourism Global Tours"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
        {/* Dark Gradient Overlay for optimal text and card contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Split: Left Content & CTAs, Right 4 Feature Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Narrative & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-extrabold text-[#00a8e8] uppercase tracking-widest bg-[#00a8e8]/15 px-3 py-1 border border-[#00a8e8]/30">
                ABOUT US
              </span>
              <div className="inline-flex items-center gap-1.5 bg-white/10 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-none border border-white/20">
                <Award className="w-3.5 h-3.5 text-[#00a8e8]" />
                <span>Govt. License # LHR 10981</span>
              </div>
            </div>
            
            {/* Titles */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                About Fly Sky Travel &amp; Tourism
              </h2>
              <p className="text-sky-300 text-sm sm:text-base font-semibold">
                Crafting Seamless &amp; Memorable Journeys Across the Globe
              </p>
            </div>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Fly Sky Travel &amp; Tourism is a trusted, full-service licensed travel management agency based in Vehari, Punjab. Dedicated to transparency and excellence, we simplify complex visa documentation, secure the best flight deals, and craft bespoke holiday journeys with complete peace of mind.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="https://wa.me/923001871622"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#e61c24] hover:bg-[#cc141b] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center gap-2 cursor-pointer shadow-none"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat On WhatsApp</span>
              </a>

              <a
                href="tel:03001871622"
                className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center gap-2 cursor-pointer shadow-none"
              >
                <PhoneCall className="w-4 h-4 text-[#00a8e8]" />
                <span>Call 0300-1871622</span>
              </a>
            </div>

            {/* Office Tag */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#00a8e8]" />
              <span>Office #1, F-Block, Freed Joyland Road, Vehari, Punjab</span>
            </div>
          </div>

          {/* Right Column: 4 Feature Boxes (2x2 Grid) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/85 backdrop-blur-md border border-slate-700/80 p-5 rounded-none space-y-2.5 hover:border-[#00a8e8] hover:bg-slate-900 transition-all group"
              >
                <div className="w-10 h-10 bg-slate-800/90 border border-slate-700 flex items-center justify-center group-hover:bg-[#00a8e8] group-hover:border-[#00a8e8] transition-colors">
                  <span className="group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-bold text-white text-sm group-hover:text-[#00a8e8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
