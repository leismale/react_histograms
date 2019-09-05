import React from "react";
import { render } from "react-dom";

import "./index.scss";
import * as serviceWorker from "./serviceWorker";

import AppWrapper from "./AppWrapper";

render(<AppWrapper />, document.getElementById("root"));

serviceWorker.unregister();
