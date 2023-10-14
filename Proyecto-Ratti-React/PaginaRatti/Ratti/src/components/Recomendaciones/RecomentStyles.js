import styled from "styled-components";
import { motion } from "framer-motion";

export const CardStyles = styled(motion.div)`
  font-size: 164px;
  width: 390px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
    0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
  transform-origin: 10% 60%;
  & img {
    width: 100%;
    height: 100%;
  }

  & :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    width: 100%;
    height: auto;
  }
`;
export const CardContainer = styled(motion.div)`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  position: relative;
  padding-top: 20px;
  margin-bottom: -20px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Splash = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  -webkit-clip-path: path(
    "M 0 146.5 C 0 157.546 8.995 164.899 20 166.5 L 460 230.5 C 470.085 231.967 480 221.546 480 210.5 L 500 20 C 500 8.954 491.046 0 480 0 L 20 0 C 8.954 0 0 8.954 0 20 Z"
  );
  clip-path: path(
    "M 0 146.5 C 0 157.546 8.995 164.899 20 166.5 L 460 230.5 C 470.085 231.967 480 221.546 480 210.5 L 500 20 C 500 8.954 491.046 0 480 0 L 20 0 C 8.954 0 0 8.954 0 20 Z"
  );

  @media (max-width: 768px) {
    clip-path: none;
    border-radius: 20px;
  }
`;
