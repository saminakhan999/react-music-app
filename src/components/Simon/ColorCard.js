import React from "react";


export default function ColorCard({ color, onClick, flash }) {
  return (
    <div
      onClick={onClick}
      className={`colorCard-${color} ${color} ${flash ? "flash" : ""}`}
    ></div>
  );
}
