import { useState } from "react";
import { AiOutlineMessage, AiOutlineClose } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { MdPhoneCallback } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import {
  ModalContactoStyles,
  BoxStyled,
  Controls,
  Button,
  MessageContainer,
  InfoContact,
  IconContact,
} from "./ModalContactoStyles";
const show = {
  display: "block",
};
const hide = {
  transitionEnd: {
    display: "none",
  },
};

const ModalContact = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <ModalContactoStyles>
      <BoxStyled animate={isVisible ? show : hide}>
        <MessageContainer>
          <h1>¡Hola!</h1>
          <p>¿Tenés alguna duda?</p>
          <InfoContact>
            <p>¡Escribinos!</p>
            <IconContact whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="https://api.whatsapp.com/send?text=Buen%20día%20quisiera%20consultar%20sobre%20&amp;phone=5491140254010">
                <BsWhatsapp color="white" />
              </a>
            </IconContact>

            <p>¡Llamanos!</p>
            <IconContact whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="tel:+541160832758">
                <MdPhoneCallback color="white" />
              </a>
            </IconContact>

            <p>¡Visitanos Personalmente!</p>
            <IconContact whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="https://maps.app.goo.gl/3SWPrp1kNUEjqo2S8">
                <SiGooglemaps color="white" />
              </a>
            </IconContact>
          </InfoContact>
        </MessageContainer>
      </BoxStyled>
      <Controls>
        {" "}
        <Button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <>
              <span>
                {" "}
                <AiOutlineClose />
              </span>
            </>
          ) : (
            <>
              <span>
                <AiOutlineMessage size={40} />
              </span>
            </>
          )}
        </Button>
      </Controls>
    </ModalContactoStyles>
  );
};

export default ModalContact;
