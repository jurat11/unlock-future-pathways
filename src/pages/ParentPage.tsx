import Header from "@/components/Header";
import ParentHero from "@/components/parent/ParentHero";
import ParentAbout from "@/components/parent/ParentAbout";
import ParentGuide from "@/components/parent/ParentGuide";
import ParentSupport from "@/components/parent/ParentSupport";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ParentPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ParentHero />
      <ParentAbout />
      <ParentGuide />
      <ParentSupport />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default ParentPage;