import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { InstagramFloatingCTA } from '@/components/InstagramFloatingCTA';
import { MotionEffects } from '@/components/MotionEffects';
import { Analytics } from '@/components/Analytics';
import { OG_IMAGE, SITE_URL } from '@/lib/site';

// Runs before first paint: enables scroll-reveal styles only when JS is available.
const REVEAL_BOOTSTRAP = "document.documentElement.classList.add('reveal-ready')";

export const metadata: Metadata = {
  title: {
    default: 'Axonix Tech — Premium Web Design & Digital Experiences',
    template: '%s | Axonix Tech',
  },
  description:
    'Axonix Tech designs and builds modern responsive websites and landing pages, professional PPT and presentation designs, and website chatbots with optional AI integration for businesses, institutions, students, and growing brands.',
  keywords: [
    'Axonix Tech',
    'web design agency',
    'responsive web development',
    'modern landing pages',
    'coaching institute website design',
    'restaurant website design',
    'UI UX design',
    'Next.js web development',
    'PPT presentation design',
    'pitch deck design',
    'chatbot development',
    'AI chatbot integration',
  ],
  authors: [{ name: 'Axonix Tech' }],
  creator: 'Axonix Tech',
  publisher: 'Axonix Tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Axonix Tech — Premium Web Design & Digital Experiences',
    description: 'Modern websites. Meaningful digital experiences. YOUR VISION. OUR CODE. DM @axo_nixtech',
    siteName: 'Axonix Tech',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axonix Tech — Premium Web Design & Digital Experiences',
    description: 'Modern websites. Meaningful digital experiences. YOUR VISION. OUR CODE. DM @axo_nixtech',
    images: [OG_IMAGE.url],
  },
  metadataBase: new URL(SITE_URL),
};

export const viewport: Viewport = {
  themeColor: '#080B12',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: REVEAL_BOOTSTRAP }} />
      </head>
      <body className="min-h-screen bg-axon-bg text-axon-text antialiased selection:bg-axon-blue selection:text-axon-bg">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          {/* Floating 1-Tap Instagram DM Button */}
          <InstagramFloatingCTA />
        </div>
        {/* Global scroll-reveal, spotlight and ripple effects */}
        <MotionEffects />
        {/* Cookieless analytics — loads only when configured via environment variables */}
        <Analytics />
      </body>
    </html>
  );
}
