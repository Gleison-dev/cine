/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#474448",
        dark_orange: "#E6D62D",
        light_orange: "#ECE4B7",
        body_white: "#E6EBE0",
        black_card: "#171A21",
      },
    },
  },
  plugins: [],
};
