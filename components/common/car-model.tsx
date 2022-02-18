import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Car from "../threejs/Ferrarij50";
type Props = {};

const CarModel = ({
  rotation = [0, -0.8, 0],
  position = [0, 0, 100],
  isStopRun,
  scale = 2.5
}: {
  rotation?: number[];
  position?: number[];
  isStopRun?: boolean;
  scale?: number;
}) => {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{
        position: [-600, 100, 0],
        fov: 40
      }}
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        left: 0,
        top: "25%",
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

      {/* <OrbitControls /> */}
      <Suspense fallback={null}>
        {/* <Stage /> */}

        {/* <Car scale={1} position={[0, -30, 50]} rotation={[0, -0.65, 0]} /> */}
        <Car
          scale={scale}
          position={position}
          rotation={rotation}
          isStopRun={isStopRun}
          // scene={scene}
        />
      </Suspense>
    </Canvas>
  );
};

export default CarModel;
