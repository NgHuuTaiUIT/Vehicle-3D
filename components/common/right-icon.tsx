import React from "react";
import { Box } from "rebass";

type Props = {};

const RightIcon = (props: Props) => {
  return (
    <Box sx={{ mt: "0.2rem", pr: "0.6rem", position: "absolute", right: "7%" }}>
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
  );
};
export default RightIcon;
