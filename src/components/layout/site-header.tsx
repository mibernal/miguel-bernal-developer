import { MouseEvent, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

import { homeSectionNavItems, routeNavItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/shared/hooks/use-scroll-spy";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const homeSectionIds = homeSectionNavItems.map((item) => item.id);

export function SiteHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(homeSectionIds);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jumpToSection = (sectionId: string) => {
    if (!isHome) {
      navigate({ pathname: "/", hash: `#${sectionId}` });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      if (location.hash !== `#${sectionId}`) {
        navigate({ hash: `#${sectionId}` }, { replace: true });
      }
    }
  };

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) {
      return;
    }

    event.preventDefault();
    if (location.hash.length > 0) {
      navigate("/", { replace: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-all duration-300",
        isScrolled && "border-border/70 bg-background/75 shadow-[0_12px_32px_hsla(220,40%,2%,0.45)] backdrop-blur-xl",
      )}
    >
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-md bg-background px-3 py-2 text-sm font-medium text-foreground focus:not-sr-only focus:absolute focus:left-3 focus:top-3"
      >
        Saltar al contenido principal
      </a>

      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link
          to="/"
          onClick={handleHomeClick}
          className="font-display bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-[1.35rem] font-bold text-transparent"
          aria-label="Ir al inicio"
        >
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {isHome
            ? homeSectionNavItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => jumpToSection(item.id)}
                  aria-current={activeSection === item.id ? "true" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    activeSection === item.id
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                  )}
                >
                  {item.label}
                </button>
              ))
            : routeNavItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "bg-primary/15 text-primary"
                        : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm" asChild>
            <Link to="/projects">Ver proyectos</Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact">Contactar</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú de navegación">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88%] border-border/70 bg-background/95 sm:max-w-sm">
            <SheetHeader>
              <SheetTitle className="font-display text-left text-lg">Navegación</SheetTitle>
            </SheetHeader>

            <nav className="mt-8 grid gap-2" aria-label="Navegación móvil">
              {isHome
                ? homeSectionNavItems.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <button
                        type="button"
                        onClick={() => jumpToSection(item.id)}
                        aria-current={activeSection === item.id ? "true" : undefined}
                        className={cn(
                          "rounded-md px-3 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          activeSection === item.id
                            ? "bg-primary/15 text-primary"
                            : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                        )}
                      >
                        {item.label}
                      </button>
                    </SheetClose>
                  ))
                : routeNavItems.map((item) => (
                    <SheetClose asChild key={item.to}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          cn(
                            "rounded-md px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            isActive
                              ? "bg-primary/15 text-primary"
                              : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    </SheetClose>
                  ))}
            </nav>

            <div className="mt-8 grid gap-3">
              <SheetClose asChild>
                <Button variant="outline" asChild>
                  <Link to="/projects">Ver proyectos</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="hero" asChild>
                  <Link to="/contact">Contactar</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
