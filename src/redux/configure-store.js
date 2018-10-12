import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiMiddleware } from "redux-api-middleware";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [apiMiddleware, sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(persistedReducer, composeEnhancers(...enhancers));

  const persistor = persistStore(store);

  sagaMiddleware.run(sagas);

  return { persistor, store };
}
