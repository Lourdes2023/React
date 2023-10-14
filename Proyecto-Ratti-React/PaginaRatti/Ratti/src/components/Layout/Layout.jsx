import { useEffect } from "react";
import { LayoutContainerStyled } from "./LayoutStyled";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <LayoutContainerStyled>{children}</LayoutContainerStyled>;
};

export default Layout;
