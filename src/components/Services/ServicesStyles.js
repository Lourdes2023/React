import styled from "styled-components";

export const ServicesContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px 0;
  width: 80%;
  h1 {
    padding: 1rem;
    margin-bottom: 10vh;
    font-size: 2rem;
    color: var(--color-secondary);
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  width: 80%;

  @media (min-width: 768px) {
    grid-template-columns: no-repeat(3, 1fr);
  }
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 290px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
`;

export const ServiceImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const ServiceTitle = styled.h3`
  font-size: 18px;
  color: var(--color-secondary);
  margin-bottom: 10px;
`;

export const ServiceDescription = styled.p`
  font-size: 14px;
  color: var(--color-text-dark);
`;
