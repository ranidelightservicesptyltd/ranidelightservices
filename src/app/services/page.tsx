import ServiceHeroV2 from "@/components/ServiceHeroV2";
import RotationSystemV2 from "@/components/RotationSystemV2";
import ComparisonChecklist from "@/components/ComparisonChecklist";
import CommercialServices from "@/components/CommercialServices";
import ServiceFrequencies from "@/components/ServiceFrequencies";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      <ServiceHeroV2 />
      <RotationSystemV2 />
      <ComparisonChecklist />
      <CommercialServices />
      <ServiceFrequencies />
      <div className="bg-gray-50">
        <CallToAction />
        <Footer />
      </div>
    </main>
  );
}
