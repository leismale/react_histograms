import React from "react";

import data from "./data.json";

import HistogramContainer from "./views/histogram/HistogramContainer.js";

const App = () => (
  <div className="app">
    <HistogramContainer data={data} />
  </div>
);
export default App;
