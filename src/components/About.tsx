import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Making international university admissions accessible to Uzbek students through expert guidance and proven strategies."
    },
    {
      icon: Heart,
      title: "Our Story",
      description: "Started with podcasting successful Ivy League admits, now supporting students with comprehensive admissions services."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Over 50,000 viewers trust our content. We've helped students get into University of Chicago, Duke, Carnegie Mellon Qatar, and NYU."
    },
    {
      icon: Lightbulb,
      title: "Our Approach",
      description: "Three experts per student: Strategist for planning, Essay Mentor for writing, and Assistant for technical support."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">UNLOCK UZBEKISTAN</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in 2022 in Tashkent, we started by podcasting successful early Uzbek admits to Ivy League schools. 
            Now with 50,000+ viewers, we offer comprehensive admissions support through our "Accepted" program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Why Choose Accepted?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Expert Team:</strong> Work with 3 specialists - Strategist, Essay Mentor, and Assistant for complete coverage.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Two-Track System:</strong> Choose your universities or trust our selection with 100% refund guarantee.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Complete Support:</strong> From August 1 until final decisions, covering all 16 checklist items.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Proven Success:</strong> Students accepted to top universities like UChicago, Duke, Carnegie Mellon Qatar.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-muted-foreground mb-4">Podcast Viewers</div>
                  <div className="text-2xl font-bold text-foreground mb-2">1450</div>
                  <div className="text-muted-foreground mb-4">Avg SAT Score</div>
                  <div className="text-2xl font-bold text-success mb-2">2022</div>
                  <div className="text-muted-foreground">Founded in Tashkent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;