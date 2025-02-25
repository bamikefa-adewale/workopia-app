/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        animation: {
          spin: "spin 2s linear infinite",
        },
      },
    },
  },
  plugins: [],
});
