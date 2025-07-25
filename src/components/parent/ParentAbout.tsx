import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, Award } from "lucide-react";

const ParentAbout = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Heart,
      title: t('parentAboutFeature1Title'),
      description: t('parentAboutFeature1Desc')
    },
    {
      icon: Users,
      title: t('parentAboutFeature2Title'),
      description: t('parentAboutFeature2Desc')
    },
    {
      icon: BookOpen,
      title: t('parentAboutFeature3Title'),
      description: t('parentAboutFeature3Desc')
    },
    {
      icon: Award,
      title: t('parentAboutFeature4Title'),
      description: t('parentAboutFeature4Desc')
    }
  ];

  return (
    <section id="parent-about" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('parentAboutTitle')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('parentAboutSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentAbout;