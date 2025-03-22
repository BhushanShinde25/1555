"use client";
import { motion } from "framer-motion";

const Quiz = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-green-200">
      <motion.div
        className="text-2xl font-bold bg-white px-6 py-4 rounded-lg shadow-lg"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        What is the medicinal use of **Tulsi**? 🌿
        <ul>
          <li>A) Skin Healing</li>
          <li>B) Respiratory Health ✅</li>
          <li>C) Energy Booster</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Quiz;
