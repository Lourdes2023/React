import React from "react";
import { useParams } from "react-router-dom";
import {
  ContainerInfoService,
  ContentInfoService,
  ContainerGallery,
} from "./ServiceStyles";
import { ServicesData } from "../../data/DataServices";
import { Example } from "../../components/Services/GallerySala/GallerySala";
import Logo from "../../assets/logo2.png";
const Service = () => {
  const { service } = useParams();
  const selectedService = ServicesData.find((item) => item.title === service);
  console.log(selectedService);
  if (!selectedService) {
    <ContainerInfoService>
      return <h2>Servicio no encontrado</h2>;
    </ContainerInfoService>;
  }

  const { title, description, imageUrl } = selectedService;

  return (
    <ContainerInfoService>
      <ContentInfoService>
        <h4>Servicio de {title}</h4>
        <img src={Logo} className="logo" alt="Logo" />
        <p>{description}</p>
        <img
          src={imageUrl}
          alt={title}
          style={{ maxWidth: "320", borderRadius: "8px", marginTop: "20px" }}
        />
      </ContentInfoService>
      <ContainerGallery>
        {title.includes("Salas de velatorio") ? (
          <div className="gallery ">
            <h4>{title}</h4>
            <img src={Logo} className="logo" alt="Logo" />
            <p>
              <i> Explora nuestra Sala Velatorio</i>, un espacio cuidadosamente
              preparado para brindar apoyo a las personas en momentos difíciles
            </p>
            <Example />
          </div>
        ) : (
          <div className="info">
            <h2>{title}</h2>
            <img src={Logo} className="logo" alt="Logo" />
            <p>
              Nuestra prioridad es brindar atención profesional y cuidadosa en
              momentos sensibles. Si desea obtener más información sobre cómo
              trabajamos y cómo podemos ayudarle, no dude en ponerse en contacto
              con nosotros. Estamos aquí para brindarle el apoyo que necesita.
            </p>
          </div>
        )}
      </ContainerGallery>
    </ContainerInfoService>
  );
};
export default Service;
