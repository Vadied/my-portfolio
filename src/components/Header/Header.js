import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="app-header">
      <div className="logo"></div>
      {isOpen && <div className="navigation">
        <Link to="/">
          <div className="btn">Home</div>
        </Link>
        {/* <Link to="/services">
        <div className="btn">Servizi</div>
      </Link>
      <Link to="/portfolio">
        <div className="btn">Portfolio</div>
      </Link> */}
        <Link to="/contacts">
          <div className="btn">Contatti</div>
        </Link>
      </div>}
      <div className="btn menu" onClick={() => setOpen(!isOpen)}>
        <Hamburger toggled={isOpen} label="Show menu" />
      </div>
    </div>
  );
};

export default Header;
