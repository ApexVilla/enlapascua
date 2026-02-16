import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Empresas from "./pages/Empresas";
import EmpresaDetalle from "./pages/EmpresaDetalle";
import Categorias from "./pages/Categorias";
import RegistrarEmpresa from "./pages/RegistrarEmpresa";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/empresa/:slug" element={<EmpresaDetalle />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/registrar" element={<RegistrarEmpresa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
