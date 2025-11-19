import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import SiebtraegerPapierfilterGuide from "./pages/SiebtraegerPapierfilterGuide";
import EspressoExtraktionVerbessern from "./pages/EspressoExtraktionVerbessern";
import SiebtraegerReinigungTipps from "./pages/SiebtraegerReinigungTipps";
import BaristaZubehoerEssentials from "./pages/BaristaZubehoerEssentials";
import KaffeeGeschmackOptimieren from "./pages/KaffeeGeschmackOptimieren";
import PapierfilterVsMetallsieb from "./pages/PapierfilterVsMetallsieb";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/siebtraeger-papierfilter-guide" element={<SiebtraegerPapierfilterGuide />} />
          <Route path="/espresso-extraktion-verbessern" element={<EspressoExtraktionVerbessern />} />
          <Route path="/siebtraeger-reinigung-tipps" element={<SiebtraegerReinigungTipps />} />
          <Route path="/barista-zubehoer-essentials" element={<BaristaZubehoerEssentials />} />
          <Route path="/kaffee-geschmack-optimieren" element={<KaffeeGeschmackOptimieren />} />
          <Route path="/papierfilter-vs-metallsieb" element={<PapierfilterVsMetallsieb />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;