import React, { useEffect, useState } from "react";
import { keys } from "lodash";

import Gauge from "../Gauge/Gauge";
// import DfIcon from "../DfIcon/DfIcon";

import { windowSmall } from "../../js/constant";
import useViewport from "../../features/useViewport/useViewport";
import { skills, aboutMe } from "./constant";

const buildGauge = (s, i) => <Gauge key={i} progress={s.value} img={s.img} />;

const renderSection = (skill, i) => {
  return (
    <div className="section container" key={i}>
      <div className="title">{skill}</div>
      <div className="skill-gauge">{skills[skill].map(buildGauge)}</div>
    </div>
  );
};

const Home = () => {
  const [isSmall, setIsSmall] = useState(false);

  const { width } = useViewport();

  useEffect(() => {
    setIsSmall(width <= windowSmall);
  }, [width]);

  return (
    <div className="home">
      <div className="header sub-header">
        {/* <DfIcon /> */}
        <div className="text text-secondary">
          A<span className="text-color">BOUT ME</span>
        </div>
      </div>
      <div className="content">
        <div className={`about-me ${isSmall ? "small" : ""}`}>
          <div className="text">{aboutMe}</div>
          <div className="home-img"></div>
        </div>
        <div className="skills">
          <div className="title text-bold">SKILLS</div>
          {keys(skills).map(renderSection)}
        </div>
      </div>
    </div>
  );
};

export default Home;
