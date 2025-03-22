import React from "react";
import { motion } from "framer-motion";
import { addListener } from "process";

const WindEffect = ({ children }) => {
  const styles = {
    container: {
      position: "relative",
      overflow: "hidden",
      width: "100%",
      height: "100%",
    },
    windLine: {
      position: "absolute",
      left: "-10%",
      width: "100px",
      height: "2px",
      background: "rgba(255, 255, 255, 0.5)",
      opacity: 0.5,
    },
    windAffected: {
      // display: "inline-block",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      gap: "10px"
    },
  };

  return (
    <div style={styles.container}>
      {/* Wind Lines Animation */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{ ...styles.windLine, top: `${Math.random() * 100}%` }}
          animate={{ x: "110%", opacity: [0, 1, 0] }}
          transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Elements affected by wind */}
      <motion.div
        style={styles.windAffected}
        animate={{ x: [0, 5, -5, 0], rotate: [0, 1, -1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default WindEffect;
