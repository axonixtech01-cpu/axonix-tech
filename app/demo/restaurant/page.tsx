'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronRight,
  Flame,
  CheckCircle2,
  Eye,
  Info,
  Search,
  Plus,
  Minus,
  ShoppingBag,
  Sparkles,
  Utensils,
  X
} from 'lucide-react';

interface MenuItem {
  id: string;
  category: 'starters' | 'pizza' | 'mains' | 'drinks' | 'desserts';
  name: string;
  priceNum: number;
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
    priceNum: 540,
    price: '₹540',
    desc: 'Steamed delicate parcels with crushed edamame, water chestnut, and white truffle oil drizzle.',
    isVeg: true,
    isSpecial: true,
  },
  {
    id: '2',
    category: 'starters',
    name: 'Charred Chicken Yakitori',
    priceNum: 580,
    price: '₹580',
    desc: 'Robata-grilled chicken skewers with sweet scallion glaze and toasted sesame.',
    isVeg: false,
  },
  {
    id: '3',
    category: 'starters',
    name: 'Burrata di Puglia',
    priceNum: 620,
    price: '₹620',
    desc: 'Creamy burrata, heirloom cherry tomatoes, basil pesto pearls, and toasted sourdough.',
    isVeg: true,
    isSpecial: true,
  },
  {
    id: '4',
    category: 'pizza',
    name: 'Smoked Quattro Formaggi',
    priceNum: 720,
    price: '₹720',
    desc: '48-hour sourdough base, smoked scamorza, gorgonzola, fior di latte, and hot honey drizzle.',
    isVeg: true,
  },
  {
    id: '5',
    category: 'pizza',
    name: 'Spicy Pepperoni & Jalapeño',
    priceNum: 790,
    price: '₹790',
    desc: 'San Marzano tomato sauce, artisanal pork pepperoni, pickled jalapeño, fresh oregano.',
    isVeg: false,
    isSpecial: true,
  },
  {
    id: '6',
    category: 'mains',
    name: 'Wild Mushroom Risotto',
    priceNum: 680,
    price: '₹680',
    desc: 'Arborio rice, porcini mushroom broth, parmesan crisp, and black truffle butter.',
    isVeg: true,
  },
  {
    id: '7',
    category: 'mains',
    name: 'Pan-Seared Scottish Salmon',
    priceNum: 950,
    price: '₹950',
    desc: 'Crispy skin salmon fillet, saffron potato purée, charred asparagus, lemon butter glaze.',
    isVeg: false,
    isSpecial: true,
  },
  {
    id: '8',
    category: 'drinks',
    name: 'Smoked Bourbon Old Fashioned',
    priceNum: 650,
    price: '₹650',
    desc: 'Oak-smoked bourbon, angostura bitters, demerara syrup, flamed orange peel.',
    isVeg: true,
    isSpecial: true,
  },
  {
    id: '9',
    category: 'drinks',
    name: 'Yuzu Botanical Cooler (Mocktail)',
    priceNum: 380,
    price: '₹380',
    desc: 'Japanese yuzu extract, fresh cucumber ribbons, sparkling tonic, and rosemary smoke.',
    isVeg: true,
  },
  {
    id: '10',
    category: 'desserts',
    name: '70% Valrhona Lava Cake',
    priceNum: 460,
    price: '₹460',
    desc: 'Molten dark chocolate cake served with Madagascar vanilla bean gelato.',
    isVeg: true,
    isSpecial: true,
  },
];

