"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "@/components/LoadingScreen";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true); // Start loading on pathname change

    const timeout = setTimeout(() => {
      setLoading(false); // Stop loading after a short delay (imitates real loading)
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname]); // Runs when the pathname changes

  return (
    <>
      {/* Show loader only during navigation (not on initial load) */}
      <LoadingScreen isLoading={loading && pathname !== "/"} />
      {children}
    </>
  );
}
