import Header from "@/components/Header";
import StudentHero from "@/components/student/StudentHero";
import StudentAbout from "@/components/student/StudentAbout";
import StudentPrograms from "@/components/student/StudentPrograms";
import StudentResources from "@/components/student/StudentResources";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const StudentPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <StudentHero />
      <StudentAbout />
      <StudentPrograms />
      <StudentResources />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default StudentPage;