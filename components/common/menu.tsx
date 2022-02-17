import { title } from "process";
import React from "react";
import { Box, Flex } from "rebass";
import { TrailText } from "../springs/float-text";
import Title from "./title";
type Props = {};

const Menu = (props: Props) => {
  const titles = ["Stores", "Services", "Supports"];
  return (
    <Flex sx={{ flexDirection: "column", gap: "1.8rem" }}>
      {titles.map((title, index) => (
        <Box key={index}>
          <TrailText
            open
            delay={index * 300}
            duration={800}
            sx={{ overflow: "visible" }}>
            <Title size={12}>{title}</Title>
          </TrailText>
        </Box>
      ))}
    </Flex>
  );
};

export default Menu;
