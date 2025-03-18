"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>3D Virtual Garden</h1>
      <nav style={styles.nav}>
        <Link href="/" style={getNavStyle(pathname, "/")}>
          Home
        </Link>
        <Link href="/forest" style={getNavStyle(pathname, "/forest")}>
          Forest
        </Link>
        <Link href="/garden" style={getNavStyle(pathname, "/garden")}>
          Garden
        </Link>
        <Link href="/pond" style={getNavStyle(pathname, "/pond")}>
          Pond
        </Link>
        <Link href="/quiz" style={getNavStyle(pathname, "/quiz")}>
          Quiz
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    background: "linear-gradient(90deg, #43c6ac, #191654)",
    padding: "10px 20px", // Added right padding
    textAlign: "center" as const,
    color: "white",
    fontFamily: "Arial, sans-serif",
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap" as const, // Allows wrapping in smaller screens
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
};

const getNavStyle = (currentPath: string, linkPath: string) => ({
  color: currentPath === linkPath ? "#FFD700" : "white",
  textDecoration: "none",
  fontSize: "1.2rem",
  fontWeight: "bold",
  transition: "all 0.3s ease-in-out",
  padding: "10px 15px",
  borderRadius: "8px",
  backgroundColor: currentPath === linkPath ? "rgba(255, 255, 255, 0.2)" : "transparent",
  border: "2px solid transparent",
  cursor: "pointer",
  display: "inline-block",
  
  // Hover effects
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: "#FFD700",
    borderColor: "#FFD700",
  },
});
