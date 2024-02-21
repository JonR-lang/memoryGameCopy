import { motion } from "framer-motion";

export function Tile({ content: Content, flip, state }) {
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
          className='flex size-full bg-backOfTile rounded-lg absolute z-30'
          flip={flip}
        />
      )}
      {state !== "matched" && (
        <Front className='size-full bg-frontOfTile rounded-lg flex items-center justify-center absolute'>
          <Content
            style={{
              width: "80%",
              height: "80%",
              position: "absolute",
              color: "white",
            }}
          />
        </Front>
      )}
      {state === "matched" && (
        <Matched className='size-full flex items-center justify-center relative'>
          <Content
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
