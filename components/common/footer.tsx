import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Flex } from "rebass";
import { Float } from "../springs/float";
import { FloatImage } from "../springs/float-image";
import MenuIcon from "./menu-icon";
import Title from "./title";

type Props = {};
const AniamtionFloatImage = keyframes`
        0% {
          height: 0;
        }

        1% {
          height: 0;
        }

        100% {
          height: 100px;
        }
`;
// const FloatImage = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: flex-end;
//   height: 100px;
//   overflow: hidden;
//   display: flex;
//   align-items: flex-end;
//   animation: ${AniamtionFloatImage} 0.2s ease-out;
//   animation-delay: 3.8s;
// `;

const Footer = (props: Props) => {
  const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding: 0.5rem 0;
    margin: 0.8rem 0 0 0;
    width: 5.3125rem;
    height: 2.125rem;
    background: transparent;
    color: white;
    font-weight: bold;
    border: 2px solid rgba(255, 255, 255, 0.7);
  `;
  return (
    <Flex
      sx={{
        justifyContent: "flex-start",
        mt: "30.5%",
        width: "100%",
        height: "50%",
        fontSize: "0.7rem"
      }}>
      <Box>
        <Float
          open={true}
          sx={{ overflow: "visible" }}
          delay={0}
          duration={1000}>
          <Box>
            <Title size={10}>KEEP THE WORLD</Title>
            <Title size={10} sx={{ lineHeight: "1.3rem" }}>
              ADVENTUROUS FOREVER
            </Title>
          </Box>
        </Float>
        <Float
          open={true}
          sx={{ overflow: "visible" }}
          delay={300}
          duration={1000}>
          <Button>EXPLORE</Button>
        </Float>
      </Box>
      <Box sx={{ ml: "12%", mt: "4%" }}>
        <MenuIcon />
      </Box>

      <Flex
        sx={{
          width: "50%",
          position: "absolute",
          bottom: "22%",
          right: 0,
          justifyContent: "end"
        }}>
        <FloatImage
          src="/asset/images/map.png"
          show={true}
          duration={800}
          delay={800}
          pt="60%"
        />
      </Flex>
    </Flex>
  );
};

export default Footer;
