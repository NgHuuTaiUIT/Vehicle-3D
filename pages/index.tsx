import { BakeShadows } from "@react-three/drei";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import CarModel from "../components/common/car-model";
import Container from "../components/common/container";
import Loading from "../components/common/loading";
import Scene1 from "../components/scene/scene1";

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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <>
      <Loading active={isLoading} />
      <Container>
        <CarModel />
        {!isLoading && <Scene1 />}
      </Container>
    </>
  );
};

export default Home;
