import React from "react";

const HistogramRow = ({ colour, rowData, rowNumber, totalValue }) => {
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

  const rowColour =
    rowNumber < 5
      ? shadeColour(colour, rowNumber * 20)
      : shadeColour(colour, 5 * 20);
  const title = rowData[0];
  const value = rowData[1];
  const width = (totalValue / 100) * rowData[1];

  const rowStyle = {
    backgroundColor: rowColour,
    width: `${width}%`
  };

  return (
    <div className="histogram__row">
      <div className="hisogram__row__title">{title}</div>
      <div className="hisogram__row__value" style={rowStyle}>
        {value}
      </div>
    </div>
  );
};

export default HistogramRow;
