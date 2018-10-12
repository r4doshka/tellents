import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import configureStore from "./redux/configure-store";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { PersistGate } from "redux-persist/integration/react";

const history = createBrowserHistory();

const { persistor, store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App history={history} />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
