/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hover1: "hsl(35, 77%, 62%)",
        hover2: "hsl(5, 85%, 63%)",
        section1NewsBg: "hsl(240, 100%, 5%)",
        blurBg: "#0b0b13ab",
      },
      keyframes: {
        slide: {
          "0%": { right: "-100%" },
          "100%": { right: "0" },
        },
      },
      animation: {
        "slide-in": "slide 0.8s ease-in-out",
      },
      fontFamily: {
        myFont: ["Inter", "sans-serif"],
      },
      fontSize: {
        sms: "0.85rem",
        bases: "1.2rem",
        lgs: "1.3rem",
        xls: "2.4rem",
      },
      gap: {
        17: "4.35rem",
      },
      height: {
        fulls: "120vh",
      },
    },
  },
  plugins: [],
};
