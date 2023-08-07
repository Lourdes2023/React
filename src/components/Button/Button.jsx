import React from "react";
import { ButtonStyle } from "./Button.Style";

const Button = ({ children, disabled = "false" }) => {
  return (
    <ButtonStyle whileTap={{ scale: 5 }} children={children}></ButtonStyle>
  );
};

export default Button;
