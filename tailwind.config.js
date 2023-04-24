/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Tenor Sans", "sans-serif"],
        custom: ["Cardo", "serif"],
      },
    },
  },
  plugins: [],
};
