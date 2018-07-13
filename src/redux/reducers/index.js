import { combineReducers } from "redux-immutable";

import authReducer from "./auth-reducer";
import errorsReducer from "./errors-reducer";

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer
});
