import Image from "next/image";
import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { Box, Flex } from "rebass";
import { Card } from "../common/Card";
import { FloatImage } from "../springs/float-image";
type Props = {};

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
      <Card
        src="/asset/images/image1.png"
        show={scene === 2}
        duration={800}
        delay={500}
      />
      <Card
        src="/asset/images/image2.png"
        show={scene === 2}
        duration={800}
        delay={800}
      />
    </Flex>
  );
};

export default Scene3;
