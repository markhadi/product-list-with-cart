/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",
        rose: {
          50: "hsl(20, 50%, 98%)",
          100: "hsl(13, 31%, 94%)",
          300: "hsl(14, 25%, 72%)",
          400: "hsl(7, 20%, 60%)",
          500: "hsl(12, 20%, 44%)",
          900: "hsl(14, 65%, 9%)",
        },
      },
      fontFamily: {
        sans: ["'Red Hat Text'", ...fontFamily.sans],
      },
      fontWeight: {
        normal: "400",
        semibold: "600",
        bold: "700",
      },
      gridTemplateColumns: {
        main: "minmax(0, 800px) minmax(0, 384px)",
      },
    },
  },
  plugins: [],
};
