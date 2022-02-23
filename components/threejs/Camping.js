/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Blarb (https://sketchfab.com/Blarb)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/camping-tent-3f624d58d582430595179bdf9a156be3
title: Camping tent
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";

export default function Model({ currentScene, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/camping.gltf");

  const scaleAnimation = useSpring({
    config: { duration: 500 },
    scale: currentScene === 2 ? 0.8 : 1
    // from: { scale: 0.2 }
  });

  useFrame(state => {
    if (currentScene === 2) {
      group.current.position.x >= -0.2
        ? (group.current.position.x += -0.1)
        : null;
    } else if (currentScene === 1) {
      group.current.position.x <= 0 ? (group.current.position.x += 0.1) : null;
    }
    console.log(group.current.position.x);
  });

  return (
    <a.group
      ref={group}
      {...props}
      dispose={null}
      scale={scaleAnimation.scale}
      castShadow>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.tent001_Tent_0.geometry}
              material={materials.Tent}
            />
          </group>
        </group>
      </group>
    </a.group>
  );
}

useGLTF.preload("/camping.gltf");
