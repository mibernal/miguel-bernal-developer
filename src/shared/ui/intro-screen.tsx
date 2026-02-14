import { useEffect, useState } from "react";

import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const INTRO_STORAGE_KEY = "mab_intro_seen_v2";

export function IntroScreen() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const introSeen = window.sessionStorage.getItem(INTRO_STORAGE_KEY) === "1";

    if (prefersReducedMotion || introSeen) {
      return;
    }

    setVisible(true);

    const startClose = window.setTimeout(() => setClosing(true), 1700);
    const hide = window.setTimeout(() => {
      window.sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
      setVisible(false);
      setClosing(false);
    }, 2400);

    return () => {
      window.clearTimeout(startClose);
      window.clearTimeout(hide);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={cn("intro-overlay", closing && "intro-overlay--closing")} aria-hidden>
      <div className="intro-overlay__scanline" />
      <div className="intro-overlay__glow" />
      <div className="intro-overlay__content">
        <p className="intro-overlay__name">{siteConfig.name}</p>
        <p className="intro-overlay__role">{siteConfig.role}</p>
      </div>
    </div>
  );
}
