import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Feather, HeartHandshake } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import portraitImg from "@/assets/portrait-educator.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Quiet Theory" },
      { name: "description", content: "The story, philosophy, and craft behind Quiet Theory." },
      { property: "og:title", content: "About — Quiet Theory" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-hero relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About</p>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
              A quiet studio, building loud <span className="text-gradient">ideas.</span>
            </h1>
            <p className="mt-6 text-muted-foreground">
              Quiet Theory is a solo-operated educational media studio. We produce faceless, psychology-driven
              content for our own channels — and we bring that same craft to creators, educators, and organizations
              who want their knowledge to travel further.
            </p>
            <p className="mt-4 text-muted-foreground">
              The name comes from a belief: the ideas that change us don't shout. They arrive quietly, and stay.
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border/60 shadow-elegant">
            <img src={portraitImg} alt="Educator recording a lesson" className="h-full w-full object-cover" width={1200} height={1408} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent p-6">
              <p className="font-display text-xl italic">"The ideas that change us don't shout."</p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Compass, title: "Clarity over noise", desc: "Every cut, caption, and thumbnail serves the idea — never the algorithm alone." },
              { icon: Feather, title: "Craft at scale", desc: "Systems and templates that let a solo studio deliver like a much larger team." },
              { icon: HeartHandshake, title: "Human partnership", desc: "You talk to the person doing the work. Direct, honest, considered." },
            ].map((v) => (
              <div key={v.title} className="glass rounded-2xl p-8">
                <div className="bg-brand-gradient inline-flex h-11 w-11 items-center justify-center rounded-xl">
                  <v.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-10">
            {[
              { year: "2022", t: "The first cut", d: "Started as a psychology YouTube channel exploring quiet ideas that shape behavior." },
              { year: "2023", t: "Studio doors open", d: "Began editing for creators globally on Fiverr. First long-term retainers arrive." },
              { year: "2024", t: "Educational media", d: "Expanded into course production, podcasts, and thumbnails. 40M+ views delivered." },
              { year: "2025", t: "Quiet Theory today", d: "A full-service studio serving creators and organizations across 18 countries." },
            ].map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="bg-brand-gradient shadow-glow flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="w-px flex-1 bg-border" />}
                </div>
                <div className="flex-1 pb-4">
                  <div className="text-xs uppercase tracking-widest text-accent">{m.year}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{m.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass bg-hero rounded-3xl p-10 text-center md:p-14">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Let's build something worth watching.</h2>
            <div className="mt-6">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Start a conversation <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
