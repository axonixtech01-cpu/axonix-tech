'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  // Close the mobile side drawer on route changes.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock page scrolling while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keep Escape and keyboard focus inside the open navigation drawer.
  useEffect(() => {
    if (!isOpen) return;

    const getFocusables = () =>
      Array.from(
        drawerRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );

    getFocusables()[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusables = getFocusables();
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-navbar sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#070A12]/80 backdrop-blur-2xl transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo size="md" />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 lg:px-4 ${
                  isActive
                    ? 'bg-white/[0.055] text-axon-text font-semibold shadow-[inset_0_1px_rgba(255,255,255,0.05)]'
                    : 'text-axon-muted hover:bg-white/[0.035] hover:text-axon-text'
                }`}
              >
                {item.label}
                {isActive && <span className="navbar-active-dot" aria-hidden="true" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://ig.me/m/axo_nixtech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.025] px-3.5 py-2 text-xs font-semibold text-white transition-all duration-200 hover:border-rose-300/35 hover:bg-rose-300/[0.06]"
          >
            <Instagram className="h-4 w-4 text-rose-300" />
            <span>DM Us</span>
          </a>

          <Link
            href="/contact"
            className="navbar-project-cta inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200"
          >
            <span>Start a Project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="mobile-menu-toggle flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-axon-text transition-colors duration-200 hover:border-axon-blue/45 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5 text-axon-accent" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div
          className="mobile-drawer-backdrop fixed inset-0 z-[60] md:hidden"
          onClick={closeMenu}
          role="presentation"
        >
          <aside
            ref={drawerRef}
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Axonix Tech navigation"
            className="mobile-drawer-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mobile-drawer-header">
              <div className="mobile-drawer-brand">
                <BrandLogo size="sm" />
                <span className="mobile-drawer-index">MENU <i>/</i> 05</span>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="mobile-drawer-close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mobile-drawer-nav" aria-label="Mobile navigation">
              <p className="mobile-drawer-label">Navigate</p>
              {NAV_ITEMS.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`mobile-drawer-link ${isActive ? 'is-active' : ''}`}
                  >
                    <span className="mobile-drawer-number">0{index + 1}</span>
                    <span className="mobile-drawer-link-label">{item.label}</span>
                    <ArrowRight className="mobile-drawer-arrow h-4 w-4" />
                  </Link>
                );
              })}
            </nav>

            <div className="mobile-drawer-footer">
              <a
                href="https://ig.me/m/axo_nixtech"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mobile-drawer-social"
              >
                <Instagram className="h-4 w-4" />
                <span>DM on Instagram</span>
                <Send className="ml-auto h-3.5 w-3.5" />
              </a>
              <Link href="/contact" onClick={closeMenu} className="mobile-drawer-submit">
                <span>Submit Project Brief</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="mobile-drawer-contact">
                <span>Axonix.tech01@gmail.com</span>
                <span><i /> Responds within 24 hours</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};
