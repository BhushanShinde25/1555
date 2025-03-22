import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "Virtual Herbal Garden",
  description: "Explore Ayurveda and herbal plants in an interactive 3D garden",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ClientLayout> {/* Wrap everything in ClientLayout */}
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
