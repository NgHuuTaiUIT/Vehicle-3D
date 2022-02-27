import React, { useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "rebass";

export default function Loading({ active = false }: { active: boolean }) {
  //   const [show, setShow] = useState(active);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setShow(false);
  //     }, 8000);
  //   }, [active]);

  if (!active) return null;

  return (
    <Box sx={{ display: active ? "block" : "none" }}>
      <LoadingBackground>
        <Loader></Loader>
      </LoadingBackground>
    </Box>
  );
}

const LoadingBackground = styled.div`
  position: fixed;
  z-index: 99999;
  background: linear-gradient(20deg, rgba(222, 184, 33, 1), #76adb0 98%);
  width: 100vw;
  height: 100vh;
`;

const AnimatedLoading = keyframes`
      0% {
        transform: scale(0);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }`;

const Loader = styled.div`
  border: 0 solid transparent;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:before,
  &:after {
    content: "";
    border: 1em solid white;
    border-radius: 50%;
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${AnimatedLoading} 2s linear infinite;
    opacity: 0;
  }
  &:before {
    animation-delay: 0.5s;
  }
`;
