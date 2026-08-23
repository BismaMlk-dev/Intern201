import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import heroStudio from "@/assets/hero-studio.jpg";
import craftWorkspace from "@/assets/craft-workspace.jpg";
import cameraHands from "@/assets/camera-hands.jpg";
import podcastMic from "@/assets/podcast-mic.jpg";
import editorWorking from "@/assets/editor-working.jpg";
import designThumb from "@/assets/design-thumb.jpg";
import courseLaptop from "@/assets/course-laptop.jpg";
import portraitEducator from "@/assets/portrait-educator.jpg";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Portfolio — Quiet Theory" },
      { name: "description", content: "Selected work: YouTube long-form, Shorts, courses, and branded educational media." },
      { property: "og:title", content: "Portfolio — Quiet Theory" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

const filters = ["All", "Long-form", "Shorts", "Courses", "Thumbnails"];

const projects = [
  { title: "The Mind Behind Habits", cat: "Long-form", views: "1.2M", img: editorWorking, tag: "Psychology" },
  { title: "Why We Procrastinate", cat: "Shorts", views: "480k", img: portraitEducator, tag: "Faceless" },
  { title: "Intro to Machine Learning", cat: "Courses", views: "220k", img: courseLaptop, tag: "Course" },
  { title: "The Study Method Series", cat: "Long-form", views: "890k", img: craftWorkspace, tag: "Series" },
  { title: "Focus in 60 Seconds", cat: "Shorts", views: "3.4M", img: cameraHands, tag: "Viral" },
  { title: "Startup Storytelling", cat: "Thumbnails", views: "—", img: designThumb, tag: "Design" },
  { title: "Quiet Voices Podcast", cat: "Long-form", views: "310k", img: podcastMic, tag: "Podcast" },
  { title: "Coding for Educators", cat: "Courses", views: "150k", img: heroStudio, tag: "Educator" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-hero relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-accent">
            <span className="inline-block h-px w-7 bg-accent/60" />
            Selected work
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.02] sm:text-7xl">
            Videos that <em className="text-gradient not-italic">move minds.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            A snapshot of channels, courses, and campaigns we've helped bring to life.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-28">
        <div className="mb-12 flex flex-wrap justify-center gap-1.5">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition-all ${
                i === 0
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border/60 text-muted-foreground hover:border-accent/60 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group overflow-hidden rounded-sm border border-border/60 bg-card/30 transition-all hover:border-accent/60 ${
                i % 5 === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Play className="h-5 w-5 fill-current" />
                  </div>
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[0.65rem] uppercase tracking-widest backdrop-blur">{p.tag}</span>
                <span className="absolute right-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[0.65rem] uppercase tracking-widest backdrop-blur">
                  {p.views}
                </span>
              </div>
              <div className="border-t border-border/60 p-6">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-accent">{p.cat}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 border-t border-border/60 pt-16 text-center">
          <h3 className="mx-auto max-w-lg font-display text-3xl sm:text-4xl">Want your channel featured next?</h3>
          <div className="mt-8">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Start a project <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
