'use client';

import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, UtensilsCrossed, Send, RotateCcw, Info } from 'lucide-react';

/* =====================================================================
   Rule-based chatbot DEMO.
   - No AI, no API calls, nothing is sent or stored.
   - Matches keywords in the visitor's message to pre-written answers
     for two fictional businesses from our demo websites.
   ===================================================================== */

type Message = { id: number; from: 'bot' | 'user'; text: string; chips?: string[] };

type Intent = {
  /** Text shown on the quick-reply chip that triggers this intent. */
  label?: string;
  keywords: string[];
  reply: string;
  chips?: string[];
  /** Starts the booking / lead-capture flow. */
  startsLead?: boolean;
};

type LeadStep = { key: string; prompt: string; chips?: string[] };

type BotConfig = {
  id: 'coaching' | 'restaurant';
  tab: string;
  name: string;
  business: string;
  Icon: React.ElementType;
  greeting: string;
  starterChips: string[];
  intents: Intent[];
  lead: { steps: LeadStep[]; summary: (a: Record<string, string>) => string };
};

const SHARED_INTENTS: Intent[] = [
  {
    keywords: ['hi', 'hello', 'hey', 'namaste', 'hii', 'good morning', 'good evening'],
    reply: 'Hello! 👋 How can I help you today? Tap a button below or type your question.',
  },
  {
    keywords: ['thank', 'thanks', 'thx', 'great', 'ok thanks', 'dhanyavad', 'shukriya'],
    reply: "You're welcome! Anything else I can help with?",
  },
  {
    label: 'Are you AI?',
    keywords: ['are you ai', 'ai', 'robot', 'are you real', 'human or bot', 'chatgpt', 'how do you work', 'who made you'],
    reply:
      "I'm a rule-based demo bot: I match keywords in your message to pre-written answers. No AI, and nothing you type is sent or stored. Axonix Tech builds bots like this — or AI-powered ones — for real businesses.",
  },
  {
    label: 'Talk to a person',
    keywords: ['talk', 'human', 'person', 'call', 'phone', 'number', 'whatsapp', 'contact', 'staff', 'manager'],
    reply:
      'On a real website, this would connect you straight to the team — for example a WhatsApp or call button. (This is a demo for a fictional business, so there is no real number.)',
  },
  {
    keywords: ['where', 'location', 'address', 'branch', 'directions', 'map', 'kaha', 'kahan'],
    reply:
      "This demo is for a fictional business, so there's no real address. On a real site, I would share the address with a Google Maps link and nearby landmarks.",
  },
];

