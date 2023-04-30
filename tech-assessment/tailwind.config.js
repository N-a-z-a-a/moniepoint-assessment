/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
    },
    extend: {
      colors: {
        main: "#2c387e",
        secondary: "#ff784e",
        background: "#f0f9ff",
      },
    },
  },
  plugins: [],
};
