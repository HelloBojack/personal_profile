/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        updown: "updown 3s linear infinite",
      },
      keyframes: {
        updown: {
          "0%, 100%": { transform: " translateY(-20px)" },
          "50%": { transform: " translateY(20px)" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
