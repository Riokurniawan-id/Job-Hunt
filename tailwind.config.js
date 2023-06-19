/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Brand
      primary: "#4640DE",
      secondary: "#CCCCF5",
      tertiary: "#E7F6FD",
      // ACCENTS
      yellow: "#FFB836",
      green: "#56CDAD",
      red: "#FF6550",
      blue: "#26A4FF",
      purple: "#7B61FF",
      //NEUTRALS
      100: "#25324B",
      80: "#515B6F",
      60: "#7C8493",
      40: "#A8ADB7",
      20: "#D6DDEB",
      10: "#F8F8FD",
      0: "#FFFFFF",
    },
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
