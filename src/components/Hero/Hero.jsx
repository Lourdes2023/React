import React from "react";
import { HeroContainer, HeroFlex, Herotext } from "./Hero.Styles";
import image2 from "../../assets/1.png";
import image1 from "../../assets/3.png";
import image3 from "../../assets/2.png";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <HeroContainer>
      <Herotext>
        <HeroFlex>
          {" "}
          <div>
            <img
              src={image1}
              alt="imagen1"
              style={{
                borderRadius: "5px",
              }}
            />
          </div>
          <p>
            Estamos a tu lado, brindándote apoyo junto a tu familia en este
            camino de despedida.
          </p>
          <div>
            <img
              src={image3}
              alt="imagen3"
              style={{
                borderRadius: "5px",
              }}
            />
          </div>
        </HeroFlex>
        <HeroFlex>
          <h1>Contáctanos y nos ocupamos de todo</h1>
          <span>
            Desde el primer momento en que nos llamas, nos encargamos de los
            trámites esenciales para dar inicio al servicio funerario.
          </span>
          <div>
            <Button>Urgencia 24hs</Button>
          </div>
        </HeroFlex>
        <HeroFlex>
          {" "}
          <img src={image2} alt="imagen2" />
          <p>
            {" "}
            Las palabras pueden no ser suficientes, por eso estamos aquí para
            brindarte nuestros servicios y productos que estan cuidadosamente
            diseñada para honrar la memoria de tus seres queridos
          </p>
        </HeroFlex>
      </Herotext>
    </HeroContainer>
  );
};

export default Hero;
