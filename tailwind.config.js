/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FBF8F3',
          100: '#F7F2E9',
          200: '#EFE8D8',
          300: '#E3D9C2',
        },
        ink: {
          900: '#1C1917',
          800: '#292524',
          700: '#3D3633',
          600: '#57534E',
          500: '#78716C',
          400: '#A8A29E',
        },
        terracotta: {
          400: '#C0785C',
          500: '#A85A3F',
          600: '#8C4A33',
        },
        sage: {
          400: '#8A9A7B',
          500: '#6F8160',
          600: '#5A6B4E',
        },
        rule: '#D6CFC0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'label': '0.18em',
        'wide-label': '0.25em',
      },
    },
  },
  plugins: [],
};
