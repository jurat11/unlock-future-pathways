import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  className?: string;
}

const NavDropdown = ({ label, items, className }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 150);
    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      {/* Trigger Button */}
      <button
        className={cn(
          "flex items-center gap-1 text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 relative group px-3 py-2 rounded-lg hover:bg-primary/5",
          className
        )}
      >
        <span className="font-medium">{label}</span>
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isOpen && "rotate-180 text-primary"
          )} 
        />
        <div className="absolute w-0 h-0.5 bg-gradient-primary left-3 -bottom-1 transition-all duration-300 group-hover:w-[calc(100%-24px)] rounded-full" />
      </button>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute top-full left-0 mt-3 w-72 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "z-[100] before:content-[''] before:absolute before:-top-1 before:left-6 before:w-3 before:h-3 before:bg-background/95 before:border-l before:border-t before:border-border/50 before:rotate-45 before:backdrop-blur-xl",
          isOpen 
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
            : "opacity-0 translate-y-2 scale-95 pointer-events-none"
        )}
      >
        <div className="py-3 relative z-10 bg-background/90 rounded-xl backdrop-blur-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-5 py-3 hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200 group mx-2 rounded-lg border border-transparent hover:border-primary/20 hover:shadow-lg"
            >
              <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all duration-200"></div>
                {item.label}
              </div>
              {item.description && (
                <div className="text-sm text-muted-foreground mt-1 ml-4 group-hover:text-foreground/80 transition-colors duration-200">
                  {item.description}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;