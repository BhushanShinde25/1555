"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the structure of the quiz questions
type Question = {
  question: string;
  options: string[];
  answer: string;
};

const quizData: Question[] = [
  { question: "Which part of a plant absorbs water?", options: ["Leaves", "Roots", "Flowers", "Stem"], answer: "Roots" },
  { question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"], answer: "Oxygen" },
  { question: "Which pigment in plants helps in photosynthesis?", options: ["Hemoglobin", "Chlorophyll", "Melanin", "Carotene"], answer: "Chlorophyll" },
];

// Define butterfly colors
const butterflyColors = ["🦋", "🦋", "🦋", "🦋"];

const ButterflyQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [butterflyEffect, setButterflyEffect] = useState("glide");
  const [butterflyPosition, setButterflyPosition] = useState({ x: 50, y: 50 });

  const handleAnswer = (option: string) => {
    setSelectedOption(option);
    const isCorrect = option === quizData[currentQuestion].answer;

    if (isCorrect) {
      setScore(score + 1);
      setButterflyEffect("sparkle");
    } else {
      setButterflyEffect("dim");
    }

    // Move butterfly to a new random position
    setButterflyPosition({
      x: Math.random() * 80 + 10,
      y: Math.random() * 50 + 10,
    });

    setTimeout(() => {
      setButterflyEffect("glide");
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      }
    }, 2000);
  };

  return (
    <div style={styles.quizContainer}>
      {/* Animated Butterfly */}
      <motion.div
        style={{
          ...styles.butterfly,
          filter: butterflyEffect === "sparkle" ? "drop-shadow(0 0 10px gold)" : butterflyEffect === "dim" ? "opacity(0.5)" : "none",
        }}
        animate={{ x: `${butterflyPosition.x}%`, y: `${butterflyPosition.y}%`, scale: butterflyEffect === "sparkle" ? 1.5 : 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {butterflyColors[Math.floor(Math.random() * butterflyColors.length)]}
      </motion.div>

      {/* Quiz Box */}
      <div style={styles.questionBox}>
        <h2>{quizData[currentQuestion].question}</h2>
        <div style={styles.optionsContainer}>
          {quizData[currentQuestion].options.map((option, index) => (
            <motion.button
              key={index}
              style={{ ...styles.option, ...(selectedOption === option ? styles.selected : {}) }}
              onClick={() => handleAnswer(option)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Define inline styles
const styles: { [key: string]: React.CSSProperties } = {
  quizContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#c8e6c9",
    padding: "20px",
    position: "relative",
    overflow: "hidden",
  },
  butterfly: {
    fontSize: "4rem",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  questionBox: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "90%",
    maxWidth: "500px",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  option: {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    background: "#ff9800",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
  },
  selected: {
    background: "#4caf50",
  },
};

export default ButterflyQuiz;
