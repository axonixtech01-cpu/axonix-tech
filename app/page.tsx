import React from 'react';
import Link from 'next/link';
import { AxVisual } from '@/components/AxVisual';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard, ServiceItem } from '@/components/ServiceCard';
import { ProjectCard, ProjectData } from '@/components/ProjectCard';
import { ProcessSection } from '@/components/ProcessSection';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  ShieldCheck, 
  Smartphone, 
  Zap,
  Mail,
  Instagram
} from 'lucide-react';

// Total number of services listed in ALL_SERVICES on /services.
// Update this if services are added to or removed from that page.
const TOTAL_SERVICE_COUNT = 8;

const FEATURED_SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    iconName: 'palette',
    title: 'Website Design',
    badge: 'Core Service',
    shortDesc: 'Bespoke, brand-aligned visual design crafted for clarity and credibility. We architect layouts that command respect and clearly communicate your value.',
    fullDesc: 'Custom layout design tailored to your specific brand identity. We craft responsive wireframes, select typography, and build high-contrast color palettes.',
    deliverables: [
      'Custom visual layout architecture',
      'Mobile & desktop responsive layouts',
      'High-contrast typography & color palette',
      'Brand design token guidelines'
    ],
    techStack: ['Figma', 'Design Systems', 'CSS Grid']
  },
  {
    id: 'responsive-dev',
    iconName: 'responsive',
    title: 'Responsive Web Development',
    badge: 'Engineering',
    shortDesc: 'Performance-focused, mobile-first code built with Next.js and Tailwind CSS. Fluid across 360px smartphones, tablets, and wide monitors.',
    fullDesc: 'Production-ready web development adhering to semantic HTML5 standards and lightweight architecture for maximum speed.',
    deliverables: [
      'Next.js App Router architecture',
      'Tailwind CSS responsive design',
      'Optimized asset loading & caching',
      'Full cross-browser compatibility'
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 'landing-pages',
    iconName: 'landing',
    title: 'Landing Pages',
    badge: 'High Impact',
    shortDesc: 'Single-page experiences designed with clear messaging, structured product highlights, and direct action triggers for calls or WhatsApp inquiries.',
    fullDesc: 'Focused, distraction-free landing pages optimized for rapid engagement and clear customer pathways.',
    deliverables: [
      'Strategic visual hierarchy',
      '1-Tap WhatsApp & phone triggers',
      'Fast mobile viewport rendering',
      'Social proof & offering sections'
    ],
    techStack: ['React', 'Semantic HTML5', 'Vercel']
  },
  {
    id: 'redesign',
    iconName: 'redesign',
    title: 'Website Redesign',
    badge: 'Modernization',
    shortDesc: 'Modernizing outdated, sluggish websites into sleek, responsive digital assets while preserving your existing content and core branding.',
    fullDesc: 'We rebuild outdated or template-heavy websites with a modern design system, cleaner code and proper mobile responsiveness.',
    deliverables: [
      'Audit of current site shortcomings',
      'Modern visual design overhaul',
      'Removal of legacy plugin and script bloat',
      'Mobile responsiveness overhaul'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Code Migration']
  },
  {
    id: 'ppt-design',
    iconName: 'presentation',
    title: 'PPT & Presentation Design',
    badge: 'New Service',
    shortDesc: 'Clear, visually compelling presentations that turn complex information into a polished story — for students, educators, startups and businesses.',
    fullDesc: 'Structured, professional slide design with strong visual hierarchy, readability, consistency and storytelling.',
    deliverables: [
      'PowerPoint slide design & formatting',
      'Academic & educational project decks',
      'Business proposals & startup pitch decks',
      'Charts, diagrams & visual storytelling'
    ],
    techStack: ['PowerPoint', 'Visual Storytelling', 'Information Design']
  },
  {
    id: 'chatbot-development',
    iconName: 'chatbot',
    title: 'Chatbot Development & AI Integration',
    badge: 'New Service',
    shortDesc: 'Useful website chatbots that help visitors find information and start conversations with businesses — from rule-based widgets to AI assistants.',
    fullDesc: 'Website chatbots for FAQs, service information, basic enquiries and lead capture, with optional AI API integration when agreed.',
    deliverables: [
      'FAQ & business-information chatbot',
      'Basic lead-capture conversation flow',
      'Mobile-friendly chat interface',
      'AI API integration when required & agreed'
    ],
    techStack: ['Chat UI', 'Conversation Design', 'API Integration']
  }
];

const FEATURED_CONCEPTS: ProjectData[] = [
  {
    id: 'aura-dining',
    title: 'Aura Dining & Lounge',
    tagline: 'Modern Hospitality Web Experience',
    category: 'Restaurant & Cafe',
    badge: 'Concept Project',
    description: 'An ambient, dark-themed culinary website demo designed for modern cafes and restaurants. Features an interactive food & cocktail menu, quick table reservation flow, and instant WhatsApp ordering integration.',
    highlights: ['Interactive Menu Preview', 'WhatsApp Table Booking', 'Fast Mobile Menu Access'],
    mockupType: 'restaurant',
    colorTheme: '#F59E0B'
  },
  {
    id: 'apex-academy',
    title: 'Apex Academy Portal',
    tagline: 'Academic Course & Admissions Hub',
    category: 'Coaching Institute',
    badge: 'Concept Project',
    description: 'A structured, high-trust educational demo site tailored for coaching centers and training academies. Highlights upcoming batches, competitive exam streams (JEE/NEET), faculty credentials, and quick inquiry forms.',
    highlights: ['Batch Schedules & Fees', 'Faculty Showcase Grid', 'Direct Admission Inquiries'],
    mockupType: 'coaching',
    colorTheme: '#00B4FF'
  },
  {
    id: 'synthetix-cloud',
    title: 'Synthetix Cloud Engine',
    tagline: 'SaaS & Developer Infrastructure',
    category: 'Tech Startup',
    badge: 'Concept Project',
    description: 'A cyber-minimal product showcase demo for technology startups and developer tools. Built with dark-mode telemetry counters, interactive code snippets, architecture highlights, and lightweight documentation styling.',
    highlights: ['Live Code Snippets', 'Telemetry Counter Cards', 'High-Trust Tech Aesthetic'],
    mockupType: 'startup',
    colorTheme: '#36C5FF'
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 tech-grid-bg">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-glow pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Content Column */}
            <div className="space-y-6 text-center lg:col-span-7 lg:text-left">
              
              {/* Agency Tagline Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-axon-blue/30 bg-axon-surface/80 px-4 py-1.5 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-axon-blue animate-pulse" />
                <span className="text-xs font-mono font-medium tracking-wide text-axon-accent">
                  YOUR VISION. OUR CODE.
                </span>
              </div>

              {/* Primary Required Headline */}
              <h1 className="text-3xl font-black tracking-tight text-axon-text sm:text-5xl lg:text-5xl xl:text-6xl uppercase leading-tight sm:leading-none">
                WE BUILD DIGITAL <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-axon-text via-axon-blue to-axon-accent">
                  EXPERIENCES
                </span>{' '}
                THAT MOVE <br className="hidden sm:inline" />
                BUSINESSES FORWARD.
              </h1>

              {/* Supporting Text */}
              <p className="max-w-2xl text-base sm:text-lg text-axon-muted leading-relaxed mx-auto lg:mx-0">
                Axonix Tech designs and engineers modern responsive websites, professional presentations, and website chatbots for businesses, coaching centres, restaurants, students, and growing brands. Performance-focused, engineered for mobile screens, and built to turn attention into meaningful client enquiries.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-axon-blue px-7 py-3.5 text-base font-semibold text-axon-bg shadow-glow-sm transition-all duration-200 hover:bg-axon-accent hover:shadow-glow-md active:scale-98"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-axon-border bg-axon-surface/80 px-7 py-3.5 text-base font-medium text-axon-text transition-all duration-200 hover:border-axon-blue/50 hover:bg-axon-surface active:scale-98"
                >
                  <span>Explore Our Work</span>
                </Link>
              </div>

              {/* Agency Core Highlights */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-axon-border/80 text-left">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-axon-blue shrink-0" />
                  <span className="text-xs text-axon-muted">Mobile-First (360px+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-axon-accent shrink-0" />
                  <span className="text-xs text-axon-muted">Performance-Focused</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="text-xs text-axon-muted">Zero Template Bloat</span>
                </div>
              </div>

            </div>

            {/* Right Graphic Column: Bespoke AX Terminal Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <AxVisual />
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES PREVIEW SECTION */}
      <section className="py-20 bg-axon-surface/40 border-t border-axon-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              align="left"
              badge="// AGENCY CAPABILITIES"
              title="Targeted Solutions for Growing Businesses"
              subtitle="From websites for local institutes, dining spots and tech ventures to polished presentation decks and helpful website chatbots — purposeful digital work tailored to your needs."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-axon-blue hover:text-axon-accent transition-colors self-start md:self-end"
            >
              <span>View All {TOTAL_SERVICE_COUNT} Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED CONCEPT PROJECTS SECTION */}
      <section className="py-20 bg-axon-bg border-t border-axon-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              align="left"
              badge="// PORTFOLIO DEMONSTRATIONS"
              title="Featured Concept Projects"
              subtitle="Demonstrating our design craft, mobile responsiveness, and industry-tailored interface structures."
            />
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-axon-blue hover:text-axon-accent transition-colors self-start md:self-end"
            >
              <span>Explore All Concepts</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {FEATURED_CONCEPTS.map((concept) => (
              <ProjectCard key={concept.id} project={concept} />
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-axon-border bg-axon-surface/50 p-4 text-center text-xs text-axon-muted font-mono">
            <span>Notice: Concept projects are original design demonstrations engineered by Axonix Tech to showcase domain-specific capabilities.</span>
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <ProcessSection />

      {/* 5. FINAL CONTACT CTA SECTION */}
      <section className="relative py-20 bg-axon-surface border-t border-axon-border overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 radial-glow pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-axon-blue/30 bg-axon-blue/10 px-4 py-1.5 text-xs font-mono text-axon-accent">
            <span>READY TO ELEVATE YOUR DIGITAL PRESENCE?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-axon-text">
            Let’s Build Something Exceptional Together.
          </h2>

          <p className="max-w-2xl mx-auto text-base text-axon-muted leading-relaxed">
            Whether you run a coaching institute in need of students, a restaurant looking for table bookings, or a startup preparing a pitch deck—we design the digital experience your business deserves.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-axon-blue px-8 py-4 text-base font-semibold text-axon-bg shadow-glow-sm transition-all duration-200 hover:bg-axon-accent hover:shadow-glow-md active:scale-98"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="mailto:Axonix.tech01@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-axon-border bg-axon-bg px-8 py-4 text-base font-medium text-axon-text transition-all duration-200 hover:border-axon-blue/50 hover:bg-axon-surface active:scale-98"
            >
              <Mail className="h-5 w-5 text-axon-blue" />
              <span>Axonix.tech01@gmail.com</span>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-axon-dim font-mono">
            <span>Direct Instagram: <a href="https://www.instagram.com/axo_nixtech/" target="_blank" rel="noopener noreferrer" className="text-axon-accent hover:underline">@axo_nixtech</a></span>
            <span>•</span>
            <span>Fast 24h Response</span>
          </div>
        </div>
      </section>

    </div>
  );
}
