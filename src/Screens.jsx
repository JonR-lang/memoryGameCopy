import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import * as icons from "react-icons/gi";
import { Tile } from "./Tile";
import useDarkMode from "./hooks/theme";

export const possibleTileContents = [
  icons.GiHearts,
  icons.GiWaterDrop,
  icons.GiDiceSixFacesFive,
  icons.GiUmbrella,
  icons.GiCube,
  icons.GiBeachBall,
  icons.GiDragonfly,
  icons.GiHummingbird,
  icons.GiFlowerEmblem,
  icons.GiOpenBook,
];

export function StartScreen({ start }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleDarkMode = () => {
    toggleDarkMode(!isDarkMode);
  };

  return (
    <>
      <button
        className='absolute inline-flex items-center cursor-pointer right-3 top-3'
        onClick={handleDarkMode}>
        <div className="w-11 h-6 bg-sky-100 focus:outline-none focus:ring-2 rounded-full dark:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-orange-500 after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-darkGray dark:after:shadow-crescent dark:after:bg-darkGray shadow-md"></div>
      </button>
      <div className='w-full h-screen flex justify-center items-center p-8 dark:custom-bg-start custom-cursor'>
        <div className='w-full max-w-sm aspect-square bg-pink-100 rounded-xl flex justify-center items-center flex-col space-y-8 text-pink-500 dark:text-pink-500/80 dark:bg-pink-950/20'>
          <h1 className='text-5xl font-bold'>Memory</h1>
          <p>Flip over the tiles looking for pairs</p>
          <button
            onClick={start}
            className='bg-pink-500 text-white p-3 px-12 rounded-full dark:bg-pink-500/80 hover:scale-105 duration-150 ease-linear dark:text-slate-900 hover:custom-cursor-pointer'>
            Play
          </button>
        </div>
      </div>
    </>
  );
}

export function PlayScreen({ end }) {
  const [tiles, setTiles] = useState(null);
  const [tryCount, setTryCount] = useState(0);
  const [selectedValue, setSelectedValue] = useState(16);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleDarkMode = () => {
    toggleDarkMode(!isDarkMode);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setSelectedValue(value);
  };

  useEffect(() => {
    setTiles(null);
    setTryCount(0);
  }, [selectedValue]);

  const getTiles = (tileCount) => {
    // Throw error if count is not even.
    if (tileCount % 2 !== 0) {
      throw new Error("The number of tiles must be even.");
    }

    // Use the existing list if it exists.
    if (tiles) return tiles;

    const pairCount = tileCount / 2;

    // Take only the items we need from the list of possibilities.
    const usedTileContents = possibleTileContents.slice(0, pairCount);

    // Double the array and shuffle it.
    const shuffledContents = usedTileContents
      .concat(usedTileContents)
      .sort(() => Math.random() - 0.5)
      .map((content) => ({ content, state: "start" }));

    setTiles(shuffledContents);
    return shuffledContents;
  };

  const flip = (i) => {
    // Is the tile already flipped? We don’t allow flipping it back.
    if (tiles[i].state === "flipped") return;

    // How many tiles are currently flipped?
    const flippedTiles = tiles.filter((tile) => tile.state === "flipped");
    const flippedCount = flippedTiles.length;

    // Don't allow more than 2 tiles to be flipped at once.
    if (flippedCount === 2) return;

    // On the second flip, check if the tiles match.
    if (flippedCount === 1) {
      setTryCount((c) => c + 1);

      const alreadyFlippedTile = flippedTiles[0];
      const justFlippedTile = tiles[i];

      let newState = "start";

      if (alreadyFlippedTile.content === justFlippedTile.content) {
        setTimeout(() => {
          confetti({
            ticks: 100,
            particleCount: 300,
            spread: 100,
          });
        }, 1000);

        newState = "matched";
      }

      // After a delay, either flip the tiles back or mark them as matched.
      setTimeout(() => {
        setTiles((prevTiles) => {
          const newTiles = prevTiles.map((tile) => ({
            ...tile,
            state: tile.state === "flipped" ? newState : tile.state,
          }));

          // If all tiles are matched, the game is over.
          if (newTiles.every((tile) => tile.state === "matched")) {
            setTimeout(end, 0);
          }

          return newTiles;
        });
      }, 1000);
    }

    setTiles((prevTiles) => {
      return prevTiles.map((tile, index) => ({
        ...tile,
        state: i === index ? "flipped" : tile.state,
      }));
    });
  };

  return (
    <>
      <div className='absolute right-3 top-3 flex gap-3 items-center'>
        <div className='flex items-center gap-2 justify-center'>
          <p className='text-slate-800 dark:text-slate-300'>Level:</p>
          <select
            value={selectedValue}
            onChange={handleChange}
            className='dark:bg-slate-950 dark:text-slate-400  px-2'>
            <option value={8}>Easy</option>
            <option value={16}>Medium</option>
            <option value={32}>Hard</option>
          </select>
        </div>

        <button
          className='inline-flex items-center cursor-pointer relative'
          onClick={handleDarkMode}>
          <div className="w-11 h-6 bg-sky-100 focus:outline-none focus:ring-2 rounded-full dark:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-orange-500 after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-darkGray dark:after:shadow-crescent dark:after:bg-darkGray shadow-md"></div>
        </button>
      </div>

      <div className='min-h-screen overflow-y-auto w-full flex items-center justify-center p-4 flex-col gap-4 text-center custom-cursor'>
        <span className='w-full flex items-center justify-center gap-2 text-xl text-indigo-600 sm:text-2xl lg:text-3xl'>
          Tries:
          <span className='inline-block sm:h-7 sm:-mt-1 rounded-md bg-numberOfTriesBg px-2 dark:bg-transparent'>
            {tryCount}
          </span>
        </span>

        <div className='w-full max-w-md aspect-square bg-blue-100 rounded-xl p-3 grid grid-cols-4 place-items-center gap-3 dark:bg-black/40 dark:md:backdrop-blur-md'>
          {getTiles(selectedValue).map((tile, i) => (
            <Tile key={i} flip={() => flip(i)} {...tile} />
          ))}
        </div>
      </div>
    </>
  );
}
