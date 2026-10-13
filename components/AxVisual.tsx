import React from 'react';

export const AxVisual: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-xl select-none">
      {/* Outer Restrained Ambient Electric Glow */}
      <div 
        className="absolute -inset-4 rounded-3xl bg-axon-blue/20 blur-3xl pointer-events-none transform-gpu" 
        aria-hidden="true" 
      />

      {/* Main Futuristic Command Console Card */}
      <div className="relative rounded-2xl border border-axon-blue/30 bg-axon-surface/95 p-5 sm:p-7 shadow-[0_10px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 hover:border-axon-blue/60">
        
        {/* Subtle Cyber Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-axon-blue rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-axon-blue rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-axon-blue rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-axon-blue rounded-br-lg" />

        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-axon-border/90 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            <span className="ml-2 font-mono text-[11px] text-axon-dim tracking-wider">
              AXONIX.ENGINE // CORE_NEXUS
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-axon-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-axon-blue opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-axon-blue shadow-glow-sm" />
            </span>
            <span>SYSTEM ACTIVE</span>
          </div>
        </div>

        {/* Central 3D Metallic Emblem & HUD Matrix */}
        <div className="relative my-6 flex flex-col items-center justify-center py-4">
          {/* Subtle Grid Backdrop */}
          <div className="absolute inset-0 bg-grid-pattern opacity-70" />

          {/* Holographic Radar Concentric Circles */}
          <div className="absolute w-56 h-56 rounded-full border border-axon-blue/15 animate-pulse" />
          <div className="absolute w-72 h-72 rounded-full border border-axon-blue/10 border-dashed" />

          {/* Central 3D Logo Feature Display */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative group p-2">
              {/* Radial Cyan Backlighting matching the Logo */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-axon-blue/30 via-axon-accent/40 to-axon-blue/30 blur-xl opacity-90 transition-all duration-500 group-hover:opacity-100" />
              
              <img
                src="/logo.png"
                alt="Axonix Tech 3D Metallic Emblem"
                className="relative w-44 sm:w-52 h-auto rounded-xl object-contain drop-shadow-[0_15px_30px_rgba(0,180,255,0.4)] border border-axon-blue/40 shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Holographic Scanline Line */}
            <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-axon-accent to-transparent shadow-glow-sm mt-3 animate-pulse" />
          </div>

          {/* Surrounding High-Tech Telemetry Badges */}
          <div className="w-full mt-6 hidden sm:grid grid-cols-2 gap-2 text-[10px] font-mono">
            <div className="flex items-center justify-between rounded bg-axon-bg/80 px-2.5 py-1.5 border border-axon-border/70">
              <span className="text-axon-dim">INTERFACE:</span>
              <span className="text-axon-text font-bold">CYBER_CHISEL</span>
            </div>
            <div className="flex items-center justify-between rounded bg-axon-bg/80 px-2.5 py-1.5 border border-axon-border/70">
              <span className="text-axon-dim">CORE ARCH:</span>
              <span className="text-axon-blue font-bold">NEXT.JS 14</span>
            </div>
            <div className="flex items-center justify-between rounded bg-axon-bg/80 px-2.5 py-1.5 border border-axon-border/70">
              <span className="text-axon-dim">RENDER SPEED:</span>
              <span className="text-emerald-400 font-bold">OPTIMIZED</span>
            </div>
            <div className="flex items-center justify-between rounded bg-axon-bg/80 px-2.5 py-1.5 border border-axon-border/70">
              <span className="text-axon-dim">SECURITY:</span>
              <span className="text-axon-accent font-bold">EDGE ISOLATED</span>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="hidden sm:grid grid-cols-3 gap-2 border-t border-axon-border/80 pt-4 text-center">
          <div className="rounded-lg bg-axon-bg/70 p-2.5 border border-axon-border/70">
            <span className="block font-mono text-[9px] text-axon-dim uppercase">Design Language</span>
            <span className="font-mono text-xs font-semibold text-axon-text sm:text-sm">Cyber-Metallic</span>
          </div>
          <div className="rounded-lg bg-axon-bg/70 p-2.5 border border-axon-border/70">
            <span className="block font-mono text-[9px] text-axon-dim uppercase">Target Viewport</span>
            <span className="font-mono text-xs font-semibold text-axon-blue sm:text-sm">360px – 4K UHD</span>
          </div>
          <div className="rounded-lg bg-axon-bg/70 p-2.5 border border-axon-border/70">
            <span className="block font-mono text-[9px] text-axon-dim uppercase">Status</span>
            <span className="font-mono text-xs font-semibold text-emerald-400 sm:text-sm">Production Ready</span>
          </div>
        </div>

      </div>
    </div>
  );
};
