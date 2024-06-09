/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        second: "rgb(17 27 33)",
        third: "#0a255a",
        chatBg: "#111b21",
        main: "#e002a2",
        three: "#e00256",
        black: "#212121",
        white: "#ffffff",
        gray: "#808080e2",
      },
    },
  },
  plugins: [require("daisyui")],
};
