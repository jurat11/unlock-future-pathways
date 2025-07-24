import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-education.jpg";
const Hero = () => {
  const { t } = useLanguage();
  
  return <section className="relative min-h-screen flex items-center bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t('hero.title')}
                <span className="text-primary block">{t('hero.title.accepted')}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
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
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('accepted-program')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                {t('hero.cta')}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                {t('hero.consultation')}
              </Button>
            </div>

            {/* Stats */}
            
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img src={heroImage} alt="Students learning together" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute bottom-4 left-4 right-4 bg-gradient-primary border-0 shadow-glow">
              <div className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-white/80 animate-pulse mr-2"></div>
                  <p className="text-sm font-medium text-white/90 uppercase tracking-wide">
                    {t('hero.card.text')}
                  </p>
                </div>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold shadow-lg" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  })}
                >
                  {t('hero.card.cta')}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;