import {
  ContactContainer,
  InfoContainer,
  WhatsAppLink,
  DataContactContainer,
  IconContainer,
  GoogMap,
  MapContainer,
} from "./ContactStyled";
import { SiGooglemaps } from "react-icons/si";
import { FaPhone, FaMobile, FaWhatsapp } from "react-icons/fa";
import Image from "../../assets/imgSalaVelatoria/12.svg";
function Contact() {
  return (
    <ContactContainer>
      <h1>No dudes en ponerte en contacto con nosotros</h1>
      <InfoContainer>
        <WhatsAppLink whileHover={{ scale: 1.1 }}>
          <h2>¡Estamos aquí para Atenderte!</h2>
          <p>
            Contactanos por Whatsapp o por teléfono. <br /> <br />
          </p>
          <DataContactContainer>
            <IconContainer
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp size={40} color="green" />
              <a
                className="whatsapp-btn"
                href="https://api.whatsapp.com/send?text=Buen%20día%20quisiera%20consultar%20sobre%20&amp;phone=5491140254010"
                target="_blank"
                title="Chatea con Nosotros"
              >
                Envianos un mensaje
              </a>
            </IconContainer>
            <IconContainer
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <p>
                <FaMobile /> <a href="tel:+541140254010">Cel: 11 4025-4010</a>
              </p>
            </IconContainer>
            <IconContainer
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <p>
                <FaPhone /> <a href="tel:+541160832758">Tel: 11 6083-2758</a>
              </p>
            </IconContainer>
          </DataContactContainer>
        </WhatsAppLink>
        <GoogMap whileHover={{ scale: 1.1 }}>
          <h2> Encontranos en Ituzaingo</h2>
          <img src={Image} alt="Cocheria" />
          <MapContainer>
            <p>
              <a href="https://maps.app.goo.gl/VqhNPBZBfgUWyzfD9">
                <SiGooglemaps size={40} color=" green" />
              </a>
              Int. Carlos Ratti 1402, Ituzaingó.
              <br /> Provincia de Buenos Aires.
            </p>{" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.156821971835!2d-58.686393523461334!3d-34.65074225998464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbfb1eaf9801f%3A0x3dffe6d8b9484e69!2sCocheria%20Ratti!5e0!3m2!1ses-419!2sar!4v1697282691016!5m2!1ses-419!2sar"
              width="220"
              height="240"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
        </GoogMap>
      </InfoContainer>{" "}
    </ContactContainer>
  );
}

export default Contact;
