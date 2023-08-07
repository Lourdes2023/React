import styled from "styled-components";

export const AboutStylesContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  background: var(--color-back-seccion);
  padding: 50px 0;
  border-radius: 5px;
  text-align: center;
  width: 80%;
`;
export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 780px) {
  }
`;
export const AboutSectionConten = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 50px;
  margin-bottom: 50px;
  text-align: right;

  @media (max-width: 780px) {
    display: flex;
    justify-content: center;
    padding: 10px;
    flex-direction: column;
  }
  p {
    color: var(--color-text-light);
    font-size: 18px;
    @media (max-width: 780px) {
      font-size: 16px;
    }
  }
  h2 {
    color: #5c413f;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
  }
  .AboutText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: start;
    width: 50%;
    padding: 20px;
    @media (max-width: 780px) {
      width: 100%;
    }
  }

  .AboutImage {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #5c413f;
    width: 50%;
    @media (max-width: 780px) {
      width: 100%;
    }
  }
`;