export default function RestaurantDemoPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'starters' | 'pizza' | 'mains' | 'drinks' | 'desserts'>('all');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [ownerMode, setOwnerMode] = useState(false);
  const [tray, setTray] = useState<Record<string, number>>({});
  const [showTrayModal, setShowTrayModal] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [booking, setBooking] = useState({
    name: '',
    guests: '2 Guests',
    time: '8:00 PM',
  });

  // Tray helpers
  const addToTray = (id: string) => {
    setTray((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromTray = (id: string) => {
    setTray((prev) => {
      const copy = { ...prev };
      if (copy[id] > 1) {
        copy[id] -= 1;
      } else {
        delete copy[id];
      }
      return copy;
    });
  };

  const trayItemCount = Object.values(tray).reduce((a, b) => a + b, 0);
  const traySubtotal = Object.entries(tray).reduce((total, [id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return total + (item ? item.priceNum * qty : 0);
  }, 0);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesDiet = 
      dietFilter === 'all' || 
      (dietFilter === 'veg' && item.isVeg) || 
      (dietFilter === 'nonveg' && !item.isVeg);
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDiet && matchesSearch;
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (booking.name.trim()) {
      setReserved(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0B0A] text-[#FAF8F5] font-serif selection:bg-amber-500 selection:text-black pb-24">
      
      {/* Top Banner: Axonix Tech Portfolio Notice & Owner Mode */}
      <div className="sticky top-0 z-50 border-b border-amber-500/30 bg-[#141210] px-4 py-2.5 text-xs font-sans">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <Link
              href="/work"
              className="inline-flex items-center gap-1 font-mono font-semibold text-amber-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Axonix Tech</span>
            </Link>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <span className="rounded bg-amber-500/20 px-2 py-0.5 font-mono text-[10px] text-amber-300 border border-amber-500/30">
              RESTAURANT DEMO
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOwnerMode(!ownerMode)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-bold transition-all ${
                ownerMode
                  ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                  : 'border border-stone-700 bg-stone-800 text-stone-300 hover:text-white'
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>{ownerMode ? 'Owner Explainer: ON' : 'Turn On "Why This Converts"'}</span>
            </button>

            <a
              href="https://ig.me/m/axo_nixtech"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1 font-bold text-black shadow hover:bg-amber-400 text-[11px]"
            >
              <span>Get This Site (₹4,999)</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>
      </div>

      {/* Owner Explainer Mode Banner */}
      {ownerMode && (
        <div className="bg-amber-500/15 border-b border-amber-500/40 p-3 font-sans text-xs text-amber-200">
          <div className="mx-auto max-w-7xl flex items-start gap-2">
            <Info className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />
            <p>
              <strong>Restaurant Owner Inspection:</strong> Notice how dishes load instantly as searchable HTML text instead of slow PDF menus. Diners can filter by Veg/Non-Veg, build a simulated order tray, and reserve a table in 2 taps.
            </p>
          </div>
        </div>
      )}

      {/* Restaurant Header */}
      <header className="border-b border-stone-800 bg-[#0C0B0A]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-bold tracking-widest text-amber-400 font-serif">
              AURA
            </span>
            <span className="text-[10px] font-sans tracking-widest uppercase text-stone-400 border-l border-stone-700 pl-3 hidden sm:inline">
              Dining &amp; Craft Cocktail Bar • Delhi
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#reserve"
              className="rounded-lg bg-amber-500 px-4 py-2 font-sans text-xs font-bold text-black hover:bg-amber-400 transition-colors shadow"
            >
              Book Table
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 text-center border-b border-stone-800 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-900 via-[#0C0B0A] to-[#0C0B0A]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-5">
          
          <span className="text-xs font-sans tracking-widest uppercase text-amber-400 font-semibold">
            ESTABLISHED 2026 • CONTEMPORARY GASTRONOMY
          </span>

          <h1 className="text-4xl sm:text-6xl font-normal tracking-wide text-stone-100 font-serif">
            Woodfired Flavours. <br />
            <span className="italic text-amber-300 font-light">Unforgettable Evenings.</span>
          </h1>

          <p className="max-w-xl mx-auto text-sm sm:text-base font-sans text-stone-400 leading-relaxed">
            Experience hand-rolled sourdough pizzas, robata charcoal skewers, and botanical mixology in an ambient dark setting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3 font-sans text-xs">
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
              Explore Digital Menu ({MENU_ITEMS.length} items)
            </a>
          </div>

          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 font-sans text-xs text-stone-400 border-t border-stone-800/80 max-w-lg mx-auto">
            <div>
              <span className="block text-amber-400 font-bold">12 PM – 11:30 PM</span>
              <span className="text-[10px] text-stone-500">Open Daily</span>
            </div>
            <div>
              <span className="block text-amber-400 font-bold">Aerocity, Delhi</span>
              <span className="text-[10px] text-stone-500">Valet Parking</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block text-emerald-400 font-bold">Instant Online Booking</span>
              <span className="text-[10px] text-stone-500">No Waiting Line</span>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Digital Menu Section */}
      <section id="menu" className="py-16 sm:py-20 border-b border-stone-800 bg-[#0E0D0C]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          {ownerMode && (
            <div className="mb-8 rounded-lg bg-amber-400/10 border border-amber-400/30 p-2.5 font-sans text-xs text-amber-300">
              <strong>ZERO PDF TRAP:</strong> Most restaurants lose 70% of diners by forcing them to download a 15MB PDF on 4G data. This on-page menu searches instantly, shows Veg/Non-Veg icons, and lets customers simulate orders before sitting down!
            </div>
          )}

          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-sans tracking-widest uppercase text-amber-400">
              CULINARY CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-stone-100 font-serif">
              Seasonal Tasting Menu
            </h2>
          </div>

          {/* Search & Dietary Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 font-sans">
            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-stone-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes or ingredients..."
                className="w-full rounded-full border border-stone-800 bg-stone-900/80 pl-9 pr-4 py-2 text-xs text-stone-200 placeholder-stone-600 focus:border-amber-500 focus:outline-none"
              />
            </div>

            {/* Diet Filter Switcher */}
            <div className="flex items-center gap-1.5 text-xs">
              <button
                type="button"
                onClick={() => setDietFilter('all')}
                className={`rounded-full px-3 py-1 border transition-colors ${
                  dietFilter === 'all'
                    ? 'border-amber-500 bg-amber-500/20 text-amber-300'
                    : 'border-stone-800 bg-stone-900 text-stone-400'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setDietFilter('veg')}
                className={`rounded-full px-3 py-1 border flex items-center gap-1 transition-colors ${
                  dietFilter === 'veg'
                    ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                    : 'border-stone-800 bg-stone-900 text-stone-400'
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Pure Veg
              </button>
              <button
                type="button"
                onClick={() => setDietFilter('nonveg')}
                className={`rounded-full px-3 py-1 border flex items-center gap-1 transition-colors ${
                  dietFilter === 'nonveg'
                    ? 'border-rose-500 bg-rose-500/20 text-rose-300'
                    : 'border-stone-800 bg-stone-900 text-stone-400'
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                Non-Veg
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-sans text-xs">
            {[
              { id: 'all', label: 'All Dishes' },
              { id: 'starters', label: 'Small Plates' },
              { id: 'pizza', label: 'Woodfired Pizza' },
              { id: 'mains', label: 'Robata Mains' },
              { id: 'drinks', label: 'Cocktails' },
              { id: 'desserts', label: 'Desserts' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`rounded-full px-4 py-2 transition-all ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredItems.map((item) => {
              const qtyInTray = tray[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-stone-800/80 bg-[#141210] p-5 transition-all hover:border-amber-500/40 flex flex-col justify-between"
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
                        <h3 className="text-base sm:text-lg font-serif font-medium text-stone-100">
                          {item.name}
                        </h3>
                      </div>
                      <span className="font-mono text-sm sm:text-base font-bold text-amber-400 shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-sans text-stone-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-between font-sans text-[11px]">
                    {item.isSpecial ? (
                      <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
                        <Flame className="h-3 w-3" />
                        Chef&apos;s Special
                      </span>
                    ) : (
                      <span className="text-stone-500">Fresh Robata Grilled</span>
                    )}

                    {/* Add to Tray Interactive Trigger */}
                    {qtyInTray === 0 ? (
                      <button
                        type="button"
                        onClick={() => addToTray(item.id)}
                        className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 font-bold text-amber-300 hover:bg-amber-500 hover:text-black transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                        <span>Add to Tray</span>
                      </button>
                    ) : (
                      <div className="inline-flex items-center gap-2 rounded-full border border-amber-500 bg-amber-500/20 px-2 py-0.5 text-amber-300">
                        <button
                          type="button"
                          onClick={() => removeFromTray(item.id)}
                          className="p-1 hover:text-white"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-mono font-bold text-xs">{qtyInTray}</span>
                        <button
                          type="button"
                          onClick={() => addToTray(item.id)}
                          className="p-1 hover:text-white"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Table Reservation Section */}
      <section id="reserve" className="py-16 sm:py-20 border-b border-stone-800 bg-[#0C0B0A]">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-2xl border border-amber-500/30 bg-[#141210] p-6 sm:p-8 shadow-2xl">
            <div className="text-center space-y-1 pb-5 border-b border-stone-800 font-sans">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                INSTANT ONLINE RESERVATION
              </span>
              <h3 className="text-2xl font-serif text-stone-100">
                Book Your Table
              </h3>
            </div>

            {!reserved ? (
              <form onSubmit={handleBooking} className="mt-5 space-y-3.5 font-sans text-xs">
                <div>
                  <label className="block text-stone-400 mb-1">Guest Full Name</label>
                  <input
                    type="text"
                    required
                    value={booking.name}
                    onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    placeholder="e.g. Vikram Singhania"
                    className="w-full rounded-lg border border-stone-700 bg-black/60 px-3.5 py-2.5 text-stone-100 focus:border-amber-500 focus:outline-none"
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
                      <option value="8:00 PM">8:00 PM (Dinner)</option>
                      <option value="9:30 PM">9:30 PM (Late Dinner)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-amber-500 py-3 text-xs font-bold text-black shadow hover:bg-amber-400 transition-colors mt-2"
                >
                  Confirm Table Reservation
                </button>
              </form>
            ) : (
              <div className="py-6 text-center space-y-2 font-sans">
                <div className="h-10 w-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h4 className="text-base font-serif font-bold text-stone-100">
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

      {/* Floating Simulated Order Tray Drawer */}
      {trayItemCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4 font-sans">
          <div className="flex items-center justify-between rounded-full border border-amber-500 bg-[#141210] p-2 pr-4 shadow-[0_10px_35px_rgba(245,158,11,0.35)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-black font-bold text-xs">
                {trayItemCount}
              </div>
              <div className="text-left text-xs">
                <span className="block text-stone-400 text-[10px] font-mono">SIMULATED ORDER TOTAL</span>
                <span className="font-bold text-white font-mono text-sm">₹{traySubtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTray({})}
                className="text-[11px] text-stone-400 hover:text-rose-400 px-2"
              >
                Clear
              </button>
              <a
                href="#reserve"
                className="rounded-full bg-amber-500 px-4 py-2 text-xs font-bold text-black hover:bg-amber-400 shadow"
              >
                Book Table &rarr;
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Demo Footer */}
      <footer className="py-8 bg-[#080706] border-t border-stone-800 text-center font-sans text-xs text-stone-500 space-y-2">
        <p>
          &copy; 2026 Aura Dining Demo Concept. Built by{' '}
          <Link href="/" className="text-amber-400 hover:underline">
            Axonix Tech
          </Link>
          .
        </p>
      </footer>

    </div>
  );
}
