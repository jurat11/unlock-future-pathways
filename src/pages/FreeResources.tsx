import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WelcomeHero from "@/components/WelcomeHero";
import ResourceGallery from "@/components/ResourceGallery";
import FreeConsultationCTA from "@/components/FreeConsultationCTA";
import Contact from "@/components/Contact";
import { useLanguage } from "@/contexts/LanguageContext";

const FreeResources = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Welcome Hero Section */}
      <WelcomeHero />

      {/* Resource Gallery */}
      <ResourceGallery />

      {/* Free Consultation CTA */}
      <FreeConsultationCTA />

      <Contact />
      <Footer />
    </div>
  );
};

export default FreeResources;