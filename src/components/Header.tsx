import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import FreeResourcesHoverCard from "@/components/FreeResourcesHoverCard";
import NavDropdown from "@/components/NavDropdown";
import MobileNavDropdown from "@/components/MobileNavDropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Dropdown menu data
  const aboutDropdownItems = [
    {
      label: t('Our Story'),
      href: '/about-us',
      description: t('Learn about UNLOCK\'s mission and journey')
    },
    {
      label: t('Our Values'),
      href: '/about-us',
      description: t('What drives us to help students succeed')
    },
    {
      label: t('Our Impact'),
      href: '/about-us',
      description: t('Success stories and achievements')
    },
    {
      label: t('Leadership Team'),
      href: '/our-team',
      description: t('Meet our expert counselors and educators')
    }
  ];

  const teamDropdownItems = [
    {
      label: t('Leadership Team'),
      href: '/our-team',
      description: t('Our experienced counselors and directors')
    },
    {
      label: t('Advisory Board'),
      href: '/our-team',
      description: t('Industry leaders guiding our vision')
    },
    {
      label: t('Expert Counselors'),
      href: '/our-team',
      description: t('Specialists in different academic areas')
    },
    {
      label: t('Join Our Team'),
      href: '/contact',
      description: t('Career opportunities at UNLOCK')
    }
  ];

  const programsDropdownItems = [
    {
      label: t('Class of 2030 Program'),
      href: '/programs',
      description: t('4-year program for current 8th-9th graders')
    },
    {
      label: t('Class of 2031 Program'),
      href: '/programs',
      description: t('5-year program for current 7th-8th graders')
    },
    {
      label: t('Specialized Programs'),
      href: '/programs',
      description: t('Gap year, transfer, and graduate school prep')
    },
    {
      label: t('Program Comparison'),
      href: '/programs',
      description: t('Compare all our programs and pricing')
    }
  ];

  const contactDropdownItems = [
    {
      label: t('Schedule Consultation'),
      href: '/contact',
      description: t('Book a free consultation with our experts')
    },
    {
      label: t('Office Locations'),
      href: '/contact',
      description: t('Visit us in NYC, LA, or Boston')
    },
    {
      label: t('Contact Methods'),
      href: '/contact',
      description: t('Phone, email, Telegram, and social media')
    },
    {
      label: t('FAQ'),
      href: '/contact',
      description: t('Quick answers to common questions')
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-[40px] supports-[backdrop-filter]:bg-white/5 border-b border-white/30 transition-all duration-300 ease-out">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/lovable-uploads/924fc8c1-9fee-4601-ae97-03ad0311c5ac.png" 
              alt="Unlock Logo" 
              className="h-8 w-auto transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            <NavDropdown 
              label={t('About Us')} 
              items={aboutDropdownItems.map(item => ({ label: item.label, href: item.href }))}
            />
            <NavDropdown 
              label={t('Our Team')} 
              items={teamDropdownItems.map(item => ({ label: item.label, href: item.href }))}
            />
            <NavDropdown 
              label={t('Programs')} 
              items={programsDropdownItems.map(item => ({ label: item.label, href: item.href }))}
            />
            <FreeResourcesHoverCard>
              <Link to="/free-resources" className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-all duration-500 ease-out relative group px-4 py-2.5 rounded-full hover:bg-white/10 backdrop-blur-md">
                {t('Free Resources')}
              </Link>
            </FreeResourcesHoverCard>
            <NavDropdown 
              label={t('Contact')} 
              items={contactDropdownItems.map(item => ({ label: item.label, href: item.href }))}
            />
          </nav>

          {/* Language Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <Button 
              variant="hero" 
              size="sm"
              className="backdrop-blur-md bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-glow transition-all duration-400"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground/80" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 sm:py-6 border-t border-white/10 animate-fade-in bg-white/5 backdrop-blur-[50px] supports-[backdrop-filter]:bg-white/5 shadow-2xl rounded-b-3xl mx-2 mb-4 border-x border-b border-white/30">
            <nav className="flex flex-col space-y-2 sm:space-y-3 px-3 sm:px-4">
              <MobileNavDropdown 
                label={t('About Us')} 
                items={aboutDropdownItems.map(item => ({ label: item.label, href: item.href }))}
                onLinkClick={() => setIsMenuOpen(false)}
              />
              <MobileNavDropdown 
                label={t('Our Team')} 
                items={teamDropdownItems.map(item => ({ label: item.label, href: item.href }))}
                onLinkClick={() => setIsMenuOpen(false)}
              />
              <MobileNavDropdown 
                label={t('Programs')} 
                items={programsDropdownItems.map(item => ({ label: item.label, href: item.href }))}
                onLinkClick={() => setIsMenuOpen(false)}
              />
              <Link 
                to="/free-resources" 
                className="text-foreground/80 hover:text-foreground transition-all duration-400 ease-out p-3 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-[40px] supports-[backdrop-filter]:bg-white/5 font-medium text-sm sm:text-base leading-tight"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('Free Resources')}
              </Link>
              <MobileNavDropdown 
                label={t('Contact')} 
                items={contactDropdownItems.map(item => ({ label: item.label, href: item.href }))}
                onLinkClick={() => setIsMenuOpen(false)}
              />
              <div className="flex items-center gap-3 pt-6 border-t border-white/20 mt-6">
                <LanguageToggle />
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-fit shadow-2xl hover:shadow-glow transition-all duration-400 backdrop-blur-md bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
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