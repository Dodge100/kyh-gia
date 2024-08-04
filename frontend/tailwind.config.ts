import fluid, { extract, fontSize, screens } from "fluid-tailwind";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/preline/preline.js",
    ],
    extract,
  },
  prefix: "",
  theme: {
    fontFamily: {
      montserrat: "var(--font-montserrat)",
      headline: "var(--font-montserrat)",
      futura: "var(--font-futura)",
    },
    screens: {
      ...screens,
      xs: "32rem",
      xxs: "24rem",
    },
    fontSize,
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        corn: {
          50: "#fffee7",
          100: "#fffec1",
          200: "#fff986",
          300: "#ffee41",
          400: "#ffde0d",
          500: "#ebbe00",
          600: "#d19700",
          700: "#a66c02",
          800: "#89540a",
          900: "#74440f",
          950: "#442304",
        },
        "daisy-bush": {
          50: "#f4f2ff",
          100: "#ede7ff",
          200: "#dcd2ff",
          300: "#c3aeff",
          400: "#a680ff",
          500: "#8c4cff",
          600: "#7f28ff",
          700: "#7116eb",
          800: "#5f12c5",
          900: "#5512ae",
          950: "#2f076e",
        },
        pampas: {
          50: "#f8f6f4",
          100: "#f2eee8",
          125: "#eee8e0",
          150: "#e9e2d8",
          175: "#e5dcd0",
          200: "#e0d6c8",
          300: "#ccbaa5",
          400: "#b69b81",
          500: "#a78468",
          600: "#9a735c",
          700: "#805d4e",
          800: "#694e43",
          900: "#564138",
          950: "#2d201d",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        "3/10": "30%",
        "7/10": "70%",
        "9/10": "90%",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("preline/plugin"),
    require("@tailwindcss/typography"),
    require("tailwind-extended-shadows"),
    fluid,
  ],
} satisfies Config;

export default config;
