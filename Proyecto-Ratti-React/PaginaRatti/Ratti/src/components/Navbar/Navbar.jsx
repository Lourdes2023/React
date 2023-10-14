import Logo from "../../assets/logo2.png";
import { FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import {
  LoginContainer,
  LogoContainer,
  MenuLinkContainer,
  MenuLink,
  NavbarContainer,
  NavbarContainerStyled,
  NavbarLinkStyled,
  UserNameStyles,
  ButtonStyles,
  IconContainerStyles,
} from "./NavbarStyles";
import UserMenu from "./UserMenu/UserMenu";
import { FaChevronCircleUp } from "react-icons/fa";
import { useState } from "react";
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 20,
  },
};

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainerStyled>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
        <h3>
          Cocheria
          <br /> Ratti
        </h3>
      </LogoContainer>{" "}
      <NavbarContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu"
      >
        <MenuLinkContainer
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <NavbarLinkStyled variants={itemVariants}>
            <MenuLink
              to={"/"}
              className={location.pathname === "/" ? "active" : ""}
            >
              <p>Home</p>
            </MenuLink>
          </NavbarLinkStyled>
          <NavbarLinkStyled variants={itemVariants}>
            <MenuLink
              to={"/About"}
              className={location.pathname === "/About" ? "active" : ""}
            >
              <p>Nosotros</p>
            </MenuLink>
          </NavbarLinkStyled>
          <NavbarLinkStyled variants={itemVariants}>
            <MenuLink
              to={"/Services"}
              className={location.pathname === "/Services" ? "active" : ""}
            >
              <p>Servicios</p>
            </MenuLink>
          </NavbarLinkStyled>
          <NavbarLinkStyled variants={itemVariants}>
            <MenuLink
              to={"/Contact"}
              className={location.pathname === "/Contact" ? "active" : ""}
            >
              <p>Contacto</p>
            </MenuLink>
          </NavbarLinkStyled>
          <LoginContainer>
            <UserNameStyles>
              <UserMenu />
            </UserNameStyles>
          </LoginContainer>
        </MenuLinkContainer>
        <ButtonStyles
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
        >
          <IconContainerStyles
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <FaChevronCircleUp size={18} />
          </IconContainerStyles>
        </ButtonStyles>
      </NavbarContainer>
    </NavbarContainerStyled>
  );
};

export default Navbar;
