import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import Contact from "@/components/Contact";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { BookOpen, Video, FileText, Podcast, Download, Clock, Users, PlayCircle, X } from "lucide-react";

const FreeResources = () => {
  const { t } = useLanguage();
  const [selectedInsight, setSelectedInsight] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openInsight = (insight: any) => {
    setSelectedInsight(insight);
    setIsDialogOpen(true);
  };

  const closeInsight = () => {
    setSelectedInsight(null);
    setIsDialogOpen(false);
  };

  const courses = [
    {
      title: t('College Application Essentials'),
      description: t('Complete guide to college applications, from choosing schools to submitting your application'),
      duration: t('4 hours'),
      lessons: 12,
      level: t('Beginner'),
      type: 'course',
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      title: t('Essay Writing Masterclass'),
      description: t('Learn to craft compelling personal statements and supplemental essays that stand out'),
      duration: t('3 hours'),
      lessons: 8,
      level: t('Intermediate'),
      type: 'course',
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop"
    },
    {
      title: t('SAT Prep Fundamentals'),
      description: t('Essential strategies and practice for SAT success, covering all sections comprehensively'),
      duration: t('6 hours'),
      lessons: 15,
      level: t('Beginner'),
      type: 'course',
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      title: t('Financial Aid & Scholarships'),
      description: t('Navigate the complex world of college financing and maximize your aid opportunities'),
      duration: t('2 hours'),
      lessons: 6,
      level: t('Beginner'),
      type: 'course',
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    }
  ];

  const interviews = [
    {
      title: t('Harvard Alumni: Path to Success'),
      guest: 'Sarah Johnson, Class of 2018',
      description: t('Insights from a recent Harvard graduate on application strategies and college life'),
      duration: t('45 min'),
      views: '12.5K',
      type: 'interview'
    },
    {
      title: t('MIT Engineering Journey'),
      guest: 'Michael Chen, Class of 2020',
      description: t('A deep dive into MIT\'s engineering programs and what it takes to get accepted'),
      duration: t('38 min'),
      views: '8.2K',
      type: 'interview'
    },
    {
      title: t('Stanford Entrepreneurship'),
      guest: 'Emily Rodriguez, Class of 2019',
      description: t('How Stanford shaped an entrepreneur and tips for business-minded students'),
      duration: t('42 min'),
      views: '15.1K',
      type: 'interview'
    },
    {
      title: t('International Student Success'),
      guest: 'James Kim, Class of 2021',
      description: t('Navigating US admissions as an international student - challenges and opportunities'),
      duration: t('35 min'),
      views: '9.8K',
      type: 'interview'
    }
  ];

  const resources = [
    {
      title: t('College Selection Worksheet'),
      description: t('Comprehensive worksheet to help you identify and evaluate potential colleges'),
      type: 'PDF Guide',
      pages: 12,
      downloads: '5.2K',
      category: 'planning'
    },
    {
      title: t('Essay Prompt Analysis'),
      description: t('Detailed analysis of common application essay prompts with examples'),
      type: 'PDF Guide',
      pages: 24,
      downloads: '8.7K',
      category: 'essays'
    },
    {
      title: t('Interview Preparation Checklist'),
      description: t('Everything you need to prepare for successful college interviews'),
      type: 'Checklist',
      pages: 6,
      downloads: '3.1K',
      category: 'interviews'
    },
    {
      title: t('SAT/ACT Comparison Chart'),
      description: t('Side-by-side comparison to help you choose the right test'),
      type: 'Infographic',
      pages: 2,
      downloads: '4.5K',
      category: 'testing'
    },
    {
      title: t('Scholarship Application Timeline'),
      description: t('Month-by-month timeline for scholarship applications and deadlines'),
      type: 'Timeline',
      pages: 8,
      downloads: '6.3K',
      category: 'financial'
    },
    {
      title: t('Extracurricular Activity Tracker'),
      description: t('Organize and track your activities, leadership roles, and achievements'),
      type: 'Spreadsheet',
      pages: 1,
      downloads: '7.9K',
      category: 'activities'
    }
  ];

  const insights = [
    {
      id: 'admissions-trends-2024',
      title: t('2024 Admissions Trends Report'),
      description: t('Comprehensive analysis of the latest admissions trends and what they mean for applicants'),
      publishDate: 'March 2024',
      readTime: '8 min',
      category: t('Trends Analysis'),
      content: `
# 2024 Admissions Trends Report

The college admissions landscape continues to evolve rapidly. This year has brought significant changes that every applicant should understand.

## Key Trends for 2024

### 1. Holistic Review Process
Colleges are placing increasing emphasis on the whole student, not just test scores and grades.

### 2. Demonstrated Interest
Many institutions are tracking student engagement more closely than ever before.

### 3. Digital Innovation
Virtual tours, online interviews, and digital portfolios are becoming standard.

## What This Means for You

Understanding these trends can give you a significant advantage in your application strategy. Focus on authentic engagement and tell your unique story.
      `
    },
    {
      id: 'test-optional-policies',
      title: t('The Rise of Test-Optional Policies'),
      description: t('How test-optional policies are changing college admissions and what students should know'),
      publishDate: 'February 2024',
      readTime: '6 min',
      category: t('Policy Changes'),
      content: `
# The Rise of Test-Optional Policies

Test-optional admissions have become increasingly common, fundamentally changing how students approach college applications.

## What Does Test-Optional Mean?

Test-optional means you can choose whether or not to submit standardized test scores with your application.

## Should You Submit Scores?

Consider these factors:
- How do your scores compare to the school's average?
- Do your scores align with your academic performance?
- What story do you want your application to tell?

## Strategy Tips

Even in a test-optional world, strong scores can still be beneficial. Focus on putting your best foot forward.
      `
    },
    {
      id: 'demonstrated-interest',
      title: t('Demonstrated Interest: Myth vs Reality'),
      description: t('Understanding when and how to show genuine interest in your target colleges'),
      publishDate: 'January 2024',
      readTime: '5 min',
      category: t('Application Strategy'),
      content: `
# Demonstrated Interest: Myth vs Reality

Many students wonder if colleges really track their interest. The truth is more nuanced than you might think.

## What Is Demonstrated Interest?

Demonstrated interest refers to the ways students show genuine enthusiasm for a particular college.

## How Colleges Track Interest

- Campus visits (virtual or in-person)
- Email engagement
- Information session attendance
- Social media interaction

## Best Practices

Show genuine interest, not performative engagement. Quality matters more than quantity.
      `
    },
    {
      id: 'international-student-spotlight',
      title: t('International Student Spotlight'),
      description: t('Success stories and challenges from international students in US admissions'),
      publishDate: 'December 2023',
      readTime: '10 min',
      category: t('Student Stories'),
      content: `
# International Student Spotlight

International students face unique challenges in US college admissions. Here are inspiring stories and practical advice.

## Common Challenges

- English language proficiency
- Understanding the US education system
- Financial considerations
- Cultural adaptation

## Success Stories

Meet students who overcame these challenges and thrived in their college journeys.

## Key Advice

Start early, seek guidance, and don't let challenges discourage you from pursuing your dreams.
      `
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
              {t('Free Resources')}
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              {t('UNLOCK\'s Free Educational Resources')}
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              {t('Access our comprehensive library of free courses, expert interviews, guides, and admissions insights to jumpstart your college journey.')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">{t('Free Resources')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25K+</div>
              <div className="text-muted-foreground">{t('Students Helped')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">{t('Hours of Content')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-muted-foreground">{t('Average Rating')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{t('Signature Free Courses')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('Comprehensive online courses designed by our expert team')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-elegant transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <Badge variant="outline" className="mb-3">{course.level}</Badge>
                    <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons} {t('lessons')}</span>
                      </div>
                    </div>

                    <Button className="w-full">
                      {t('Start Course')}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Interviews */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{t('Expert Interviews')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('In-depth conversations with successful alumni and industry experts')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {interviews.map((interview, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{interview.title}</h3>
                      <p className="text-primary text-sm font-medium mb-2">{interview.guest}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{interview.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{interview.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{interview.views} {t('views')}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    {t('Watch Interview')}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PDF Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{t('Downloadable Guides & Tools')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('Practical resources you can download and use throughout your college journey')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="text-xs mb-2">{resource.type}</Badge>
                      <h3 className="font-semibold text-sm leading-tight">{resource.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{resource.pages} {t('pages')}</span>
                    <span>{resource.downloads} {t('downloads')}</span>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    {t('Download')}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Insights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{t('Admissions Insights')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('Stay updated with the latest trends, policies, and strategies in college admissions')}
              </p>
            </div>

            <div className="space-y-6">
              {insights.map((insight, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline">{insight.category}</Badge>
                        <span className="text-sm text-muted-foreground">{insight.publishDate}</span>
                        <span className="text-sm text-muted-foreground">• {insight.readTime} {t('read')}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
                      <p className="text-muted-foreground mb-4">{insight.description}</p>
                      <Button variant="outline" onClick={() => openInsight(insight)}>
                        {t('Read More')}
                      </Button>
                    </div>
                  </div>
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

      {/* Blog Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 mb-2">
                {selectedInsight && (
                  <>
                    <Badge variant="outline">{selectedInsight.category}</Badge>
                    <span className="text-sm text-muted-foreground">{selectedInsight.publishDate}</span>
                    <span className="text-sm text-muted-foreground">• {selectedInsight.readTime} {t('read')}</span>
                  </>
                )}
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold text-left">
              {selectedInsight?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6">
            {selectedInsight && (
              <div className="prose prose-lg max-w-none">
                {selectedInsight.content.split('\n').map((line: string, index: number) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>;
                  } else if (line.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>;
                  } else if (line.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-semibold mt-4 mb-2">{line.substring(4)}</h3>;
                  } else if (line.startsWith('- ')) {
                    return <li key={index} className="ml-6 mb-1">{line.substring(2)}</li>;
                  } else if (line.trim() === '') {
                    return <br key={index} />;
                  } else {
                    return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
                  }
                })}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FreeResources;