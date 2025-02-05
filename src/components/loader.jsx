import React from "react";
import { motion } from "framer-motion";
import "./loader.css";

const TimeWatchLoader = () => {
  const watches = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.4 + Math.random() * 0.6,
    rotate: Math.random() * 360,
  }));

  return (
    <div className="time-watch-loader">
      {watches.map((watch) => (
        <motion.div
          key={watch.id}
          className="watch"
          initial={{
            opacity: 0,
            x: watch.x,
            y: watch.y,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            opacity: [0, 1, 0.5, 1, 0],
            x: [watch.x, watch.x + (Math.random() * 250 - 125), watch.x],
            y: [watch.y, watch.y + (Math.random() * 250 - 125), watch.y],
            scale: [0, watch.scale, 0.8, watch.scale, 0],
            rotate: [0, watch.rotate, 360 + watch.rotate],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <div className="watch-face">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
              (angle) => (
                <div
                  key={angle}
                  className="hour-marker"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-60px)`,
                  }}
                />
              ),
            )}

            <motion.div
              className="hours-hand"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 43200,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="minutes-hand"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 3600,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="seconds-hand"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="center-dot" />
          </div>
        </motion.div>
      ))}
      <div className="loading-text">Traversing Time...</div>
    </div>
  );
};

export default TimeWatchLoader;
