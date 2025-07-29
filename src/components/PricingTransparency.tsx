import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Clock, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";

const PricingTransparency = () => {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      name: t("Essential Guidance"),
      price: "$2,500",
      period: t("per year"),
      description: t("Perfect for students starting their journey"),
      features: [
        t("Monthly 1-on-1 counseling sessions"),
        t("College list development"),
        t("Essay review and feedback"),
        t("Application timeline planning"),
        t("Basic scholarship guidance")
      ],
      popular: false,
      buttonText: t("Get Started")
    },
    {
      name: t("Complete Program"),
      price: "$4,500",
      period: t("per year"),
      description: t("Our most popular comprehensive program"),
      features: [
        t("Bi-weekly 1-on-1 counseling sessions"),
        t("Complete application management"),
        t("Unlimited essay revisions"),
        t("Interview preparation"),
        t("Scholarship search & applications"),
        t("Financial aid guidance"),
        t("24/7 chat support")
      ],
      popular: true,
      buttonText: t("Most Popular")
    },
    {
      name: t("Premium Elite"),
      price: "$7,500",
      period: t("per year"),
      description: t("For students targeting top-tier universities"),
      features: [
        t("Weekly 1-on-1 counseling sessions"),
        t("Dedicated counselor team"),
        t("Unlimited revisions & support"),
        t("Mock interviews with admissions officers"),
        t("Priority scholarship matching"),
        t("Parent consultation sessions"),
        t("Emergency support line"),
        t("Alumni network access")
      ],
      popular: false,
      buttonText: t("Go Elite")
    }
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <DollarSign className="w-4 h-4 mr-2" />
              {t("Transparent Pricing")}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t("Invest in Your Future")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("No hidden fees, no surprises. Choose the program that fits your needs and budget.")}
            </p>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <Card className={`relative p-8 ${plan.popular ? 'ring-2 ring-primary shadow-elegant' : 'hover:shadow-soft'} transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    {t("Most Popular")}
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {plan.price}
                    <span className="text-sm font-normal text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Money-back guarantee */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="text-center mt-12 p-8 bg-secondary/30 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold text-foreground">
                {t("30-Day Money-Back Guarantee")}
              </h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("We're so confident in our services that we offer a full refund within the first 30 days if you're not completely satisfied.")}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingTransparency;