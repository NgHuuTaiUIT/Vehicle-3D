import React from "react";
import { Box } from "rebass";

const FloatingText = ({ currentScene }: { currentScene: number }) => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      bottom:
        currentScene === 0 ? "-400px" : currentScene === 1 ? "-70px" : "140px",
      transition: "1.5s",
      paddingLeft: "15px"
    }}>
    <p
      style={{
        color: "#eee",
        fontSize: "10px",
        width: "355px",
        lineHeight: 2
      }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </p>
  </Box>
);

export default FloatingText;
