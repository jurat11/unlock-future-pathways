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
    <div className="space-y-3">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-4 hover:scale-105 p-3 rounded-xl bg-background/50 hover:bg-primary/10 border border-transparent hover:border-primary/20 hover:shadow-lg group"
      >
        <span className="font-medium">{label}</span>
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-primary",
            isOpen && "rotate-180 text-primary"
          )} 
        />
      </button>

      {/* Dropdown Items */}
      <div
        className={cn(
          "ml-6 space-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden",
          isOpen 
            ? "opacity-100 max-h-96 translate-y-0" 
            : "opacity-0 max-h-0 -translate-y-4"
        )}
      >
        <div className="pl-4 border-l-2 border-primary/20 space-y-2">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={onLinkClick}
              className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 group p-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20 hover:shadow-md"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-300 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="font-medium group-hover:font-semibold transition-all duration-200">{item.label}</div>
                {item.description && (
                  <div className="text-xs opacity-75 mt-1 group-hover:opacity-100 transition-opacity duration-200">{item.description}</div>
                )}
              </div>
              <ChevronRight className="w-3 h-3 mt-2 flex-shrink-0 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavDropdown;