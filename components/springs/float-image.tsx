import { Box, Flex } from "rebass";
import React from "react";
import { useTrail, animated, useSpring } from "react-spring";
import Image from "next/image";

export const FloatImage: React.FC<{
  open: boolean;
  sx?: {};
  duration?: number;
}> = ({ open, children, duration, sx }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200, duration },
    height: open ? 110 : 0,
    opacity: open ? 1 : 0,

    from: { height: 0, opacity: 0 }
  });
  return (
    <Box sx={sx}>
      {trail.map(({ height, ...style }, index) => (
        <animated.div key={index} style={style}>
          <animated.div style={{ height, width: "180px" }}>
            {items[index]}
          </animated.div>
        </animated.div>
      ))}
    </Box>
  );

  //   return (
  //     <Box
  //       sx={{
  //         // height: `470.763px`,
  //         width: "100%",
  //         flex: "0 0 auto",
  //         position: "relative",
  //         paddingTop: "180px",
  //         borderRadius: "10px"
  //       }}>
  //       <animated.div
  //         style={{
  //           ...style,
  //           position: "absolute",
  //           //   paddingTop: "142%",
  //           overflow: "hidden",
  //           paddingRight: " 100%",
  //           top: 0,
  //           borderRadius: "10px"
  //         }}>
  //         {children}
  //       </animated.div>

  //       {/* </Box> */}
  //     </Box>
  //   );
};
