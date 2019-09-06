import React, { useState } from "react";

const HistogramRow = ({ colour, rowData, rowNumber, totalValue }) => {
  const [width, setWidth] = useState(0);
  // Calculate colour shades
  const shadeColour = (color, amount) => {
    return (
      "#" +
      color
        .replace(/^#/, "")
        .replace(/../g, color =>
          (
            "0" +
            Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(
              16
            )
          ).substr(-2)
        )
    );
  };

  // Colour fade from dark to light till row 5, then use the same colour in the rest of the rows
  const rowColour =
    rowNumber < 5
      ? shadeColour(colour, rowNumber * 20)
      : shadeColour(colour, 5 * 20);
  const title = rowData[0];
  const value = rowData[1];

  // Set width of the row in 100*rowNumber ms to make a transition
  setTimeout(() => {
    setWidth((100 / totalValue) * rowData[1]);
  }, 100 * rowNumber);

  const rowStyle = {
    backgroundColor: rowColour,
    transition: "width 300ms ease",
    width: `${width}%`
  };

  return (
    <div className="histogram__row">
      <div className="hisogram__row__title">
        <h2>{title}</h2>
      </div>
      <div className="hisogram__row__value">{value}</div>
      <div className="hisogram__row__bar" style={rowStyle}></div>
    </div>
  );
};

export default HistogramRow;
