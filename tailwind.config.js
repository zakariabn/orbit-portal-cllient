module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navBgColor: 'rgba(255, 255, 255, .06)',
        navBgColorNotHome: '#232323',
      },
      backgroundImage: {
        
      }
    },
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
