import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Compass, Figma, Code2, Rocket } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: Compass,
    title: 'Discovery & Architecture',
    desc: 'We examine your business model, target audience, and primary website objectives. We establish site structure, content hierarchy, and technical scope before writing any code.',
  },
  {
    step: '02',
    icon: Figma,
    title: 'Interface Prototyping',
    desc: 'We craft high-fidelity desktop and mobile wireframes in Figma. You get to review typography, color harmony, and page layouts to ensure the design aligns with your brand.',
  },
  {
    step: '03',
    icon: Code2,
    title: 'Modern Development',
    desc: 'We engineer your site using Next.js, React, and Tailwind CSS. Clean semantics, responsive breakpoints, fast loading speeds, and accessible contrast standards are baked into the core.',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Audit & Deployment',
    desc: 'We perform mobile responsiveness tests, Lighthouse performance audits, and deploy to fast, reliable global hosting. You receive full code ownership and launch guidance.',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-axon-bg border-t border-axon-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal>
        <SectionHeading
          badge="// EXECUTION PROTOCOL"
          title="Engineered for Precision & Speed"
          subtitle="Our structured development lifecycle eliminates ambiguity, ensures rapid delivery, and produces clean, maintainable digital assets."
        />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                data-reveal
                data-reveal-delay={index}
                data-spotlight
                className="relative rounded-2xl border border-axon-border bg-axon-surface/60 p-6 transition-all duration-300 hover:border-axon-blue/40 hover:bg-axon-surface"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between pb-4 border-b border-axon-border/60">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-axon-bg border border-axon-border text-axon-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-2xl font-black text-axon-dim/60">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-axon-text">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-axon-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
