// src/components/Logo.js
import React from "react";

const Logo = ({ width = 200, height = 60, color = "#222" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Miss Atelier Logo"
      role="img"
    >
      {/* Stylized M */}
      <text
        x="10"
        y="55"
        fontFamily="'Georgia', serif"
        fontWeight="700"
        fontSize="48"
        fill={color}
      >
        M
      </text>

      {/* Rest of the text */}
      <text
        x="60"
        y="55"
        fontFamily="'Georgia', serif"
        fontWeight="400"
        fontSize="36"
        fill={color}
      >
        iss
      </text>

      <text
        x="130"
        y="55"
        fontFamily="'Georgia', serif"
        fontWeight="700"
        fontSize="48"
        fill={color}
      >
        A
      </text>

      <text
        x="170"
        y="55"
        fontFamily="'Georgia', serif"
        fontWeight="400"
        fontSize="36"
        fill={color}
      >
        telier
      </text>
    </svg>
  );
};

export default Logo;
