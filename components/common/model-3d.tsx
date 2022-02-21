import React from "react";
import { Box } from "rebass";
import Car from "./car-model";
import Camping from "./camping-model";
import { Lines } from "../scene/scene1";

const Model3D = ({
  scene,
  isLoading
}: {
  scene: number;
  isLoading: boolean;
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        height: "100%",
        width: "100%",
        top: scene === 2 ? "-5%" : "25%",
        left: scene === 0 ? "10%" : "-10%",
        transition: "all 1.5s ease 0s"
      }}>
      <Car
        currentScene={scene}
        isStopRun={scene !== 0}
        scale={0.2}
        position={[5, -1, 4]}
        rotation={[0, 0, 0]}
      />

      <Camping scene={scene} />
      {scene === 0 && <Lines />}
    </Box>
  );
};
export default Model3D;
