import React from "react";
import Modal from "@mui/material/Modal";
import { StyledModalBox, StyledModalButton } from "./UserStyles";
import CustomAvatar from "./CustomAvatar";
import { StyledListItem } from "./UserStyles";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const UserMenu = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false);

  const handleLinkClick = () => {
    dispatch(!hiddenMenu());
  };

  return (
    <div>
      <StyledModalButton onClick={() => setHiddenMenu(true)}>
        <CustomAvatar />
      </StyledModalButton>
      <Modal open={hiddenMenu} onClose={() => setHiddenMenu(false)}>
        <StyledModalBox>
          <h2>Menú</h2>
          <ul>
            <StyledListItem onClick={handleLinkClick}>
              <NavLink to="/TramitePostFuneral">Trámite Post-Funeral</NavLink>
            </StyledListItem>
            <StyledListItem onClick={handleLinkClick}>
              <NavLink to="/QueHacerAnteUnaDefuncion">
                Qué hacer ante unas defunción
              </NavLink>
            </StyledListItem>
            <StyledListItem onClick={handleLinkClick}>
              <NavLink to="/Seguros">Planificar en vida</NavLink>
            </StyledListItem>
          </ul>
        </StyledModalBox>
      </Modal>
    </div>
  );
};

export default UserMenu;
