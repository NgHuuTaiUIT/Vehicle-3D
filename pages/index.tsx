import { BakeShadows } from "@react-three/drei";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Box } from "rebass";
import CarModel from "../components/common/car-model";
import Container from "../components/common/container";
import Loading from "../components/common/loading";
import Menu from "../components/common/menu";
import RightIcon from "../components/common/right-icon";
import ScrollBar from "../components/common/scroll-bar";
import Scene1 from "../components/scene/scene1";
import Scene2 from "../components/scene/scene2";

function Stage() {
  return (
    <>
      {/* Fill */}
      <ambientLight intensity={0.5} />
      <spotLight
        position={[1, 6, 1.5]}
        angle={0.2}
        penumbra={1}
        intensity={2.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      {/* Main */}
      <directionalLight
        position={[100, 100, -10]}
        intensity={1}
        shadow-camera-far={70}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-mapSize={[512, 512]}
        castShadow
        // color="#ff005b"
      />
      {/* Strip */}
      <directionalLight position={[-10, -10, 2]} intensity={3} />
      {/* Ground */}
      <mesh
        castShadow
        receiveShadow
        rotation-x={-Math.PI / 2}
        position={[0, -0.75, 0]}>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
      {/* This freezes the shadow map, which is fast, but the model has to be static  */}
      <BakeShadows />
    </>
  );
}

const Home: NextPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [scene, setScene] = useState(0);

  const updateScene = (scene: number) => {
    scene + 1 >= 2 ? null : setScene(scene + 1);
  };

  useEffect(() => {
    document.addEventListener("click", () => updateScene(scene));
    return () => document.removeEventListener("click", () => {});
  }, [scene]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 12000);
  }, []);
  return (
    <>
      <Loading active={isLoading} />
      <Container>
        <Menu />
        <RightIcon />
        <ScrollBar show={scene === 1} />

        <CarModel
          isStopRun={scene !== 0}
          rotation={scene !== 0 ? [0, -0.5, 0] : [0, -0.8, 0]}
          position={scene !== 0 ? [0, -10, -20] : [0, 0, 100]}
          scale={scene !== 0 ? 2 : 2.5}
        />

        {!isLoading && (
          <Box
            sx={{
              height: "300%",
              // width: "calc(100% - 50px)",
              width: "100%",
              position: "relative",
              zIndex: 10,
              transform: `translateY(-${scene * 100}%)`,
              transition: "all 1.5s ease 0s"
            }}>
            <Box sx={{ height: "100%" }}>
              <Scene1 />
            </Box>
            <Box sx={{ height: "85%", position: "relative" }}>
              <Scene2 scene={scene} />
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Home;
