/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'luxury-gold': {
          DEFAULT: '#C9A84C',
          light:   '#E8C97A',
          dark:    '#9A7B32',
          muted:   'rgba(201,168,76,0.12)',
        },
        'deep-slate': {
          DEFAULT: '#0D1117',
          mid:     '#161B22',
          light:   '#21262D',
          border:  '#30363D',
        },
        'brand-muted': '#8B949E',
        'brand-white': '#F8F6F2',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
