import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/f0246711-0d84-4e23-a1be-7aeb67f9b2da.png" 
              alt="Unlock Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </a>
            <a href="#accepted-program" className="text-foreground hover:text-primary transition-colors">
              Accepted
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              {t('nav.testimonials')}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Language Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a 
                href="#accepted-program" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accepted
              </a>
              <a 
                href="#testimonials" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.testimonials')}
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
              <div className="flex items-center gap-3">
                <LanguageToggle />
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-fit"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('hero.cta')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;