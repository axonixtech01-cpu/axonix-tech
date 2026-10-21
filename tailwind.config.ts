import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        axon: {
          bg: '#070A12',
          surface: '#0B1220',
          card: '#10192A',
          cardHover: '#152136',
          border: '#1B2940',
          borderLight: '#2A3B56',
          blue: '#52D8F0',
          accent: '#B1F4F7',
          text: '#F3F6FA',
          muted: '#A8B4C4',
          dim: '#8492A7',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(123, 222, 235, 0.08) 1px, transparent 1px)",
        'cyber-gradient': "linear-gradient(135deg, rgba(82, 216, 240, 0.12) 0%, rgba(11, 18, 32, 0.82) 100%)",
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(82, 216, 240, 0.20)',
        'glow-md': '0 0 25px -4px rgba(82, 216, 240, 0.28)',
        'glow-lg': '0 0 40px -6px rgba(82, 216, 240, 0.36)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.98)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
