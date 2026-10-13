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
          bg: '#080B12',
          surface: '#0D1220',
          card: '#0F1626',
          cardHover: '#141D30',
          border: '#1A2436',
          borderLight: '#26354D',
          blue: '#00B4FF',
          accent: '#36C5FF',
          text: '#F5F8FF',
          muted: '#A6B2C5',
          dim: '#6C7A90',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(0, 180, 255, 0.08) 1px, transparent 1px)",
        'cyber-gradient': "linear-gradient(135deg, rgba(0, 180, 255, 0.12) 0%, rgba(13, 18, 32, 0.8) 100%)",
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(0, 180, 255, 0.25)',
        'glow-md': '0 0 25px -4px rgba(0, 180, 255, 0.35)',
        'glow-lg': '0 0 40px -6px rgba(0, 180, 255, 0.45)',
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
