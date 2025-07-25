import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Users, ArrowRight } from "lucide-react";

const AudienceSelector = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            {t('welcomeTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('audienceSelectorSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">{t('studentsTitle')}</CardTitle>
              <CardDescription className="text-base">
                {t('studentsDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li>• {t('studentFeature1')}</li>
                <li>• {t('studentFeature2')}</li>
                <li>• {t('studentFeature3')}</li>
                <li>• {t('studentFeature4')}</li>
              </ul>
              <Button 
                onClick={() => navigate('/students')}
                className="w-full group"
                variant="hero"
              >
                {t('enterStudentPortal')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">{t('parentsTitle')}</CardTitle>
              <CardDescription className="text-base">
                {t('parentsDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li>• {t('parentFeature1')}</li>
                <li>• {t('parentFeature2')}</li>
                <li>• {t('parentFeature3')}</li>
                <li>• {t('parentFeature4')}</li>
              </ul>
              <Button 
                onClick={() => navigate('/parents')}
                className="w-full group"
                variant="hero"
              >
                {t('enterParentPortal')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            {t('notSureText')}
          </p>
          <Button 
            onClick={() => navigate('/general')}
            variant="outline"
            className="hover:bg-primary/10"
          >
            {t('viewGeneralInfo')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudienceSelector;