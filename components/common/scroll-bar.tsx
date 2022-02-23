import styled from "@emotion/styled";
import React from "react";
import { Box } from "rebass";

const ScrollBar = ({ currentScene }: { currentScene: number }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 60,
        opacity: currentScene === 0 ? 0 : 1,
        transition: "opacity 1.5s",
        height: "100px",
        background: "rgba(255,255,255,0.3)",
        borderRadius: "10px"
      }}>
      <Box
        sx={{
          height: "50px",
          width: "6px",
          mb: "25px",
          borderRadius: "10px",
          background: "rgba(255, 255, 255, 0.5)",
          transform: currentScene === 2 ? "translateY(100%)" : "translateY(0%)",
          transition: "transform 0.8s"
        }}
      />
    </Box>
  );
};
export default ScrollBar;
