const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["bowlby_oneregular", ...defaultTheme.fontFamily.sans],
        inter: ["inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent1: "#1e1e1e",
        accent2: "#e9e3dc",
        accent3: "#b3a0cd",
        accent4: "#d1ef53",
      },
    },
  },
  plugins: [],
};
//
