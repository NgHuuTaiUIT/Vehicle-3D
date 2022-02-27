import React from "react";
import { Flex } from "rebass";
import Title from "./title";
type Props = {};

const Menu = (props: Props) => {
  return (
    <Flex sx={{ flexDirection: "column", gap: "1.8rem" }}>
      <Title size={12}>Stores</Title>
      <Title size={12}>Services</Title>
      <Title size={12}>Supports</Title>
    </Flex>
  );
};

export default Menu;
