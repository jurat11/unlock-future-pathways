import { Children, cloneElement, isValidElement } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface StaggeredAnimationProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

const StaggeredAnimation = ({ 
  children, 
  staggerDelay = 100,
  className 
}: StaggeredAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div ref={ref as any} className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        const delay = index * staggerDelay;
        const animationClasses = `transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-8 scale-95"
        }`;

        return cloneElement(child, {
          ...child.props,
          className: cn(animationClasses, child.props.className),
          style: {
            transitionDelay: `${delay}ms`,
            ...child.props.style,
          },
        });
      })}
    </div>
  );
};

export default StaggeredAnimation;