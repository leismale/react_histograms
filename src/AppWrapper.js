import React from "react";
import store from "./store";
import { Provider } from "react-redux";

import App from "./App.js";

const AppWrapper = () => (
  <Provider store={store}>
    <div className="app">
      <App />
    </div>
  </Provider>
);
export default AppWrapper;
