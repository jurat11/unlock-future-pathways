import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield, Award, Users, Globe, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";

const TrustIndicators = () => {
  const { t } = useLanguage();

  const credentials = [
    {
      icon: Shield,
      title: t("Certified Counselors"),
      description: t("All counselors hold advanced degrees and certifications")
    },
    {
      icon: Award,
      title: t("Proven Track Record"),
      description: t("95% acceptance rate to target schools")
    },
    {
      icon: Users,
      title: t("Expert Team"),
      description: t("15+ years combined experience in admissions")
    },
    {
      icon: Globe,
      title: t("Global Network"),
      description: t("Partnerships with 200+ universities worldwide")
    }
  ];

  const testimonialStats = [
    { number: "1,200+", label: t("Success Stories") },
    { number: "98%", label: t("Client Satisfaction") },
    { number: "50+", label: t("Partner Universities") },
    { number: "24/7", label: t("Support Available") }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <CheckCircle className="w-4 h-4 mr-2" />
              {t("Trusted by Thousands")}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t("Why Students Choose UNLOCK")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("We've built our reputation on transparency, expertise, and genuine care for every student's success.")}
            </p>
          </div>
        </AnimatedSection>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className="p-6 text-center hover:shadow-elegant transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{credential.title}</h3>
                  <p className="text-sm text-muted-foreground">{credential.description}</p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Stats Row */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TrustIndicators;