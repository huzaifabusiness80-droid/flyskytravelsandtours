import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  Award, 
  ChevronRight, 
  ShieldCheck, 
  Globe2, 
  Plane, 
  Clock, 
  HeartHandshake, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  MessageSquare,
  Users,
  Compass
} from "lucide-react";

export const metadata = {
  title: "About Us | Fly Sky Travel & Tourism",
  description: "Learn about Fly Sky Travel & Tourism (Govt. LIC # LHR 10981) based in Vehari, Punjab. Premier travel management, visa consultancy, air ticketing, and worldwide holiday tours.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00a8e8]" />,
      title: "Government Licensed & Regulated",
      desc: "Officially registered and compliant under Department of Tourist Services LIC # LHR 10981, providing legal security and complete peace of mind.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#00a8e8]" />,
      title: "Worldwide Visa Expertise",
      desc: "High success rates in complex visa file preparation for UK, USA, Schengen Europe, Canada, UAE, Turkey, and Far East.",
    },
    {
      icon: <Plane className="w-6 h-6 text-[#00a8e8]" />,
      title: "Direct Airline Ticketing",
      desc: "Direct GDS reservation system access ensuring cheapest available domestic and international airfares on all major carriers.",
    },
    {
      icon: <Compass className="w-6 h-6 text-[#00a8e8]" />,
      title: "Customized Tour Itineraries",
      desc: "Carefully designed day-by-day itineraries with verified 3 to 5-star hotel accommodations, private transfers, and English/Urdu speaking guides.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#00a8e8]" />,
      title: "Reverent Umrah & Hajj Care",
      desc: "Dedicated pilgrimage management with hotels near Haramain, high-speed train tickets, and on-ground Saudi coordination.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#00a8e8]" />,
      title: "24/7 Dedicated Client Support",
      desc: "Round-the-clock emergency assistance before departure, during your overseas stay, and until your safe arrival back home.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white antialiased font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#0b3663] text-white py-14 sm:py-20 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-200 uppercase tracking-wider mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">About Us</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#00a8e8] text-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-none">
                <Award className="w-4 h-4" />
                <span>Govt. License # LHR 10981</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                About Fly Sky Travel &amp; Tourism
              </h1>

              <p className="text-sky-100 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Your trusted licensed travel partner based in Vehari, Punjab. Specializing in global visa solutions, discounted airline ticketing, luxury Umrah services, and memorable holiday tours.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/923001871622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#e61c24] hover:bg-[#cc141b] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat With Our Team</span>
                </a>
                <a
                  href="tel:03001871622"
                  className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#00a8e8]" />
                  <span>Call 0300-1871622</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Agency Story Section: 50/50 Grid */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Narrative */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#00a8e8] uppercase tracking-widest">
                    Who We Are
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                    Dedicated to Integrity, Excellence &amp; Unforgettable Travel
                  </h2>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Established with a vision to redefine travel consultancy in South Punjab and across Pakistan, <strong>Fly Sky Travel &amp; Tourism</strong> operates as a fully licensed agency (LIC # LHR 10981) recognized for ethical advisory and transparent operations.
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  From navigating complex European Schengen, UK, and USA visa requirements to securing verified 5-star Umrah accommodations in Makkah and Madinah, we eliminate the stress of travel planning so you can focus entirely on creating cherished memories.
                </p>

                {/* Key Checklist */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#00a8e8] shrink-0" />
                    <span>100% Genuine, Embassy-Approved Documentation</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#00a8e8] shrink-0" />
                    <span>Direct Access to IATA Airline Global Distribution Systems</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#00a8e8] shrink-0" />
                    <span>Personalized Consultation for Families, Groups &amp; Corporate Clients</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Sharp Visual Image */}
              <div className="relative w-full h-[380px] sm:h-[480px] bg-slate-900 border border-slate-300 rounded-none overflow-hidden group">
                <Image
                  src="/destinations/dubai.jpg"
                  alt="Fly Sky Travel and Tourism Agency"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <div className="border-l-2 border-[#00a8e8] pl-3">
                    <h3 className="text-white font-bold text-lg sm:text-xl">
                      Fly Sky Travel &amp; Tourism
                    </h3>
                    <p className="text-slate-300 text-xs mt-1">
                      Office No 1, F-Block, Freed Joyland Road, Vehari, Punjab
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Credibility Stats Bar */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white border border-slate-300 p-6 text-center rounded-none">
                <span className="block text-3xl sm:text-4xl font-extrabold text-[#0b3663]">10+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">Years Experience</span>
              </div>
              <div className="bg-white border border-slate-300 p-6 text-center rounded-none">
                <span className="block text-3xl sm:text-4xl font-extrabold text-[#e61c24]">50+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">Countries Served</span>
              </div>
              <div className="bg-white border border-slate-300 p-6 text-center rounded-none">
                <span className="block text-3xl sm:text-4xl font-extrabold text-[#00a8e8]">10K+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">Satisfied Travelers</span>
              </div>
              <div className="bg-white border border-slate-300 p-6 text-center rounded-none">
                <span className="block text-3xl sm:text-4xl font-extrabold text-[#0b3663]">100%</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">Govt. Verified</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Core Value Cards Grid */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Why Travelers Trust Fly Sky Travel
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
                Our core pillars of professionalism, quality, and personalized client attention
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((val, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-300 p-6 rounded-none space-y-3 hover:border-[#00a8e8] transition-colors"
                >
                  <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center">
                    {val.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Location & Visit CTA */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0b3663] text-white p-8 sm:p-12 border border-slate-800 rounded-none flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-[#00a8e8] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Head Office In Vehari</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Visit Us or Connect for a Free Travel Consultation
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                  Office No 1, F-Block, Freed Joyland Road, Vehari, Punjab. Open Monday to Saturday.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#e61c24] hover:bg-[#cc141b] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors"
                >
                  Contact Us Page
                </Link>
                <a
                  href="https://wa.me/923001871622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-none transition-colors"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
