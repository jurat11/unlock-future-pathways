import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start exit animation
    setIsExiting(true);
    setIsVisible(false);
    
    // Add a brief delay for exit animation then show new content
    const exitTimer = setTimeout(() => {
      setIsExiting(false);
      
      // Small delay before entrance animation
      const entranceTimer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      
      return () => clearTimeout(entranceTimer);
    }, 150);

    return () => clearTimeout(exitTimer);
  }, [location.pathname]);

  return (
    <div className="relative overflow-hidden">
      {/* Exit Overlay */}
      {isExiting && (
        <div className="fixed inset-0 bg-background z-50 animate-slide-in-right" />
      )}
      
      {/* Page Content */}
      <div
        className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;