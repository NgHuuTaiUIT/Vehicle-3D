import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const animationRunway = keyframes`
 0%
{
  background-position-y: 640px;
}
100%
{
  background-position-y: 0px;
}`;

const Line = styled.div`
  position: relative;
  width: 800px;
  height: 20vh;
  margin-top: 16%;
  /* background: #1378bc; */
  /* border-left: 20px solid rgba(0, 0, 0, 0.25);
  border-right: 20px solid rgba(0, 0, 0, 0.25); */
  /* transform: rotateX(20deg); */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 80%;
    background: repeating-linear-gradient(
      transparent 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.1) 50%,
      #fff 70%,
      #fff 80%,
      rgba(255, 255, 255, 0.1) 100%
    );
    background-size: 30px 80px;
    animation: ${animationRunway} 10s linear infinite;
  }
`;

export default Line;
