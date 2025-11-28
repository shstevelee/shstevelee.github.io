"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color="black" wireframe thickness={2} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="h-full w-full absolute top-0 left-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCube />
      </Canvas>
    </div>
  );
}
