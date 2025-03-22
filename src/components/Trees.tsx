"use client";

import { useState } from "react";

const trees = [
  {
    name: "Neem",
    image: "https://t4.ftcdn.net/jpg/02/92/48/33/360_F_292483308_jtE2C5V3trUHN5NPpUUmHRzKyDZvYaY7.jpg",
    properties: "Antibacterial, Antifungal, Immune Booster",
    description: "Neem is known for its powerful healing properties and is widely used in Ayurveda.",
  },
  {
    name: "Tulsi",
    image: "/images/tulsi.jpg",
    properties: "Respiratory Health, Stress Reliever, Anti-inflammatory",
    description: "Tulsi, or Holy Basil, is considered sacred in India and has multiple medicinal benefits.",
  },
  {
    name: "Aloe Vera",
    image: "/images/aloe-vera.jpg",
    properties: "Skin Healing, Digestion Aid, Hydrating",
    description: "Aloe Vera is known for its skin-soothing and healing properties.",
  },
  {
    name: "Ashwagandha",
    image: "/images/ashwagandha.jpg",
    properties: "Stress Relief, Energy Booster, Brain Function",
    description: "Ashwagandha is an ancient herb used to reduce stress and improve overall well-being.",
  },
  {
    name: "Turmeric",
    image: "/images/turmeric.jpg",
    properties: "Anti-inflammatory, Antioxidant, Heart Health",
    description: "Turmeric contains curcumin, a powerful antioxidant and anti-inflammatory compound.",
  },
  {
    name: "Peppermint",
    image: "/images/peppermint.jpg",
    properties: "Digestion Aid, Headache Relief, Cooling Effect",
    description: "Peppermint is commonly used for digestive issues and provides a cooling sensation.",
  },
];

export default function Tree() {
  const [selectedTree, setSelectedTree] = useState<number | null>(null);

  return (
    <div style={styles.container}>
      {trees.map((tree, index) => (
        <div
          key={index}
          style={styles.treeCard}
          onClick={() => setSelectedTree(index)}
        >
          <img src={tree.image} alt={tree.name} style={styles.image} />
          <h3 style={styles.treeName}>{tree.name}</h3>
          <p style={styles.treeProperties}>{tree.properties}</p>
          <button style={styles.button}>More Info</button>
        </div>
      ))}

      {/* Modal for Detailed Information */}
      {selectedTree !== null && (
        <div style={styles.modalOverlay} onClick={() => setSelectedTree(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={() => setSelectedTree(null)}>❌</button>
            <img src={trees[selectedTree].image} alt={trees[selectedTree].name} style={styles.modalImage} />
            <h3 style={styles.modalTitle}>{trees[selectedTree].name}</h3>
            <p style={styles.modalText}>{trees[selectedTree].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* 🎨 Inbuilt CSS Styling */
import { CSSProperties } from "react";  // ✅ Import CSSProperties

const styles: Record<string, CSSProperties> = {   // ✅ Define style types
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    marginTop: "150px",
  },
  treeCard: {
    width: "220px",
    padding: "15px",
    borderRadius: "15px",
    backgroundColor: "#d4f1c5",
    textAlign: "center",
    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    border: "3px solid #4caf50",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #388e3c",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    fontSize: "0.9rem",
    backgroundColor: "#ff9800",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s ease",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "320px",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "5px",
    right: "5px",
    fontSize: "1.5rem",
    background: "none",
    border: "none",
    color: "#d32f2f",
    cursor: "pointer",
  },
};

