/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
      gridTemplateColumns: {
        // Custom columns for a 70/30 split
        "70/30": "70% 30%",
        "60/40": "60% 40%", // Add any other ratios you might need
      },
    },
  },
  plugins: [],
};
