import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Button
      type="button"
      size="icon"
      variant="outline"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      aria-label="Volver al inicio"
      className={cn(
        "fixed bottom-5 right-5 z-40 h-11 w-11 rounded-full border-border/80 bg-background/85 shadow-[0_8px_28px_hsla(220,42%,2%,0.55)] backdrop-blur-md transition-all duration-300 focus-visible:ring-ring",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ChevronUp className="h-4 w-4" />
    </Button>
  );
}
