
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import AuthGuard from "@/components/AuthGuard";
import AdminGuard from "@/components/AdminGuard";
import AdminLayout from "@/components/admin/AdminLayout";
import AuthPage from "@/pages/AuthPage";
import Index from "./pages/Index";
import JobsPage from "./pages/JobsPage";
import JobDetailPage from "./pages/JobDetailPage";
import AboutPage from "./pages/AboutPage";
import ResourcesPage from "./pages/ResourcesPage";
import ResourceDetailPage from "./pages/ResourceDetailPage";
import NotFound from "./pages/NotFound";
import VisaInfoPage from "./pages/VisaInfoPage";
import RelocationPage from "./pages/RelocationPage";
import GermanLanguagePage from "./pages/GermanLanguagePage";
import BlogPage from "./pages/BlogPage";
import FAQPage from "./pages/FAQPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UsersManagement from "./pages/admin/UsersManagement";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/" element={<AuthGuard><Index /></AuthGuard>} />
              <Route path="/jobs" element={<AuthGuard><JobsPage /></AuthGuard>} />
              <Route path="/job/:id" element={<AuthGuard><JobDetailPage /></AuthGuard>} />
              <Route path="/about" element={<AuthGuard><AboutPage /></AuthGuard>} />
              <Route path="/resources" element={<AuthGuard><ResourcesPage /></AuthGuard>} />
              <Route path="/resources/:id" element={<AuthGuard><ResourceDetailPage /></AuthGuard>} />
              <Route path="/visa-info" element={<AuthGuard><VisaInfoPage /></AuthGuard>} />
              <Route path="/relocation" element={<AuthGuard><RelocationPage /></AuthGuard>} />
              <Route path="/german-language" element={<AuthGuard><GermanLanguagePage /></AuthGuard>} />
              <Route path="/blog" element={<AuthGuard><BlogPage /></AuthGuard>} />
              <Route path="/faq" element={<AuthGuard><FAQPage /></AuthGuard>} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminGuard><AdminLayout /></AdminGuard>}>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<UsersManagement />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
