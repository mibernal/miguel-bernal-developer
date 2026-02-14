import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    let rafId = 0;

    if (location.hash.length > 0) {
      const sectionId = decodeURIComponent(location.hash.replace("#", ""));
      let attempts = 0;
      const maxAttempts = 24;

      const tryScrollToSection = () => {
        const node = document.getElementById(sectionId);

        if (node) {
          node.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        if (attempts >= maxAttempts) {
          return;
        }

        attempts += 1;
        rafId = window.requestAnimationFrame(tryScrollToSection);
      };

      rafId = window.requestAnimationFrame(tryScrollToSection);
      return () => window.cancelAnimationFrame(rafId);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.hash, location.pathname]);

  return null;
}
