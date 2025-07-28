import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import FreeResourcesHoverCard from "@/components/FreeResourcesHoverCard";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/lovable-uploads/924fc8c1-9fee-4601-ae97-03ad0311c5ac.png" 
              alt="Unlock Logo" 
              className="h-8 w-auto transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/about-us" className="text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              {t('About Us')}
            </Link>
            <Link to="/our-team" className="text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              {t('Our Team')}
            </Link>
            <Link to="/programs" className="text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              {t('Programs')}
            </Link>
            <FreeResourcesHoverCard>
              <Link to="/free-resources" className="text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
                {t('Free Resources')}
              </Link>
            </FreeResourcesHoverCard>
            <Link to="/contact" className="text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              {t('Contact')}
            </Link>
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
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/about-us" 
                className="text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-4 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('About Us')}
              </Link>
              <Link 
                to="/our-team" 
                className="text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-4 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('Our Team')}
              </Link>
              <Link 
                to="/programs" 
                className="text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-4 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('Programs')}
              </Link>
              <Link 
                to="/free-resources" 
                className="text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-4 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('Free Resources')}
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-4 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('Contact')}
              </Link>
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