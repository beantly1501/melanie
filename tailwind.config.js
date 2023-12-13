/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {

      backgroundImage: {
        "bleh-cat": "url('/public/bleeh.jpg')"
      }
    },
  },
  plugins: [],
}

