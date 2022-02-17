import React from "react";
import { Flex, Box } from "rebass";
import Menu from "./menu";
import Title from "./title";
import { useSpring, animated } from "react-spring";
import { TrailText } from "../springs/float-text";

type Props = {};

const Heading = (props: Props) => {
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
  const heads = ["Electric", "Adventure"];
  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        width: "100%",
        height: "50%",
        mb: "0.3rem",
        mt: "0.3rem"
      }}>
      <Menu />
      <Box sx={{ marginLeft: "-13%" }}>
        {heads.map((head, index) => (
          <Box key={head}>
            <TrailText open delay={index * 700}>
              <Title
                size={58}
                lineHeight={"2.5rem"}
                sx={{ mb: "0.77rem", textTransform: "none" }}>
                {head}
              </Title>
            </TrailText>
          </Box>
        ))}

        {/* <Title size={58} lineHeight={"3rem"} sx={{ textTransform: "none" }}>
          Adventure
        </Title> */}
      </Box>
      <Box sx={{ mt: "0.2rem", pr: "0.6rem" }}>
        <Box
          sx={{
            width: "20px",
            height: "2px",
            background: "#f8f3de",
            borderRadius: "2px",
            marginBottom: "4px"
          }}></Box>
        <Box
          sx={{
            width: "20px",
            height: "2px",
            background: "#f8f3de",
            borderRadius: "2px",
            marginBottom: "4px"
          }}></Box>
      </Box>
    </Flex>
  );
};

export default Heading;
