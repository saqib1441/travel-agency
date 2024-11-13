/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1400px",
      },
      backgroundImage: {
        heading: "url('../assets/overlays/heading_overlay.png')",
      },
      colors: {
        primary: "#DF6951",
        secondary: "#F1A501",
        tertiary: "#5E6282",
      },
      fontFamily: {
        volkhov: "var(--volkhov-font)",
      },
      boxShadow: {
        main: "0px 5px 20px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
