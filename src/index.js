import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux_store";
import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App
				state={store.getState()}
				dispatch={store.dispatch.bind(store)}
			/>
		</BrowserRouter>
	</Provider>
);

serviceWorker.unregister();
