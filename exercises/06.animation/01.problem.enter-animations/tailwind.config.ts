import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        sm: "520px",
        lg: "976px",
      },
      colors: {
        highlight: "#6202FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "4.5xl": ["2.625rem", "1.15"],
        "5.5xl": ["3.375rem", "1"],
      },
      keyframes: {
        "slide-top": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        "slide-top": "slide-top 0.3s ease-out backwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
