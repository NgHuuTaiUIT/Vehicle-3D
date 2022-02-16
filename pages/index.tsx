import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { Suspense } from "react";
import Container from "../components/common/container";
import Footer from "../components/common/footer";
import Heading from "../components/common/heading";
import Line from "../components/common/line";
import Car from "../components/threejs/Ferrarij50";
import { Box } from "rebass";

const Home: NextPage = () => {
  return (
    <Container>
      <Heading />
      <Canvas
        // colorManagement
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
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight
            intensity={1.5}
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
            position={[50, 100, 10]}
          />
          <Car scale={2.5} position={[0, 0, 100]} rotation={[0, -0.8, 0]} />
        </Suspense>
      </Canvas>
      <Box
        sx={{
          perspective: "10em",
          perspectiveOrigin: "-60% 30%",
          position: "absolute",
          top: "30%"
        }}>
        <Box sx={{ position: "relative", transformStyle: "preserve-3d" }}>
          <Box
            sx={{
              transform: "rotateX(90deg)"
            }}>
            <Line />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};

export default Home;
