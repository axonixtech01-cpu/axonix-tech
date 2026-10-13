'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Instagram, Send, X } from 'lucide-react';

export const InstagramFloatingCTA: React.FC = () => {
  const [minimized, setMinimized] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  // Slide out of the way while scrolling down (so it never covers content); return on scroll up.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const nearBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 80;
        if (y < 120 || nearBottom) setHidden(false);
        else if (y > lastY + 8) setHidden(true);
        else if (y < lastY - 8) setHidden(false);
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The /links page (Instagram bio) already shows DM buttons.
  if (pathname === '/links') return null;

  return (
    <aside
      aria-label="Direct Instagram inquiry"
      className={`fixed bottom-5 right-5 z-40 flex items-center transition-all duration-300 ${
        hidden ? 'pointer-events-none translate-y-24 opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      {!minimized ? (
        <div className="relative group flex items-center gap-2 rounded-full border border-axon-blue/40 bg-axon-surface/95 p-1.5 pr-4 shadow-[0_8px_30px_rgba(0,180,255,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-axon-blue hover:shadow-glow-md">
          
          {/* Pulsing indicator node */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-axon-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-axon-blue" />
          </span>

          {/* Direct DM Link */}
          <a
            href="https://ig.me/m/axo_nixtech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-xs font-semibold text-axon-text hover:text-axon-accent transition-colors"
            aria-label="Direct Message Axonix Tech on Instagram"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-sm">
              <Instagram className="h-5 w-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono text-axon-blue uppercase tracking-wider">
                Instant Chat
              </span>
              <span className="font-bold text-axon-text text-xs flex items-center gap-1">
                DM @axo_nixtech
                <Send className="h-3 w-3 text-axon-accent inline" />
              </span>
            </div>
          </a>

          {/* Minimize button */}
          <button
            type="button"
            onClick={() => setMinimized(true)}
            aria-label="Minimize Instagram chat button"
            className="ml-1 p-1 text-axon-dim hover:text-axon-text transition-colors rounded-full"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setMinimized(false)}
          aria-label="Open Instagram chat button"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-axon-blue/50 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-[0_8px_25px_rgba(0,180,255,0.4)] transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <Instagram className="h-6 w-6" />
        </button>
      )}
    </aside>
  );
};
