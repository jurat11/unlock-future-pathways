import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface MobileNavDropdownProps {
  label: string;
  items: DropdownItem[];
  onLinkClick: () => void;
}

const MobileNavDropdown = ({ label, items, onLinkClick }: MobileNavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-foreground/80 hover:text-foreground transition-all duration-400 ease-out p-3 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-[40px] supports-[backdrop-filter]:bg-white/5 group"
      >
        <span className="font-medium text-sm sm:text-base leading-tight">{label}</span>
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-all duration-400 ease-out group-hover:text-primary",
            isOpen && "rotate-180 text-primary"
          )} 
        />
      </button>

      {/* Dropdown Items */}
      <div
        className={cn(
          "ml-4 space-y-2 transition-all duration-500 ease-out overflow-hidden",
          isOpen 
            ? "opacity-100 max-h-96 translate-y-0" 
            : "opacity-0 max-h-0 -translate-y-4"
        )}
      >
        <div className="pl-4 border-l-2 border-gradient-to-b from-primary/40 to-accent/40 space-y-2">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={onLinkClick}
              className="flex items-center gap-3 text-xs sm:text-sm text-foreground/70 hover:text-foreground transition-all duration-300 group p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 border border-white/10 hover:border-white/20 backdrop-blur-[40px] supports-[backdrop-filter]:bg-white/5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-accent opacity-70 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 flex-shrink-0"></div>
              <span className="font-medium leading-tight">{item.label}</span>
              <ChevronRight className="w-3 h-3 flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 ml-auto" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavDropdown;