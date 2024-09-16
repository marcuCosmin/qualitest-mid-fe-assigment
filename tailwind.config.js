/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "960px",
      md: "1400px",
      lg: "1920px",
    },
    extend: {
      colors: {
        black: "#222",
        gray: "#D3D3D3",
        yellow: "#f5a623",
        "dark-yellow": "#d4881f",
      },
    },
  },
  plugins: [],
}
