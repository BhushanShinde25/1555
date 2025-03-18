"use client";

import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Plane, Float, Environment, Box, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Define mystery boxes with clues
const mysteryBoxes: { id: string; position: [number, number, number]; clue: string }[] = [
  { id: "box1", position: [-3, 0, 2], clue: "This box holds the secret to ancient herbs." },
  { id: "box2", position: [2, 0, -3], clue: "A box filled with the essence of nature." },
  { id: "box3", position: [0, 0, 3], clue: "Contains the wisdom of Ayurvedic medicine." },
  { id: "box4", position: [-2, 0, -2], clue: "Unlock the mystery of healing plants." },
  { id: "box5", position: [3, 0, -1], clue: "A treasure trove of forgotten remedies." },
  { id: "box6", position: [-1, 0, 4], clue: "A box whispering the secrets of wellness." },
];


const MysteryBox = ({ position, onClick }: { position: [number, number, number]; onClick: () => void }) => (
  <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
    <Box position={position} args={[1, 1, 1]} onClick={onClick} castShadow>
      <meshStandardMaterial color="#FFD700" />
    </Box>
  </Float>
);

const GardenScene: React.FC = () => {
  const [selectedClue, setSelectedClue] = useState<string | null>(null);
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play sound when a mystery box is clicked
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", background: "#a8df8e" }}>
      <Canvas shadows>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <OrbitControls />
        <Environment preset="sunset" />

        {/* Grass Field */}
        <Plane args={[20, 20, 32, 32]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <meshStandardMaterial color="#3c8c3c" />
        </Plane>

        {/* Stones */}
        <Sphere position={[-2, 0, 1]} args={[0.5, 16, 16]}>
          <meshStandardMaterial color="#7D7D7D" />
        </Sphere>
        <Sphere position={[1, 0, -2]} args={[0.4, 16, 16]}>
          <meshStandardMaterial color="#5C5C5C" />
        </Sphere>

        {/* Mystery Boxes */}
        {mysteryBoxes.map((box) => (
          <MysteryBox
            key={box.id}
            position={box.position}
            onClick={() => {
              setSelectedClue(box.clue);
              playSound();
            }}
          />
        ))}
      </Canvas>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/sounds/click.mp3" preload="auto" />

      {/* Clue Display */}
      {selectedClue && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            fontWeight: "bold",
            color: "#2c3e50",
          }}
        >
          🎁 Clue: {selectedClue}
        </motion.div>
      )}

      {/* Navigation Buttons */}
      <motion.button
        onClick={() => router.push("/")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          padding: "10px 15px",
          background: "#ff5722",
          color: "white",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        Back to Home
      </motion.button>

      <motion.button
        onClick={() => router.push("/quiz")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 15px",
          background: "#ff9800",
          color: "white",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        Start Quiz
      </motion.button>
    </div>
  );
};

export default GardenScene;
