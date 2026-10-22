/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,md,mdx}"],
  theme: {
    extend: {
      colors: {
        // The logo's blue. Too light for text on white; use it for marks only.
        brand: "rgb(88, 201, 232)",
      },
    },
  },
  plugins: [],
};
