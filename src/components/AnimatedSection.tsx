import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "slide-up";
  delay?: number;
  duration?: number;
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className, animation = "fade-up", delay = 0, duration = 600, ...props }, forwardedRef) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    const getAnimationClasses = () => {
      const baseClasses = `transition-all ease-[cubic-bezier(0.16,1,0.3,1)]`;
      const durationClass = `duration-[800ms]`;
      
      switch (animation) {
        case "fade-up":
          return `${baseClasses} ${durationClass} ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`;
        case "fade-down":
          return `${baseClasses} ${durationClass} ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-12 scale-95"
          }`;
        case "fade-left":
          return `${baseClasses} ${durationClass} ${
            isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
          }`;
        case "fade-right":
          return `${baseClasses} ${durationClass} ${
            isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-12 scale-95"
          }`;
        case "scale":
          return `${baseClasses} ${durationClass} ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`;
        case "slide-up":
          return `${baseClasses} ${durationClass} ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-70"
          }`;
        default:
          return `${baseClasses} ${durationClass} ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`;
      }
    };

    return (
      <section
        ref={(node) => {
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
          // @ts-ignore
          ref.current = node;
        }}
        className={cn(getAnimationClasses(), className)}
        style={{ transitionDelay: `${delay}ms` }}
        {...props}
      >
        {children}
      </section>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;