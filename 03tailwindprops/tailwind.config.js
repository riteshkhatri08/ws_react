/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-div-bg-blue": "#109cff",
        "body-bg-dark": "#242424",
      },
    },
  },
  plugins: [],
};
