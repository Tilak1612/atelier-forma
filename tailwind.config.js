/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./projects/*.html", "./journal/*.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
