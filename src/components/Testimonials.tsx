import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    name: "Aziza Karimova",
    location: "Samarqand",
    rating: 5,
    text: "UNLOCK UZBEKISTAN hayotimni butunlay o'zgartirdi. Ularning Accepted dasturi tufayli men UChicago universitetiga qabul bo'ldim. Ustozlar ajoyib, yordam ham zo'r edi.",
    achievement: "UChicago ga qabul"
  }, {
    name: "Bobur Rahimov",
    location: "Buxoro",
    rating: 5,
    text: "Qishloqdan kelgan holda, hech qachon shahar talabalariga raqobat qila olaman deb o'ylamagan edim. UNLOCK menga kerakli bilim va ishonch berdi.",
    achievement: "Kirish imtihonida top 5%"
  }, {
    name: "Malika O'zbekova",
    location: "Farg'ona",
    rating: 5,
    text: "UNLOCKdagi jamoa yordami tengsiz. Dastur tugagandan keyin ham mentorlardan yo'l-yo'riq olamiz va boshqa talabalar bilan aloqada bo'lamiz.",
    achievement: "To'liq stipendiya oldi"
  }, {
    name: "Jasur Toshev",
    location: "Andijon",
    rating: 5,
    text: "Dastur mukammal tuzilgan. Har bir modul oldingi ustiga quriladi va oxirida o'zimni universitet arizalari uchun to'liq tayyor his qildim.",
    achievement: "Bir nechta universitetga qabul"
  }, {
    name: "Nigora Sultonova",
    location: "Namangan",
    rating: 5,
    text: "Eng yoqqan tomoni shaxsiy e'tibor edi. Guruhda bo'lishimizga qaramay, men o'zimga alohida ustozim bordek his qildim.",
    achievement: "Xalqaro stipendiya"
  }, {
    name: "Otabek Mirzayev",
    location: "Xorazm",
    rating: 5,
    text: "UNLOCK faqat imtihonlarga tayyorlamaydi - hayotga tayyorlaydi. Bu yerda o'rgangan ko'nikmalar universitentda har kuni yordam bermoqda.",
    achievement: "Dekan ro'yxatidagi talaba"
  }];
  return <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Muvaffaqiyat <span className="text-primary">hikoyalari</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bizning Accepted dasturi orqali ta'lim yo'llarini o'zgartirib, orzulariga erishgan 
            talabalarimizning hikoyalarini eshiting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/30 absolute top-4 right-4" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                        {testimonial.achievement}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Statistics */}
        
      </div>
    </section>;
};
export default Testimonials;