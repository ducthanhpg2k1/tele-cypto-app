/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    transitionTimingFunction: {
      expo: 'cubic-bezier(0.5, 1.5, 0.8, 1)',
      'expo-in': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
    },
    keyframes: {
      tableRow: {
        from: {
          opacity: '0%',
          transform: 'translateY(1rem) scaleY(110%)',
        },
        to: {
          opacity: '100%',
          transform: 'translateY(0)',
        },
      },
      slideLeft: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      tableRow: 'tableRow 0.5s forwards',
      slideLeft: 'slideLeft 0.5s forwards',
    },
    extend: {
      colors: {
        primary: {
          main: 'var(--primary-main)',
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          900: 'var(--neutral-900)',
        },
      },
      spacing: {
        0.5: '4px',
        1: '8px',
        1.5: '12px',
        2: '16px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
  important: true,
};
