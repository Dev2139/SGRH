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
          navy: '#0B2545',
          'navy-dark': '#06172B',
          'navy-light': '#133E68',
          blue: '#0284C7',
          'blue-dark': '#0369A1',
          'blue-light': '#F0F9FF',
          'blue-hover': '#0270A8',
          teal: '#0D9488',
          'teal-light': '#F0FDFA',
          slate: '#475569',
          'slate-dark': '#1E293B',
          'slate-light': '#64748B',
          bg: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          bronze: '#B48A3C',
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
