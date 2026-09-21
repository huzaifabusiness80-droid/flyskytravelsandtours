"use client";

import { useState } from "react";
import { Send, Phone, MapPin, Mail, Award, CheckCircle } from "lucide-react";

export default function InquiryFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    serviceType: "Visa Consultancy",
    destination: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp query string for direct inquiry submission
    const text = `Hello Fly Sky Travel %26 Tourism,%0A%0A*New Inquiry Details:*%0A- *Name:* ${encodeURIComponent(formData.fullName)}%0A- *Phone:* ${encodeURIComponent(formData.phone)}%0A- *Service Required:* ${encodeURIComponent(formData.serviceType)}%0A- *Destination:* ${encodeURIComponent(formData.destination)}%0A- *Message:* ${encodeURIComponent(formData.message)}`;
    
    window.open(`https://wa.me/923001871622?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#00a8e8]/10 text-[#00a8e8] font-bold text-xs uppercase tracking-wider rounded-md border border-[#00a8e8]/20">
            <span>Quick Contact & Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3663] tracking-tight">
            Send Us Your Travel Inquiry
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fill out the form below or contact our team directly for instant quotes on visas, flights, and tour packages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details & Direct Info */}
          <div className="lg:col-span-5 bg-[#0b3663] text-white p-8 sm:p-10 rounded-2xl space-y-8 shadow-none border border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a8e8] bg-white/10 px-3 py-1 rounded-md mb-3">
                <Award className="w-4 h-4 text-[#00a8e8]" />
                <span>LIC # LHR 10981</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Fly Sky Travel & Tourism
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Contact our Vehari office or reach out via phone/WhatsApp for professional travel assistance.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e61c24] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Helpline Phone Numbers</h4>
                  <div className="text-sm font-semibold text-white mt-1 space-y-0.5">
                    <p><a href="tel:03001871622" className="hover:text-[#00a8e8] transition-colors">0300-1871622</a></p>
                    <p><a href="tel:03088171622" className="hover:text-[#00a8e8] transition-colors">0308-8171622</a></p>
                    <p><a href="tel:03704171622" className="hover:text-[#00a8e8] transition-colors">0370-4171622</a></p>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00a8e8] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Office Location</h4>
                  <p className="text-sm font-semibold text-white mt-1 leading-normal">
                    Office No 1, F-Block, Freed Joyland Road, Vehari, Punjab, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Badge */}
            <div className="pt-4 border-t border-white/10">
              <a
                href="https://wa.me/923001871622"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 border-none outline-none shadow-none"
              >
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Right Column: Flat Inquiry Form (NO SHADOW) */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-none">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b3663]">Inquiry Redirected!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Your details have been passed to our WhatsApp inquiry desk. Our specialist will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#0b3663] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-none border-none"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#0b3663] uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:border-[#00a8e8] focus:outline-none shadow-none"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#0b3663] uppercase tracking-wider">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0300-1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:border-[#00a8e8] focus:outline-none shadow-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Required */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#0b3663] uppercase tracking-wider">
                      Select Service *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:border-[#00a8e8] focus:outline-none shadow-none"
                    >
                      <option value="Visa Consultancy">Visa Consultancy & Processing</option>
                      <option value="Flight Booking">Flight Booking & Ticketing</option>
                      <option value="Tour Packages">Worldwide Tour Packages</option>
                      <option value="Umrah Packages">Umrah & Hajj Services</option>
                      <option value="Hotel Booking">Hotel Reservations</option>
                    </select>
                  </div>

                  {/* Destination */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#0b3663] uppercase tracking-wider">
                      Target Country / Destination
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. UK, Turkey, Dubai, Makkah"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:border-[#00a8e8] focus:outline-none shadow-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#0b3663] uppercase tracking-wider">
                    Additional Details / Inquiry Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about travel dates, number of passengers, or specific visa query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:border-[#00a8e8] focus:outline-none shadow-none resize-none"
                  />
                </div>

                {/* Submit Button (Strict NO SHADOW) */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#e61c24] hover:bg-[#cc141b] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 border-none outline-none shadow-none"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry Now</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
