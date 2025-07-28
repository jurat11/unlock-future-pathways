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
          "flex items-center gap-2 text-foreground/80 hover:text-foreground transition-all duration-500 ease-out relative group px-4 py-2.5 rounded-full hover:bg-white/10 backdrop-blur-md",
          className
        )}
      >
        <span className="font-medium">{label}</span>
        <ChevronDown 
          className={cn(
            "w-3.5 h-3.5 transition-all duration-400 ease-out",
            isOpen && "rotate-180 text-primary"
          )} 
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute top-full left-0 mt-2 w-56 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-2xl transform transition-all duration-400 ease-out overflow-hidden",
          "z-[100] before:content-[''] before:absolute before:-top-1 before:left-6 before:w-2 before:h-2 before:bg-white/10 before:border-l before:border-t before:border-white/20 before:rotate-45 before:backdrop-blur-3xl",
          isOpen 
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
            : "opacity-0 translate-y-3 scale-95 pointer-events-none"
        )}
      >
        <div className="p-2 space-y-1">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/15 transition-all duration-300 group rounded-xl border border-transparent hover:border-white/30 hover:shadow-lg backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
              <span className="font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;