import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CourseDetails from "@/components/CourseDetails";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredAnimation from "@/components/StaggeredAnimation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <AnimatedSection animation="fade-up">
        <Hero />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={200}>
        <About />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={300}>
        <CourseDetails />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={400}>
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={500}>
        <FAQ />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={600}>
        <Contact />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
};

export default Index;
