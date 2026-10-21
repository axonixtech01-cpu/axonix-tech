import React from 'react';
import Link from 'next/link';
import { SectionHeading } from './SectionHeading';
import { DiscountCallout } from './DiscountCallout';
import { Check, ShieldCheck, Instagram, ArrowRight } from 'lucide-react';
import { INSTAGRAM_DM_URL } from '@/lib/site';

const TIERS = [
  {
    name: 'Starter Launch',
    tagline: 'Ideal for coaching batch launches, single-product drops, or cafe menus.',
    price: '₹4,999',
    subtitle: 'One-time payment • No monthly builder fees',
    popular: false,
    turnaround: '3–5 Days Delivery',
    features: [
      'High-impact single-page responsive layout',
      'Mobile-first optimization (tested on 360px+ phones)',
      '1-Tap direct Instagram DM & call buttons',
      'Location map & opening hours section',
      'Deployment & hosting setup included',
      'Full source code ownership',
    ],
    ctaText: 'DM for Starter Plan',
    serviceParam: 'Starter Launch Website',
  },
  {
    name: 'Growth Business',
    tagline: 'Complete digital presence for institutes, dining spots, and local businesses.',
    price: '₹9,999',
    subtitle: 'One-time payment • Full multi-page website',
    popular: true,
    turnaround: '5–8 Days Delivery',
    features: [
      'Up to 5 custom pages (Home, About, Courses/Menu, Work, Contact)',
      'Interactive digital menu or course batch catalog',
      'SEO basics & social share previews',
      'Mobile-optimized touch interactions & fast loading',
      'Direct Instagram DM & email enquiry integration',
      'Deployment + custom domain (.in / .com) setup assistance',
      '14 days post-launch support & minor tweaks',
    ],
    ctaText: 'DM for Growth Plan',
    serviceParam: 'Growth Business Website',
  },
  {
    name: 'Custom Architecture',
    tagline: 'Tailored solutions for tech startups, developer tools, and complex platforms.',
    price: 'Custom Scope',
    subtitle: 'Milestone-based • Tailored specifications',
    popular: false,
    turnaround: 'Scope Dependent',
    features: [
      'Bespoke cyber-minimal or custom visual identity',
      'Complex UI/UX journey prototyping in Figma',
      'Interactive widgets, code snippet viewers, custom filters',
      'API integration & dynamic data architecture',
      'Performance optimization (Lighthouse 95+ as a target)',
      'Comprehensive codebase documentation & repo transfer',
    ],
    ctaText: 'Discuss Custom Scope',
    serviceParam: 'Custom Architecture Scope',
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="relative scroll-mt-20 py-20 bg-axon-bg border-t border-axon-border overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-72 radial-glow pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading
            badge="// TRANSPARENT PRICING"
            title="Affordable Packages for Real Businesses"
            subtitle="No agency retainers. No monthly website-builder fees. Pay once and fully own your website's code — plans start at ₹4,999."
          />
        </div>

        {/* Mobile: swipe carousel (recommended plan first). Desktop: 3-column grid. */}
        <div data-reveal className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 pt-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:mt-14 lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-8 lg:overflow-visible lg:px-0">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              data-spotlight
              data-tilt
              data-popular={tier.popular ? 'true' : undefined}
              className={`relative flex w-[86% max-w-sm shrink-0 snap-center flex-col justify-between rounded-2xl border p-6 sm:w-[60%] sm:p-8 lg:w-auto lg:max-w-none ${
                tier.popular
                  ? 'order-first border-axon-blue bg-axon-surface shadow-[0_0_35px_rgba(0,180,255,0.2)] lg:order-none'
                  : 'border-axon-border bg-axon-surface/60 hover:border-axon-blue/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-axon-blue px-3.5 py-0.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-axon-bg shadow-glow-sm">
                  Recommended for local businesses
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-axon-text">{tier.name}</h3>
                  <span className="shrink-0 rounded bg-axon-bg px-2 py-0.5 font-mono text-[10px] text-axon-dim border border-axon-border">
                    {tier.turnaround}
                  </span>
                </div>

                <p className="mt-2 text-xs text-axon-muted leading-relaxed">{tier.tagline}</p>

                <div className="mt-6 border-y border-axon-border/70 py-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-axon-text font-mono">{tier.price}</span>
                  </div>
                  <span className="mt-1 block text-[11px] text-axon-dim font-mono">{tier.subtitle}</span>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs text-axon-muted">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-axon-blue shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="mt-8 pt-4 border-t border-axon-border/60 space-y-2.5">
                <a
                  href={INSTAGRAM_DM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event={`pricing-dm-${tier.serviceParam.split(' ')[0].toLowerCase()}`}
                  data-ripple
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-lg py-3 text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                    tier.popular
                      ? 'btn-shine bg-axon-blue text-axon-bg shadow-glow-sm hover:bg-axon-accent'
                      : 'border border-axon-border bg-axon-bg text-axon-text hover:border-axon-blue/50 hover:bg-axon-surface'
                  }`}
                >
                  <Instagram className={`h-4 w-4 ${tier.popular ? 'text-axon-bg' : 'text-axon-accent'}`} aria-hidden="true" />
                  <span>{tier.ctaText}</span>
                </a>

                <Link
                  href={`/contact?service=${encodeURIComponent(tier.serviceParam)}`}
                  className="flex items-center justify-center gap-1 text-center text-[11px] font-mono text-axon-dim hover:text-axon-blue transition-colors"
                >
                  <span>Or submit a project brief</span>
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-1 text-center text-[11px] font-mono text-axon-dim lg:hidden" aria-hidden="true">
          ← Swipe to compare plans →
        </p>

        {/* Discount call-to-action */}
        <div className="mt-10 lg:mt-14">
          <DiscountCallout />
        </div>

        {/* Honest pricing policy notes */}
        <div className="mt-8 rounded-xl border border-axon-border bg-axon-surface/40 p-4 text-xs text-axon-muted max-w-3xl mx-auto flex items-start sm:items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <span>
            100% Transparency: 40% advance to start wireframing, balance on delivery. Domain names and any paid hosting
            are billed separately by the provider.
          </span>
        </div>

        <p className="mt-4 text-center text-[11px] sm:text-xs text-axon-dim max-w-2xl mx-auto leading-relaxed">
          Website packages cover website work only. PPT &amp; presentation design and chatbot development are quoted
          separately based on slide count, functionality, API requirements, and delivery scope.{' '}
          <Link href="/contact" className="text-axon-blue hover:text-axon-accent underline underline-offset-2">
            Request a quote
          </Link>
          .
        </p>
      </div>
    </section>
  );
};
