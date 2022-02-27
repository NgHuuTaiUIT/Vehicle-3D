import { Text } from "rebass";
import { ReactNode } from "react";

const Title = ({
  children,
  size = 45,
  lineHeight,
  sx
}: {
  children: ReactNode;
  size?: number;
  lineHeight?: number;
  sx?: {};
}) => {
  return (
    <Text
      fontSize={`${size}px`}
      sx={{
        lineHeight: lineHeight,
        fontWeight: "bold",
        textTransform: "uppercase",
        ...sx

        // lineHeight: `${lineHeight}px`
      }}>
      {children}
    </Text>
  );
};

export default Title;
