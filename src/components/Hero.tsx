import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Award } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Unlock Your
                <span className="text-primary block">Educational Future</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join Unlock's premium admission course and get the education you deserve. 
                We're bringing world-class learning opportunities to rural Uzbekistan.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-success h-5 w-5" />
                <span className="text-foreground font-medium">Expert Instructors</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-success h-5 w-5" />
                <span className="text-foreground font-medium">Interactive Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-success h-5 w-5" />
                <span className="text-foreground font-medium">Career Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-success h-5 w-5" />
                <span className="text-foreground font-medium">Community Access</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="text-primary h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="text-primary h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={heroImage} 
                alt="Students learning together" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute bottom-6 left-6 right-6 p-6 bg-background/95 backdrop-blur shadow-glow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Next cohort starts</p>
                  <p className="font-semibold text-foreground">February 15, 2025</p>
                </div>
                <Button variant="hero" size="sm">
                  Reserve Spot
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;