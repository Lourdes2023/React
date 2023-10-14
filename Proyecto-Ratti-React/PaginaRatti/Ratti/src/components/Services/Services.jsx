import React from "react";

import {
  ServicesContainer,
  ServicesWrapper,
  Service,
  ServiceTitle,
  ServiceImage,
  LinkIten,
} from "./ServicesStyled";
import { ServicesData } from "../../data/DataServices";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        {ServicesData?.map((service) => {
          const { id, title, imageUrl } = service;
          return (
            <Service key={id}>
              <ServiceImage src={imageUrl} alt={service.title} />
              <ServiceTitle>{title}</ServiceTitle>
              <LinkIten to={`/services/${title}`}>Ver más</LinkIten>
            </Service>
          );
        })}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
