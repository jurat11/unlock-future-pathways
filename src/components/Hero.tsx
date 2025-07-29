import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-education.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredAnimation from "@/components/StaggeredAnimation";
const Hero = () => {
  const { t } = useLanguage();
  
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* University Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="University Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-1 bg-primary rounded-full"></div>
                  <span className="text-white/90 font-semibold tracking-wider uppercase text-sm">
                    {t('Elite University Prep')}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                  {t('hero.title')}
                  <span className="block mt-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    {t('hero.title.accepted')}
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl leading-relaxed text-white/90 max-w-3xl">
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-5 bg-primary text-white hover:bg-primary/90 shadow-glow font-semibold" 
                  onClick={() => document.getElementById('accepted-program')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.cta')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-10 py-5 border-white/40 text-white hover:bg-white/15 backdrop-blur-sm" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.consultation')}
                </Button>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">95%</div>
                  <div className="text-white/80 text-sm font-medium">{t('Acceptance Rate')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">2.5K+</div>
                  <div className="text-white/80 text-sm font-medium">{t('Students Placed')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">$50M+</div>
                  <div className="text-white/80 text-sm font-medium">{t('Scholarships Won')}</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* University Logos Carousel */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="absolute bottom-8 left-0 right-0">
            <div className="container mx-auto px-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-white/80 text-center text-sm font-medium mb-6">
                  {t('Our students have been accepted to top universities including:')}
                </p>
                <div className="flex items-center justify-center gap-8 lg:gap-12 overflow-hidden">
                  <div className="flex animate-scroll gap-8 lg:gap-12">
                    {/* Harvard */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                      <span className="text-red-700 font-bold text-xs">HARVARD</span>
                    </div>
                    {/* MIT */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                      <span className="text-gray-800 font-bold text-xs">MIT</span>
                    </div>
                    {/* Stanford */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 font-bold text-xs">STANFORD</span>
                    </div>
                    {/* Yale */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                      <span className="text-blue-800 font-bold text-xs">YALE</span>
                    </div>
                    {/* Princeton */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-xs">PRINCETON</span>
                    </div>
                    {/* Columbia */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                      <span className="text-blue-700 font-bold text-xs">COLUMBIA</span>
                    </div>
                    {/* Repeat for smooth loop */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                      <span className="text-red-700 font-bold text-xs">HARVARD</span>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                      <span className="text-gray-800 font-bold text-xs">MIT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};
export default Hero;