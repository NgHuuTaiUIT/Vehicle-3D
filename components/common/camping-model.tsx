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
          key={undefined}
          attach={undefined}
          attachArray={undefined}
          attachObject={undefined}
          args={undefined}
          // eslint-disable-next-line react/no-children-prop
          children={undefined}
          onUpdate={undefined}
          up={undefined}
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
