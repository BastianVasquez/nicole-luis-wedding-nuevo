/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fucsia: '#E91E63',
        rosa: '#FF4F91',
        coral: '#FF7043',
        mandarina: '#FF8A3D',
        naranja: '#F4511E',
        amarillo: '#FFB300',
        lima: '#8BC34A',
        verde: '#4F7D3A',
        ivory: '#FFF9F2',
        dorado: '#D4A017',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease forwards',
        'fade-up': 'fadeUp 1s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        fadeUp: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        pulseSoft: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.6 } },
      },
    },
  },
  plugins: [],
}
