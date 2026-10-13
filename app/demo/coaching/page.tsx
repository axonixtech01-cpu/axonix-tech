'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ChevronRight,
  Calculator,
  Search,
  Sparkles,
  Info,
  Clock,
  Users,
  ShieldCheck,
  Send,
  Eye,
  Flame,
  Award
} from 'lucide-react';

const COURSES = [
  {
    id: 'jee',
    title: 'JEE (Main & Advanced) 2-Year Program',
    target: 'For Class 11 Moving to 12',
    duration: '2 Academic Years',
    baseFee: 45000,
    batchSize: 'Max 25 Students',
    seatsLeft: 4,
    timing: 'Mon, Wed, Fri (4:00 PM – 7:30 PM)',
    highlights: [
      'Comprehensive coverage of Physics, Chemistry & Math syllabus',
      'Daily 45-minute 1-on-1 doubt clearing clinic',
      '30+ Full-length Computer Based Mock Tests (CBT format)',
      'Mentorship sessions by Ex-IIT Delhi & Kanpur alumni',
      'Printed study modules & chapter-wise formula handbooks',
    ],
  },
  {
    id: 'neet',
    title: 'NEET Medical Premier Batch',
    target: 'For Medical Aspirants (Class 11 & 12)',
    duration: '2 Academic Years',
    baseFee: 48000,
    batchSize: 'Max 25 Students',
    seatsLeft: 6,
    timing: 'Tue, Thu, Sat (4:00 PM – 7:30 PM)',
    highlights: [
      'Deep NCERT-focused mastery in Biology, Physics & Chemistry',
      'Weekly OMR-based test series matching NTA pattern',
      'Personal error-analysis logs maintained for every student',
      'Biology diagram & memory retention masterclasses',
      'Separate doubt teachers for Zoology & Botany',
    ],
  },
  {
    id: 'foundation',
    title: 'Junior Foundation (Class 9 & 10)',
    target: 'For School Top Rankers & Olympiad Aspirants',
    duration: '1 Academic Year',
    baseFee: 28000,
    batchSize: 'Max 20 Students',
    seatsLeft: 3,
    timing: 'Tue, Thu, Sat (5:00 PM – 7:00 PM)',
    highlights: [
      'Strong conceptual base in Science and Mathematics',
      'Olympiad, NTSE, and school exam syllabus covered',
      'Mental ability and logical reasoning training',
      'Regular parent-teacher progress evaluations',
      'School board exam 95%+ guarantee framework',
    ],
  },
];

const FACULTY = [
  {
    name: 'Er. Rajesh Varma',
    subject: 'Physics Head',
    experience: '14+ Yrs Teaching',
    badge: 'B.Tech IIT Roorkee',
  },
  {
    name: 'Dr. Ananya Sen',
    subject: 'Biology Specialist',
    experience: '11+ Yrs Teaching',
    badge: 'MBBS, AIIMS New Delhi',
  },
  {
    name: 'Prof. Sandeep Bansal',
    subject: 'Chemistry Maestro',
    experience: '16+ Yrs Teaching',
    badge: 'Ex-Kota HOD Chemistry',
  },
  {
    name: 'Er. Vikas Mehra',
    subject: 'Mathematics Mentor',
    experience: '12+ Yrs Teaching',
    badge: 'B.Tech IIT Delhi',
  },
];

