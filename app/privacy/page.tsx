import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { CONTACT_EMAIL, INSTAGRAM_URL, pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  path: '/privacy',
  title: 'Privacy Policy',
  description:
    'How Axonix Tech handles your information: what this website collects, how enquiries via Instagram and email are used, analytics, and your rights.',
});

const LAST_UPDATED = '13 October 2026';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg sm:text-xl font-bold text-axon-text">{title}</h2>
      <div className="space-y-3 text-sm sm:text-base leading-relaxed text-axon-muted">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  const mail = (
    <a href={`mailto:${CONTACT_EMAIL}`} className="text-axon-blue underline underline-offset-2 hover:text-axon-accent">
      {CONTACT_EMAIL}
    </a>
  );

  return (
    <div className="spatial-page-shell py-12 sm:py-16 lg:py-20 tech-grid-bg">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="page-intro privacy-page-intro space-y-4 border-b border-axon-border pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-axon-blue/30 bg-axon-blue/10 px-3.5 py-1 text-xs font-mono text-axon-accent">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>YOUR PRIVACY</span>
          </div>
          <h1 className="page-title">Privacy Policy</h1>
          <p className="text-sm text-axon-dim font-mono">Last updated: {LAST_UPDATED}</p>
          <p className="text-sm sm:text-base leading-relaxed text-axon-muted">
            This policy explains what information Axonix Tech (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles when you
            visit this website or contact us, and the choices you have. In short:{' '}
            <strong className="text-axon-text">
              this website has no login, no advertising trackers, and its forms do not send your details to our
              servers.
            </strong>
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <Section title="1. Information you choose to send us">
            <p>
              The project brief form on our{' '}
              <Link href="/contact" className="text-axon-blue underline underline-offset-2 hover:text-axon-accent">
                contact page
              </Link>{' '}
              works inside your browser. When you press a button, it either copies your brief so you can paste it
              into an Instagram DM, or opens your own email app with a pre-filled draft.{' '}
              <strong className="text-axon-text">Nothing is sent until you send it yourself.</strong>
            </p>
            <p>
              When you message us on Instagram or by email, we receive what you share — typically your name, contact
              handle or email address, business name and project details. These messages are also handled by
              Instagram (Meta) or your email provider under their own privacy policies.
            </p>
          </Section>

          <Section title="2. Demo pages and the chatbot demo">
            <p>
              Booking, enquiry and order forms on our demo websites, and the chatbot demo, run entirely in your
              browser for demonstration only. <strong className="text-axon-text">They do not send or store</strong>{' '}
              anything you type. Please do not enter real personal information in demos.
            </p>
          </Section>

          <Section title="3. Analytics and technical data">
            <p>
              To understand how many people visit and which pages are useful, we may use privacy-friendly analytics
              such as Cloudflare Web Analytics or Umami. These tools are <strong className="text-axon-text">cookieless</strong>,
              do not build advertising profiles, and give us aggregated statistics — for example page views, the
              country, device type, the website you came from, and clicks on buttons such as &ldquo;DM on
              Instagram&rdquo;.
            </p>
            <p>
              Like all websites, our hosting provider processes technical data such as your IP address and browser
              type to deliver the site securely and protect it from abuse.
            </p>
          </Section>

          <Section title="4. Cookies">
            <p>
              We do not use advertising or tracking cookies, and the website itself does not set cookies. Our hosting
              provider may use strictly necessary security cookies to protect the site from abuse.
            </p>
          </Section>

          <Section title="5. How we use your information">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>To reply to your enquiry and prepare a quote</li>
              <li>To plan, deliver and support a project you have agreed to</li>
              <li>To keep basic records of agreements and payments</li>
              <li>To improve this website using aggregated analytics</li>
            </ul>
            <p>
              <strong className="text-axon-text">We do not sell your information</strong> and we do not use it for
              advertising. We only share project details with service providers when needed to deliver your project
              (for example a hosting or domain provider you choose), and only as much as is necessary.
            </p>
          </Section>

          <Section title="6. How long we keep it">
            <p>
              We keep enquiry and project messages only for as long as needed to respond, deliver and support your
              project, and to keep records we may reasonably need afterwards. You can ask us to delete your
              information at any time, subject to any records we must keep by law.
            </p>
          </Section>

          <Section title="7. Your rights and choices">
            <p>
              You can ask us to access, correct or delete the personal information we hold about you, or withdraw
              consent to us using it. You can also raise a concern or grievance. Email {mail} and we will respond as
              soon as possible.
            </p>
          </Section>

          <Section title="8. Students and young people">
            <p>
              If you are under 18 (for example a student asking about a presentation), please ask a parent or guardian
              to contact us with you, or on your behalf.
            </p>
          </Section>

          <Section title="9. Security">
            <p>
              The site is served over a secure HTTPS connection and does not store form data on a server. No method of
              sending information online is completely secure, so please avoid sharing sensitive personal information
              (such as ID numbers or passwords) in messages.
            </p>
          </Section>

          <Section title="10. Changes and contact">
            <p>
              We may update this policy when our website or services change; the date at the top shows the latest
              version. For any privacy question, email {mail} or message{' '}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-axon-blue underline underline-offset-2 hover:text-axon-accent"
              >
                @axo_nixtech
              </a>{' '}
              on Instagram.
            </p>
          </Section>
        </div>
      </article>
    </div>
  );
}
