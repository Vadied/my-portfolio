import React from "react";
import { keys } from "lodash";

import Gauge from "../Gauge/Gauge";

import { skills } from "./constant";

const buildGauge = (s, i) => <Gauge key={i} progress={s.value} img={s.img} />;

const renderSection = (skill, i) => {
  return (
    <div className="section container">
      <div className="title">{skill}</div>
      <div className="skill-gauge">{skills[skill].map(buildGauge)}</div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <div className="sub-header">
        <div className="text text-secondary">
          A<span className="text-color">BOUT ME</span>
        </div>
      </div>
      <div className="content">
        <div className="about-me">
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
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
