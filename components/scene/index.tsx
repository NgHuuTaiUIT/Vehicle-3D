import { Box } from "rebass";
import Scene1 from "./scene1";
import Scene2 from "./scene2";
import Scene3 from "./scene3";

export default function Scenes({ currentScene }: { currentScene: number }) {
  let percentTransform = 0;

  switch (currentScene) {
    case 1:
      percentTransform = 100;
      break;
    case 2:
      percentTransform = 145;
      break;
    default:
      percentTransform = 0;
      break;
  }

  return (
    <Box
      sx={{
        height: "300%",
        // width: "calc(100% - 50px)",
        width: "100%",
        position: "relative",
        zIndex: 10,
        transform: `translateY(-${percentTransform}%)`,
        transition: "all 1.5s ease 0s"
      }}>
      <Box sx={{ height: "100%" }}>
        <Scene1 />
      </Box>
      <Box sx={{ height: "85%", position: "relative" }}>
        <Scene2 scene={currentScene} />
      </Box>
      <Box
        sx={{
          height: "100%",
          position: "absolute",
          inset: 0,
          top: "133%",
          right: "-9%"
        }}>
        <Scene3 scene={currentScene} />
      </Box>
    </Box>
  );
}
