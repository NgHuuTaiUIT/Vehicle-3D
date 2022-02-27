import React from "react";
import { useSpring, animated } from "react-spring";
import { Flex, Image, Text, Box, Heading, Link } from "rebass";

const box = {
  width: "45%",
  height: "100%",
  flex: "0 0 auto"
};

const wrapper = {
  position: "relative",
  paddingLeft: "100%",
  paddingTop: "40%",
  overflow: "hidden"
};

const imageStyle = {
  position: "absolute",
  inset: 0,
  padding: "0px",
  border: "none",
  margin: "auto",
  display: "block",
  objectFit: "cover",
  objectPosition: "center",
  width: ["100%", "100%"],
  height: ["100%", "100%"],
  border: "1px solid yellow"
};

export const Card = ({
  src,
  duration = 200,
  delay,
  show
}: {
  src: string;
  duration?: number;
  delay?: number;

  show: boolean;
}) => {
  const animation = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration },
    // paddingBottom: show ? "100%" : "0%",
    transform: show ? "scaleY(0)" : "scaleY(1)",
    from: { transform: "scaleY(1)", transformOrigin: "top" },
    delay
  });
  return (
    // <Flex width={345} sx={cardStyle}>
    <Box sx={box}>
      <Box sx={{ ...wrapper }}>
        <animated.div
          style={{
            position: "absolute",
            inset: 0,
            ...animation,
            background: `linear-gradient(
              20deg,
              rgba(231, 171, 23, 1) 3%,
              rgba(211, 183, 44, 1) 100%
            )`,
            zIndex: 1
          }}></animated.div>
        <Image sx={imageStyle} src={src} alt="" />
      </Box>
    </Box>
    // </Flex>
  );
};
