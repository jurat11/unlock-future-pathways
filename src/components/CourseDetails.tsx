import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, Calendar, CheckCircle, User, FileText, Settings, Star, Shield } from "lucide-react";

const CourseDetails = () => {
  const teamMembers = [
    {
      role: "Strategist",
      icon: User,
      description: "Ariza strategiyasini boshqaradi, kollej ro'yxatini tuzadi, vaqt jadvalini rejalashtiradi, pozitsiya va faoliyatlar bilan yordam beradi."
    },
    {
      role: "Essay mentor", 
      icon: FileText,
      description: "Insholarni aniq, shaxsiy va ta'sirli qilish uchun g'oyalarni ishlab chiqish, loyihalash va tahrirlashda yordam beradi."
    },
    {
      role: "Yordamchi",
      icon: Settings,
      description: "Ariza shakllari, moliyaviy hujjatlar, jadvallashtirish, eslatmalar va boshqa texnik vazifalar bilan yordam beradi."
    }
  ];

  const checklistItems = [
    "Aniq tanlangan va asoslab berilgan karera sohasi yoki akademik qiziqish",
    "Ta'lim va shaxsiy ehtiyojlarga mos keladigan 5 ta universitetning yakuniy ro'yxati",
    "Aniq vaqt jadvali bilan Early Action/Early Decision universitetlarini tanlash",
    "Mavjud va yangi taklif qilingan EA arizalarini yaxshilash",
    "Mavjud va yangi taklif qilingan Faxriy dastur arizalarini yaxshilash",
    "Yakunlashgan CV, rezyume va motivatsion xat",
    "Portfolio yoki shaxsiy veb-sayt yaratish (agar tegishli bo'lsa)",
    "Ijtimoiy media profil optimallashtirish (LinkedIn va/yoki Instagram)",
    "To'ldirilgan shaxsiy bayonot yoki motivatsion xat",
    "Yakunlashgan tavsiya xatlari (loyihalangan yoki yo'naltirilgan)",
    "Barcha maqsadli universitetlar uchun to'ldirilgan qo'shimcha insholar",
    "Barcha ariza portallari (masalan, Common App) to'liq to'ldirilgan va ko'rib chiqilgan",
    "CSS profil va boshqa moliyaviy hujjatlar tayyorlangan va yuborilgan",
    "Suhbatga tayyorgarlik (agar taklif qilingan bo'lsa)",
    "Kollej-specifik video yuborishlar (agar so'ralgan bo'lsa)",
    "Kollej-specifik shakllar va hujjatlar (agar so'ralgan bo'lsa)"
  ];

  return (
    <section id="accepted-program" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Accepted</span> - to'liq qabul paketi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bizning eng to'liq qabul dasturimiz. 1-avgustdan yakuniy qarorgacha 3 ta mutaxassis bilan ishla. 
            100% pul qaytarim kafolati uchun bizning universitet tanlovimizni tanla.
          </p>
        </div>

        {/* Two-Track System */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">1-yo'nalish</Badge>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-primary" />
                <span>O'zim tanlagan universitetlar</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Sen o'zingning 5 ta maqsadli universitetingni tanlaysan. Biz imkoniyatlaringni maksimal darajada oshirish uchun to'liq yordam beramiz.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">To'liq ariza yordami</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">3 ta mutaxassis jamoa a'zosi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">1-avgustdan yakuniy qarorgacha</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Eslatma:</strong> Bu yo'nalish uchun pul qaytarim kafolati yo'q, chunki universitet tanlovlari seniki.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-success/20 bg-success/5">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2 bg-success text-success-foreground">2-yo'nalish</Badge>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-success" />
                <span>Bizning tanlagan universitetlar</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Biz sening profiling va moliyaviy ehtiyojlaring asosida 5 ta universitetni tanlaymiz. To'liq pul qaytarim kafolati kiritilgan.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">To'liq ariza yordami</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">3 ta mutaxassis jamoa a'zosi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">100% pul qaytarim kafolati</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-success/10 rounded-lg border border-success/20">
                <p className="text-sm font-medium text-success">
                  🛡️ Agar qabul yoki kerakli stipendiya olinmasa 100% pul qaytarim
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Expert Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Sening mutaxassis jamoyaing</h3>
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
                  <span>Dastur tafsilotlari</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Davomiyligi</div>
                      <div className="text-muted-foreground">1-avg - yakuniy qarorlar</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Jamoa hajmi</div>
                      <div className="text-muted-foreground">Har talaba uchun 3 mutaxassis</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Universitetlar</div>
                      <div className="text-muted-foreground">5 ta maqsadli maktab</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Yordam turi</div>
                      <div className="text-muted-foreground">To'liq ariza</div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-4">16 bandli talaba chek-listi:</h4>
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
                  Arizalar Ochiq
                </Badge>
                <CardTitle className="text-2xl">Accepted dasturi</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  Aloqa
                  <span className="text-lg text-muted-foreground block mt-1">Narx uchun</span>
                </div>
                <p className="text-sm text-muted-foreground">Sening ehtiyojlaringga qarab moslashtirilgan</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Hoziroq ariza ber
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Maslahat vaqti belgilay
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    🛡️ 100% pul qaytarim kafolati mavjud • Premium yordam
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Refund Policy */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Pul qaytarim siyosati</h3>
          <Card className="bg-gradient-subtle border-success/20">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Shield className="h-12 w-12 text-success mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">100% pul qaytarim kafolati</h4>
                <p className="text-muted-foreground">
                  Faqat "Bizning tanlagan universitetlar" yo'nalishi uchun mavjud
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-semibold mb-3 text-success">Muvofiqlik talablari:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Bizning jamoa 5 ta maqsadli universitetni tanlashiga ruxsat bering</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Tanlangan 5 ta universitetning hech biriga qabul bo'lmaslik</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">YOKI minimal stipendiya miqdori olinmasligi</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-3">Muvofiq bo'lish uchun:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Barcha kerakli insholar va hujjatlarni vaqtida topshiring</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Jamoa fikr-mulohaza va ko'rsatmalariga amal qiling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">To'liq dasturni chiqib ketmasdan tugatish</span>
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