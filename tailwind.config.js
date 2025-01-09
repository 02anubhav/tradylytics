/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       extend: {
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '4px #71717A',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '2px #71717A',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke': '4px #71717A',
        },
      });
    },
  ],
}

