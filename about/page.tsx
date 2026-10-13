import React from 'react';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import Link from 'next/link';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Terminal, 
  Cpu, 
  Smartphone, 
  ShieldCheck, 
  Layers,
  Sparkles,
  MessageSquareCode
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Engineering Philosophy & Standards',
  description:
    'Learn about Axonix Tech: our focus on modern design, responsive Next.js development, honest communication, and performance-first web experiences.',
  openGraph: {
    title: 'About Axonix Tech | Engineering Philosophy',
    description: 'Modern websites. Meaningful digital experiences. YOUR VISION. OUR CODE.',
  },
};

const PILLARS = [
  {
    icon: Smartphone,
    title: 'Mobile-First by Default',
    desc: 'Over 80% of local visitors in India and worldwide browse websites from a phone. We test every breakpoint starting from 360px wide devices upwards, ensuring zero horizontal scroll, instant touch targets, and legible typography on all screen sizes.',
  },
  {
    icon: Cpu,
    title: 'Modern Next.js & React Core',
    desc: 'We bypass heavy legacy website builders and clunky drag-and-drop systems. By writing clean code with Next.js App Router and Tailwind CSS, our websites load rapidly, remain secure, and score exceptionally well in performance audits.',
  },
  {
    icon: Target,
    title: 'Clarity Over Decoration',
    desc: 'A website should fulfill a specific business objective: enrolling students, booking dinner tables, or selling products. We structure pages so users immediately comprehend who you are, what you offer, and how to get in touch.',
  },
  {
    icon: MessageSquareCode,
    title: 'Direct Developer Collaboration',
    desc: 'You work directly with the designers and engineers building your website. There are no account managers, confusing jargon, or bureaucratic layers—just clear communication and rapid execution.',
  },
];

const STACK_ITEMS = [
  { name: 'Next.js 14+ (App Router)', type: 'Frontend Framework' },
  { name: 'React', type: 'UI Architecture' },
  { name: 'TypeScript', type: 'Type Safety & Stability' },
  { name: 'Tailwind CSS', type: 'Design System & Styling' },
  { name: 'Vercel Edge Network', type: 'Global Deployment & Speed' },
  { name: 'Figma', type: 'Interface Prototyping' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col py-12 sm:py-16 lg:py-20 tech-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-axon-blue/30 bg-axon-blue/10 px-3.5 py-1 text-xs font-mono text-axon-accent">
            <span>ABOUT AXONIX TECH</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-axon-text">
            Modern Websites. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-axon-text via-axon-blue to-axon-accent">
              Meaningful Digital Experiences.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-axon-muted leading-relaxed">
            Axonix Tech was founded on a simple, grounded reality: small businesses, coaching institutes, and local entrepreneurs deserve high-grade, responsive websites without the exorbitant price tags or bureaucratic bloat of traditional agencies.
          </p>
        </div>

        {/* Agency Mission Statement Card */}
        <div className="relative overflow-hidden rounded-2xl border border-axon-border bg-axon-surface/80 p-8 sm:p-12 mb-16 shadow-xl backdrop-blur-md">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <span className="font-mono text-8xl font-black text-axon-blue">AX</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-semibold text-axon-blue uppercase tracking-widest">
              OUR GUIDING PRINCIPLE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-axon-text">
              &ldquo;YOUR VISION. OUR CODE.&rdquo;
            </h2>
            <p className="text-sm sm:text-base text-axon-muted leading-relaxed">
              We do not believe in exaggerating claims, inflating team sizes, or claiming imaginary corporate awards. We are independent designers and developers passionate about writing pristine code and crafting sharp, functional digital interfaces.
            </p>
            <p className="text-sm sm:text-base text-axon-muted leading-relaxed">
              When you work with Axonix Tech, you get honest feedback on what your site needs, a clear timeline, and a modern website that you fully own.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Operation */}
        <div className="mb-20 space-y-8">
          <SectionHeading
            badge="// CORE PHILOSOPHY"
            title="How We Approach Every Project"
            subtitle="Four core commitments that define our engineering and design standards."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-axon-border bg-axon-surface/60 p-6 flex flex-col justify-between transition-all duration-300 hover:border-axon-blue/40 hover:bg-axon-surface"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-axon-bg border border-axon-border text-axon-blue mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-axon-text">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-axon-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Foundation */}
        <div className="rounded-2xl border border-axon-border bg-axon-surface/70 p-8 sm:p-10 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <span className="font-mono text-xs font-semibold text-axon-blue uppercase tracking-widest">
                TOOLCHAIN &amp; ARCHITECTURE
              </span>
              <h2 className="text-2xl font-bold text-axon-text mt-1">
                The Tech Stack Behind Our Sites
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-axon-muted max-w-md">
              We select modern, dependable technologies that offer long-term stability, zero vendor lock-in, and instant loading speeds.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {STACK_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-axon-border bg-axon-bg/80 p-3.5 text-center transition-colors hover:border-axon-blue/40"
              >
                <span className="block font-mono text-xs font-bold text-axon-text">
                  {item.name}
                </span>
                <span className="mt-1 block text-[10px] font-mono text-axon-dim">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-axon-text">
            Ready to discuss your project?
          </h2>
          <p className="text-sm text-axon-muted">
            Reach out via email or direct Instagram message. We respond with a practical project proposal within 24 hours.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-axon-blue px-7 py-3.5 text-sm font-semibold text-axon-bg shadow-glow-sm hover:bg-axon-accent hover:shadow-glow-md transition-all duration-200"
            >
              <span>Get in Touch With Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
