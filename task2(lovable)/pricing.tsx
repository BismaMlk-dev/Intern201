import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () => ({
    meta: [
      { title: "Pricing — Quiet Theory" },
      { name: "description", content: "Simple monthly retainers for creators, educators, and organizations." },
      { property: "og:title", content: "Pricing — Quiet Theory" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
});

const tiers = [
  {
    name: "Shorts",
    price: "$690",
    cadence: "/month",
    desc: "Consistent vertical output to grow reach.",
    features: ["15 Shorts / Reels per month", "Captions & sound design", "Thumbnail covers", "48–72h turnarounds", "1 revision round"],
  },
  {
    name: "Educator",
    price: "$1,890",
    cadence: "/month",
    desc: "The full monthly channel package.",
    features: ["4 long-form edits", "8 Shorts / Reels", "Thumbnails + SEO", "Motion graphics", "Weekly strategy call", "Priority turnarounds"],
    featured: true,
  },
  {
    name: "Studio",
    price: "Custom",
    cadence: "",
    desc: "For teams, courses, and publishers.",
    features: ["Multi-channel production", "Course video systems", "Podcast + video", "Dedicated producer", "Custom SLAs", "White-label available"],
  },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-hero relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pricing</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
            Simple, <span className="text-gradient">predictable pricing.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Monthly retainers designed for compounding growth. Custom quotes for anything beyond.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all ${
                t.featured
                  ? "bg-brand-gradient shadow-glow border-0"
                  : "glass hover:border-accent/40"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-xs font-semibold text-accent border border-accent/40">
                  <Sparkles className="mr-1 inline h-3 w-3" /> Most popular
                </div>
              )}
              <h3 className={`font-display text-xl font-semibold ${t.featured ? "text-white" : ""}`}>{t.name}</h3>
              <p className={`mt-1 text-sm ${t.featured ? "text-white/80" : "text-muted-foreground"}`}>{t.desc}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className={`font-display text-5xl font-bold ${t.featured ? "text-white" : ""}`}>{t.price}</span>
                <span className={`text-sm ${t.featured ? "text-white/70" : "text-muted-foreground"}`}>{t.cadence}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${t.featured ? "text-white/90" : "text-muted-foreground"}`}>
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-white" : "text-accent"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6">
                <Button asChild variant={t.featured ? "glass" : "hero"} className="w-full">
                  <Link to="/contact">
                    {t.name === "Studio" ? "Talk to us" : "Get started"} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ mini */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {[
            { q: "Do you offer one-off projects?", a: "Yes — single-video packages start at $290. Best for creators testing the workflow." },
            { q: "What's your turnaround?", a: "48–72 hours for most drafts. Priority slots available on the Educator and Studio tiers." },
            { q: "Can I switch tiers monthly?", a: "Absolutely. Scale up or pause anytime — retainers are month-to-month, no lock-in." },
            { q: "Do you handle uploads & SEO?", a: "Yes — thumbnails, titles, descriptions, tags, and scheduled publishing are included on Educator and up." },
          ].map((f) => (
            <div key={f.q} className="glass rounded-2xl p-6">
              <h4 className="font-display font-semibold">{f.q}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
