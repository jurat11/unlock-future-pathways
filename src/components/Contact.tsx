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
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your educational journey? Have questions about our course? 
            We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
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
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="What would you like to discuss?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your educational goals and how we can help..."
                  rows={5}
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
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
                  We serve students across all regions of Uzbekistan, with special focus 
                  on rural communities in Samarkand, Bukhara, Fergana, and beyond.
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
                  Call us for immediate assistance or to schedule a consultation.
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
                    <p className="text-muted-foreground">info@unlock.uz</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Send us an email and we'll respond within 24 hours.
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
                  We're available during business hours for consultations and support.
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-gradient-primary rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                Ready to Start?
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Don't wait! The next cohort is filling up fast.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Enroll Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;