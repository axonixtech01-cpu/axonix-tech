import React from 'react';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard, ProjectData } from '@/components/ProjectCard';
import Link from 'next/link';
import { ArrowRight, Layers, Sparkles, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Work & Concepts — Portfolio Demonstrations',
  description:
    'Explore concept projects engineered by Axonix Tech: restaurant menus, coaching institute portals, and technology startup landing pages.',
  openGraph: {
    title: 'Work & Concepts | Axonix Tech',
    description: 'Demonstrating web engineering and UI design capabilities across diverse industries.',
  },
};

const CONCEPT_PROJECTS: ProjectData[] = [
  {
    id: 'aura-dining',
    title: 'Aura Dining & Lounge',
    tagline: 'High-Conversion Hospitality Web Experience',
    category: 'Restaurant & Hospitality',
    badge: 'Concept Project',
    description: 'A culinary web concept crafted specifically for boutique restaurants, cafes, and fine dining establishments. Engineered with an interactive digital menu, ambient dark photography styling, fast mobile menu browsing, and a 1-tap WhatsApp table booking integration.',
    highlights: [
      'Interactive culinary menu with dietary tags',
      'Instant 1-tap WhatsApp reservation trigger',
      'Mobile-first responsive food presentation',
      'Zero PDF download hassle for diners'
    ],
    mockupType: 'restaurant',
    colorTheme: '#F59E0B'
  },
  {
    id: 'apex-academy',
    title: 'Apex Academy Portal',
    tagline: 'Student Admissions & Course Discovery Hub',
    category: 'Education & Coaching',
    badge: 'Concept Project',
    description: 'A structured, high-trust educational platform designed for coaching institutes, competitive exam centers (JEE, NEET, Foundation), and tutoring academies. Solves the confusion of batch schedules, faculty verification, and fee transparency while driving student enrollment leads.',
    highlights: [
      'Clear batch schedules & curriculum downloads',
      'Faculty credential & ranker showcase',
      'Direct admission enquiry form interface',
      'Optimized for mobile-browsing parents & students'
    ],
    mockupType: 'coaching',
    colorTheme: '#00B4FF'
  },
  {
    id: 'synthetix-cloud',
    title: 'Synthetix Cloud Engine',
    tagline: 'High-Tech SaaS & Developer Tooling Platform',
    category: 'Tech Startup & SaaS',
    badge: 'Concept Project',
    description: 'A futuristic product landing page tailored for modern tech startups, developer tooling, and cloud software. Features an interactive code snippet viewer, live latency telemetry counter cards, architecture diagrams, and a clean documentation layout.',
    highlights: [
      'Live code preview panel with syntax styling',
      'Telemetry counter cards & uptime status',
      'Cyber-tech aesthetic with restrained electric glow',
      'Clear developer sign-up callouts'
    ],
    mockupType: 'startup',
    colorTheme: '#36C5FF'
  }
];

export default function WorkPage() {
  return (
    <div className="flex flex-col py-12 sm:py-16 lg:py-20 tech-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-axon-blue/30 bg-axon-blue/10 px-3.5 py-1 text-xs font-mono text-axon-accent">
            <span>PORTFOLIO DEMONSTRATIONS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-axon-text">
            Concept Projects &amp; Capabilities
          </h1>
          <p className="text-base sm:text-lg text-axon-muted leading-relaxed">
            Here is a curated collection of demo projects engineered to demonstrate our visual craftsmanship, layout architecture, and industry-specific problem solving.
          </p>
        </div>

        {/* Honest Disclosure Banner */}
        <div className="mb-14 rounded-xl border border-axon-blue/30 bg-axon-surface/80 p-4 sm:p-5 flex items-start gap-3 backdrop-blur-md">
          <AlertCircle className="h-5 w-5 text-axon-blue shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-axon-muted space-y-1">
            <strong className="text-axon-text font-semibold">Honest Representation Policy:</strong>{' '}
            The items displayed below are <span className="text-axon-accent font-medium">Concept &amp; Demo Projects</span> designed and coded in-house by Axonix Tech. We do not invent fictitious clients, fake reviews, or exaggerated commercial metrics. These examples reflect the exact design and code standard we deliver for real clients.
          </div>
        </div>

        {/* 3 Showcase Projects */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {CONCEPT_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Breakdown of Why Concept Work Matters */}
        <div className="mt-20 rounded-2xl border border-axon-border bg-axon-surface/60 p-8 sm:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-axon-dim uppercase">
              <Layers className="h-4 w-4 text-axon-blue" />
              <span>CUSTOM SPECIFICATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-axon-text">
              Looking for a tailored design for your business?
            </h2>
            <p className="text-sm sm:text-base text-axon-muted leading-relaxed">
              We can build a bespoke demo or interactive preview for your specific brand before final deployment. Tell us your business type and requirements, and we will architect a modern digital experience for you.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-axon-blue px-7 py-3.5 text-sm font-semibold text-axon-bg shadow-glow-sm hover:bg-axon-accent hover:shadow-glow-md transition-all duration-200"
              >
                <span>Discuss Your Project With Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