const BOTS: BotConfig[] = [
  {
    id: 'coaching',
    tab: 'Coaching Institute',
    name: 'Apex Assistant',
    business: 'Apex Academy (demo)',
    Icon: GraduationCap,
    greeting:
      "Hi! I'm the Apex Academy assistant 🎓 I can tell you about courses, fees, timings and scholarships, or book a free demo class.",
    starterChips: ['Courses', 'Fees', 'Batch timings', 'Scholarships', 'Book a free demo class'],
    intents: [
      {
        label: 'Courses',
        keywords: ['course', 'courses', 'program', 'programs', 'jee', 'neet', 'foundation', 'class 9', 'class 10', 'subjects'],
        reply:
          'We offer 3 programs:\n• JEE (Main & Advanced) — 2-year program\n• NEET Medical Premier Batch — 2-year program\n• Junior Foundation — Class 9 & 10, 1 year\nSmall batches with weekly tests and doubt clinics.',
        chips: ['Fees', 'Batch timings', 'Book a free demo class'],
      },
      {
        label: 'Fees',
        keywords: ['fee', 'fees', 'price', 'cost', 'charges', 'kitna', 'kitni', 'paisa', 'amount', 'emi'],
        reply:
          'Annual fees:\n• JEE 2-Year Program — ₹45,000 / year\n• NEET Premier Batch — ₹48,000 / year\n• Junior Foundation — ₹28,000 / year\nScholarships can reduce this. Want to know how?',
        chips: ['Scholarships', 'Book a free demo class'],
      },
      {
        label: 'Scholarships',
        keywords: ['scholarship', 'scholarships', 'discount', 'waiver', 'concession', 'ast', 'merit'],
        reply:
          'Students can take the Apex Scholarship Test (AST). Based on the score, the fee waiver can be 25% (Distinction) or up to 50% (Max Merit Waiver).',
        chips: ['Fees', 'Book a free demo class'],
      },
      {
        label: 'Batch timings',
        keywords: ['timing', 'timings', 'time', 'schedule', 'days', 'when', 'batch time', 'samay'],
        reply:
          'Batch timings:\n• JEE — Mon, Wed, Fri (4:00 PM – 7:30 PM)\n• NEET — Tue, Thu, Sat (4:00 PM – 7:30 PM)\n• Foundation — Tue, Thu, Sat (5:00 PM – 7:00 PM)',
        chips: ['Batch size', 'Book a free demo class'],
      },
      {
        label: 'Batch size',
        keywords: ['batch size', 'students', 'how many students', 'size', 'crowd', 'small batch'],
        reply: 'Batches are kept small: max 25 students for JEE and NEET, and max 20 for Junior Foundation.',
        chips: ['Courses', 'Book a free demo class'],
      },
      {
        label: 'Book a free demo class',
        keywords: ['demo', 'trial', 'free class', 'admission', 'enroll', 'enrol', 'join', 'register', 'book', 'seat'],
        reply: "Great! Let's book a free demo class. It takes 3 quick questions.",
        startsLead: true,
      },
    ],
    lead: {
      steps: [
        { key: 'name', prompt: "What is the student's name?" },
        { key: 'course', prompt: 'Which course are you interested in?', chips: ['JEE', 'NEET', 'Junior Foundation'] },
        { key: 'day', prompt: 'Which day suits you for the demo class?', chips: ['Weekday', 'Saturday', 'Any day'] },
      ],
      summary: (a) =>
        `✅ Demo class request ready!\n• Student: ${a.name}\n• Course: ${a.course}\n• Preferred day: ${a.day}\n\n(Demo only — nothing was sent. On a real website, this request would go straight to the institute's WhatsApp, email or admissions sheet.)`,
    },
  },
  {
    id: 'restaurant',
    tab: 'Restaurant',
    name: 'Aura Host',
    business: 'Aura Dining & Lounge (demo)',
    Icon: UtensilsCrossed,
    greeting:
      "Welcome to Aura Dining & Lounge! 🍽️ I can share our menu highlights, opening hours, veg options, or reserve a table for you.",
    starterChips: ['Menu highlights', 'Opening hours', 'Veg options', 'Reserve a table'],
    intents: [
      {
        label: 'Menu highlights',
        keywords: ['menu', 'food', 'dish', 'dishes', 'eat', 'special', 'recommend', 'best', 'khana'],
        reply:
          'Popular picks:\n• Truffle Edamame Dumplings — ₹540 🟢\n• Charred Chicken Yakitori — ₹580 🔴\n• Smoked Quattro Formaggi pizza — ₹720 🟢\n• Wild Mushroom Risotto — ₹680 🟢\n• Pan-Seared Scottish Salmon — ₹950 🔴',
        chips: ['Veg options', 'Reserve a table'],
      },
      {
        label: 'Veg options',
        keywords: ['veg', 'vegetarian', 'vegan', 'jain', 'paneer', 'no meat', 'shakahari'],
        reply:
          'Vegetarian favourites 🟢:\n• Truffle Edamame Dumplings — ₹540\n• Burrata di Puglia — ₹620\n• Smoked Quattro Formaggi — ₹720\n• Wild Mushroom Risotto — ₹680\nFor Jain or allergy requests, our staff will gladly help.',
        chips: ['Menu highlights', 'Reserve a table'],
      },
      {
        label: 'Opening hours',
        keywords: ['open', 'opening', 'hours', 'timing', 'timings', 'close', 'closing', 'time', 'today'],
        reply: "We're open from 12 PM to 11:30 PM. Lunch starts at noon and dinner seatings run till late.",
        chips: ['Reserve a table', 'Menu highlights'],
      },
      {
        label: 'Delivery',
        keywords: ['delivery', 'deliver', 'order online', 'takeaway', 'take away', 'parcel', 'zomato', 'swiggy', 'home'],
        reply:
          'On a real website, I would link you to the restaurant’s online ordering or delivery partners right here.',
        chips: ['Menu highlights', 'Reserve a table'],
      },
      {
        label: 'Reserve a table',
        keywords: ['book', 'booking', 'reserve', 'reservation', 'table', 'seat', 'party', 'birthday'],
        reply: "Lovely! Let's reserve your table — just 3 quick questions.",
        startsLead: true,
      },
    ],
    lead: {
      steps: [
        { key: 'name', prompt: 'May I have your name?' },
        { key: 'guests', prompt: 'How many guests?', chips: ['2', '4', '6+'] },
        { key: 'time', prompt: 'Which time would you prefer?', chips: ['1:00 PM (Lunch)', '8:00 PM (Dinner)', '9:30 PM (Late dinner)'] },
      ],
      summary: (a) =>
        `✅ Table request ready!\n• Name: ${a.name}\n• Guests: ${a.guests}\n• Time: ${a.time}\n\n(Demo only — nothing was sent. On a real website, this booking would go straight to the restaurant's WhatsApp, email or booking sheet.)`,
    },
  },
];

