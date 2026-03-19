import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ContactSection } from "./components/ContactSection";
import { Hero } from "./components/Hero";
import { HowWeWork } from "./components/HowWeWork";
import { Industries } from "./components/Industries";
import { Navbar } from "./components/Navbar";
import { RealResults } from "./components/RealResults";
import { Services } from "./components/Services";
import { SiteFooter } from "./components/SiteFooter";
import { TopBar } from "./components/TopBar";
import { TrustedBy } from "./components/TrustedBy";
import { WhyChoose } from "./components/WhyChoose";
import { useIsAdmin } from "./hooks/useQueries";
import { AdminPage } from "./pages/AdminPage";

const queryClient = new QueryClient();

function AppContent() {
  const [isAdminView, setIsAdminView] = useState(false);
  const { data: isAdmin } = useIsAdmin();

  return (
    <div className="font-poppins">
      <TopBar />
      <Navbar
        onAdminClick={() => setIsAdminView((v) => !v)}
        isAdminView={isAdminView}
      />
      {isAdmin && isAdminView ? (
        <AdminPage />
      ) : (
        <main>
          <Hero />
          <TrustedBy />
          <WhyChoose />
          <Services />
          <Industries />
          <RealResults />
          <HowWeWork />
          <ContactSection />
        </main>
      )}
      <SiteFooter />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
