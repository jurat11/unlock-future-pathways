import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Link } from "react-router-dom";
import { BookOpen, Video, FileText, Users, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";

interface FreeResourcesHoverCardProps {
  children: React.ReactNode;
}

const FreeResourcesHoverCard = ({ children }: FreeResourcesHoverCardProps) => {
  const { t } = useLanguage();

  const resourceCategories = [
    {
      icon: FileText,
      title: t("Admission Guidelines & PDFs"),
      description: t("Rare documents and comprehensive guides"),
      count: "25+",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: BookOpen,
      title: t("Real Admissions Insights"),
      description: t("Latest trends and success stories"),
      count: "15+",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Video,
      title: t("Expert Podcasts"),
      description: t("1-hour sessions with top admits"),
      count: "12+",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: t("Ultimate Courses"),
      description: t("Comprehensive admission preparation"),
      count: "8+",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <HoverCard openDelay={200} closeDelay={300}>
      <HoverCardTrigger asChild>
        {children}
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-96 p-0 border-0 shadow-elegant"
        side="bottom"
        align="center"
        sideOffset={8}
      >
        <div className="bg-card rounded-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 bg-gradient-primary">
            <h3 className="text-lg font-semibold text-white mb-1">
              {t("Free Resources")}
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              {t("Everything you need to succeed")}
            </p>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-sm">{category.title}</h4>
                      <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                        {category.count}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-4 pb-4">
            <Link 
              to="/free-resources"
              className="block w-full text-center py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
            >
              {t("Explore All Resources")} →
            </Link>
          </div>

          {/* Free Consultation CTA */}
          <div className="px-4 pb-4">
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <p className="text-xs text-muted-foreground mb-2">
                {t("Get personalized guidance")}
              </p>
              <Link 
                to="/contact"
                className="text-xs font-medium text-primary hover:underline"
              >
                {t("Schedule Free 1-1 Session")} →
              </Link>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default FreeResourcesHoverCard;