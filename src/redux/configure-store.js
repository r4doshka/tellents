import { createStore, applyMiddleware, compose } from "redux";
import { apiMiddleware } from "redux-api-middleware";

export default function configureStore(reducers) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [apiMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(reducers, composeEnhancers(...enhancers));

  return store;
}
