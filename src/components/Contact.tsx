import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apply to <span className="text-primary">Accepted</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to work with 3 experts and get admitted to your dream university? 
            Start your application or schedule a consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Apply to Accepted Program</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone Number</label>
                <Input type="tel" placeholder="+998 90 123 45 67" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Academic Interest</label>
                <Input placeholder="e.g., Computer Science, Medicine, Business" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Current Academic Status</label>
                <Input placeholder="e.g., Grade 11, High School Graduate, University Transfer" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Preferred Track</label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option value="">Select a track</option>
                  <option value="student-selected">Student-Selected Universities (No Guarantee)</option>
                  <option value="our-selected">Our-Selected Universities (100% Refund Guarantee)</option>
                  <option value="consultation">I need consultation first</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Additional Information</label>
                <Textarea 
                  placeholder="Tell us about your academic background, extracurricular activities, and goals..."
                  rows={5}
                />
              </div>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => alert('Thank you for your application! We will contact you within 24 hours to schedule your consultation.')}
              >
                Submit Application
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Location</h3>
                    <p className="text-muted-foreground">Tashkent, Uzbekistan</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  UNLOCK UZBEKISTAN headquarters. We serve students nationwide who want to 
                  apply to universities in the US, UK, Europe, and Asia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+998 90 123 45 67</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Call us to schedule your Accepted program consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">accepted@unlocku.uz</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Email us your application questions and we'll respond within 24 hours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  We're available for consultations and application support during business hours.
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-gradient-primary rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                Ready to Get Accepted?
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Applications starting August 1, 2025. Get priority access with early consultation.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => alert('Thank you for your interest! We will contact you to schedule a priority consultation for the Accepted program.')}
              >
                Get Priority Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;