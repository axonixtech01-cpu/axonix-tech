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
  const iconSize = size === 'sm' ? 26 : size === 'lg' ? 38 : 32;
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-axon-blue rounded-lg ${className}`}
      aria-label="Axonix Tech Home"
    >
      {/* Abstract AX Geometric Monogram */}
      <div className="relative flex items-center justify-center">
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Subtle Outer Tech Hex/Diamond Frame */}
          <rect
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="8"
            className="stroke-axon-border fill-axon-surface"
            strokeWidth="1.5"
          />
          <rect
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="8"
            className="stroke-axon-blue/20 transition-all duration-300 group-hover:stroke-axon-blue/60"
            strokeWidth="1.5"
          />

          {/* Letter 'A' Stylized Angle */}
          <path
            d="M12 29L20 11L28 29"
            stroke="#F5F8FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* High-tech Horizontal Bridge */}
          <path
            d="M15.5 22.5H24.5"
            stroke="#00B4FF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Diagonal Cyber 'X' Slice */}
          <path
            d="M21 16L29 27"
            stroke="#36C5FF"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-80"
          />
          
          {/* Center Glow Node */}
          <circle cx="20" cy="11" r="1.75" fill="#00B4FF" />
          <circle cx="24.5" cy="22.5" r="1.5" fill="#36C5FF" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-wider uppercase text-axon-text ${textSize}`}>
            AXONIX
          </span>
          <span className="text-xs font-mono font-semibold tracking-widest text-axon-blue px-1.5 py-0.5 rounded bg-axon-blue/10 border border-axon-blue/25">
            TECH
          </span>
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
