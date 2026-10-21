import React from 'react';
import { Activity, ArrowUpRight, Layers, Sparkles } from 'lucide-react';

/**
 * A lightweight, CSS-built spatial brand visual. The card uses real DOM layers
 * rather than WebGL, so the depth effect stays quick on mobile and works in
 * reduced-motion environments.
 */
export const AxVisual: React.FC = () => {
  return (
    <div className="spatial-visual-wrap" data-reveal="zoom">
      <div className="spatial-aura spatial-aura--one" aria-hidden="true" />
      <div className="spatial-aura spatial-aura--two" aria-hidden="true" />

      <div
        className="spatial-visual"
        data-spotlight
        data-tilt
        role="img"
        aria-label="A floating Axonix Tech identity core surrounded by orbital interface layers"
      >
        <div className="spatial-base-glass" aria-hidden="true" />
        <div className="spatial-windowbar" aria-hidden="true">
          <div className="spatial-window-brand">
            <span className="spatial-window-mark">A</span>
            <span>AXONIX <i>/</i> EXPERIENCE ENGINE</span>
          </div>
          <span className="spatial-live"><span /> LIVE SYSTEM</span>
        </div>

        <div className="spatial-stage" aria-hidden="true">
          <div className="spatial-stage-glow" data-depth="3" />
          <div className="spatial-floor-grid" />
          <div className="spatial-horizon" />

          <div className="spatial-orbit spatial-orbit--wide" data-depth="4" />
          <div className="spatial-orbit spatial-orbit--upright" data-depth="9" />
          <div className="spatial-orbit spatial-orbit--halo" data-depth="6" />
          <span className="spatial-orbit-point spatial-orbit-point--one" />
          <span className="spatial-orbit-point spatial-orbit-point--two" />
          <span className="spatial-orbit-point spatial-orbit-point--three" />

          <div className="spatial-core-shadow" />
          <div className="spatial-core-float" data-depth="18">
            <div className="spatial-core-shell">
              <div className="spatial-core-light" />
              <img src="/logo.png" alt="" />
            </div>
          </div>

          <div className="spatial-float-card spatial-float-card--left" data-depth="13">
            <span className="spatial-card-icon"><Layers size={15} /></span>
            <span className="spatial-card-copy"><small>DESIGN SYSTEM</small><strong>One clear story</strong></span>
            <span className="spatial-card-check">✓</span>
          </div>

          <div className="spatial-float-card spatial-float-card--right" data-depth="15">
            <span className="spatial-card-icon spatial-card-icon--mint"><Activity size={15} /></span>
            <span className="spatial-card-copy"><small>PERFORMANCE</small><strong>Made to move</strong></span>
            <span className="spatial-card-spark"><Sparkles size={13} /></span>
          </div>

          <div className="spatial-mini-stat spatial-mini-stat--top" data-depth="11">
            <span>360°</span><small>every screen</small>
          </div>

          <div className="spatial-mini-stat spatial-mini-stat--bottom" data-depth="8">
            <span className="spatial-mini-stat-dot" />
            <span>LIVE <small>by design</small></span>
          </div>
        </div>

        <div className="spatial-footer" aria-hidden="true">
          <div className="spatial-footer-copy">
            <span>DIMENSION / 01</span>
            <strong>Ideas, brought to life.</strong>
          </div>
          <div className="spatial-footer-meter">
            <span>DESIGN</span><i /><i /><i /><i /><i />
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>

      <span className="spatial-caption" aria-hidden="true">
        <span className="spatial-caption-line" />
        <span>DESIGN <b>×</b> TECHNOLOGY <b>×</b> MOTION</span>
      </span>
    </div>
  );
};
