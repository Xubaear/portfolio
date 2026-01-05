module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        accent: '#06b6d4'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 500ms ease both'
      }
    },
  },
  plugins: [],
}
