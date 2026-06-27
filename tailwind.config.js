/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'hon-dark': '#1a4d2e',
        'hon-green': '#2d6a4f',
        'hon-light-green': '#40916c',
        'hon-gold': '#d4a574',
        'hon-dark-gold': '#b8956a',
        'hon-cream': '#faf8f3',
        'hon-light-cream': '#fefdfb',
        'hon-gray': '#2c2c2c',
        'hon-light-gray': '#6b7280',
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'sans-serif'],
        'display': ['Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
