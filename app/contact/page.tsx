import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPageForm from "./ContactPageForm";
import { 
  Award, 
  ChevronRight, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Mail, 
  ShieldCheck,
  Building2
} from "lucide-react";

export const metadata = {
  title: "Contact Us | Fly Sky Travel & Tourism",
  description: "Contact Fly Sky Travel & Tourism in Vehari, Punjab. Call 0300-1871622, WhatsApp, or visit Office No 1, F-Block, Freed Joyland Road, Vehari for licensed visa and travel services.",
};

export default function ContactPage() {
  const contactCards = [
    {
      icon: <Phone className="w-5 h-5 text-[#00a8e8]" />,
      title: "Helpline Numbers",
      line1: "0300-1871622",
      line2: "0308-8171622 | 0370-4171622",
      actionText: "Call Now",
      actionHref: "tel:03001871622",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#25D366]" />,
      title: "WhatsApp Desk",
      line1: "0300-1871622 (24/7 Available)",
      line2: "Instant Quotes & Document Auditing",
      actionText: "Chat On WhatsApp",
      actionHref: "https://wa.me/923001871622",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#e61c24]" />,
      title: "Head Office Location",
      line1: "Office No 1, F-Block",
      line2: "Freed Joyland Road, Vehari, Punjab",
      actionText: "View on Map",
      actionHref: "#map",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#00a8e8]" />,
      title: "Working Hours",
      line1: "Mon – Sat: 9:00 AM – 8:00 PM",
      line2: "Sunday: On Prior Appointment",
      actionText: "Book Appointment",
      actionHref: "https://wa.me/923001871622?text=Assalam-o-Alaikum!%20I%20want%20to%20book%20an%20office%20appointment.",
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
              <span className="text-white">Contact Us</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#00a8e8] text-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-none">
                <Award className="w-4 h-4" />
                <span>Govt. License # LHR 10981</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Contact Fly Sky Travel
              </h1>

              <p className="text-sky-100 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Visit our Vehari office or reach out to our licensed consultants via phone or WhatsApp for prompt travel assistance and visa inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Direct Contact Cards Grid */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {contactCards.map((card, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-300 p-6 rounded-none space-y-3 flex flex-col justify-between hover:border-[#00a8e8] transition-colors"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                        {card.line1}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {card.line2}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <a
                      href={card.actionHref}
                      className="text-xs font-bold text-[#00a8e8] hover:text-[#008dbf] flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>{card.actionText}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Split Grid: Map Left + Form Right */}
        <section id="map" className="py-16 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Send Us a Message or Visit
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
                Our team responds to all digital inquiries within minutes during office hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Left Column: Full-Height Clean Map (No text, No overlay, No rounded, No shadows) */}
              <div className="w-full h-full min-h-[460px] lg:min-h-[560px] border border-slate-300 rounded-none overflow-hidden bg-slate-100">
                <iframe
                  title="Fly Sky Travel & Tourism Vehari Office Map"
                  src="https://maps.google.com/maps?q=30.0436,72.3533+(Fly+Sky+Travel+%26+Tourism,+Vehari)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "100%", width: "100%", display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Right Column: Sharp Contact Form */}
              <div className="bg-slate-50 border border-slate-300 p-6 sm:p-8 lg:p-10 rounded-none flex flex-col justify-between">
                <ContactPageForm />
              </div>

            </div>

          </div>
        </section>

        {/* Office Visiting Guidelines */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-slate-300 p-6 sm:p-8 rounded-none flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-[#0b3663] text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-4 h-4 text-[#00a8e8]" />
                  <span>Visiting Our Vehari Office</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Air-Conditioned Client Consultation Lounge &amp; Free Parking Available
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm">
                  Located conveniently on Freed Joyland Road, F-Block, Vehari with dedicated visa documentation staff.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <a
                  href="tel:03001871622"
                  className="px-6 py-3 bg-[#0b3663] hover:bg-[#072545] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors"
                >
                  Call Reception
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
