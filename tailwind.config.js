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
        darkGray: "#303136",
      },
      backgroundImage: {
        lightMode: "linear-gradient(40deg, #ff0080, #ff8c00 70%)",
      },
      boxShadow: {
        crescent:
          "inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb",
      },
    },
  },
  plugins: [],
};
