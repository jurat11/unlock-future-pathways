import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Award } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Orzuingdagi
                <span className="text-primary block">Universitetga</span>
                Kir!
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                UNLOCK UZBEKISTAN ning eng to'liq qabul paketini ol. 3 ta mutaxassis bilan ishla: 
                Strategist, Insho Mentori va Yordamchi. Bizning universitet tanlovimizni tanla yoki 100% pul qaytarim kafolatini ol.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-success h-5 w-5" />
                <span className="text-foreground font-medium">Har bir talaba uchun 3 ta mutaxassis</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-success h-5 w-5" />
                <span className="text-foreground font-medium">100% Pul Qaytarim Kafolati*</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-success h-5 w-5" />
                <span className="text-foreground font-medium">To'liq ariza yordami</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-success h-5 w-5" />
                <span className="text-foreground font-medium">1-Avgustdan Yakuniy Qarorga</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('accepted-program')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Accepted ga ariza ber
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Maslahat vaqti belgilay
              </Button>
            </div>

            {/* Stats */}
            
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img src={heroImage} alt="Students learning together" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute bottom-6 left-6 right-6 p-6 bg-background/95 backdrop-blur shadow-glow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Arizalar boshlanadi</p>
                  <p className="font-semibold text-foreground">1-Avgust, 2025</p>
                </div>
                <Button variant="hero" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  Boshlash
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;