import React from 'react';
import Link from 'next/link';
import { ChevronDown, Instagram } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { DISCOUNT_CODE, INSTAGRAM_DM_URL } from '@/lib/site';

type FAQ = { q: string; a: React.ReactNode };

const FAQS: FAQ[] = [
  {
    q: 'How do I get started?',
    a: (
      <>
        Send us a DM on Instagram or fill in the{' '}
        <Link href="/contact" className="text-axon-blue underline underline-offset-2 hover:text-axon-accent">
          project brief
        </Link>
        . We reply with questions, a clear scope and a quote. Once you approve it and pay the advance, we start with
        the design, share it for your feedback, build the site, and launch it after your final review.
      </>
    ),
  },
  {
    q: 'How does payment work? Are there monthly fees?',
    a: (
      <>
        Website packages are a <strong className="text-axon-text">one-time payment</strong>: 40% advance to start, and
        the balance on delivery. There are no monthly fees from us. Your domain name (yearly) and any paid hosting
        are billed separately by those providers. Many small sites can run on a free hosting plan, depending on the
        provider&rsquo;s terms, and we&rsquo;ll advise you on the right option. Payment details are shared in writing
        with your quote.
      </>
    ),
  },
  {
    q: 'How long does a website take?',
    a: (
      <>
        Typically 3–5 days for the Starter Launch plan and 5–8 days for the Growth Business plan, counted from when we
        receive your content and the advance. Custom projects depend on scope; we give you a timeline with the quote.
      </>
    ),
  },
  {
    q: 'Can I get a discount?',
    a: (
      <>
        Possibly! Extra discounts may be available, especially for early clients, students and small local businesses.
        Message us on Instagram or Gmail with your budget and mention code{' '}
        <strong className="font-mono text-amber-300">{DISCOUNT_CODE}</strong>. Any discount depends on scope and is
        confirmed in writing before work starts.
      </>
    ),
  },
  {
    q: 'Do I need to provide the content and photos?',
    a: (
      <>
        Yes, you provide your business details, prices, photos and logo (if you have one), and we guide you on exactly
        what is needed. If you need help writing the text, tell us — content writing is quoted separately from design
        and development.
      </>
    ),
  },
  {
    q: 'How many changes or revisions can I ask for?',
    a: (
      <>
        The number of revision rounds is agreed in the written scope before work starts, so there are no surprises.
        Small text and image changes during the review stage are part of the normal process.
      </>
    ),
  },
  {
    q: 'Will I own my website?',
    a: (
      <>
        Yes. After the final payment you get full ownership of your website&rsquo;s source code. No lock-in to a
        website builder.
      </>
    ),
  },
  {
    q: 'Do you design PPT presentations?',
    a: (
      <>
        Yes — pitch decks, business presentations and academic / college presentations, delivered as editable
        PowerPoint files. Pricing depends on slide count and complexity. Slide design and content writing are quoted
        separately, and you should review all facts and figures before presenting. See our{' '}
        <Link href="/work/presentations" className="text-axon-blue underline underline-offset-2 hover:text-axon-accent">
          sample slides
        </Link>
        .
      </>
    ),
  },
  {
    q: 'How do website chatbots work, and what do they cost to run?',
    a: (
      <>
        A <strong className="text-axon-text">rule-based</strong> chatbot answers common questions with pre-written
        replies and has no usage fees. An <strong className="text-axon-text">AI-powered</strong> chatbot uses a
        third-party AI service, which charges usage fees and needs occasional maintenance — we explain these costs
        before you decide. Try our{' '}
        <Link href="/demo/chatbot" className="text-axon-blue underline underline-offset-2 hover:text-axon-accent">
          rule-based chatbot demo
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Do we need to meet in person?',
    a: (
      <>
        No. Everything is handled online through Instagram DM and email — from the first message to the final
        handover — so you can work with us from anywhere.
      </>
    ),
  },
  {
    q: 'What happens after my website goes live?',
    a: (
      <>
        The Growth Business plan includes 14 days of post-launch support and minor tweaks. For other plans, or for
        later changes, we quote small updates separately. You can also request ongoing help whenever you need it.
      </>
    ),
  },
  {
    q: 'Will my website rank #1 on Google?',
    a: (
      <>
        Nobody can honestly guarantee rankings. We set up the SEO basics — page titles, descriptions, sitemap, share
        previews and fast mobile loading — which give your site a solid foundation. Rankings also depend on your
        content, competition and time.
      </>
    ),
  },
];

interface FAQSectionProps {
  /** Number of questions to show (shows all by default). */
  limit?: number;
}

/** Frequently asked questions using native <details> accordions (works without JavaScript). */
export const FAQSection: React.FC<FAQSectionProps> = ({ limit }) => {
  const items = limit ? FAQS.slice(0, limit) : FAQS;

  return (
    <section id="faq" className="relative scroll-mt-20 border-t border-axon-border bg-axon-bg py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading
            badge="// FAQ"
            title="Questions, Answered Honestly"
            subtitle="Everything you might want to know before starting a project with us."
          />
        </div>

        <div data-reveal className="mt-10 space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-axon-border bg-axon-surface/60 transition-colors open:border-axon-blue/40 open:bg-axon-surface"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-left text-sm font-semibold text-axon-text sm:p-5 sm:text-base [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-axon-blue transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-4 pb-4 text-sm leading-relaxed text-axon-muted sm:px-5 sm:pb-5">{item.a}</div>
            </details>
          ))}
        </div>

        {limit && limit < FAQS.length && (
          <div className="mt-5 text-center">
            <Link
              href="/services#faq"
              className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-axon-blue hover:text-axon-accent"
            >
              See all {FAQS.length} questions →
            </Link>
          </div>
        )}

        <div data-reveal className="mt-8 text-center text-sm text-axon-muted">
          Still have a question?{' '}
          <a
            href={INSTAGRAM_DM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="faq-instagram"
            className="inline-flex items-center gap-1 font-semibold text-axon-blue hover:text-axon-accent"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Ask us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
