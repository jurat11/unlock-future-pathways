import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram } from "lucide-react";

const ContactPage = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Phone,
      title: t('Phone'),
      primary: '+1 (555) 123-UNLOCK',
      secondary: '+1 (555) 123-8656',
      description: t('Call us during business hours for immediate assistance'),
      available: t('Mon-Fri 9AM-6PM EST')
    },
    {
      icon: Mail,
      title: t('Email'),
      primary: 'info@unlockeducation.com',
      secondary: 'support@unlockeducation.com',
      description: t('Send us an email and we\'ll respond within 24 hours'),
      available: t('24/7 Response')
    },
    {
      icon: MessageCircle,
      title: t('Telegram'),
      primary: '@UNLOCKEducation',
      secondary: '@UNLOCKSupport',
      description: t('Chat with us directly on Telegram for quick questions'),
      available: t('Real-time Support')
    },
    {
      icon: Instagram,
      title: t('Instagram'),
      primary: '@unlock.education',
      secondary: '@unlock.success',
      description: t('Follow us for daily tips, student stories, and updates'),
      available: t('Daily Updates')
    }
  ];

  const offices = [
    {
      city: t('New York City'),
      address: '123 Education Avenue, Suite 456\nNew York, NY 10001',
      phone: '+1 (555) 123-8656',
      email: 'nyc@unlockeducation.com',
      hours: t('Mon-Fri: 9AM-6PM\nSat: 10AM-4PM\nSun: Closed'),
      isHeadquarters: true
    },
    {
      city: t('Los Angeles'),
      address: '789 College Boulevard, Floor 3\nLos Angeles, CA 90210',
      phone: '+1 (555) 987-6543',
      email: 'la@unlockeducation.com',
      hours: t('Mon-Fri: 8AM-5PM\nSat: 10AM-3PM\nSun: Closed'),
      isHeadquarters: false
    },
    {
      city: t('Boston'),
      address: '456 University Street, Suite 200\nBoston, MA 02101',
      phone: '+1 (555) 456-7890',
      email: 'boston@unlockeducation.com',
      hours: t('Mon-Fri: 9AM-6PM\nSat: By Appointment\nSun: Closed'),
      isHeadquarters: false
    }
  ];

  const faq = [
    {
      question: t('How quickly can I schedule a consultation?'),
      answer: t('We typically have availability within 2-3 business days. For urgent matters, same-day consultations may be available.')
    },
    {
      question: t('Do you offer virtual consultations?'),
      answer: t('Yes! We offer both in-person and virtual consultations via Zoom, Google Meet, or your preferred platform.')
    },
    {
      question: t('What should I prepare for my first consultation?'),
      answer: t('Bring your academic transcripts, test scores (if available), list of extracurricular activities, and any specific questions about your college goals.')
    },
    {
      question: t('Is there a cost for the initial consultation?'),
      answer: t('The first consultation is completely free! This allows us to understand your needs and explain how we can help.')
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
              {t('Contact Us')}
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              {t('Get in Touch with UNLOCK Education')}
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              {t('Ready to start your journey? We\'re here to help with all your questions about university admissions and our programs.')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{t('Multiple Ways to Reach Us')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('Choose the contact method that works best for you')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-elegant transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{method.title}</h3>
                  <div className="space-y-1 mb-3">
                    <div className="font-medium text-primary">{method.primary}</div>
                    <div className="text-sm text-muted-foreground">{method.secondary}</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <Badge variant="outline" className="text-xs">{method.available}</Badge>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{t('Our Office Locations')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('Visit us in person at one of our convenient locations')}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold">{office.city}</h3>
                    {office.isHeadquarters && (
                      <Badge variant="default">{t('Headquarters')}</Badge>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-muted-foreground whitespace-pre-line">
                        {office.address}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="text-sm text-muted-foreground">{office.phone}</div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="text-sm text-muted-foreground">{office.email}</div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-muted-foreground whitespace-pre-line">
                        {office.hours}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{t('Frequently Asked Questions')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('Quick answers to common questions about contacting us')}
              </p>
            </div>

            <div className="space-y-6">
              {faq.map((item, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div id="consultation">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;