module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js.ts.jsx.tsx}",
    "./components/**/*.{js.ts.jsx.tsx}",
  ],
  purge: [],
  theme: {
    extend: {
      backgroundImage: {
        characters: "url('./assets/Characters.jpg')",
        episodes: "url('./assets/Episodes.jpg')",
        locations: "url('./assets/Locations.jpg')",
      },
    },
  },
  variants: {},
  plugins: [],
};
