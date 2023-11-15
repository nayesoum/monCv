import React from "react";
import { NavLink } from "react-router-dom";

const PorteFolio = () => {
  return (
    <div className="porteFolio">
      <div className="porteFolioContent">
        <h3>En cours de construction! 😉</h3>

        <NavLink exact to="/Home">
          <i className="bi bi-house-door-fill"></i>
          <span>Accueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default PorteFolio;
