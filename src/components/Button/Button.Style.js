import { styled } from "styled-components";
import { motion } from "framer-motion";

export const ButtonStyle = styled(motion.button)`
  display: inline-block;
  background: var(--color-buttonEm-bg);
  color: white;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: var(--color-buttonEm-bg-hover);
  }
  @media (max-width: 980px) {
    font-size: 14px;
    padding: 8px;
  }
`;
