"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Loader2, MapPin, Search } from "lucide-react";

export interface FlightBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOrigin?: string;
  defaultDestination?: string;
  defaultTripType?: "roundTrip" | "oneWay";
}

interface LocationItem {
  label: string;
  city: string;
  country: string;
  code: string;
  flag?: string;
}

export default function FlightBookingModal({
  isOpen,
  onClose,
  defaultOrigin = "Lahore (LHE), Pakistan",
  defaultDestination = "Dubai (DXB), United Arab Emirates",
  defaultTripType = "roundTrip",
}: FlightBookingModalProps) {
  // Trip & Route State
  const [tripType, setTripType] = useState<"roundTrip" | "oneWay">(defaultTripType);
  
  // From State
  const [fromQuery, setFromQuery] = useState(defaultOrigin);
  const [fromResults, setFromResults] = useState<LocationItem[]>([]);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [isLoadingFrom, setIsLoadingFrom] = useState(false);

  // To State
  const [toQuery, setToQuery] = useState(defaultDestination);
  const [toResults, setToResults] = useState<LocationItem[]>([]);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [isLoadingTo, setIsLoadingTo] = useState(false);

  // Dates & Details
  const todayStr = new Date().toISOString().split("T")[0];
  const [departureDate, setDepartureDate] = useState(todayStr);
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1 Adult");
  const [cabinClass, setCabinClass] = useState("Economy");

  // Contact Info
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  // Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  // Fetch Suggestions for FROM
  useEffect(() => {
    const timer = setTimeout(async () => {
      setIsLoadingFrom(true);
      try {
        const res = await fetch(`/api/locations?q=${encodeURIComponent(fromQuery)}`);
        const json = await res.json();
        if (json.success && json.locations) {
          setFromResults(json.locations);
        }
      } catch (err) {
        console.error("From location fetch error:", err);
      } finally {
        setIsLoadingFrom(false);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [fromQuery]);

  // Fetch Suggestions for TO
  useEffect(() => {
    const timer = setTimeout(async () => {
      setIsLoadingTo(true);
      try {
        const res = await fetch(`/api/locations?q=${encodeURIComponent(toQuery)}`);
        const json = await res.json();
        if (json.success && json.locations) {
          setToResults(json.locations);
        }
      } catch (err) {
        console.error("To location fetch error:", err);
      } finally {
        setIsLoadingTo(false);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [toQuery]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsSuccess(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert("Please enter Name and Phone number.");
      return;
    }

    setIsSubmitting(true);
    const ref = `FS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);

    const message = `
*Flight Booking Inquiry (${ref})*
- *From:* ${fromQuery}
- *To:* ${toQuery}
- *Trip Type:* ${tripType === "roundTrip" ? "Round-Trip" : "One-Way"}
- *Departure Date:* ${departureDate}
${tripType === "roundTrip" && returnDate ? `- *Return Date:* ${returnDate}\n` : ""}- *Passengers:* ${passengers}
- *Cabin Class:* ${cabinClass}
- *Passenger Name:* ${fullName}
- *Phone / WhatsApp:* ${phone}
${notes ? `- *Notes / Airline:* ${notes}\n` : ""}
Fly Sky Travel & Tourism | Helpline: +92 308 8171622
`.trim();

    // 1. Save to Database
    try {
      await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          serviceType: "Flight Booking",
          destination: `${fromQuery} -> ${toQuery}`,
          message,
        }),
      });
    } catch (err) {
      console.warn("DB save log:", err);
    }

    // 2. Direct WhatsApp Throw
    const url = `https://wa.me/923088171622?text=${encodeURIComponent(
      `Assalam-o-Alaikum Fly Sky Travel!\n\n${message}`
    )}`;
    setWhatsappUrl(url);

    setIsSubmitting(false);
    setIsSuccess(true);
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white border border-slate-200 shadow-2xl my-auto rounded-none overflow-hidden"
        onClick={(e) => {
          e.stopPropagation();
          setShowFromDropdown(false);
          setShowToDropdown(false);
        }}
      >
        {/* Simple Header */}
        <div className="bg-[#0b3663] text-white px-5 py-3.5 flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold">Book Flight Ticket</h2>
            <p className="text-[11px] text-sky-200">Fly Sky Travel & Tourism (LIC # LHR 10981)</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-4 sm:p-6 bg-white">
          {isSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">Inquiry Sent to WhatsApp!</h3>
                <p className="text-xs text-slate-600">
                  Reference: <span className="font-bold text-[#e61c24] font-mono">{bookingRef}</span>
                </p>
              </div>
              <div className="flex justify-center gap-2 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#25D366] text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              {/* Trip Type */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setTripType("roundTrip")}
                  className={`flex-1 py-2 font-bold border transition-colors ${
                    tripType === "roundTrip"
                      ? "bg-[#0b3663] text-white border-[#0b3663]"
                      : "bg-slate-50 text-slate-700 border-slate-200"
                  }`}
                >
                  Round-Trip
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("oneWay")}
                  className={`flex-1 py-2 font-bold border transition-colors ${
                    tripType === "oneWay"
                      ? "bg-[#0b3663] text-white border-[#0b3663]"
                      : "bg-slate-50 text-slate-700 border-slate-200"
                  }`}
                >
                  One-Way
                </button>
              </div>

              {/* 1. FROM & 2. TO (Direct Search with API Suggestions) */}
              <div className="space-y-2.5">
                {/* FROM */}
                <div className="relative">
                  <label className="block font-semibold text-slate-700 mb-1 flex items-center justify-between">
                    <span>From (Departure City / Airport) *</span>
                    {isLoadingFrom && <Loader2 className="w-3 h-3 animate-spin text-sky-600" />}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={fromQuery}
                      onChange={(e) => {
                        setFromQuery(e.target.value);
                        setShowFromDropdown(true);
                      }}
                      onFocus={() => setShowFromDropdown(true)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowFromDropdown(true);
                        setShowToDropdown(false);
                      }}
                      placeholder="e.g. Lahore, Karachi, Islamabad..."
                      className="w-full bg-white border border-slate-300 p-2 pl-7 font-medium text-slate-900 focus:outline-none focus:border-[#00a8e8]"
                      required
                    />
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2.5" />
                  </div>

                  {/* From Auto-suggestions Dropdown */}
                  {showFromDropdown && fromResults.length > 0 && (
                    <div 
                      className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-300 shadow-xl max-h-48 overflow-y-auto z-50 divide-y divide-slate-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {fromResults.map((item, idx) => (
                        <button
                          key={`from-${idx}-${item.city}`}
                          type="button"
                          onClick={() => {
                            setFromQuery(item.label || `${item.city}, ${item.country}`);
                            setShowFromDropdown(false);
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-sky-50 text-slate-800 flex items-center justify-between transition-colors cursor-pointer"
                        >
                          <span className="font-semibold flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#00a8e8]" />
                            <span>{item.city}</span>
                          </span>
                          <span className="text-[10px] text-slate-500">{item.country}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* TO */}
                <div className="relative">
                  <label className="block font-semibold text-slate-700 mb-1 flex items-center justify-between">
                    <span>To (Destination City / Airport) *</span>
                    {isLoadingTo && <Loader2 className="w-3 h-3 animate-spin text-red-600" />}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={toQuery}
                      onChange={(e) => {
                        setToQuery(e.target.value);
                        setShowToDropdown(true);
                      }}
                      onFocus={() => setShowToDropdown(true)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowToDropdown(true);
                        setShowFromDropdown(false);
                      }}
                      placeholder="e.g. Dubai, Jeddah, Riyadh, London, Baku..."
                      className="w-full bg-white border border-slate-300 p-2 pl-7 font-medium text-slate-900 focus:outline-none focus:border-[#e61c24]"
                      required
                    />
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2.5" />
                  </div>

                  {/* To Auto-suggestions Dropdown */}
                  {showToDropdown && toResults.length > 0 && (
                    <div 
                      className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-300 shadow-xl max-h-48 overflow-y-auto z-50 divide-y divide-slate-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {toResults.map((item, idx) => (
                        <button
                          key={`to-${idx}-${item.city}`}
                          type="button"
                          onClick={() => {
                            setToQuery(item.label || `${item.city}, ${item.country}`);
                            setShowToDropdown(false);
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-red-50 text-slate-800 flex items-center justify-between transition-colors cursor-pointer"
                        >
                          <span className="font-semibold flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#e61c24]" />
                            <span>{item.city}</span>
                          </span>
                          <span className="text-[10px] text-slate-500">{item.country}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Departure Date *
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 p-2 text-slate-900 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Return Date
                  </label>
                  <input
                    type="date"
                    min={departureDate || todayStr}
                    disabled={tripType === "oneWay"}
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className={`w-full p-2 border focus:outline-none ${
                      tripType === "oneWay"
                        ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                        : "bg-slate-50 text-slate-900 border-slate-300"
                    }`}
                    required={tripType === "roundTrip"}
                  />
                </div>
              </div>

              {/* Passengers & Class */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Passengers
                  </label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 p-2 text-slate-900 focus:outline-none"
                  >
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Adults">2 Adults</option>
                    <option value="3+ Adults">3+ Adults</option>
                    <option value="Family (Adults + Children)">Family (Adults + Children)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Class
                  </label>
                  <select
                    value={cabinClass}
                    onChange={(e) => setCabinClass(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 p-2 text-slate-900 focus:outline-none"
                  >
                    <option value="Economy">Economy</option>
                    <option value="Business">Business Class</option>
                    <option value="First Class">First Class</option>
                  </select>
                </div>
              </div>

              {/* Passenger Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-200">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Muhammad Ali"
                    className="w-full bg-slate-50 border border-slate-300 p-2 text-slate-900 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0308-8171622"
                    className="w-full bg-slate-50 border border-slate-300 p-2 text-slate-900 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Preferred Airline / Special Notes (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. PIA, Emirates, Saudi Airlines, extra luggage..."
                  className="w-full bg-slate-50 border border-slate-300 p-2 text-slate-900 focus:outline-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#e61c24] hover:bg-[#cc141b] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Flight Inquiry on WhatsApp</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
