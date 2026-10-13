'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowRight, Instagram, Send } from 'lucide-react';

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
    <header className="sticky top-0 z-50 w-full border-b border-axon-border/80 bg-[#080B12] transition-colors duration-200">
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
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://ig.me/m/axo_nixtech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-purple-500/40 bg-gradient-to-r from-purple-950/40 to-axon-bg px-3.5 py-2 text-xs font-bold text-white transition-all duration-200 hover:border-purple-400 active:scale-95"
          >
            <Instagram className="h-4 w-4 text-rose-400" />
            <span>DM Us</span>
          </a>

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
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-axon-border bg-axon-surface text-axon-text transition-colors duration-200 hover:border-axon-blue/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-axon-blue md:hidden"
        >
          {isOpen ? <X className="h-6 w-6 text-axon-accent" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Drawer — 100% Solid Background (Zero Transparency) */}
      {isOpen && (
        <div
          style={{ backgroundColor: '#080B12' }}
          className="fixed inset-x-0 top-16 bottom-0 z-[9999] md:hidden flex flex-col justify-between overflow-y-auto border-t border-axon-border bg-[#080B12] px-6 py-6"
        >
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2.5" aria-label="Mobile Navigation">
            <div className="text-[11px] font-mono tracking-widest uppercase text-axon-accent px-3 py-1 flex items-center justify-between border-b border-axon-border/60 pb-2">
              <span>MENU DIRECTORY</span>
              <span className="text-[10px] text-axon-dim font-mono">AXONIX // V1.0</span>
            </div>

            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 text-base rounded-xl border transition-all duration-150 ${
                    isActive
                      ? 'border-axon-blue bg-axon-surface text-axon-blue font-bold shadow-glow-sm'
                      : 'border-axon-border/60 bg-axon-surface/60 text-axon-text hover:border-axon-blue/50 hover:bg-axon-surface'
                  }`}
                >
                  <span className="font-semibold text-lg">{item.label}</span>
                  {isActive ? (
                    <span className="h-2.5 w-2.5 rounded-full bg-axon-blue shadow-glow-sm" />
                  ) : (
                    <ArrowRight className="h-4 w-4 text-axon-dim" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Action Controls in Mobile Menu */}
          <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-axon-border/80">
            {/* Primary Instagram DM Button */}
            <a
              href="https://ig.me/m/axo_nixtech"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-rose-500 to-amber-500 py-3.5 text-center text-sm font-bold text-white shadow-lg active:scale-98"
            >
              <Instagram className="h-5 w-5" />
              <span>DM on Instagram (@axo_nixtech)</span>
              <Send className="h-4 w-4" />
            </a>

            {/* Start a project page link */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-axon-blue py-3.5 text-center text-sm font-semibold text-axon-bg shadow-glow-sm transition-all duration-200 active:scale-98"
            >
              <span>Submit Project Brief</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex items-center justify-between pt-2 px-1 text-xs text-axon-dim font-mono">
              <span>EMAIL: Axonix.tech01@gmail.com</span>
              <span className="text-emerald-400">● 24h Response</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
