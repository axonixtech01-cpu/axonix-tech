'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-axon-border/80 bg-axon-bg/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Mark */}
        <BrandLogo size="md" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  isActive
                    ? 'text-axon-text font-semibold'
                    : 'text-axon-muted hover:text-axon-text hover:bg-axon-surface/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-axon-blue shadow-glow-sm" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-axon-blue px-4 py-2 text-sm font-semibold text-axon-bg shadow-glow-sm transition-all duration-200 hover:bg-axon-accent hover:shadow-glow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-axon-blue"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-axon-border bg-axon-surface text-axon-text transition-colors duration-200 hover:border-axon-blue/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-axon-blue md:hidden"
        >
          {isOpen ? <X className="h-5 w-5 text-axon-accent" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-axon-bg/95 backdrop-blur-xl md:hidden flex flex-col justify-between border-t border-axon-border px-6 py-8 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <nav
            className="flex flex-col gap-2"
            aria-label="Mobile Navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-mono tracking-wider uppercase text-axon-dim px-3 py-1">
              Menu Navigation
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 text-base rounded-lg border transition-all duration-150 ${
                    isActive
                      ? 'border-axon-blue/40 bg-axon-surface text-axon-blue font-semibold'
                      : 'border-transparent text-axon-muted hover:border-axon-border hover:bg-axon-surface/50 hover:text-axon-text'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-axon-blue shadow-glow-sm" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div
            className="flex flex-col gap-4 pt-6 border-t border-axon-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col text-xs text-axon-dim font-mono">
              <span>DIRECT INQUIRIES</span>
              <a
                href="mailto:Axonix.tech01@gmail.com"
                className="text-axon-text hover:text-axon-blue transition-colors text-sm mt-0.5"
              >
                Axonix.tech01@gmail.com
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-axon-blue py-3.5 text-center text-sm font-semibold text-axon-bg shadow-glow-sm transition-all duration-200 active:scale-98"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
