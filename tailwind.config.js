/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Libre Franklin", "sans-serif"],
        highlight: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 150ms ease-in-out",
        zoomIn: "zoomIn 1s ease-in-out",
        zoomOut: "zoomOut 150ms ease-in-out",
        rotate: "spin 2s linear infinite",
        dash: "dash 1.5s ease-in-out infinite",
      },
      colors: {
        white: {
          100: "#F4F5F7",
          200: "#EAECF2",
        },
        black: {
          500: "#595959",
          600: "#606060",
          800: "#2E2E2E",
          900: "#211F26", //toast bg color
        },
        purple: {
          50: "#D5D9EA",
          100: "#F2F3F9",
          150: "#EAECF2",
          200: "#7B809F",
          400: "#2D2D69",
          500: "#6750A4", // secondary button color
          700: "#353581", // gradienr color 1
          750: "#451D7B", // gradient color 2
          800: "#461985", // gradient color 3
        },
        deeppurple: {
          500: "#2D0B5C", // nav gradienr color 1
          600: "#040440", // nav gradienr color 1
          700: "#484886", // filled in checkbox
        },
        blue: {
          200: "#A8ADC7",
        },
        pink: {
          100: "#EBE6F2",
          500: "#EB40C7",
        },
        gray: {
          100: "#F4F5F7",
          150: "#CAC4D0", // toast text color
          200: "#D9D9D9",
          400: "#5C5C5C",
        },
      },
    },
  },
  plugins: [],
};
