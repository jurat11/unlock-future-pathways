import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Programs from "./pages/Programs";
import FreeResources from "./pages/FreeResources";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import { LanguageProvider } from "./contexts/LanguageContext";
import PageTransition from "./components/PageTransition";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/about-us" element={<PageTransition><AboutUs /></PageTransition>} />
            <Route path="/our-team" element={<PageTransition><OurTeam /></PageTransition>} />
            <Route path="/programs" element={<PageTransition><Programs /></PageTransition>} />
            <Route path="/free-resources" element={<PageTransition><FreeResources /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
            <Route path="/admin" element={<PageTransition><Admin /></PageTransition>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
