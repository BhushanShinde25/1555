"use client";

import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useThemeStore } from "@/store/useThemeStore";

const LandingPage = () => {
  const { isNight, toggleTheme } = useThemeStore();

  return (
    <div className={`relative w-full h-screen flex flex-col items-center justify-center transition-all duration-1000 ${
      isNight ? "bg-black text-white" : "bg-gradient-to-b from-sky-400 to-green-300 text-black"
    }`}>

      {/* ☀️🌙 Sun or Moon */}
      <motion.div
        className={`absolute top-10 right-10 w-14 h-14 rounded-full transition-all duration-500 ${
          isNight ? "bg-yellow-300" : "bg-orange-500"
        } shadow-lg`}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌳 3D Interactive Garden */}
      <div className="garden-container relative w-full h-[60vh]">
        <Spline scene="https://prod.spline.design/oO6PeAoc7U7nNPKc/scene.splinecode" />
      </div>

      {/* 🏡 Hero Section */}
      <motion.h1
        className="magic-text text-5xl font-extrabold text-center transition-all"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Welcome to Virtual Herbal Garden
      </motion.h1>

      {/* 🌙 Toggle Theme Button */}
      <button 
        className="glow-button absolute bottom-20 transition-all duration-500" 
        onClick={toggleTheme}
      >
        {isNight ? "Switch to Day 🌞" : "Switch to Night 🌙"}
      </button>

      {/* 🚀 Call to Action */}
      <motion.button
        className="glow-button absolute bottom-12"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Explore Garden
      </motion.button>
    </div>
  );
};

export default LandingPage;
