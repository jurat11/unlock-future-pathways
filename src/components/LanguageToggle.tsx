import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const getNextLanguage = () => {
    if (language === 'uz') return 'ru';
    if (language === 'ru') return 'en';
    return 'uz';
  };

  const getDisplayText = () => {
    if (language === 'uz') return 'RU';
    if (language === 'ru') return 'EN';
    return 'UZ';
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(getNextLanguage())}
      className="flex items-center gap-2"
    >
      <Languages className="h-4 w-4" />
      {getDisplayText()}
    </Button>
  );
};

export default LanguageToggle;