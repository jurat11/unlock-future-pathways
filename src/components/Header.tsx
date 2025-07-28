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
      href: '/about-us#values',
      description: t('What drives us to help students succeed')
    },
    {
      label: t('Our Impact'),
      href: '/about-us#impact',
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
      href: '/our-team#advisory',
      description: t('Industry leaders guiding our vision')
    },
    {
      label: t('Expert Counselors'),
      href: '/our-team#counselors',
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
      href: '/programs#class-2030',
      description: t('4-year program for current 8th-9th graders')
    },
    {
      label: t('Class of 2031 Program'),
      href: '/programs#class-2031',
      description: t('5-year program for current 7th-8th graders')
    },
    {
      label: t('Specialized Programs'),
      href: '/programs#specialized',
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
      href: '/contact#locations',
      description: t('Visit us in NYC, LA, or Boston')
    },
    {
      label: t('Contact Methods'),
      href: '/contact#methods',
      description: t('Phone, email, Telegram, and social media')
    },
    {
      label: t('FAQ'),
      href: '/contact#faq',
      description: t('Quick answers to common questions')
    }
  ];

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
            <NavDropdown 
              label={t('About Us')} 
              items={aboutDropdownItems}
            />
            <NavDropdown 
              label={t('Our Team')} 
              items={teamDropdownItems}
            />
            <NavDropdown 
              label={t('Programs')} 
              items={programsDropdownItems}
            />
            <FreeResourcesHoverCard>
              <Link to="/free-resources" className="text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
                {t('Free Resources')}
              </Link>
            </FreeResourcesHoverCard>
            <NavDropdown 
              label={t('Contact')} 
              items={contactDropdownItems}
            />
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
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-xl shadow-2xl rounded-b-2xl mx-4 mb-4 border-x border-b border-border/30">
            <nav className="flex flex-col space-y-4 px-4">
              <MobileNavDropdown 
                label={t('About Us')} 
                items={aboutDropdownItems}
                onLinkClick={() => setIsMenuOpen(false)}
              />
              <MobileNavDropdown 
                label={t('Our Team')} 
                items={teamDropdownItems}
                onLinkClick={() => setIsMenuOpen(false)}
              />
              <MobileNavDropdown 
                label={t('Programs')} 
                items={programsDropdownItems}
                onLinkClick={() => setIsMenuOpen(false)}
              />
              <Link 
                to="/free-resources" 
                className="text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-4 hover:scale-105 p-3 rounded-xl bg-background/50 hover:bg-primary/10 border border-transparent hover:border-primary/20 hover:shadow-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('Free Resources')}
              </Link>
              <MobileNavDropdown 
                label={t('Contact')} 
                items={contactDropdownItems}
                onLinkClick={() => setIsMenuOpen(false)}
              />
              <div className="flex items-center gap-3 pt-6 border-t border-primary/20 mt-6">
                <LanguageToggle />
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-fit shadow-lg hover:shadow-xl transition-all duration-300"
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