import React, { useEffect, useState } from "react";
import { Box } from "rebass";
import Footer from "../common/footer";
import Heading from "../common/heading";
import Line from "../common/line";

type Props = {};

const Scene1 = (props: Props) => {
  return (
    <>
      <Heading />

      <Footer />
    </>
  );
};

export const Lines = () => {
  const [perspective, setPerspectiveOrigin] = useState("-25% 30%");
  const [isRotate, setIsRotate] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsRotate(true), 2000);
  }, []);

  useEffect(() => {
    isRotate
      ? setPerspectiveOrigin("-60% 30%")
      : setPerspectiveOrigin("-25% 30%");
  }, [isRotate]);

  return (
    <>
      <Box
        sx={{
          perspective: "10em",
          perspectiveOrigin: "-60% 30%",
          position: "absolute",
          top: isRotate ? "-3%" : "0%"
        }}>
        <Line perspectiveOrigin={perspective} />
      </Box>
      <Box
        sx={{
          perspective: "10em",
          perspectiveOrigin: "-60% 30%",
          position: "absolute",
          top: isRotate ? "5%" : "6%"
        }}>
        {/* <Line /> */}
        <Line perspectiveOrigin={perspective} />
      </Box>
    </>
  );
};

export default Scene1;
