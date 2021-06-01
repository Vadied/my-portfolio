import React, { useState, useEffect } from "react";
import { SiLinkedin } from "react-icons/si";

import Message from "./Message";

import { windowSmall } from "../../js/constant";
import useViewport from "../../features/useViewport/useViewport";

const Contacts = () => {
  const [isSmall, setIsSmall] = useState(false);

  const { width } = useViewport();

  useEffect(() => {
    setIsSmall(width <= windowSmall);
  }, [width]);

  return (
    <div className={`contacts ${isSmall ? "small" : ""}`}>
      <div className="info">
        <div className="title">
          <span className="text-primary">C</span>ontatti
        </div>
        <div className="email">dev.filippi@gmail.com</div>
        <div className="phone">3487164378</div>
        <div className="social">
          FOLLOW ME
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/davide-filippi-b474b7133/"
          >
            <div className="btn btn-primary">
              <SiLinkedin />
            </div>
          </a>
        </div>
      </div>
      <Message />
    </div>
  );
};

export default Contacts;
