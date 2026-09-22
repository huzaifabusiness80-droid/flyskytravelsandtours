import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import PopularDestinations from "./components/PopularDestinations";
import FeaturedPackages from "./components/FeaturedPackages";
import WhyChooseUs from "./components/WhyChooseUs";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import InquiryFormSection from "./components/InquiryFormSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white antialiased font-sans">
      {/* Top Header & Navigation */}
      <Header />

      {/* Main Website Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Banner Auto Carousel Slider */}
        <HeroCarousel />

        {/* 2. Popular Destinations (Exact UI Reference Match) */}
        <PopularDestinations />

        {/* 3. Featured Tour Packages (Exact UI Reference Match) */}
        <FeaturedPackages />

        {/* 4. Why Choose Us (Exact UI Reference Match - Positioned above Services) */}
        <WhyChooseUs />

        {/* 5. Core Travel Services Section */}
        <ServicesSection />

        {/* 6. About Fly Sky Travel & Tourism */}
        <AboutSection />

        {/* 7. Quick Booking & Inquiry Form */}
        <InquiryFormSection />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
