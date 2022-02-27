import { BakeShadows } from "@react-three/drei";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Container from "../components/common/container";
import Loading from "../components/common/loading";
import Menu from "../components/common/menu";
import Model3D from "../components/common/model-3d";
import RightIcon from "../components/common/right-icon";
import ScrollBar from "../components/common/scroll-bar";
import Scenes from "../components/scene";

const Home: NextPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [scene, setScene] = useState(0);

  const updateScene = (scene: number, action: string) => {
    if (action === "SCROLL_DOWN") {
      scene + 1 >= 3 ? null : setScene(scene + 1);
    } else {
      scene - 1 < 0 ? null : setScene(scene - 1);
    }
  };

  const handleOnWheel = (e: any) => {
    e.deltaY > 0
      ? updateScene(scene, "SCROLL_DOWN")
      : updateScene(scene, "SCROLL_UP");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 12000);
  }, []);
  return (
    <div onWheel={handleOnWheel}>
      <Loading active={isLoading} />
      <Container>
        <Menu />
        <RightIcon />
        <ScrollBar currentScene={scene} />
        <Model3D scene={scene} isLoading={isLoading} />
        {!isLoading && <Scenes currentScene={scene} />}
      </Container>
    </div>
  );
};

export default Home;
