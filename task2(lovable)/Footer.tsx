import { Link } from "@tanstack/react-router";
import { Youtube, Instagram, Linkedin, Mail } from "lucide-react";
import logoAsset from "@/assets/quiet-theory-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logoAsset.url} alt="Quiet Theory" className="h-10 w-10 rounded-lg object-cover" />
              <span className="font-display text-lg font-semibold">
                Quiet<span className="text-accent"> Theory</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Educational media studio helping creators, educators, and organizations turn knowledge into content that resonates.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Learn. Create. Inspire.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="YouTube" className="glass rounded-lg p-2 text-muted-foreground hover:text-accent"><Youtube className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="glass rounded-lg p-2 text-muted-foreground hover:text-accent"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="glass rounded-lg p-2 text-muted-foreground hover:text-accent"><Linkedin className="h-4 w-4" /></a>
              <a href="mailto:hello@quiettheory.com" aria-label="Email" className="glass rounded-lg p-2 text-muted-foreground hover:text-accent"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Quiet Theory. All rights reserved.</p>
          <p>Built with intention.</p>
        </div>
      </div>
    </footer>
  );
}
