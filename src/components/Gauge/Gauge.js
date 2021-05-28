import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const Gauge = ({ progress, img = "" }) => {
  const styles = {
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `rgba(62, 152, 199, ${progress / 100})`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: "butt",
      // Customize transition animation
      transition: "stroke-dashoffset 0.5s ease 0s",
      // Rotate the path
      transformOrigin: "center center",
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: "#d6d6d6",
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: "butt",
      // Rotate the trail
      transformOrigin: "center center",
    },
  };
  return (
    <div className="gauge">
      <CircularProgressbarWithChildren
        value={progress}
        styles={styles}
      >
        <div className={`image ${img}`}></div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Gauge;
