"use client";

import { useRouter } from "next/navigation";
import Spline from "@splinetool/react-spline/next";
import styles from "./PondPage.module.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>
        {/* <button onClick={() => router.back()} className={styles.backButton}>
          Back
        </button> */}
        <Spline
          className={styles.pond}
          scene="https://prod.spline.design/cBumvamKuuOdeRtX/scene.splinecode"
        />
      </main>
    </>
  );
}
