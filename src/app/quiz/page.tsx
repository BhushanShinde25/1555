"use client";

import React, { useState, useEffect, CSSProperties, useMemo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import FallingLeaf from "@/components/FallingLeaf";

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

  const fallingLeafComponent = useMemo(() => <FallingLeaf />, []);

  return (
    <div >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={styles.container}
        >
        {fallingLeafComponent}
        {/* Back to Home Button */}
        <motion.button
          onClick={() => router.push("/")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={styles.backButton}
        >
          ← Home
        </motion.button>

        {quizFinished ? (
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} style={styles.resultCard}>
            <h1>Quiz Completed!</h1>
            <p style={styles.score}>Final Score: {score} / {quizData.length}</p>
            <motion.button onClick={() => router.push("/")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={styles.finishButton}>
              Back to Home
            </motion.button>
          </motion.div>
        ) : (
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} style={styles.quizCard}>
            <h1>{quizData[currentQuestion].question}</h1>
            <p style={styles.timer}>Time Left: {timeLeft} seconds</p>
            <div>
              {quizData[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    ...styles.optionButton,
                    background: selectedOption === option ? "#2e7d32" : "#ffffff",
                    color: selectedOption === option ? "#ffffff" : "#2e7d32",
                    border: "2px solid #2e7d32",
                    margin: "10px",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                  onClick={() => setSelectedOption(option)}
                >
                  {option}
                </motion.button>
              ))}
            </div>
            <motion.button onClick={handleNext} disabled={!selectedOption} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ ...styles.nextButton, background: selectedOption ? "#2e7d32" : "#ccc" }}>
              {currentQuestion + 1 === quizData.length ? "Finish Quiz" : "Next Question"}
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  
  container: {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "94vh",
    background: "#ffffff",
    color: "#2e7d32",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    backgroundImage: "url('/images/quizBg.png')", // Add your background image URL here
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    
  },
  backButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
    background: "#2e7d32",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  finishButton: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#2e7d32",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default QuizPage;