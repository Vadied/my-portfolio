import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app-header">
      <Link to="/">
        <div className="btn">Home</div>
      </Link>
      <Link to="/services">
        <div className="btn">Servizi</div>
      </Link>
      <Link to="/portfolio">
        <div className="btn">Portfolio</div>
      </Link>
      <Link to="/contacts">
        <div className="btn">Contatti</div>
      </Link>
    </div>
  );
};

export default Header;
