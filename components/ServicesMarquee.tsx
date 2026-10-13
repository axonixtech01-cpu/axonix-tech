import React from 'react';
import {
  Globe,
  Flame,
  Presentation,
  Bot,
  LayoutGrid,
  RefreshCw,
  BriefcaseBusiness,
  Smartphone,
  Code2,
  Search,
  Zap,
  Palette,
} from 'lucide-react';

const SERVICE_ITEMS = [
  { label: 'Business Websites', Icon: Globe },
  { label: 'Landing Pages', Icon: Flame },
  { label: 'PPT & Pitch Decks', Icon: Presentation },
  { label: 'Website Chatbots', Icon: Bot },
  { label: 'UI/UX Design', Icon: LayoutGrid },
  { label: 'Website Redesign', Icon: RefreshCw },
  { label: 'Portfolio Sites', Icon: BriefcaseBusiness },
];

const CRAFT_ITEMS = [
  { label: 'Mobile-First', Icon: Smartphone },
  { label: 'Next.js + React', Icon: Code2 },
  { label: 'SEO Basics Built In', Icon: Search },
  { label: 'Performance-Focused', Icon: Zap },
  { label: 'Custom Design', Icon: Palette },
  { label: 'Full Code Ownership', Icon: Code2 },
];

type Item = (typeof SERVICE_ITEMS)[number];

function Row({ items, reverse = false, small = false }: { items: Item[]; reverse?: boolean; small?: boolean }) {
  // Content is duplicated so the loop is seamless; the copy is hidden from screen readers.
  const renderItems = (hidden: boolean) =>
    items.map(({ label, Icon }) => (
      <li
        key={`${label}-${hidden ? 'b' : 'a'}`}
        aria-hidden={hidden || undefined}
        className={`flex shrink-0 items-center gap-2 ${
          small
            ? 'px-4 text-xs font-mono text-axon-dim'
            : 'mx-2 rounded-full border border-axon-border bg-axon-surface/80 px-4 py-2 text-sm font-semibold text-axon-text'
        }`}
      >
        <Icon className={small ? 'h-3.5 w-3.5 text-axon-blue/70' : 'h-4 w-4 text-axon-blue'} aria-hidden="true" />
        <span>{label}</span>
        {small && <span className="pl-4 text-axon-blue/40" aria-hidden="true">✦</span>}
      </li>
    ));

  return (
    <div className={`marquee ${reverse ? 'marquee-reverse' : ''}`}>
      <ul className={`marquee-track ${small ? 'marquee-slow' : ''}`}>
        {renderItems(false)}
        {renderItems(true)}
      </ul>
    </div>
  );
}

/** Endless scrolling ribbon of services (pure CSS animation, pauses on hover). */
export const ServicesMarquee: React.FC = () => {
  return (
    <section aria-label="What we build" className="relative border-y border-axon-border bg-axon-bg py-5 space-y-3">
      <Row items={SERVICE_ITEMS} />
      <Row items={CRAFT_ITEMS} reverse small />
    </section>
  );
};
