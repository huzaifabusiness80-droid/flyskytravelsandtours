"use client";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconSvg: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    id: "hotels",
    title: "Handpicked Hotels",
    description: "Verified 3-star to 5-star accommodations near prime attractions, ensuring comfort and convenience.",
    iconSvg: (
      <svg className="w-28 h-28 sm:w-32 sm:h-32 mx-auto" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Folded Map Paper - Sized & Centered Equally */}
        <g transform="translate(10, 15)">
          <path d="M10 25L38 12L66 25L94 12V78L66 91L38 78L10 91V25Z" fill="#FEE5B3" />
          <path d="M38 12L66 25V91L38 78V12Z" fill="#FDD28B" />
          <path d="M66 25L94 12V78L66 91V25Z" fill="#FEE5B3" />
          {/* Red Location Pin */}
          <path d="M52 18C44.268 18 38 24.268 38 32C38 43 52 60 52 60C52 60 66 43 66 32C66 24.268 59.732 18 52 18Z" fill="#EF4444" />
          <circle cx="52" cy="31" r="5.5" fill="#FFFFFF" />
        </g>
      </svg>
    ),
  },
  {
    id: "service",
    title: "World Class Service",
    description: "Licensed travel experts with 24/7 dedicated support, seamless bookings, and trusted visa assistance.",
    iconSvg: (
      <svg className="w-28 h-28 sm:w-32 sm:h-32 mx-auto" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(12, 10)">
          {/* Blue Globe */}
          <circle cx="48" cy="56" r="38" fill="#1D9BF0" />
          <ellipse cx="48" cy="56" rx="18" ry="38" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.4" fill="none" />
          <path d="M10 56H86" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.4" />
          <path d="M18 36H78" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.3" />
          <path d="M18 76H78" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.3" />
          {/* Red Location Marker */}
          <path d="M66 16C58.82 16 53 21.82 53 29C53 39 66 54 66 54C66 54 79 39 79 29C79 21.82 73.18 16 66 16Z" fill="#FF4B26" />
          <circle cx="66" cy="28" r="5" fill="#FFFFFF" />
        </g>
      </svg>
    ),
  },
  {
    id: "price",
    title: "Best Price Guarantee",
    description: "Direct IATA airline rates, transparent fees, and unmatched value on domestic and international tours.",
    iconSvg: (
      <svg className="w-28 h-28 sm:w-32 sm:h-32 mx-auto" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(14, 8)">
          {/* Hot Air Balloon Body */}
          <path d="M46 10C26.1177 10 10 26.1177 10 46C10 61 28 76 39 83H53C64 76 82 61 82 46C82 26.1177 65.8823 10 46 10Z" fill="#22C55E" />
          {/* Stripes */}
          <path d="M46 10C36.5 10 29.5 25.5 29.5 46C29.5 60.5 39 83 39 83H53C53 83 62.5 60.5 62.5 46C62.5 25.5 55.5 10 46 10Z" fill="#FACC15" />
          <path d="M46 10C42.5 10 40 25.5 40 46C40 60.5 44 83 44 83H48C48 83 52 60.5 52 46C52 25.5 49.5 10 46 10Z" fill="#FB923C" />
          {/* Ropes & Basket */}
          <path d="M39 83L41 92H51L53 83" stroke="#94A3B8" strokeWidth="2" />
          <rect x="39" y="92" width="14" height="9" rx="2" fill="#EAB308" />
        </g>
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Exact Match with Reference UI) */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2.5 font-normal">
            Here are reasons you should plan trip with us
          </p>
        </div>

        {/* 3-Column Feature Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {features.map((item) => (
            <div 
              key={item.id}
              className="text-center flex flex-col items-center group cursor-default"
            >
              {/* Illustrated Icon: Equal Size & Prominently Large */}
              <div className="mb-6 transform transition-transform duration-300 group-hover:-translate-y-1.5 flex items-center justify-center h-32 sm:h-36">
                {item.iconSvg}
              </div>

              {/* Feature Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2.5">
                {item.title}
              </h3>

              {/* Feature Description */}
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
