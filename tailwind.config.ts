import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        atlas: {
          ink: '#111111',
          smoke: '#5f6368',
          stone: '#f4efe9',
          linen: '#f7f3ee',
          mist: '#e7e2da',
          accent: '#4d5c4d'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-pt-serif)', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 18px 60px rgba(17, 17, 17, 0.08)'
      }
    }
  },
  plugins: []
} satisfies Config;
