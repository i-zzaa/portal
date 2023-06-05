/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue", "./index.html"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "gray-01": "#fafafb",
        "gray-02": "#9ca3af",
        "gray-03": "#f1f1f1",
        "gray-04": "#d1d5db",
        "red-01": "#f87171",
        "orange-01": "#fb923c",
        "green-01": "#34d399",
        "blue-01": "#22d3ee",
        "blue-02": "#003583",
        primary: "#022e49",
        "primary-opacity": "#022e49c9",
        secondary: "#022e49",
        title: "#344767",
        facebook: "#1877f2",
        google: "#ef4444",
        microsoft: "#84cc16",

        encerrado: "#22d3ee",
        resolvido: "#34d399",
        novo: "#22d3ee",
        reaberto: "#fb923c",
      },

      fontFamily: {
        sans: ["Manrope", "Inter"],
      },
      backgroundImage: {
        "img-01": "url('@/assets/img/img-01.jpg')",
        "logo-01": "url('@/assets/img/logo-01.png')",
        "logo-02": "url('@/assets/img/logo-02.png')",
        "gradient-01": "radial-gradient(at top left, #06BDEF 0%, #022e49 60%)",
      },
      maxWidth: {
        80: "80%",
      },
      keyframes: {
        "slide-in": {
          "0%": { top: "-100%", left: "100%", transform: "translate(0, 0)" },
          "100%": {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
