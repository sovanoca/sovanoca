// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
          b1: '#0d2c44', // example blue
          b2: '#77b5be',
          y1: '#e59a51',
      }
    },
  },
  plugins: [],
}
