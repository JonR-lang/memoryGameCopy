import { motion } from "framer-motion";
import useDarkMode from "./hooks/theme";

export function Tile({ content: Content, flip, state }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const containerVariants = {
    start: { rotateY: 0, perspective: 500 },
    flipped: { rotateY: 180, perspective: 500 },
    matched: { rotateY: 180, perspective: 500 },
  };

  return (
    <motion.div
      className='inline-block size-full relative flip '
      variants={containerVariants}
      initial='start'
      transition={{ duration: 0.5 }}
      animate={state}>
      {state !== "matched" && (
        <Back
          className='flex size-full bg-backOfTile rounded-lg absolute z-20 dark:bg-slate-900'
          flip={flip}
        />
      )}
      {state !== "matched" && (
        <Front
          className={`size-full bg-frontOfTile rounded-lg flex items-center justify-center absolute z-10 dark:bg-black/40 ${ state === "flipped" && "dark:custom-shadow" }`}
        >
          <Content
            className='text-white dark:text-frontOfTile'
            style={{
              width: "80%",
              height: "80%",
              position: "absolute",
            }}
          />
        </Front>
      )}
      {state === "matched" && (
        <Matched className='size-full flex items-center justify-center relative'>
          <Content
            className='dark:opacity-50'
            style={{
              width: "80%",
              height: "80%",
              position: "absolute",
              color: "#C7D2FF",
            }}
          />
        </Matched>
      )}
    </motion.div>
  );
}

function Back({ className, flip }) {
  return (
    <div
      onClick={flip}
      className={className}
      style={{ backfaceVisibility: "hidden" }}></div>
  );
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
