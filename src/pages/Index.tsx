import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import About from "@/components/About";
import CourseDetails from "@/components/CourseDetails";
import PricingTransparency from "@/components/PricingTransparency";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <AnimatedSection animation="fade-up">
        <Hero />
      </AnimatedSection>
      
      <TrustIndicators />
      
      <AnimatedSection animation="fade-up" delay={100}>
        <About />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <CourseDetails />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <PricingTransparency />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <FAQ />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <Contact />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
};

export default Index;
