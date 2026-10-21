'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Check, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  category: string;
  badge: string;
  description: string;
  highlights: string[];
  mockupType: 'restaurant' | 'coaching' | 'startup';
  colorTheme: string;
  demoUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Determine direct live demo URL if available
  const liveDemoUrl = 
    project.demoUrl || (
      project.mockupType === 'coaching' 
        ? '/demo/coaching' 
        : project.mockupType === 'restaurant' 
        ? '/demo/restaurant' 
        : undefined
    );

  return (
    <article data-spotlight data-tilt className="group relative flex flex-col overflow-hidden rounded-2xl border border-axon-border bg-axon-surface/90 shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-axon-blue/50 hover:shadow-glow-sm">
      
      {/* Interactive Browser Frame Mockup */}
      <div className="border-b border-axon-border/80 bg-axon-bg/90 p-3 sm:p-4">
        <div className="flex items-center justify-between pb-3 border-b border-axon-border/60">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-2 font-mono text-[10px] text-axon-dim truncate max-w-[150px] sm:max-w-xs">
              https://demo.{project.id}.axonix.dev
            </span>
          </div>
          {liveDemoUrl ? (
            <Link
              href={liveDemoUrl}
              className="inline-flex items-center gap-1 rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-colors"
            >
              <span>CLICK TO TEST</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1 rounded bg-axon-blue/15 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-axon-accent border border-axon-blue/30">
              DEMO CONCEPT
            </span>
          )}
        </div>

        {/* Visual Preview Graphic: Bespoke CSS/SVG per Project Type */}
        <div className="relative mt-3 h-48 sm:h-56 w-full overflow-hidden rounded-lg bg-axon-bg border border-axon-border/70 flex flex-col justify-between p-3 select-none">
          
          {project.mockupType === 'restaurant' && (
            <div className="h-full w-full flex flex-col justify-between">
              {/* Restaurant Header */}
              <div className="flex items-center justify-between border-b border-axon-border/40 pb-2">
                <div className="flex items-center gap-2">
                  <span className="font-serif italic text-axon-text text-sm font-bold tracking-wider">
                    AURA
                  </span>
                  <span className="text-[9px] font-mono text-axon-dim uppercase">Culinary Studio</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[9px] text-axon-muted hidden sm:inline">Menu</span>
                  <span className="text-[9px] text-axon-muted hidden sm:inline">Private Dining</span>
                  <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[9px] font-medium text-amber-300 border border-amber-500/30">
                    Book Table
                  </span>
                </div>
              </div>

              {/* Ambient Restaurant Body Mockup */}
              <div className="my-auto py-2">
                <div className="text-center space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-amber-400 font-mono">
                    Artisan Gastronomy
                  </span>
                  <p className="text-base sm:text-lg font-serif font-medium text-axon-text">
                    Woodfired Flavour &amp; Contemporary Ambiance
                  </p>
                  <p className="text-[10px] text-axon-muted max-w-xs mx-auto line-clamp-1">
                    Authentic recipes, seasonal ingredients, and signature cocktails.
                  </p>
                </div>

                {/* 3 Sample Dish Cards */}
                <div className="mt-3 grid grid-cols-3 gap-1.5 text-left">
                  <div className="rounded bg-axon-surface/80 p-1.5 border border-axon-border/50">
                    <span className="block text-[9px] font-medium text-axon-text truncate">Truffle Risotto</span>
                    <span className="text-[8px] font-mono text-axon-accent">₹680</span>
                  </div>
                  <div className="rounded bg-axon-surface/80 p-1.5 border border-axon-border/50">
                    <span className="block text-[9px] font-medium text-axon-text truncate">Charred Sea Bass</span>
                    <span className="text-[8px] font-mono text-axon-accent">₹820</span>
                  </div>
                  <div className="rounded bg-axon-surface/80 p-1.5 border border-axon-border/50">
                    <span className="block text-[9px] font-medium text-axon-text truncate">Burrata Pistachio</span>
                    <span className="text-[8px] font-mono text-axon-accent">₹540</span>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between pt-1 border-t border-axon-border/40 text-[9px] font-mono text-axon-dim">
                <span>OPEN: 12:00 PM – 11:30 PM</span>
                <span className="text-emerald-400">● 1-Tap Table Reservation Ready</span>
              </div>
            </div>
          )}

          {project.mockupType === 'coaching' && (
            <div className="h-full w-full flex flex-col justify-between">
              {/* Coaching Institute Header */}
              <div className="flex items-center justify-between border-b border-axon-border/40 pb-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-4 w-4 rounded bg-axon-blue flex items-center justify-center text-[9px] font-bold text-axon-bg">
                    A
                  </div>
                  <span className="font-sans font-bold text-axon-text text-xs tracking-tight">
                    APEX ACADEMY
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-axon-blue/20 px-2 py-0.5 text-[9px] font-semibold text-axon-accent border border-axon-blue/40">
                    2026 Admissions Open
                  </span>
                </div>
              </div>

              {/* Coaching Institute Hero Mockup */}
              <div className="my-auto py-2">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1 rounded bg-axon-surface px-1.5 py-0.5 text-[8px] font-mono text-axon-dim border border-axon-border">
                    <span>JEE • NEET • FOUNDATION</span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-axon-text">
                    Structured Learning. Proven Results.
                  </p>
                  <p className="text-[10px] text-axon-muted line-clamp-1">
                    Small batch sizes of 25 students, dedicated mentors, and comprehensive mock tests.
                  </p>
                </div>

                {/* Batch Highlights */}
                <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
                  <div className="rounded bg-axon-surface/80 p-1.5 border border-axon-border/50">
                    <span className="block text-[8px] text-axon-dim font-mono">RANKERS</span>
                    <span className="text-[10px] font-bold text-axon-text">Top 100 AIR</span>
                  </div>
                  <div className="rounded bg-axon-surface/80 p-1.5 border border-axon-border/50">
                    <span className="block text-[8px] text-axon-dim font-mono">FACULTY</span>
                    <span className="text-[10px] font-bold text-axon-blue">Ex-IITians</span>
                  </div>
                  <div className="rounded bg-axon-surface/80 p-1.5 border border-axon-border/50">
                    <span className="block text-[8px] text-axon-dim font-mono">DOUBTS</span>
                    <span className="text-[10px] font-bold text-emerald-400">1-on-1 Daily</span>
                  </div>
                </div>
              </div>

              {/* Bottom Lead Bar */}
              <div className="flex items-center justify-between pt-1 border-t border-axon-border/40 text-[9px]">
                <span className="text-axon-dim font-mono">Next Batch Starts: Nov 1</span>
                <span className="text-axon-blue font-semibold">Download Syllabus PDF &rarr;</span>
              </div>
            </div>
          )}

          {project.mockupType === 'startup' && (
            <div className="h-full w-full flex flex-col justify-between">
              {/* Tech Startup Header */}
              <div className="flex items-center justify-between border-b border-axon-border/40 pb-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-sm bg-cyan-400 flex items-center justify-center" />
                  <span className="font-mono text-xs font-bold text-axon-text tracking-wide">
                    SYNTHETIX
                  </span>
                  <span className="text-[9px] font-mono text-axon-blue">v2.4-edge</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[9px] text-emerald-400">99.99% HEALTHY</span>
                </div>
              </div>

              {/* Code Snippet & Architecture Mockup */}
              <div className="my-auto py-1">
                <div className="rounded bg-axon-surface/95 p-2 font-mono text-[9px] border border-axon-border/80 text-axon-muted">
                  <div className="flex items-center justify-between pb-1 border-b border-axon-border/40 text-[8px] text-axon-dim">
                    <span>cluster.config.ts</span>
                    <span>REST / GraphQL</span>
                  </div>
                  <p className="mt-1 text-axon-blue">
                    <span className="text-pink-400">const</span> engine = <span className="text-cyan-300">new</span> SynthetixCluster(&#123;
                  </p>
                  <p className="pl-3 text-axon-text">
                    region: <span className="text-amber-300">&apos;in-del-01&apos;</span>, latency: <span className="text-emerald-400">&apos;1.2ms&apos;</span>
                  </p>
                  <p className="text-axon-blue">&#125;);</p>
                </div>
              </div>

              {/* Telemetry Metrics */}
              <div className="flex items-center justify-between pt-1 border-t border-axon-border/40 text-[9px] font-mono text-axon-dim">
                <span>0.8ms EDGE LATENCY</span>
                <span className="text-cyan-300">SERVERLESS ENGINE</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Card Body Information */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Metadata Badges */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-mono font-medium text-axon-blue">
              {project.category}
            </span>
            <span className="rounded-full border border-axon-border px-2.5 py-0.5 font-mono text-[10px] text-axon-dim">
              {project.badge}
            </span>
          </div>

          <h3 className="mt-2 text-xl font-bold tracking-tight text-axon-text group-hover:text-axon-accent transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-axon-muted leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.highlights.map((h, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 rounded bg-axon-surface px-2 py-1 font-mono text-[11px] text-axon-text border border-axon-border/70"
              >
                <Check className="h-3 w-3 text-axon-blue" />
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Live Demo Trigger & Specs */}
        <div className="mt-6 border-t border-axon-border/70 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {liveDemoUrl ? (
            <Link
              href={liveDemoUrl}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-axon-blue/15 border border-axon-blue/40 px-4 py-2 text-xs font-bold text-axon-accent hover:bg-axon-blue hover:text-axon-bg transition-all active:scale-95 shadow-sm"
            >
              <span>Launch Live Demo Website</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          ) : (
            <div className="flex items-center gap-2 text-xs font-mono text-axon-dim">
              <Layers className="h-3.5 w-3.5 text-axon-blue" />
              <span>Full Stack Architecture</span>
            </div>
          )}

          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs font-mono font-semibold text-axon-dim hover:text-axon-text transition-colors self-end sm:self-center"
          >
            {showDetails ? 'Hide Specs' : 'View Specs'}
          </button>
        </div>

        {/* Expandable Technical Specification */}
        {showDetails && (
          <div className="mt-4 rounded-lg bg-axon-bg/80 p-3.5 border border-axon-border text-xs text-axon-muted space-y-2 animate-in fade-in duration-150">
            <div className="flex justify-between font-mono text-[11px] pb-1 border-b border-axon-border/50">
              <span className="text-axon-dim">DESIGN SPEC:</span>
              <span className="text-axon-text">{project.tagline}</span>
            </div>
            <p className="text-[11px] text-axon-muted">
              Built with responsive grid layouts, optimized for quick mobile loading, accessible contrast ratios, and conversion-centered visual hierarchies.
            </p>
          </div>
        )}

      </div>
    </article>
  );
};
