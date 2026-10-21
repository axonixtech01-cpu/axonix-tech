import React from 'react';
import Link from 'next/link';
import { Presentation, Bot, ArrowRight } from 'lucide-react';

const ITEMS = [
  {
    href: '/work/presentations',
    Icon: Presentation,
    label: 'PPT design samples',
    sub: 'Swipe through pitch deck, college project & business proposal slides',
    event: 'samples-ppt',
  },
  {
    href: '/demo/chatbot',
    Icon: Bot,
    label: 'Try the chatbot demo',
    sub: 'Ask about fees, timings or the menu — a live rule-based website chatbot',
    event: 'samples-chatbot',
  },
];

/** Two cards linking to the presentation samples and the chatbot demo. */
export const SamplesStrip: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div data-reveal className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${className}`}>
      {ITEMS.map(({ href, Icon, label, sub, event }) => (
        <Link
          key={href}
          href={href}
          data-spotlight
          data-tilt
          data-ripple
          data-umami-event={event}
          className="group relative flex items-center gap-4 rounded-2xl border border-axon-border bg-axon-surface/70 p-4 sm:p-5 transition-colors hover:border-axon-blue/50"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-axon-blue to-axon-accent text-axon-bg shadow-glow-sm">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm sm:text-base font-bold text-axon-text">{label}</span>
            <span className="mt-0.5 block text-xs text-axon-muted">{sub}</span>
          </span>
          <ArrowRight
            className="h-4 w-4 shrink-0 text-axon-blue transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      ))}
    </div>
  );
};
