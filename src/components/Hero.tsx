import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-education.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredAnimation from "@/components/StaggeredAnimation";
const Hero = () => {
  const { t } = useLanguage();
  
  return <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Content - Takes more space */}
          <div className="lg:col-span-7 space-y-8 text-white">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-white/80 rounded-full"></div>
                  <span className="text-white/90 font-medium tracking-wide uppercase text-sm">
                    {t('Transform Your Future')}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  {t('hero.title')}
                  <span className="block mt-3 bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                    {t('hero.title.accepted')}
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl leading-relaxed text-white/90 max-w-2xl">
                  {t('hero.subtitle')}
                </p>
              </div>
            </AnimatedSection>

            {/* Enhanced Features Grid */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="grid sm:grid-cols-2 gap-4 my-8">
                {[
                  { icon: CheckCircle, text: t('hero.feature1') },
                  { icon: CheckCircle, text: t('hero.feature2') },
                  { icon: CheckCircle, text: t('hero.feature3') },
                  { icon: CheckCircle, text: t('hero.feature4') }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <feature.icon className="text-white h-5 w-5 flex-shrink-0" />
                    <span className="text-white font-medium text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-elegant hover:shadow-glow font-semibold" 
                  onClick={() => document.getElementById('accepted-program')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.cta')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.consultation')}
                </Button>
              </div>
            </AnimatedSection>

            {/* Quick Stats */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">95%</div>
                  <div className="text-white/80 text-sm">{t('Success Rate')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2.5K+</div>
                  <div className="text-white/80 text-sm">{t('Students Helped')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-white/80 text-sm">{t('Partner Schools')}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Image Side - Smaller but more impactful */}
          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img src={heroImage} alt="Students learning together" className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-elegant">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    <div>
                      <div className="text-sm font-bold text-foreground">Top Rated</div>
                      <div className="text-xs text-muted-foreground">4.9★ Reviews</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-elegant">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-accent" />
                    <div>
                      <div className="text-sm font-bold text-foreground">Live Support</div>
                      <div className="text-xs text-muted-foreground">24/7 Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;