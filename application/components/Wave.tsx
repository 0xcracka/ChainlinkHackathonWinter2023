import React from "react";

const Wave: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-blue-800">
      <div className="wave" style={{ height: "150px", position: "relative" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C150.00,150.00 271.49,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#ffffff" }}
          ></path>
          <path
            d="M0.00,49.98 C150.00,150.00 271.49,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#ffffff" }}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Wave;
