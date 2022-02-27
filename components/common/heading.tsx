import React from "react";
import { Flex, Box } from "rebass";
import Menu from "./menu";
import Title from "./title";
import { useSpring, animated } from "react-spring";
import { TrailText } from "../springs/float-text";

type Props = {};

const Heading = ({
  heads = ["Electric", "Adventure"]
}: {
  heads?: string[];
}) => {
  const show = true;
  const headAnimated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration: 800 },
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0px)` : `translateY(150px)`,
    // height: show ? 110 : 0,
    // delay: 300,
    from: {
      opacity: 1,
      height: "45px",
      transform: `translateY(150px)`,
      overflow: "hidden"
    }
  });
  // const heads = ["Electric", "Adventure"];
  return (
    <Box
      sx={{
        width: "fit-content",
        left: " 50%",
        position: "relative",
        transform: "translateX(-50%)"
      }}>
      {heads.map((head, index) => (
        <Box key={head}>
          <TrailText open delay={index * 700}>
            <Title
              size={58}
              lineHeight={"3rem"}
              sx={{ mb: "0.77rem", textTransform: "none" }}>
              {head}
            </Title>
          </TrailText>
        </Box>
      ))}
    </Box>
  );
};

export default Heading;
