/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryText: "#020221",
        secondaryText: "#5e5c5c",
        btnBg: "#020221",
        btnHover: "#000031",

        logoBg: "#f6faff",
        primaryFont: "#202020",
        secondFont: "#7d859c",
        customGreen: "#22b6b0",
      },
    },
  },
  plugins: [],
};

