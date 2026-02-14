import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { RouteSeo } from "@/shared/seo/route-seo";

export default function NotFoundPage() {
  return (
    <section className="section-shell">
      <RouteSeo
        title="404"
        description="La página solicitada no existe. Regresa al inicio para seguir navegando por el portfolio."
        path="/404"
      />
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-5 rounded-xl border border-border/70 bg-card/40 p-10 text-center">
        <p className="font-display text-6xl font-bold text-primary">404</p>
        <h1 className="text-2xl font-semibold">Página no encontrada</h1>
        <p className="text-muted-foreground">La ruta que abriste no está disponible o fue movida.</p>
        <Button asChild>
          <Link to="/">Volver al inicio</Link>
        </Button>
      </div>
    </section>
  );
}
