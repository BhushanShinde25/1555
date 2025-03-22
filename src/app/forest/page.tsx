"use client";

import { useRouter } from "next/navigation";
import Spline from "@splinetool/react-spline/next";
import styles from "../pond/PondPage.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <>
    
    <main className={styles.mainContainer}>
      <button onClick={() => router.back()} className={styles.backButton}>Back</button>
      <Spline scene="https://prod.spline.design/oO6PeAoc7U7nNPKc/scene.splinecode" />
     
    </main>
    </>
  );
}