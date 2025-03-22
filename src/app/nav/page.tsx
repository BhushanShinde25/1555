"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";
import styles from "./Navigation.module.css";
import Trees from "../../components/Trees";
import Header from "../../components/Header"
import FallingLeaf from "../../components/FallingLeaf";
// import LandingPage from "@/components/LandingPage";
// import Quiz from "@/components/Quiz";

export default function Navigation() {
  const router = useRouter();
  return (
     <>
      <main className={styles.mainContainer}>
        {/* <LandingPage /> */}
        {/* <Quiz /> */}
        <FallingLeaf />
        <Header />
        <Trees />

        <div className={styles.navContainer}>
          
          
          <Link href="/forest" className={styles.navBox} style={{ backgroundImage: "url('..//images/forest.png')" }}>Forest</Link>
          <Link href="/pond" className={styles.navBox} style={{ backgroundImage: "url('..//images/pond.png')" }}>Pond</Link>
          <Link href="/garden" className={styles.navBox} style={{ backgroundImage: "url('..//images/3D Garden.png')" }}>3D Garden</Link>
          <Link href="/quiz" className={styles.navBox} style={{ backgroundImage: "url('..//images/forest.jpg')" }}>Quiz</Link>


        </div>
        
      </main>
    
    </>
  );
}
