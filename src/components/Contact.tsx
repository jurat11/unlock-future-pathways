import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    majorInterest: '',
    educationStatus: '',
    universities: '',
    annualContribution: '',
    additionalComment: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: t('common.error'),
        description: t('contact.form.error.required'),
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          major_interest: formData.majorInterest,
          education_status: formData.educationStatus,
          universities: formData.universities,
          annual_contribution: formData.annualContribution,
          additional_comment: formData.additionalComment
        });

      if (error) throw error;

      toast({
        title: t('contact.form.success.title'),
        description: t('contact.form.success.description')
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        majorInterest: '',
        educationStatus: '',
        universities: '',
        annualContribution: '',
        additionalComment: ''
      });

    } catch (error) {
      toast({
        title: t('common.error'),
        description: t('contact.form.error.submit'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">{t('contact.title.accepted')}</span> {t('contact.title.text')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t('contact.form.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">{t('contact.form.name')}</label>
                  <Input 
                    placeholder={t('contact.form.placeholder.name')}
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">{t('contact.form.surname')}</label>
                  <Input 
                    placeholder={t('contact.form.placeholder.surname')}
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t('contact.form.email')}</label>
                <Input 
                  type="email" 
                  placeholder={t('contact.form.placeholder.email')}
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t('contact.form.phone')}</label>
                <Input 
                  type="tel" 
                  placeholder={t('contact.form.placeholder.phone')}
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t('contact.form.major')}</label>
                <Input 
                  placeholder={t('contact.form.placeholder.major')}
                  value={formData.majorInterest}
                  onChange={(e) => handleInputChange('majorInterest', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t('contact.form.education')}</label>
                <Input 
                  placeholder={t('contact.form.placeholder.education')}
                  value={formData.educationStatus}
                  onChange={(e) => handleInputChange('educationStatus', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t('contact.form.universities')}</label>
                <Textarea 
                  placeholder={t('contact.form.placeholder.universities')}
                  rows={4}
                  value={formData.universities}
                  onChange={(e) => handleInputChange('universities', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t('contact.form.contribution')}</label>
                <Input 
                  placeholder={t('contact.form.placeholder.contribution')}
                  value={formData.annualContribution}
                  onChange={(e) => handleInputChange('annualContribution', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t('contact.form.comment')}</label>
                <Textarea 
                  placeholder={t('contact.form.placeholder.comment')}
                  rows={5}
                  value={formData.additionalComment}
                  onChange={(e) => handleInputChange('additionalComment', e.target.value)}
                />
              </div>
              <Button 
                variant="default" 
                size="lg" 
                className="w-full"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
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
                    <h3 className="font-semibold">{t('contact.info.location.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.info.location.address')}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('contact.info.location.description')}
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
                    <h3 className="font-semibold">{t('contact.info.phone.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.info.phone.number')}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('contact.info.phone.description')}
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
                    <h3 className="font-semibold">{t('contact.info.email.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.info.email.address')}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('contact.info.email.description')}
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
                    <h3 className="font-semibold">{t('contact.info.hours.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.info.hours.time')}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('contact.info.hours.description')}
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-gradient-primary rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                {t('contact.cta.title')}
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                {t('contact.cta.description')}
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => alert('Qiziqishing uchun rahmat! Biz senga Accepted dasturi uchun ustuvor maslahat rejalashtirish uchun aloqaga chiqamiz.')}
              >
                {t('contact.cta.button')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;