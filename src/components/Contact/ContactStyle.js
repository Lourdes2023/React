import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  padding: 40px 0;
  background-color: var(--color-back-seccionlight);
`;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px 0;
  text-align: center;
  h2 {
    font-size: 24px;
    color: var(--color-secondary);
    margin-bottom: 20px;

    @media (max-width: 780px) {
      width: 80%;
      font-size: 20px;
    }
  }
  p {
    font-size: 18px;
    color: var(--color-muted-text);
    margin-bottom: 10px;
  }
`;

export const WhatsAppLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 290px;
  border-radius: 12px;
  margin-top: 10px;
  padding: 0 20px;
  padding: 0 20px;
  border: 5px solid white;
  padding: 20px;
  @media (max-width: 780px) {
    width: 70%;
    padding: 0 10px;
  }
  h1 {
    color: #537d8e;
    @media (max-width: 780px) {
      font-size: 18px;
    }
  }
  p {
    color: #5c413f;
    @media (max-width: 780px) {
      font-size: 16px;
    }
  }
`;
export const EmailLink = styled.a`
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
`;
