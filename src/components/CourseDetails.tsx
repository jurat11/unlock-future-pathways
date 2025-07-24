import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, Calendar, CheckCircle, User, FileText, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CourseDetails = () => {
  const { t } = useLanguage();
  
  const teamMembers = [{
    role: t('course.team.strategist'),
    icon: User,
    description: t('course.team.strategist.description')
  }, {
    role: t('course.team.essay'),
    icon: FileText,
    description: t('course.team.essay.description')
  }, {
    role: t('course.team.helper'),
    icon: Settings,
    description: t('course.team.helper.description')
  }];
  
  const checklistItems = [
    "O'zingiz uchun tanlagan soha yoki akademik qiziqish bo'lishi.",
    "Ta'lim va shaxsiy ehtiyojlaringizga mos keladigan 5 ta universitetdan iborat ro'yxat.",
    "Early Action/Early Decision uchun topshirish mumkin bo'lgan universitetlar.",
    "Darsdan tashqari mashg'ulotlar olib borilgan bo'lishi.",
    "Faxriy yutuqqa ega bo'lish.",
    "To'liq CV, rezyume va o'qish istagingizni bildiruvchi motivatsion xat.",
    "Portfolio yoki shaxsiy veb-sayt yaratish.",
    "Ijtimoiy tarmoqda profil optimallashtirish (LinkedIn va/yoki Instagram).",
    "To'ldirilgan Personal Statement yoki motivatsion xat.",
    "Tavsiyanomalarga ega bo'lish (o'zingiz yoki o'zga tomonidan).",
    "Mo'ljalingizdagi universitetlar uchun qo'shimcha insholar yozilgan bo'lishi.",
    "Barcha ariza portallari (masalan, Common App) to'liq to'ldirilishi va ko'rib chiqilishi.",
    "CSS profil va boshqa moliyaviy hujjatlar tayyorlanishi.",
    "Suhbatga tayyorgarlik (taklif qilingan bo'lsa).",
    "Universitet uchun video material yuborish (talab qilinsa).",
    "Universitetga xos hujjatlarni to'ldirish (talab qilinsa)."
  ];
  
  return (
    <section id="accepted-program" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">{t('course.title.highlight')}</span> - {t('course.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('course.subtitle')}
          </p>
        </div>

        {/* Expert Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('course.team.title')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10">
                      <member.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{member.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Program Details */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span>{t('course.details.title')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">{t('course.details.duration')}</div>
                      <div className="text-muted-foreground">{t('course.details.duration.value')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">{t('course.details.team')}</div>
                      <div className="text-muted-foreground">{t('course.details.team.value')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">{t('course.details.universities')}</div>
                      <div className="text-muted-foreground">{t('course.details.universities.value')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">{t('course.details.support')}</div>
                      <div className="text-muted-foreground">{t('course.details.support.value')}</div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-4">{t('course.details.checklist')}</h4>
                <div className="grid sm:grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                  {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{index + 1}. {item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Card */}
          <div>
            <Card className="sticky top-24">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="w-fit mx-auto mb-2">
                  {t('course.pricing.badge')}
                </Badge>
                <CardTitle className="text-2xl">{t('course.pricing.title')}</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  {t('course.pricing.contact')}
                  <span className="text-lg text-muted-foreground block mt-1">{t('course.pricing.price')}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t('course.pricing.custom')}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('course.pricing.apply')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('course.pricing.consultation')}
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {t('course.pricing.guarantee')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;