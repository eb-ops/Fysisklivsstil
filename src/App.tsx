import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ElastikkerVsVaegt from "./pages/ElastikkerVsVaegt.tsx";
import StyrketraeningFordele from "./pages/StyrketraeningFordele.tsx";
import TraeningGuide from "./pages/TraeningGuide.tsx";
import MassageRoller from "./pages/MassageRoller.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/elastikker-vs-vaegt" element={<ElastikkerVsVaegt />} />
          <Route path="/styrketraening-fordele" element={<StyrketraeningFordele />} />
          <Route path="/traening-guide" element={<TraeningGuide />} />
          <Route path="/massageroller" element={<MassageRoller />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
