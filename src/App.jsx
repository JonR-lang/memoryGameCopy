import { useState, useEffect } from "react";
import { StartScreen, PlayScreen } from "./Screens";
import BackGroundMusic from "./assets/spa-relax.mp3";

function App() {
  const [gameState, setGameState] = useState(() => {
    const savedState = JSON.parse(localStorage.getItem("memoryGame"));
    return savedState || "start";
  });
  const [musicMuted, setMusicMuted] = useState(true);
  const bgMusic = new Audio(BackGroundMusic);
  bgMusic.preload = "auto";
  bgMusic.volume = 0.1;

  useEffect(() => {
    localStorage.setItem("memoryGame", JSON.stringify(gameState));
  }, [gameState]);

  useEffect(() => {
    if (musicMuted) bgMusic.play();

    return () => {
      bgMusic.pause();
    };
  }, [musicMuted]);

  switch (gameState) {
    case "start":
      return (
        <StartScreen
          start={() => setGameState("play")}
          musicMuted={musicMuted}
          setMusicMuted={setMusicMuted}
        />
      );
    case "play":
      return (
        <PlayScreen
          end={() => setGameState("start")}
          start={() => setGameState("play")}
          musicMuted={musicMuted}
          setMusicMuted={setMusicMuted}
        />
      );
    default:
      throw new Error("Invalid game state " + gameState);
  }
}

export default App;
