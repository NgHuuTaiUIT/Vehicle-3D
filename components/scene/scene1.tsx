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

export const Lines = ({ show }: { show: boolean }) => {
  const [perspective, setPerspectiveOrigin] = useState("-25% 30%");
  const [isRotate, setIsRotate] = useState(false);
  useEffect(() => {
    show ? setTimeout(() => setIsRotate(true), 2000) : null;
  }, [show]);

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
          top: isRotate ? "-3%" : "-3%",
          transition: "all 0.8s"
        }}>
        <Line perspectiveOrigin={perspective} />
      </Box>
      <Box
        sx={{
          perspective: "10em",
          perspectiveOrigin: "-60% 30%",
          position: "absolute",
          top: isRotate ? "5%" : "4%",
          transition: "all 0.3s"
        }}>
        {/* <Line /> */}
        <Line perspectiveOrigin={perspective} />
      </Box>
    </>
  );
};

export default Scene1;
