import { CiMenuKebab } from "react-icons/ci";
import {
  IoMusicalNotes,
  IoExitOutline,
  IoVolumeMedium,
  IoVolumeMute,
  IoCloseOutline,
} from "react-icons/io5";
import { GrScorecard } from "react-icons/gr";
import { TbMusicOff } from "react-icons/tb";
import { useState } from "react";
import { motion } from "framer-motion";

const Menu = ({
  end,
  soundMuted,
  setSoundMuted,
  musicMuted,
  setMusicMuted,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuVariants = {
    hidden: { height: 0 },
    visible: { height: "auto" },
  };

  const closeGame = () => {
    setShowMenu(false);
    setTimeout(end, 0);
  };

  const muteSound = () => {
    setSoundMuted(!soundMuted);
  };

  const toggleMusic = () => {
    setMusicMuted(!musicMuted);
  };

  return (
    <div
      className={`absolute p-1 top-2 left-3 z-10 flex flex-col  rounded-full overflow-hidden ${
        showMenu && " dark:bg-white/10 dark:backdrop-blur-md bg-frontOfTile/20"
      }`}>
      <button
        className='hover:bg-frontOfTile rounded-full dark:text-slate-400 text-frontOfTile hover:text-white dark:hover:text-white/80 p-1'
        onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <IoCloseOutline fontSize={45} />
        ) : (
          <CiMenuKebab fontSize={45} />
        )}
      </button>
      <motion.div
        className='mt-6 w-full flex flex-col gap-1 items-center'
        initial='hidden'
        animate={showMenu ? "visible" : "hidden"}
        variants={menuVariants}>
        <button className='hover:bg-frontOfTile rounded-full dark:text-slate-400 text-frontOfTile  dark:hover:text-white/80 hover:text-white p-2'>
          <GrScorecard fontSize={35} />
        </button>
        <button
          className='hover:bg-frontOfTile rounded-full dark:text-slate-400 text-frontOfTile  dark:hover:text-white/80 p-2 hover:text-white'
          onClick={toggleMusic}>
          {!musicMuted ? (
            <TbMusicOff fontSize={35} />
          ) : (
            <IoMusicalNotes fontSize={35} />
          )}
        </button>
        <button
          className='hover:bg-frontOfTile rounded-full dark:text-slate-400 text-frontOfTile  dark:hover:text-white/80 p-2 hover:text-white'
          onClick={muteSound}>
          {soundMuted ? (
            <IoVolumeMedium fontSize={35} />
          ) : (
            <IoVolumeMute fontSize={35} />
          )}
        </button>
        <button
          className='hover:bg-frontOfTile rounded-full dark:text-slate-400 text-frontOfTile  dark:hover:text-white/80 p-2 hover:text-white'
          onClick={closeGame}>
          <IoExitOutline fontSize={35} />
        </button>
      </motion.div>
    </div>
  );
};

export default Menu;
