import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LenisProvider>
      {/* Fixed navigation */}
      <Navbar />

      <main>
        {/* 1. Hero — video-inside-text masking */}
        <HeroSection />

        {/* 2. Scroll-triggered word-by-word intro */}
        <IntroSection />

        {/* 3. Memories / Masonry gallery */}
        <GallerySection />

        {/* 4. Testimonials — drag carousel */}
        <TestimonialsSection />

        {/* 5. Sponsors grid */}
        <SponsorsSection />

        {/* 6. FAQ — colorful expandable cards */}
        <FAQSection />
      </main>

      {/* Footer with massive wordmark */}
      <Footer />
    </LenisProvider>
  );
}
