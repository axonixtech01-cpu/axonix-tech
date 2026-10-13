'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Send, AlertCircle, Info, Instagram } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  businessName: string;
  projectType: string;
  timeline: string;
  details: string;
}

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
  const [submittedDraft, setSubmittedDraft] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Please briefly describe your project goals.';
    } else if (formData.details.trim().length < 15) {
      newErrors.details = 'Please provide at least 15 characters describing your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateMailtoUrl = (): string => {
    const subject = encodeURIComponent(
      `[Project Inquiry] ${formData.projectType} — ${formData.fullName} ${
        formData.businessName ? `(${formData.businessName})` : ''
      }`
    );

    const bodyText = `Hello Axonix Tech team,

I would like to discuss a project with your agency. Here are the specifications:

Name: ${formData.fullName}
Email: ${formData.email}
Business / Brand: ${formData.businessName || 'Not specified'}
Service Requested: ${formData.projectType}
Estimated Timeline: ${formData.timeline}

Project Overview & Objectives:
${formData.details}

Looking forward to your reply.

Best regards,
${formData.fullName}`;

    return `mailto:Axonix.tech01@gmail.com?subject=${subject}&body=${encodeURIComponent(
      bodyText
    )}`;
  };

  const getBriefText = (): string => {
    return `AXONIX TECH PROJECT BRIEF
-----------------------------
Client Name: ${formData.fullName}
Email: ${formData.email}
Business: ${formData.businessName || 'N/A'}
Service: ${formData.projectType}
Timeline: ${formData.timeline}

Project Details:
${formData.details}
-----------------------------
Target: Axonix.tech01@gmail.com`;
  };

  const handleLaunchEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedDraft(true);
      window.location.href = generateMailtoUrl();
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
        <h3 className="text-xl font-bold text-axon-text sm:text-2xl">
          Project Specification Brief
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-axon-muted">
          Fill in your project parameters. This tool configures a structured email draft directly for{' '}
          <span className="text-axon-blue font-mono font-medium">Axonix.tech01@gmail.com</span>.
        </p>
      </div>

      <form onSubmit={handleLaunchEmail} className="space-y-4">
        {/* Row 1: Name and Email */}
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
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@business.com"
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
              className="w-full rounded-lg border border-axon-border bg-axon-bg px-3.5 py-2.5 text-sm text-axon-text transition-colors focus:border-axon-blue focus:outline-none focus:ring-1 focus:ring-axon-blue"
            >
              <option value="Website Design">Website Design</option>
              <option value="Responsive Website Development">Responsive Web Development</option>
              <option value="Landing Pages">High-Impact Landing Page</option>
              <option value="Website Redesign">Complete Website Redesign</option>
              <option value="UI/UX Design">UI/UX Wireframing &amp; Design</option>
              <option value="Coaching Institute Website">Coaching Institute Portal</option>
              <option value="Restaurant & Cafe Website">Restaurant / Cafe Website</option>
              <option value="Business Portfolio">Small Business / Portfolio</option>
              <option value="Custom Consultation">Other / Custom Scope</option>
            </select>
          </div>
        </div>

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
            <option value="Urgent (1–2 weeks)">Urgent (1–2 weeks)</option>
            <option value="Within 2–3 weeks">Standard (2–3 weeks)</option>
            <option value="Within 1 month">Flexible (Within 1 month)</option>
            <option value="Planning / Exploratory stage">Exploratory / Initial Planning</option>
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
            placeholder="Tell us about your business, the pages you need (Home, About, Menu/Courses, Contact), any reference websites you like, and your primary goal..."
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

        {/* Action Controls */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-axon-blue px-6 py-3 text-sm font-semibold text-axon-bg shadow-glow-sm transition-all duration-200 hover:bg-axon-accent hover:shadow-glow-md active:scale-98"
          >
            <Send className="h-4 w-4" />
            <span>Launch Email Draft</span>
          </button>

          <button
            type="button"
            onClick={handleCopyBrief}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-axon-border bg-axon-surface px-5 py-3 text-sm font-medium text-axon-text transition-all duration-200 hover:border-axon-blue/50 hover:bg-axon-surface/80 active:scale-98"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400">Brief Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-axon-blue" />
                <span>Copy Project Brief</span>
              </>
            )}
          </button>
        </div>

        {/* Feedback message when submitted */}
        {submittedDraft && (
          <div className="mt-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3 text-xs text-emerald-300 flex items-start gap-2">
            <Check className="h-4 w-4 shrink-0 mt-0.5" />
            <span>
              Your email client should open shortly with the pre-filled message. If it doesn&apos;t open automatically on your phone, click &ldquo;Copy Project Brief&rdquo; and paste it into your email app or send it via Instagram DM.
            </span>
          </div>
        )}

        {/* Honest Disclosure Note */}
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-axon-bg p-3 border border-axon-border/60 text-xs text-axon-muted">
          <Info className="h-4 w-4 text-axon-blue shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-axon-text">Direct Communication Architecture:</strong>{' '}
            To guarantee complete data privacy with zero database overhead, this form directly prepares a pre-filled draft in your personal email application (Gmail, Apple Mail, Outlook). We do not capture or store your personal submissions on external servers.
          </p>
        </div>
      </form>
    </div>
  );
};
