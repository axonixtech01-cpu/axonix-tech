'use client';

import React, { useEffect, useState } from 'react';
import { Mail, Copy, Check, Send, AlertCircle, Info, Instagram, ArrowUpRight } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  businessName: string;
  projectType: string;
  timeline: string;
  details: string;
}

interface ServiceOption {
  value: string;
  label: string;
  /** Alternate names / IDs accepted from the ?service= query parameter */
  aliases: string[];
  /** Optional guidance shown under the dropdown when this service is selected */
  hint?: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { value: 'Starter Launch (₹4,999)', label: 'Starter Launch Plan (₹4,999)', aliases: ['Starter Launch Website', 'Starter Launch'] },
  { value: 'Growth Business (₹9,999)', label: 'Growth Business Plan (₹9,999)', aliases: ['Growth Business Website', 'Growth Business'] },
  { value: 'Custom Architecture', label: 'Custom Scope / Startup Portal', aliases: ['Custom Architecture Scope'] },
  { value: 'Website Design', label: 'Website Design & Wireframing', aliases: ['web-design'] },
  { value: 'Responsive Web Development', label: 'Responsive Web Development', aliases: ['Responsive Website Development', 'responsive-dev'] },
  { value: 'Landing Page', label: 'High-Impact Landing Page', aliases: ['Landing Pages', 'landing-pages'] },
  { value: 'Website Redesign', label: 'Complete Website Redesign', aliases: ['redesign'] },
  { value: 'UI/UX Design', label: 'UI/UX Design & Prototyping', aliases: ['uiux'] },
  { value: 'Portfolio & Business Website', label: 'Portfolio & Business Website', aliases: ['Portfolio & Business Websites', 'business-sites'] },
  {
    value: 'PPT & Presentation Design',
    label: 'PPT & Presentation Design',
    aliases: ['ppt-design', 'Presentation Design'],
    hint: 'Helpful details: approximate slide count, purpose (academic, business, pitch deck), whether you will supply the content, and if you need an editable .pptx file. Content writing is quoted separately from slide design.',
  },
  {
    value: 'Chatbot Development & AI Integration',
    label: 'Chatbot Development & AI Integration',
    aliases: ['chatbot-development', 'Chatbot Development'],
    hint: 'Helpful details: where the chatbot will live, the questions it should answer, whether you need lead capture, and if you want a rule-based bot or an AI-powered one (AI APIs have separate usage costs).',
  },
];

const normalize = (value: string): string => value.trim().toLowerCase().replace(/\s+/g, ' ');

