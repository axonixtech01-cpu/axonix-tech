'use client';

import { useEffect } from 'react';

/**
 * Global, dependency-free motion layer. Mounted once in app/layout.tsx.
 *
 *  - Scroll reveal:  any element with `data-reveal` fades/slides in when it enters the viewport.
 *                    Optional `data-reveal-delay="1..6"` staggers items (90ms steps).
 *  - Card spotlight: elements with `data-spotlight` get a glow that follows the finger/cursor.
 *                    `data-tilt` adds a subtle 3D tilt (mouse only, never on touch).
 *  - Tap ripple:     elements with `data-ripple` show a ripple where they are tapped.
 *
 * All effects are skipped when the visitor has "reduce motion" enabled.
 */
export function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Tells CSS the observer is running (disables the no-JS safety fallback).
    root.classList.add('reveal-active');

    /* ---------------- Scroll reveal ---------------- */
    const reveal = (el: Element) => {
      const delay = Number((el as HTMLElement).dataset.revealDelay || 0);
      window.setTimeout(() => el.classList.add('is-revealed'), Math.min(delay, 6) * 90);
    };

    const observed = new WeakSet<Element>();
    let io: IntersectionObserver | null = null;

    if (!reduceMotion && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target);
              io?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0 }
      );
    }

    const scan = () => {
      document.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        if (io) io.observe(el);
        else el.classList.add('is-revealed');
      });
    };
    scan();

    // Picks up content rendered after client-side navigation.
    let scanQueued = false;
    const mo = new MutationObserver(() => {
      if (scanQueued) return;
      scanQueued = true;
      requestAnimationFrame(() => {
        scanQueued = false;
        scan();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    if (reduceMotion) {
      return () => mo.disconnect();
    }

    /* ---------------- Spotlight + tilt ---------------- */
    let activeCard: HTMLElement | null = null;
    let frame = 0;
    let lastEvent: PointerEvent | null = null;

    const resetTilt = (el: HTMLElement | null) => {
      if (!el) return;
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
      el.classList.remove('spot-on');
    };

    const applyPointer = () => {
      frame = 0;
      const e = lastEvent;
      if (!e) return;
      const target = e.target instanceof Element ? e.target : null;
      const card = target?.closest<HTMLElement>('[data-spotlight]') ?? null;

      if (card !== activeCard) {
        resetTilt(activeCard);
        activeCard = card;
      }
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
      card.classList.add('spot-on');

      if (e.pointerType === 'mouse' && card.hasAttribute('data-tilt')) {
        const rx = ((y / rect.height) - 0.5) * -5; // max ±2.5deg
        const ry = ((x / rect.width) - 0.5) * 5;
        card.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
        card.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
      }
    };

    const onPointer = (e: PointerEvent) => {
      lastEvent = e;
      if (!frame) frame = requestAnimationFrame(applyPointer);
    };

    const onPointerLeaveDoc = () => {
      resetTilt(activeCard);
      activeCard = null;
    };

    /* ---------------- Ripple ---------------- */
    const onPointerDown = (e: PointerEvent) => {
      onPointer(e);
      const target = e.target instanceof Element ? e.target : null;
      const host = target?.closest<HTMLElement>('[data-ripple]');
      if (!host) return;
      const rect = host.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const ink = document.createElement('span');
      ink.className = 'ripple-ink';
      ink.style.width = ink.style.height = `${size}px`;
      ink.style.left = `${e.clientX - rect.left - size / 2}px`;
      ink.style.top = `${e.clientY - rect.top - size / 2}px`;
      ink.addEventListener('animationend', () => ink.remove(), { once: true });
      host.appendChild(ink);
    };

    document.addEventListener('pointermove', onPointer, { passive: true });
    document.addEventListener('pointerdown', onPointerDown, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeaveDoc);

    return () => {
      mo.disconnect();
      io?.disconnect();
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', onPointer);
      document.removeEventListener('pointerdown', onPointerDown);
      document.documentElement.removeEventListener('pointerleave', onPointerLeaveDoc);
    };
  }, []);

  return null;
}
