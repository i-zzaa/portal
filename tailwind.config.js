/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue", "./index.html"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "gray-01": "#fafafb",
        "gray-02": "#9ca3af",
        "red-01": "#f87171",
        "orange-01": "#fb923c",
        "green-01": "#34d399",
        "blue-01": "#22d3ee",
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
