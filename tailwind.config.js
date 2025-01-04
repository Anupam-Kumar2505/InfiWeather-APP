// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      minHeight:{
        "screen-svh":"100svh"
      }
    },
  },
  variants: {},
  plugins: [],
};
