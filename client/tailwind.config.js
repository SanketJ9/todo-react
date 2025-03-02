/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['"Sriracha"', 'cursive'],
      display: ['"Permanent Marker"', 'cursive'],
    },
    extend: {
      colors: {
        "theme": "#FF9D23",
        "dark-theme": "#e77331",
        "light" : "#ecdcb3",
        "mid" : "#fffbf2",
        "dark" : "#782800",
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
      },
    },
  },
  plugins: [],
}