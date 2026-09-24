"use client";

import { useState } from "react";
import { Send, Phone, MapPin, Mail, CheckCircle2 } from "lucide-react";

export default function InquiryFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    serviceType: "Visa Consultancy & Processing",
    destination: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          serviceType: formData.serviceType,
          destination: formData.destination,
          message: formData.message,
        }),
      }).catch((err) => console.error("Error saving inquiry:", err));
    } catch (err) {
      console.error("Error in inquiry submit:", err);
    }

    const text = `Hello Fly Sky Travel %26 Tourism,%0A%0A*New Inquiry Details:*%0A- *Name:* ${encodeURIComponent(formData.fullName)}%0A- *Phone:* ${encodeURIComponent(formData.phone)}%0A- *Service Required:* ${encodeURIComponent(formData.serviceType)}%0A- *Destination:* ${encodeURIComponent(formData.destination)}%0A- *Message:* ${encodeURIComponent(formData.message)}`;
    
    window.open(`https://wa.me/923088171622?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Contact &amp; Inquiry
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2.5 font-normal">
            Visit our office in Vehari or send us your travel query for immediate assistance
          </p>
        </div>

        {/* 2-Column Split Layout: Left Map, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Clean Full-Height Interactive Map (No text, No overlays, No rounded, No shadows) */}
          <div className="w-full h-full min-h-[420px] lg:min-h-[520px] border border-slate-300 rounded-none overflow-hidden bg-slate-100">
            <iframe
              title="Fly Sky Travel & Tourism Location"
              src="https://maps.google.com/maps?q=30.0436,72.3533+(Fly+Sky+Travel+%26+Tourism,+Vehari)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "100%", width: "100%", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right Column: Clean Sharp Corporate Form (No rounded, No shadows) */}
          <div className="bg-slate-50 border border-slate-300 p-6 sm:p-8 lg:p-10 rounded-none flex flex-col justify-between">
            <div>
              {/* Form Heading */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Send Your Travel Requirements
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Fill out the form below and our certified consultant will respond immediately on WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-none flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Inquiry Sent Successfully!</h4>
                  <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto">
                    Your details have been forwarded to our WhatsApp desk. We will reach back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#0b3663] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors hover:bg-[#072545]"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Muhammad Ali"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-none text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#00a8e8] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0300-1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-none text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#00a8e8] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Type */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Service Required *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-none text-sm text-slate-900 focus:border-[#00a8e8] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Visa Consultancy & Processing">Visa Processing &amp; Consultancy</option>
                        <option value="Flight Booking & Ticketing">Airline Tickets &amp; Flights</option>
                        <option value="International Tour Packages">International Tour Packages</option>
                        <option value="Umrah & Hajj Services">Umrah &amp; Hajj Packages</option>
                        <option value="Hotel Booking">Hotel Accommodations</option>
                        <option value="Travel Insurance">Travel Insurance</option>
                      </select>
                    </div>

                    {/* Target Destination */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Target Country / City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. UAE, UK, Turkey, Baku"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-none text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#00a8e8] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Additional Details / Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please mention your travel dates, number of persons, or specific inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-none text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#00a8e8] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#e61c24] hover:bg-[#cc141b] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center justify-center gap-2 border-none outline-none cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry Via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact Footer Bar inside Form Box */}
            <div className="mt-8 pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00a8e8] shrink-0" />
                <span>0300-1871622 | 0308-8171622</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#e61c24] shrink-0" />
                <span className="truncate">Office #1, F-Block, Vehari</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
