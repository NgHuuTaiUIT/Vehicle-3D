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
        fov: 50,
        position: [-25, 8, 25]
      }}
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
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
          key={undefined}
          attach={undefined}
          attachArray={undefined}
          attachObject={undefined}
          args={undefined}
          // eslint-disable-next-line react/no-children-prop
          children={undefined}
          onUpdate={undefined}
          up={undefined}
          rotation={undefined}
          matrix={undefined}
          quaternion={undefined}
          layers={undefined}
          dispose={undefined}
          onClick={undefined}
          onContextMenu={undefined}
          onDoubleClick={undefined}
          onPointerUp={undefined}
          onPointerDown={undefined}
          onPointerOver={undefined}
          onPointerOut={undefined}
          onPointerEnter={undefined}
          onPointerLeave={undefined}
          onPointerMove={undefined}
          onPointerMissed={undefined}
          onPointerCancel={undefined}
          onWheel={undefined}
          visible={undefined}
          type={undefined}
          isGroup={undefined}
          id={undefined}
          uuid={undefined}
          name={undefined}
          parent={undefined}
          modelViewMatrix={undefined}
          normalMatrix={undefined}
          matrixWorld={undefined}
          matrixAutoUpdate={undefined}
          matrixWorldNeedsUpdate={undefined}
          castShadow={undefined}
          receiveShadow={undefined}
          frustumCulled={undefined}
          renderOrder={undefined}
          animations={undefined}
          userData={undefined}
          customDepthMaterial={undefined}
          customDistanceMaterial={undefined}
          isObject3D={undefined}
          onBeforeRender={undefined}
          onAfterRender={undefined}
          applyMatrix4={undefined}
          applyQuaternion={undefined}
          setRotationFromAxisAngle={undefined}
          setRotationFromEuler={undefined}
          setRotationFromMatrix={undefined}
          setRotationFromQuaternion={undefined}
          rotateOnAxis={undefined}
          rotateOnWorldAxis={undefined}
          rotateX={undefined}
          rotateY={undefined}
          rotateZ={undefined}
          translateOnAxis={undefined}
          translateX={undefined}
          translateY={undefined}
          translateZ={undefined}
          localToWorld={undefined}
          worldToLocal={undefined}
          lookAt={undefined}
          add={undefined}
          remove={undefined}
          removeFromParent={undefined}
          clear={undefined}
          getObjectById={undefined}
          getObjectByName={undefined}
          getObjectByProperty={undefined}
          getWorldPosition={undefined}
          getWorldQuaternion={undefined}
          getWorldScale={undefined}
          getWorldDirection={undefined}
          raycast={undefined}
          traverse={undefined}
          traverseVisible={undefined}
          traverseAncestors={undefined}
          updateMatrix={undefined}
          updateMatrixWorld={undefined}
          updateWorldMatrix={undefined}
          toJSON={undefined}
          clone={undefined}
          copy={undefined}
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
        />
      </Suspense>
    </Canvas>
  );
};

export default CarModel;
