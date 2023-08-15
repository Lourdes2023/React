import React from "react";
import {
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcont,
  NavbarContainerStyled,
  Wrapper,
} from "./NavbarStyles";
import Logo from "../../assets/logo2.png";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <NavbarContainerStyled>
      <Wrapper>
        <div className="logoContainer">
          <a href="/#">
            <img
              src={Logo}
              alt=""
              style={{
                width: "50px",
              }}
            />
          </a>
          <h1>Cocheria Ratti</h1>
        </div>
        <MobileIcont>
          <LuMenu />
          {"  "}
        </MobileIcont>
        <Menu>
          <MenuItem>
            <MenuItemLink>Home</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>Nosotros</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>Servicios</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>Contacto</MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </NavbarContainerStyled>
  );
};

export default Navbar;
