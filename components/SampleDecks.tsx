import React from 'react';
import {
  Leaf,
  Recycle,
  Truck,
  Store,
  Sparkles,
  RefreshCcw,
  Package,
  Droplets,
  Cpu,
  Cloud,
  MonitorSmartphone,
  Radio,
  Target,
  Coffee,
  MapPin,
  Users,
  Rocket,
  Mail,
  Quote,
} from 'lucide-react';

/* =====================================================================
   Sample presentation slides (web previews).
   All businesses, people and figures are fictional / sample data.
   Every slide is a 16:9 frame; sizes use container-query units (cqw)
   so slides scale perfectly from a 320px phone to a desktop screen.
   ===================================================================== */

export type SampleDeck = {
  id: string;
  title: string;
  type: string;
  description: string;
  palette: string[];
  slides: React.ReactNode[];
};

/** 16:9 slide frame. The wrapper is the size container for cqw units. */
function Slide({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className="[container-type:inline-size]">
      <div className={`relative aspect-video w-full overflow-hidden ${className}`}>{children}</div>
    </div>
  );
}

function SampleTag({ dark = true }: { dark?: boolean }) {
  return (
    <span
      className={`absolute bottom-[2.2cqw] right-[2.4cqw] rounded-[0.6cqw] px-[1cqw] py-[0.35cqw] font-mono text-[1.2cqw] uppercase tracking-wider ${
        dark ? 'bg-white/10 text-white/60' : 'bg-black/5 text-black/45'
      }`}
    >
      Sample data
    </span>
  );
}

/* ---------------------------------------------------------------
   DECK 1 — Startup pitch deck (dark, emerald)
   --------------------------------------------------------------- */
const pitchBg = 'bg-[#06140F] text-white';

