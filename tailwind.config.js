/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        'max-sm': {'max': '489px'}
      },
      colors: {
        brand: {
          // Accent color: use for highlights, buttons, hover states
          accent: "#E63946",

          // Background (main page background, very light tone)
          background_white: "#F1FAEE",

          // Surface color: use for cards, sections, panels
          surface: "#A8DADC",

          // Primary brand color: use for header, footer, key UI areas
          primary: "#457B9D",

          // Text color: main color for typography
          text: "#1D3557",
        },
      },
    },
  },
  plugins: [],
}

