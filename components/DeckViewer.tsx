'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DeckViewerProps {
  title: string;
  slides: React.ReactNode[];
}

/** Swipeable 16:9 slide viewer (native scroll-snap; arrow buttons and keyboard on desktop). */
export const DeckViewer: React.FC<DeckViewerProps> = ({ title, slides }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setIndex(Math.round(track.scrollLeft / Math.max(1, track.clientWidth)));
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.max(0, Math.min(slides.length - 1, i));
    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <div
          ref={trackRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${title} — sample slides`}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') {
              e.preventDefault();
              goTo(index + 1);
            } else if (e.key === 'ArrowLeft') {
              e.preventDefault();
              goTo(index - 1);
            }
          }}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-xl border border-axon-border shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-axon-blue"
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${slides.length}`}
              className="w-full shrink-0 snap-center snap-always"
            >
              {slide}
            </div>
          ))}
        </div>

        {/* Arrow buttons (tablet / desktop) */}
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur transition-opacity hover:bg-black/70 disabled:opacity-0 sm:flex"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index === slides.length - 1}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur transition-opacity hover:bg-black/70 disabled:opacity-0 sm:flex"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              tabIndex={-1}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-axon-blue' : 'w-1.5 bg-axon-border hover:bg-axon-dim'
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-[11px] text-axon-dim" aria-live="polite">
          <span className="sm:hidden">Swipe • </span>
          {index + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
};
