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
          "flex items-center gap-1 text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 relative group",
          className
        )}
      >
        <span>{label}</span>
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isOpen && "rotate-180"
          )} 
        />
        <div className="absolute w-0 h-0.5 bg-primary left-0 -bottom-1 transition-all duration-300 group-hover:w-full" />
      </button>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-elegant transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "z-[100]", // High z-index to prevent transparency issues
          isOpen 
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
            : "opacity-0 translate-y-2 scale-95 pointer-events-none"
        )}
      >
        <div className="py-2">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-3 hover:bg-muted/50 transition-colors duration-200 group"
            >
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                {item.label}
              </div>
              {item.description && (
                <div className="text-sm text-muted-foreground mt-1">
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