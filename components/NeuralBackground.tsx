'use client';

import React, { useEffect, useRef } from 'react';

interface NeuralNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface Signal {
  from: number;
  to: number;
  t: number;
  speed: number;
  hops: number;
}

interface NeuralBackgroundProps {
  className?: string;
  /** Multiplier for node density (1 = default). */
  density?: number;
}

/**
 * "Axon" network: drifting nodes, connecting lines, and signals that travel
 * node-to-node like nerve impulses. Reacts to touch / cursor.
 *
 * Performance guards: node count scales with area (max 64), device pixel ratio
 * capped at 1.5, animation pauses when off-screen or the tab is hidden, and a
 * single static frame is drawn when "reduce motion" is enabled.
 */
export const NeuralBackground: React.FC<NeuralBackgroundProps> = ({ className = '', density = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !host || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let nodes: NeuralNode[] = [];
    let signals: Signal[] = [];
    let raf = 0;
    let inView = true;
    let pageVisible = !document.hidden;
    let firstFrameDone = false;
    const pointer = { x: 0, y: 0, active: false };
    let pointerTimer = 0;

    const linkDistance = () => Math.min(150, Math.max(100, width / 8));

    const makeNode = (): NeuralNode => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r: Math.random() * 1.3 + 0.9,
    });

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const newWidth = Math.max(1, rect.width);
      const newHeight = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      // Scale existing nodes instead of re-randomising (avoids jumps on mobile resize).
      if (width && height) {
        const sx = newWidth / width;
        const sy = newHeight / height;
        nodes.forEach((n) => {
          n.x *= sx;
          n.y *= sy;
        });
      }
      width = newWidth;
      height = newHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.round(Math.min(64, Math.max(22, ((width * height) / 17000) * density)));
      while (nodes.length < target) nodes.push(makeNode());
      if (nodes.length > target) nodes = nodes.slice(0, target);
      signals = signals.filter((s) => s.from < nodes.length && s.to < nodes.length);
      if (reduceMotion) draw(false);
    };

    const neighbours = (index: number, link: number) => {
      const list: number[] = [];
      const a = nodes[index];
      for (let j = 0; j < nodes.length; j++) {
        if (j === index) continue;
        const dx = a.x - nodes[j].x;
        const dy = a.y - nodes[j].y;
        if (dx * dx + dy * dy < link * link) list.push(j);
      }
      return list;
    };

    const draw = (animate: boolean) => {
      ctx.clearRect(0, 0, width, height);
      const link = linkDistance();
      const link2 = link * link;
      const maxSignals = width < 640 ? 4 : 7;

      if (animate) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
          // Gentle attraction toward the finger / cursor.
          if (pointer.active) {
            const dx = pointer.x - n.x;
            const dy = pointer.y - n.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 32000 && d2 > 400) {
              n.x += dx * 0.0035;
              n.y += dy * 0.0035;
            }
          }
        }
      }

      // Connections
      ctx.lineWidth = 0.7;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < link2) {
            const alpha = (1 - Math.sqrt(d2) / link) * 0.32;
            ctx.strokeStyle = `rgba(0, 180, 255, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();

            if (animate && signals.length < maxSignals && Math.random() < 0.0009) {
              signals.push({ from: i, to: j, t: 0, speed: 0.012 + Math.random() * 0.012, hops: 0 });
            }
          }
        }
      }

      // Lines to the pointer
      if (pointer.active) {
        const reach = link * 1.25;
        for (const n of nodes) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < reach) {
            ctx.strokeStyle = `rgba(54, 197, 255, ${((1 - d / reach) * 0.75).toFixed(3)})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = 'rgba(54, 197, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Nodes
      ctx.fillStyle = 'rgba(54, 197, 255, 0.75)';
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Travelling signals (nerve impulses)
      if (animate) {
        const next: Signal[] = [];
        for (const s of signals) {
          const a = nodes[s.from];
          const b = nodes[s.to];
          if (!a || !b) continue;
          s.t += s.speed;
          const x = a.x + (b.x - a.x) * s.t;
          const y = a.y + (b.y - a.y) * s.t;

          ctx.fillStyle = 'rgba(54, 197, 255, 0.18)';
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = 'rgba(245, 248, 255, 0.95)';
          ctx.beginPath();
          ctx.arc(x, y, 1.8, 0, Math.PI * 2);
          ctx.fill();

          if (s.t < 1) {
            next.push(s);
          } else if (s.hops < 4 && Math.random() < 0.7) {
            // Impulse continues to a neighbouring node.
            const options = neighbours(s.to, link).filter((n) => n !== s.from);
            if (options.length) {
              const to = options[Math.floor(Math.random() * options.length)];
              next.push({ from: s.to, to, t: 0, speed: s.speed, hops: s.hops + 1 });
            }
          }
        }
        signals = next;
      }

      if (!firstFrameDone) {
        firstFrameDone = true;
        canvas.classList.add('is-ready');
      }
    };

    const loop = () => {
      draw(true);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (reduceMotion || raf || !inView || !pageVisible) return;
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const setPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = pointer.x >= 0 && pointer.y >= 0 && pointer.x <= rect.width && pointer.y <= rect.height;
      window.clearTimeout(pointerTimer);
      if (e.pointerType !== 'mouse') {
        // Touch: keep the effect briefly after the finger lifts.
        pointerTimer = window.setTimeout(() => (pointer.active = false), 1200);
      }
    };
    const clearPointer = () => {
      pointer.active = false;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else stop();
    });
    io.observe(host);

    const onVisibility = () => {
      pageVisible = !document.hidden;
      if (pageVisible) start();
      else stop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    if (!reduceMotion) {
      host.addEventListener('pointermove', setPointer, { passive: true });
      host.addEventListener('pointerdown', setPointer, { passive: true });
      host.addEventListener('pointerleave', clearPointer);
    }

    if (reduceMotion) draw(false);
    else start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.clearTimeout(pointerTimer);
      document.removeEventListener('visibilitychange', onVisibility);
      host.removeEventListener('pointermove', setPointer);
      host.removeEventListener('pointerdown', setPointer);
      host.removeEventListener('pointerleave', clearPointer);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`neural-canvas pointer-events-none ${className}`}
    />
  );
};
