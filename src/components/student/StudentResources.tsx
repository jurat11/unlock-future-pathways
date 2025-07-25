import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, BookOpen, FileText, Video, Users } from "lucide-react";

const StudentResources = () => {
  const { t } = useLanguage();

  const resources = [
    {
      icon: FileText,
      title: t('studentResource1Title'),
      description: t('studentResource1Desc'),
      action: t('downloadGuide'),
      actionIcon: Download
    },
    {
      icon: Video,
      title: t('studentResource2Title'),
      description: t('studentResource2Desc'),
      action: t('watchWebinar'),
      actionIcon: ExternalLink
    },
    {
      icon: BookOpen,
      title: t('studentResource3Title'),
      description: t('studentResource3Desc'),
      action: t('accessLibrary'),
      actionIcon: ExternalLink
    },
    {
      icon: Users,
      title: t('studentResource4Title'),
      description: t('studentResource4Desc'),
      action: t('joinCommunity'),
      actionIcon: ExternalLink
    }
  ];

  return (
    <section id="student-resources" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('studentResourcesTitle')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('studentResourcesSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-primary/10">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {resource.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button variant="outline" className="w-full group">
                  {resource.action}
                  <resource.actionIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">{t('needPersonalizedHelp')}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('personalizedHelpDescription')}
            </p>
            <Button size="lg" variant="hero">
              {t('scheduleConsultation')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentResources;