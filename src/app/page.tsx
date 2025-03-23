"use client";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import FilterDropdown from "@/components/FilterDropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModelCanvas from "@/components/ModelCanvas";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={darkMode ? styles.darkContainer : styles.lightContainer}>
      {/* Navbar */}
      {/* <nav style={styles.navbar}>
        <div style={styles.logo}>🌿 VIRTUAL HERBAL GARDEN</div>

        {isMobile ? (
          <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        ) : (
          <ul style={styles.navLinks}>
            {["/", "/forest", "/pond", "/quiz", "/Chat Boat"].map(
              (path, index) => (
                <Link
                  key={index}
                  href={path}
                  style={{
                    ...styles.navItem,
                    padding: "10px 15px",
                    borderRadius: "8px",
                    color:
                      pathname === path
                        ? "#388E3C"
                        : darkMode
                        ? "#ffffff"
                        : "#222",
                    background: pathname === path ? "#E8F5E9" : "transparent",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#1B5E20"; // Dark green text on hover
                    e.currentTarget.style.background = "#A5D6A7"; // Light green background on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      pathname === path
                        ? "#388E3C"
                        : darkMode
                        ? "#ffffff"
                        : "#222";
                    e.currentTarget.style.background =
                      pathname === path ? "#E8F5E9" : "transparent";
                  }}
                >
                  {path === "/"
                    ? "Home"
                    : path.substring(1).charAt(0).toUpperCase() +
                      path.substring(2)}
                </Link>
              )
            )}
          </ul>
        )}

        <div style={styles.navRight}>
          <FilterDropdown />
          <Link
            href="https://flask-herbal-app.onrender.com"
            target="_blank"
            style={styles.AiButton}
          >
            AI Model
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={styles.darkModeButton}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
       */}
      <Navbar />

      {/* Mobile Menu (Only when hamburger is clicked) */}
      {menuOpen && isMobile && (
        <ul style={styles.mobileMenu}>
          {["/", "/forest", "/pond", "/explore", "/contact"].map(
            (path, index) => (
              <Link
                key={index}
                href={path}
                style={{
                  ...styles.mobileMenuItem,
                  color:
                    pathname === path
                      ? "#388E3C"
                      : darkMode
                      ? "#ffffff"
                      : "#222",
                }}
              >
                {path === "/"
                  ? "Home"
                  : path.substring(1).charAt(0).toUpperCase() +
                    path.substring(2)}
              </Link>
            )
          )}
        </ul>
      )}

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
            Explore the wonders of{" "}
            <span style={styles.ayurvedaText}> Ayurveda </span> with our Virtual
            Herbal Garden
          </h1>
          <p style={styles.heroSubtitle}>
            A digital gateway to nature&apos;s healing secrets – explore, learn,
            and experience the magic of medicinal plants in an interactive 3D
            environment.
          </p>
          <Link href="/garden" style={styles.exploreButton}>
            Explore →
          </Link>
        </div>

        <div style={styles.heroImage}>
          <div style={styles.modelCanvasWrapper}>
            <ModelCanvas />
          </div>
        </div>
      </section>
    </div>
  );
}

/* Inline Styles */
const styles: { [key: string]: React.CSSProperties } = {
  lightContainer: {
    backgroundColor: "#ffffff",
    color: "#222",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
    transition: "all 0.3s ease-in-out",
  },
  modelCanvasWrapper: {
    marginTop: "50px",
    width: "100%",
    height: "400px",
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  AiButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  darkContainer: {
    backgroundColor: "#121212",
    color: "#fff",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
    transition: "all 0.3s ease-in-out",
  },

  logo: {
    fontSize: "24px",
    fontWeight: "600",
  },

  darkModeButton: {
    cursor: "pointer",
    background: "none",
    border: "none",
    color: "#777",
  },
  heroSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px",
    marginTop: "40px",
    flexWrap: "wrap",
  },
  heroText: {
    maxWidth: "50%",
    minWidth: "300px",
  },
  heroTitle: {
    fontSize: "50px",
    fontWeight: "600",
    lineHeight: "1.2",
  },
  heroSubtitle: {
    marginTop: "10px",
    color: "#555",
    fontFamily: "cursive",
  },
  ayurvedaText: {
    color: "#388E3C",
    fontFamily: "cursive",
  },
  exploreButton: {
    marginTop: "20px",
    display: "inline-block",
    backgroundColor: "#388E3C",
    color: "white",
    padding: "12px 24px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center",
  },
  heroImage: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    minWidth: "400px",
  },
  plantImage: {
    marginTop: "100px",
    width: "450px",
    borderRadius: "10px",
  },
  hamburger: {
    display: "block",
    cursor: "pointer",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    position: "absolute",
    top: "60px",
    left: "0",
    width: "100%",
    zIndex: 100,
  },
  mobileMenuItem: {
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "none",
  },
};
