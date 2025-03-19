import React from "react";
import { color, motion } from "framer-motion";

const leaves = Array.from({ length: 10 }, (_, i) => i);

const FallingLeaf = () => {
  return (
    <div style={styles.leafContainer}>
      {leaves.map((leaf, index) => (
        <motion.div
          key={index}
          style={{ ...styles.leaf, left: `calc(10% + ${Math.random() * 80}%)` }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: "100vh", opacity: 1 }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
        >
           🍀
        </motion.div>
      ))}
    </div>
  );
};

const styles = {
  leafContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    overflow: "hidden",
  },
  leaf: {
    position: "absolute",
    fontSize: "24px",
    color: "green"
  },
};

export default FallingLeaf;
