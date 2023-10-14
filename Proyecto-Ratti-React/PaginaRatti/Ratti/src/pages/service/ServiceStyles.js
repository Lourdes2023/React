import styled from "styled-components";

export const ContainerInfoService = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #335871;
  width: 80%;
`;

export const ContentInfoService = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 17vh;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  & h4 {
    color: var(--color-primary-blue);
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
  & p {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.6;
    text-align: center;
  }
  & img {
    width: 500px;
    height: auto;
    border-radius: 8px;
  }
  .logo {
    width: 90px;
    height: auto;
    border-radius: 8px;
  }
`;
export const ContainerGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 17vh;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  margin-bottom: 10vh;
  & p {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.6;
    text-align: center;
    color: var(--color-back-Header);
    width: 50%;
    padding: 10px;
  }
  & h4 {
    color: var(--color-primary-blue);
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }
  .gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    padding: 20px;
    width: 80%;
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    padding: 20px;
    width: 80%;
  }
`;
