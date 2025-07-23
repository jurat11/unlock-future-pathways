import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
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
        title: "Xatolik",
        description: "Iltimos, barcha majburiy maydonlarni to'ldiring.",
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
        title: "Muvaffaqiyat!",
        description: "Arizangiz yuborildi! Biz 24 soat ichida sizga aloqaga chiqamiz."
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
        title: "Xatolik",
        description: "Arizani yuborishda xatolik yuz berdi. Qaytadan urinib ko'ring.",
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
            <span className="text-primary">Accepted</span> ga ariza ber
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3 ta mutaxassis bilan ishlab orzuing universitetga kirishga tayyormisan? 
            Bugun arizangni boshla yoki maslahat vaqti belgilay.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Accepted dasturiga ariza ber</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input 
                    placeholder="Your first name" 
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Surname</label>
                  <Input 
                    placeholder="Your last name" 
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone Number</label>
                <Input 
                  type="tel" 
                  placeholder="+998 90 123 45 67" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Major or Areas Interested</label>
                <Input 
                  placeholder="e.g., Computer Science, Medicine, Business" 
                  value={formData.majorInterest}
                  onChange={(e) => handleInputChange('majorInterest', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Current Education Status</label>
                <Input 
                  placeholder="e.g., Grade 11, High School Graduate, University Transfer" 
                  value={formData.educationStatus}
                  onChange={(e) => handleInputChange('educationStatus', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">List 5 Universities You Wanna Get In</label>
                <Textarea 
                  placeholder="Please list your top 5 university choices..."
                  rows={4}
                  value={formData.universities}
                  onChange={(e) => handleInputChange('universities', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Annual Contribution Towards Uni</label>
                <Input 
                  placeholder="e.g., $50,000, Full scholarship needed, etc." 
                  value={formData.annualContribution}
                  onChange={(e) => handleInputChange('annualContribution', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Additional Comment</label>
                <Textarea 
                  placeholder="Tell us about your academic background, extracurricular activities, and goals..."
                  rows={5}
                  value={formData.additionalComment}
                  onChange={(e) => handleInputChange('additionalComment', e.target.value)}
                />
              </div>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Yuborilmoqda...' : 'Arizani yuborish'}
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
                    <h3 className="font-semibold">Bizning joylashuvimiz</h3>
                    <p className="text-muted-foreground">Toshkent, O'zbekiston</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  UNLOCK UZBEKISTAN bosh ofisi. Biz AQSh, Buyuk Britaniya, Yevropa va Osiyodagi 
                  universitetlarga ariza berishni istagan butun mamlakat bo'ylab talabalarga xizmat ko'rsatamiz.
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
                    <h3 className="font-semibold">Telefon</h3>
                    <p className="text-muted-foreground">+998 90 123 45 67</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Accepted dasturi maslahatini rejalashtirish uchun bizga qo'ng'iroq qil.
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
                  Ariza savollaringni bizga emailda yuborgin va biz 24 soat ichida javob beramiz.
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
                    <h3 className="font-semibold">Ish vaqti</h3>
                    <p className="text-muted-foreground">Dush - Jum: 9:00 - 18:00</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Biz ish vaqtida maslahat va ariza yordami uchun mavjudmiz.
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-gradient-primary rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                Qabul bo'lishga tayyormisan?
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                2025-yil 1-avgustdan boshlab arizalar. Erta maslahat bilan ustuvor yo'lni ol.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => alert('Qiziqishing uchun rahmat! Biz senga Accepted dasturi uchun ustuvor maslahat rejalashtirish uchun aloqaga chiqamiz.')}
              >
                Ustuvor yo'lni ol
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;