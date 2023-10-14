import styled from "styled-components";
import fondoAbout from "../../assets/AboutFondo.svg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  & h3 {
    font-size: 2rem;
    margin-top: 10vh;
    font-weight: 600;
    text-align: center;
    width: 50%;
    color: var(--color-secondary-blue);
    padding: 20px;
    @media (max-width: 780px) {
      font-size: 1.5rem;
    }
  }
`;

export const HeroSeccionContainer = styled(HomeContainer)``;
export const AboutStyledContainer = styled(HomeContainer)`
  background-image: url(${fondoAbout});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  & h3 {
    color: var(--color-back-body);
    font-size: 3em;
    font-weight: 800;
  }
  @media (max-width: 980px) {
    justify-content: center;
    align-items: center;
    background-position: 100%;
    background-size: 100%;
    & span {
      margin-left: 0;
      color: var(--color-back-body);
    }

    & h3 {
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`;
export const ServicesStylesContainer = styled(HomeContainer)`
  background: #335871;
  & h3 {
    color: var(--color-back-body);
  }
`;

export const ContactStyledContainer = styled(HomeContainer)`
  background-color: var(--color-back-About);
`;
export const ModalContactoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
