"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

type PlantViewerProps = {
  modelPath: string;
};

function PlantModel({ modelPath }: PlantViewerProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

export default function PlantViewer({ modelPath }: PlantViewerProps) {
  return (
    <div style={styles.viewer}>
      <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
        <Suspense fallback={<p>Loading...</p>}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 5, 3]} intensity={1} />
          <PlantModel modelPath={modelPath} />
          <OrbitControls enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Inline Styles
const styles = {
  viewer: {
    width: "100%",
    maxWidth: "700px",
    height: "600px",
    border: "2px solid #155724",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
};
