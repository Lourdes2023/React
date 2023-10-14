import React from "react";
import { ButtonContainerStyle, ButtonStyle } from "./ButtonStyled";
import { FiPhoneCall } from "react-icons/fi";

const Button = ({ children, disabled = false }) => {
  return (
    <ButtonContainerStyle>
      <ButtonStyle
        disabled={disabled}
        whileTap={{ scale: 1.1, transition: { duration: 0.2 } }}
        href="https://api.whatsapp.com/send?text=Buen%20día%20quisiera%20consultar%20sobre%20&amp;phone=5491140254010"
        target="_blank"
        title="Chatea con Nosotros"
      >
        <FiPhoneCall size={16} style={{ marginRight: "8px" }} />
        {children}
      </ButtonStyle>
    </ButtonContainerStyle>
  );
};

export default Button;
