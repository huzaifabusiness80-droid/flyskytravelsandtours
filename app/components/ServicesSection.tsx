"use client";

import Image from "next/image";
import { 
  Plane, 
  FileCheck, 
  Globe, 
  Building2, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  icon: React.ElementType;
  highlights: string[];
}

const services: ServiceItem[] = [
  {
    id: "visa",
    title: "Visa Consultancy & Processing",
    subtitle: "Visit, Tourist & Work Visas",
    description: "End-to-end documentation assistance, file preparation, and embassy appointment scheduling for UK, USA, Schengen, Turkey & UAE.",
    imageSrc: "/visa_service.jpg",
    icon: FileCheck,
    highlights: ["Complete File Checking", "Embassy Appointment Booking", "High Approval Success"],
  },
  {
    id: "flights",
    title: "Flight Booking & Ticketing",
    subtitle: "Worldwide Airline Reservations",
    description: "Discounted airfares on Emirates, Qatar Airways, PIA, Turkish Airlines, and major international & domestic carriers.",
    imageSrc: "/flight_service.jpg",
    icon: Plane,
    highlights: ["Instant Ticket Confirmation", "Flexible Date Changes", "24/7 Flight Support"],
  },
  {
    id: "tours",
    title: "Worldwide Tour Packages",
    subtitle: "Customized Holiday Travel",
    description: "Handcrafted holiday tour packages for families, honeymoons, and corporate groups across Europe, Asia, and Middle East.",
    imageSrc: "/tours_service.jpg",
    icon: Globe,
    highlights: ["Customized Itineraries", "Hotel & Sightseeing Included", "Dedicated Tour Manager"],
  },
  {
    id: "umrah",
    title: "Umrah & Hajj Services",
    subtitle: "Spiritual Pilgrimage Packages",
    description: "Complete spiritual packages with proximity hotel stays near Haram in Makkah & Madinah, luxury transport, and Ziyarat.",
    imageSrc: "/banner-1.png",
    icon: Building2,
    highlights: ["Hotels Near Haram", "VIP Airport Transfers", "Ziyarat Guidance"],
  },
  {
    id: "hotel",
    title: "Hotel & Resort Bookings",
    subtitle: "3-Star to 5-Star Hotel Rates",
    description: "Direct reservations at top international hotel chains worldwide with exclusive corporate rates and instant confirmation.",
    imageSrc: "/banner-2.png",
    icon: Building2,
    highlights: ["Corporate Discount Rates", "Instant E-Voucher", "Breakfast Included Options"],
  },
  {
    id: "insurance",
    title: "Travel Insurance & Support",
    subtitle: "Global Emergency Cover",
    description: "Comprehensive travel insurance protecting you against flight cancellations, medical emergencies, and lost baggage.",
    imageSrc: "/banner-1.png",
    icon: ShieldCheck,
    highlights: ["Schengen & Worldwide Approved", "Instant E-Policy", "24/7 Medical Assistance"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#00a8e8]/10 text-[#00a8e8] font-bold text-xs uppercase tracking-wider rounded-md border border-[#00a8e8]/20">
            <span>Fly Sky Travel Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3663] tracking-tight">
            Our Professional Travel & Tourism Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Licensed travel consultancy providing reliable visa processing, air ticketing, Umrah packages, and worldwide holiday management.
          </p>
        </div>

        {/* Corporate Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-[#00a8e8] transition-all duration-300 group shadow-none"
              >
                <div>
                  {/* Card Header Image Banner */}
                  <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b3663]/90 via-[#0b3663]/30 to-transparent" />
                    
                

                    {/* Subtitle Badge on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#00a8e8] block">
                        {service.subtitle}
                      </span>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Highlights List */}
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      {service.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#e61c24] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button (Strict NO SHADOW) */}
                <div className="p-6 pt-0">
                  <a 
                    href="https://wa.me/923001871622"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-[#0b3663] hover:bg-[#e61c24] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 border-none outline-none shadow-none"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
