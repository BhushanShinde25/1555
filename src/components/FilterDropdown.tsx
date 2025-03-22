"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function FilterDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={styles.container} ref={dropdownRef}>
      {/* Filter Button */}
      <button onClick={() => setIsOpen(!isOpen)} style={styles.filterButton}>
        Filter ▼
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div style={styles.dropdown}>
          <div style={styles.category}>
            {/* <strong>Medicinal Usages</strong>
            <p>Digestive</p>
            <p>Skin</p>
            <p>Immunity</p> */}
          </div>


          <div style={styles.category}>
            <Link href="/plants">Ayurveda</Link>
            <Link href="/unaniplant">Unani</Link>
          </div>
        </div>
      )}
    </div>
  );
}

/* Inline Styles */
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    display: "inline-block",
  },
  filterButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: "0",
    width: "200px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    padding: "10px",
    marginTop: "5px",
    zIndex: 1000,
  },
  category: {
    marginBottom: "20px",
    paddingBottom: "10px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start"
  },
};

