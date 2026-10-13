import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-axon-border bg-axon-surface/70 text-axon-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Info & Tagline */}
          <div className="md:col-span-2 lg:col-span-2 space-y-4">
            <BrandLogo size="lg" showTagline />
            <p className="max-w-md text-sm leading-relaxed text-axon-muted pt-2">
              Modern websites. Meaningful digital experiences. We design and engineer high-performance web platforms for growing businesses, startups, and institutions.
            </p>
            <div className="pt-2 text-xs font-mono text-axon-blue flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for new projects & collaborations</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-axon-text">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-axon-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-axon-blue">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="transition-colors hover:text-axon-blue">
                  Work / Concepts
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-axon-blue">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-axon-blue">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-axon-text">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/services#web-design" className="transition-colors hover:text-axon-blue">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/services#responsive-dev" className="transition-colors hover:text-axon-blue">
                  Responsive Web Dev
                </Link>
              </li>
              <li>
                <Link href="/services#landing-pages" className="transition-colors hover:text-axon-blue">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="/services#redesign" className="transition-colors hover:text-axon-blue">
                  Website Redesign
                </Link>
              </li>
              <li>
                <Link href="/services#business-sites" className="transition-colors hover:text-axon-blue">
                  Business Portals
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-axon-text">
              Direct Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:Axonix.tech01@gmail.com"
                  className="group flex items-center gap-2 text-axon-text transition-colors hover:text-axon-blue"
                  aria-label="Send email to Axonix Tech"
                >
                  <Mail className="h-4 w-4 text-axon-blue" />
                  <span className="truncate">Axonix.tech01@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/axo_nixtech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-axon-text transition-colors hover:text-axon-blue"
                  aria-label="Visit Axonix Tech on Instagram"
                >
                  <Instagram className="h-4 w-4 text-axon-accent" />
                  <span>@axo_nixtech</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-xs font-mono text-axon-dim">
                  RESPONSE TIME
                </span>
                <span className="text-xs text-axon-text">Within 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Honest Disclosure */}
        <div className="mt-12 border-t border-axon-border pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-axon-dim">
          <p>
            &copy; {currentYear} Axonix Tech. All rights reserved. &ldquo;YOUR VISION. OUR CODE.&rdquo;
          </p>
          <p className="max-w-md sm:text-right">
            Demo &amp; concept projects represent architectural design capability for portfolio demonstration.
          </p>
        </div>
      </div>
    </footer>
  );
};
