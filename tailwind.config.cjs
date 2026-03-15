/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0811",
        panel: "rgba(255,255,255,0.06)",
        stroke: "rgba(255,255,255,0.10)",
        text: "rgba(255,255,255,0.92)",
        mutetext: "rgba(255,255,255,0.65)",
        pink: {
          300: "#F6A8D4",
          400: "#EE7CC0",
          500: "#E85AAE",
          600: "#D9469B",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.55)",
        pinkglow: "0 0 0 1px rgba(255,255,255,0.08), 0 30px 90px rgba(232,90,174,0.16)",
      },
      backdropBlur: { glass: "14px" },
    },
  },
  plugins: [],
};