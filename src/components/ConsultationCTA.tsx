import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ConsultationCTA = () => {
  const { t } = useLanguage();

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className="bg-gradient-primary p-8 text-primary-foreground mb-16">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          {t('Ready to Start Your Journey?')}
        </h2>
        <p className="text-lg mb-6 opacity-90">
          {t('Get personalized guidance from our admission experts with a free 1-on-1 consultation')}
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center justify-center gap-3">
            <Calendar className="w-6 h-6" />
            <span>{t('Flexible Scheduling')}</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-6 h-6" />
            <span>{t('45-minute Session')}</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Users className="w-6 h-6" />
            <span>{t('Expert Counselors')}</span>
          </div>
        </div>

        <Button 
          size="lg" 
          variant="secondary"
          onClick={scrollToConsultation}
          className="bg-white text-primary hover:bg-white/90 shadow-glow font-semibold px-8 py-3"
        >
          {t('Book Free Consultation')}
        </Button>
      </div>
    </Card>
  );
};

export default ConsultationCTA;