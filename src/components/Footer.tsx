import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
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
              Unlock is a non-profit organization dedicated to bringing quality education 
              to rural areas of Uzbekistan and empowering young minds to achieve their dreams.
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
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Courses</a></li>
              <li><a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Payment Options</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Scholarships</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Technical Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates on courses and educational opportunities.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-r-md hover:bg-primary/90 transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Unlock Education. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;