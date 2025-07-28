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
        className="flex items-center justify-between w-full text-foreground hover:text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-4 hover:scale-105"
      >
        <span>{label}</span>
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      {/* Dropdown Items */}
      <div
        className={cn(
          "ml-4 space-y-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen 
            ? "opacity-100 max-h-96 translate-y-0" 
            : "opacity-0 max-h-0 -translate-y-2 overflow-hidden"
        )}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            onClick={onLinkClick}
            className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 group"
          >
            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-primary" />
            <div>
              <div className="font-medium">{item.label}</div>
              {item.description && (
                <div className="text-xs opacity-75 mt-1">{item.description}</div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavDropdown;