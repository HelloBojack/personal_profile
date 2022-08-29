/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      pink: "rgb(170, 54, 124)",
      purple: " rgb(74, 47, 189)",
      black: "#000",
      white: "#fff",
    },
    extend: {
      animation: {
        updown: "updown 3s linear infinite",
        zoomin: "zoomin 0.5s linear",
      },
      keyframes: {
        updown: {
          "0%, 100%": { transform: " translateY(-20px)" },
          "50%": { transform: " translateY(20px)" },
        },
        zoomin: {
          "0%": { opacity: 0, transform: "scale(0.3)" },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
