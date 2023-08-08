import React from "react";
import { motion } from "framer-motion";
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
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Service>
              <ServiceImage src={service.imageUrl} alt={service.title} />
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </Service>
          </motion.div>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
