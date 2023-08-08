import React from "react";
import { ButtonStyle } from "./Button.Style";
import { FiPhoneCall } from "react-icons/fi";

import { motion } from "framer-motion";
const Button = ({ children, disabled = false }) => {
  return (
    <ButtonStyle disabled={disabled}>
      <motion.span
        whileTap={{ scale: 1.1, color: "red", transition: { duration: 0.2 } }}
      >
        <FiPhoneCall size={20} style={{ marginRight: "8px" }} />
        {children}
      </motion.span>
    </ButtonStyle>
  );
};

export default Button;
