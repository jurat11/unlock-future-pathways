import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Bizning maqsadimiz",
      description: "O'zbek talabalariga xalqaro universitet qabuli masalasida mutaxassis yo'l-yo'riq va isbotlangan strategiyalar bilan yordam berish."
    },
    {
      icon: Heart,
      title: "Bizning hikoyamiz",
      description: "Ivy League universitetlariga kirgan talabalar bilan podcast qilishdan boshlab, endi talabalarni to'liq qabul xizmatlari bilan qo'llab-quvvatlaymiz."
    },
    {
      icon: Users,
      title: "Jamiyatga ta'sir",
      description: "50,000 dan ortiq ko'ruvchi bizning kontentimizga ishonadi. Biz talabalarga Chicago, Duke, Carnegie Mellon Qatar va NYU universitetlariga kirishda yordam berdik."
    },
    {
      icon: Lightbulb,
      title: "Bizning yondashuvimiz",
      description: "Har bir talaba uchun uch mutaxassis: rejalashtirish uchun Strategist, yozish uchun Insho Mentori va texnik yordam uchun Yordamchi."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">UNLOCK UZBEKISTAN</span> haqida
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            2022-yilda Toshkentda tashkil etilgan. Biz Ivy League maktablariga kirgan o'zbek talabalar bilan podcast qilishdan boshladik. 
            Endi 50,000+ ko'ruvchi bilan "Accepted" dasturi orqali to'liq qabul yordamini taklif qilamiz.
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
                Nega Accepted ni tanlash kerak?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Mutaxassis Jamoa:</strong> 3 ta mutaxassis bilan ishlang - Strategist, Insho Mentori va to'liq qamrov uchun Yordamchi.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Ikki Yo'nalishli Tizim:</strong> Universitetlaringizni tanlang yoki 100% qaytarim kafolati bilan bizning tanlovimizga ishoning.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">To'liq Qo'llab-quvvatlash:</strong> 1-Avgustdan yakuniy qarorgacha, barcha 16 ta chek-list bandlarini qamrab oladi.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Isbotlangan Muvaffaqiyat:</strong> Talabalar UChicago, Duke, Carnegie Mellon Qatar kabi top universitetlarga qabul bo'lishdi.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-muted-foreground mb-4">Podcast Ko'ruvchilari</div>
                  <div className="text-2xl font-bold text-foreground mb-2">1450</div>
                  <div className="text-muted-foreground mb-4">O'rtacha SAT Bali</div>
                  <div className="text-2xl font-bold text-success mb-2">2022</div>
                  <div className="text-muted-foreground">Toshkentda Tashkil Etilgan</div>
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