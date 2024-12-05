/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#474448",
        dark_orange: "#EABE7C",
        light_orange: "#ECE4B7",
        body_white: "#E6EBE0",
        black_card: "#171A21",
      },
    },
  },
  plugins: [],
};
