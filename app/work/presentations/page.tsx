import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Instagram, Presentation, AlertCircle, Check } from 'lucide-react';
import { DeckViewer } from '@/components/DeckViewer';
import { SAMPLE_DECKS } from '@/components/SampleDecks';
import { INSTAGRAM_DM_URL, pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  path: '/work/presentations',
  title: 'PPT Design Samples — Pitch Decks, College & Business Presentations',
  description:
    'Sample presentation designs by Axonix Tech: a startup pitch deck, a college project presentation and a business proposal. Custom PPT design delivered as editable files.',
  ogTitle: 'PPT & Presentation Design Samples | Axonix Tech',
  ogDescription: 'Swipe through sample pitch deck, college project and business proposal slides.',
});

const INCLUDED = [
  'Custom theme matched to your brand, college or topic',
  'Clean layouts, icons, diagrams and charts',
  'Consistent fonts, colours and spacing on every slide',
  'Delivered as an editable PowerPoint (.pptx) file',
];

export default function PresentationsPage() {
  return (
    <div className="relative overflow-hidden py-10 sm:py-14 lg:py-16 tech-grid-bg">
      <div className="absolute inset-x-0 top-0 h-96 radial-glow pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-axon-blue transition-colors hover:text-axon-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to Work
        </Link>

        <header className="mx-auto mt-8 max-w-3xl space-y-4 text-center">
          <div className="hero-enter hero-d1 inline-flex items-center gap-2 rounded-full border border-axon-blue/30 bg-axon-blue/10 px-3.5 py-1 text-xs font-mono text-axon-accent">
            <Presentation className="h-3.5 w-3.5" aria-hidden="true" />
            PPT &amp; PRESENTATION DESIGN
          </div>
          <h1 className="hero-enter hero-d2 text-3xl font-black tracking-tight text-axon-text sm:text-5xl">
            Presentation Design{' '}
            <span className="bg-gradient-to-r from-axon-blue to-axon-accent bg-clip-text text-transparent">Samples</span>
          </h1>
          <p className="hero-enter-soft text-base leading-relaxed text-axon-muted sm:text-lg">
            Three different styles for three different audiences. Swipe through the slides to see how we turn plain
            content into clear, professional presentations.
          </p>
        </header>

        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-xl border border-axon-blue/30 bg-axon-surface/80 p-4 text-left text-xs leading-relaxed text-axon-muted sm:text-sm">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-axon-blue" aria-hidden="true" />
          <span>
            <strong className="text-axon-text">Sample designs:</strong> these slides were designed by Axonix Tech to
            show our style. The businesses, names and figures are fictional or sample data. They are shown here as web
            previews; client presentations are delivered as editable PowerPoint files.
          </span>
        </div>

        <div className="mt-14 space-y-16">
          {SAMPLE_DECKS.map((deck, i) => (
            <section key={deck.id} data-reveal aria-labelledby={`deck-${deck.id}`} className="space-y-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-axon-dim">
                    Sample {i + 1} • {deck.type}
                  </p>
                  <h2 id={`deck-${deck.id}`} className="mt-1 text-xl font-extrabold text-axon-text sm:text-2xl">
                    {deck.title}
                  </h2>
                  <p className="mt-1 max-w-xl text-sm text-axon-muted">{deck.description}</p>
                </div>
                <div className="flex items-center gap-1.5" aria-label="Colour palette">
                  {deck.palette.map((c) => (
                    <span
                      key={c}
                      title={c}
                      className="h-5 w-5 rounded-full border border-white/20"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
              <DeckViewer title={deck.title} slides={deck.slides} />
            </section>
          ))}
        </div>

        {/* What's included + CTA */}
        <div data-reveal className="mt-20 grid grid-cols-1 gap-8 rounded-2xl border border-axon-border bg-axon-surface/70 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-xl font-extrabold text-axon-text sm:text-2xl">Need a presentation designed?</h2>
            <ul className="mt-5 space-y-2.5 text-sm text-axon-muted">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-axon-blue" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-axon-dim">
              Priced by slide count and complexity. Slide design and content writing are quoted separately, and you
              should review all facts and figures before presenting.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/contact?service=ppt-design"
              data-ripple
              data-umami-event="ppt-samples-quote"
              className="btn-shine inline-flex items-center justify-center gap-2 rounded-lg bg-axon-blue px-6 py-3.5 text-sm font-semibold text-axon-bg shadow-glow-sm transition-colors hover:bg-axon-accent"
            >
              Get a presentation quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={INSTAGRAM_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ripple
              data-umami-event="ppt-samples-instagram"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-axon-border bg-axon-bg px-6 py-3.5 text-sm font-semibold text-axon-text transition-colors hover:border-axon-blue/50"
            >
              <Instagram className="h-4 w-4 text-axon-accent" aria-hidden="true" />
              DM your slide requirements
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
