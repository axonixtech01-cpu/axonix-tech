'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle2, 
  Activity, 
  Clock, 
  MapPin, 
  Eye, 
  Calendar,
  ShieldCheck,
  Star,
  Phone
} from 'lucide-react';

const SERVICES = [
  {
    id: 'physio',
    name: 'Advanced Spine & Posture Therapy',
    price: '₹1,200',
    duration: '45 Mins',
    desc: 'Targeted relief for neck stiffness, chronic lower back pain, and slip disc recovery.',
    badge: 'Most Booked',
  },
  {
    id: 'sports',
    name: 'Sports Injury Rehabilitation',
    price: '₹1,500',
    duration: '60 Mins',
    desc: 'Functional mobility training, ligament strain recovery, and pre-competition conditioning.',
    badge: 'Athlete Choice',
  },
  {
    id: 'ergonomic',
    name: 'Corporate Desk Worker Relief',
    price: '₹950',
    duration: '35 Mins',
    desc: 'Rapid decompression for carpal tunnel, tech-neck, and shoulder impingement.',
    badge: 'Quick Session',
  },
  {
    id: 'elderly',
    name: 'Geriatric Joint Mobility Care',
    price: '₹1,100',
    duration: '45 Mins',
    desc: 'Gentle knee osteoarthritis care, balance training, and pain management for seniors.',
    badge: 'Gentle Care',
  },
];

