import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-education.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredAnimation from "@/components/StaggeredAnimation";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/20 to-background">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-16 h-1 bg-primary rounded-full"></div>
                    <span className="text-foreground/90 font-semibold tracking-wider uppercase text-sm">
                      {t('Elite University Prep')}
                    </span>
                    <div className="w-16 h-1 bg-primary rounded-full"></div>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                    {t('hero.title')}
                    <span className="block mt-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                      {t('hero.title.accepted')}
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                    {t('hero.subtitle')}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-10 py-5 shadow-glow font-semibold" 
                    onClick={() => document.getElementById('accepted-program')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t('hero.cta')}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-10 py-5" 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t('hero.consultation')}
                  </Button>
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-border">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">95%</div>
                    <div className="text-muted-foreground text-sm font-medium">{t('Acceptance Rate')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">2.5K+</div>
                    <div className="text-muted-foreground text-sm font-medium">{t('Students Placed')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">$50M+</div>
                    <div className="text-muted-foreground text-sm font-medium">{t('Scholarships Won')}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* University Logos Section */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-elegant">
              <p className="text-muted-foreground text-center text-sm font-medium mb-8">
                {t('Our students have been accepted to top universities including:')}
              </p>
              <div className="flex items-center justify-center gap-8 lg:gap-12 overflow-hidden">
                <div className="flex animate-scroll gap-8 lg:gap-12">
                  {/* Harvard */}
                  <div className="flex-shrink-0 w-20 h-20 bg-background rounded-xl flex items-center justify-center shadow-sm border border-border">
                    <span className="text-red-700 font-bold text-xs">HARVARD</span>
                  </div>
                  {/* MIT */}
                  <div className="flex-shrink-0 w-20 h-20 bg-background rounded-xl flex items-center justify-center shadow-sm border border-border">
                    <span className="text-foreground font-bold text-xs">MIT</span>
                  </div>
                  {/* Stanford */}
                  <div className="flex-shrink-0 w-20 h-20 bg-background rounded-xl flex items-center justify-center shadow-sm border border-border">
                    <span className="text-red-600 font-bold text-xs">STANFORD</span>
                  </div>
                  {/* Yale */}
                  <div className="flex-shrink-0 w-20 h-20 bg-background rounded-xl flex items-center justify-center shadow-sm border border-border">
                    <span className="text-blue-800 font-bold text-xs">YALE</span>
                  </div>
                  {/* Princeton */}
                  <div className="flex-shrink-0 w-20 h-20 bg-background rounded-xl flex items-center justify-center shadow-sm border border-border">
                    <span className="text-orange-600 font-bold text-xs">PRINCETON</span>
                  </div>
                  {/* Columbia */}
                  <div className="flex-shrink-0 w-20 h-20 bg-background rounded-xl flex items-center justify-center shadow-sm border border-border">
                    <span className="text-blue-700 font-bold text-xs">COLUMBIA</span>
                  </div>
                  {/* Repeat for smooth loop */}
                  <div className="flex-shrink-0 w-20 h-20 bg-background rounded-xl flex items-center justify-center shadow-sm border border-border">
                    <span className="text-red-700 font-bold text-xs">HARVARD</span>
                  </div>
                  <div className="flex-shrink-0 w-20 h-20 bg-background rounded-xl flex items-center justify-center shadow-sm border border-border">
                    <span className="text-foreground font-bold text-xs">MIT</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Hero;