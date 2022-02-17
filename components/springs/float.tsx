import { Box } from "rebass";
import React, { ReactNode } from "react";
import { useTrail, animated, useSpring } from "react-spring";

export const Float: React.FC<{
  open: boolean;
  delay?: number;
  duration?: number;
  height?: number | string;
  sx?: {};
}> = ({ open, children, delay = 0, duration = 800, height = 50, sx = {} }) => {
  const float = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration },
    opacity: open ? 1 : 0,
    // y: open ? 0 : 200,
    transform: open ? `translateY(0px)` : `translateY(200%)`,
    height: open ? 50 : 100,
    from: { opacity: -2, height: 100, transform: `translateY(200%)` },
    delay
  });
  return <animated.div style={{ ...float }}>{children}</animated.div>;
};
