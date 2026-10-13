import React from 'react';
import Link from 'next/link';
import { SectionHeading } from './SectionHeading';
import { Check, Sparkles, Send, ShieldCheck, ArrowRight, Instagram } from 'lucide-react';

const TIERS = [
  {
    name: 'Starter Launch',
    tagline: 'Ideal for coaching batch launches, single-product drops, or cafe menus.',
    price: '₹4,999',
    subtitle: 'One-time investment • Zero monthly builder fees',
    popular: false,
    turnaround: '3–5 Days Delivery',
    features: [
      'High-impact single-page responsive layout',
      'Mobile-first optimization (tested on 360px+ phones)',
      '1-Tap direct Instagram DM & call triggers',
      'Location map & operational hours integration',
      'Free global edge hosting setup on Vercel',
      'Full source code ownership',
    ],
    ctaText: 'DM for Starter Plan',
    serviceParam: 'Starter Launch Website',
  },
  {
    name: 'Growth Business',
    tagline: 'Complete digital presence for institutes, dining spots, and local businesses.',
    price: '₹9,999',
    subtitle: 'One-time investment • Full multi-page architecture',
    popular: true,
    turnaround: '5–8 Days Delivery',
    features: [
      'Up to 5 custom-engineered pages (Home, About, Courses/Menu, Work, Contact)',
      'Interactive digital menu or course batch catalog',
      'Search engine optimization (SEO) & OpenGraph previews',
      'Mobile-optimized touch interactions & fast loading',
      'Direct Instagram DM & email inquiry integration',
      'Free deployment + custom domain (.in / .com) setup assistance',
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
      'Lighthouse 95+ performance optimization',
      'Comprehensive codebase documentation & repo transfer',
    ],
    ctaText: 'Discuss Custom Scope',
    serviceParam: 'Custom Architecture Scope',
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-axon-bg border-t border-axon-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="// TRANSPARENT INVESTMENT"
          title="Affordable Packages for Real Businesses"
          subtitle="No exorbitant agency retainers. No recurring monthly website builder fees. You pay once and own your modern Next.js website forever."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {TIERS.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 transition-all duration-300 ${
                tier.popular
                  ? 'border-axon-blue bg-axon-surface shadow-[0_0_35px_rgba(0,180,255,0.2)] lg:-translate-y-2'
                  : 'border-axon-border bg-axon-surface/60 hover:border-axon-blue/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-axon-blue px-3.5 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider text-axon-bg shadow-glow-sm">
                  MOST POPULAR FOR LOCAL BUSINESSES
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-axon-text">
                    {tier.name}
                  </h3>
                  <span className="rounded bg-axon-bg px-2 py-0.5 font-mono text-[10px] text-axon-dim border border-axon-border">
                    {tier.turnaround}
                  </span>
                </div>

                <p className="mt-2 text-xs text-axon-muted leading-relaxed">
                  {tier.tagline}
                </p>

                <div className="mt-6 border-y border-axon-border/70 py-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-axon-text font-mono">
                      {tier.price}
                    </span>
                  </div>
                  <span className="mt-1 block text-[11px] text-axon-dim font-mono">
                    {tier.subtitle}
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs text-axon-muted">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-axon-blue shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="mt-8 pt-4 border-t border-axon-border/60 space-y-2.5">
                <a
                  href={`https://ig.me/m/axo_nixtech`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-lg py-3 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-98 ${
                    tier.popular
                      ? 'bg-axon-blue text-axon-bg shadow-glow-sm hover:bg-axon-accent'
                      : 'border border-axon-border bg-axon-bg text-axon-text hover:border-axon-blue/50 hover:bg-axon-surface'
                  }`}
                >
                  <Instagram className="h-4 w-4 text-axon-accent" />
                  <span>{tier.ctaText}</span>
                </a>

                <Link
                  href={`/contact?service=${encodeURIComponent(tier.serviceParam)}`}
                  className="block text-center text-[11px] font-mono text-axon-dim hover:text-axon-blue transition-colors"
                >
                  Or submit project brief &rarr;
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Honest Pricing Policy Note */}
        <div className="mt-12 rounded-xl border border-axon-border bg-axon-surface/40 p-4 text-center text-xs text-axon-muted max-w-2xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>
            100% Transparency: Advance payment of 40% to initiate wireframing, balance upon deployment and satisfaction.
          </span>
        </div>

      </div>
    </section>
  );
};
