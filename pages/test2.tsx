import { ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { Suspense } from "react";
import Container from "../components/common/container";
import Scene3 from "../components/scene/scene3";
import Camping from "../components/threejs/Camping";
import Chair from "../components/threejs/Chair";

const Test: NextPage = () => {
  return (
    <>
      <Container>
        <Scene3 />
      </Container>
    </>
  );
};

export default Test;
