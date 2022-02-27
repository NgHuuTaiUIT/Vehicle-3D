import { Text, Box, Flex } from "rebass";
import { ReactNode } from "react";

const Container = ({
  children,
  style
}: {
  children: ReactNode;
  style?: {};
}) => {
  return (
    <Flex
      sx={{
        maxWidth: "60%",
        width: "900px",
        height: "560px",
        p: "4rem",

        m: "auto",
        flexDirection: "column",
        justifyContent: "space-between",
        // px: 3,
        background: `linear-gradient(
          20deg,
          rgba(231, 171, 23, 1) 3%,
          rgba(211, 183, 44, 1) 40%,
          rgba(129, 175, 118, 1) 77%
        )`,
        borderRadius: "20px",
        position: "relative",
        overflow: "hidden",
        top: "15vh",
        color: "white",
        // transform: "translateY(50%)",
        ...style
      }}>
      {children}
    </Flex>
  );
};

export default Container;
