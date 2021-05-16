import React from "react";

const Gauge = ({ radius, stroke, progress, label = "" }) => {
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="gauge">
      <svg className="progress-ring" height={radius * 2} width={radius * 2}>
        <circle
          className="progress-ring__circle"
          stroke="white"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="value text-bold center-content">{progress}%</div>
      {label && <div className="label center-content">{label}</div>}
    </div>
  );
};

export default Gauge;
