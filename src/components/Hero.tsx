import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-education.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredAnimation from "@/components/StaggeredAnimation";
const Hero = () => {
  const { t } = useLanguage();
  
  return <section className="relative py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  {t('hero.title')}
                  <span className="text-primary block mt-2">{t('hero.title.accepted')}</span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {t('hero.subtitle')}
                </p>
              </div>
            </AnimatedSection>

            {/* Key Features */}
            <StaggeredAnimation staggerDelay={150} className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-success h-5 w-5" />
                <span className="text-foreground font-medium">{t('hero.feature1')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-success h-5 w-5" />
                <span className="text-foreground font-medium">{t('hero.feature2')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-success h-5 w-5" />
                <span className="text-foreground font-medium">{t('hero.feature3')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-success h-5 w-5" />
                <span className="text-foreground font-medium">{t('hero.feature4')}</span>
              </div>
            </StaggeredAnimation>

            {/* CTA Buttons */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" className="text-lg px-8 py-4 shadow-elegant hover:shadow-glow" onClick={() => document.getElementById('accepted-program')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  {t('hero.cta')}
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 hover:bg-secondary/50" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  {t('hero.consultation')}
                </Button>
              </div>
            </AnimatedSection>

            {/* Stats */}
            
          </div>

          {/* Hero Image */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-elegant">
                <img src={heroImage} alt="Students learning together" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
              </div>
              
              {/* Floating Card */}
              <AnimatedSection animation="fade-up" delay={400}>
                <Card className="absolute bottom-6 left-6 right-6 p-6 bg-background/95 backdrop-blur-sm shadow-soft border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{t('hero.card.text')}</p>
                    </div>
                    <Button variant="default" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  })}>
                      {t('hero.card.cta')}
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default Hero;