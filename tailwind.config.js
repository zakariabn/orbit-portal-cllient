module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },

  // daisyUI config
  daisyui: {
    themes: [
      {
        orbitToolsTheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
};
