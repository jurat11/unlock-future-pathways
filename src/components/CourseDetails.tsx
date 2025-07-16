import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, Calendar, CheckCircle } from "lucide-react";

const CourseDetails = () => {
  const features = [
    "Live interactive sessions with expert instructors",
    "Comprehensive study materials and resources",
    "Practice tests and mock examinations",
    "One-on-one mentorship sessions",
    "Career guidance and counseling",
    "Alumni network access",
    "Certificate of completion",
    "Lifetime access to course materials"
  ];

  const modules = [
    {
      title: "Foundation Skills",
      duration: "2 weeks",
      topics: ["Critical Thinking", "Study Techniques", "Time Management"]
    },
    {
      title: "Core Subjects",
      duration: "8 weeks",
      topics: ["Mathematics", "Sciences", "Literature", "Languages"]
    },
    {
      title: "Advanced Preparation",
      duration: "4 weeks",
      topics: ["Test Strategies", "Application Essays", "Interview Skills"]
    },
    {
      title: "Final Assessment",
      duration: "2 weeks",
      topics: ["Mock Tests", "Final Review", "Results Analysis"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium Admission <span className="text-primary">Course</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive 16-week program designed to prepare you for admission 
            to top universities and educational institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Course Overview */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span>Course Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-muted-foreground">16 weeks</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Class Size</div>
                      <div className="text-muted-foreground">Max 25 students</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Schedule</div>
                      <div className="text-muted-foreground">3 sessions/week</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Certification</div>
                      <div className="text-muted-foreground">Official certificate</div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-4">What's Included:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
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
                  Early Bird Offer
                </Badge>
                <CardTitle className="text-2xl">Premium Course</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  $299
                  <span className="text-lg text-muted-foreground line-through ml-2">$399</span>
                </div>
                <p className="text-sm text-muted-foreground">One-time payment</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="hero" size="lg" className="w-full">
                  Enroll Now
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Schedule Consultation
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    💳 Secure payment • 30-day money-back guarantee
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Modules */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Course Curriculum</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Module {index + 1}</Badge>
                    <span className="text-sm text-muted-foreground">{module.duration}</span>
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;