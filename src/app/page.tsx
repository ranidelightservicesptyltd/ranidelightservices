import dynamic from "next/dynamic";
import ScrollCanvas from "@/components/ScrollCanvas";

// Below-fold sections: code-split into separate chunks, loaded on demand
const ServicesGrid = dynamic(() => import("@/components/ServicesGrid"));
const BeforeAfterSlider = dynamic(() => import("@/components/BeforeAfterSlider"));
const StatsRow = dynamic(() => import("@/components/StatsRow"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const TestimonialCarousel = dynamic(() => import("@/components/TestimonialCarousel"));
const CallToAction = dynamic(() => import("@/components/CallToAction"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Scrollytelling Experience */}
      <ScrollCanvas />

      {/* Premium Content Sections — lazy loaded */}
      <ServicesGrid />
      <BeforeAfterSlider />
      
      {/* Stats - Move after See The Difference */}
      <StatsRow />

      <HowItWorks />
      <WhyChooseUs />
      <TestimonialCarousel />
      <CallToAction />
      
      {/* 4-Column Professional Footer */}
      <Footer />
    </main>
  );
}
