import { lazy, Suspense, type ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

import { SiteLayout } from "@/components/layout/site-layout";
import { ScrollManager } from "@/app/scroll-manager";
import { RouteSkeleton } from "@/shared/ui/route-skeleton";

const HomePage = lazy(() => import("@/pages/home-page"));
const ProjectsPage = lazy(() => import("@/pages/projects-page"));
const AboutPage = lazy(() => import("@/pages/about-page"));
const ContactPage = lazy(() => import("@/pages/contact-page"));
const NotFoundPage = lazy(() => import("@/pages/not-found-page"));

function withSuspense(node: ReactNode) {
  return <Suspense fallback={<RouteSkeleton />}>{node}</Suspense>;
}

export function AppRouter() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={withSuspense(<HomePage />)} />
          <Route path="projects" element={withSuspense(<ProjectsPage />)} />
          <Route path="about" element={withSuspense(<AboutPage />)} />
          <Route path="contact" element={withSuspense(<ContactPage />)} />
          <Route path="*" element={withSuspense(<NotFoundPage />)} />
        </Route>
      </Routes>
    </>
  );
}
