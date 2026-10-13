import React from 'react';
import Link from 'next/link';
import { Gift, Instagram, Mail, ArrowRight, BadgePercent } from 'lucide-react';
import { DISCOUNT_CODE, DISCOUNT_MAILTO, INSTAGRAM_DM_URL } from '@/lib/site';

interface DiscountCalloutProps {
  /** Compact version for narrow layouts such as the /links page. */
  compact?: boolean;
  /** Heading level that fits the page outline (h3 under a section h2, h2 directly under the h1). */
  headingLevel?: 'h2' | 'h3';
}

/**
 * "Ask for a discount" call-to-action shown with the pricing.
 * Wording is deliberately "may be available" — any discount is confirmed
 * per project, so nothing here is a guaranteed offer.
 */
export const DiscountCallout: React.FC<DiscountCalloutProps> = ({ compact = false, headingLevel = 'h3' }) => {
  const Heading = headingLevel;
  return (
    <div
      data-reveal
      data-spotlight
      className={`relative overflow-hidden rounded-2xl border border-amber-400/35 bg-gradient-to-br from-amber-500/[0.12] via-axon-surface to-axon-surface ${
        compact ? 'p-5 text-left' : 'p-6 sm:p-8'
      }`}
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl"
      />

      <div className={`relative ${compact ? '' : 'grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center'}`}>
        <div className={compact ? 'space-y-3' : 'space-y-3 lg:col-span-7'}>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-amber-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            Extra discount on request
          </div>

          <Heading className={`font-extrabold tracking-tight text-axon-text ${compact ? 'text-lg' : 'text-2xl sm:text-3xl'}`}>
            Want an even better price? <span className="text-amber-300">Just ask.</span>
          </Heading>

          <p className="text-sm leading-relaxed text-axon-muted">
            These are our standard prices, but <strong className="text-axon-text">further discounts may be available</strong>{' '}
            — especially for early clients, students and small local businesses. Message our developer directly on
            Instagram or Gmail, share your budget, and we&rsquo;ll try to make it work for you.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-amber-400/60 bg-amber-400/10 px-3 py-1.5 font-mono text-xs text-amber-200">
              <BadgePercent className="h-3.5 w-3.5" aria-hidden="true" />
              Mention code <strong className="tracking-widest text-amber-300">{DISCOUNT_CODE}</strong>
            </span>
          </div>
        </div>

        <div className={compact ? 'mt-4 space-y-2.5' : 'space-y-2.5 lg:col-span-5'}>
          <a
            href={INSTAGRAM_DM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="discount-instagram"
            data-ripple
            className="btn-shine flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 via-rose-500 to-amber-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-95"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            <span>Ask for Discount on Instagram</span>
          </a>
          <a
            href={DISCOUNT_MAILTO}
            data-umami-event="discount-gmail"
            data-ripple
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-axon-border bg-axon-bg px-5 py-3 text-sm font-semibold text-axon-text transition-colors hover:border-axon-blue/50"
          >
            <Mail className="h-4 w-4 text-axon-blue" aria-hidden="true" />
            <span>Ask via Gmail</span>
          </a>
          <Link
            href="/contact?discount=1"
            data-umami-event="discount-brief"
            className="flex items-center justify-center gap-1.5 pt-1 text-xs font-mono text-axon-dim transition-colors hover:text-axon-blue"
          >
            <Gift className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Or send a project brief with a discount request</span>
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </Link>
          <p className="pt-1 text-center text-[11px] leading-relaxed text-axon-dim">
            Any discount depends on project scope and is confirmed in writing before work starts.
          </p>
        </div>
      </div>
    </div>
  );
};
