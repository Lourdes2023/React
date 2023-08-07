import React from "react";
import {
  ServicesContainer,
  ServicesWrapper,
  Service,
  ServiceTitle,
  ServiceDescription,
  ServiceImage,
} from "./ServicesStyles";
import { servicesData } from "../Data/DataServices";
const Services = () => {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        {servicesData.map((service) => (
          <Service key={service.id}>
            <ServiceImage src={service.imageUrl} alt={service.title} />
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </Service>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
