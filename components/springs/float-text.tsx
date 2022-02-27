import { Box } from "rebass";
import React from "react";
import { useTrail, animated, useSpring } from "react-spring";

export const TrailText: React.FC<{
  open: boolean;
  delay?: number;
  duration?: number;
  height?: number | string;
  sx?: {};
}> = ({ open, children, delay = 0, duration = 800, height = 50, sx = {} }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200, duration },
    opacity: open ? 1 : 0,
    // y: open ? 0 : 200,
    transform: open ? `translateY(0px)` : `translateY(200%)`,
    // height: open ? 50 : 100,
    from: { opacity: -2, height: 50, transform: `translateY(200%)` },
    delay
  });
  return (
    <div>
      {trail.map(({ height, opacity, transform }, index) => (
        <animated.div
          key={index}
          style={{
            position: "relative",
            willChange: "transform, opacity",
            overflow: "hidden",
            ...sx
          }}>
          <animated.div style={{ transform, opacity }}>
            {items[index]}
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};
