import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Delivering free and accessible education to rural areas of Uzbekistan, empowering young minds to reach their full potential."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe education is a fundamental right. Our non-profit organization is committed to breaking down barriers to quality learning."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Through interviews, lectures, and speeches, we inspire youngsters to pursue the best educational opportunities available."
    },
    {
      icon: Lightbulb,
      title: "Our Approach",
      description: "We support students through articles, discussions, and community building, creating a comprehensive learning ecosystem."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Unlock</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a fully non-profit education organization dedicated to transforming 
            lives through accessible, high-quality education in Uzbekistan.
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
                Why Choose Our Premium Course?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Comprehensive Curriculum:</strong> Carefully designed modules covering all essential topics for academic success.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Expert Mentorship:</strong> Learn from experienced educators and industry professionals.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Personalized Support:</strong> Individual attention and guidance throughout your learning journey.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Proven Results:</strong> 95% of our students achieve their educational goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground mb-4">Students Impacted</div>
                  <div className="text-2xl font-bold text-foreground mb-2">50+</div>
                  <div className="text-muted-foreground mb-4">Rural Communities Reached</div>
                  <div className="text-2xl font-bold text-success mb-2">5 Years</div>
                  <div className="text-muted-foreground">Of Educational Excellence</div>
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