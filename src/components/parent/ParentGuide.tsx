import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, ArrowRight, CheckCircle } from "lucide-react";

const ParentGuide = () => {
  const { t } = useLanguage();

  const steps = [
    {
      step: "1",
      title: t('parentGuideStep1Title'),
      description: t('parentGuideStep1Desc'),
      duration: t('parentGuideStep1Duration'),
      tasks: [
        t('parentGuideStep1Task1'),
        t('parentGuideStep1Task2'),
        t('parentGuideStep1Task3')
      ]
    },
    {
      step: "2",
      title: t('parentGuideStep2Title'),
      description: t('parentGuideStep2Desc'),
      duration: t('parentGuideStep2Duration'),
      tasks: [
        t('parentGuideStep2Task1'),
        t('parentGuideStep2Task2'),
        t('parentGuideStep2Task3')
      ]
    },
    {
      step: "3",
      title: t('parentGuideStep3Title'),
      description: t('parentGuideStep3Desc'),
      duration: t('parentGuideStep3Duration'),
      tasks: [
        t('parentGuideStep3Task1'),
        t('parentGuideStep3Task2'),
        t('parentGuideStep3Task3')
      ]
    },
    {
      step: "4",
      title: t('parentGuideStep4Title'),
      description: t('parentGuideStep4Desc'),
      duration: t('parentGuideStep4Duration'),
      tasks: [
        t('parentGuideStep4Task1'),
        t('parentGuideStep4Task2'),
        t('parentGuideStep4Task3')
      ]
    }
  ];

  return (
    <section id="parent-guide" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('parentGuideTitle')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('parentGuideSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-primary/10 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                {step.step}
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {step.duration}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {step.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-sm flex items-start">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 mr-2 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">{t('parentGuideCallToAction')}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('parentGuideCallToActionDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero">
                {t('downloadCompleteGuide')}
              </Button>
              <Button size="lg" variant="outline">
                {t('scheduleConsultation')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentGuide;