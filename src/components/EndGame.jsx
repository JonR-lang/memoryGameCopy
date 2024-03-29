import { motion } from "framer-motion";
import { possibleTileContents } from "../Screens";

const EndGame = ({
  start,
  end,
  tryCount,
  setShowEndGame,
  setTiles,
  setTryCount,
}) => {
  const score = Math.round((1 / parseInt(tryCount)) * 1000);
  const IconComponent =
    possibleTileContents[
      Math.floor(Math.random() * possibleTileContents.length)
    ];

  return (
    <div className='w-full h-full fixed bg-black/70 inset-0 z-20 flex justify-center items-center overflow-hidden p-6'>
      <motion.div
        className='w-full sm:aspect-square max-w-sm bg-white/90 dark:bg-slate-800/50 dark:backdrop-blur-md rounded-xl flex flex-col justify-center items-center shadow-xl p-4 py-5 gap-3 border-2 border-frontOfTile'
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          duration: 0.5,
          delay: 1,
        }}>
        <div className='flex flex-col gap-4'>
          <p className='dark:text-white text-slate-500'>Your Score</p>
          <p className='text-6xl font-bold text-frontOfTile'>{score}</p>
        </div>
        <div className='text-slate-400 mb-4 drop-shadow-xl'>
          <IconComponent fontSize={100} />
        </div>

        <div className='flex gap-3 w-full justify-center'>
          <button
            className='rounded-lg bg-frontOfTile flex-1 max-w-28 py-2 text-slate-300 hover:scale-105 duration-200'
            onClick={end}>
            Quit
          </button>
          <button
            className='rounded-lg bg-frontOfTile flex-1 max-w-28 py-2 text-slate-300 hover:scale-105 duration-200'
            onClick={() => {
              setTiles(null);
              setTryCount(0);
              setTimeout(start, 0);
              setShowEndGame(false);
            }}>
            Play Again
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EndGame;
