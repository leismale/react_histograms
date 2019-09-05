import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/rootReducer";

const intialState = {};
const middleware = [ReduxThunk];

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
});

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, intialState, enhancer);

export default store;
