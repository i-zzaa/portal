/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue", "./index.html"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "gray-01": "#fafafb",
        "blue-01": "#022e49",
        primary: "#022e49",
        secondary: "#022e49",
        title: "#344767",
      },
      fontFamily: {
        sans: ["Manrope", "Inter"],
      },
      backgroundImage: {
        "img-01": "url('@/assets/img/img-01.jpg')",
        "logo-01": "url('@/assets/img/logo-01.png')",
        "gradient-01": "radial-gradient(at top left, #06BDEF 0%, #022e49 60%)",
      },
    },
  },
  plugins: [],
};
