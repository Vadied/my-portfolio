import React, { useState } from "react";
import { debounce } from "lodash";

const HomeMask = () => {
  const [isOpen, setIsOpen] = useState(true);
  debounce(() => setIsOpen(false), 3000)();

  return (
    <div className={`home-mask ${isOpen ? "in" : "out"}`}>
      <div className="section first">
        <div className="home-text">
          <span className="initial initial-1 text-primary">D</span>AVIDE
        </div>
      </div>
      <div className="section second">
        <div className="home-text text-secondary">
          <span className="initial initial-2">F</span>ILIPPI
        </div>
      </div>
    </div>
  );
};

export default HomeMask;
