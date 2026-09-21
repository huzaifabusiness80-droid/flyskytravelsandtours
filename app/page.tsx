import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import ServicesSection from "./components/ServicesSection";
import FeaturedPackages from "./components/FeaturedPackages";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutSection from "./components/AboutSection";
import InquiryFormSection from "./components/InquiryFormSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 antialiased font-sans">
      {/* Top Header & Navigation */}
      <Header />

      {/* Main Website Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Banner Auto Carousel Slider */}
        <HeroCarousel />

        {/* 2. Core Travel Services Section */}
        <ServicesSection />

        {/* 3. Featured Tour Destinations & Packages */}
        <FeaturedPackages />

        {/* 4. Why Choose Fly Sky (Credentials & Stats) */}
        <WhyChooseUs />

        {/* 5. About Fly Sky Travel & Tourism */}
        <AboutSection />

        {/* 6. Quick Booking & Inquiry Form */}
        <InquiryFormSection />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
