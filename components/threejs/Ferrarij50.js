/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: hartwelkisaka (https://sketchfab.com/hartwelkisaka)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ferrari-j50-90d2f2fda3234493a1d64bf9fa1b9273
title: Ferrari j50
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Wheel from "./Wheel";
import { useSpring, a } from "@react-spring/three";

export default function Model({ currentScene, isStopRun, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/ferrarij50.gltf");
  const wheel = useRef();
  const [isRotate, setIsRotate] = useState(false);
  useEffect(() => {
    if (currentScene === 0) {
      setIsRotate(false);
      setTimeout(() => setIsRotate(true), 2000);
    }
  }, [currentScene]);

  useFrame(state => {
    if (isRotate) {
      if (group.current.rotation.y <= 0.2) {
        group.current.rotation.y += 0.01;
      }
    } else {
      group.current.rotation.y >= 0
        ? (group.current.rotation.y += -0.01)
        : null;
    }
  });

  const scaleAnimation = useSpring({
    scale: currentScene === 0 ? 0.2 : currentScene === 1 ? 0.18 : 0.14
  });

  const posCar = [0, 0, 0];
  const posWheel1 = [posCar[0] + 20, posCar[1] + 56, posCar[2] + 17];
  const posWheel2 = [posCar[0] + 20, posCar[1] + 180, posCar[2] + 17];
  const posWheel3 = [posCar[0] + 83, posCar[1] + 56, posCar[2] + 17];
  const posWheel4 = [posCar[0] + 83, posCar[1] + 180, posCar[2] + 17];
  const rotationLeftWheel = [0, 0, -1.6];
  const rotationRightWheel = [0, 0, 1.6];

  return (
    <a.group ref={group} {...props} dispose={null} scale={scaleAnimation.scale}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={posCar}>
        <lineSegments
          geometry={nodes.Material3.geometry}
          material={nodes.Material3.material}
        />
        <lineSegments
          geometry={nodes.Material3_1.geometry}
          material={nodes.Material3_1.material}
        />
        <lineSegments
          geometry={nodes.Material3_2.geometry}
          material={nodes.Material3_2.material}
        />
        <lineSegments
          geometry={nodes.Material3_3.geometry}
          material={nodes.Material3_3.material}
        />
        <lineSegments
          geometry={nodes.Material3_4.geometry}
          material={nodes.Material3_4.material}
        />
        <lineSegments
          geometry={nodes.Material3_5.geometry}
          material={nodes.Material3_5.material}
        />
        <lineSegments
          geometry={nodes.Material3_6.geometry}
          material={nodes.Material3_6.material}
        />
        <mesh
          geometry={nodes.Material2.geometry}
          material={nodes.Material2.material}
        />
        <mesh
          geometry={nodes.Material2_1.geometry}
          material={nodes.Material2_1.material}
        />
        <mesh
          geometry={nodes.Material2_3.geometry}
          material={materials["2018_Ferrari_J50_Misc1"]}
        />
        <mesh
          geometry={nodes.Material2_4.geometry}
          material={materials["2018_Ferrari_J50_CarbonFiber"]}
        />
        <mesh
          geometry={nodes.Material2_5.geometry}
          material={materials["2018_Ferrari_J50_BlackTrims"]}
        />
        <mesh
          geometry={nodes.Material3_7.geometry}
          material={materials["2018_Ferrari_J50_CarbonFiber_0"]}
        />
        <mesh
          geometry={nodes.Material2_6.geometry}
          material={materials["2018_Ferrari_J50_BIanco_Avus"]}
        />
        <mesh
          geometry={nodes.Material2_8.geometry}
          material={materials["2018_Ferrari_J50_TailightsGlass"]}
        />
        <mesh
          geometry={nodes.Material2_9.geometry}
          material={materials["2018_Ferrari_J50_Mirrors"]}
        />
        <mesh
          geometry={nodes.Material2_10.geometry}
          material={materials["2018_Ferrari_J50_Rosso_Scuderia_Calipers"]}
        />
        <mesh
          geometry={nodes.Material2_11.geometry}
          material={materials["2018_Ferrari_J50_HeadLightsGlass"]}
        />
        <mesh
          geometry={nodes.Material2_12.geometry}
          material={materials["2018_Ferrari_J50_Badges"]}
        />
        <mesh
          geometry={nodes.Material2_13.geometry}
          material={materials["2018_Ferrari_J50_BlackTrims1"]}
        />
        <mesh
          geometry={nodes.Material2_14.geometry}
          material={materials["2018_Ferrari_J50_BrakeRotors1"]}
        />
        <mesh
          geometry={nodes.Material2_15.geometry}
          material={materials["2018_Ferrari_J50_BrakeLights"]}
        />
        <mesh
          geometry={nodes.Material2_16.geometry}
          material={materials["2018_Ferrari_J50_RimBadges"]}
        />
        <mesh
          geometry={nodes.Material2_17.geometry}
          material={materials["2018_Ferrari_J50_Red1"]}
        />
        <mesh
          geometry={nodes.Material2_18.geometry}
          material={materials["2018_Ferrari_J50_UnderCarrier"]}
        />
        <mesh
          geometry={nodes.Material2_19.geometry}
          material={materials["2018_Ferrari_J50_ChromeBadges"]}
        />
        <mesh
          geometry={nodes.Material2_21.geometry}
          material={materials["2018_Ferrari_J50_HeadLightsChrome"]}
        />

        {/* <group ref={wheel} position={[0, -50, 0]} rotation={[0.5, 0, 0]}>
          <mesh
            geometry={nodes.Material2_2.geometry}
            material={materials["2018_Ferrari_J50_Tires"]}
          />
          <mesh
            geometry={nodes.Material2_7.geometry}
            material={materials["2018_Ferrari_J50_BrakeRotors"]}
          />
          <mesh
            geometry={nodes.Material2_20.geometry}
            material={materials["2018_Ferrari_J50_BrakeRotorsScrew"]}
          />
          <mesh
            geometry={nodes.Material2_22.geometry}
            material={nodes.Material2_22.material}
          />
          <mesh
            geometry={nodes.Material2_23.geometry}
            material={nodes.Material2_23.material}
          />
          <mesh
            geometry={nodes.Material2_24.geometry}
            material={materials["2018_Ferrari_J50_Lugnuts"]}
          />
        </group> */}
        <Wheel
          scale={10}
          rotation={rotationLeftWheel}
          position={posWheel1}
          isStopRun={isStopRun}
        />
        <Wheel
          scale={10}
          rotation={rotationLeftWheel}
          position={posWheel2}
          isStopRun={isStopRun}
        />
        <Wheel
          scale={10}
          rotation={rotationRightWheel}
          position={posWheel3}
          isStopRun={isStopRun}
        />
        <Wheel
          scale={10}
          rotation={rotationRightWheel}
          position={posWheel4}
          isStopRun={isStopRun}
        />

        <mesh
          geometry={nodes.Material3_8.geometry}
          material={materials["2018_Ferrari_J50_Badges_1"]}
        />
        <mesh
          geometry={nodes.Material4.geometry}
          material={materials["2018_Ferrari_J50_Badges_2"]}
        />
        <mesh
          geometry={nodes.Material2_25.geometry}
          material={nodes.Material2_25.material}
        />
        <mesh
          geometry={nodes.Material2_26.geometry}
          material={nodes.Material2_26.material}
        />
        <mesh
          geometry={nodes.Material2_27.geometry}
          material={materials["2018_Ferrari_J50_HeadLightsBase"]}
        />
        <mesh
          geometry={nodes.Material2_28.geometry}
          material={materials["2018_Ferrari_J50_Windows"]}
        />
        <mesh
          geometry={nodes.Material3_9.geometry}
          material={materials["2018_Ferrari_J50_Misc1_3"]}
        />
        <mesh
          geometry={nodes.Material2_29.geometry}
          material={materials["2018_Ferrari_J50_EngineValve"]}
        />
        <mesh
          geometry={nodes.Material2_30.geometry}
          material={materials["2018_Ferrari_J50_Grille"]}
        />
        <mesh
          geometry={nodes.Material2_31.geometry}
          material={materials["2018_Ferrari_J50_DRLsBase"]}
        />
        <mesh
          geometry={nodes.Material2_32.geometry}
          material={materials["2018_Ferrari_J50_EngineBase"]}
        />
        <mesh
          geometry={nodes.Material2_33.geometry}
          material={materials["2018_Ferrari_J50_Default_Material"]}
        />
        <mesh
          geometry={nodes.Material2_34.geometry}
          material={materials["2018_Ferrari_J50_DRLs"]}
        />
        <mesh
          geometry={nodes.Material2_35.geometry}
          material={materials["2018_Ferrari_J50_Exhaust"]}
        />
        <mesh
          geometry={nodes.Material2_36.geometry}
          material={materials["2018_Ferrari_J50_Exhaust1"]}
        />
        <mesh
          geometry={nodes.Material2_37.geometry}
          material={materials["2018_Ferrari_J50_BrakeLights2"]}
        />
        <mesh
          geometry={nodes.Material2_38.geometry}
          material={materials["2018_Ferrari_J50_EngineBay"]}
        />
        <mesh
          geometry={nodes.Material2_39.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Material2_40.geometry}
          material={materials["2018_Ferrari_J50_BrakeLights3"]}
        />
      </group>
    </a.group>
  );
}

useGLTF.preload("/ferrarij50.gltf");
