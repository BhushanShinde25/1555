"use client";

import { motion } from "framer-motion";

export default function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={styles.loader}
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

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to right, #a8df8e, white)",
    zIndex: 9999,
    overflow: "hidden",
    flexDirection: "column",
  },
  loader: {
    width: "100px",
    height: "100px",
    border: "10px solid white",
    borderTop: "10px solid green",
    borderRadius: "50%",
    boxSizing: "border-box",
  },
  text: {
    marginTop: "20px",
    fontSize: "1.5rem",
    color: "#fff",
    fontWeight: "bold",
  },
};
