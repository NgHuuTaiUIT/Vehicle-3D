import { ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Camping from "../threejs/Camping";
import Chair from "../threejs/Chair";

type Props = {};

const CarModel = ({ scene }: { scene: number }) => {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{
        position: [0, 1, 4],
        fov: 50
      }}
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        // top: "25%",
        // left: scene !== 1 ? "60%" : "15%",
        left: scene === 2 ? "37%" : "40%",
        top: scene === 2 ? "-7%" : "-10%",
        opacity: scene === 0 ? "0" : "1",
        transition: "left 1.5s 0.3s ,opacity 1.5s 0.3s ease-out,top 0.5s ",
        zIndex: 1
      }}>
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        <Camping
          scale={1}
          position={[0, 0, -0.5]}
          rotation={[0, -0.2, 0]}
          currentScene={scene}
        />
        <ContactShadows
          position={[0, -0.1, 0]}
          width={10}
          height={10}
          far={10}
          rotation={[Math.PI / 2, 0, 0]}
          blur={1}
        />

        <Chair
          scale={0.15}
          position={[-0.8, 0.2, 0.5]}
          rotation={[0, -0.1, 0]}
          currentScene={scene}
        />
      </Suspense>
    </Canvas>
  );
};

export default CarModel;
