import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Users, BookOpen, Trophy } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WelcomeHero = () => {
  const { t } = useLanguage();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });

  const stats = [
    { icon: Users, value: "25K+", label: t("Students Helped"), delay: 0 },
    { icon: BookOpen, value: "100+", label: t("Free Resources"), delay: 100 },
    { icon: Trophy, value: "95%", label: t("Success Rate"), delay: 200 },
    { icon: Heart, value: "4.9★", label: t("Student Rating"), delay: 300 }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-pattern opacity-30 animate-pulse"></div>
      
      {/* Main Content */}
      <div className="relative z-10 py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Heart className="w-4 h-4 mr-2" />
                {t("Always Here to Help")}
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t("We Believe in")} 
                <span className="block bg-gradient-to-r from-white to-primary-foreground bg-clip-text text-transparent">
                  {t("Open Education")}
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl leading-relaxed opacity-90 mb-8 max-w-3xl mx-auto">
                {t("At UNLOCK, we're committed to democratizing quality education. Every student deserves access to the best resources, guidance, and opportunities to achieve their dreams.")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-glow"
                  onClick={() => document.getElementById('resource-gallery')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t("Explore Free Resources")}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => document.getElementById('free-consultation')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t("Get Free Consultation")}
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Animated Stats */}
          <div ref={statsRef as any} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className={`transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      statsVisible 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-8 scale-95'
                    }`}
                    style={{ transitionDelay: `${stat.delay}ms` }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-white/80 text-sm font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default WelcomeHero;