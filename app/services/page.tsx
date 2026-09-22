import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { servicesData } from "../data/servicesData";
import { Award, ArrowRight, CheckCircle2, MessageSquare, Phone } from "lucide-react";

import prisma from "@/lib/prisma";

export const metadata = {
  title: "Our Travel Services | Fly Sky Travel & Tourism",
  description: "Explore our licensed travel services: Visa Processing, Air Ticketing, Holiday Tour Packages, Umrah Services, Hotel Bookings, and Travel Insurance.",
};

export const revalidate = 0;

export default async function ServicesIndexPage() {
  let servicesList: any[] = [];
  try {
    const dbServices = await prisma.service.findMany({
      orderBy: { order: "asc" },
    });
    if (dbServices && dbServices.length > 0) {
      servicesList = dbServices;
    }
  } catch (error) {
    console.error("Failed to load services from DB:", error);
  }

  if (servicesList.length === 0) {
    servicesList = Object.values(servicesData);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white antialiased font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#0b3663] text-white py-14 sm:py-20 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#00a8e8] text-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-none mb-4">
              <Award className="w-4 h-4" />
              <span>Govt. License # LHR 10981</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Our Travel Services
            </h1>

            <p className="text-sky-100 text-sm sm:text-base mt-3 leading-relaxed">
              Complete end-to-end travel management, licensed visa consultancy, discounted flight tickets, and customized international tours from Vehari, Punjab.
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service) => (
                <div 
                  key={service.slug}
                  className="bg-white border border-slate-300 rounded-none overflow-hidden flex flex-col justify-between hover:border-[#00a8e8] transition-all group"
                >
                  <div>
                    {/* Image */}
                    <div className="relative w-full aspect-[16/10] bg-slate-900 overflow-hidden">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#00a8e8] transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {service.shortDesc}
                      </p>

                      {/* Benefits preview */}
                      <div className="pt-2 space-y-1.5">
                        {Array.isArray(service.benefits) && service.benefits.slice(0, 3).map((benefit: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00a8e8] shrink-0" />
                            <span className="truncate">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-6 pt-0 flex items-center gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex-1 py-2.5 px-4 bg-[#0b3663] hover:bg-[#072545] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center justify-center gap-2 text-center"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`https://wa.me/923001871622?text=${encodeURIComponent(`Assalam-o-Alaikum Fly Sky Travel! I want to inquire about "${service.title}".`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 bg-[#e61c24] hover:bg-[#cc141b] text-white font-bold text-xs rounded-none transition-colors flex items-center justify-center"
                      title="Chat On WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="bg-white py-14 border-t border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Have Specific Travel Queries or Custom Requests?
            </h3>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Our travel specialists in Vehari are available round the clock to customize packages, book flights, and handle visa inquiries.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <a
                href="https://wa.me/923001871622"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#e61c24] hover:bg-[#cc141b] text-white font-bold text-xs uppercase tracking-wider rounded-none flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat On WhatsApp</span>
              </a>
              <a
                href="tel:03001871622"
                className="px-6 py-3 bg-[#0b3663] hover:bg-[#072545] text-white font-bold text-xs uppercase tracking-wider rounded-none flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call 0300-1871622</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