const normalize = (s: string) =>
  ` ${s
    .toLowerCase()
    .replace(/[^a-z0-9\s+]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()} `;

/** Picks the intent whose keywords best match the message (whole-word matching). */
function matchIntent(text: string, intents: Intent[]): Intent | null {
  const msg = normalize(text);
  let best: Intent | null = null;
  let bestScore = 0;
  for (const intent of intents) {
    let score = 0;
    if (intent.label && normalize(intent.label) === msg) score += 10;
    for (const kw of intent.keywords) {
      if (msg.includes(` ${kw} `)) score += kw.includes(' ') ? 3 : 2;
      else if (kw.length > 4 && msg.includes(kw)) score += 1; // e.g. "timings?" / plurals
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }
  return bestScore > 0 ? best : null;
}

export const ChatbotDemo: React.FC = () => {
  const [botId, setBotId] = useState<BotConfig['id']>('coaching');
  const bot = BOTS.find((b) => b.id === botId)!;
  const allIntents = [...bot.intents, ...SHARED_INTENTS];

  const idRef = useRef(1);
  const initialMessages = (b: BotConfig): Message[] => [
    { id: 0, from: 'bot', text: b.greeting, chips: b.starterChips },
  ];

  const [messages, setMessages] = useState<Message[]>(() => initialMessages(BOTS[0]));
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [lead, setLead] = useState<{ step: number; answers: Record<string, string> } | null>(null);

  const logRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  // Keep the chat scrolled to the newest message (scrolls the chat box only, not the page).
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), []);

  const botSay = (text: string, chips?: string[], delay = 650) => {
    setTyping(true);
    const t = window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: idRef.current++, from: 'bot', text, chips }]);
    }, delay);
    timers.current.push(t);
  };

  const reset = (next: BotConfig) => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    setTyping(false);
    setLead(null);
    setInput('');
    setMessages(initialMessages(next));
  };

  const handleUserMessage = (raw: string) => {
    const text = raw.trim().slice(0, 200);
    if (!text || typing) return;
    setMessages((prev) => [...prev, { id: idRef.current++, from: 'user', text }]);
    setInput('');

    // Booking / lead flow in progress
    if (lead) {
      if (/^(cancel|stop|exit|quit|no)$/i.test(text)) {
        setLead(null);
        botSay('No problem, booking cancelled. What else can I help with?', bot.starterChips);
        return;
      }
      const step = bot.lead.steps[lead.step];
      const answers = { ...lead.answers, [step.key]: text };
      const nextStep = lead.step + 1;
      if (nextStep < bot.lead.steps.length) {
        setLead({ step: nextStep, answers });
        const s = bot.lead.steps[nextStep];
        botSay(s.prompt, s.chips);
      } else {
        setLead(null);
        botSay(bot.lead.summary(answers), bot.starterChips.slice(0, 3), 900);
      }
      return;
    }

    const intent = matchIntent(text, allIntents);
    if (!intent) {
      botSay(
        "Sorry, I'm a demo bot with pre-written answers, so I didn't catch that. Try one of these:",
        bot.starterChips
      );
      return;
    }
    if (intent.startsLead) {
      setLead({ step: 0, answers: {} });
      botSay(intent.reply, undefined, 550);
      const first = bot.lead.steps[0];
      const t = window.setTimeout(() => botSay(first.prompt, first.chips, 500), 600);
      timers.current.push(t);
      return;
    }
    botSay(intent.reply, intent.chips ?? bot.starterChips);
  };

  const lastBotChips = [...messages].reverse().find((m) => m.from === 'bot')?.chips;

  return (
    <div className="mx-auto w-full max-w-md">
      {/* Business switcher */}
      <div role="tablist" aria-label="Choose a demo business" className="mb-4 grid grid-cols-2 gap-2 rounded-xl border border-axon-border bg-axon-surface/70 p-1.5">
        {BOTS.map((b) => (
          <button
            key={b.id}
            type="button"
            role="tab"
            aria-selected={botId === b.id}
            onClick={() => {
              if (botId === b.id) return;
              setBotId(b.id);
              reset(b);
            }}
            className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold transition-colors ${
              botId === b.id ? 'bg-axon-blue text-axon-bg shadow-glow-sm' : 'text-axon-muted hover:text-axon-text'
            }`}
          >
            <b.Icon className="h-4 w-4" aria-hidden="true" />
            {b.tab}
          </button>
        ))}
      </div>

      {/* Chat window */}
      <div className="overflow-hidden rounded-2xl border border-axon-blue/40 bg-axon-surface shadow-[0_0_40px_rgba(0,180,255,0.15)]">
        <div className="flex items-center justify-between gap-3 border-b border-axon-border bg-axon-bg/80 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-axon-blue to-axon-accent text-axon-bg">
              <bot.Icon className="h-5 w-5" aria-hidden="true" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-axon-bg bg-emerald-400" />
            </span>
            <div>
              <p className="text-sm font-bold text-axon-text">{bot.name}</p>
              <p className="text-[11px] font-mono text-axon-dim">{bot.business} • rule-based demo</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => reset(bot)}
            className="rounded-lg border border-axon-border p-2 text-axon-dim transition-colors hover:border-axon-blue/50 hover:text-axon-text"
            aria-label="Restart chat"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div
          ref={logRef}
          role="log"
          aria-live="polite"
          aria-label="Chat messages"
          className="h-[24rem] sm:h-[28rem] space-y-3 overflow-y-auto overscroll-contain px-4 py-4"
        >
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.from === 'user'
                    ? 'rounded-br-md bg-axon-blue text-axon-bg'
                    : 'rounded-bl-md border border-axon-border bg-axon-bg text-axon-text'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start" aria-label="Assistant is typing">
              <div className="flex gap-1 rounded-2xl rounded-bl-md border border-axon-border bg-axon-bg px-4 py-3">
                {[0, 150, 300].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-axon-accent"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick replies */}
        {!typing && lastBotChips && lastBotChips.length > 0 && (
          <div className="no-scrollbar flex gap-2 overflow-x-auto border-t border-axon-border/70 px-4 py-2.5">
            {lastBotChips.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => handleUserMessage(chip)}
                className="shrink-0 rounded-full border border-axon-blue/40 bg-axon-blue/10 px-3 py-1.5 text-xs font-semibold text-axon-accent transition-colors hover:bg-axon-blue/20"
              >
                {chip}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserMessage(input);
          }}
          className="flex items-center gap-2 border-t border-axon-border bg-axon-bg/80 p-3"
        >
          <label htmlFor="chat-input" className="sr-only">
            Type your message
          </label>
          <input
            id="chat-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={200}
            autoComplete="off"
            placeholder={lead ? 'Type your answer… (or "cancel")' : 'Ask about fees, timings, menu…'}
            className="min-w-0 flex-1 rounded-lg border border-axon-border bg-axon-surface px-3 py-2.5 text-base sm:text-sm text-axon-text placeholder-axon-dim focus:border-axon-blue focus:outline-none focus:ring-1 focus:ring-axon-blue"
          />
          <button
            type="submit"
            disabled={!input.trim() || typing}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-axon-blue text-axon-bg transition-colors hover:bg-axon-accent disabled:opacity-40"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>

      <p className="mt-3 flex items-start gap-1.5 text-[11px] leading-relaxed text-axon-dim">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>
          Demo only: pre-written answers for fictional businesses. No AI is used and nothing you type is sent or
          stored. Please don&rsquo;t enter real personal details.
        </span>
      </p>
    </div>
  );
};
