/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        startNeutral: "#FDF3F8",
        startPrimary: "#EC4899",
        tileWrapper: "#EEF2FF",
        backOfTile: "#A5B4FD",
        frontOfTile: "#6466F1",
        matchedIcon: "#C7D2FF",
        numberOfTries: "",
        numberOfTriesBg: "#C7D2FF",
      },
    },
  },
  plugins: [],
};
