"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const quizData = [
  { question: "What is another name for Tulsi?", options: ["Holy Basil", "Neem", "Aloe Vera", "Ashwagandha"], answer: "Holy Basil" },
  { question: "Which plant is known for boosting brain function?", options: ["Brahmi", "Peppermint", "Neem", "Turmeric"], answer: "Brahmi" },
  { question: "Which plant is used in traditional medicine for antibacterial purposes?", options: ["Aloe Vera", "Neem", "Mint", "Lemon"], answer: "Neem" },
  { question: "Which plant is an adaptogen used for stress relief?", options: ["Ashwagandha", "Amla", "Gokshura", "Turmeric"], answer: "Ashwagandha" },
  { question: "Which plant is commonly used as a powerful anti-inflammatory herb?", options: ["Turmeric", "Neem", "Shatavari", "Guggul"], answer: "Turmeric" },
];

const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [quizFinished, setQuizFinished] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (timeLeft > 0 && !quizFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setQuizFinished(true);
    }
  }, [timeLeft, quizFinished]);

  const handleNext = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setTimeLeft(15);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "94vh",
        background: "linear-gradient(135deg,rgb(156, 242, 122),rgb(85, 204, 103))",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {quizFinished ? (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ background: "white", padding: "20px", borderRadius: "10px", color: "black", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}
        >
          <h1>Quiz Completed!</h1>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Final Score: {score} / {quizData.length}</p>
          <motion.button
            onClick={() => router.push("/")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "green",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Back to Home
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{quizData[currentQuestion].question}</h1>
          <p style={{ fontSize: "1.2rem" }}>Time Left: {timeLeft} seconds</p>
          <div>
            {quizData[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  display: "block",
                  width: "100%",
                  height: "50px",
                  margin: "10px auto",
                  padding: "10px",
                  background: selectedOption === option ? "#4caf50" : "green",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "background 0.3s ease-in-out",
                }}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </motion.button>
            ))}
          </div>
          <motion.button
            onClick={handleNext}
            disabled={!selectedOption}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: selectedOption ? "green" : "#ccc",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: selectedOption ? "pointer" : "not-allowed",
              transition: "background 0.3s ease-in-out",
            }}
          >
            {currentQuestion + 1 === quizData.length ? "Finish Quiz" : "Next Question"}
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuizPage;