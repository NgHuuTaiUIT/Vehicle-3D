import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Car from "../threejs/Ferrarij50";
import Camping from "../threejs/Camping";

import { ContactShadows, ScrollControls } from "@react-three/drei";
import { Lines } from "../scene/scene1";
type Props = {};

const CarModel = ({
  rotation = [0, -0.8, 0],
  position = [0, 0, 100],
  isStopRun,
  scale = 2.5,
  currentScene
}: {
  rotation?: number[];
  position?: number[];
  isStopRun?: boolean;
  scale?: number;
  currentScene: number;
}) => {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{
        // position: [-600, 100, 0],
        fov: 50,
        // near: 0.02,
        position: [-25, 8, 25]

        // fov: 40
      }}
      style={{
        // height: "100%",
        // width: "100%",
        position: "absolute",
        // left: isStopRun ? "-15%" : "0%",
        // left: "0%",
        // top: "0%",
        // transition: "left 1s",
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
        position={[1, 6, 1.5]}
        angle={0.2}
        penumbra={1}
        intensity={2.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        <Car
          scale={scale}
          currentScene={currentScene}
          position={position}
          rotation={rotation}
          isStopRun={isStopRun}
        />

        <ContactShadows
          scale={200}
          // rotation-x={Math.PI / 2}
          position={[0, -0.8, 0]}
          opacity={1}
          width={2}
          height={2}
          blur={1}
          far={5}
        />
      </Suspense>
    </Canvas>
  );
};

export default CarModel;