export default function CoachingDemoPage() {
  const [selectedCourse, setSelectedCourse] = useState('jee');
  const [ownerMode, setOwnerMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scholarshipPercent, setScholarshipPercent] = useState(20);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentPhone: '',
    targetClass: 'Class 11 (JEE 2028)',
  });

  const activeCourse = COURSES.find((c) => c.id === selectedCourse) || COURSES[0];

  // Scholarship calculation
  const discountedFee = Math.round(activeCourse.baseFee * (1 - scholarshipPercent / 100));
  const monthlyEmi = Math.round(discountedFee / 10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.studentName.trim() && formData.parentPhone.trim()) {
      setFormSubmitted(true);
    }
  };

  const filteredCourses = COURSES.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.target.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#070B14] text-[#F3F7FF] font-sans selection:bg-blue-500 selection:text-black pb-16">
      
      {/* Top Banner: Axonix Tech Portfolio Notice & Owner Mode Switcher */}
      <div className="sticky top-0 z-50 border-b border-blue-500/30 bg-[#0B1222] px-4 py-2.5 text-xs">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <Link
              href="/work"
              className="inline-flex items-center gap-1 font-mono font-semibold text-blue-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Axonix Tech</span>
            </Link>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="rounded bg-blue-500/20 px-2 py-0.5 font-mono text-[10px] text-blue-300 border border-blue-500/30">
              COACHING DEMO
            </span>
          </div>

          {/* Owner Explainer Mode Toggle */}
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
              <span>{ownerMode ? 'Inspection Mode: ON' : 'Turn On "Why This Converts"'}</span>
            </button>

            <a
              href="https://ig.me/m/axo_nixtech"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-blue-500 px-3 py-1 font-bold text-black shadow-sm hover:bg-blue-400 text-[11px]"
            >
              <span>Get This Site (₹4,999)</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>
      </div>

      {/* Owner Mode Alert Banner */}
      {ownerMode && (
        <div className="bg-amber-500/15 border-b border-amber-500/40 p-3 text-xs text-amber-200">
          <div className="mx-auto max-w-7xl flex items-start gap-2">
            <Info className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />
            <p>
              <strong>Owner Inspection Active:</strong> Yellow badges throughout this page explain the psychology behind each section and why this Next.js architecture converts parents into admissions 3x better than generic WordPress sites.
            </p>
          </div>
        </div>
      )}

      {/* Coaching Header */}
      <header className="border-b border-zinc-800 bg-[#0B1222]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-lg shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              A
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-white text-base sm:text-lg block">
                APEX ACADEMY
              </span>
              <span className="text-[10px] font-mono text-blue-400 block -mt-1">
                INSTITUTE OF EXCELLENCE • DELHI-NCR
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right text-xs">
              <span className="text-zinc-400">Admissions Desk</span>
              <span className="font-bold text-white font-mono">+91 98765 43210</span>
            </div>
            <a
              href="#enquiry"
              className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow hover:bg-blue-500 transition-colors"
            >
              Apply Online
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-14 sm:py-20 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {ownerMode && (
            <div className="mb-6 rounded-lg bg-amber-400/10 border border-amber-400/30 p-2.5 text-[11px] text-amber-300 font-mono flex items-center gap-2">
              <Flame className="h-4 w-4 text-amber-400 shrink-0" />
              <span>
                <strong>CONVERSION STRATEGY #1:</strong> Placing batch status + seats left immediately above the fold creates legitimate urgency for parents without fake countdown timers.
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3.5 py-1 text-xs font-mono text-blue-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ADMISSIONS OPEN FOR 2026–2027 BATCHES</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Empowering Students for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  JEE, NEET &amp; Board Tops.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
                Apex Academy combines proven Kota-pedagogy with small batch sizes of 25 students. Daily doubt clinics, weekly CBT tests, and mentorship from IIT and AIIMS veterans.
              </p>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-blue-400 font-mono">148+</span>
                  <span className="text-[10px] text-zinc-400 font-mono">IIT Selections</span>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-emerald-400 font-mono">25</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Max Batch Size</span>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-amber-400 font-mono">100%</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Daily Doubts</span>
                </div>
              </div>
            </div>

            {/* Quick 2-Field Lead Capture Form */}
            <div id="enquiry" className="lg:col-span-5">
              <div className="rounded-2xl border border-blue-500/40 bg-[#0E1628] p-6 sm:p-7 shadow-2xl relative">
                
                {ownerMode && (
                  <div className="absolute -top-3 right-4 rounded bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-black font-mono">
                    2-FIELD MICRO FORM (350% HIGHER COMPLETION)
                  </div>
                )}

                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Book a Free 2-Day Trial Class
                    </h3>
                    <span className="text-[11px] text-zinc-400">Experience the teaching before paying</span>
                  </div>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-300 font-bold border border-emerald-500/30">
                    FREE PASS
                  </span>
                </div>

                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1">
                        Student&apos;s Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="e.g. Aryan Sharma"
                        className="w-full rounded-lg border border-zinc-700 bg-[#070B14] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1">
                        Parent / Student Phone (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.parentPhone}
                        onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                        placeholder="e.g. 98110XXXXX"
                        className="w-full rounded-lg border border-zinc-700 bg-[#070B14] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1">
                        Select Target Stream
                      </label>
                      <select
                        value={formData.targetClass}
                        onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                        className="w-full rounded-lg border border-zinc-700 bg-[#070B14] px-3.5 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                      >
                        <option value="Class 11 (JEE 2028)">Class 11 (JEE 2028)</option>
                        <option value="Class 12 (JEE 2027)">Class 12 (JEE 2027)</option>
                        <option value="NEET Medical 2-Year">NEET Medical 2-Year</option>
                        <option value="Class 9-10 Foundation">Class 9–10 Foundation</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-blue-600 py-3 text-xs font-bold text-white shadow-md hover:bg-blue-500 transition-colors flex items-center justify-center gap-1.5 mt-2"
                    >
                      <span>Reserve Demo Seat Now</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <span className="block text-[10px] text-zinc-500 text-center font-mono">
                      No commitment or credit card required.
                    </span>
                  </form>
                ) : (
                  <div className="py-8 text-center space-y-3">
                    <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      Seat Reserved for {formData.studentName}!
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Our academic counselor will contact <span className="text-blue-400 font-mono">{formData.parentPhone}</span> with batch details.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Programs & Batch Seat Tracker */}
      <section className="py-14 sm:py-20 border-b border-zinc-800 bg-[#0A0E1A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
              COURSE CATALOG &amp; SEATS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Targeted Academic Programs
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Select a batch below to inspect schedules, real-time seats left, and curriculum specifications.
            </p>

            {/* Course Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-3">
              {COURSES.map((course) => (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourse(course.id)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    selectedCourse === course.id
                      ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : 'border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>{course.title.split(' ')[0]}</span>
                  <span className="rounded bg-rose-500/20 px-1.5 py-0.2 text-[9px] text-rose-300 font-mono">
                    {course.seatsLeft} seats left
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Course Card Details */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0E1628] p-6 sm:p-9 shadow-xl max-w-4xl mx-auto">
            
            {ownerMode && (
              <div className="mb-4 rounded bg-amber-400/10 border border-amber-400/30 p-2 text-[10px] text-amber-300 font-mono">
                <strong>WHY THIS CONVERTS:</strong> 85% of parents bounce when fees say &quot;Call for details&quot;. Displaying transparent fees builds trust immediately and filters out unqualified inquiries before staff waste time on phone calls.
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-zinc-800">
              <div>
                <span className="text-[11px] font-mono text-blue-400 font-bold uppercase">
                  {activeCourse.target}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {activeCourse.title}
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="block text-2xl font-black text-white font-mono">
                  ₹{activeCourse.baseFee.toLocaleString('en-IN')} / yr
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  ● Only {activeCourse.seatsLeft} of {activeCourse.batchSize} seats vacant
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 py-2 border-b border-zinc-800 text-xs">
              <div>
                <span className="block text-zinc-500 font-mono text-[10px]">BATCH TIMINGS</span>
                <span className="font-semibold text-white">{activeCourse.timing}</span>
              </div>
              <div>
                <span className="block text-zinc-500 font-mono text-[10px]">CLASS FORMAT</span>
                <span className="font-semibold text-blue-400">Offline + Recorded Portal</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-zinc-500 font-mono text-[10px]">PROGRAM DURATION</span>
                <span className="font-semibold text-emerald-400">{activeCourse.duration}</span>
              </div>
            </div>

            {/* Curriculum Highlights */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                What&apos;s Included in this Program:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                {activeCourse.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Scholarship & EMI Calculator */}
      <section className="py-14 sm:py-20 border-b border-zinc-800 bg-[#070B14]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-2xl border border-blue-500/30 bg-[#0E1628] p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-zinc-800">
              <div>
                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-400 font-bold uppercase">
                  <Calculator className="h-4 w-4" />
                  <span>Interactive Fee &amp; Scholarship Estimator</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Calculate Your Net Tuition &amp; Monthly EMI
                </h3>
              </div>
              <span className="rounded bg-blue-500/20 px-2.5 py-1 text-xs font-mono text-blue-300 border border-blue-500/40">
                {activeCourse.title.split(' ')[0]} Batch
              </span>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-2">
                  <span>Apex Scholarship Test (AST) Expected Score:</span>
                  <span className="font-bold text-blue-400 text-sm">{scholarshipPercent}% Score ({scholarshipPercent}% Fee Waiver)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={scholarshipPercent}
                  onChange={(e) => setScholarshipPercent(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                  <span>0% (Direct Admission)</span>
                  <span>25% (Distinction)</span>
                  <span>50% (Max Merit Waiver)</span>
                </div>
              </div>

              {/* Calculated Results Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-xl bg-[#070B14] p-4 border border-zinc-800 text-center">
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500">BASE ANNUAL FEE</span>
                  <span className="text-base font-bold text-zinc-400 line-through">
                    ₹{activeCourse.baseFee.toLocaleString('en-IN')}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-emerald-400 font-bold">TOTAL SAVINGS</span>
                  <span className="text-base font-bold text-emerald-400">
                    - ₹{(activeCourse.baseFee - discountedFee).toLocaleString('en-IN')}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-blue-400 font-bold">NET PAYABLE (OR ₹{monthlyEmi}/MO)</span>
                  <span className="text-xl font-black text-white font-mono">
                    ₹{discountedFee.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-white transition-colors"
                >
                  <span>Apply to take the upcoming Sunday Scholarship Test</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Faculty Showcase */}
      <section className="py-14 sm:py-20 border-b border-zinc-800 bg-[#0A0E1A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
              PROVEN FACULTY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Learn Directly from Kota &amp; IIT Veterans
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FACULTY.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-zinc-800 bg-[#0E1628]/70 p-5 text-center space-y-2.5"
              >
                <div className="h-14 w-14 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/40 text-lg font-bold font-mono">
                  {f.name.split(' ')[1]?.[0] || 'T'}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{f.name}</h4>
                  <span className="text-xs text-blue-400 font-medium block">{f.subject}</span>
                </div>
                <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400">
                  <span className="block font-mono">{f.experience}</span>
                  <span className="inline-block rounded bg-zinc-800 px-2 py-0.5 text-zinc-300 font-mono text-[10px] mt-1">
                    {f.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Footer */}
      <footer className="py-8 bg-[#0B1222] border-t border-zinc-800 text-center text-xs text-zinc-500 space-y-2">
        <p>
          &copy; 2026 Apex Academy Demo Concept. Built by{' '}
          <Link href="/" className="text-blue-400 hover:underline">
            Axonix Tech
          </Link>
          .
        </p>
      </footer>

    </div>
  );
}
