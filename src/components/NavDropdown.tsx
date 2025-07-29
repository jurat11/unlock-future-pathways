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
const NavDropdown = ({
  label,
  items,
  className
}: NavDropdownProps) => {
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
  return <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={dropdownRef}>
      {/* Trigger Button */}
      <button className={cn("flex items-center gap-2 text-foreground/80 hover:text-foreground transition-all duration-200 px-4 py-2.5 rounded-md hover:bg-secondary/50", className)}>
        <span className="font-medium">{label}</span>
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {/* Dropdown Menu */}
      <div className={cn("absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-dropdown overflow-hidden", "z-[100]", isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none", "transition-all duration-200")}>
        <div className="p-1">
          {items.map((item, index) => 
            <Link 
              key={index} 
              to={item.href} 
              className="flex items-center gap-2 px-3 py-2 hover:bg-secondary/50 transition-colors duration-150 rounded-md text-sm text-foreground/80 hover:text-foreground"
            >
              <span>{item.label}</span>
            </Link>
          )}
        </div>
      </div>
    </div>;
};
export default NavDropdown;