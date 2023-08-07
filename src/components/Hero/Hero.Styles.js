import styled from "styled-components";

export const HeroContainer = styled.section`
  padding: 50px 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  h1 {
    width: 80%;
    color: var(--color-secondary);
    @media (max-width: 780px) {
      font-size: 18px;
      margin: 10px;
    }
  }
  @media (max-width: 780px) {
    padding: 10px 0px;
  }
`;

export const Herotext = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 780px) {
    & > *:nth-child(3n) {
      display: none;
    }
    display: flex;
  }
  & > *:nth-child(2n) {
    background-color: #f1f1f2; /* Cambia este color al que desees */
  }

  p {
    color: var(--color-button-text);
    font-size: 18px;
    font-weight: 300;
    padding: 10px;
    width: 80%;
    @media (max-width: 780px) {
      display: none;
    }
  }
  span {
    color: var(--color-text-dark);
    font-size: 18px;
    margin-bottom: 20px;
    padding: 10px;
    width: 80%;
    @media (max-width: 780px) {
      font-size: 14px;
    }
  }
  img {
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const HeroFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  text-align: center;
  width: 100%;
  background: var(--color-back-seccion);

  @media (max-width: 768px) {
  }
`;
