/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Cairo': ['Cairo', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif']}
  },
  plugins: [],
}

