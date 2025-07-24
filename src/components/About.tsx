import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Target,
      title: t('about.values.mission.title'),
      description: t('about.values.mission.description')
    },
    {
      icon: Heart,
      title: t('about.values.story.title'),
      description: t('about.values.story.description')
    },
    {
      icon: Users,
      title: t('about.values.impact.title'),
      description: t('about.values.impact.description')
    },
    {
      icon: Lightbulb,
      title: t('about.values.approach.title'),
      description: t('about.values.approach.description')
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">{t('about.title.highlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                {t('about.why.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">{t('about.why.expert.title')}:</strong> {t('about.why.expert.description')}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">{t('about.why.system.title')}:</strong> {t('about.why.system.description')}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">{t('about.why.support.title')}:</strong> {t('about.why.support.description')}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">{t('about.why.success.title')}:</strong> {t('about.why.success.description')}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-muted-foreground mb-4">{t('about.stats.viewers')}</div>
                  <div className="text-2xl font-bold text-foreground mb-2">1450</div>
                  <div className="text-muted-foreground mb-4">{t('about.stats.sat')}</div>
                  <div className="text-2xl font-bold text-success mb-2">2022</div>
                  <div className="text-muted-foreground">{t('about.stats.founded')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;