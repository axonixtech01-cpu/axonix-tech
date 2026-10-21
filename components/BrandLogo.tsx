import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
}) => {
  const dim = size === 'sm' ? 34 : size === 'lg' ? 50 : 42;
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-axon-blue rounded-lg ${className}`}
    >
      {/* 3D Chiseled Metallic Logo Emblem */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className="absolute -inset-1 rounded-lg bg-axon-blue/15 blur-xl opacity-55 transition-opacity duration-300 group-hover:opacity-85" />
        <img
          src="/logo.png"
          alt=""
          width={dim}
          height={dim}
          className="relative h-auto w-auto rounded-lg object-contain drop-shadow-[0_0_16px_rgba(82,216,240,0.22)] transition-transform duration-300 group-hover:scale-105 border border-white/10"
          style={{ maxHeight: dim, maxWidth: dim }}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-wider uppercase text-axon-text ${textSize} drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]`}>
            AXONIX
          </span>{' '}
          <span className="text-[10px] font-mono font-bold tracking-widest text-axon-accent px-1.5 py-0.5 rounded bg-axon-blue/15 border border-axon-blue/40 shadow-glow-sm">
            TECH
          </span>
          <span className="sr-only"> home</span>
        </div>
        {showTagline && (
          <span className="text-[10px] tracking-widest uppercase text-axon-muted font-mono -mt-0.5">
            YOUR VISION. OUR CODE.
          </span>
        )}
      </div>
    </Link>
  );
};
