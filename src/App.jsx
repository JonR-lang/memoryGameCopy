import { useState, useEffect } from "react";
import { StartScreen, PlayScreen } from "./Screens";

function App() {
  const [gameState, setGameState] = useState(() => {
    const savedState = JSON.parse(localStorage.getItem("memoryGame"));
    return savedState || "start";
  });

  useEffect(() => {
    localStorage.setItem("memoryGame", JSON.stringify(gameState));
  }, [gameState]);

  switch (gameState) {
    case "start":
      return <StartScreen start={() => setGameState("play")} />;
    case "play":
      return <PlayScreen end={() => setGameState("start")} />;
    default:
      throw new Error("Invalid game state " + gameState);
  }
}

export default App;
