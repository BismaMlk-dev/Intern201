import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Youtube, Film, GraduationCap, Mic, PenTool, Sparkles, Type, Search,
  Subtitles, Wand2, Globe, Palette, ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Quiet Theory" },
      { name: "description", content: "Full-service educational media: editing, production, motion, and strategy." },
      { property: "og:title", content: "Services — Quiet Theory" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const groups = [
  {
    title: "Video production",
    services: [
      { icon: Youtube, name: "YouTube long-form", desc: "Retention-first edits with hooks, chapters, and pacing tuned for growth." },
      { icon: Film, name: "Shorts & Reels", desc: "Vertical cuts optimized for algorithm reach and shareability." },
      { icon: Mic, name: "Podcast editing", desc: "Clean audio, remove filler, mastered levels, and video versions." },
      { icon: GraduationCap, name: "Course production", desc: "Lesson series with consistent visual language and modular chapters." },
    ],
  },
  {
    title: "Design & motion",
    services: [
      { icon: PenTool, name: "Thumbnail design", desc: "Concept-driven thumbnails A/B-tested for CTR." },
      { icon: Wand2, name: "Motion graphics", desc: "Kinetic type, explainers, and lower thirds that clarify ideas." },
      { icon: Subtitles, name: "Captions & subtitles", desc: "Accessible, styled captions in any language." },
      { icon: Palette, name: "Channel branding", desc: "Cohesive palette, type system, banners, and intros." },
    ],
  },
  {
    title: "Strategy & AI",
    services: [
      { icon: Type, name: "Script writing", desc: "Narrative scripts crafted for clarity and retention." },
      { icon: Search, name: "YouTube SEO", desc: "Titles, tags, descriptions, and topical authority research." },
      { icon: Sparkles, name: "AI content assist", desc: "Workflows to accelerate ideation, editing, and publishing." },
      { icon: Globe, name: "Educator websites", desc: "Fast, elegant sites for courses, communities, and creators." },
    ],
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-hero relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Services</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
            Every piece of your <span className="text-gradient">content stack.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            From script to publish. Pick the services you need — or hand it all off. Custom quotes always available.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-6 pb-24">
        {groups.map((g) => (
          <section key={g.title}>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">{g.title}</h2>
              <div className="h-px flex-1 ml-6 bg-border" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {g.services.map((s) => (
                <div key={s.name} className="glass group flex gap-5 rounded-2xl p-6 transition-all hover:border-accent/40">
                  <div className="bg-brand-gradient shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl">
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="pt-4">
          <div className="glass shadow-elegant rounded-3xl p-10 text-center md:p-14">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Need something custom?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Combine services into a monthly retainer or one-off sprint. We'll scope it around your goals.
            </p>
            <div className="mt-6">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Request a quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
