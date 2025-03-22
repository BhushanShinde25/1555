"use client";

import { motion } from "framer-motion";

export default function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        style={styles.loaderContainer}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          style={styles.loader}
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0 }}
        style={styles.text}
      >
        Loading Herbal Garden...
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
    background: "linear-gradient(135deg, #3c8c3c, #e8f5e9)",
    zIndex: 9999,
    overflow: "hidden",
    flexDirection: "column",
  },
  loaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "120px",
    height: "120px",
    background: "radial-gradient(circle, #4CAF50, #2E7D32)",
    borderRadius: "50%",
    boxShadow: "0 0 20px rgba(76, 175, 80, 0.5)",
  },
  loader: {
    width: "80px",
    height: "80px",
    border: "8px solid transparent",
    borderTop: "8px solid #A5D6A7",
    borderBottom: "8px solid #1B5E20",
    borderRadius: "50%",
    boxSizing: "border-box",
  },
  text: {
    marginTop: "20px",
    fontSize: "1.5rem",
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "cursive",
  },
};