/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "celadon-green": "#28887A",
        dandelion: "#FFD476",
        "semi-white": "#ffffffcc",
      },
      height: {
        "80vh": "80vh",
        "45vh": "45vh",
      },
    },
  },
  plugins: [],
};
