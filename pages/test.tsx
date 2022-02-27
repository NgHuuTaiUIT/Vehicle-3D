import type { NextPage } from "next";
import Container from "../components/common/container";
import Loading from "../components/common/loading";
import ScrollBar from "../components/common/scroll-bar";
import FloatingText from "../components/common/text";
import Camping from "../components/common/camping-model";
import Scene2 from "../components/scene/scene2";
const Test: NextPage = () => {
  return (
    <>
      {/* <Loading active={true} /> */}

      <Container>
        {/* <Canvas
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
        }}></Canvas> */}
        {/* <Scene2 /> */}
      </Container>
    </>
  );
};

export default Test;
