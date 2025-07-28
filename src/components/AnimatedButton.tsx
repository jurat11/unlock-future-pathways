import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface AnimatedButtonProps extends ButtonProps {
  glow?: boolean;
  pulse?: boolean;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, glow = false, pulse = false, children, ...props }, ref) => {
    const glowClasses = glow 
      ? "hover:shadow-glow hover:scale-105 active:scale-95" 
      : "hover:scale-105 active:scale-95";
      
    const pulseClasses = pulse ? "animate-pulse" : "";

    return (
      <Button
        ref={ref}
        className={cn(
          "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          glowClasses,
          pulseClasses,
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;