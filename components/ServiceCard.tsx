import React from 'react';
import { 
  Palette, 
  Smartphone, 
  Flame, 
  RefreshCw, 
  LayoutGrid, 
  BriefcaseBusiness,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export interface ServiceItem {
  id: string;
  iconName: 'palette' | 'responsive' | 'landing' | 'redesign' | 'uiux' | 'business';
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
}

interface ServiceCardProps {
  service: ServiceItem;
  detailed?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, detailed = false }) => {
  const getIcon = (type: string) => {
    const props = { className: "h-6 w-6 text-axon-blue" };
    switch (type) {
      case 'palette': return <Palette {...props} />;
      case 'responsive': return <Smartphone {...props} />;
      case 'landing': return <Flame {...props} />;
      case 'redesign': return <RefreshCw {...props} />;
      case 'uiux': return <LayoutGrid {...props} />;
      case 'business': return <BriefcaseBusiness {...props} />;
      default: return <Palette {...props} />;
    }
  };

  return (
    <div 
      id={service.id}
      className="group relative flex flex-col justify-between rounded-2xl border border-axon-border bg-axon-surface/70 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-axon-blue/40 hover:bg-axon-surface hover:shadow-glow-sm"
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-axon-border bg-axon-bg transition-colors duration-200 group-hover:border-axon-blue/50 group-hover:bg-axon-blue/10">
            {getIcon(service.iconName)}
          </div>
          <span className="font-mono text-xs text-axon-dim uppercase tracking-wider">
            {service.badge}
          </span>
        </div>

        {/* Title & Core Description */}
        <h3 className="mt-5 text-xl font-bold tracking-tight text-axon-text group-hover:text-axon-accent transition-colors">
          {service.title}
        </h3>

        <p className="mt-3 text-sm text-axon-muted leading-relaxed">
          {detailed ? service.fullDesc : service.shortDesc}
        </p>

        {/* Deliverables List */}
        <div className="mt-5 space-y-2 border-t border-axon-border/60 pt-4">
          <span className="text-[11px] font-mono uppercase tracking-wider text-axon-dim">
            Key Deliverables
          </span>
          <ul className="space-y-1.5 text-xs text-axon-text">
            {service.deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-axon-blue shrink-0 mt-0.5" />
                <span className="text-axon-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack & Action Footer */}
      <div className="mt-6 border-t border-axon-border/60 pt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {service.techStack.map((tech, i) => (
            <span
              key={i}
              className="rounded bg-axon-bg px-2 py-0.5 font-mono text-[10px] text-axon-dim border border-axon-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-1 text-xs font-mono font-medium text-axon-blue hover:text-axon-accent transition-colors group-hover:translate-x-0.5"
          aria-label={`Inquire about ${service.title}`}
        >
          <span>Enquire</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
};
