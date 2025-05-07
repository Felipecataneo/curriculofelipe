import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}', // Looks correct for src/app
    './pages/**/*.{ts,tsx}', // Only needed if using the old pages directory
    './components/**/*.{ts,tsx}', // Looks correct for src/components
    './src/**/*.{ts,tsx}', // This is a broad catch-all, should include everything under src
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'brand-cyan': {
          light: '#67e8f9',
          DEFAULT: '#0ea5e9',
          dark: '#0891b2',
        },
        'brand-blue': {
          light: '#60a5fa',
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        'brand-gray': {
          darkest: '#111827',
          dark: '#1f2937',
          medium: '#374151',
          light: '#4b5563',
          lightest: '#d1d5db',
          text: '#e5e7eb',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        reverberate: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg) scaleY(1)' },
          '25%': { transform: 'translateY(-1.5px) rotate(-0.2deg) scaleY(1.03)' },
          '50%': { transform: 'translateY(0px) rotate(0deg) scaleY(1)' },
          '75%': { transform: 'translateY(1.5px) rotate(0.2deg) scaleY(1.03)' },
        },
        vibrateSimple: {
          '0%, 100%': { transform: 'translateY(0)' },
          '20%, 80%': { transform: 'translateY(-1px)' },
          '40%, 60%': { transform: 'translateY(1px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'reverberate-on-hover': 'reverberate 0.15s linear infinite',
        'vibrate-simple-on-hover': 'vibrateSimple 0.1s linear infinite',
        'fade-in-up': 'fadeInUp 0.3s ease-out forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
