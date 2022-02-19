import React from "react";
import { Box } from "rebass";
import Footer from "../common/footer";
import Heading from "../common/heading";
import Line from "../common/line";
import ScrollBar from "../common/scroll-bar";
import Camping from "../common/camping-model";
import FloatingText from "../common/text";
type Props = {};

const Scene2 = ({ scene }: { scene: number }) => {
  return (
    <>
      <Heading heads={["Explore the", "places you love"]} />
      <Box
        sx={{
          perspective: "10em",
          perspectiveOrigin: "-60% 30%",
          position: "absolute",
          top: "30%"
        }}></Box>
      <Camping scene={scene} />
      {/* <ScrollBar /> */}
      <FloatingText scene={scene} />
    </>
  );
};

export default Scene2;
