const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ["General Sans", "sans-serif"],
      },
      colors: {
        "light-green": "#E7F8F4",
        "light-pink": "#FFF2FB",
        gray: colors.gray,
        active: "#4ADA7B",
      },
      height: {
        14.5: "60px",
        22: "88px",
        30: "120px",
      },
      space: {
        xl: "72px",
      },
      padding: {
        md: "18px",
        lg: "30px",
        45: "184px",
      },
      borderRadius: {
        large: "48px",
        "extra-large": "80px",
      },
      margin: {
        lg: "72px",
      },
      transitionProperty: {
        height: "height",
      },
      fontSize: {
        md: ["16px", "32px"],
        "1.3xl": ["20px", "24px"],
        "1.5xl": ["20px", "32px"],
        "2.5xl": ["24px", "48px"],
        "3.5xl": ["32px", "40px"],
        "4.5xl": ["40px", "56px"],
        "5.5xl": ["56px", "64px"],
        "6.5xl": ["64px", "64px"],
        "8.5xl": ["120px", "120px"],
      },
      lineHeight: {
        "extra-loose": "56px",
      },
      textOpacity: {
        62: "62%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
