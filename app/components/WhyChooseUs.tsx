"use client";

import { Award, Users, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

const stats = [
  { id: "exp", value: "15+", label: "Years Experience", icon: Clock },
  { id: "clients", value: "12,000+", label: "Happy Travelers", icon: Users },
  { id: "visa", value: "98%", label: "Visa Success Rate", icon: ShieldCheck },
  { id: "lic", value: "LIC # LHR 10981", label: "Govt. Licensed Agency", icon: Award },
];

const reasons = [
  {
    title: "Government Licensed & Verified Agency",
    description: "Fully registered and licensed agency under License # LHR 10981, guaranteeing 100% genuine visa and travel services.",
  },
  {
    title: "Transparent & Competitive Pricing",
    description: "No hidden charges or surprise costs. Clear breakdowns for flight tickets, visa processing, and tour packages.",
  },
  {
    title: "Dedicated 24/7 Customer Support",
    description: "Our travel experts provide round-the-clock support before, during, and after your trip.",
  },
  {
    title: "Fast-Track Visa Assistance",
    description: "Expert guidance for UK, USA, Europe Schengen, Turkey, and UAE visas to maximize your approval chances.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#00a8e8]/10 text-[#00a8e8] font-bold text-xs uppercase tracking-wider rounded-md border border-[#00a8e8]/20">
            <span>Why Choose Fly Sky</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3663] tracking-tight">
            Your Trusted Travel & Tourism Partner
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are committed to delivering world-class travel services with complete peace of mind, high visa approval rates, and reliable support.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const IconComp = stat.icon;
            return (
              <div 
                key={stat.id}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center flex flex-col items-center justify-center space-y-2 shadow-none hover:border-[#00a8e8] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00a8e8]/10 text-[#00a8e8] flex items-center justify-center">
                  <IconComp className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0b3663]">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              className="bg-white p-7 rounded-xl border border-slate-200 flex gap-5 items-start hover:border-[#00a8e8] transition-colors shadow-none"
            >
              <div className="w-10 h-10 rounded-lg bg-[#e61c24]/10 text-[#e61c24] flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-[#0b3663]">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