export default function BusinessDemoPage() {
  const [ownerMode, setOwnerMode] = useState(false);
  const [selectedService, setSelectedService] = useState('physio');
  const [booked, setBooked] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    slot: 'Tomorrow (11:00 AM)',
  });

  const activeService = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingForm.name.trim() && bookingForm.phone.trim()) {
      setBooked(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#061118] text-[#F0F8FA] font-sans selection:bg-teal-500 selection:text-black pb-20">
      
      {/* Top Banner: Axonix Tech Portfolio Notice & Owner Mode */}
      <div className="sticky top-0 z-50 border-b border-teal-500/30 bg-[#091B24] px-4 py-2.5 text-xs font-sans">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <Link
              href="/work"
              className="inline-flex items-center gap-1 font-mono font-semibold text-teal-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Axonix Tech</span>
            </Link>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="rounded bg-teal-500/20 px-2 py-0.5 font-mono text-[10px] text-teal-300 border border-teal-500/30">
              CLINIC &amp; SMALL BUSINESS DEMO
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOwnerMode(!ownerMode)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-bold transition-all ${
                ownerMode
                  ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                  : 'border border-zinc-700 bg-zinc-800 text-zinc-300 hover:text-white'
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>{ownerMode ? 'Owner Explainer: ON' : 'Turn On "Why This Converts"'}</span>
            </button>

            <a
              href="https://ig.me/m/axo_nixtech"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-teal-500 px-3 py-1 font-bold text-black shadow hover:bg-teal-400 text-[11px]"
            >
              <span>Get This Site (₹4,999)</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>
      </div>

      {ownerMode && (
        <div className="bg-amber-500/15 border-b border-amber-500/40 p-3 font-sans text-xs text-amber-200">
          <div className="mx-auto max-w-7xl">
            <strong>Clinic / Small Business Insight:</strong> Local clients look for two things: doctor qualifications and immediate appointment availability. This clean, mobile-first design loads in 0.4s and eliminates reception phone bottlenecks.
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-teal-950 bg-[#091B24]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500 text-black font-black">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg block tracking-tight">
                NEXUS PHYSIO
              </span>
              <span className="text-[10px] text-teal-400 font-mono block -mt-1">
                SPINE &amp; WELLNESS CLINIC • NEW DELHI
              </span>
            </div>
          </div>

          <a
            href="#book"
            className="rounded-lg bg-teal-500 px-4 py-2 text-xs font-bold text-black hover:bg-teal-400 transition-colors shadow"
          >
            Book Session
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 border-b border-teal-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3.5 py-1 text-xs font-mono text-teal-300">
                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                <span>CERTIFIED ORTHOPEDIC SPECIALISTS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Get Back to Pain-Free Life, <br />
                <span className="text-teal-400">Without Surgery.</span>
              </h1>

              <p className="text-sm sm:text-base text-zinc-300 max-w-lg leading-relaxed">
                Evidence-based physiotherapy, spinal alignment, and sports rehabilitation led by UK-certified therapists in South Delhi.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
                <div className="rounded-xl border border-teal-900 bg-[#091B24] p-3 text-center">
                  <span className="block text-xl font-bold text-teal-400 font-mono">4.9 ★</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Google Reviews</span>
                </div>
                <div className="rounded-xl border border-teal-900 bg-[#091B24] p-3 text-center">
                  <span className="block text-xl font-bold text-white font-mono">45 Mins</span>
                  <span className="text-[10px] text-zinc-400 font-mono">1-on-1 Sessions</span>
                </div>
                <div className="rounded-xl border border-teal-900 bg-[#091B24] p-3 text-center">
                  <span className="block text-xl font-bold text-emerald-400 font-mono">100%</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Hands-on Care</span>
                </div>
              </div>
            </div>

            {/* Appointment Booking Card */}
            <div id="book" className="lg:col-span-5">
              <div className="rounded-2xl border border-teal-500/30 bg-[#091B24] p-6 sm:p-7 shadow-xl">
                <h3 className="text-base font-bold text-white pb-3 border-b border-teal-900">
                  Book Initial Assessment
                </h3>

                {!booked ? (
                  <form onSubmit={handleBooking} className="mt-4 space-y-3 text-xs">
                    <div>
                      <label className="block text-zinc-400 mb-1 font-mono text-[11px]">Patient Name *</label>
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        placeholder="e.g. Siddharth Rao"
                        className="w-full rounded-lg border border-teal-900 bg-[#061118] px-3.5 py-2.5 text-white placeholder-zinc-600 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-400 mb-1 font-mono text-[11px]">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        placeholder="e.g. 98110XXXXX"
                        className="w-full rounded-lg border border-teal-900 bg-[#061118] px-3.5 py-2.5 text-white placeholder-zinc-600 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-400 mb-1 font-mono text-[11px]">Preferred Time Slot</label>
                      <select
                        value={bookingForm.slot}
                        onChange={(e) => setBookingForm({ ...bookingForm, slot: e.target.value })}
                        className="w-full rounded-lg border border-teal-900 bg-[#061118] px-3.5 py-2.5 text-white focus:border-teal-500 focus:outline-none"
                      >
                        <option value="Tomorrow (11:00 AM)">Tomorrow (11:00 AM)</option>
                        <option value="Tomorrow (4:30 PM)">Tomorrow (4:30 PM)</option>
                        <option value="Tomorrow (6:00 PM)">Tomorrow (6:00 PM)</option>
                        <option value="Saturday Morning">Saturday Morning (10:00 AM)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-teal-500 py-3 text-xs font-bold text-black shadow hover:bg-teal-400 transition-colors mt-2"
                    >
                      Confirm Appointment
                    </button>
                  </form>
                ) : (
                  <div className="py-6 text-center space-y-2">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      Appointment Booked for {bookingForm.name}!
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Our clinic reception will WhatsApp confirmation for <strong className="text-teal-400">{bookingForm.slot}</strong> to {bookingForm.phone}.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services List with Transparent Pricing */}
      <section className="py-14 sm:py-20 border-b border-teal-950 bg-[#040C12]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-mono font-semibold text-teal-400 uppercase tracking-widest">
              TREATMENT &amp; RATES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Transparent Session Fees
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="rounded-2xl border border-teal-900 bg-[#091B24] p-5 flex flex-col justify-between hover:border-teal-500/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-teal-500/10 px-2 py-0.5 text-[10px] font-mono text-teal-300 font-bold border border-teal-500/30">
                      {srv.badge}
                    </span>
                    <span className="font-mono text-base font-bold text-white">
                      {srv.price}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-3">{srv.name}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{srv.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-teal-900/60 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="h-3 w-3 text-teal-400" />
                    {srv.duration}
                  </span>
                  <a
                    href="#book"
                    className="font-bold text-teal-400 hover:underline"
                  >
                    Select &amp; Book &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#091B24] border-t border-teal-950 text-center text-xs text-zinc-500 space-y-2">
        <p>
          &copy; 2026 Nexus Physio Clinic Concept. Built by{' '}
          <Link href="/" className="text-teal-400 hover:underline">
            Axonix Tech
          </Link>
          .
        </p>
      </footer>

    </div>
  );
}
