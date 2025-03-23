"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  backButton: {
    display: "block",
    margin: "0 auto 20px auto",
    padding: "10px 15px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease-in-out",
  },
  card: {
    width: "320px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    backgroundColor: "#fff",
    padding: "15px",
    transition: "transform 0.3s ease-in-out",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover" as "cover",
    borderRadius: "8px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "10px",
  },
  description: {
    marginTop: "10px",
    color: "#555",
    transition: "max-height 0.3s ease-in-out",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease-in-out",
  },
};

const plants = [
  {
    id: 1,
    name: "Neem",
    images: ["/images/neem.jpg", "/images/neem2.jpg"],
    shortDescription: "Neem is known for its medicinal properties.",
    fullDescription:
      "Neem is a fast-growing tree that is widely used in Ayurvedic medicine. It has antibacterial, antifungal, and anti-inflammatory properties, making it beneficial for skin care and other health treatments.",
  },
  {
    id: 2,
    name: "Tulsi",
    images: ["/images/tulsi.png", "/images/tulsi2.jpg"],
    shortDescription: "Tulsi is revered for its healing properties.",
    fullDescription:
      "Tulsi, also known as Holy Basil, is an aromatic herb used in Ayurvedic medicine. It helps reduce stress, boosts immunity, and has antibacterial properties. It is often consumed as a herbal tea.",
  },
  {
    id: 3,
    name: "Aloe Vera",
    images: ["/images/aloe.jpg", "/images/aloe2.jpg"],
    shortDescription: "Aloe Vera is widely used for skin care.",
    fullDescription:
      "Aloe Vera contains vitamins, enzymes, and amino acids that help with skin healing, digestion, and overall health. It is commonly used in skin treatments and hair care products.",
  },
  {
    id: 4,
    name: "Ashwagandha",
    images: ["/images/ashwagandha2.jpg", "/images/ashwagandha.jpg"],
    shortDescription: "Ashwagandha helps reduce stress and boost energy.",
    fullDescription:
      "Ashwagandha is an adaptogenic herb that helps the body manage stress, improve cognitive function, and enhance physical endurance. It is widely used in Ayurvedic medicine.",
  },
];

export default function PlantCards() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div>
      <Navbar />
      <h1 style={styles.heading}>Healing Plants</h1>
      {/* <button onClick={() => window.history.back()} style={styles.backButton}>
        Go Back
      </button> */}
      <div style={styles.container}>
        {plants.map((plant) => (
          <div key={plant.id} style={styles.card}>
            <img
              src={expanded === plant.id ? plant.images[1] : plant.images[0]}
              alt={plant.name}
              style={styles.image}
            />
            <h2 style={styles.title}>{plant.name}</h2>
            <p style={styles.description}>
              {expanded === plant.id
                ? plant.fullDescription
                : plant.shortDescription}
            </p>
            <button
              onClick={() =>
                setExpanded(expanded === plant.id ? null : plant.id)
              }
              style={styles.button}
            >
              {expanded === plant.id ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
