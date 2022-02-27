import Image from "next/image";
import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { Box, Flex } from "rebass";
import { FloatImage } from "../springs/float-image";

const Scene3 = ({ scene }: { scene: number }) => {
  return (
    <Flex
      sx={{
        position: "absolute",
        right: 2,
        bottom: 0,
        // top: "23%",
        gap: "10px",
        height: "20%",
        width: "70%",
        alignItems: "end",
        justifyContent: "end"
      }}>
      <FloatImage
        src="/asset/images/image1.png"
        show={scene === 2}
        duration={800}
        delay={500}
        pt="40%"
      />
      <FloatImage
        src="/asset/images/image2.png"
        show={scene === 2}
        duration={800}
        delay={800}
        pt="40%"
      />
    </Flex>
  );
};

export default Scene3;
