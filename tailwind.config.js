/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
const config = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "rgb(88, 201, 232)",
          black: "rgb(0, 0, 0)",
          white: "rgb(255, 255, 255)",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};

module.exports = config;
