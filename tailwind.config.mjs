import defaultTheme from "tailwindcss/defaultTheme";

// Semantic colours are CSS variables (see src/styles/global.css) so that
// light and dark mode are defined once, not as `dark:` pairs in every component.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,md,mdx}"],
  theme: {
    extend: {
      colors: {
        // The logo's blue is cyan-400. Too light for text on light
        // backgrounds; use cyan-700 or darker there.
        cyan: {
          50: "#EEFAFD",
          100: "#D4F2FA",
          200: "#AAE5F5",
          300: "#7FD8EF",
          400: "#58C9E8",
          500: "#2EB0D4",
          600: "#1C8DB0",
          700: "#18708C",
          800: "#175B71",
          900: "#164B5D",
          950: "#0B2F3C",
        },
        // Blue-tinted neutrals standing in for the logo's black.
        ink: {
          50: "#F6F8FA",
          100: "#ECF0F3",
          200: "#D6DDE3",
          300: "#B4C0CA",
          400: "#8494A3",
          500: "#5E6E7D",
          600: "#46545F",
          700: "#333E48",
          800: "#212A33",
          900: "#141A21",
          950: "#0A0E13",
        },
        // Warm accent, used sparingly: prices and single highlights.
        signal: {
          50: "#FFF8EB",
          100: "#FEEBC8",
          200: "#FDD58A",
          300: "#FBBF4E",
          400: "#F7A928",
          500: "#E88C0C",
          600: "#C26C06",
          700: "#A15509",
          800: "#83440E",
          900: "#6C390F",
          950: "#3E1D03",
        },
        bg: token("bg"),
        band: token("band"),
        surface: token("surface"),
        fg: token("fg"),
        muted: token("muted"),
        line: token("line"),
        "card-border": token("card-border"),
        accent: token("accent"),
        mark: token("mark"),
        price: token("price"),
        "button-bg": token("button-bg"),
        "button-fg": token("button-fg"),
        selection: token("selection"),
      },
      fontFamily: {
        sans: ["Space Grotesk Variable", ...defaultTheme.fontFamily.sans],
        mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