/** Resolves a (decoded) ?service= value to a supported dropdown value, or null. */
const findServiceOption = (requested: string): string | null => {
  const target = normalize(requested);
  if (!target) return null;
  const match = SERVICE_OPTIONS.find(
    (option) =>
      normalize(option.value) === target ||
      normalize(option.label) === target ||
      option.aliases.some((alias) => normalize(alias) === target)
  );
  return match ? match.value : null;
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    businessName: '',
    projectType: 'Website Design',
    timeline: 'Within 2-3 weeks',
    details: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [copied, setCopied] = useState(false);
  const [dmTriggered, setDmTriggered] = useState(false);
  const [submittedDraft, setSubmittedDraft] = useState(false);

  // Preselect the service from links such as /contact?service=PPT%20%26%20Presentation%20Design.
  // URLSearchParams decodes percent-encoding and "+" automatically. Reading window.location
  // inside useEffect keeps the contact page statically rendered (no Suspense boundary needed).
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('service');
    if (!requested) return;
    const matched = findServiceOption(requested);
    if (matched) {
      setFormData((prev) => ({ ...prev, projectType: matched }));
    }
  }, []);

  const selectedServiceHint = SERVICE_OPTIONS.find((option) => option.value === formData.projectType)?.hint;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address or social handle.';
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Please briefly describe your project goals.';
    } else if (formData.details.trim().length < 10) {
      newErrors.details = 'Please provide at least 10 characters describing your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getBriefText = (): string => {
    return `⚡ AXONIX TECH PROJECT BRIEF
-----------------------------
Client: ${formData.fullName}
Contact: ${formData.email}
Business: ${formData.businessName || 'N/A'}
Service: ${formData.projectType}
Timeline: ${formData.timeline}

Project Overview:
${formData.details}
-----------------------------
Target: @axo_nixtech / Axonix.tech01@gmail.com`;
  };

  const handleInstagramDM = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const brief = getBriefText();
      navigator.clipboard.writeText(brief).then(() => {
        setDmTriggered(true);
        setTimeout(() => {
          window.open('https://ig.me/m/axo_nixtech', '_blank');
        }, 600);
      });
    }
  };

  const handleLaunchEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const subject = encodeURIComponent(
        `[Project Inquiry] ${formData.projectType} — ${formData.fullName} ${
          formData.businessName ? `(${formData.businessName})` : ''
        }`
      );
      const body = encodeURIComponent(getBriefText());
      setSubmittedDraft(true);
      window.location.href = `mailto:Axonix.tech01@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  const handleCopyBrief = () => {
    if (validate()) {
      navigator.clipboard.writeText(getBriefText()).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      });
    }
  };

  return (
    <div className="rounded-2xl border border-axon-border bg-axon-surface/90 p-5 sm:p-8 shadow-xl">
      <div className="border-b border-axon-border pb-5 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-axon-text sm:text-2xl">
            Project Specification Brief
          </h3>
          <span className="rounded bg-axon-blue/10 px-2.5 py-1 text-xs font-mono font-medium text-axon-accent border border-axon-blue/30">
            FAST RESPONSE
          </span>
        </div>
        <p className="mt-1 text-xs sm:text-sm text-axon-muted">
          Fill in your project details. You can send this brief directly via{' '}
          <strong className="text-axon-text">Instagram DM (@axo_nixtech)</strong> or launch a pre-filled email draft.
        </p>
      </div>

      <form className="space-y-4">
        {/* Row 1: Name and Contact */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="block font-mono text-xs font-semibold uppercase tracking-wider text-axon-dim mb-1.5"
            >
              Your Name *
            </label>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className={`w-full rounded-lg border bg-axon-bg px-3.5 py-2.5 text-sm text-axon-text placeholder-axon-dim/50 transition-colors focus:outline-none focus:ring-1 ${
                errors.fullName
                  ? 'border-rose-500/80 focus:ring-rose-500'
                  : 'border-axon-border focus:border-axon-blue focus:ring-axon-blue'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-400">
                <AlertCircle className="h-3 w-3" />
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-mono text-xs font-semibold uppercase tracking-wider text-axon-dim mb-1.5"
            >
              Email or Instagram Handle *
            </label>
            <input
              id="email"
              type="text"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@business.com or @yourhandle"
              className={`w-full rounded-lg border bg-axon-bg px-3.5 py-2.5 text-sm text-axon-text placeholder-axon-dim/50 transition-colors focus:outline-none focus:ring-1 ${
                errors.email
                  ? 'border-rose-500/80 focus:ring-rose-500'
                  : 'border-axon-border focus:border-axon-blue focus:ring-axon-blue'
              }`}
            />
            {errors.email && (
              <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-400">
                <AlertCircle className="h-3 w-3" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Business & Service Selection */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="businessName"
              className="block font-mono text-xs font-semibold uppercase tracking-wider text-axon-dim mb-1.5"
            >
              Business / Brand Name
            </label>
            <input
              id="businessName"
              type="text"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              placeholder="e.g. Apex Coaching / Local Cafe"
              className="w-full rounded-lg border border-axon-border bg-axon-bg px-3.5 py-2.5 text-sm text-axon-text placeholder-axon-dim/50 transition-colors focus:border-axon-blue focus:outline-none focus:ring-1 focus:ring-axon-blue"
            />
          </div>

          <div>
            <label
              htmlFor="projectType"
              className="block font-mono text-xs font-semibold uppercase tracking-wider text-axon-dim mb-1.5"
            >
              Service Required
            </label>
            <select
              id="projectType"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              aria-describedby={selectedServiceHint ? 'projectType-hint' : undefined}
              className="w-full rounded-lg border border-axon-border bg-axon-bg px-3.5 py-2.5 text-sm text-axon-text transition-colors focus:border-axon-blue focus:outline-none focus:ring-1 focus:ring-axon-blue"
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Service-specific guidance (PPT / Chatbot) */}
        {selectedServiceHint && (
          <p
            id="projectType-hint"
            className="flex items-start gap-2 rounded-lg border border-axon-blue/20 bg-axon-blue/5 p-3 text-[11px] sm:text-xs leading-relaxed text-axon-muted"
          >
            <Info className="h-3.5 w-3.5 shrink-0 mt-0.5 text-axon-blue" />
            <span>{selectedServiceHint}</span>
          </p>
        )}

        {/* Row 3: Timeline */}
        <div>
          <label
            htmlFor="timeline"
            className="block font-mono text-xs font-semibold uppercase tracking-wider text-axon-dim mb-1.5"
          >
            Target Timeline
          </label>
          <select
            id="timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full rounded-lg border border-axon-border bg-axon-bg px-3.5 py-2.5 text-sm text-axon-text transition-colors focus:border-axon-blue focus:outline-none focus:ring-1 focus:ring-axon-blue"
          >
            <option value="Urgent (3–5 days)">Urgent (3–5 days)</option>
            <option value="Standard (1–2 weeks)">Standard (1–2 weeks)</option>
            <option value="Flexible (Within 1 month)">Flexible (Within 1 month)</option>
            <option value="Initial Planning">Just exploring ideas</option>
          </select>
        </div>

        {/* Project Details */}
        <div>
          <label
            htmlFor="details"
            className="block font-mono text-xs font-semibold uppercase tracking-wider text-axon-dim mb-1.5"
          >
            Project Vision &amp; Requirements *
          </label>
          <textarea
            id="details"
            rows={4}
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            placeholder="Tell us about your business or project, what you need (pages, slides, or chatbot features), any references you like, and your primary goal..."
            className={`w-full rounded-lg border bg-axon-bg p-3.5 text-sm text-axon-text placeholder-axon-dim/50 transition-colors focus:outline-none focus:ring-1 ${
              errors.details
                ? 'border-rose-500/80 focus:ring-rose-500'
                : 'border-axon-border focus:border-axon-blue focus:ring-axon-blue'
            }`}
          />
          {errors.details && (
            <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-400">
              <AlertCircle className="h-3 w-3" />
              {errors.details}
            </p>
          )}
        </div>

        {/* Action Controls: Primary Instagram DM + Email + Copy */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          {/* Primary Instagram DM Button */}
          <button
            type="button"
            onClick={handleInstagramDM}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 via-rose-500 to-amber-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:opacity-95 active:scale-98"
          >
            <Instagram className="h-4 w-4" />
            <span>Send via Instagram DM</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          {/* Email Draft Button */}
          <button
            type="button"
            onClick={handleLaunchEmail}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-axon-blue px-4 py-3 text-sm font-semibold text-axon-bg shadow-glow-sm hover:bg-axon-accent active:scale-98 transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Email Brief</span>
          </button>

          {/* Copy Brief Button */}
          <button
            type="button"
            onClick={handleCopyBrief}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-axon-border bg-axon-surface px-4 py-3 text-sm font-medium text-axon-text hover:border-axon-blue/50 active:scale-98 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-axon-blue" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Feedback for Instagram DM click */}
        {dmTriggered && (
          <div className="mt-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3 text-xs text-emerald-300 flex items-start gap-2">
            <Check className="h-4 w-4 shrink-0 mt-0.5 text-emerald-400" />
            <span>
              <strong>Project brief copied to your clipboard!</strong> We are opening Instagram now. Just paste your brief into the DM chat with <span className="underline">@axo_nixtech</span>.
            </span>
          </div>
        )}

        {/* Feedback message for Email */}
        {submittedDraft && (
          <div className="mt-2 rounded-lg bg-axon-blue/10 border border-axon-blue/30 p-3 text-xs text-axon-accent flex items-start gap-2">
            <Check className="h-4 w-4 shrink-0 mt-0.5" />
            <span>
              Your email app should open shortly with a pre-filled draft addressed to <strong>Axonix.tech01@gmail.com</strong>. Nothing is sent until you press send in your email app.
            </span>
          </div>
        )}

        {/* Privacy Callout */}
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-axon-bg p-3 border border-axon-border/60 text-xs text-axon-muted">
          <Info className="h-4 w-4 text-axon-blue shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-axon-text">Privacy Note:</strong>{' '}
            This form does not submit or store your details on any server. Your brief is only shared when you choose to send it yourself via Instagram DM (<a href="https://www.instagram.com/axo_nixtech/" target="_blank" rel="noopener noreferrer" className="text-axon-blue underline">@axo_nixtech</a>) or your own email app. We never publish or sell client contact details.
          </p>
        </div>
      </form>
    </div>
  );
};
