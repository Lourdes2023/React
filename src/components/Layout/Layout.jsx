import React from "react";
import { LayoutStyle } from "./LayoutStyles";

const Layout = ({ children }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
