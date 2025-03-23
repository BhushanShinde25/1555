import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PondModel } from "../ModelView/PondModel";
import { Html } from "@react-three/drei";

export default function ModelCanvas() {
  return (
    <Canvas
      camera={{ position: [-5, 5, 0] }}
      style={{
        width: "450px",
        height: "450px",
        top: "-45px",
      }}
    >
      <ambientLight intensity={0.5} />
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={1}
        maxDistance={6}
        minDistance={5}
      />
      <Suspense
        fallback={
          <Html>
            <div>Loading...</div>
          </Html>
        }
      >
        <group scale={4.5}>
          <PondModel />
        </group>
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
}
