import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aziza Karimova",
      location: "Samarkand",
      rating: 5,
      text: "Unlock changed my life completely. Thanks to their premium course, I got accepted to Tashkent State University. The instructors were amazing and the support was incredible.",
      achievement: "Accepted to TSU"
    },
    {
      name: "Bobur Rahimov",
      location: "Bukhara",
      rating: 5,
      text: "Coming from a rural area, I never thought I could compete with city students. Unlock gave me the confidence and knowledge I needed to succeed in my entrance exams.",
      achievement: "Top 5% in entrance exam"
    },
    {
      name: "Malika Uzbekova",
      location: "Fergana",
      rating: 5,
      text: "The community support at Unlock is unmatched. Even after completing the course, I still get guidance from mentors and connect with fellow students.",
      achievement: "Full scholarship recipient"
    },
    {
      name: "Jasur Toshev",
      location: "Andijan",
      rating: 5,
      text: "The curriculum is perfectly designed. Every module built upon the previous one, and by the end, I felt completely prepared for my university applications.",
      achievement: "Multiple university acceptances"
    },
    {
      name: "Nigora Sultanova",
      location: "Namangan",
      rating: 5,
      text: "What I loved most was the personalized attention. Despite being in a group, I felt like I had my own personal tutor guiding me every step of the way.",
      achievement: "International scholarship"
    },
    {
      name: "Otabek Mirzaev",
      location: "Khorezm",
      rating: 5,
      text: "Unlock doesn't just prepare you for exams - they prepare you for life. The skills I learned here help me every day in my university studies.",
      achievement: "Dean's list student"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our students who have transformed their educational journey 
            and achieved their dreams through our premium course.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/30 absolute top-4 right-4" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
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
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">95%</div>
              <div className="text-primary-foreground/80">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">500+</div>
              <div className="text-primary-foreground/80">Graduates</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">50+</div>
              <div className="text-primary-foreground/80">Universities</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">$2M+</div>
              <div className="text-primary-foreground/80">Scholarships Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;