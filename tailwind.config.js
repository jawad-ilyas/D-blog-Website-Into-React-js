/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        White: "#ffffff",
        EeieBlack: "#262626",
        Silver: "#bdbdbd",
        Gray: "#757676",
        ProcessCyan: "#38b7ea",
        LightRed: "#fe7271",
        KellyGreen: "#73c831",
        LightBg: "#F5F8F9"

      }
    },
  },
  plugins: [],
}