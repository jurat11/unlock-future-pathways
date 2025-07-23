import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'uz' : 'en')}
      className="flex items-center gap-2"
    >
      <Languages className="h-4 w-4" />
      {language === 'en' ? 'UZ' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;