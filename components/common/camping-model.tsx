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
        position: [-600, 100, 0],
        fov: 50
      }}
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        top: "25%",
        left: scene !== 1 ? "60%" : "0%",
        opacity: scene !== 1 ? "0" : "1",
        transition: "left 1.5s 0.3s ,opacity 1.5s 0.3s ease-out ",
        zIndex: 999
      }}>
      <directionalLight
        intensity={1.5}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        position={[50, 100, 10]}
      />
      <spotLight
        position={[0, -100, 0]}
        angle={0.2}
        penumbra={1}
        intensity={2.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <ambientLight intensity={0.3} />

      <Suspense fallback={null}>
        <Camping
          scale={150.5}
          position={[50, 55, 260]}
          rotation={[-0.05, -2.2, 0]}
        />
        <ambientLight intensity={0.5} />

        <Chair scale={23} rotation={[-0.05, -2, 0]} position={[-100, 60, 80]} />
      </Suspense>
    </Canvas>
  );
};

export default CarModel;
