/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('src/assets/vektor/bg-pattern.svg')",
      },
    },
    fontFamily: {
      Epilogue: ["Epilogue", "sans-serif"],
      RHD: ["Red Hat Display", "sans-serif"],
    },
  },
  plugins: [],
};
