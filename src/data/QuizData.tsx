"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

type PlantViewerProps = {
  modelPath: string;
};

function PlantModel({ modelPath }: PlantViewerProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={2} />;
}

export default function PlantViewer({ modelPath }: PlantViewerProps) {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <PlantModel modelPath={modelPath} />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
