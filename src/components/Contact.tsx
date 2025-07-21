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
                  <label className="text-sm font-medium mb-2 block">Ism</label>
                  <Input placeholder="Isming" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Familiya</label>
                  <Input placeholder="Familiyaing" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="sening.email@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Telefon raqam</label>
                <Input type="tel" placeholder="+998 90 123 45 67" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Qaysi sohaga qiziqisan</label>
                <Input placeholder="masalan, Kompyuter Fanlari, Tibbiyot, Biznes" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Hozirgi holating</label>
                <Input placeholder="masalan, 11-sinf, Maktab bitiruvchisi, Universitet o'tkazma" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Qaysi yo'nalishni afzal ko'rasan</label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option value="">Yo'nalishni tanla</option>
                  <option value="student-selected">O'zim tanlagan universitetlar (kafolatsiz)</option>
                  <option value="our-selected">Bizning tanlagan universitetlar (100% pul qaytarim kafolati)</option>
                  <option value="consultation">Avval maslahat kerak</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Qo'shimcha ma'lumot</label>
                <Textarea 
                  placeholder="Akademik tarihing, qo'shimcha mashg'ulotlar va maqsadlaring haqida bizga ayting..."
                  rows={5}
                />
              </div>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => alert('Arizang uchun rahmat! Biz senga maslahat vaqti belgilash uchun 24 soat ichida aloqaga chiqamiz.')}
              >
                Arizani yuborish
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