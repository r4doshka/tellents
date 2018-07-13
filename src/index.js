import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

import rootReducer from "./redux/reducers";
import configureStore from "./redux/configure-store";

const store = configureStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
