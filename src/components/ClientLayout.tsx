"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Detect route changes
import LoadingScreen from "@/components/LoadingScreen"; // Import LoadingScreen

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    setLoading(true); // Show loading screen
    const timeout = setTimeout(() => setLoading(false), 1500); // Hide after 1.5s
    return () => clearTimeout(timeout);
  }, [pathname]); // Runs whenever the route changes

  return (
    <>
      {loading && <LoadingScreen />} {/* Show Loading Animation */}
      {children}
    </>
  );
}
