import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/f0246711-0d84-4e23-a1be-7aeb67f9b2da.png" 
              alt="Unlock Logo" 
              className="h-8 w-auto"
            />
            <p className="text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.quicklinks.about')}</a></li>
              <li><a href="#accepted-program" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.quicklinks.accepted')}</a></li>
              <li><a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.quicklinks.testimonials')}</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.quicklinks.contact')}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.quicklinks.blog')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.support.center')}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.support.portal')}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.support.payments')}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.support.scholarships')}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.support.technical')}</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.newsletter')}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.newsletter.description')}
            </p>
            <div className="space-y-3">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder={t('footer.newsletter.placeholder')}
                  className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-r-md hover:bg-primary/90 transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                {t('footer.newsletter.spam')}
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.cookies')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;