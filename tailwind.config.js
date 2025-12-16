/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0b0713',
        primary: '#b05cff',
        'primary-strong': '#ff4fb1',
        accent: '#8b5cf6',
      },
      boxShadow: {
        glow: '0 20px 60px rgba(176, 92, 255, 0.25)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Sora', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
