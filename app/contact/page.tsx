import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { 
  Mail, 
  Instagram, 
  Clock, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact — Initiate Your Project Inquiry',
  description:
    'Get in touch with Axonix Tech to discuss your new website, redesign, or landing page. Email: Axonix.tech01@gmail.com | Instagram: @axo_nixtech',
  openGraph: {
    title: 'Contact Axonix Tech | Project Inquiries',
    description: 'Start your website project with Axonix Tech. Direct communication, transparent pricing.',
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col py-12 sm:py-16 lg:py-20 tech-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-axon-blue/30 bg-axon-blue/10 px-3.5 py-1 text-xs font-mono text-axon-accent">
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-axon-text">
            Initiate Your Project
          </h1>
          <p className="text-base sm:text-lg text-axon-muted leading-relaxed">
            Have a project in mind, need a quote, or want to discuss a redesign? We communicate directly without middlemen or sales pressure.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Direct Inquiries & Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Information Cards */}
            <div className="rounded-2xl border border-axon-border bg-axon-surface/80 p-6 sm:p-7 space-y-6 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-axon-text font-mono uppercase tracking-wider">
                Direct Channels
              </h2>

              {/* Email Card */}
              <div className="rounded-xl border border-axon-border/70 bg-axon-bg p-4 transition-colors hover:border-axon-blue/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-axon-blue/10 text-axon-blue">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-axon-dim uppercase">
                      OFFICIAL BUSINESS EMAIL
                    </span>
                    <a
                      href="mailto:Axonix.tech01@gmail.com"
                      className="text-sm font-semibold text-axon-text hover:text-axon-blue transition-colors break-all"
                    >
                      Axonix.tech01@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="rounded-xl border border-axon-border/70 bg-axon-bg p-4 transition-colors hover:border-axon-blue/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-axon-accent/10 text-axon-accent">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] text-axon-dim uppercase">
                        INSTAGRAM PROFILE
                      </span>
                      <a
                        href="https://www.instagram.com/axo_nixtech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-axon-text hover:text-axon-accent transition-colors"
                      >
                        @axo_nixtech
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://www.instagram.com/axo_nixtech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-axon-dim hover:text-axon-accent transition-colors"
                    aria-label="Open Instagram in a new tab"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="rounded-xl border border-axon-border/70 bg-axon-bg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-axon-dim uppercase">
                      GUARANTEED RESPONSE
                    </span>
                    <span className="text-sm font-semibold text-axon-text">
                      Within 24 Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect Card */}
            <div className="rounded-2xl border border-axon-border bg-axon-surface/60 p-6 space-y-4 text-xs sm:text-sm text-axon-muted">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-axon-text">
                What happens after you reach out?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-axon-blue shrink-0 mt-0.5" />
                  <span>We review your requirements, target audience, and referenced websites.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-axon-blue shrink-0 mt-0.5" />
                  <span>We send a concise proposal with scope of work, timeline, and exact cost.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-axon-blue shrink-0 mt-0.5" />
                  <span>Once agreed, we provide wireframe previews before writing code.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Brief Generator */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
