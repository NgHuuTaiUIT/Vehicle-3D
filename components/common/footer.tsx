import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { Box, Flex } from "rebass";
import MenuIcon from "./menu-icon";
import Title from "./title";

type Props = {};

const Footer = (props: Props) => {
  const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding: 0.5rem 0;
    margin: 0.8rem 0 0 0;
    width: 5.3125rem;
    height: 2.125rem;
    background: transparent;
    color: white;
    font-weight: bold;
    border: 2px solid rgba(255, 255, 255, 0.7);
  `;
  return (
    <Flex
      sx={{
        justifyContent: "flex-start",
        mt: "30.5%",
        width: "100%",
        height: "50%",
        fontSize: "0.7rem"
      }}>
      <Box>
        <Title size={10}>KEEP THE WORLD</Title>
        <Title size={10} sx={{ lineHeight: "1.3rem" }}>
          ADVENTUROUS FOREVER
        </Title>
        <Button>EXPLORE</Button>
      </Box>
      <Box sx={{ ml: "12%", mt: "4%" }}>
        <MenuIcon />
      </Box>
      <Box sx={{ ml: "23%", mt: "-0.8rem" }}>
        <Image src="/asset/images/map.png" alt="Map" height={100} width={180} />
      </Box>
    </Flex>
  );
};

export default Footer;
