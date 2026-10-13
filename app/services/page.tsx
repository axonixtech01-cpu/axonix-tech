import React from 'react';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard, ServiceItem } from '@/components/ServiceCard';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, Terminal, Zap, Code2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services — Specialized Web Design & Engineering',
  description:
    'Discover Axonix Tech services: bespoke website design, responsive Next.js development, high-impact landing pages, UI/UX prototyping, and modern website redesigns.',
  openGraph: {
    title: 'Services | Axonix Tech',
    description: 'Bespoke web design and responsive engineering for growing brands and businesses.',
  },
};

const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    iconName: 'palette',
    title: 'Website Design',
    badge: 'Visual Architecture',
    shortDesc: 'Bespoke, brand-aligned visual design crafted for clarity and credibility.',
    fullDesc: 'We construct digital layouts that embody your brand identity with precision. Starting with structure and information hierarchy, we design clean desktop and mobile interfaces that establish immediate authority and respect among your visitors.',
    deliverables: [
      'Custom visual system and component guidelines',
      'High-fidelity mobile and desktop Figma layouts',
      'Tailored color harmony and typography hierarchy',
      'Accessible contrast standards for all users'
    ],
    techStack: ['Figma', 'Visual Identity', 'Typography', 'Color Systems']
  },
  {
    id: 'responsive-dev',
    iconName: 'responsive',
    title: 'Responsive Website Development',
    badge: 'Core Engineering',
    shortDesc: 'Lightning-fast, mobile-first code built with Next.js and Tailwind CSS.',
    fullDesc: 'We build websites using modern web standards. By utilizing Next.js App Router and semantic HTML5, your website runs smoothly across narrow 360px mobile screens, tablets, and 4K displays without layout breakage or clunky delays.',
    deliverables: [
      'Clean Next.js App Router codebase',
      'Tailwind CSS mobile-first responsive styling',
      'Fluid layouts tested across 360px–1920px viewports',
      'Production build optimized for Vercel edge delivery'
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 'landing-pages',
    iconName: 'landing',
    title: 'Landing Pages',
    badge: 'Focused Engagement',
    shortDesc: 'High-impact single-page experiences focused on clear messaging and direct action.',
    fullDesc: 'For businesses launching a new campaign, promoting a specific coaching batch, or running promotional ads, we craft focused landing pages. Every section is organized logically to guide visitors smoothly toward phone calls, WhatsApp messages, or contact inquiries.',
    deliverables: [
      'Singular focus architecture without navigational clutter',
      '1-Tap direct WhatsApp and phone inquiry triggers',
      'Sub-second first contentful paint (FCP)',
      'Clean showcase cards for offerings and services'
    ],
    techStack: ['React', 'Semantic HTML5', 'Next.js', 'Performance Tuning']
  },
  {
    id: 'redesign',
    iconName: 'redesign',
    title: 'Website Redesign',
    badge: 'Modernization',
    shortDesc: 'Modernizing outdated, sluggish websites into sleek, responsive digital assets.',
    fullDesc: 'If your current website was built years ago on a sluggish template or fails to look good on modern smartphones, we rebuild it from the ground up. We preserve your existing content and core branding while upgrading the speed, design system, and code quality to contemporary standards.',
    deliverables: [
      'Comprehensive audit of current site shortcomings',
      'Modern dark/light aesthetic overhaul',
      'Elimination of legacy plugins and script bloat',
      'Modern mobile responsiveness overhaul'
    ],
    techStack: ['Code Migration', 'Next.js', 'Tailwind CSS', 'Asset Optimization']
  },
  {
    id: 'uiux',
    iconName: 'uiux',
    title: 'UI/UX Design',
    badge: 'User Journey',
    shortDesc: 'User journey mapping, intuitive information hierarchy, and interface design.',
    fullDesc: 'Great design is about how effortlessly a visitor finds what they need. We map out user journeys, navigation flow, and screen interactions before development begins. This ensures prospective clients find your menus, fees, or contact details without confusion.',
    deliverables: [
      'User journey wireframing and user flow diagrams',
      'Interactive Figma prototypes for client preview',
      'Micro-interaction and button feedback design',
      'Logical content placement and readable typography'
    ],
    techStack: ['Figma', 'Wireframing', 'UX Research', 'Prototyping']
  },
  {
    id: 'business-sites',
    iconName: 'business',
    title: 'Portfolio & Business Websites',
    badge: 'Digital Presence',
    shortDesc: 'Complete digital presence for coaching institutes, restaurants, and local businesses.',
    fullDesc: 'A complete multi-page web platform designed to serve as your digital headquarters. Ideal for coaching centres highlighting courses and results, restaurants showcasing menus and ambiance, or local enterprises establishing a credible online storefront.',
    deliverables: [
      'Multi-page architecture (Home, About, Offerings, Contact)',
      'Clear location maps and operational hours integration',
      'Domain and DNS configuration assistance',
      'Direct contact integration with email and WhatsApp'
    ],
    techStack: ['Next.js', 'SEO Metadata', 'Google Maps Embeds', 'Vercel']
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col py-12 sm:py-16 lg:py-20 tech-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-axon-blue/30 bg-axon-blue/10 px-3.5 py-1 text-xs font-mono text-axon-accent">
            <span>ENGINEERING &amp; DESIGN CATALOG</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-axon-text">
            Specialized Services Built for Purpose
          </h1>
          <p className="text-base sm:text-lg text-axon-muted leading-relaxed">
            We do not use bloated templates or one-size-fits-all builders. Every website is custom-architected to give your brand a fast, distinct, and reliable digital presence.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ALL_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} detailed={true} />
          ))}
        </div>

        {/* Realistic Technical Standards Banner */}
        <div className="mt-20 rounded-2xl border border-axon-border bg-axon-surface/80 p-8 sm:p-10 backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-axon-blue">
                <Terminal className="h-4 w-4" />
                <span>OUR CODE STANDARDS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-axon-text">
                Honest Engineering. Zero Marketing Hype.
              </h2>
              <p className="text-sm text-axon-muted leading-relaxed">
                We believe in straightforward professional relationships. We do not promise magical overnight rankings or guaranteed millions in sales—because no honest engineer can. What we DO guarantee is clean, well-tested code, sub-1.5s mobile loading, accessible design, and complete transparency throughout the project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-axon-text">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-axon-blue" />
                  <span>100% Mobile Responsive</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-axon-blue" />
                  <span>Semantic &amp; Accessible HTML</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-axon-blue" />
                  <span>Next.js Edge Speed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-axon-blue" />
                  <span>Full Client Code Ownership</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center rounded-xl border border-axon-border bg-axon-bg p-6 text-center space-y-4">
              <span className="font-mono text-xs text-axon-dim uppercase">NEED A CUSTOM SCOPE?</span>
              <p className="text-sm text-axon-muted">
                Have a unique requirement like a custom institute portal or multi-location restaurant menu? Let’s review your specifications.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-axon-blue px-6 py-3 text-sm font-semibold text-axon-bg shadow-glow-sm hover:bg-axon-accent transition-all duration-200"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
