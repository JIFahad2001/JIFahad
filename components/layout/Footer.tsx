"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactData, socialLinks } from "@/content/contacts";

export function Footer() {
  const pathname = usePathname();
  const currentYear = 2026;

  // Do not render marketing footer on the full-screen CV Builder app
  if (pathname === "/cv-builder") {
    return null;
  }

  return (
    <footer className="site-footer border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">JI Fahad</h3>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-muted hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/cv" className="text-sm text-muted hover:text-primary transition-colors">CV</Link></li>
              <li><Link href="/cv-builder" className="text-sm text-muted hover:text-primary transition-colors">CV Builder</Link></li>
              <li><Link href="/works" className="text-sm text-muted hover:text-primary transition-colors">Works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Connect</h4>
            <ul className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-primary transition-colors"
                      aria-label={link.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted">
            &copy; {currentYear} JI Fahad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
