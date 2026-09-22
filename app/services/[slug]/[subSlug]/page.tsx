import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { subServicesData, SubServiceDetail } from "../../../data/subServicesData";
import { servicesData } from "../../../data/servicesData";
import { 
  Award, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  ChevronRight, 
  HelpCircle, 
  ShieldCheck, 
  Clock,
  Calendar,
  DollarSign,
  FileText,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import ServiceInquiryForm from "../ServiceInquiryForm";

import prisma from "@/lib/prisma";

interface PageProps {
  params: Promise<{
    slug: string;
    subSlug: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function SubServiceDetailPage({ params }: PageProps) {
  const { slug, subSlug } = await params;
  let subService: any = null;
  let parentService: any = null;
  let relatedSubServices: any[] = [];

  try {
    subService = await prisma.subService.findUnique({
      where: { slug: subSlug },
    });
    parentService = await prisma.service.findUnique({
      where: { slug },
    });
    relatedSubServices = await prisma.subService.findMany({
      where: {
        parentSlug: slug,
        NOT: { slug: subSlug },
      },
      orderBy: { createdAt: "asc" },
    });
  } catch (error) {
    console.error("DB error in subService detail page:", error);
  }

  // Fallback to static data if not in DB yet
  if (!subService) {
    subService = subServicesData[subSlug];
  }

  if (!subService || subService.parentSlug !== slug) {
    notFound();
  }

  if (!parentService) {
    parentService = servicesData[slug];
  }

  if (relatedSubServices.length === 0) {
    relatedSubServices = Object.values(subServicesData).filter(
      (item) => item.parentSlug === slug && item.slug !== subSlug
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white antialiased font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Banner with Sharp Corporate Styling */}
        <section className="relative bg-[#0b3663] text-white py-14 sm:py-20 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Trail */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-200 uppercase tracking-wider mb-4 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href={`/services/${slug}`} className="hover:text-white transition-colors">
                {parentService ? parentService.title : subService.parentTitle}
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">{subService.title}</span>
            </div>

            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 bg-[#00a8e8] text-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-none">
                  <Award className="w-4 h-4" />
                  <span>Govt. License # LHR 10981</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-white/20 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-none">
                  <span>{subService.badge}</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {subService.title}
              </h1>

              <p className="text-sky-100 text-sm sm:text-base leading-relaxed max-w-3xl font-normal">
                {subService.subtitle}
              </p>

              {/* Key Quick Badges Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-200">
                <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 border border-slate-700">
                  <DollarSign className="w-4 h-4 text-[#00a8e8]" />
                  <span>{subService.priceOrFee}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 border border-slate-700">
                  <Clock className="w-4 h-4 text-[#00a8e8]" />
                  <span>Processing: {subService.durationOrProcessing}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 border border-slate-700">
                  <Calendar className="w-4 h-4 text-[#00a8e8]" />
                  <span>Validity: {subService.validity}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/923001871622?text=${encodeURIComponent(`Assalam-o-Alaikum Fly Sky Travel! I want to inquire about "${subService.title}". Please provide full details & requirements.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#e61c24] hover:bg-[#cc141b] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire On WhatsApp</span>
                </a>

                <a
                  href="tel:03001871622"
                  className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#00a8e8]" />
                  <span>Call 0300-1871622</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Content Column */}
              <div className="lg:col-span-8 space-y-12">
                
                {/* Hero Image */}
                <div className="relative w-full h-[320px] sm:h-[420px] bg-slate-900 border border-slate-300 rounded-none overflow-hidden">
                  <Image
                    src={subService.image}
                    alt={subService.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>

                {/* Overview */}
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Overview &amp; Details
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {subService.overview}
                  </p>
                </div>

                {/* Requirements Checklist */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#00a8e8]" />
                    <span>Mandatory Requirements &amp; Documents</span>
                  </h3>
                  <div className="bg-slate-50 border border-slate-300 p-6 rounded-none space-y-3">
                    {Array.isArray(subService.requirements) && subService.requirements.map((req: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#e61c24] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-slate-800">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What's Included / Inclusions */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#00a8e8]" />
                    <span>What&apos;s Included In Our Service</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {Array.isArray(subService.inclusions) && subService.inclusions.map((inc: string, idx: number) => (
                      <div 
                        key={idx} 
                        className="bg-white border border-slate-300 p-4 rounded-none flex items-start gap-3 hover:border-[#00a8e8] transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00a8e8] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-900">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step-by-Step Guide or Itinerary */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Step-by-Step Procedure &amp; Roadmap
                  </h3>
                  <div className="space-y-3.5">
                    {Array.isArray(subService.stepsOrItinerary) && subService.stepsOrItinerary.map((step: any, idx: number) => (
                      <div 
                        key={idx} 
                        className="bg-slate-50 border border-slate-300 p-5 rounded-none space-y-1.5 relative"
                      >
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00a8e8]">
                          <span>Step {idx + 1}</span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">{step.title}</h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frequently Asked Questions */}
                {Array.isArray(subService.faqs) && subService.faqs.length > 0 && (
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#00a8e8]" />
                      <span>Frequently Asked Questions</span>
                    </h3>
                    <div className="space-y-3">
                      {subService.faqs.map((faq: any, idx: number) => (
                        <div 
                          key={idx} 
                          className="bg-white border border-slate-300 p-5 rounded-none space-y-2"
                        >
                          <h4 className="font-bold text-slate-900 text-sm">{faq.question}</h4>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Right Sticky Sidebar */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                
                {/* Instant Booking / Inquiry Form */}
                <ServiceInquiryForm defaultService={`${subService.parentTitle}: ${subService.title}`} />

                {/* Quick Info Summary Box */}
                <div className="bg-slate-50 border border-slate-300 p-5 rounded-none space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-200">
                    Quick Summary
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Service Fee / Price</span>
                      <span className="font-bold text-[#e61c24]">{subService.priceOrFee}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Processing Time</span>
                      <span className="font-semibold text-slate-800">{subService.durationOrProcessing}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Validity</span>
                      <span className="font-semibold text-slate-800">{subService.validity}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Agency License</span>
                      <span className="font-bold text-[#00a8e8]">LIC # LHR 10981</span>
                    </div>
                  </div>
                </div>

                {/* Direct Helplines Card */}
                <div className="bg-[#0b3663] text-white p-6 rounded-none border border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00a8e8]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Direct Agency Helpline</span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    Need Expert Guidance?
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    Contact our licensed travel desk in Vehari for free profile assessment and document verification.
                  </p>

                  <div className="space-y-2 text-xs pt-1 border-t border-white/10">
                    <div className="flex items-start gap-2.5">
                      <Phone className="w-3.5 h-3.5 text-[#00a8e8] shrink-0 mt-0.5" />
                      <div className="space-y-0.5 font-semibold">
                        <p><a href="tel:03001871622" className="hover:text-[#00a8e8]">0300-1871622</a></p>
                        <p><a href="tel:03088171622" className="hover:text-[#00a8e8]">0308-8171622</a></p>
                        <p><a href="tel:03704171622" className="hover:text-[#00a8e8]">0370-4171622</a></p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 pt-2">
                      <MapPin className="w-3.5 h-3.5 text-[#e61c24] shrink-0 mt-0.5" />
                      <span className="text-slate-200">
                        Office # 1, F-Block, Freed Joyland Road, Vehari
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://wa.me/923001871622"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Specialist</span>
                    </a>
                  </div>
                </div>

                {/* Related Sub-Services in this Category */}
                {relatedSubServices.length > 0 && (
                  <div className="bg-slate-50 border border-slate-300 p-5 rounded-none space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Related {subService.parentTitle} Options
                    </h4>
                    <div className="space-y-1.5">
                      {relatedSubServices.map((rel) => (
                        <Link
                          key={rel.slug}
                          href={`/services/${rel.parentSlug}/${rel.slug}`}
                          className="flex items-center justify-between p-2.5 bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#00a8e8] hover:border-[#00a8e8] transition-colors rounded-none"
                        >
                          <span className="truncate">{rel.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 shrink-0 ml-2" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
