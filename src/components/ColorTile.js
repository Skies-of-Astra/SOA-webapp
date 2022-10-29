import React from "react";

const ColorTile = (props) => {
  return (
    <div className="flex_col">
      <div
        className="color_tile"
        style={{ background: `${props.color}` }}
      ></div>
      <p>{props.children}</p>
    </div>
  );
};

export default ColorTile;
