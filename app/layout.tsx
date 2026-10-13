import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Axonix Tech — Premium Web Design & Digital Experiences',
    template: '%s | Axonix Tech',
  },
  description:
    'Axonix Tech designs and engineers modern, high-performance responsive websites, landing pages, and digital experiences for ambitious businesses, institutions, and growing brands.',
  keywords: [
    'Axonix Tech',
    'web design agency',
    'responsive web development',
    'modern landing pages',
    'coaching institute website design',
    'restaurant website design',
    'UI UX design',
    'Next.js web development',
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
    url: 'https://axonixtech.vercel.app',
    title: 'Axonix Tech — Premium Web Design & Digital Experiences',
    description: 'Modern websites. Meaningful digital experiences. YOUR VISION. OUR CODE.',
    siteName: 'Axonix Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axonix Tech — Premium Web Design & Digital Experiences',
    description: 'Modern websites. Meaningful digital experiences. YOUR VISION. OUR CODE.',
  },
  metadataBase: new URL('https://axonixtech.vercel.app'),
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
    <html lang="en" className="dark">
      <body className="min-h-screen bg-axon-bg text-axon-text antialiased selection:bg-axon-blue selection:text-axon-bg">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
