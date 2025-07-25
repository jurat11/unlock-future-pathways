import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Trophy, Globe, Users, ArrowRight, Star } from "lucide-react";
import heroEducation from "@/assets/hero-education.jpg";

const StudentHero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('studentHeroTitle')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('studentHeroSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: BookOpen, text: t('studentBenefit1') },
              { icon: Trophy, text: t('studentBenefit2') },
              { icon: Globe, text: t('studentBenefit3') },
              { icon: Users, text: t('studentBenefit4') }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 backdrop-blur-sm">
                <benefit.icon className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('student-programs')}
              variant="hero"
              size="lg"
              className="group"
            >
              {t('explorePrograms')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-primary/10"
            >
              {t('getPersonalConsultation')}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={heroEducation} 
              alt="Students studying" 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          
          <Card className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm border-primary/20 shadow-glow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t('studentSuccessRate')}</p>
                  <p className="text-xs text-muted-foreground">{t('studentSuccessRateSubtext')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudentHero;