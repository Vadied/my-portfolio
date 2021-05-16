import React from "react";

import Gauge from "../Gauge/Gauge";

const skills = [
  { label: "test", value: 50, stroke: 10 },
  { label: "test2", value: 10, stroke: 20 },
  { label: "test3", value: 60, stroke: 30 },
];
const buildGauge = (s, i) => (
  <Gauge key={i} radius={100} stroke={25} progress={s.value} label={s.label} />
);

const Home = () => {
  return (
    <div className="home">
      <div className="home-area first">
        <div className="home-text">
          <div>
            <span className="text-primary">D</span>AVIDE
          </div>
        </div>
      </div>
      <div className="home-area second">
        <div className="home-text">
          <div>
            <span className="text-secondary">FILIPPI</span>.
          </div>
          <div>
            <span className="text-secondary">A</span>BOUT ME
          </div>
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
          <div className="skills-container">
            {skills.map(buildGauge)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
