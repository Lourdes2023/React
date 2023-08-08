import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
  display: flex;
  justify-content: center;
  height: 150px;
  width: 100%;
  box-shadow: var(--color-shadow);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  height: 50px;
  @media (max-width: 986px) {
    display: none;
    position: absolute;
    top: 87px;
    left: 0;
    right: 0;
    height: 50vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    transition: 0.5s;
    background: #343434;
  }
`;

export const MenuItem = styled.li`
  height: 34px;
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--color-secondary);
  border-radius: 4px;
  margin: 0px 10px;
  transition: 0.5s all ease;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: var(--color-button-hover);
  }
`;

export const MobileIcont = styled.div`
  display: none;
  font-size: 2em;
  margin: 10px;

  @media (max-width: 986px) {
    display: block;
  }
`;
