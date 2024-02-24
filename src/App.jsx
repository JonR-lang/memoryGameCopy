import { useState, useEffect } from "react";
import { StartScreen, PlayScreen } from "./Screens";
import BackGroundMusic from "./assets/spa-relax.mp3";

function App() {
  const [gameState, setGameState] = useState(() => {
    const savedState = JSON.parse(localStorage.getItem("memoryGame"));
    return savedState || "start";
  });
  const playBgMusic = () => {
    const bgMusic = new Audio(BackGroundMusic);
    bgMusic.volume = 0.2;
    bgMusic.play();
  };

  useEffect(() => {
    localStorage.setItem("memoryGame", JSON.stringify(gameState));
  }, [gameState]);

  // useEffect(() => {
  //   playBgMusic();
  // }, []);

  switch (gameState) {
    case "start":
      return <StartScreen start={() => setGameState("play")} />;
    case "play":
      return (
        <PlayScreen
          end={() => setGameState("start")}
          start={() => setGameState("play")}
        />
      );
    default:
      throw new Error("Invalid game state " + gameState);
  }
}

export default App;
