module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ["General Sans", "sans-serif"],
      },
      colors: {
        violet: "#BDB7FF",
        "moonglade-water": "#69ffef",
        "tuscan-sun": "#ffd850",
        "light-green": "#45F8AD",
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
      },
      borderRadius: {
        large: "48px",
      },
      margin: {
        lg: "72px",
      },
      transitionProperty: {
        height: "height",
      },
      fontSize: {
        "3.5xl": ["32px", "40px"],
        "4.5xl": ["40px", "56px"],
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
