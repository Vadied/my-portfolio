import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

import useViewport from "../../features/useViewport/useViewport";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  const { width } = useViewport();
  const breakpoint = 620;

  useEffect(() => {
    setIsSmall(width <= breakpoint);
  });

  const menuClass = `navigation ${isSmall ? "dropdown-menu" : ""} ${
    isOpen ? "show" : "hidden"
  }`;

  return (
    <div className="header header-app">
      <div className="logo"></div>
      <div className={menuClass}>
        <Link to="/">
          <div className="btn">Home</div>
        </Link>
        <Link to="/contacts">
          <div className="btn">Contatti</div>
        </Link>
      </div>
      {isSmall && (
        <div className="btn btn-primary menu" onClick={() => setOpen(!isOpen)}>
          <Hamburger toggled={isOpen} label="Show menu" />
        </div>
      )}
    </div>
  );
};

export default Header;
