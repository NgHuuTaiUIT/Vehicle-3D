import React from "react";
import { Box } from "rebass";
import Footer from "../common/footer";
import Heading from "../common/heading";
import Line from "../common/line";

type Props = {};

const Scene1 = (props: Props) => {
  return (
    <>
      <Heading />
      <Box
        sx={{
          perspective: "10em",
          perspectiveOrigin: "-60% 30%",
          position: "absolute",
          top: "17%"
        }}>
        <Line />
      </Box>
      <Box
        sx={{
          perspective: "10em",
          perspectiveOrigin: "-60% 30%",
          position: "absolute",
          top: "10%"
        }}>
        <Line />
      </Box>
      <Footer />
    </>
  );
};

export default Scene1;
