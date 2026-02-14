import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { deliveryPillars, siteConfig } from "@/content/site";
import { useToast } from "@/hooks/use-toast";
import { SectionHeading } from "@/shared/ui/section-heading";

const contactSchema = z.object({
  name: z.string().min(2, "Escribe tu nombre completo."),
  email: z.string().email("Ingresa un email válido."),
  company: z.string().max(80, "Máximo 80 caracteres.").optional(),
  message: z.string().min(20, "Comparte al menos 20 caracteres para contextualizar tu proyecto."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type ContactSectionProps = {
  withSectionWrapper?: boolean;
  id?: string;
};

export function ContactSection({ withSectionWrapper = true, id = "contact" }: ContactSectionProps) {
  const { toast } = useToast();
  const formSubmitUrl = `https://formsubmit.co/ajax/${siteConfig.email}`;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const submitWithFormSubmit = async (values: ContactFormValues) => {
    const payload = new URLSearchParams({
      name: values.name,
      email: values.email,
      company: values.company || "No especificada",
      message: values.message,
      _subject: `Nueva solicitud web - ${values.name}`,
      _template: "table",
      _captcha: "false",
      _replyto: values.email,
      _honey: "",
      _url: `${siteConfig.siteUrl}contact`,
    });

    try {
      const response = await fetch(formSubmitUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      const result = (await response.json().catch(() => null)) as
        | {
            success?: string | boolean;
            message?: string;
          }
        | null;

      if (!response.ok) {
        throw new Error(result?.message || `No fue posible enviar el formulario (${response.status}).`);
      }

      if (result?.success !== "true" && result?.success !== true) {
        throw new Error(result?.message || "No fue posible confirmar el envío.");
      }

      toast({
        title: "Mensaje enviado",
        description: "Tu solicitud fue enviada correctamente. Te responderé pronto.",
      });

      form.reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Intenta nuevamente en unos segundos o usa el correo directo disponible en esta sección.";

      toast({
        title: "No se pudo enviar en este momento",
        description: message,
        variant: "destructive",
      });
    }
  };

  const content = (
    <div className="content-wrap space-y-12">
      <SectionHeading
        eyebrow="Contacto"
        title="Convirtamos tu idea en un proyecto digital con resultados"
        description="Comparte contexto, objetivos y tiempos. Recibirás una respuesta clara para avanzar con el alcance correcto."
        align="center"
      />

      <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <Card className="premium-card p-6">
          <h3 className="text-lg font-semibold text-foreground">Canales directos y proceso</h3>

          <div className="mt-5 space-y-3 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex w-full items-center gap-3 rounded-md border border-border/70 bg-secondary/45 p-3 text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span>{siteConfig.email}</span>
            </a>

            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="inline-flex w-full items-center gap-3 rounded-md border border-border/70 bg-secondary/45 p-3 text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>{siteConfig.phone}</span>
            </a>

            <p className="inline-flex w-full items-center gap-3 rounded-md border border-border/70 bg-secondary/45 p-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{siteConfig.location}</span>
            </p>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{siteConfig.availability}</p>
          <div className="mt-5 rounded-lg border border-border/70 bg-background/65 p-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Forma de trabajo
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              {deliveryPillars.map((point) => (
                <li key={point} className="inline-flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button className="mt-5 w-full" variant="outline" asChild>
            <a href={`mailto:${siteConfig.email}`}>Abrir correo directo</a>
          </Button>
        </Card>

        <Card className="premium-card p-6">
          <div className="mb-5 rounded-lg border border-border/70 bg-background/70 p-4">
            <p className="text-sm font-semibold text-foreground">Formulario de contacto</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Déjame tus datos y una breve descripción del proyecto. Te responderé con próximos pasos concretos.
            </p>
          </div>

          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(submitWithFormSubmit)} noValidate>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre y apellido" autoComplete="name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="tu@correo.com" type="email" autoComplete="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa (opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Empresa o proyecto" autoComplete="organization" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Objetivo, alcance, fecha ideal de entrega y cualquier restricción técnica."
                        className="min-h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Incluye contexto de negocio y resultado esperado para devolverte una propuesta más precisa.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className="text-xs text-muted-foreground" aria-live="polite">
                {form.formState.isSubmitting
                  ? "Enviando tu mensaje..."
                  : "Al enviar este formulario, aceptas que te contacte por correo para continuar la conversación. Si hay algún problema, puedes usar el correo directo."}
              </p>

              <Button type="submit" className="w-full" variant="hero" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Enviando..." : "Enviar propuesta"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );

  if (!withSectionWrapper) {
    return content;
  }

  return (
    <section id={id} className="section-shell">
      {content}
    </section>
  );
}
