import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  MessageCircle,
  Video,
  Phone
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredAnimation from "@/components/StaggeredAnimation";

const FreeConsultationCTA = () => {
  const { t } = useLanguage();

  const experts = [
    {
      name: "Dr. Sarah Williams",
      title: "Former Harvard Admissions Officer",
      expertise: "Ivy League Applications",
      rating: 4.9,
      sessions: "500+",
      image: "https://images.unsplash.com/photo-1494790108755-2616b25a0d54?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      title: "MIT Alumni & Tech Recruiter",
      expertise: "STEM Programs",
      rating: 4.8,
      sessions: "350+",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      title: "Stanford MBA & Entrepreneur",
      expertise: "Business Schools",
      rating: 4.9,
      sessions: "420+",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const benefits = [
    {
      icon: Calendar,
      title: t("Personalized Roadmap"),
      description: t("Get a custom plan tailored to your goals and timeline")
    },
    {
      icon: CheckCircle,
      title: t("Application Review"),
      description: t("Expert feedback on your essays, resume, and strategy")
    },
    {
      icon: Users,
      title: t("School Selection"),
      description: t("Identify the best-fit colleges for your profile")
    },
    {
      icon: Star,
      title: t("Success Strategies"),
      description: t("Learn insider tips from admissions professionals")
    }
  ];

  const sessionOptions = [
    {
      icon: Video,
      type: t("Video Call"),
      duration: "60 minutes",
      description: t("Face-to-face consultation with screen sharing"),
      popular: true
    },
    {
      icon: Phone,
      type: t("Phone Call"),
      duration: "45 minutes", 
      description: t("Traditional phone consultation")
    },
    {
      icon: MessageCircle,
      type: t("Chat Session"),
      duration: "30 minutes",
      description: t("Real-time text-based consultation")
    }
  ];

  return (
    <section id="free-consultation" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Calendar className="w-4 h-4 mr-2" />
                {t("Limited Time Offer")}
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {t("Schedule Your")} 
                <span className="text-primary"> {t("Free 1-on-1")} </span>
                {t("Session")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("Get personalized guidance from our expert counselors. No cost, no commitment - just valuable insights to accelerate your college journey.")}
              </p>
            </div>
          </AnimatedSection>

          {/* Main CTA Card */}
          <AnimatedSection animation="scale" delay={200}>
            <Card className="p-8 lg:p-12 mb-16 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {t("Ready to Get Started?")}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t("Book your free consultation now and take the first step towards your dream college. Our experts are here to help you succeed.")}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{t("100% Free - No Hidden Costs")}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{t("Expert Admissions Counselors")}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{t("Personalized Action Plan")}</span>
                    </div>
                  </div>

                  <Button size="lg" className="shadow-glow">
                    <Calendar className="w-5 h-5 mr-2" />
                    {t("Book Free Session Now")}
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20"></div>
                  <div className="relative bg-card rounded-2xl p-6 border shadow-elegant">
                    <div className="text-center mb-4">
                      <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">{t("Next Available Slots")}</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                        <span className="text-sm">{t("Today")}</span>
                        <Badge variant="secondary">2:00 PM</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                        <span className="text-sm">{t("Tomorrow")}</span>
                        <Badge variant="secondary">10:00 AM</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                        <span className="text-sm">{t("This Week")}</span>
                        <Badge variant="secondary">15+ slots</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          {/* Session Options */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">
                {t("Choose Your Preferred Session Type")}
              </h3>
              <StaggeredAnimation className="grid md:grid-cols-3 gap-6">
                {sessionOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`p-6 text-center cursor-pointer transition-all hover:shadow-elegant ${
                        option.popular ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                      }`}
                    >
                      {option.popular && (
                        <Badge className="mb-3 bg-primary text-primary-foreground">
                          {t("Most Popular")}
                        </Badge>
                      )}
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">{option.type}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{option.duration}</p>
                      <p className="text-xs text-muted-foreground">{option.description}</p>
                    </Card>
                  );
                })}
              </StaggeredAnimation>
            </div>
          </AnimatedSection>

          {/* Expert Counselors */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">
                {t("Meet Our Expert Counselors")}
              </h3>
              <StaggeredAnimation className="grid md:grid-cols-3 gap-6">
                {experts.map((expert, index) => (
                  <Card key={index} className="p-6 text-center">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="font-semibold mb-1">{expert.name}</h4>
                    <p className="text-sm text-primary mb-2">{expert.title}</p>
                    <p className="text-xs text-muted-foreground mb-3">{expert.expertise}</p>
                    
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{expert.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{expert.sessions}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </StaggeredAnimation>
            </div>
          </AnimatedSection>

          {/* What You'll Get */}
          <AnimatedSection animation="fade-up" delay={500}>
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">
                {t("What You'll Get in Your Free Session")}
              </h3>
              <StaggeredAnimation className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </Card>
                  );
                })}
              </StaggeredAnimation>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default FreeConsultationCTA;