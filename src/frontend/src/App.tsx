import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { useState } from "react";
import { Awards } from "./components/Awards";
import { Celebrities } from "./components/Celebrities";
import { ContactSection } from "./components/ContactSection";
import { Hero } from "./components/Hero";
import { HowWeWork } from "./components/HowWeWork";
import { Industries } from "./components/Industries";
import { Navbar } from "./components/Navbar";
import { RealResults } from "./components/RealResults";
import { Services } from "./components/Services";
import { SiteFooter } from "./components/SiteFooter";
import { Testimonials } from "./components/Testimonials";
import { TrustedBy } from "./components/TrustedBy";
import { WhatDefinesUs } from "./components/WhatDefinesUs";
import { WorkShowcase } from "./components/WorkShowcase";
import { useIsAdmin } from "./hooks/useQueries";
import { AdminPage } from "./pages/AdminPage";
import { GoogleAdsIndiaPage } from "./pages/GoogleAdsIndiaPage";
import { KotaPage } from "./pages/KotaPage";
import { MetaAdsIndiaPage } from "./pages/MetaAdsIndiaPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SeoServicesIndiaPage } from "./pages/SeoServicesIndiaPage";
import { ServicesPage } from "./pages/ServicesPage";

const queryClient = new QueryClient();

function HomePage() {
  const [isAdminView, setIsAdminView] = useState(false);
  const { data: isAdmin } = useIsAdmin();

  return (
    <div className="font-space bg-[#080D1A] text-[#F0F4FF]">
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
          <Celebrities />
          <WhatDefinesUs />
          <WorkShowcase />
          <Services />
          <Industries />
          <RealResults />
          <Awards />
          <Testimonials />
          <HowWeWork />
          <ContactSection />
        </main>
      )}
      <SiteFooter />
      <Toaster richColors position="top-right" />
    </div>
  );
}

function KotaRoute() {
  const [isAdminView, setIsAdminView] = useState(false);
  return (
    <KotaPage
      onAdminClick={() => setIsAdminView((v) => !v)}
      isAdminView={isAdminView}
    />
  );
}

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const kotaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/kota",
  component: KotaRoute,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const seoServicesIndiaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/seo-services-india",
  component: SeoServicesIndiaPage,
});

const googleAdsIndiaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/google-ads-india",
  component: GoogleAdsIndiaPage,
});

const metaAdsIndiaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/meta-ads-india",
  component: MetaAdsIndiaPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  kotaRoute,
  projectsRoute,
  servicesRoute,
  seoServicesIndiaRoute,
  googleAdsIndiaRoute,
  metaAdsIndiaRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
