import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Container from "../components/common/container";
import Menu from "../components/common/menu";
import Model3D from "../components/common/model-3d";
import RightIcon from "../components/common/right-icon";
import ScrollBar from "../components/common/scroll-bar";
import Scenes from "../components/scene";
const Test: NextPage = () => {
  const [scene, setScene] = useState(0);

  const updateScene = (scene: number) => {
    scene + 1 >= 3 ? null : setScene(scene + 1);
  };

  useEffect(() => {
    document.addEventListener("click", () => updateScene(scene));
    return () => document.removeEventListener("click", () => {});
  }, [scene]);

  return (
    <>
      <Container>
        <Menu />
        <RightIcon />
        <ScrollBar currentScene={scene} />
        <Model3D scene={scene} />
        <Scenes currentScene={scene} />
      </Container>
    </>
  );
};

export default Test;
