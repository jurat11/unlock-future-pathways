import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, ArrowRight } from "lucide-react";

const StudentPrograms = () => {
  const { t } = useLanguage();

  const programs = [
    {
      title: t('studentProgram1Title'),
      description: t('studentProgram1Desc'),
      duration: t('studentProgram1Duration'),
      groupSize: t('studentProgram1GroupSize'),
      level: t('studentProgram1Level'),
      features: [
        t('studentProgram1Feature1'),
        t('studentProgram1Feature2'),
        t('studentProgram1Feature3'),
        t('studentProgram1Feature4')
      ]
    },
    {
      title: t('studentProgram2Title'),
      description: t('studentProgram2Desc'),
      duration: t('studentProgram2Duration'),
      groupSize: t('studentProgram2GroupSize'),
      level: t('studentProgram2Level'),
      features: [
        t('studentProgram2Feature1'),
        t('studentProgram2Feature2'),
        t('studentProgram2Feature3'),
        t('studentProgram2Feature4')
      ]
    },
    {
      title: t('studentProgram3Title'),
      description: t('studentProgram3Desc'),
      duration: t('studentProgram3Duration'),
      groupSize: t('studentProgram3GroupSize'),
      level: t('studentProgram3Level'),
      features: [
        t('studentProgram3Feature1'),
        t('studentProgram3Feature2'),
        t('studentProgram3Feature3'),
        t('studentProgram3Feature4')
      ]
    }
  ];

  return (
    <section id="student-programs" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('studentProgramsTitle')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('studentProgramsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-primary/10 h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {program.level}
                  </Badge>
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {program.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {program.groupSize}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full group" variant="outline">
                  {t('learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentPrograms;