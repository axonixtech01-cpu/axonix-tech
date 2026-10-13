'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  UtensilsCrossed, 
  Clock, 
  MapPin, 
  Wine, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ChevronRight,
  Flame,
  Sparkles,
  Phone
} from 'lucide-react';

interface MenuItem {
  id: string;
  category: 'starters' | 'pizza' | 'mains' | 'drinks' | 'desserts';
  name: string;
  price: string;
  desc: string;
  isVeg: boolean;
  isSpecial?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    category: 'starters',
    name: 'Truffle Edamame Dumplings',
    price: '₹540',
    desc: 'Steamed delicate parcels with crushed edamame, water chestnut, and white truffle oil drizzle.',
    isVeg: true,
    isSpecial: true,
  },
  {
    id: '2',
    category: 'starters',
    name: 'Charred Chicken Yakitori',
    price: '₹580',
    desc: 'Robata-grilled chicken skewers with sweet scallion glaze and toasted sesame.',
    isVeg: false,
  },
  {
    id: '3',
    category: 'starters',
    name: 'Burrata di Puglia',
    price: '₹620',
    desc: 'Creamy burrata, heirloom cherry tomatoes, basil pesto pearls, and toasted sourdough.',
    isVeg: true,
    isSpecial: true,
  },
  {
    id: '4',
    category: 'pizza',
    name: 'Smoked Quattro Formaggi',
    price: '₹720',
    desc: '48-hour sourdough base, smoked scamorza, gorgonzola, fior di latte, and hot honey drizzle.',
    isVeg: true,
  },
  {
    id: '5',
    category: 'pizza',
    name: 'Spicy Pepperoni & Jalapeño',
    price: '₹790',
    desc: 'San Marzano tomato sauce, artisanal pork pepperoni, pickled jalapeño, fresh oregano.',
    isVeg: false,
    isSpecial: true,
  },
  {
    id: '6',
    category: 'mains',
    name: 'Wild Mushroom Risotto',
    price: '₹680',
    desc: 'Arborio rice, porcini mushroom broth, parmesan crisp, and black truffle butter.',
    isVeg: true,
  },
  {
    id: '7',
    category: 'mains',
    name: 'Pan-Seared Scottish Salmon',
    price: '₹950',
    desc: 'Crispy skin salmon fillet, saffron potato purée, charred asparagus, lemon butter glaze.',
    isVeg: false,
    isSpecial: true,
  },
  {
    id: '8',
    category: 'drinks',
    name: 'Smoked Bourbon Old Fashioned',
    price: '₹650',
    desc: 'Oak-smoked bourbon, angostura bitters, demerara syrup, flamed orange peel.',
    isVeg: true,
    isSpecial: true,
  },
  {
    id: '9',
    category: 'drinks',
    name: 'Yuzu Botanical Cooler (Mocktail)',
    price: '₹380',
    desc: 'Japanese yuzu extract, fresh cucumber ribbons, sparkling tonic, and rosemary smoke.',
    isVeg: true,
  },
  {
    id: '10',
    category: 'desserts',
    name: '70% Valrhona Lava Cake',
    price: '₹460',
    desc: 'Molten dark chocolate cake served with Madagascar vanilla bean gelato.',
    isVeg: true,
    isSpecial: true,
  },
];

export default function RestaurantDemoPage() {
  const [activeCategory, setActiveCategory] = useState<'starters' | 'pizza' | 'mains' | 'drinks' | 'desserts'>('starters');
  const [reserved, setReserved] = useState(false);
  const [booking, setBooking] = useState({
    name: '',
    guests: '2 Guests',
    date: 'Today',
    time: '8:00 PM',
  });

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (booking.name.trim()) {
      setReserved(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0B0A] text-[#FAF8F5] font-serif selection:bg-amber-500 selection:text-black">
      
      {/* Top Banner: Axonix Tech Portfolio Notice */}
      <div className="sticky top-0 z-50 flex flex-wrap items-center justify-between border-b border-amber-500/30 bg-[#141210] px-4 py-2.5 text-xs font-sans">
        <div className="flex items-center gap-2">
          <Link
            href="/work"
            className="inline-flex items-center gap-1 font-mono font-semibold text-amber-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Axonix Tech Portfolio</span>
          </Link>
          <span className="text-stone-600 hidden sm:inline">•</span>
          <span className="rounded bg-amber-500/20 px-2 py-0.5 font-mono text-[10px] text-amber-300 border border-amber-500/30">
            RESTAURANT DEMO SITE
          </span>
        </div>

        <a
          href="https://ig.me/m/axo_nixtech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded bg-amber-500 px-3 py-1 font-bold text-black shadow-sm transition-all hover:bg-amber-400 active:scale-95 text-[11px]"
        >
          <span>Get a Website Like This (₹4,999)</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Restaurant Header */}
      <header className="border-b border-stone-800 bg-[#0C0B0A]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-bold tracking-widest text-amber-400 font-serif">
              AURA
            </span>
            <span className="text-[10px] font-sans tracking-widest uppercase text-stone-400 border-l border-stone-700 pl-3 hidden sm:inline">
              Dining &amp; Cocktail Bar • Delhi
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-sans text-stone-300">
            <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
            <a href="#reserve" className="hover:text-amber-400 transition-colors">Reservations</a>
            <a href="#story" className="hover:text-amber-400 transition-colors">Our Story</a>
          </nav>

          <a
            href="#reserve"
            className="rounded-lg bg-amber-500 px-4 py-2 font-sans text-xs font-bold text-black hover:bg-amber-400 transition-colors shadow"
          >
            Reserve Table
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 text-center border-b border-stone-800 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-900 via-[#0C0B0A] to-[#0C0B0A]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-sans tracking-widest uppercase text-amber-400 font-semibold">
            ESTABLISHED 2026 • CONTEMPORARY GASTRONOMY
          </span>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-wide text-stone-100 font-serif">
            Woodfired Flavours. <br />
            <span className="italic text-amber-300 font-light">Unforgettable Moments.</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base font-sans text-stone-400 leading-relaxed">
            Experience artisanal hand-rolled sourdough pizzas, robata charcoal grills, and curated botanical mixology in the heart of Delhi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 font-sans text-xs">
            <a
              href="#reserve"
              className="w-full sm:w-auto rounded-lg bg-amber-500 px-7 py-3.5 font-bold text-black hover:bg-amber-400 shadow-md transition-all active:scale-95"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto rounded-lg border border-stone-700 bg-stone-900/60 px-7 py-3.5 font-semibold text-stone-200 hover:border-amber-500 transition-colors"
            >
              Explore Digital Menu
            </a>
          </div>

          <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 font-sans text-xs text-stone-400 border-t border-stone-800/80 max-w-lg mx-auto">
            <div>
              <span className="block text-amber-400 font-bold">12 PM – 11:30 PM</span>
              <span className="text-[11px] text-stone-500">Open Daily</span>
            </div>
            <div>
              <span className="block text-amber-400 font-bold">Aerocity, Delhi</span>
              <span className="text-[11px] text-stone-500">Valet Available</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block text-emerald-400 font-bold">Instant Booking</span>
              <span className="text-[11px] text-stone-500">WhatsApp / Web</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Digital Menu Section */}
      <section id="menu" className="py-20 border-b border-stone-800 bg-[#0E0D0C]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-sans tracking-widest uppercase text-amber-400">
              CULINARY CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-stone-100 font-serif">
              Seasonal Tasting Menu
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-sans text-xs">
            {[
              { id: 'starters', label: 'Small Plates' },
              { id: 'pizza', label: 'Woodfired Pizza' },
              { id: 'mains', label: 'Robata Mains' },
              { id: 'drinks', label: 'Craft Cocktails' },
              { id: 'desserts', label: 'Desserts' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`rounded-full px-5 py-2 transition-all ${
                  activeCategory === tab.id
                    ? 'bg-amber-500 text-black font-bold shadow-sm'
                    : 'border border-stone-800 bg-stone-900/60 text-stone-400 hover:text-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-stone-800/80 bg-[#141210] p-5 sm:p-6 transition-all hover:border-amber-500/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 rounded-full shrink-0 ${
                          item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                        title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      />
                      <h3 className="text-lg font-serif font-medium text-stone-100">
                        {item.name}
                      </h3>
                    </div>
                    <span className="font-mono text-base font-bold text-amber-400 shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-2 text-xs font-sans text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {item.isSpecial && (
                  <div className="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-between font-sans text-[11px]">
                    <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
                      <Flame className="h-3 w-3" />
                      Chef&apos;s Recommendation
                    </span>
                    <span className="text-stone-500">Made Fresh Daily</span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Table Reservation Section */}
      <section id="reserve" className="py-20 border-b border-stone-800 bg-[#0C0B0A]">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-2xl border border-amber-500/30 bg-[#141210] p-6 sm:p-8 shadow-2xl">
            <div className="text-center space-y-1 pb-6 border-b border-stone-800 font-sans">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                INSTANT ONLINE RESERVATION
              </span>
              <h3 className="text-2xl font-serif text-stone-100">
                Book Your Table
              </h3>
              <p className="text-xs text-stone-400">
                Guaranteed table confirmation with zero waiting line.
              </p>
            </div>

            {!reserved ? (
              <form onSubmit={handleBooking} className="mt-6 space-y-4 font-sans text-xs">
                <div>
                  <label className="block text-stone-400 mb-1">Guest Full Name</label>
                  <input
                    type="text"
                    required
                    value={booking.name}
                    onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    placeholder="e.g. Vikram Singhania"
                    className="w-full rounded-lg border border-stone-700 bg-black/60 px-3.5 py-2.5 text-stone-100 placeholder-stone-600 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-400 mb-1">Guests</label>
                    <select
                      value={booking.guests}
                      onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
                      className="w-full rounded-lg border border-stone-700 bg-black/60 px-3 py-2.5 text-stone-100 focus:border-amber-500 focus:outline-none"
                    >
                      <option value="2 Guests">2 Guests (Table for Two)</option>
                      <option value="3-4 Guests">3–4 Guests (Family Table)</option>
                      <option value="5-8 Guests">5–8 Guests (Large Group)</option>
                      <option value="Private Dining">Private Dining Room (10+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-400 mb-1">Preferred Time</label>
                    <select
                      value={booking.time}
                      onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                      className="w-full rounded-lg border border-stone-700 bg-black/60 px-3 py-2.5 text-stone-100 focus:border-amber-500 focus:outline-none"
                    >
                      <option value="1:00 PM">1:00 PM (Lunch)</option>
                      <option value="2:30 PM">2:30 PM (Lunch)</option>
                      <option value="7:30 PM">7:30 PM (Dinner)</option>
                      <option value="8:30 PM">8:30 PM (Dinner)</option>
                      <option value="9:45 PM">9:45 PM (Late Dinner)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-amber-500 py-3.5 text-xs font-bold text-black shadow-md hover:bg-amber-400 transition-colors active:scale-98 mt-2"
                >
                  Confirm Table Reservation
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3 font-sans">
                <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-serif font-bold text-stone-100">
                  Table Confirmed for {booking.name}!
                </h4>
                <p className="text-xs text-stone-400">
                  We look forward to welcoming you for <strong className="text-amber-400">{booking.guests}</strong> at <strong className="text-amber-400">{booking.time}</strong>.
                </p>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Demo Footer */}
      <footer className="py-8 bg-[#080706] border-t border-stone-800 text-center font-sans text-xs text-stone-500 space-y-2">
        <p>
          &copy; 2026 Aura Dining Demo Concept. Architected &amp; coded by{' '}
          <Link href="/" className="text-amber-400 hover:underline">
            Axonix Tech
          </Link>
          .
        </p>
        <p className="text-[11px] text-stone-600">
          Built to showcase high-conversion mobile menus and reservation flows for cafes and dining brands.
        </p>
      </footer>

    </div>
  );
}
