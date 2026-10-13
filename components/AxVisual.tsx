import React from 'react';

export const AxVisual: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-xl select-none">
      {/* Ambient Electric Glow Behind Graphic */}
      <div 
        className="absolute -inset-4 rounded-3xl bg-axon-blue/15 blur-2xl pointer-events-none transform-gpu" 
        aria-hidden="true" 
      />

      {/* Main High-Tech Terminal Card */}
      <div className="relative rounded-2xl border border-axon-border bg-axon-surface/90 p-5 sm:p-7 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-axon-blue/40">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-axon-border/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-axon-dim tracking-wider">
              AXONIX.SYS // V1.0
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-axon-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-axon-blue opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-axon-blue" />
            </span>
            <span>SYSTEM READY</span>
          </div>
        </div>

        {/* Central Geometric AX Vector Artwork */}
        <div className="relative my-6 flex items-center justify-center py-4">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-60" />

          <svg
            viewBox="0 0 420 280"
            className="w-full max-w-[400px] h-auto drop-shadow-[0_0_20px_rgba(0,180,255,0.25)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Defs for gradients & filters */}
            <defs>
              <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00B4FF" />
                <stop offset="100%" stopColor="#36C5FF" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="polyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0D1220" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#141D30" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Background Circuit Grid Lines */}
            <path d="M40 70 H130 L160 100 H260 L290 70 H380" stroke="#1A2436" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M40 210 H140 L170 180 H250 L280 210 H380" stroke="#1A2436" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M210 20 V60" stroke="#1A2436" strokeWidth="1.5" />
            <path d="M210 220 V260" stroke="#1A2436" strokeWidth="1.5" />

            {/* Central Hexagon Cyber Core */}
            <polygon
              points="210,50 295,95 295,185 210,230 125,185 125,95"
              fill="url(#polyGrad)"
              stroke="#1E2D4A"
              strokeWidth="2"
            />
            <polygon
              points="210,65 275,102 275,178 210,215 145,178 145,102"
              fill="none"
              stroke="#00B4FF"
              strokeWidth="1"
              strokeDasharray="6 4"
              opacity="0.6"
            />

            {/* Prominent AX Brand Symbolism */}
            {/* 'A' Left Pillar */}
            <path
              d="M170 195 L210 85 L250 195"
              stroke="url(#cyberGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* 'A' Bridge */}
            <line
              x1="184"
              y1="155"
              x2="236"
              y2="155"
              stroke="#36C5FF"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Intersecting 'X' Diagonal Rays */}
            <line
              x1="165"
              y1="105"
              x2="255"
              y2="175"
              stroke="#00B4FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.85"
            />
            <line
              x1="255"
              y1="105"
              x2="165"
              y2="175"
              stroke="#F5F8FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="3 3"
              opacity="0.5"
            />

            {/* Floating Telemetry Nodes */}
            <circle cx="210" cy="85" r="4" fill="#F5F8FF" />
            <circle cx="210" cy="85" r="8" stroke="#00B4FF" strokeWidth="1.5" opacity="0.8" />
            <circle cx="170" cy="195" r="3.5" fill="#00B4FF" />
            <circle cx="250" cy="195" r="3.5" fill="#36C5FF" />
            <circle cx="125" cy="140" r="3" fill="#00B4FF" opacity="0.6" />
            <circle cx="295" cy="140" r="3" fill="#00B4FF" opacity="0.6" />

            {/* Digital Data Bits */}
            <text x="70" y="55" fill="#6C7A90" fontSize="10" fontFamily="monospace">01_RESPONSIVE</text>
            <text x="290" y="55" fill="#36C5FF" fontSize="10" fontFamily="monospace">NEXT.JS // RSC</text>
            <text x="70" y="235" fill="#00B4FF" fontSize="10" fontFamily="monospace">&lt;CLEAN_CODE&gt;</text>
            <text x="300" y="235" fill="#6C7A90" fontSize="10" fontFamily="monospace">SEO: 100/100</text>
          </svg>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-3 gap-2 border-t border-axon-border/80 pt-4 text-center">
          <div className="rounded-lg bg-axon-bg/60 p-2.5 border border-axon-border/60">
            <span className="block font-mono text-[10px] text-axon-dim uppercase">Framework</span>
            <span className="font-mono text-xs font-semibold text-axon-text sm:text-sm">Next.js App</span>
          </div>
          <div className="rounded-lg bg-axon-bg/60 p-2.5 border border-axon-border/60">
            <span className="block font-mono text-[10px] text-axon-dim uppercase">Mobile View</span>
            <span className="font-mono text-xs font-semibold text-axon-blue sm:text-sm">360px Fluid</span>
          </div>
          <div className="rounded-lg bg-axon-bg/60 p-2.5 border border-axon-border/60">
            <span className="block font-mono text-[10px] text-axon-dim uppercase">Performance</span>
            <span className="font-mono text-xs font-semibold text-emerald-400 sm:text-sm">Ultra Fast</span>
          </div>
        </div>

      </div>
    </div>
  );
};
