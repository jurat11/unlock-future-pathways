import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import Contact from "@/components/Contact";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Users, Award, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredAnimation from "@/components/StaggeredAnimation";

const AboutUs = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('Excellence in Education'),
      description: t('We strive for the highest standards in educational consulting and student development.')
    },
    {
      icon: Users,
      title: t('Student-Centered Approach'),
      description: t('Every decision we make puts our students\' success and well-being at the center.')
    },
    {
      icon: Award,
      title: t('Proven Results'),
      description: t('Our track record speaks for itself with successful admissions to top universities worldwide.')
    },
    {
      icon: Globe,
      title: t('Global Perspective'),
      description: t('We prepare students for success in an increasingly interconnected world.')
    }
  ];

  const milestones = [
    { year: '2020', event: t('UNLOCK Education Founded') },
    { year: '2021', event: t('First 100 Students Successfully Placed') },
    { year: '2022', event: t('Expanded to International Universities') },
    { year: '2023', event: t('Launched Free Resources Program') },
    { year: '2024', event: t('1000+ Students Successfully Guided') }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                {t('About UNLOCK Education')}
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                {t('Empowering Students to Reach Their Full Potential')}
              </h1>
              <p className="text-xl leading-relaxed opacity-90">
                {t('Founded with a mission to democratize access to world-class education, UNLOCK Education has been guiding ambitious students toward their dream universities since 2020.')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">{t('Our Mission')}</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {t('To provide comprehensive, personalized educational consulting that empowers students to gain admission to their dream universities and thrive in their academic journey.')}
                </p>
              </div>
            </AnimatedSection>

            <StaggeredAnimation staggerDelay={200} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-elegant hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl font-bold text-center mb-12">{t('Our Story')}</h2>
            </AnimatedSection>
            
            <StaggeredAnimation staggerDelay={300} className="space-y-8">
              <Card className="p-8 hover:shadow-elegant transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4">{t('The Beginning')}</h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  {t('UNLOCK Education was born from a simple observation: talented students often lacked access to the guidance and resources needed to navigate the complex world of university admissions. Our founders, having experienced this challenge firsthand, set out to create a solution.')}
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t('What started as informal mentoring sessions with local students quickly grew into a comprehensive educational consulting service, driven by the belief that every student deserves the opportunity to unlock their potential.')}
                </p>
              </Card>

              <Card className="p-8 hover:shadow-elegant transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4">{t('Our Growth')}</h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  {t('Over the years, we\'ve expanded our services to include comprehensive test preparation, essay coaching, scholarship guidance, and ongoing academic support. Our holistic approach ensures that students are not just prepared for admission, but for success throughout their university experience.')}
                </p>
                
                <StaggeredAnimation staggerDelay={100} className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Badge variant="outline" className="px-3 py-1 font-semibold">
                        {milestone.year}
                      </Badge>
                      <span className="text-muted-foreground">{milestone.event}</span>
                    </div>
                  ))}
                </StaggeredAnimation>
              </Card>
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl font-bold mb-8">{t('Our Vision for the Future')}</h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                {t('We envision a world where every motivated student, regardless of their background, has access to world-class educational opportunities. Through technology, personalized guidance, and our growing network of partners, we\'re working to make this vision a reality.')}
              </p>
            </AnimatedSection>
            <StaggeredAnimation staggerDelay={200} className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 rounded-lg hover:bg-muted/30 transition-colors duration-300">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">{t('Students Guided')}</div>
              </div>
              <div className="text-center p-6 rounded-lg hover:bg-muted/30 transition-colors duration-300">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">{t('Success Rate')}</div>
              </div>
              <div className="text-center p-6 rounded-lg hover:bg-muted/30 transition-colors duration-300">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">{t('Partner Universities')}</div>
              </div>
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      <ConsultationCTA />
      
      <div id="consultation">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;