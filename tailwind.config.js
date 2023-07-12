/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [' "Raleway", "sans-serif"'],
      mono: ['"Montserrat", "sans-serif"'],
    },
    extend: {
      colors: {
        bgcolor: "#333",
        primary: "#4F4F4F",
        secondary: "#828282",
      },
    },
  },
  plugins: [],
};
