import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, Calendar, CheckCircle, User, FileText, Settings, Star, Shield } from "lucide-react";

const CourseDetails = () => {
  const teamMembers = [
    {
      role: "Strategist",
      icon: User,
      description: "Guides application strategy, builds college list, plans timelines, and helps with positioning and activities."
    },
    {
      role: "Essay Mentor", 
      icon: FileText,
      description: "Supports with brainstorming, drafting, and editing essays to make them clear, personal, and impactful."
    },
    {
      role: "Assistant",
      icon: Settings,
      description: "Helps with application forms, financial documents, scheduling, reminders, and other technical tasks."
    }
  ];

  const checklistItems = [
    "Firmly chosen and clearly justified career field or academic interest",
    "Finalized list of 5 universities that match educational and personal needs",
    "Selection of Early Action/Early Decision universities with clear timeline",
    "Fine-tuning of existing and newly suggested EA applications",
    "Fine-tuning of existing and newly suggested Honors Program applications",
    "Finalized CV, resume, and cover letter",
    "Creation of portfolio or personal website (if applicable)",
    "Social media profile optimization (LinkedIn and/or Instagram)",
    "Completed personal statement or motivational letter",
    "Finalized recommendation letters (drafted or guided)",
    "Completed supplemental essays for all target universities",
    "All application portals (e.g., Common App) fully completed and reviewed",
    "CSS Profile and other financial documents prepared and submitted",
    "Interview preparation (if invited)",
    "College-specific video submissions (if requested)",
    "College-specific forms and documents (if requested)"
  ];

  return (
    <section id="accepted-program" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Accepted</span> - Complete Admissions Package
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our most complete admissions program. Work with 3 experts from August 1 until final decisions. 
            Choose our university selection for 100% refund guarantee.
          </p>
        </div>

        {/* Two-Track System */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">Track 1</Badge>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-primary" />
                <span>Student-Selected Universities</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You choose your own 5 target universities. We provide full support to maximize your chances.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Complete application support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">3 expert team members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">From Aug 1 to final decisions</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> No refund guarantee for this track since university choices are yours.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-success/20 bg-success/5">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2 bg-success text-success-foreground">Track 2</Badge>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-success" />
                <span>Our-Selected Universities</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We choose 5 universities based on your profile and financial needs. Full refund guarantee included.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Complete application support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">3 expert team members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">100% refund guarantee</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-success/10 rounded-lg border border-success/20">
                <p className="text-sm font-medium text-success">
                  🛡️ 100% refund if no admission or required scholarship received
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Expert Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Your Expert Team</h3>
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
                  <span>Program Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-muted-foreground">Aug 1 - Final Decisions</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Team Size</div>
                      <div className="text-muted-foreground">3 experts per student</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Universities</div>
                      <div className="text-muted-foreground">5 target schools</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Support Type</div>
                      <div className="text-muted-foreground">Complete application</div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-4">16-Item Student Checklist:</h4>
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
                  Applications Open
                </Badge>
                <CardTitle className="text-2xl">Accepted Program</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  Contact
                  <span className="text-lg text-muted-foreground block mt-1">for Pricing</span>
                </div>
                <p className="text-sm text-muted-foreground">Customized based on your needs</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Consultation
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    🛡️ 100% refund guarantee available • Premium support
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Refund Policy */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Refund Policy</h3>
          <Card className="bg-gradient-subtle border-success/20">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Shield className="h-12 w-12 text-success mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">100% Refund Guarantee</h4>
                <p className="text-muted-foreground">
                  Available only for "Our-Selected Universities" track
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-semibold mb-3 text-success">Eligibility Requirements:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Let our team choose 5 target universities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">No admission to any of the 5 selected universities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">OR no minimum scholarship amount received</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-3">To Qualify:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Submit all required essays and documents on time</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Follow team feedback and instructions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Complete the full program without withdrawing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;