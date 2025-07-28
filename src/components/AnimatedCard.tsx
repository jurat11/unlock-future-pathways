import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "scale" | "slide-right";
  hover?: boolean;
}

const AnimatedCard = ({ 
  children, 
  className, 
  delay = 0, 
  animation = "fade-up",
  hover = true 
}: AnimatedCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getAnimationClasses = () => {
    const baseTransition = `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`;
    
    if (!isVisible) {
      switch (animation) {
        case "scale":
          return `${baseTransition} opacity-0 scale-95`;
        case "slide-right":
          return `${baseTransition} opacity-0 translate-x-8`;
        default:
          return `${baseTransition} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseTransition} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  const hoverClasses = hover 
    ? "hover:shadow-elegant hover:-translate-y-1 hover:scale-[1.02]" 
    : "";

  return (
    <div
      ref={ref as any}
      className={getAnimationClasses()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card className={cn("transition-all duration-300", hoverClasses, className)}>
        {children}
      </Card>
    </div>
  );
};

export default AnimatedCard;