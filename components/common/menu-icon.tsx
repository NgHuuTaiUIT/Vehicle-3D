import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { Flex } from "rebass";
import Icon1 from "../../asset/chart-arcs-3.svg";
import { TrailIcons } from "../springs/float-icons";
import { useSpring, animated } from "react-spring";
type Props = {};

const Circle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  /* padding: 0.5rem 0; */
  /* margin: 0.5rem 1rem; */
  width: 3.125rem;
  height: 3.125rem;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.7);
`;

const CircleAnimation = ({
  delay,
  show,
  children
}: {
  delay?: number;
  show?: boolean;
  children?: ReactNode;
}) => {
  const headAnimated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration: 1000 },
    opacity: show ? 1 : -1,
    transform: show ? `translateY(0px)` : `translateY(50px)`,
    // height: show ? 110 : 0,
    delay,
    from: {
      opacity: -1,
      height: "50px",
      transform: `translateY(50px)`,
      overflow: "hidden"
    }
  });
  return <animated.div style={{ ...headAnimated }}>{children}</animated.div>;
};

const MenuIcon = (props: Props) => {
  const show = true;

  return (
    <Flex sx={{ gap: "1.4rem" }}>
      <CircleAnimation show delay={100}>
        <Circle>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.03003 12.815V20.015C4.03003 21.1196 4.92546 22.015 6.03003 22.015H18.03C19.1346 22.015 20.03 21.1196 20.03 20.015V12.815"
              stroke="#F5F4E9"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.1917 18C13.9097 18 15.7814 16.356 16 12V11H14.2454C10.3114 11 9.00612 13 9 15.5C9 16 9 17 9.87424 18H11.1856H11.1917Z"
              stroke="#F5F4E9"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 19C9.28571 16.75 10.4286 15 13 14"
              stroke="#F5F4E9"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.33104 11.2567C0.920525 11.6262 0.887247 12.2585 1.25671 12.669C1.62616 13.0795 2.25845 13.1128 2.66896 12.7433L1.33104 11.2567ZM12 3L12.669 2.25671L12 1.65464L11.331 2.25671L12 3ZM21.331 12.7433C21.7415 13.1128 22.3738 13.0795 22.7433 12.669C23.1128 12.2585 23.0795 11.6262 22.669 11.2567L21.331 12.7433ZM2.66896 12.7433L12.669 3.74329L11.331 2.25671L1.33104 11.2567L2.66896 12.7433ZM11.331 3.74329L21.331 12.7433L22.669 11.2567L12.669 2.25671L11.331 3.74329Z"
              fill="#F5F4E9"
            />
          </svg>
        </Circle>
      </CircleAnimation>
      <CircleAnimation show delay={600}>
        <Circle>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.1182 16.5219C21.4004 12.7822 20.1461 8.62235 17.0295 6.27818C13.9129 3.93401 9.66793 3.95764 6.57628 6.33636C3.48464 8.71509 2.27442 12.8887 3.59609 16.6139"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 13.5H14.8494V15.5C14.8494 16.6046 13.9764 17.5 12.8996 17.5H10.9498C9.87295 17.5 9 16.6046 9 15.5V13.5Z"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9247 20.5V17.5"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.97475 13.5V11"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.8744 13.5V11"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 9.76689C10.6364 6.56689 15.1818 8.43355 17 9.76689"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Circle>
      </CircleAnimation>
      <CircleAnimation show delay={800}>
        <Circle>
          <svg
            width="30"
            height="30"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="17"
              cy="16.9999"
              r="1"
              transform="rotate(135.586 17 16.9999)"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.5715 13.5008C18.639 11.5283 15.4733 11.4959 13.5008 13.4285C11.5284 15.361 11.496 18.5267 13.4285 20.4992C15.3611 22.4716 18.5268 22.504 20.4992 20.5715"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.2986 23.4287C20.4668 26.2029 16.1533 26.7976 12.6765 24.8931C9.19972 22.9886 7.37847 19.0335 8.19166 15.1535C9.00485 11.2736 12.261 8.38264 16.2099 8.0345C18.1675 7.8842 22.5361 8.52397 24.3502 12.2855"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.9311 12.114L21.2868 14.7957C19.1814 15.796 18.9713 18.7104 20.9114 20.0024L25.9398 23.3509"
              stroke="white"
              strokeWidth="1"
            />
            <path
              d="M25.7577 8.79626L25.0279 9.47992L25.7577 8.79626ZM8.24233 25.2039L7.51253 25.8876L8.24233 25.2039ZM8.24233 25.2039L7.51253 25.8876L8.24233 25.2039ZM25.7577 8.79626L25.0279 9.47992L25.7577 8.79626ZM9.47985 8.97221C13.9135 4.81893 20.8746 5.04624 25.0279 9.47992L26.4875 8.11261C21.5791 2.87281 13.3523 2.60417 8.11254 7.51259L9.47985 8.97221ZM8.97214 24.5203C4.81886 20.0866 5.04617 13.1255 9.47985 8.97221L8.11254 7.51259C2.87274 12.421 2.6041 20.6478 7.51253 25.8876L8.97214 24.5203ZM24.5202 25.028C20.0865 29.1813 13.1254 28.9539 8.97214 24.5203L7.51253 25.8876C12.4209 31.1274 20.6477 31.396 25.8875 26.4876L24.5202 25.028ZM25.8875 26.4876C31.1273 21.5792 31.3959 13.3524 26.4875 8.11261L25.0279 9.47992C29.1812 13.9136 28.9539 20.8747 24.5202 25.028L25.8875 26.4876Z"
              fill="white"
            />
          </svg>
        </Circle>
      </CircleAnimation>
    </Flex>
  );
};

export default MenuIcon;
