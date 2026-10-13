import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Tag,
  LayoutGrid,
  UtensilsCrossed,
  GraduationCap,
  Stethoscope,
  FileText,
  Instagram,
  Mail,
  ArrowUpRight,
  ChevronRight,
  Gift,
} from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';
import { NeuralBackground } from '@/components/NeuralBackground';
import { DiscountCallout } from '@/components/DiscountCallout';
import { CONTACT_EMAIL, INSTAGRAM_DM_URL, pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  path: '/links',
  title: 'Links — Websites, PPT Design & Chatbots',
  description:
    'All Axonix Tech links in one place: pricing, services, live website demos, project quotes, and direct contact on Instagram or email.',
  ogTitle: 'Axonix Tech — Links',
  ogDescription: 'Websites from ₹4,999 • PPT design • Chatbots. See pricing, live demos and ask for a discount.',
});

type LinkItem = {
  href: string;
  label: string;
  sub: string;
  Icon: React.ElementType;
  external?: boolean;
  highlight?: 'blue' | 'amber' | 'insta';
};

const LINKS: LinkItem[] = [
  { href: '/#pricing', label: 'See Pricing', sub: 'Websites from ₹4,999 • one-time payment', Icon: Tag, highlight: 'blue' },
  { href: '#discount', label: 'Ask for an Extra Discount', sub: 'Early clients & small businesses — just ask', Icon: Gift, highlight: 'amber' },
  { href: '/services', label: 'All Services', sub: 'Websites • Landing pages • PPT design • Chatbots', Icon: LayoutGrid },
  { href: '/demo/restaurant', label: 'Live Demo: Restaurant Website', sub: 'Digital menu, table booking', Icon: UtensilsCrossed },
  { href: '/demo/coaching', label: 'Live Demo: Coaching Institute', sub: 'Courses, fees, admission enquiries', Icon: GraduationCap },
  { href: '/demo/business', label: 'Live Demo: Clinic / Local Business', sub: 'Services, appointment booking', Icon: Stethoscope },
  { href: '/contact', label: 'Get a Free Quote', sub: 'Send your project brief in 2 minutes', Icon: FileText },
  { href: INSTAGRAM_DM_URL, label: 'DM on Instagram', sub: '@axo_nixtech', Icon: Instagram, external: true, highlight: 'insta' },
  { href: `mailto:${CONTACT_EMAIL}`, label: 'Email Us', sub: CONTACT_EMAIL, Icon: Mail, external: true },
];

const highlightClasses: Record<NonNullable<LinkItem['highlight']> | 'none', string> = {
  blue: 'border-axon-blue/60 bg-axon-blue/10 shadow-glow-sm',
  amber: 'border-amber-400/50 bg-amber-400/10',
  insta: 'border-rose-400/40 bg-gradient-to-r from-purple-600/15 via-rose-500/10 to-amber-500/15',
  none: 'border-axon-border bg-axon-surface/70',
};

const iconClasses: Record<NonNullable<LinkItem['highlight']> | 'none', string> = {
  blue: 'bg-axon-blue text-axon-bg',
  amber: 'bg-amber-400/20 text-amber-300',
  insta: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white',
  none: 'bg-axon-bg text-axon-blue border border-axon-border',
};

export default function LinksPage() {
  return (
    <div className="relative overflow-hidden tech-grid-bg">
      <div className="absolute inset-x-0 top-0 h-96 radial-glow pointer-events-none" aria-hidden="true" />
      <NeuralBackground className="absolute inset-0 h-full w-full" density={0.8} />

      <div className="relative mx-auto max-w-md px-4 py-10 sm:py-14">
        {/* Profile header */}
        <header className="flex flex-col items-center text-center">
          <div className="hero-enter hero-d1">
            <BrandLogo size="lg" />
          </div>
          <div className="hero-enter hero-d2 mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-mono text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Taking new projects
          </div>
          <h1 className="hero-enter hero-d3 mt-4 text-2xl font-black tracking-tight text-axon-text">
            YOUR VISION. <span className="text-transparent bg-clip-text bg-gradient-to-r from-axon-blue to-axon-accent">OUR CODE.</span>
          </h1>
          <p className="hero-enter-soft mt-2 text-sm text-axon-muted">
            Websites • PPT Design • Chatbots — websites from{' '}
            <strong className="font-mono text-axon-text">₹4,999</strong>
          </p>
        </header>

        {/* Link buttons */}
        <nav aria-label="Axonix Tech links" className="mt-8 space-y-3">
          {LINKS.map((item, index) => {
            const tone = item.highlight ?? 'none';
            const content = (
              <>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconClasses[tone]}`}>
                  <item.Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-axon-text">{item.label}</span>
                  <span className="block truncate text-[11px] text-axon-muted">{item.sub}</span>
                </span>
                {item.external ? (
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-axon-dim transition-colors group-hover:text-axon-blue" aria-hidden="true" />
                ) : (
                  <ChevronRight className="h-4 w-4 shrink-0 text-axon-dim transition-transform group-hover:translate-x-0.5 group-hover:text-axon-blue" aria-hidden="true" />
                )}
              </>
            );
            const className = `group relative flex items-center gap-3 rounded-xl border p-3 transition-colors hover:border-axon-blue/60 ${highlightClasses[tone]}`;

            return (
              <div key={item.label} data-reveal data-reveal-delay={Math.min(index, 6)}>
                {item.external ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    data-ripple
                    data-spotlight
                    className={className}
                  >
                    {content}
                  </a>
                ) : item.href.startsWith('#') ? (
                  <a href={item.href} data-ripple data-spotlight className={className}>
                    {content}
                  </a>
                ) : (
                  <Link href={item.href} data-ripple data-spotlight className={className}>
                    {content}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Discount call-to-action */}
        <section id="discount" aria-label="Discount" className="mt-10 scroll-mt-20">
          <DiscountCallout compact />
        </section>

        <p className="mt-8 text-center text-[11px] font-mono text-axon-dim">
          Demo websites are concept projects made to show our design &amp; development skills.
        </p>
      </div>
    </div>
  );
}
