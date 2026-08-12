import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        atlas: {
          ink: '#0D0D0D',
          smoke: '#1C1C1C',
          stone: '#F5F2EB',
          linen: '#F5F2EB',
          mist: '#D4AF37',
          accent: '#2E3D34'
        }
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 18px 60px rgba(13, 13, 13, 0.10)'
      }
    }
  },
  plugins: []
} satisfies Config;
