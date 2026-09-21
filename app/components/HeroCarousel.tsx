"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface BannerSlide {
  id: number;
  imageSrc: string;
  altText: string;
  title: string;
}

const slides: BannerSlide[] = [
  {
    id: 1,
    imageSrc: "/banner-1.png",
    altText: "Fly Sky Travel & Tourism - World Most Influential Travel Event WTM London",
    title: "WTM London Travel & Tourism Event",
  },
  {
    id: 2,
    imageSrc: "/banner-2.png",
    altText: "Fly Sky Travel & Tourism - Special Packages and Bookings",
    title: "Fly Sky Tour Packages & Visa Services",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, []);

  // Automatic Carousel Interval (4.5s auto advance)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section 
      className="relative w-full bg-slate-900 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Viewport Container */}
      <div className="relative w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-out w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full shrink-0 relative flex items-center justify-center bg-slate-950">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.4/1] min-h-[200px] sm:min-h-[380px] md:min-h-[480px] lg:min-h-[550px] max-h-[640px]">
                <Image
                  src={slide.imageSrc}
                  alt={slide.altText}
                  fill
                  priority={index === 0}
                  quality={95}
                  className="object-contain sm:object-cover w-full h-full object-center"
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manual Controls - Left Arrow (Mobile Compact, Strict NO SHADOW) */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#0b3663]/85 hover:bg-[#e61c24] text-white flex items-center justify-center transition-colors border border-white/20 shadow-none outline-none focus:outline-none"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" />
      </button>

      {/* Manual Controls - Right Arrow (Mobile Compact, Strict NO SHADOW) */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-2 sm:left-auto sm:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#0b3663]/85 hover:bg-[#e61c24] text-white flex items-center justify-center transition-colors border border-white/20 shadow-none outline-none focus:outline-none"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" />
      </button>

      {/* Bottom Bar: Indicators & Slide Status */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-between px-6 max-w-7xl mx-auto pointer-events-none">
    
        {/* Carousel Dot Navigation Indicators (NO SHADOW) */}
        <div className="flex items-center gap-2 pointer-events-auto bg-black/40 backdrop-blur-sm py-1.5 px-3 rounded-full border border-white/10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 shadow-none border-none outline-none ${
                currentIndex === idx
                  ? "w-8 bg-[#e61c24]"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
