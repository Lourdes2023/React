import { styled } from "styled-components";
import { motion } from "framer-motion";

export const ButtonStyle = styled(motion.button)`
  display: inline-block;
  padding: 10px 20px;
  background: var(--color-buttonEm-bg);
  color: var(--color-button-text);
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: var(--color-buttonEm-bg-hover);
  }
`;
