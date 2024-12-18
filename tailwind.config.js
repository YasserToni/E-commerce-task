import Swiper from "swiper";
import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    flexGrow: {
      2: "2",
    },
    boxShadow: {
      card: "0px 4px 26.8px 0px #0000000D",
      swiper: "0px 4px 19.3px 0px #00000000",
    },
    rotate: {
      270: "240deg",
    },
    extend: {
      colors: {
        primary: "#3074F0",
        primary1: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      // fontFamily: {
      //   fr: ["CustomFontR", "sans-serif"],
      //   fb: ["CustomFontB", "sans-serif"],
      //   fm: ["CustomFontM", "sans-serif"],
      // },
      fontFamily: {
        fr: ["DIN Next LT W23", "sans-serif"],
        fb: ["DIN Next LT W23 BOLD", "sans-serif"],
        fm: ["DIN Next LT W23 MEDIUM", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    screens: {
      // Reverse the default Tailwind breakpoints
      sm: { max: "639px" }, // For screens up to 639px
      md: { max: "767px" }, // For screens up to 767px
      lg: { max: "1024px" }, // For screens up to 1023px
      xl: { max: "1279px" }, // For screens up to 1279px
      "2xl": { max: "1535px" }, // For screens up to 1535px
    },
  },
  plugins: [tailwindcssAnimate],
};