const pitchSlides: React.ReactNode[] = [
  <Slide key="p1" className={pitchBg}>
    <div className="absolute -right-[8cqw] -top-[10cqw] h-[45cqw] w-[45cqw] rounded-full bg-emerald-500/25 blur-[6cqw]" />
    <div className="absolute -bottom-[14cqw] -left-[6cqw] h-[35cqw] w-[35cqw] rounded-full bg-lime-400/10 blur-[5cqw]" />
    <div className="relative flex h-full flex-col justify-center px-[7cqw]">
      <div className="flex items-center gap-[1.5cqw]">
        <span className="flex h-[6cqw] w-[6cqw] items-center justify-center rounded-[1.5cqw] bg-emerald-400 text-[#06140F]">
          <Recycle className="h-[3.6cqw] w-[3.6cqw]" />
        </span>
        <span className="text-[2.6cqw] font-bold tracking-wide">GreenLoop</span>
      </div>
      <h3 className="mt-[3cqw] max-w-[70cqw] text-[6.2cqw] font-black leading-[1.05]">
        Reusable packaging for <span className="text-emerald-400">quick-commerce</span>
      </h3>
      <p className="mt-[2cqw] text-[1.9cqw] text-white/60">Seed pitch deck • 2026</p>
    </div>
    <SampleTag />
  </Slide>,

  <Slide key="p2" className={pitchBg}>
    <div className="flex h-full flex-col px-[6cqw] py-[5cqw]">
      <p className="font-mono text-[1.5cqw] uppercase tracking-[0.3em] text-emerald-400">01 — The problem</p>
      <h3 className="mt-[1.2cqw] text-[4.2cqw] font-extrabold leading-tight">Fast delivery creates a packaging mountain</h3>
      <div className="mt-auto grid grid-cols-3 gap-[2.2cqw]">
        {[
          { Icon: Package, t: 'Single-use waste', d: 'Every order ships in new bags and boxes that are thrown away.' },
          { Icon: Store, t: 'Rising costs', d: 'Stores keep paying for packaging that customers don’t want.' },
          { Icon: Leaf, t: 'Greener customers', d: 'Shoppers increasingly prefer brands with a reuse option.' },
        ].map(({ Icon, t, d }) => (
          <div key={t} className="rounded-[1.6cqw] border border-white/10 bg-white/[0.04] p-[2.2cqw]">
            <Icon className="h-[3.4cqw] w-[3.4cqw] text-emerald-400" />
            <p className="mt-[1.4cqw] text-[2cqw] font-bold">{t}</p>
            <p className="mt-[0.8cqw] text-[1.45cqw] leading-snug text-white/60">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </Slide>,

  <Slide key="p3" className={pitchBg}>
    <div className="grid h-full grid-cols-2 items-center gap-[4cqw] px-[6cqw]">
      <div>
        <p className="font-mono text-[1.5cqw] uppercase tracking-[0.3em] text-emerald-400">02 — Our solution</p>
        <h3 className="mt-[1.2cqw] text-[4.2cqw] font-extrabold leading-tight">A closed loop, built into delivery</h3>
        <p className="mt-[2cqw] text-[1.7cqw] leading-relaxed text-white/65">
          Orders arrive in durable GreenLoop totes. Riders collect empties on the next delivery, we clean them, and
          they go back into circulation.
        </p>
      </div>
      <div className="relative mx-auto aspect-square w-[34cqw]">
        <div className="absolute inset-[4cqw] rounded-full border-[0.4cqw] border-dashed border-emerald-400/50" />
        {[
          { Icon: Truck, t: 'Deliver', pos: 'left-1/2 top-0 -translate-x-1/2' },
          { Icon: RefreshCcw, t: 'Collect', pos: 'right-0 top-1/2 -translate-y-1/2' },
          { Icon: Droplets, t: 'Clean', pos: 'bottom-0 left-1/2 -translate-x-1/2' },
          { Icon: Recycle, t: 'Reuse', pos: 'left-0 top-1/2 -translate-y-1/2' },
        ].map(({ Icon, t, pos }) => (
          <div key={t} className={`absolute flex flex-col items-center ${pos}`}>
            <span className="flex h-[8cqw] w-[8cqw] items-center justify-center rounded-full bg-emerald-400 text-[#06140F] shadow-[0_0_3cqw_rgba(52,211,153,0.5)]">
              <Icon className="h-[3.6cqw] w-[3.6cqw]" />
            </span>
            <span className="mt-[0.6cqw] text-[1.5cqw] font-semibold">{t}</span>
          </div>
        ))}
      </div>
    </div>
  </Slide>,

  <Slide key="p4" className={pitchBg}>
    <div className="flex h-full flex-col px-[6cqw] py-[5cqw]">
      <p className="font-mono text-[1.5cqw] uppercase tracking-[0.3em] text-emerald-400">03 — Pilot traction</p>
      <div className="flex items-end justify-between">
        <h3 className="mt-[1.2cqw] text-[4.2cqw] font-extrabold leading-tight">Pilot orders, month by month</h3>
        <span className="mb-[0.8cqw] text-[1.4cqw] text-white/50">Orders delivered in reusable totes</span>
      </div>
      <div className="mt-[3cqw] flex flex-1 items-end gap-[2.4cqw] border-b border-l border-white/15 pb-[0.5cqw] pl-[1.5cqw]">
        {[18, 26, 35, 47, 62, 80].map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center justify-end gap-[0.8cqw] self-stretch">
            <span className="text-[1.4cqw] font-bold text-emerald-300">{h * 10}</span>
            <div
              className="w-full rounded-t-[0.8cqw] bg-gradient-to-t from-emerald-600 to-emerald-300"
              style={{ height: `${h}%` }}
            />
            <span className="text-[1.3cqw] text-white/55">M{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
    <SampleTag />
  </Slide>,

  <Slide key="p5" className={pitchBg}>
    <div className="grid h-full grid-cols-2 items-center gap-[5cqw] px-[6cqw]">
      <div>
        <p className="font-mono text-[1.5cqw] uppercase tracking-[0.3em] text-emerald-400">04 — The ask</p>
        <h3 className="mt-[1.2cqw] text-[4.6cqw] font-black leading-tight">
          Raising a <span className="text-emerald-400">seed round</span> to scale to 3 cities
        </h3>
        <div className="mt-[3cqw] space-y-[1.3cqw]">
          {[
            ['bg-emerald-400', 'Tote inventory & cleaning hub', '40%'],
            ['bg-lime-300', 'Store partnerships', '35%'],
            ['bg-teal-600', 'Team & technology', '25%'],
          ].map(([c, t, p]) => (
            <div key={t} className="flex items-center gap-[1.4cqw] text-[1.7cqw]">
              <span className={`h-[1.6cqw] w-[1.6cqw] rounded-[0.4cqw] ${c}`} />
              <span className="flex-1 text-white/75">{t}</span>
              <span className="font-mono font-bold">{p}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mx-auto aspect-square w-[28cqw]">
        <div
          className="h-full w-full rounded-full"
          style={{ background: 'conic-gradient(#34d399 0 40%, #bef264 40% 75%, #0d9488 75% 100%)' }}
        />
        <div className="absolute inset-[6cqw] flex flex-col items-center justify-center rounded-full bg-[#06140F]">
          <span className="text-[1.4cqw] uppercase tracking-widest text-white/50">Use of funds</span>
          <span className="text-[3cqw] font-black">100%</span>
        </div>
      </div>
    </div>
    <SampleTag />
  </Slide>,
];

/* ---------------------------------------------------------------
   DECK 2 — College / academic project (light, clean blue)
   --------------------------------------------------------------- */
const academicBg = 'bg-white text-slate-800';

const academicSlides: React.ReactNode[] = [
  <Slide key="a1" className={academicBg}>
    <div className="absolute inset-y-0 left-0 w-[2.2cqw] bg-blue-600" />
    <div className="absolute right-0 top-0 h-full w-[38cqw] bg-gradient-to-br from-blue-50 to-sky-100" />
    <div className="absolute right-[6cqw] top-1/2 grid -translate-y-1/2 grid-cols-3 gap-[1.6cqw]">
      {[Radio, Cpu, Cloud, MonitorSmartphone, Recycle, Target].map((Icon, i) => (
        <span key={i} className="flex h-[7.5cqw] w-[7.5cqw] items-center justify-center rounded-[1.6cqw] bg-white text-blue-600 shadow-[0_0.6cqw_2cqw_rgba(37,99,235,0.15)]">
          <Icon className="h-[3.4cqw] w-[3.4cqw]" />
        </span>
      ))}
    </div>
    <div className="relative flex h-full max-w-[58cqw] flex-col justify-center pl-[7cqw]">
      <p className="text-[1.5cqw] font-semibold uppercase tracking-[0.25em] text-blue-600">Final year project</p>
      <h3 className="mt-[1.4cqw] text-[5cqw] font-extrabold leading-[1.08] text-slate-900">
        Smart Waste Segregation Using IoT
      </h3>
      <div className="mt-[3cqw] space-y-[0.6cqw] text-[1.6cqw] text-slate-500">
        <p>Presented by: Student Name</p>
        <p>Guide: Prof. Guide Name • Dept. of Computer Science</p>
      </div>
    </div>
  </Slide>,

  <Slide key="a2" className={academicBg}>
    <div className="flex h-full flex-col px-[6cqw] py-[5cqw]">
      <h3 className="text-[3.8cqw] font-extrabold text-slate-900">
        Objectives<span className="text-blue-600">.</span>
      </h3>
      <div className="mt-[0.8cqw] h-[0.5cqw] w-[8cqw] rounded-full bg-blue-600" />
      <div className="mt-auto grid grid-cols-2 gap-[2cqw]">
        {[
          'Detect and sort dry, wet and metal waste automatically',
          'Monitor bin fill levels in real time',
          'Send alerts when bins need emptying',
          'Show data on a simple web dashboard',
        ].map((t, i) => (
          <div key={t} className="flex items-start gap-[1.6cqw] rounded-[1.4cqw] border border-slate-200 bg-slate-50 p-[2cqw]">
            <span className="flex h-[4.4cqw] w-[4.4cqw] shrink-0 items-center justify-center rounded-full bg-blue-600 text-[1.9cqw] font-bold text-white">
              {i + 1}
            </span>
            <p className="text-[1.8cqw] leading-snug text-slate-700">{t}</p>
          </div>
        ))}
      </div>
    </div>
  </Slide>,

  <Slide key="a3" className={academicBg}>
    <div className="flex h-full flex-col px-[6cqw] py-[5cqw]">
      <h3 className="text-[3.8cqw] font-extrabold text-slate-900">
        System architecture<span className="text-blue-600">.</span>
      </h3>
      <div className="mt-[0.8cqw] h-[0.5cqw] w-[8cqw] rounded-full bg-blue-600" />
      <div className="my-auto flex items-center justify-between">
        {[
          { Icon: Radio, t: 'Sensors', d: 'Moisture, IR, metal' },
          { Icon: Cpu, t: 'Controller', d: 'Classifies & sorts' },
          { Icon: Cloud, t: 'Cloud', d: 'Stores readings' },
          { Icon: MonitorSmartphone, t: 'Dashboard', d: 'Alerts & reports' },
        ].map(({ Icon, t, d }, i, arr) => (
          <React.Fragment key={t}>
            <div className="flex w-[16cqw] flex-col items-center rounded-[1.6cqw] border-[0.25cqw] border-blue-100 bg-white p-[1.8cqw] text-center shadow-[0_0.8cqw_2.4cqw_rgba(15,23,42,0.08)]">
              <span className="flex h-[6cqw] w-[6cqw] items-center justify-center rounded-[1.2cqw] bg-blue-600 text-white">
                <Icon className="h-[3.2cqw] w-[3.2cqw]" />
              </span>
              <p className="mt-[1.2cqw] text-[1.9cqw] font-bold text-slate-900">{t}</p>
              <p className="mt-[0.4cqw] text-[1.35cqw] text-slate-500">{d}</p>
            </div>
            {i < arr.length - 1 && (
              <div className="flex flex-1 items-center px-[0.8cqw]">
                <div className="h-[0.35cqw] flex-1 bg-blue-200" />
                <div className="h-0 w-0 border-y-[1cqw] border-l-[1.5cqw] border-y-transparent border-l-blue-300" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </Slide>,

  <Slide key="a4" className={academicBg}>
    <div className="flex h-full flex-col px-[6cqw] py-[5cqw]">
      <h3 className="text-[3.8cqw] font-extrabold text-slate-900">
        Methodology &amp; timeline<span className="text-blue-600">.</span>
      </h3>
      <div className="mt-[0.8cqw] h-[0.5cqw] w-[8cqw] rounded-full bg-blue-600" />
      <div className="relative my-auto">
        <div className="absolute left-0 right-0 top-[2.2cqw] h-[0.4cqw] bg-blue-100" />
        <div className="relative grid grid-cols-4 gap-[2cqw]">
          {[
            ['Phase 1', 'Research', 'Literature review & requirements'],
            ['Phase 2', 'Design', 'Circuit & database design'],
            ['Phase 3', 'Build', 'Prototype & dashboard'],
            ['Phase 4', 'Test', 'Testing & final report'],
          ].map(([p, t, d], i) => (
            <div key={p}>
              <span className={`flex h-[4.8cqw] w-[4.8cqw] items-center justify-center rounded-full border-[0.5cqw] border-white text-[1.7cqw] font-bold text-white shadow ${i < 3 ? 'bg-blue-600' : 'bg-sky-400'}`}>
                {i + 1}
              </span>
              <p className="mt-[1.6cqw] text-[1.3cqw] font-mono uppercase tracking-wider text-blue-600">{p}</p>
              <p className="mt-[0.4cqw] text-[2.1cqw] font-bold text-slate-900">{t}</p>
              <p className="mt-[0.4cqw] text-[1.45cqw] leading-snug text-slate-500">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Slide>,

  <Slide key="a5" className="bg-blue-600 text-white">
    <div className="absolute -right-[10cqw] -top-[12cqw] h-[40cqw] w-[40cqw] rounded-full border-[3cqw] border-white/10" />
    <div className="absolute -bottom-[16cqw] left-[20cqw] h-[34cqw] w-[34cqw] rounded-full bg-white/5" />
    <div className="relative flex h-full flex-col items-center justify-center text-center">
      <p className="text-[1.6cqw] font-semibold uppercase tracking-[0.3em] text-blue-100">Conclusion</p>
      <h3 className="mt-[1.5cqw] max-w-[70cqw] text-[3.6cqw] font-extrabold leading-tight">
        A low-cost prototype that makes waste segregation automatic and measurable
      </h3>
      <p className="mt-[4cqw] text-[6cqw] font-black">Thank you!</p>
      <p className="text-[1.8cqw] text-blue-100">Questions?</p>
    </div>
  </Slide>,
];

/* ---------------------------------------------------------------
   DECK 3 — Business proposal (warm cream & charcoal)
   --------------------------------------------------------------- */
const cafeBg = 'bg-[#F6EFE6] text-[#2B2118]';

const cafeSlides: React.ReactNode[] = [
  <Slide key="c1" className={cafeBg}>
    <div className="absolute right-0 top-0 h-full w-[45cqw] bg-[#2B2118]">
      <div className="absolute left-1/2 top-1/2 h-[26cqw] w-[26cqw] -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.3cqw] border-[#C8873A]/50" />
      <div className="absolute left-1/2 top-1/2 flex h-[18cqw] w-[18cqw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C8873A] text-[#2B2118]">
        <Coffee className="h-[8cqw] w-[8cqw]" />
      </div>
    </div>
    <div className="relative flex h-full max-w-[52cqw] flex-col justify-center pl-[6cqw]">
      <p className="text-[1.5cqw] font-semibold uppercase tracking-[0.3em] text-[#C8873A]">Business proposal</p>
      <h3 className="mt-[1.5cqw] font-serif text-[6cqw] font-bold leading-[1.02]">Brew &amp; Bloom Café</h3>
      <p className="mt-[2cqw] text-[1.9cqw] leading-relaxed text-[#2B2118]/70">
        A specialty coffee &amp; flower café for students and young professionals
      </p>
      <div className="mt-[3cqw] h-[0.4cqw] w-[10cqw] bg-[#C8873A]" />
    </div>
  </Slide>,

  <Slide key="c2" className={cafeBg}>
    <div className="grid h-full grid-cols-5 items-center gap-[4cqw] px-[6cqw]">
      <div className="col-span-3">
        <Quote className="h-[5cqw] w-[5cqw] text-[#C8873A]" />
        <h3 className="mt-[1cqw] font-serif text-[4.2cqw] font-bold leading-tight">
          A calm corner to work, meet and unwind — with great coffee.
        </h3>
        <p className="mt-[2cqw] text-[1.7cqw] leading-relaxed text-[#2B2118]/70">
          Our concept blends a specialty coffee bar with a small fresh-flower counter, designed around comfortable
          seating, fast Wi-Fi and a short, quality-focused menu.
        </p>
      </div>
      <div className="col-span-2 space-y-[1.6cqw]">
        {[
          { Icon: Users, t: 'Who', d: 'Students & young professionals' },
          { Icon: MapPin, t: 'Where', d: 'Near colleges & co-working hubs' },
          { Icon: Sparkles, t: 'Why us', d: 'Café + flowers under one roof' },
        ].map(({ Icon, t, d }) => (
          <div key={t} className="flex items-center gap-[1.6cqw] rounded-[1.4cqw] bg-white p-[1.6cqw] shadow-[0_0.6cqw_2cqw_rgba(43,33,24,0.08)]">
            <span className="flex h-[5cqw] w-[5cqw] shrink-0 items-center justify-center rounded-full bg-[#2B2118] text-[#C8873A]">
              <Icon className="h-[2.6cqw] w-[2.6cqw]" />
            </span>
            <div>
              <p className="text-[1.3cqw] font-mono uppercase tracking-wider text-[#C8873A]">{t}</p>
              <p className="text-[1.7cqw] font-semibold">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Slide>,

  <Slide key="c3" className={cafeBg}>
    <div className="flex h-full flex-col px-[6cqw] py-[5cqw]">
      <p className="text-[1.5cqw] font-semibold uppercase tracking-[0.3em] text-[#C8873A]">Menu &amp; pricing</p>
      <h3 className="mt-[1cqw] font-serif text-[4cqw] font-bold">Simple menu, healthy margins</h3>
      <div className="mt-auto overflow-hidden rounded-[1.6cqw] bg-white shadow-[0_0.8cqw_2.4cqw_rgba(43,33,24,0.08)]">
        <div className="grid grid-cols-4 bg-[#2B2118] px-[2.4cqw] py-[1.4cqw] text-[1.45cqw] font-semibold uppercase tracking-wider text-[#F6EFE6]">
          <span className="col-span-2">Category</span>
          <span>Price range</span>
          <span className="text-right">Best seller</span>
        </div>
        {[
          ['Specialty coffee', '₹160 – ₹260', 'Cold brew'],
          ['Tea & coolers', '₹120 – ₹200', 'Hibiscus iced tea'],
          ['Bakes & bites', '₹90 – ₹220', 'Almond croissant'],
          ['Flower bunches', '₹250 – ₹600', 'Seasonal mini bouquet'],
        ].map(([c, p, b], i) => (
          <div key={c} className={`grid grid-cols-4 px-[2.4cqw] py-[1.5cqw] text-[1.7cqw] ${i % 2 ? 'bg-[#F6EFE6]/60' : ''}`}>
            <span className="col-span-2 font-semibold">{c}</span>
            <span className="font-mono">{p}</span>
            <span className="text-right text-[#2B2118]/70">{b}</span>
          </div>
        ))}
      </div>
    </div>
    <SampleTag dark={false} />
  </Slide>,

    <Slide key="c4" className={cafeBg}>
    <div className="flex h-full flex-col px-[6cqw] py-[5cqw]">
      <p className="text-[1.5cqw] font-semibold uppercase tracking-[0.3em] text-[#C8873A]">Growth plan</p>
      <h3 className="mt-[1cqw] font-serif text-[4cqw] font-bold">From one café to a loved local brand</h3>
      <div className="mt-auto grid grid-cols-3 gap-[2.4cqw]">
        {[
          { Icon: Coffee, n: 'Year 1', t: 'Launch', d: 'Open the first café, build regulars and gather feedback.' },
          { Icon: Users, n: 'Year 2', t: 'Community', d: 'Workshops, student offers and corporate gifting.' },
          { Icon: Rocket, n: 'Year 3', t: 'Expand', d: 'Open a second outlet and add online orders.' },
        ].map(({ Icon, n, t, d }, i) => (
          <div key={n} className={`rounded-[1.8cqw] p-[2.4cqw] ${i === 2 ? 'bg-[#2B2118] text-[#F6EFE6]' : 'bg-white'}`}>
            <div className="flex items-center justify-between">
              <Icon className="h-[3.4cqw] w-[3.4cqw] text-[#C8873A]" />
              <span className="font-mono text-[1.4cqw] text-[#C8873A]">{n}</span>
            </div>
            <p className="mt-[2cqw] font-serif text-[2.6cqw] font-bold">{t}</p>
            <p className={`mt-[0.8cqw] text-[1.5cqw] leading-snug ${i === 2 ? 'text-[#F6EFE6]/70' : 'text-[#2B2118]/65'}`}>{d}</p>
          </div>
        ))}
      </div>
    </div>
  </Slide>,

  <Slide key="c5" className="bg-[#2B2118] text-[#F6EFE6]">
    <div className="absolute -left-[8cqw] -top-[8cqw] h-[30cqw] w-[30cqw] rounded-full bg-[#C8873A]/20 blur-[4cqw]" />
    <div className="relative flex h-full flex-col items-center justify-center text-center">
      <Coffee className="h-[6cqw] w-[6cqw] text-[#C8873A]" />
      <h3 className="mt-[2cqw] font-serif text-[6cqw] font-bold">Let&rsquo;s brew something great</h3>
      <p className="mt-[1.5cqw] text-[1.9cqw] text-[#F6EFE6]/70">Thank you for your time</p>
      <div className="mt-[3cqw] flex items-center gap-[1.2cqw] rounded-full border border-[#C8873A]/50 px-[2.4cqw] py-[1cqw] text-[1.6cqw]">
        <Mail className="h-[2cqw] w-[2cqw] text-[#C8873A]" />
        hello@brewandbloom.example
      </div>
    </div>
  </Slide>,
];

export const SAMPLE_DECKS: SampleDeck[] = [
  {
    id: 'startup-pitch',
    title: 'Startup Pitch Deck',
    type: 'Investor pitch • Dark theme',
    description: 'Bold, data-led slides for founders: problem, solution diagram, traction chart and funding ask.',
    palette: ['#06140F', '#34D399', '#BEF264', '#FFFFFF'],
    slides: pitchSlides,
  },
  {
    id: 'college-project',
    title: 'College Project Presentation',
    type: 'Academic • Clean light theme',
    description: 'Clear, professional slides for students: objectives, system architecture, timeline and conclusion.',
    palette: ['#FFFFFF', '#2563EB', '#E0F2FE', '#0F172A'],
    slides: academicSlides,
  },
  {
    id: 'business-proposal',
    title: 'Business Proposal',
    type: 'Business • Warm premium theme',
    description: 'Elegant slides for business owners: concept, audience, pricing table and growth roadmap.',
    palette: ['#F6EFE6', '#2B2118', '#C8873A', '#FFFFFF'],
    slides: cafeSlides,
  },
];
