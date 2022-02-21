import styled from "@emotion/styled";
import React from "react";
import { Box } from "rebass";

type Props = {};
const CustomScrollBar = styled.div`
  /* margin-left: 30px; */
  float: left;
  height: 80px;
  width: 10px;
  /* background: #f5f5f5; */
  overflow-y: scroll;
  margin-bottom: 25px;

  &::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1); */
    border-radius: 10px;
    background-color: rgba(245, 245, 245, 0.3);
  }

  &::-webkit-scrollbar {
    width: 6px;
    /* background-color: transparent; */
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    /* background-color: #555; */
    background-color: rgba(245, 245, 245, 0.5);
  }
`;

const ForceOverflow = styled.div`
  min-height: 180px;
`;

const ScrollBar = ({ currentScene }: { currentScene: number }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 20,
        opacity: currentScene === 0 ? 0 : 1,
        transition: "opacity 1.5s"
      }}>
      <CustomScrollBar>
        <ForceOverflow />
      </CustomScrollBar>
    </Box>
  );
};
export default ScrollBar;
