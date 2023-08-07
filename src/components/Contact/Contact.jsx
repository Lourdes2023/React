import React from "react";
import { ContactContainer, InfoContainer, WhatsAppLink } from "./ContactStyle";

const Contact = () => {
  return (
    <ContactContainer>
      <InfoContainer>
        <h2>Contacta a Nuestro Equipo</h2>

        <WhatsAppLink>
          <h1>¡Estamos aquí para Atenderte!</h1>
          <p>
            No dudes en ponerte en contacto con nosotros. Estamos listos para
            asistirte.
          </p>
          <a
            class="whatsapp-btn"
            href="https://api.whatsapp.com/send?text=Buen%20día%20quisiera%20consultar%20sobre%20&amp;phone=5491150164945
"
            target="_blank"
            title="Chatea con Nosotros"
          >
            <img
              src="https://irp.cdn-website.com/738820e6/dms3rep/multi/Whatsapp_Icon2.png"
              border="0"
              style={{ width: "60px" }}
            />
          </a>
        </WhatsAppLink>
        <p>Int. Carlos Ratti 1402, Ituzaingo, Provincia de Buenos Aires </p>
      </InfoContainer>
    </ContactContainer>
  );
};

export default Contact;
