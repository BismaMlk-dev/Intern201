import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Play, Youtube, Film, PenTool, Mic, GraduationCap,
  Sparkles, Zap, Users, Globe2, Star, Check
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import heroStudio from "@/assets/hero-studio.jpg";
import craftWorkspace from "@/assets/craft-workspace.jpg";
import portraitEducator from "@/assets/portrait-educator.jpg";
import cameraHands from "@/assets/camera-hands.jpg";
import directorReview from "@/assets/director-review.jpg";
import flatlayDesk from "@/assets/flatlay-desk.jpg";
import onSetTeacher from "@/assets/on-set-teacher.jpg";
import colorGrade from "@/assets/color-grade.jpg";
import podcastMic from "@/assets/podcast-mic.jpg";
import editorWorking from "@/assets/editor-working.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Quiet Theory — Educational Media Studio" },
      { property: "og:title", content: "Quiet Theory — Learn. Create. Inspire." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const stats = [
  { value: "500+", label: "Videos edited" },
  { value: "40M+", label: "Views generated" },
  { value: "120+", label: "Creators served" },
  { value: "18", label: "Countries reached" },
];

const services = [
  { icon: Youtube, title: "YouTube editing", desc: "Long-form retention edits tuned for watch-time and CTR." },
  { icon: Film, title: "Shorts & Reels", desc: "Scroll-stopping vertical cuts built to loop and travel." },
  { icon: GraduationCap, title: "Course production", desc: "Cohesive lesson series with clean visuals and pacing." },
  { icon: Mic, title: "Podcast editing", desc: "Broadcast-quality audio with tight, listenable pacing." },
  { icon: PenTool, title: "Thumbnails & motion", desc: "Click-worthy thumbnails and motion graphics that hold attention." },
  { icon: Sparkles, title: "AI content assist", desc: "Scripts, SEO, and workflows accelerated with AI." },
];

const differentiators = [
  { icon: Users, title: "Personal attention", desc: "One dedicated editor. Direct communication. No account managers." },
  { icon: Zap, title: "Faster turnarounds", desc: "48–72 hour drafts on most projects, without sacrificing polish." },
  { icon: Globe2, title: "Built for scale", desc: "Systems and templates that keep your channel consistent as you grow." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-accent">
      <span className="inline-block h-px w-7 bg-accent/60" />
      {children}
    </p>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO — editorial split */}
      <section className="bg-hero relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Eyebrow>Est. 2022 · Educational media studio</Eyebrow>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
              Knowledge, made <em className="text-gradient not-italic">unforgettable.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Quiet Theory is a boutique studio producing cinematic YouTube videos, online courses,
              and branded educational media for the world's most thoughtful creators and organizations.
            </p>

            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Start a project <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <Link to="/portfolio"><Play className="h-4 w-4" /> Watch our work</Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {[cameraHands, portraitEducator, craftWorkspace].map((src, i) => (
                  <img key={i} src={src} alt="" className="h-8 w-8 rounded-full border-2 border-background object-cover" />
                ))}
              </div>
              <span>Trusted by 120+ creators across 18 countries</span>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-sm border border-border/60 shadow-elegant">
              <img src={heroStudio} alt="Cinematic editing studio at dusk" className="aspect-[4/3] w-full object-cover" width={1600} height={1008} />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
            </div>
            <div className="glass absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-sm p-5 shadow-elegant md:block">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="mt-2 font-display text-lg italic leading-tight">"Every video feels like our best work."</p>
              <p className="mt-2 text-[0.7rem] uppercase tracking-widest text-muted-foreground">— Dr. A. Osei</p>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="relative mx-auto mt-24 max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-y-8 border-y border-border/60 py-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl">
                  <span className="text-gradient">{s.value}</span>
                </div>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED / PRESS BAND */}
      <section className="border-y border-border/60 bg-card/20 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
            Featured in · Trusted by teams at
          </p>
          <div className="mt-6 grid grid-cols-2 items-center gap-8 opacity-70 sm:grid-cols-3 md:grid-cols-6">
            {["FORBES", "THE ATLANTIC", "TED", "MIT PRESS", "NAT GEO", "WIRED"].map((n) => (
              <div key={n} className="text-center font-display text-xl tracking-[0.15em] text-muted-foreground">
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / DIFFERENTIATORS */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <Eyebrow>Our philosophy</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
                The craft of a solo studio. <em className="text-gradient not-italic">The scale of an agency.</em>
              </h2>
            </div>
            <p className="text-muted-foreground md:col-span-6 md:col-start-7">
              We built Quiet Theory to prove that thoughtful, hand-crafted media can compete —
              and win — against high-volume production. Every project is treated as a portfolio piece.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-3">
            {differentiators.map((d, i) => (
              <div key={d.title} className="group bg-background p-10 transition-colors hover:bg-card">
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <d.icon className="mt-8 h-6 w-6 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-2xl">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
                Full-service educational media, end to end.
              </h2>
            </div>
            <Button asChild variant="glass">
              <Link to="/services">All services <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-sm border border-border/60 bg-card/40 p-8 transition-all hover:border-accent/60 hover:bg-card"
              >
                <s.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ArrowRight className="absolute bottom-8 right-8 h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN FRAME — editorial photo mosaic */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <Eyebrow>In frame</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
                Inside the studio.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              A quiet look at how we work — from first storyboard to final color pass.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-6 grid-rows-2 gap-3 md:gap-4">
            <figure className="col-span-6 row-span-2 overflow-hidden rounded-sm border border-border/60 md:col-span-3">
              <img src={onSetTeacher} alt="Educator being filmed on set" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </figure>
            <figure className="col-span-3 overflow-hidden rounded-sm border border-border/60 md:col-span-2">
              <img src={directorReview} alt="Director reviewing footage" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </figure>
            <figure className="col-span-3 overflow-hidden rounded-sm border border-border/60">
              <img src={flatlayDesk} alt="Production desk flat lay" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </figure>
            <figure className="col-span-3 overflow-hidden rounded-sm border border-border/60 md:col-span-2">
              <img src={podcastMic} alt="Studio podcast microphone" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </figure>
            <figure className="col-span-3 overflow-hidden rounded-sm border border-border/60">
              <img src={editorWorking} alt="Editor at work" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </figure>
          </div>
        </div>
      </section>

      {/* FEATURE — image + narrative */}
      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden rounded-sm border border-border/60 shadow-elegant">
              <img src={colorGrade} alt="Color grading in a professional edit suite" className="aspect-[4/3] w-full object-cover" loading="lazy" width={1600} height={1200} />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-transparent" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Eyebrow>Craft</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
              Every frame, considered.
            </h2>
            <p className="mt-6 text-muted-foreground">
              We start with the idea, not the timeline. Storyboards, references, and voice-guides
              come first — so by the time the edit begins, the video already has a point of view.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Dedicated senior editor on every project",
                "Written creative brief before any cut is made",
                "Two rounds of revisions, always included",
                "Delivered assets, source files, and archive",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 inline-block h-px w-6 bg-accent" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>The process</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">Simple. Focused. Repeatable.</h2>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden border-t border-b border-border/60 md:grid-cols-4">
            {[
              { n: "01", t: "Discovery", d: "We map goals, audience, and channel voice." },
              { n: "02", t: "Systemize", d: "Templates, style guides, and delivery cadence." },
              { n: "03", t: "Craft", d: "Dedicated editing with structured feedback." },
              { n: "04", t: "Publish", d: "SEO, analytics review, and strategy." },
            ].map((step, i) => (
              <div key={step.n} className={`p-8 ${i < 3 ? "md:border-r border-border/60" : ""}`}>
                <div className="font-display text-5xl text-accent/70">{step.n}</div>
                <h3 className="mt-6 font-display text-xl">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-5 md:items-center">
            <div className="relative overflow-hidden rounded-sm border border-border/60 shadow-elegant md:col-span-2">
              <img src={portraitEducator} alt="Dr. Amelia Osei" className="aspect-[4/5] w-full object-cover" loading="lazy" width={1200} height={1408} />
            </div>
            <div className="md:col-span-3">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-3xl italic leading-[1.15] md:text-4xl">
                "Quiet Theory turned our scattered lectures into a channel we're actually proud of.
                Every video feels like our best work."
              </blockquote>
              <div className="mt-8">
                <div className="font-display text-lg">Dr. Amelia Osei</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Founder, Learn With Amelia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="bg-hero relative overflow-hidden rounded-sm border border-border/60 p-12 text-center md:p-20">
            <div className="grid-pattern absolute inset-0 opacity-30" />
            <div className="relative">
              <Eyebrow>Let's begin</Eyebrow>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-[1.05] sm:text-6xl">
                Ready to publish your <em className="text-gradient not-italic">best work yet?</em>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
                Tell us about your channel or project. We'll send back a plan within 48 hours.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Start a project <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <Link to="/pricing"><Check className="h-4 w-4" /> See pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
