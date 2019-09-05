import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchData } from "./actions/dataActions";

import HistogramContainer from "./views/histogram/HistogramContainer.js";

const App = props => {
  useEffect(() => {
    props.fetchData("data");
  }, [props.fetchData]);

  return (
    <div className="app">
      <HistogramContainer data={props.data} />
    </div>
  );
};

App.propTypes = {
  data: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  data: state.appReducer.data
});

export default connect(
  mapStateToProps,
  { fetchData }
)(App);
