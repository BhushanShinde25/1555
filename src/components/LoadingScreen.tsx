"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000); // Hide after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div style={styles.container}>
      {/* Left Tree */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1 }}
        style={styles.treeLeft}
      />

      {/* Right Tree */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1 }}
        style={styles.treeRight}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={styles.text}
      >
        Loading...
      </motion.p>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } ={
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#a8df8e",
    zIndex: 9999,
    overflow: "hidden",
  },
  treeLeft: {
    position: "absolute",
    left: 0,
    width: "50vw",
    height: "100vh",
    background: "url('/images/tree-left.png') no-repeat center center/cover",
  },
  treeRight: {
    position: "absolute",
    right: 0,
    width: "50vw",
    height: "100vh",
    background: "url('/images/tree-right.png') no-repeat center center/cover",
  },
  text: {
    position: "absolute",
    fontSize: "2rem",
    color: "#fff",
    fontWeight: "bold",
  },
};
