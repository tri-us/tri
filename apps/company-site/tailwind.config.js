const { join } = require("path");
const { createGlobPatternsForDependencies } = require("@nrwl/next/tailwind");

/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
const config = {
  content: [
    join(__dirname, "src/{pages,components}/**/*.{js,jsx,ts,tsx}"),
    createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require("../../tailwind.config")],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s ease-in-out infinite",
      },
    },
  },
};

module.exports = config;
