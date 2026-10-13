'use client';

import React, { useEffect, useState } from 'react';

const DEFAULT_WORDS = [
  'Business Websites',
  'Landing Pages',
  'PPT Presentations',
  'Website Chatbots',
  'Website Redesigns',
  'UI/UX Designs',
];

type Phase = 'hold' | 'deleting' | 'typing';

interface RotatingWordsProps {
  words?: string[];
}

/**
 * Typewriter that cycles through service names.
 * The first word is server-rendered in full (no layout shift, readable without JS).
 * Screen readers get the full list once; the animated text is aria-hidden.
 */
export const RotatingWords: React.FC<RotatingWordsProps> = ({ words = DEFAULT_WORDS }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [phase, setPhase] = useState<Phase>('hold');
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    let timer: number;

    if (reduceMotion) {
      // No typing animation — just swap words slowly.
      timer = window.setTimeout(() => {
        const next = (index + 1) % words.length;
        setIndex(next);
        setText(words[next]);
      }, 2800);
      return () => window.clearTimeout(timer);
    }

    const target = words[index];
    if (phase === 'hold') {
      timer = window.setTimeout(() => setPhase('deleting'), 1900);
    } else if (phase === 'deleting') {
      if (text.length === 0) {
        timer = window.setTimeout(() => {
          setIndex((index + 1) % words.length);
          setPhase('typing');
        }, 220);
      } else {
        timer = window.setTimeout(() => setText(target.slice(0, text.length - 1)), 32);
      }
    } else if (text.length === target.length) {
      timer = window.setTimeout(() => setPhase('hold'), 0);
    } else {
      timer = window.setTimeout(() => setText(target.slice(0, text.length + 1)), 65);
    }
    return () => window.clearTimeout(timer);
  }, [text, phase, index, reduceMotion, words]);

  return (
    <span className="inline-flex items-center whitespace-nowrap">
      <span className="sr-only">{words.join(', ')}</span>
      <span
        aria-hidden="true"
        className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-axon-blue to-axon-accent"
      >
        {text || '\u00A0'}
      </span>
      <span aria-hidden="true" className="type-cursor" />
    </span>
  );
};
