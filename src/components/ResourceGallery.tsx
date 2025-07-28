import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  FileText, 
  BookOpen, 
  Video, 
  Users, 
  Download, 
  Clock, 
  PlayCircle,
  TrendingUp,
  Star,
  ChevronRight
} from "lucide-react";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import AnimatedSection from "@/components/AnimatedSection";

const ResourceGallery = () => {
  const { t } = useLanguage();

  const resourceSections = [
    {
      id: "guidelines",
      title: t("Rare College Admission Guidelines & PDFs"),
      subtitle: t("Exclusive documents and comprehensive guides"),
      icon: FileText,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      items: [
        {
          title: t("Ivy League Essay Analysis"),
          description: t("Real accepted essays with detailed breakdowns"),
          type: "PDF Guide",
          pages: 45,
          downloads: "12.3K",
          tag: "Trending"
        },
        {
          title: t("Interview Mastery Handbook"),
          description: t("Alumni interview strategies and common questions"),
          type: "PDF Guide", 
          pages: 28,
          downloads: "8.7K",
          tag: "Popular"
        },
        {
          title: t("Financial Aid Decoded"),
          description: t("Complete guide to scholarships and funding"),
          type: "PDF Guide",
          pages: 35,
          downloads: "15.2K",
          tag: "Essential"
        }
      ]
    },
    {
      id: "insights",
      title: t("Real Admissions Insights"),
      subtitle: t("Latest trends and insider knowledge"),
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      items: [
        {
          title: t("2024 Admissions Trends Report"),
          description: t("Comprehensive analysis of this year's admissions landscape"),
          readTime: "8 min",
          publishDate: "March 2024",
          category: "Trends",
          views: "25.4K"
        },
        {
          title: t("Test-Optional Strategy Guide"),
          description: t("When and how to submit standardized test scores"),
          readTime: "6 min",
          publishDate: "February 2024",
          category: "Strategy",
          views: "18.9K"
        },
        {
          title: t("International Student Success"),
          description: t("Unique challenges and opportunities for global applicants"),
          readTime: "10 min",
          publishDate: "January 2024",
          category: "International",
          views: "32.1K"
        }
      ]
    },
    {
      id: "podcasts",
      title: t("1-Hour Podcasts with Top University Admits"),
      subtitle: t("In-depth conversations with successful students"),
      icon: Video,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      items: [
        {
          title: t("Harvard Success Story"),
          guest: "Sarah Johnson, Harvard '23",
          description: t("From small town to Harvard: A journey of determination"),
          duration: "62 min",
          views: "45.2K",
          rating: 4.9
        },
        {
          title: t("MIT Engineering Path"),
          guest: "Alex Chen, MIT '22", 
          description: t("Breaking into top engineering programs"),
          duration: "58 min",
          views: "38.7K",
          rating: 4.8
        },
        {
          title: t("Stanford Entrepreneurship"),
          guest: "Maria Rodriguez, Stanford '24",
          description: t("Building a startup while in college"),
          duration: "65 min",
          views: "52.3K",
          rating: 4.9
        }
      ]
    },
    {
      id: "courses",
      title: t("Ultimate Admission Courses"),
      subtitle: t("Comprehensive preparation programs"),
      icon: BookOpen,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      items: [
        {
          title: t("Complete College Application Bootcamp"),
          description: t("End-to-end application process mastery"),
          duration: "8 hours",
          lessons: 24,
          enrolled: "2.1K",
          level: "Beginner"
        },
        {
          title: t("Essay Writing Masterclass"),
          description: t("Craft compelling personal statements"),
          duration: "4 hours",
          lessons: 12,
          enrolled: "3.5K",
          level: "Intermediate"
        },
        {
          title: t("Interview Excellence Program"),
          description: t("Ace your college interviews with confidence"),
          duration: "3 hours",
          lessons: 9,
          enrolled: "1.8K",
          level: "Advanced"
        }
      ]
    }
  ];

  return (
    <section id="resource-gallery" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t("Your Complete Resource Library")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("Everything you need to navigate the college admissions process successfully, completely free.")}
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-20">
          {resourceSections.map((section, sectionIndex) => {
            const Icon = section.icon;
            
            return (
              <div key={section.id} className="max-w-7xl mx-auto">
                <AnimatedSection animation="fade-up" delay={sectionIndex * 100}>
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 rounded-2xl ${section.bgColor} ${section.borderColor} border-2 flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 ${section.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Section Items */}
                <StaggeredAnimation staggerDelay={150} className="grid lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="p-6 hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                      {/* Item Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          {item.tag && (
                            <Badge variant="secondary" className="mb-2 text-xs">
                              {item.tag}
                            </Badge>
                          )}
                          <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {item.description}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>

                      {/* Item Metadata */}
                      <div className="space-y-2 mb-4">
                        {/* PDF Resources */}
                        {item.pages && (
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{item.pages} pages</span>
                            <span>{item.downloads} downloads</span>
                          </div>
                        )}

                        {/* Insights */}
                        {item.readTime && (
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{item.readTime}</span>
                            </div>
                            <span>{item.views} views</span>
                          </div>
                        )}

                        {/* Podcasts */}
                        {item.duration && item.guest && (
                          <>
                            <p className="text-sm font-medium text-primary">{item.guest}</p>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <PlayCircle className="w-4 h-4" />
                                <span>{item.duration}</span>
                              </div>
                              {item.rating && (
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  <span>{item.rating}</span>
                                </div>
                              )}
                            </div>
                          </>
                        )}

                        {/* Courses */}
                        {item.lessons && (
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>{item.lessons} lessons</span>
                              <span>{item.enrolled} enrolled</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {item.level}
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Action Button */}
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      >
                        {section.id === 'guidelines' && <Download className="w-4 h-4 mr-2" />}
                        {section.id === 'insights' && <BookOpen className="w-4 h-4 mr-2" />}
                        {section.id === 'podcasts' && <PlayCircle className="w-4 h-4 mr-2" />}
                        {section.id === 'courses' && <Users className="w-4 h-4 mr-2" />}
                        
                        {section.id === 'guidelines' && t("Download")}
                        {section.id === 'insights' && t("Read More")}
                        {section.id === 'podcasts' && t("Listen Now")}
                        {section.id === 'courses' && t("Start Course")}
                      </Button>
                    </Card>
                  ))}
                </StaggeredAnimation>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourceGallery;