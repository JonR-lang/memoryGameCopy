import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const Star = ({ initialX, initialY }) => {
  const [direction, setDirection] = useState(Math.random() < 0.5 ? -1 : 1); // Random initial direction
  const speed = Math.random() * 60 + 30; // Random speed between 5 and 25

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection((prevDirection) => -prevDirection); // Reverse direction after each interval
    }, Math.random() * 2000 + 1000); // Random interval between 1 and 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      style={{
        width: "2px",
        height: "2px",
        backgroundColor: "white", // or any other color for the star
        borderRadius: "50%",
        position: "absolute",
        top: initialY,
        left: initialX,
      }}
      animate={{
        x: `${direction === 1 ? "100vw" : "-100vw"}`, // Move star off-screen horizontally
        y: `${direction === 1 ? "100vh" : "-100vh"}`,
      }}
      transition={{
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      }}
    />
  );
};

const StarField = ({ numStars }) => {
  const stars = useMemo(
    () =>
      [...Array(numStars)].map((_, index) => (
        <Star
          key={index}
          initialX={`${Math.random() * window.innerWidth}px`}
          initialY={`${Math.random() * window.innerHeight}px`}
        />
      )),
    [numStars]
  );

  return (
    <div className='absolute inset-0 overflow-hidden hidden dark:block'>
      {stars}
    </div>
  );
};

export default StarField;
