import { Outlet } from "react-router-dom";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BackToTopButton } from "@/shared/ui/back-to-top-button";
import { IntroScreen } from "@/shared/ui/intro-screen";

export function SiteLayout() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <IntroScreen />
      <div className="pointer-events-none fixed inset-0 -z-10 portfolio-grid opacity-60" aria-hidden />
      <div className="pointer-events-none fixed inset-0 -z-10 premium-glow" aria-hidden />

      <SiteHeader />
      <main id="main-content" className="relative">
        <Outlet />
      </main>
      <SiteFooter />
      <BackToTopButton />
    </div>
  );
}
