"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FilterDropdown from "@/components/FilterDropdown";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>🌿 VIRTUAL HERBAL GARDEN</div>

      {isMobile ? (
        <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      ) : (
        <ul style={styles.navLinks}>
          {["/", "/forest", "/pond", "/quiz", "/Empty", "/Chat Boat"].map((path, index) => (
            <Link
              key={index}
              href={path}
              style={{
                ...styles.navItem,
                background: pathname === path ? "#E8F5E9" : "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "green";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = pathname === path ? "#E8F5E9" : "transparent";
                e.currentTarget.style.color = "#222";
              }}
            >
              {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
            </Link>
          ))}
        </ul>
      )}

      <div style={styles.navRight}>
        <FilterDropdown />
        <Link href="/model" style={styles.AiButton}>AI Model</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    flexWrap: "wrap",
    border: "1px transparent",
    borderBottom: "1px solid rgb(212, 207, 207)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "600",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    fontSize: "16px",
  },
  navItem: {
    color: "black",
    cursor: "pointer",
    textDecoration: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    transition: "all 0.3s ease-in-out",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
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
  hamburger: {
    display: "block",
    cursor: "pointer",
  },
};
