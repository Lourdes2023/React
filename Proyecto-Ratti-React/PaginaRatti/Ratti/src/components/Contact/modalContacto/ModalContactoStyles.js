import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalContactoStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 20%;
  left: 0;
  right: 0;
  overflow: hidden;
`;

export const BoxStyled = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 500px;
  border-radius: 12px;
  background: #d9d9d9;
  margin: 0;

  @media (max-width: 768px) {
    width: 260px;
    height: 500px;
  }
`;
export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-top: 50px;
`;

export const Button = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 70%;
  right: 50px;
  width: 70px;
  height: 50px;
  border-radius: 18px;
  border: none;
  background: linear-gradient(to bottom, #678d58, #8cb369);
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background: var(--color-primary-blue);
  }
  @media (max-width: 480px) {
    top: 70%;
    width: 50px;
    height: 50px;
  }
`;
export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  height: auto;
  border-radius: 18px;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  cursor: pointer;

  & p {
    font-size: 1.2em;
    color: white;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  & h1 {
    font-size: 2em;
  }
  @media (max-width: 480px) {
    & h1 {
      font-size: 1.5em;
    }
  }
`;
export const InfoContact = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  height: auto;
  border-radius: 18px;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  cursor: pointer;
  & p {
    font-size: 1rem;
    color: var(--color-back-Header);
    text-align: center;
    margin: 0;
    padding: 10px;
  }
  & a {
    text-decoration: none;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 10px;
  }
`;

export const IconContact = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #678d58;
  border-radius: 10px;
  padding: 10px;
`;
