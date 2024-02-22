import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    console.log(savedMode);
    if (savedMode) {
      setIsDarkMode(savedMode === "true");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleDarkMode = () => {
    const modeToSet = !isDarkMode;
    setIsDarkMode(modeToSet);
    localStorage.setItem("darkMode", modeToSet);
    document.body.classList.toggle("dark", modeToSet);
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
