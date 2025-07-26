import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import Contact from "@/components/Contact";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Clock, Users, Star, CheckCircle, Calendar } from "lucide-react";

const Programs = () => {
  const { t } = useLanguage();

  const programs = [
    {
      title: t('Class of 2030 Program'),
      subtitle: t('For Current 8th-9th Graders'),
      description: t('Early preparation program designed to build a strong foundation for high school success and future college applications.'),
      duration: t('4-year comprehensive program'),
      groupSize: t('15-20 students per cohort'),
      startDate: t('September 2024'),
      price: '$2,500/year',
      featured: false,
      benefits: [
        t('Academic planning and course selection'),
        t('Extracurricular activity guidance'),
        t('Summer program recommendations'),
        t('Leadership development workshops'),
        t('Early SAT/ACT preparation'),
        t('College exploration and campus visits'),
        t('Parent education sessions'),
        t('Quarterly progress reviews')
      ],
      outcomes: [
        t('95% acceptance rate to top-choice schools'),
        t('Average SAT score improvement: 200+ points'),
        t('100% scholarship application completion'),
        t('Strong leadership portfolios developed')
      ]
    },
    {
      title: t('Class of 2031 Program'),
      subtitle: t('For Current 7th-8th Graders'),
      description: t('Comprehensive 5-year program that guides students from middle school through college admission, ensuring maximum preparation time.'),
      duration: t('5-year comprehensive program'),
      groupSize: t('12-15 students per cohort'),
      startDate: t('September 2024'),
      price: '$2,200/year',
      featured: true,
      benefits: [
        t('Middle school academic excellence training'),
        t('High school readiness preparation'),
        t('Complete high school course planning'),
        t('Extensive test preparation (5-year timeline)'),
        t('Research project mentorship'),
        t('International program opportunities'),
        t('College application strategy development'),
        t('Interview preparation and practice'),
        t('Financial aid and scholarship planning'),
        t('Career exploration and internship guidance')
      ],
      outcomes: [
        t('98% acceptance rate to top-tier universities'),
        t('Average SAT/ACT score in 95th percentile'),
        t('Average scholarship awards: $15,000+'),
        t('Strong research and leadership portfolios')
      ]
    }
  ];

  const additionalPrograms = [
    {
      title: t('Gap Year Program'),
      description: t('Structured gap year experience with research, internships, and skill development'),
      duration: t('1 year'),
      type: t('Individual Program')
    },
    {
      title: t('Transfer Student Support'),
      description: t('Specialized guidance for students transferring between institutions'),
      duration: t('1-2 semesters'),
      type: t('Individual Program')
    },
    {
      title: t('Graduate School Prep'),
      description: t('Comprehensive preparation for graduate and professional school applications'),
      duration: t('1-2 years'),
      type: t('Individual Program')
    },
    {
      title: t('International Student Program'),
      description: t('Specialized support for international students navigating US admissions'),
      duration: t('Varies'),
      type: t('Individual Program')
    }
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              {t('Our Programs')}
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              {t('Comprehensive University Preparation Programs')}
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              {t('Multi-year programs designed to guide students from middle school through successful university admission and beyond.')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{t('Flagship Programs')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('Long-term, comprehensive programs that provide end-to-end support for university admission success')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className={`overflow-hidden ${program.featured ? 'ring-2 ring-primary shadow-glow' : ''}`}>
                  {program.featured && (
                    <div className="bg-primary text-primary-foreground px-4 py-2 text-center font-semibold">
                      {t('Most Popular Program')}
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                      <p className="text-primary font-semibold mb-3">{program.subtitle}</p>
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{program.groupSize}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{program.startDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        {t('Program Benefits')}
                      </h4>
                      <div className="space-y-2">
                        {program.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        {t('Expected Outcomes')}
                      </h4>
                      <div className="space-y-2">
                        {program.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">
                              {outcome}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-6 flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary">{program.price}</div>
                        <div className="text-sm text-muted-foreground">{t('Payment plans available')}</div>
                      </div>
                      <Button 
                        size="lg" 
                        variant={program.featured ? "default" : "outline"}
                        onClick={scrollToConsultation}
                      >
                        {t('Apply Now')}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{t('Specialized Programs')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('Targeted programs for specific needs and circumstances')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalPrograms.map((program, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
                  <Badge variant="outline" className="mb-4">{program.type}</Badge>
                  <h3 className="text-lg font-semibold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={scrollToConsultation}>
                    {t('Learn More')}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">{t('Why Choose UNLOCK Programs?')}</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('Small Cohorts')}</h3>
                <p className="text-muted-foreground">
                  {t('Intimate group sizes ensure personalized attention and strong peer relationships')}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('Expert Mentorship')}</h3>
                <p className="text-muted-foreground">
                  {t('Direct access to experienced counselors and industry professionals')}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('Proven Results')}</h3>
                <p className="text-muted-foreground">
                  {t('Track record of successful admissions to top universities worldwide')}
                </p>
              </div>
            </div>
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

export default Programs;