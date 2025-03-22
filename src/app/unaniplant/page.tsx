"use client";

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
  { id: 1, name: "Kalonji (Black Seed)", images: ["/images/blackseed2.jpg", "/images/blackseed.jpg"], shortDescription: "A powerful medicinal seed.", fullDescription: "Kalonji is known for its anti-inflammatory, immune-boosting, and digestive benefits." },
  { id: 2, name: "Saffron", images: ["/images/saffron.jpg", "/images/saffron2.jpg"], shortDescription: "A prized spice for beauty and health.", fullDescription: "Saffron is used for skin care, mood enhancement, and as a powerful antioxidant." },
  { id: 3, name: "Licorice (Mulethi)", images: ["/images/licorice.jpg", "/images/licorice2.jpg"], shortDescription: "A natural remedy for throat and digestion.", fullDescription: "Licorice is known to soothe sore throats, improve gut health, and boost immunity." },
  { id: 4, name: "Henna", images: ["/images/henna.jpg", "/images/henna2.webp"], shortDescription: "A natural hair and skin conditioner.", fullDescription: "Henna is widely used for hair dyeing, cooling therapy, and skin treatments." },
  { id: 5, name: "Amla (Indian Gooseberry)", images: ["/images/amla.jpg", "/images/amla2.jpg"], shortDescription: "A superfood rich in Vitamin C.", fullDescription: "Amla is used for hair growth, immunity boosting, and anti-aging properties." },
  { id: 6, name: "Ajwain (Carom Seeds)", images: ["/images/ajwain.webp", "/images/ajwain2.jpg"], shortDescription: "A digestive aid with strong aroma.", fullDescription: "Ajwain helps in digestion, relieves acidity, and fights infections." },
  
];

export default function UnaniPlantCards() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div>
      <h1 style={styles.heading}>Unani Healing Plants</h1>
      <button onClick={() => window.history.back()} style={styles.backButton}>Go Back</button>
      <div style={styles.container}>
        {plants.map((plant) => (
          <div key={plant.id} style={styles.card}>
            <img src={expanded === plant.id ? plant.images[1] : plant.images[0]} alt={plant.name} style={styles.image} />
            <h2 style={styles.title}>{plant.name}</h2>
            <p style={styles.description}>
              {expanded === plant.id ? plant.fullDescription : plant.shortDescription}
            </p>
            <button
              onClick={() => setExpanded(expanded === plant.id ? null : plant.id)}
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
