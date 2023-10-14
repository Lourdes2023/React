import React from "react";
import { HeroSeccionContainer, Herotext, HeroContainer } from "./HeroStyled";
import Button from "../UI/Button/Button";
import image from "../../assets/logo2.png";
const Hero = () => {
  return (
    <HeroSeccionContainer>
      <HeroContainer>
        <Herotext>
          <h1>
            DEJANOS CUIDARLO TODO <span>CONTACTANOS</span>
          </h1>
          <img src={image} alt="Imagen" />
          <p>
            Desde el primer momento en que nos llamas, nos encargamos de los
            trámites esenciales para dar inicio al servicio que corresponde.
          </p>
        </Herotext>
        <Button>LLAMANOS</Button>
      </HeroContainer>
    </HeroSeccionContainer>
  );
};

export default Hero;
