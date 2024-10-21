/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        gray: {
          100: "#f7fafc",
          // ...
          900: "#1a202c",
        },
      },
      backgroundImage: {
        offer: "url('/dark.jpeg')",
      },
      backgroundColor: {
        dark: "#000",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-left": "fadeInLeft 0.5s ease-out forwards",
        "fade-in-right": "fadeInRight 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("daisyui")],
};
