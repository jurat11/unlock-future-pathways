import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import Contact from "@/components/Contact";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Mail, Award } from "lucide-react";

const OurTeam = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: t('Founder & CEO'),
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
      education: "PhD Education, Harvard University",
      experience: t('15+ years in educational consulting'),
      specialties: [t('Ivy League Admissions'), t('PhD Applications'), t('Research Guidance')],
      bio: t('Former Harvard admissions officer with extensive experience guiding students to top-tier universities worldwide.')
    },
    {
      name: "Michael Chen",
      role: t('Director of Test Preparation'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      education: "MBA, Stanford Graduate School of Business",
      experience: t('12+ years in test prep'),
      specialties: [t('SAT/ACT Prep'), t('GMAT/GRE'), t('TOEFL/IELTS')],
      bio: t('Expert test prep instructor who has helped over 500 students achieve their target scores.')
    },
    {
      name: "Emily Rodriguez",
      role: t('Senior College Counselor'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      education: "MS Counseling Psychology, UCLA",
      experience: t('10+ years in college counseling'),
      specialties: [t('Liberal Arts Colleges'), t('Essay Coaching'), t('Scholarship Guidance')],
      bio: t('Dedicated counselor specializing in helping students find their perfect college match and craft compelling applications.')
    },
    {
      name: "Dr. James Williams",
      role: t('STEM Programs Director'),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      education: "PhD Computer Science, MIT",
      experience: t('8+ years in STEM education'),
      specialties: [t('Engineering Programs'), t('Computer Science'), t('Research Projects')],
      bio: t('Former MIT researcher helping students excel in STEM fields and gain admission to top engineering programs.')
    },
    {
      name: "Lisa Thompson",
      role: t('International Programs Coordinator'),
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      education: "MA International Relations, Oxford University",
      experience: t('9+ years in international education'),
      specialties: [t('UK Universities'), t('European Programs'), t('Study Abroad')],
      bio: t('Expert in international university systems, helping students navigate global educational opportunities.')
    },
    {
      name: "David Kim",
      role: t('Financial Aid Specialist'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      education: "MS Finance, Wharton School",
      experience: t('7+ years in financial planning'),
      specialties: [t('Need-based Aid'), t('Merit Scholarships'), t('Financial Planning')],
      bio: t('Helping families navigate the complex world of college financing and maximize their aid opportunities.')
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              {t('Meet Our Team')}
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              {t('Expert Educators & Counselors')}
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              {t('Our diverse team of experienced professionals brings together decades of expertise in admissions, test preparation, and student counseling.')}
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">{t('Years Combined Experience')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">{t('Students Guided')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">{t('Ivy League Alumni')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">{t('Countries Represented')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{t('Our Leadership Team')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('Get to know the experienced professionals who will guide your educational journey')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-elegant transition-shadow">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{member.education}</span>
                      </div>
                      <div className="text-muted-foreground">{member.experience}</div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    <div className="flex gap-2">
                      <button className="p-2 rounded-md hover:bg-muted transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-md hover:bg-muted transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">{t('Advisory Board')}</h2>
            <p className="text-xl text-muted-foreground mb-12">
              {t('We\'re proud to have guidance from distinguished leaders in education and industry')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Prof. Jennifer Adams",
                  role: t('Former Dean, Princeton University'),
                  expertise: t('Higher Education Policy')
                },
                {
                  name: "Robert Martinez",
                  role: t('Former CEO, ETS'),
                  expertise: t('Educational Assessment')
                },
                {
                  name: "Dr. Angela Foster",
                  role: t('Research Director, College Board'),
                  expertise: t('Student Success Research')
                }
              ].map((advisor, index) => (
                <Card key={index} className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">{advisor.name}</h3>
                  <p className="text-primary text-sm mb-2">{advisor.role}</p>
                  <p className="text-muted-foreground text-sm">{advisor.expertise}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
      
      <div id="consultation">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default OurTeam;