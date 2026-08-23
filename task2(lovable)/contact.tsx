import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send, Check } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Quiet Theory" },
      { name: "description", content: "Tell us about your channel or project. We reply within 48 hours." },
      { property: "og:title", content: "Contact — Quiet Theory" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-hero relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
            Tell us about your <span className="text-gradient">project.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            We reply within 48 hours with a scoped plan, timeline, and quote.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <aside className="space-y-4 lg:col-span-2">
            {[
              { icon: Mail, title: "Email", val: "hello@quiettheory.com", href: "mailto:hello@quiettheory.com" },
              { icon: MessageCircle, title: "WhatsApp", val: "Chat with the studio", href: "https://wa.me/" },
              { icon: MapPin, title: "Studio", val: "Remote — serving 18+ countries" },
            ].map((c) => (
              <a
                key={c.title}
                href={c.href || "#"}
                className="glass block rounded-2xl p-6 transition-all hover:border-accent/40"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-brand-gradient inline-flex h-11 w-11 items-center justify-center rounded-xl">
                    <c.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-accent">{c.title}</div>
                    <div className="mt-0.5 font-display font-medium">{c.val}</div>
                  </div>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-6">
              <h4 className="font-display font-semibold">Response time</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Under 48 hours, Monday to Friday. Priority projects get same-day replies.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="glass shadow-elegant space-y-5 rounded-3xl p-8"
            >
              {sent ? (
                <div className="py-16 text-center">
                  <div className="bg-brand-gradient mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">Message received.</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We'll be in touch within 48 hours. Talk soon.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Your full name" required />
                    <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Country" name="country" placeholder="Where you're based" />
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        Service needed
                      </label>
                      <select
                        name="service"
                        className="w-full rounded-xl border border-input bg-background/40 px-4 py-2.5 text-sm focus:border-accent focus:outline-none"
                      >
                        <option>YouTube long-form editing</option>
                        <option>Shorts & Reels</option>
                        <option>Course production</option>
                        <option>Podcast editing</option>
                        <option>Thumbnail design</option>
                        <option>Full channel management</option>
                        <option>Something custom</option>
                      </select>
                    </div>
                  </div>
                  <Field label="Budget" name="budget" placeholder="Approximate monthly budget" />
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell us about your channel, goals, and timeline…"
                      className="w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-sm focus:border-accent focus:outline-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send message <Send className="h-4 w-4" />
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-input bg-background/40 px-4 py-2.5 text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}
