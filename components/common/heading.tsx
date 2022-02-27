import React from "react";
import { Flex, Box } from "rebass";
import Menu from "./menu";
import Title from "./title";

type Props = {};

const Heading = (props: Props) => {
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
        <Title
          size={58}
          lineHeight={"2.5rem"}
          sx={{ mb: "0.77rem", textTransform: "none" }}>
          Electric
        </Title>
        <Title size={58} lineHeight={"3rem"} sx={{ textTransform: "none" }}>
          Adventure
        </Title>
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
