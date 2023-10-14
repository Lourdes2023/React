import styled from "styled-components";
import imageContac from "../../assets/contact.svg";
import { motion } from "framer-motion";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 10vh;
  border-radius: 12px;

  & h1 {
    color: var(--color-backg-contact);
    font-size: 2.5rem;
    margin-bottom: 20px;
    padding: 20px;
    text-align: center;
    @media (max-width: 980px) {
      font-size: 1rem;
      margin: 0;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
  width: 90%;
  padding: 20px;
  & p {
    font-size: 1.2rem;
    color: var(--color-text-contact);
    margin-bottom: 20px;
    line-height: 1.5;
  }
  @media (max-width: 980px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const WhatsAppLink = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 320px;
  height: 100%;
  border-radius: 5px;
  background-image: url(${imageContac});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: var(--box-shadow-hover-color);
  & h2 {
    color: #f1efd4;
    font-size: 1.2em;
    text-align: center;
  }
  & p {
    padding: 20px;
    color: var(--color-text-contact);
    font-size: 1em;
  }
  @media (max-width: 980px) {
    margin-bottom: 20px;
    padding: 0;
    width: 80%;
  }
`;
export const DataContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 300px;
  background: var(--color-backg-contact);
  margin-bottom: 250px;
  & p {
    color: var(--color-text-contact);
    font-size: 0.8em;
    border-bottom: 0.5px solid #ffffffc0;
  }
  @media (max-width: 980px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

export const IconContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  & a {
    color: var(--color-text-contact);
    font-size: 1rem;
  }
`;

export const GoogMap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: auto;
  border-radius: 5px;
  box-shadow: var(--box-shadow-hover-color);
  background: var(--color-darkgray-contact);
  & img {
    width: 100%;
    border-radius: 5px;
  }
  & h2 {
    text-align: center;
    color: var(--color-text-contact);
    font-size: 1.2rem;
  }

  @media (max-width: 980px) {
    width: 80%;
  }
`;
export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--color-text-contact);
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;
