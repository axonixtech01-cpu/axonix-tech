
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Instagram, ListChecks, Sparkles, MessageSquareText, AlertCircle } from 'lucide-react';
import { ChatbotDemo } from '@/components/ChatbotDemo';
import { INSTAGRAM_DM_URL, pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  path: '/demo/chatbot',
  title: 'Chatbot Demo — Try a Website Chatbot',
  description:
    'Try a rule-based website chatbot demo for a coaching institute and a restaurant. See how a chatbot can answer customer questions and capture enquiries on your website.',
  ogTitle: 'Try a Website Chatbot Demo | Axonix Tech',
  ogDescription: 'Ask about fees, timings or the menu, and book a demo class or table — a live rule-based chatbot demo.',
});

const COMPARISON = [
  {
    title: 'Rule-based chatbot',
    Icon: ListChecks,
    tone: 'border-axon-blue/40',
    points: [
      'Answers common questions with replies you approve',
      'Quick-reply buttons and simple booking / enquiry flows',
      'Predictable answers — it never makes things up',
      'No AI usage fees',
    ],
    note: 'Like the demo on this page.',
  },
  {
    title: 'AI-powered chatbot',
    Icon: Sparkles,
    tone: 'border-amber-400/40',
    points: [
      'Understands free-form questions in natural language',
      'Answers from your own business information',
      'Uses a third-party AI service, which charges usage fees',
      'Needs monitoring and occasional maintenance; AI can make mistakes',
    ],
    note: 'Costs and limits are explained before you decide.',
  },
];

export default function ChatbotDemoPage() {
  return (
    <div className="relative overflow-hidden py-10 sm:py-14 lg:py-16 tech-grid-bg">
      <div className="absolute inset-x-0 top-0 h-96 radial-glow pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-axon-blue transition-colors hover:text-axon-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to Work
        </Link>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Intro */}
          <div className="space-y-5 text-center lg:pt-6 lg:text-left">
            <div className="hero-enter hero-d1 inline-flex items-center gap-2 rounded-full border border-axon-blue/30 bg-axon-blue/10 px-3.5 py-1 text-xs font-mono text-axon-accent">
              <MessageSquareText className="h-3.5 w-3.5" aria-hidden="true" />
              CHATBOT DEMO
            </div>
            <h1 className="hero-enter hero-d2 text-3xl font-black tracking-tight text-axon-text sm:text-5xl">
              Try a Website{' '}
              <span className="bg-gradient-to-r from-axon-blue to-axon-accent bg-clip-text text-transparent">Chatbot</span>
            </h1>
            <p className="hero-enter-soft text-base leading-relaxed text-axon-muted sm:text-lg">
              This is the kind of assistant we can add to your website. It answers common questions instantly — fees,
              timings, menu, location — and collects enquiries even when you&rsquo;re busy. Ask it something, or tap
              the buttons.
            </p>

            <div className="flex items-start gap-3 rounded-xl border border-amber-400/30 bg-amber-400/[0.07] p-4 text-left text-xs leading-relaxed text-axon-muted sm:text-sm">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
              <span>
                <strong className="text-axon-text">Honest demo:</strong> this bot is rule-based (no AI). It uses
                pre-written answers for the fictional businesses from our demo websites, and nothing you type leaves
                your browser.
              </span>
            </div>

            <div className="hidden flex-col gap-3 sm:flex-row lg:flex">
              <Link
                href="/contact?service=chatbot-development"
                data-ripple
                data-umami-event="chatbot-demo-quote"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-lg bg-axon-blue px-6 py-3 text-sm font-semibold text-axon-bg shadow-glow-sm transition-colors hover:bg-axon-accent"
              >
                Get a chatbot for your website
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Live demo */}
          <div className="hero-enter hero-d3">
            <ChatbotDemo />
          </div>
        </div>

        {/* Rule-based vs AI */}
        <section className="mt-20" aria-labelledby="chatbot-types">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <h2 id="chatbot-types" className="text-2xl font-extrabold text-axon-text sm:text-3xl">
              Which chatbot is right for you?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-axon-muted sm:text-base">
              We build both types and recommend the simplest one that does the job.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {COMPARISON.map((c, i) => (
              <div
                key={c.title}
                data-reveal
                data-reveal-delay={i + 1}
                data-spotlight
                data-tilt
                className={`relative rounded-2xl border bg-axon-surface/70 p-6 sm:p-7 ${c.tone}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-axon-border bg-axon-bg text-axon-blue">
                    <c.Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-axon-text">{c.title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5 text-sm text-axon-muted">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-axon-blue" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-axon-border/70 pt-4 text-xs font-mono text-axon-dim">{c.note}</p>
              </div>
            ))}
          </div>

          <p data-reveal className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-axon-dim">
            WhatsApp chatbots use the official WhatsApp Business Platform, which has its own approval process and
            per-message charges from Meta. We explain the options and costs for your case.
          </p>
        </section>

        {/* CTA */}
        <div data-reveal className="mt-16 rounded-2xl border border-axon-border bg-axon-surface/70 p-6 text-center sm:p-10">
          <h2 className="text-xl font-extrabold text-axon-text sm:text-2xl">Want a chatbot like this on your website?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-axon-muted">
            Tell us your business type and the questions customers ask most. We&rsquo;ll suggest the right setup and
            give you a clear quote.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?service=chatbot-development"
              data-ripple
              data-umami-event="chatbot-demo-quote"
              className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-lg bg-axon-blue px-6 py-3 text-sm font-semibold text-axon-bg shadow-glow-sm transition-colors hover:bg-axon-accent sm:w-auto"
            >
              Get a chatbot quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={INSTAGRAM_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ripple
              data-umami-event="chatbot-demo-instagram"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-axon-border bg-axon-bg px-6 py-3 text-sm font-semibold text-axon-text transition-colors hover:border-axon-blue/50 sm:w-auto"
            >
              <Instagram className="h-4 w-4 text-axon-accent" aria-hidden="true" />
              DM on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
