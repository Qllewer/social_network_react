import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux_store";
import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store = {store}>
  <App
    state={store.getState()}
    dispatch={store.dispatch.bind(store)}
  />
  </Provider>
);

serviceWorker.unregister();
