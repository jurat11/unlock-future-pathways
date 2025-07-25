import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Video, Users, ArrowRight, Clock } from "lucide-react";

const ParentSupport = () => {
  const { t } = useLanguage();

  const supportOptions = [
    {
      icon: MessageCircle,
      title: t('parentSupport1Title'),
      description: t('parentSupport1Desc'),
      availability: t('parentSupport1Availability'),
      action: t('startChat')
    },
    {
      icon: Phone,
      title: t('parentSupport2Title'),
      description: t('parentSupport2Desc'),
      availability: t('parentSupport2Availability'),
      action: t('scheduleCall')
    },
    {
      icon: Video,
      title: t('parentSupport3Title'),
      description: t('parentSupport3Desc'),
      availability: t('parentSupport3Availability'),
      action: t('bookSession')
    },
    {
      icon: Users,
      title: t('parentSupport4Title'),
      description: t('parentSupport4Desc'),
      availability: t('parentSupport4Availability'),
      action: t('joinGroup')
    }
  ];

  return (
    <section id="parent-support" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('parentSupportTitle')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('parentSupportSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-primary/10 h-full flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <option.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {option.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {option.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex flex-col">
                <div className="flex items-center justify-center text-xs text-muted-foreground mb-4">
                  <Clock className="h-3 w-3 mr-1" />
                  {option.availability}
                </div>
                <Button variant="outline" className="w-full group mt-auto">
                  {option.action}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('emergencySupport')}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('emergencySupportDesc')}
            </p>
            <Button size="lg" variant="hero" className="bg-red-600 hover:bg-red-700">
              {t('emergencyContact')}
              <Phone className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentSupport;