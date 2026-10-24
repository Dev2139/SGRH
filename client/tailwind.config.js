/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hospital: {
          navy: '#0C2340',
          'navy-dark': '#081729',
          'navy-light': '#143860',
          blue: '#006699',
          'blue-dark': '#004D73',
          'blue-light': '#E8F4FA',
          'blue-hover': '#005580',
          sky: '#0284C7',
          'sky-light': '#F0F9FF',
          teal: '#0D9488',
          emerald: '#16A34A',
          slate: '#475569',
          'slate-dark': '#1E293B',
          'slate-light': '#64748B',
          bg: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          emergency: '#DC2626',
          'emergency-dark': '#B91C1C',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'elevated': '0 10px 25px -5px rgba(11, 37, 69, 0.07), 0 8px 10px -6px rgba(11, 37, 69, 0.04)',
        'elevated-hover': '0 20px 35px -5px rgba(11, 37, 69, 0.12), 0 10px 15px -5px rgba(11, 37, 69, 0.06)',
      },
      maxWidth: {
        'page': '1280px',
      }
    },
  },
  plugins: [],
}
