import React from "react";
import Histogram from "./Histogram";

const HistogramContainer = props => (
  <div className="histogram__container">
    {props.data.map(element => (
      <Histogram data={element} key={element.title} />
    ))}
  </div>
);

export default HistogramContainer;
