import React from "react";
import HistogramRow from "./HistogramRow";

const Histogram = ({ data }) => {
  // Sort data by value asc
  const sortDataAsc = data =>
    Object.entries(data.data).sort((a, b) => b[1] - a[1]);

  // Get sum of values to calculate rows width
  const getTotalValue = data =>
    Object.values(data.data).reduce((e, acc) => e + acc);

  // Generate random color
  const generateColours = () =>
    "#" + (((1 << 24) * Math.random()) | 0).toString(16);

  let sortedData = sortDataAsc(data);
  let totalValue = getTotalValue(data);
  let colour = generateColours(data);

  return (
    <div className="histogram">
      <div className="histogram__title">{data.title}</div>
      <div className="histogram__content">
        {sortedData.map((row, index) => (
          <HistogramRow
            colour={colour}
            rowData={row}
            rowNumber={index}
            totalValue={totalValue}
            key={`${data.title}_${row[0]}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Histogram;
